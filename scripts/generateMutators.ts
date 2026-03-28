import { Clients, Generated_pb } from "@bf6mods/portal";

// You can get the token by going to portal.battlefield.com and opening inspect element
// and searching for any request like getPlayElement or getOwnedPlayElements
// then copying it from the request header
const clients = await new Clients().authenticate({
    sessionId: "web-89b6139d-95e1-4cbb-bb88-f49ccfb9e0ca",
});
const blueprints = await clients.play.getScheduledBlueprints({});
const blueprint = await clients.play.getBlueprintsById({
    blueprintIds: blueprints.blueprintIds,
});

const mutators = blueprint.blueprints[0].availableGameData?.mutators;
if (!mutators) throw new Error("No mutators found in game data");

const allSids = mutators.flatMap(
    (mutator) =>
        mutator.metadata?.translations?.map((trans) => trans.translationId) ??
        [],
);

const uniqueSids = [...new Set(allSids)];
const response = await clients.localization.getTranslations({
    translationsQuery: {
        sidList: {
            sids: uniqueSids,
        },
    },
    locale: "en-US",
});

const translationMap: Map<string, string> = new Map();

if (response.localizedTexts) {
    response.localizedTexts.forEach((item) => {
        translationMap.set(item.sid, item.localizedText);
    });
}

let output = `export type PerTeam<T> = { [teamIndex: number]: T };\n\n`;
output += `export type Mutators = {\n`;

for (const mutator of mutators) {
    // --- 1. Determine Type ---
    let baseType = "unknown";
    let specificKindData:
        | Generated_pb.MutatorBoolean
        | Generated_pb.AvailableMutatorFloatValues
        | Generated_pb.AvailableMutatorIntValues
        | Generated_pb.MutatorSparseBoolean
        | Generated_pb.AvailableMutatorSparseFloatValues
        | Generated_pb.AvailableMutatorSparseIntValues
        | Generated_pb.MutatorString
        | undefined = undefined; // To hold the inner object for range checking

    if (mutator.kind?.mutatorBoolean) {
        baseType = "boolean";
        specificKindData = mutator.kind.mutatorBoolean;
    } else if (mutator.kind?.mutatorFloatValues) {
        baseType = "number";
        specificKindData = mutator.kind.mutatorFloatValues;
    } else if (mutator.kind?.mutatorIntValues) {
        baseType = "number";
        specificKindData = mutator.kind.mutatorIntValues;
    } else if (mutator.kind?.mutatorSparseBoolean) {
        baseType = "boolean";
        specificKindData = mutator.kind.mutatorSparseBoolean;
    } else if (mutator.kind?.mutatorSparseFloatValues) {
        baseType = "number";
        specificKindData = mutator.kind.mutatorSparseFloatValues;
    } else if (mutator.kind?.mutatorSparseIntValues) {
        baseType = "number";
        specificKindData = mutator.kind.mutatorSparseIntValues;
    } else if (mutator.kind?.mutatorString) {
        baseType = "string";
        specificKindData = mutator.kind.mutatorString;
    }

    if (specificKindData === undefined)
        throw new Error("unhandled mutator type");

    // Handle PerTeam wrapper logic
    const isPerTeam =
        mutator.name.includes("_PerTeam") ||
        mutator.kind?.mutatorSparseBoolean ||
        mutator.kind?.mutatorSparseFloatValues ||
        mutator.kind?.mutatorSparseIntValues;

    const finalType = isPerTeam ? `PerTeam<${baseType}>` : baseType;

    // --- 2. Build JSDoc ---
    const docLines: string[] = [];

    // A. Localization (Title and Description)
    const transMeta = mutator.metadata?.translations || [];
    // Kind "2" appears to be Title, "3" appears to be Description based on your data
    const titleRef = transMeta.find((t) => t.kind === "2");
    const descRef = transMeta.find((t) => t.kind === "3");

    const titleText = titleRef
        ? translationMap.get(titleRef.translationId)
        : null;
    const descText = descRef ? translationMap.get(descRef.translationId) : null;

    if (titleText) docLines.push(titleText);
    if (descText && descText !== titleText) docLines.push(descText);

    if (titleText || descText) docLines.push("");

    docLines.push(`@id ${mutator.id}`);

    // B. Constraints (Ranges and Defaults)
    // Check for Ranges (Int/Float)
    const available = specificKindData?.availableValues;
    if (available?.range) {
        docLines.push(
            `@constraints Range: [${available.range.minValue} to ${available.range.maxValue}]`,
        );
    }

    // Check for specific allowed values (Enumerations)
    // Note: The protobuf defines 'sparse_values' in 'AvailableIntValues',
    // sometimes this list defines strict allowed options.
    if (
        available?.sparseValues &&
        Array.isArray(available.sparseValues.values)
    ) {
        docLines.push(
            `@constraints Allowed Values: ${available.sparseValues.values.join(", ")}`,
        );
    }

    // Check for Defaults (if present in the specific kind data)
    if (specificKindData?.mutator?.value !== undefined) {
        docLines.push(`@default ${specificKindData.mutator.value}`);
    } else if (specificKindData?.mutator?.defaultValue !== undefined) {
        docLines.push(`@default ${specificKindData.mutator.defaultValue}`);
    }

    // C. Formatting the JSDoc
    output += `  /**\n`;
    if (docLines.length > 0) {
        docLines.forEach((line) => {
            output += `   * ${line}\n`;
        });
    }
    output += `   */\n`;
    output += `  "${mutator.name}": ${finalType};\n\n`;
}

output += `};\n`;
console.log("output:", output);
