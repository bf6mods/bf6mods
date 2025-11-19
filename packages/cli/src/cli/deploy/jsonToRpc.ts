import type { ConfigType } from "@bf6mods/sdk";
import type { Generated_pb } from "../../../../portal/dist/index.js";

export function buildSaveExperiencePayload(
	mod: ConfigType,
	_blueprint: Generated_pb.Blueprint,
	playElementResponse: Required<Generated_pb.PlayElementResponse>,
) {
	const saveExperienceMutators: Omit<Generated_pb.Mutator[], "$typeName"> = [];
	const _saveExperienceAssetCategories: Omit<
		Generated_pb.AssetCategory[],
		"$typeName"
	> = [];
	const saveExperienceAttachments: Omit<
		Generated_pb.Attachment[],
		"$typeName"
	> = [];
	console.log(
		playElementResponse.playElementDesign?.modRules?.compatibleRules?.original,
	);
	// const saveExperienceOriginalModRules: Uint8Array<ArrayBufferLike> = bytesFromBase64()
	const saveExperienceOriginalModRules: Uint8Array<ArrayBufferLike> =
		new Uint8Array();

	const _saveExperiencePayload: Omit<
		Generated_pb.UpdatePlayElementRequest,
		"$typeName"
	> = {
		name: mod.name,
		id: mod.description,
		mutators: saveExperienceMutators,
		assetCategories: [],
		originalModRules: saveExperienceOriginalModRules,
		publishState: playElementResponse.playElement.publishStateType,
		playElementSettings: playElementResponse.playElement.playElementSettings,
		attachments: saveExperienceAttachments,
	};
}
