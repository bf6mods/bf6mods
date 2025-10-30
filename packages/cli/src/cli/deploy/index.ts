import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { Clients, Generated_pb, protobuf } from "@bf6mods/portal";
import colors from "colors";
import { importGlobal } from "import-global";
import { printToConsole } from "../utils.ts";
import { ConfigType } from "@bf6mods/sdk";
import { alwaysAuthenticatedRequest } from "./authenticate.ts";

export const clients = new Clients();



export async function deploy(
	input?: string,
	sessionIdParam?: string,
	_publish?: boolean,
) {
	if (!input) input = path.resolve(".", "dist", "mod.json");
	printToConsole(`🚀 Starting deploy for ${colors.cyan(input)}…`);
	if (!fs.existsSync(input)) return printToConsole(`${colors.red.bold("✗")} File ${colors.cyan(input)} does not exist!`, true);
	const mod = JSON.parse(fs.readFileSync(input, { encoding: 'utf-8' })) as ConfigType

	const blueprints = await alwaysAuthenticatedRequest('getScheduledBlueprints', {}, sessionIdParam);
	console.log("blueprints", blueprints.blueprintIds);

	const blueprint = await alwaysAuthenticatedRequest('getBlueprintsById', {
		blueprintIds: blueprints.blueprintIds,
	}, sessionIdParam);

	if (!mod.mapRotation) throw new Error('You must specify at least one map!')

	// console.log('tags', blueprint.blueprints[0].availableProgressionModeTags?.tags)

	clients.play.updatePlayElement({
		name: mod.name,
		description: mod.description,
		mapRotation: {
			maps: mod.mapRotation?.map((map) => {
				const mapData = blueprint.blueprints[0].availableGameData?.maps.find(
					(availableMap) =>
						`${availableMap.levelName}-${availableMap.levelName}` === map.id,
				);
				if (!mapData)
					throw new Error(
						`Unable to deploy, due to map not being found. Please create a GitHub issue.${blueprint.blueprints}`,
					);
				return {
					levelName: mapData.levelName,
					levelLocation: mapData.levelLocation,
					rounds: 1,
					allowedSpectators: mapData.allowedSpectators,
					mutators: [], // unknown as to what this does
					teamComposition: {
						teams: mod.teamComposition?.map((team) => ({
							teamId: team[0],
							capacity: team[1]?.aiCapacity ?? 0 + team[1].humanCapacity,
						})),
						internalTeams: mod.teamComposition?.map((team) => ({
							teamId: team[0],
							capacity: 0,
							capacityTyppe: 0,
						})),
					},
				} as Omit<Generated_pb.MapEntry, "$typeName">;
			}),
			attributes: {
				rotationBehavior: Generated_pb.RotationBehavior.LOOP,
			},
		},
	})
}
