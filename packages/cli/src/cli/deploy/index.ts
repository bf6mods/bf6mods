import fs from "node:fs";
import path from "node:path";
import { Clients, Generated_pb } from "@bf6mods/portal";
import { AttachmentType, type ConfigType } from "@bf6mods/sdk";
import colors from "colors";
import { getBf6Config } from "../build/index.ts";
import { printToConsole } from "../utils.ts";
import { alwaysAuthenticatedRequest } from "./authenticate.ts";
import { buildDesignPayload, isScriptControlledTeams } from "./payload.ts";

export const clients = new Clients();

const EXPERIENCE_URL =
	"https://portal.battlefield.com/bf6/experience/settings/mode?id=";

export async function deploy({
	input,
	sessionIdParam,
	publish,
	modId,
	dryRun,
}: {
	input?: string;
	sessionIdParam?: string;
	publish?: boolean;
	modId?: string;
	dryRun?: boolean;
}) {
	const rootDir = path.resolve(".");
	if (!input) input = path.resolve(rootDir, "dist", "mod.json");
	printToConsole(`🚀 Starting deploy for ${colors.cyan(input)}…`);
	if (!fs.existsSync(input))
		return printToConsole(
			`${colors.red.bold("✗")} File ${colors.cyan(input)} does not exist!`,
			true,
		);
	const mod = JSON.parse(
		fs.readFileSync(input, { encoding: "utf-8" }),
	) as ConfigType;
	if (!mod.mapRotation?.length)
		throw new Error("You must specify at least one map!");

	const blueprints = await alwaysAuthenticatedRequest(
		() => clients.play.getScheduledBlueprints({}),
		sessionIdParam,
	);
	const { blueprints: allBlueprints } = await alwaysAuthenticatedRequest(
		() =>
			clients.play.getBlueprintsById({
				blueprintIds: blueprints.blueprintIds,
			}),
		sessionIdParam,
	);
	const blueprint = allBlueprints[0];
	if (!blueprint)
		throw new Error("No Portal blueprint available, cannot deploy.");

	const config = await getBf6Config(rootDir);
	let id: string | undefined = modId;
	if (!config)
		printToConsole(
			`Cannot find bf6mods config in dir ${rootDir}, proceeding without it.`,
		);
	else if (config?.id) id = config.id;
	else
		printToConsole(
			`No id specified in bf6.config.ts! Defaulting to experience with same name!`,
		);

	if (!id) {
		const owned = await alwaysAuthenticatedRequest(
			() =>
				clients.play.getOwnedPlayElementsV2({
					includeDenied: true,
					publishStates: [
						Generated_pb.PublishStateType.Draft,
						Generated_pb.PublishStateType.Published,
						Generated_pb.PublishStateType.Error,
					],
				}),
			sessionIdParam,
		);
		const found = owned.playElements.find(
			(element) => element?.playElement?.name === mod.name,
		);
		if (found?.playElement?.id) id = found.playElement.id;
	}

	const existing = id
		? await alwaysAuthenticatedRequest(
				() => clients.play.getPlayElement({ id, includeDenied: true }),
				sessionIdParam,
			)
		: undefined;
	if (id && !existing?.playElement)
		throw new Error(`Cannot find an experience with id ${id}`);

	const thumbnailUrl =
		(await uploadThumbnail(rootDir, sessionIdParam)) ??
		existing?.playElement?.thumbnailUrl;

	const design = buildDesignPayload(
		mod,
		blueprint,
		existing?.playElementDesign?.attachments ?? [],
	);

	// Keep whatever the experience already had unless the script clearly assigns teams
	const teamAssignment = isScriptControlledTeams(mod)
		? Generated_pb.TeamAssignmentKind.FB_ASSIGNED_TEAMS
		: existing?.playElementDesign?.teamAssignment ||
			Generated_pb.TeamAssignmentKind.BLAZE_ASSIGNED_TEAMS;

	let publishState =
		existing?.playElement?.publishStateType ??
		Generated_pb.PublishStateType.Draft;
	if (publish) publishState = Generated_pb.PublishStateType.Published;
	else if (publishState === Generated_pb.PublishStateType.Error)
		publishState = Generated_pb.PublishStateType.Draft;

	const shared = {
		name: mod.name,
		description: mod.description,
		...design,
		playElementSettings: {
			allowCopies:
				existing?.playElement?.playElementSettings?.allowCopies ?? false,
		},
		publishState,
		thumbnailUrl,
		teamAssignment,
	};

	if (dryRun) {
		const summary = {
			...shared,
			id,
			attachments: shared.attachments?.map((a) => ({
				...a,
				attachmentData: `<${a.attachmentData?.original?.length ?? 0} bytes>`,
			})),
		};
		printToConsole(colors.yellow("Dry run, not sending:"));
		console.log(JSON.stringify(summary, null, 2));
		return;
	}

	let result: Generated_pb.PlayElementResponse;
	if (existing?.playElement) {
		printToConsole(`⬆ Updating experience ${colors.cyan(mod.name)}…`);
		result = await alwaysAuthenticatedRequest(
			() => clients.play.updatePlayElement({ id, ...shared }),
			sessionIdParam,
		);
	} else {
		printToConsole(`✨ Creating experience ${colors.cyan(mod.name)}…`);
		result = await alwaysAuthenticatedRequest(
			() => clients.play.createPlayElement(shared),
			sessionIdParam,
		);
	}

	// Attachments we did not send again are no longer part of the mod
	const sentIds = new Set(design.attachments?.map((a) => a.id));
	const ownedTypes: number[] = [
		AttachmentType.SpatialData,
		AttachmentType.TypeScript,
		AttachmentType.Strings,
	];
	const stale = (result.playElementDesign?.attachments ?? []).filter(
		(a) => !sentIds.has(a.id) && ownedTypes.includes(a.attachmentType),
	);
	const designId = result.playElementDesign?.designId;
	if (stale.length && designId) {
		await alwaysAuthenticatedRequest(
			() =>
				clients.play.deleteAttachments({
					playElementDesignId: designId,
					attachmentIds: stale.map((a) => a.id),
				}),
			sessionIdParam,
		);
	}

	const resultId = result.playElement?.id ?? id;
	printToConsole(
		`${colors.green.bold("✓")} Deployed ${colors.cyan(mod.name)} (${resultId})`,
	);
	if (result.playElement?.shortCode)
		printToConsole(
			`  Share code: ${colors.yellow(result.playElement.shortCode)}`,
		);
	printToConsole(colors.dim(`  ${EXPERIENCE_URL}${resultId}`));
	if (config && !config.id)
		printToConsole(
			colors.dim(
				`  Add \`id: "${resultId}"\` to bf6.config.ts to pin deploys to this experience`,
			),
		);
	return result;
}

async function uploadThumbnail(rootDir: string, sessionIdParam?: string) {
	const thumbnailExtensions = [".jpg", ".jpeg", ".png"];
	for (const ext of thumbnailExtensions) {
		const thumbnailPath = path.resolve(rootDir, "dist", `thumbnail${ext}`);
		if (!fs.existsSync(thumbnailPath)) continue;
		try {
			printToConsole(colors.blue("📸 Uploading thumbnail..."));
			const image = await fs.promises.readFile(thumbnailPath);
			const mimeType = ext === ".png" ? "image/png" : "image/jpeg";
			const uploadResponse = await alwaysAuthenticatedRequest(
				() => clients.play.uploadExperienceThumbnail({ image, mimeType }),
				sessionIdParam,
			);
			printToConsole(
				colors.green(`✓ Thumbnail uploaded: ${uploadResponse.assetId}`),
			);
			return uploadResponse.url;
		} catch (error) {
			printToConsole(
				colors.yellow(
					`⚠ Failed to upload thumbnail: ${error instanceof Error ? error.message : "Unknown error"}`,
				),
			);
			printToConsole(colors.dim("  Continuing deployment without thumbnail"));
			return;
		}
	}
	printToConsole(
		colors.dim("  No thumbnail found in dist folder, skipping upload"),
	);
}
