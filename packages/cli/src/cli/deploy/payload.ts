import { Generated_pb, type protobuf } from "@bf6mods/portal";
import type { ConfigType, TeamComposition } from "@bf6mods/sdk";

/**
 * Builds the request fields shared by createPlayElement and updatePlayElement
 * from a built mod.json, mirroring what the Portal web editor sends on save.
 */

type Init<Desc extends protobuf.DescMessage> = protobuf.MessageInitShape<Desc>;
type AvailableMutator = Generated_pb.AvailableMutator;
type GameData = Generated_pb.AvailableGameData;

/** A mutator value as stored in mod.json: global scalar or [teamIndex, value][] */
type ExportedValue = number | boolean | string | [number, unknown][];

const AI_SPAWN_TYPE_STATIC = 1;
const MOD_BUILDER_GAME_MODE = "ModBuilder_GameMode";
const MAX_TEAM_COUNT = "MaxTeamCount";
const MAX_PLAYER_COUNT = "MaxPlayerCount_PerTeam";
const AI_MAX_COUNT = "AiMaxCount_PerTeam";
const AI_SPAWN_TYPE = "AiSpawnType";
const SPATIAL_ATTACHMENT = 1;
const SCRIPT_ATTACHMENT = 2;

// Sparse mutators whose entries are not per team; the web editor stores the
// value at index 0 with size 0
const TEAM_INDEPENDENT_MUTATORS = [
	"Portal_GauntletMissionPool_Duel",
	"Portal_GauntletMissionPool_Small",
	"Portal_GauntletMissionPool_Medium",
	"Portal_GauntletMissionPool_Large",
];

// Parent mutators whose value must be copied onto their child when set
const LINKED_MUTATORS: Record<string, string[]> = {
	Portal_KitsLimit_VehicleSpawnDelayMultiplier_PerTeam: [
		"VehicleSpawnDelayMultiplier_PerTeam",
	],
};

export type DesignPayload = Pick<
	Init<typeof Generated_pb.UpdatePlayElementRequestSchema>,
	"mapRotation" | "mutators" | "assetCategories" | "attachments"
>;

export function getAvailableGameData(blueprint: Generated_pb.Blueprint) {
	const gameData = blueprint.availableGameData;
	if (!gameData)
		throw new Error("Blueprint has no available game data, cannot deploy.");
	return gameData;
}

function resourceValue(mutator: AvailableMutator, kind: string) {
	const resource = mutator.metadata?.resources.find((r) => r.kind === kind);
	if (!resource?.location?.url) return undefined;
	return new URLSearchParams(resource.location.url).get(kind) ?? undefined;
}

function hasResource(mutator: AvailableMutator, kind: string) {
	return mutator.metadata?.resources.some((r) => r.kind === kind) ?? false;
}

type KindInfo = {
	kindName: keyof Init<typeof Generated_pb.MutatorKindSchema>;
	sparse: boolean;
	defaultValue: number | boolean | string;
};

function getKindInfo(
	mutator: AvailableMutator | undefined,
): KindInfo | undefined {
	const kind = mutator?.kind;
	if (!kind) return;
	if (kind.mutatorBoolean)
		return {
			kindName: "mutatorBoolean",
			sparse: false,
			defaultValue: kind.mutatorBoolean.value,
		};
	if (kind.mutatorString)
		return {
			kindName: "mutatorString",
			sparse: false,
			defaultValue: kind.mutatorString.value,
		};
	if (kind.mutatorFloatValues)
		return {
			kindName: "mutatorFloat",
			sparse: false,
			defaultValue: kind.mutatorFloatValues.mutator?.value ?? 0,
		};
	if (kind.mutatorIntValues)
		return {
			kindName: "mutatorInt",
			sparse: false,
			defaultValue: kind.mutatorIntValues.mutator?.value ?? 0,
		};
	if (kind.mutatorSparseBoolean)
		return {
			kindName: "mutatorSparseBoolean",
			sparse: true,
			defaultValue: kind.mutatorSparseBoolean.defaultValue,
		};
	if (kind.mutatorSparseIntValues)
		return {
			kindName: "mutatorSparseInt",
			sparse: true,
			defaultValue: kind.mutatorSparseIntValues.mutator?.defaultValue ?? 0,
		};
	if (kind.mutatorSparseFloatValues)
		return {
			kindName: "mutatorSparseFloat",
			sparse: true,
			defaultValue: kind.mutatorSparseFloatValues.mutator?.defaultValue ?? 0,
		};
}

function toMap(value: ExportedValue): Map<number, unknown> | undefined {
	if (!Array.isArray(value)) return;
	return new Map(value.map(([team, v]) => [Number(team), v]));
}

/**
 * Encodes a mutator value into the MutatorKind the API expects.
 * Per-team values become sparse entries indexed by teamIndex + 1; a per-team
 * value that is the same for every team collapses to a plain default.
 */
function buildMutatorKind(
	info: KindInfo,
	value: ExportedValue,
	teamCount: number,
	teamIndependent: boolean,
): Init<typeof Generated_pb.MutatorKindSchema> {
	const perTeam = toMap(value);

	if (!info.sparse) {
		const scalar = perTeam ? perTeam.values().next().value : value;
		return { [info.kindName]: { value: scalar } };
	}

	if (teamIndependent) {
		const sparseValues = perTeam
			? [...perTeam].map(([index, v]) => ({ index, value: v }))
			: [{ index: 0, value }];
		return {
			[info.kindName]: {
				defaultValue: info.defaultValue,
				size: perTeam?.size ?? 0,
				sparseValues,
			},
		};
	}

	const size = teamCount + 1;
	let defaultValue: unknown = info.defaultValue;
	let sparseValues: { index: number; value: unknown }[] = [];
	if (perTeam) {
		const values = [...perTeam.values()];
		const allSame = new Set(values).size === 1;
		if (allSame && (perTeam.size === size - 1 || values[0] === defaultValue)) {
			defaultValue = values[0];
		} else {
			sparseValues = [...perTeam].map(([index, v]) => ({
				index: index + 1,
				value: v,
			}));
		}
	} else {
		defaultValue = value;
	}

	return { [info.kindName]: { defaultValue, size, sparseValues } };
}

function findAvailableMap(mapId: string, gameData: GameData) {
	const dash = mapId.lastIndexOf("-");
	const levelName = mapId.slice(0, dash);
	const levelLocation = mapId.slice(dash + 1);
	const available = gameData.maps.find(
		(m) => m.levelName === levelName && m.levelLocation === levelLocation,
	);
	if (!available)
		throw new Error(
			`Map ${mapId} is not available on the Portal. Is your CLI out of date?`,
		);
	return available;
}

function teamsOf(mod: ConfigType, gameData: GameData): TeamComposition[] {
	if (mod.teamComposition?.length) return mod.teamComposition;
	// Like the web editor, default to the game mode's team count and player size
	const firstMap = mod.mapRotation?.[0]
		? findAvailableMap(mod.mapRotation[0].id, gameData)
		: undefined;
	const teamCount = firstMap?.allowedTeamsRange?.defaultValue || 2;
	const gameSize = firstMap?.gameSize?.defaultValue || 32;
	const humanCapacity = Math.floor(gameSize / teamCount);
	return Array.from({ length: teamCount }, (_, i) => [
		i + 1,
		{ humanCapacity },
	]);
}

/**
 * Mutators implied by the team composition, the same way the web editor
 * derives them. Explicit entries in mod.json take precedence.
 */
function mutatorsFromTeams(teams: TeamComposition[]) {
	const derived: Record<string, ExportedValue> = {};
	derived[MAX_TEAM_COUNT] = teams.length + 1;
	const sameHumans = teams.every(
		(t) => t[1].humanCapacity === teams[0][1].humanCapacity,
	);
	derived[MAX_PLAYER_COUNT] = sameHumans
		? teams[0][1].humanCapacity
		: teams.map(([id, t]) => [id - 1, t.humanCapacity] as [number, unknown]);
	if (teams[0][1].aiType === AI_SPAWN_TYPE_STATIC) {
		const sameAi = teams.every(
			(t) => t[1].aiCapacity === teams[0][1].aiCapacity,
		);
		derived[AI_MAX_COUNT] = sameAi
			? (teams[0][1].aiCapacity ?? 0)
			: teams.map(
					([id, t]) => [id - 1, t.aiCapacity ?? 0] as [number, unknown],
				);
	}
	return derived;
}

export function buildMutators(
	mod: ConfigType,
	gameData: GameData,
	teams: TeamComposition[],
): Init<typeof Generated_pb.MutatorSchema>[] {
	const state: Record<string, ExportedValue> = {
		...mutatorsFromTeams(teams),
		...(mod.mutators as Record<string, ExportedValue>),
	};
	state[MOD_BUILDER_GAME_MODE] = 2;

	for (const [parent, children] of Object.entries(LINKED_MUTATORS)) {
		if (parent in state)
			for (const child of children) state[child] = state[parent];
	}

	const result: Init<typeof Generated_pb.MutatorSchema>[] = [];
	for (const available of gameData.mutators) {
		const info = getKindInfo(available);
		if (!info) continue;
		const forceSave = resourceValue(available, "forceSave") === "true";
		const isInternal = hasResource(available, "internal");
		const teamIndependent = TEAM_INDEPENDENT_MUTATORS.includes(available.name);

		let value = state[available.name];
		if (value === undefined) {
			if (!forceSave) continue;
			value = info.defaultValue;
		} else if (forceSave && isInternal && !teamIndependent) {
			value = info.defaultValue;
		}

		const changed = Array.isArray(value) || value !== info.defaultValue;
		if (!changed && !forceSave) continue;

		result.push({
			id: available.id,
			category: available.category,
			name: available.name,
			kind: buildMutatorKind(info, value, teams.length, teamIndependent),
		});
	}
	return result;
}

export function buildTeamComposition(
	teams: TeamComposition[],
	mutators: ConfigType["mutators"],
): Init<typeof Generated_pb.TeamCompositionSchema> {
	const aiSpawnType = (mutators as Record<string, unknown> | undefined)?.[
		AI_SPAWN_TYPE
	];
	// AiSpawnType 1 (static/PvE) keeps its bots; backfill bots have no fixed capacity
	const capacityType = aiSpawnType === AI_SPAWN_TYPE_STATIC ? 1 : 0;
	return {
		teams: teams.map(([teamId, t]) => ({
			teamId,
			capacity: t.humanCapacity ?? 0,
		})),
		internalTeams: teams
			.filter(([, t]) => t.aiType !== undefined)
			.map(([teamId, t]) => ({
				teamId,
				capacity: capacityType === 1 ? (t.aiCapacity ?? 0) : 0,
				capacityType,
			})),
		balancingMethod: 1, // even numbers, the web editor default
	};
}

export function buildMapRotation(
	mod: ConfigType,
	gameData: GameData,
	teamComposition: Init<typeof Generated_pb.TeamCompositionSchema>,
): Init<typeof Generated_pb.MapRotationSchema> {
	if (!mod.mapRotation?.length)
		throw new Error("You must specify at least one map!");
	return {
		maps: mod.mapRotation.map((map) => {
			const available = findAvailableMap(map.id, gameData);
			return {
				levelName: available.levelName,
				levelLocation: available.levelLocation,
				rounds: available.rounds?.defaultValue ?? 1,
				allowedSpectators: available.allowedSpectators?.defaultValue ?? 0,
				teamComposition,
				mutators: [],
			};
		}),
		attributes: { rotationBehavior: Generated_pb.RotationBehavior.LOOP },
	};
}

export function buildAssetCategories(
	mod: ConfigType,
	gameData: GameData,
	teamCount: number,
): Init<typeof Generated_pb.AssetCategorySchema>[] {
	const available = [
		...(gameData.assetCategories?.rootTags ?? []),
		...(gameData.assetCategories?.tags ?? []),
	];
	const result: Init<typeof Generated_pb.AssetCategorySchema>[] = [];
	for (const [name, value] of Object.entries(mod.assetRestrictions ?? {})) {
		const tag = available.find((t) => t.name === name);
		if (!tag) throw new Error(`Unknown asset restriction "${name}"`);
		const perTeam = toMap(value as ExportedValue);
		const values = perTeam
			? Array.from({ length: teamCount }, (_, i) =>
					Boolean(perTeam.get(i) ?? true),
				)
			: [Boolean(value)];
		// Only restrictions (some team without the asset) need to be sent
		if (values.every((v) => v)) continue;
		const allRestricted = values.every((v) => !v);
		result.push({
			tagId: tag.tagId,
			boolean: {
				defaultValue: !allRestricted,
				teamOverrides:
					allRestricted || !perTeam
						? []
						: values.map((v, i) => ({
								assetCategoryTags: [tag.tagId],
								teamId: i + 1,
								value: v,
							})),
			},
		});
	}
	return result;
}

/**
 * Converts the base64 attachments of mod.json into API attachments, reusing
 * the ids of attachments already on the experience (matched by filename) so
 * they are replaced instead of duplicated.
 */
export function buildAttachments(
	mod: ConfigType,
	existing: Generated_pb.Attachment[],
): Init<typeof Generated_pb.AttachmentSchema>[] {
	// The build lists spatial attachments both in attachments and in mapRotation
	const all = new Map(
		[
			...(mod.attachments ?? []),
			...(mod.mapRotation ?? []).map((m) => m.spatialAttachment),
		].map((a) => [a.id, a]),
	);
	return [...all.values()].map((attachment) => {
		const previous = existing.find(
			(e) =>
				e.filename === attachment.filename &&
				e.attachmentType === attachment.attachmentType,
		);
		let original = Buffer.from(attachment.attachmentData.original, "base64");
		if (attachment.attachmentType === SPATIAL_ATTACHMENT) {
			// spatial data is minified like the web editor does
			try {
				original = Buffer.from(
					JSON.stringify(JSON.parse(original.toString("utf8"))),
				);
			} catch {}
		}
		return {
			id: previous?.id ?? attachment.id,
			version: attachment.version,
			filename: attachment.filename,
			isProcessable: attachment.isProcessable,
			processingStatus: attachment.processingStatus,
			attachmentType: attachment.attachmentType,
			metadata: attachment.metadata,
			errors: [],
			attachmentData: { original: new Uint8Array(original) },
		};
	});
}

/** Whether the script assigns teams itself, in which case the server must not. */
export function isScriptControlledTeams(mod: ConfigType) {
	return (mod.attachments ?? []).some((a) => {
		if (a.attachmentType !== SCRIPT_ATTACHMENT) return false;
		const script = Buffer.from(a.attachmentData.original, "base64").toString(
			"utf8",
		);
		return /\bmod\.SetTeam\s*\(/.test(script);
	});
}

export function buildDesignPayload(
	mod: ConfigType,
	blueprint: Generated_pb.Blueprint,
	existingAttachments: Generated_pb.Attachment[] = [],
): DesignPayload {
	const gameData = getAvailableGameData(blueprint);
	const teams = teamsOf(mod, gameData);
	const teamComposition = buildTeamComposition(teams, mod.mutators);
	return {
		mapRotation: buildMapRotation(mod, gameData, teamComposition),
		mutators: buildMutators(mod, gameData, teams),
		assetCategories: buildAssetCategories(mod, gameData, teams.length),
		attachments: buildAttachments(mod, existingAttachments),
	};
}
