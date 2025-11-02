import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { Clients, Generated_pb, protobuf } from "@bf6mods/portal";
import colors from "colors";
import { importGlobal } from "import-global";
import { printToConsole } from "../utils.ts";
import { ConfigType } from "@bf6mods/sdk";
import { alwaysAuthenticatedRequest } from "./authenticate.ts";
import { buildSaveExperiencePayload } from "./jsonToRpc.ts";
import { getBf6Config } from "../build/index.ts";

export const clients = new Clients();



export async function deploy({input, sessionIdParam, publish, modId}: {
  input?: string,
  sessionIdParam?: string,
  publish?: boolean,
  modId?: string
}) {
  const rootDir = path.resolve('.');
	if (!input) input = path.resolve(rootDir, "dist", "mod.json");
	printToConsole(`🚀 Starting deploy for ${colors.cyan(input)}…`);
	if (!fs.existsSync(input)) return printToConsole(`${colors.red.bold("✗")} File ${colors.cyan(input)} does not exist!`, true);
	const mod = JSON.parse(fs.readFileSync(input, { encoding: 'utf-8' })) as ConfigType

	const blueprints = await alwaysAuthenticatedRequest('getScheduledBlueprints', {}, sessionIdParam);
	console.log("blueprints", blueprints.blueprintIds);

	const blueprint = await alwaysAuthenticatedRequest('getBlueprintsById', {
		blueprintIds: blueprints.blueprintIds,
	}, sessionIdParam);

  const config = await getBf6Config(rootDir);

  let id: string | undefined;
  if (!config) printToConsole(`Cannot find bf6mods config in dir ${rootDir}, proceeding without it.`);
  else if (config?.id) id = config.id;
  else {
    printToConsole(`No id specified in bf6.config.ts! Defaulting to experience with same name!`);
  }

  // if (!id) {
  //   const owned = await alwaysAuthenticatedRequest('getOwnedPlayElementsV2', {}, sessionIdParam);
  //   const found = owned.playElements.find(element => element?.playElement?.name === mod.name);
  //   if (found?.playElement?.id) id = found.playElement.id;
  // }

  // if (!id) {
  //   printToConsole(`${colors.red.bold("✗")} Cannot find an id for your mod to deploy with! Please specify the id explicitly with \`--id\` or by having a mod with the same name!`);
  //   process.exit(0);
  // }

	// const playElementResponse = await alwaysAuthenticatedRequest('getPlayElement', {
	//   id,
	// 	includeDenied: true
	// }, sessionIdParam);

	// if (!playElementResponse.playElement || !playElementResponse.playElementDesign || !playElementResponse.progressionMode) throw new Error('Cannot find essential attribute in mod, please report to GitHub!')

	// if (!mod.mapRotation) throw new Error('You must specify at least one map!')

	// buildSaveExperiencePayload(mod, blueprint.blueprints[0], playElementResponse as Required<typeof playElementResponse>)

	// console.log('tags', blueprint.blueprints[0].availableProgressionModeTags?.tags)

	// clients.play.updatePlayElement({
	// 	name: mod.name,
	// 	description: mod.description,
	// 	mapRotation: {
	// 		maps: mod.mapRotation?.map((map) => {
	// 			const mapData = blueprint.blueprints[0].availableGameData?.maps.find(
	// 				(availableMap) =>
	// 					`${availableMap.levelName}-${availableMap.levelName}` === map.id,
	// 			);
	// 			if (!mapData)
	// 				throw new Error(
	// 					`Unable to deploy, due to map not being found. Please create a GitHub issue.${blueprint.blueprints}`,
	// 				);
	// 			return {
	// 				levelName: mapData.levelName,
	// 				levelLocation: mapData.levelLocation,
	// 				rounds: 1,
	// 				allowedSpectators: mapData.allowedSpectators,
	// 				mutators: [], // unknown as to what this does
	// 				teamComposition: {
	// 					teams: mod.teamComposition?.map((team) => ({
	// 						teamId: team[0],
	// 						capacity: team[1]?.aiCapacity ?? 0 + team[1].humanCapacity,
	// 					})),
	// 					internalTeams: mod.teamComposition?.map((team) => ({
	// 						teamId: team[0],
	// 						capacity: 0,
	// 						capacityTyppe: 0,
	// 					})),
	// 				},
	// 			} as Omit<Generated_pb.MapEntry, "$typeName">;
	// 		}),
	// 		attributes: {
	// 			rotationBehavior: Generated_pb.RotationBehavior.LOOP,
	// 		},
	// 	},
	// })
}
