import { AiSpawnType, ConfigType, TeamComposition } from "@bf6mods/sdk";
import { Generated_pb } from "../../../../portal/dist/index.js";

export enum TeamBalancingMethod {
  Unspecified = 0,
  EvenNumbers = 1,
  EvenPercentage = 2,
  FillInTeamOrder = 3,
  Unrecognized = -1,
}

export enum InternalCapacityType {
  AiBackfill = 0,
  AiStatic = 1,
  Unrecognized = -1,
}

/** Resource kinds used for mutator metadata */
export const RESOURCE_KIND = {
  FORCE_SAVE_KIND: "forceSave",
  DISPLAY_FORMAT_KIND: "displayFormat",
  CHILD_MUTATOR_KIND: "childMutators",
  PARENT_ACTIVE_VALUE: "parentActiveValue",
  DISPLAY_PRIORITY: "displayPriority",
  CATEGORY: "category",
  INTERNAL: "internal",
} as const;

export type ResourceKind = (typeof RESOURCE_KIND)[keyof typeof RESOURCE_KIND];

/** Mutator UI control types */
export const MUTATOR_UI_NAMES = {
  NUMBER: "number",
  SELECT: "select",
  DISTRIBUTION: "distribution",
  BOOL: "bool",
} as const;

export type MutatorUiName = (typeof MUTATOR_UI_NAMES)[keyof typeof MUTATOR_UI_NAMES];

/** Display formats for numeric range mutators */
export const RANGE_MUTATOR_DISPLAY_FORMAT = {
  MINUTES: "minutes",
  SECONDS: "seconds",
  PERCENT: "percent",
} as const;

export type RangeMutatorDisplayFormat =
  (typeof RANGE_MUTATOR_DISPLAY_FORMAT)[keyof typeof RANGE_MUTATOR_DISPLAY_FORMAT];

/** Mutator translation mapping (numeric keys → semantic fields) */
export const MUTATOR_TRANSLATION_KIND_ID_MAP = new Map<string, string>([
  ["2", "name"],
  ["3", "description"],
]);

/** Certain mutators must always be force-saved regardless of metadata flags */
export const HARDCODED_FORCE_SAVE_MUTATOR_IDS = [
  "MandownExperienceType_PerTeam",
  "CQ_iModeTime",
  "AI_ManDownExperienceType_PerTeam",
  "BR_LobbyPlayerCountStartTimer",
] as const;


const GAME_MOD_TEAM_BALANCING_MAP = new Map<string, TeamBalancingMethod>([
  ["GraniteSquad", TeamBalancingMethod.FillInTeamOrder],
]);

const AI_SPAWN_TYPE_MUTATOR_NO_AI_VALUE = 0;
const AI_SPAWN_TYPE_MUTATOR_PVE_VALUE = 1;
const AI_SPAWN_TYPE_MUTATOR_PVP_VALUE = 2;
const AI_MAX_COUNT_MUTATOR_ID = "AiMaxCount_PerTeam";

const MUTATOR_AI_SPAWN_TYPE_TO_CAPACITY_TYPE = new Map<number, InternalCapacityType>([
  [AI_SPAWN_TYPE_MUTATOR_PVP_VALUE, InternalCapacityType.AiBackfill],
  [AI_SPAWN_TYPE_MUTATOR_PVE_VALUE, InternalCapacityType.AiStatic],
]);

const GAME_MODES_THAT_DO_NOT_SUPPORT_BOTS: string[] = [
  "GraniteSquad",
  "Breakthrough",
  "ConquestSmall",
  "Conquest",
  "BreakthroughSmall",
  "Rush",
  "GraniteGauntlet",
];

const LINKED_MUTATORS = {
  Portal_KitsLimit_VehicleSpawnDelayMultiplier_PerTeam: [
    "VehicleSpawnDelayMultiplier_PerTeam",
  ],
};

const DEFAULT_GAME_SIZE_MAX = 128;
const DEFAULT_GAME_SIZE = 64;
const DEFAULT_GAME_SIZE_MIN = 1;

export const SPAWN_TYPE_MUTATOR_ID = "AiSpawnType";


/** Tags associated with each official game mode */
export enum MutatorTagGameMode {
  Conquest = "WA_GM_Conquest",
  Custom = "WA_GM_Custom",
  Breakthrough = "WA_GM_Breakthrough",
  Rush = "WA_GM_Rush",
  Gauntlet = "WA_GM_Gauntlet",
  BR = "WA_GM_BR",
}

/** Maps a game mode name to its corresponding mutator tag */
export const GAME_MODE_TO_MUTATOR_TAG_MAP: Record<string, MutatorTagGameMode> = {
  Conquest: MutatorTagGameMode.Conquest,
  Breakthrough: MutatorTagGameMode.Breakthrough,
  BreakthroughSmall: MutatorTagGameMode.Breakthrough,
  Rush: MutatorTagGameMode.Rush,
  ModBuilderCustom: MutatorTagGameMode.Custom,
  GraniteSquad: MutatorTagGameMode.BR,
  GraniteGauntlet: MutatorTagGameMode.Gauntlet,
};

/** Validation rule identifiers used during mutator checks */
export enum ValidationRuleName {
  Max = "max",
  Min = "min",
  Required = "required",
  License = "license",
  Forbidden = "forbidden",
  Type = "type",
  Unknown = "unknown",
}

/** UI control types for mutator configuration */
export enum MutatorUiNames {
  Number = "number",
  Select = "select",
  Distribution = "distribution",
  Bool = "bool",
}



/**
 * Builds the team composition payload for a play element update.
 */
function getTeamCompositionPayload({
  teamComposition,
  aiType,
  teamBalancingMethod,
  removeBots,
}: {
  teamComposition: Map<number, { humanCapacity?: number; aiCapacity?: number; aiType?: InternalCapacityType }>;
  aiType?: InternalCapacityType;
  teamBalancingMethod?: TeamBalancingMethod;
  removeBots?: boolean;
}) {
  const entries = Array.from(teamComposition);

  const teams = entries.map(([teamId, { humanCapacity }]) => ({
    teamId,
    capacity: humanCapacity ?? 0,
  }));

  const internalTeams = entries
    .filter(([, { aiType }]) => aiType !== undefined)
    .map(([teamId, { aiCapacity }]) => ({
      teamId,
      capacity: removeBots ? 0 : aiCapacity ?? 0,
      capacityType: aiType ?? InternalCapacityType.AiBackfill,
    }));

  return {
    teams,
    internalTeams,
    balancingMethod: teamBalancingMethod ?? TeamBalancingMethod.Unspecified,
  };
}

export function distributeEvenly(total: number, slots: number): number[] {
  // Initialize an array of given length, all set to base share
  const base = Math.floor(total / slots);
  const remainder = total % slots;

  // Start with equal base values
  const distribution = Array(slots).fill(base);

  // Distribute the remainder by adding +1 to the first `remainder` entries
  for (let i = 0; i < remainder; i++) {
    distribution[i] += 1;
  }

  return distribution;
}

export function getSyncTeamComposition(
  teamComposition: Map<number, { humanCapacity?: number; aiCapacity?: number; aiType?: InternalCapacityType }>
): Map<number, { humanCapacity: number; aiCapacity?: number; aiType?: InternalCapacityType }> {
  let firstAiTeam: [number, { humanCapacity?: number; aiCapacity?: number; aiType?: InternalCapacityType }] | undefined;

  const entries = Array.from(teamComposition);

  const [totalHumans, totalAIs] = entries.reduce<[number, number]>(
    (acc, [, team]) => {
      acc[0] += team.humanCapacity ?? 0;
      acc[1] += team.aiCapacity ?? 0;
      return acc;
    },
    [0, 0]
  );

  const humanPerTeam = Math.min(...distributeEvenly(totalHumans, teamComposition.size));
  const aiPerTeam = Math.min(...distributeEvenly(totalAIs, teamComposition.size));

  let aiType: InternalCapacityType | undefined;

  if (aiPerTeam > 0) {
    firstAiTeam = entries.find(([, t]) => t.aiType !== undefined);
    aiType = firstAiTeam?.[1].aiType ?? InternalCapacityType.AiStatic;
  }

  return entries.reduce((acc, [teamId]) => {
    acc.set(teamId, {
      humanCapacity: humanPerTeam,
      aiCapacity: aiType === InternalCapacityType.AiStatic ? aiPerTeam : undefined,
      aiType,
    });
    return acc;
  }, new Map<number, { humanCapacity: number; aiCapacity?: number; aiType?: InternalCapacityType }>());
}

export function bytesToBase64(bytes: Uint8Array): string {
  const binaryString = Array.from(bytes, (byte) => String.fromCodePoint(byte)).join("");
  return btoa(binaryString);
}

export function constructModRules({
  workspace,
  rulesVersion,
  patchId,
}: {
  workspace?: Record<string, any>;
  rulesVersion?: number;
  patchId?: string;
}) {
  if (!workspace || Object.keys(workspace).length === 0) {
    return undefined;
  }

  // If `mainWorkspace` is NOT defined, we add the mod block
  const includeModBlock = !workspace.mainWorkspace;

  const modBlock = includeModBlock
    ? {
        mod: {
          blocks: {
            blocks: [],
          },
          patch: patchId
            ? bytesToBase64(
                new TextEncoder().encode(JSON.stringify({ id: patchId }))
              )
            : undefined,
          rulesVersion: rulesVersion ?? undefined,
        },
      }
    : {};

  return {
    ...modBlock,
    ...workspace,
  };
}

export function getSyncMutatorsOrAssetTags<T extends Record<string, any>>(input: T): Record<string, any> {
  return Object.entries(input).reduce<Record<string, any>>((acc, [key, value]) => {
    if (value instanceof Map) {
      // Extract the first value from the Map
      const firstEntryValue = Array.from(value.values())[0];
      acc[key] = firstEntryValue;
    } else {
      acc[key] = value;
    }
    return acc;
  }, {});
}

export function validateMutators({
  mutatorsState,
  mutatorMeta,
  gameMode,
}: {
  mutatorsState: Record<string, any>;
  mutatorMeta: Record<string, any>;
  gameMode: string;
}) {
  const allowedMutators = getAllMutatorNamesForGameMode({
    gameMode,
    mutatorMeta,
  });

  return Object.entries(mutatorsState).reduce(
    (acc, [mutatorName, value]) => {
      // If the mutator isn't allowed or not defined in metadata
      if (!allowedMutators.includes(mutatorName) || !(mutatorName in mutatorMeta)) {
        acc.validationFails[mutatorName] = {
          reason: ValidationRuleName.Forbidden,
          value,
        };
        return acc;
      }

      const meta = mutatorMeta[mutatorName];

      if (value === undefined) {
        acc.corrected[mutatorName] = value;
        return acc;
      }

      // Handle modes that do not support bots
      if (GAME_MODES_THAT_DO_NOT_SUPPORT_BOTS.includes(gameMode)) {
        if (mutatorName === SPAWN_TYPE_MUTATOR_ID && value !== AI_SPAWN_TYPE_MUTATOR_NO_AI_VALUE) {
          acc.validationFails[mutatorName] = {
            reason: ValidationRuleName.Forbidden,
            value,
          };
          acc.corrected[mutatorName] = AI_SPAWN_TYPE_MUTATOR_NO_AI_VALUE;
          return acc;
        }

        if (mutatorName === AI_MAX_COUNT_MUTATOR_ID) {
          acc.validationFails[mutatorName] = {
            reason: ValidationRuleName.Forbidden,
            value,
          };
          return acc;
        }
      }

      // Range mutators
      if ("range" in meta) {
        if (value instanceof Map) {
          const checks = Array.from(value).map(([, v]) => validateRangeMutatorValue(v, meta));
          const failed = checks.filter((r) => !r.passed);

          if (failed.length) {
            const uncorrectable = failed.find((r) => r.corrected === undefined);
            if (uncorrectable) {
              acc.validationFails[mutatorName] = {
                reason: uncorrectable.reason,
                value,
              };
              return acc;
            }

            acc.validationFails[mutatorName] = {
              reason: failed[0].reason,
              value,
            };
            acc.corrected[mutatorName] = new Map(
              Array.from(value).map(([k, v], i) => [k, checks[i].passed ? v : checks[i].corrected]),
            );
            return acc;
          }

          acc.corrected[mutatorName] = value;
          return acc;
        }

        const result = validateRangeMutatorValue(value, meta);
        if (result.passed) {
          acc.corrected[mutatorName] = value;
        } else {
          acc.validationFails[mutatorName] = {
            reason: result.reason,
            value,
          };
          if (result.corrected !== undefined) acc.corrected[mutatorName] = result.corrected;
        }
        return acc;
      }

      // Select mutators
      if ("availableValues" in meta && meta.mutatorUi === MutatorUiNames.Select) {
        if (value instanceof Map) {
          const failed = Array.from(value)
            .map(([, v]) => validateSelectMutatorValue(v, meta))
            .filter((r) => !r.passed);

          if (failed.length) {
            acc.validationFails[mutatorName] = {
              reason: failed[0].reason,
              value,
            };
          } else {
            acc.corrected[mutatorName] = value;
          }
          return acc;
        }

        const result = validateSelectMutatorValue(value, meta);
        if (result.passed) {
          acc.corrected[mutatorName] = value;
        } else {
          acc.validationFails[mutatorName] = {
            reason: result.reason,
            value,
          };
        }
        return acc;
      }

      // Boolean mutators
      if (meta.mutatorUi === MutatorUiNames.Bool) {
        if (value instanceof Map) {
          const failed = Array.from(value)
            .map(([, v]) => validateBoolMutatorValue(v))
            .filter((r) => !r.passed);

          if (failed.length) {
            acc.validationFails[mutatorName] = {
              reason: failed[0].reason,
              value,
            };
          } else {
            acc.corrected[mutatorName] = value;
          }
        } else {
          const result = validateBoolMutatorValue(value);
          if (result.passed) acc.corrected[mutatorName] = value;
          else
            acc.validationFails[mutatorName] = {
              reason: result.reason,
              value,
            };
        }
        return acc;
      }

      // Unknown mutator type
      acc.validationFails[mutatorName] = {
        reason: ValidationRuleName.Unknown,
        value,
      };
      return acc;
    },
    {
      corrected: {} as Record<string, any>,
      validationFails: {} as Record<string, any>,
    },
  );
}

// ------------------------------------------------------
// Supporting validation helpers (included in snippet)
// ------------------------------------------------------

export function validateBoolMutatorValue(value: any) {
  if (value === undefined) return { passed: true };
  if (typeof value !== "boolean") {
    return { passed: false, reason: ValidationRuleName.Type };
  }
  return { passed: true };
}

export function validateSelectMutatorValue(value: any, meta: any) {
  const allowedValues = meta?.availableValues;
  if (typeof value !== "number") {
    return { passed: false, reason: ValidationRuleName.Type };
  }
  if (Array.isArray(allowedValues) && allowedValues.includes(value)) {
    return { passed: true };
  }
  return { passed: false, reason: ValidationRuleName.Forbidden };
}

export function validateRangeMutatorValue(value: any, meta: any) {
  if (typeof value !== "number") {
    return { passed: false, reason: ValidationRuleName.Type };
  }

  const { min, max } = meta.range ?? {};
  if (value > max) {
    return { passed: false, reason: ValidationRuleName.Max, corrected: max };
  }
  if (value < min) {
    return { passed: false, reason: ValidationRuleName.Min, corrected: min };
  }

  return { passed: true };
}

export function enumToArray<T extends Record<string, unknown>>(input: T): string[] {
  return Object.values(input).reduce<string[]>((acc, value) => {
    if (typeof value === "string") acc.push(value);
    return acc;
  }, []);
}


export function getAllMutatorNamesForGameMode({
  gameMode,
  mutatorMeta,
}: {
  gameMode: string;
  mutatorMeta: Record<
    string,
    {
      tags: string[];
      // other properties like range, availableValues, mutatorUi, etc.
    }
  >;
}): string[] {
  const allModeTags = enumToArray(MutatorTagGameMode);
  const modeTag = GAME_MODE_TO_MUTATOR_TAG_MAP[gameMode];

  return Object.keys(mutatorMeta).filter((mutatorName) => {
    const meta = mutatorMeta[mutatorName];
    if (!meta) return false;

    const { tags } = meta;

    // If no tags are defined, it's available to all modes.
    // Otherwise:
    //   - include if the current mode tag is present
    //   - include if none of its tags match any known mode tags
    return (
      !tags.length ||
      tags.includes(modeTag) ||
      (!tags.includes(modeTag) && allModeTags.every((t) => !tags.includes(t)))
    );
  });
}

export function getRawMapData<T extends { levelLocation: string; levelName: string }>(
  levelLocation: string,
  levelName: string,
  maps: T[],
): T | undefined {
  return maps.find(
    (map) => map.levelLocation === levelLocation && map.levelName === levelName,
  );
}

function getTeamSize(teamComposition?: TeamComposition[]) {
  return teamComposition?.reduce((total, team) => {
    total += team[1].humanCapacity ?? 0;
    if (team[1]?.aiType === InternalCapacityType.AiStatic)
      total += team[1]?.aiCapacity ?? 0;
    return total;
  }, 0) ?? DEFAULT_GAME_SIZE_MIN;
}

export function getResourceMetadata(
  resources: Array<{ kind: string; location?: { url?: string } }>,
  kind: string,
): string | undefined {
  const resource = resources.find((r) => r.kind === kind);
  const url = resource?.location?.url;
  if (!url) return undefined;

  const params = Array.from(new URLSearchParams(url));
  return params[0]?.[1]; // first query value
}

export function convertStringToType(value: string): string | number | boolean | undefined {
  const lower = value.toLowerCase();
  if (lower === "false") return false;
  if (lower === "true") return true;
  if (value === "undefined") return undefined;
  const num = Number(value);
  return isNaN(num) ? value : num;
}

export function doesResourceKindExist(
  resources: Array<{ kind: string }>,
  kind: string
): boolean {
  return resources.some((r) => r.kind === kind);
}

export function getMutatorKindData(
  kindRaw: string,
  name: string,
): {
  isPerTeam: boolean;
  mutatorUi: string;
  defaultValue?: any;
  step?: number;
  range?: { min: number; max: number };
  availableValues?: any[];
} | undefined {
  // --- 1️⃣ Parse the kind data
  const { kind, kindValue } = getRawKindData(kindRaw);

  // --- 2️⃣ Detect "PerTeam" suffix
  const isPerTeam = name.endsWith(PER_TEAM_IDENTIFIER);

  // --- 3️⃣ Skip empty or string-only mutators
  if (!kindValue || !kind || kind === MUTATOR_KIND_NAME.MUTATOR_STRING) {
    return undefined;
  }

  // --- 4️⃣ Mutators that define availableValues and a mutator object
  if ("availableValues" in kindValue && "mutator" in kindValue && kindValue.mutator) {
    const range = kindValue.availableValues?.range;
    const sparse = kindValue.availableValues?.sparseValues?.values;
    const isFloat =
      kind === MUTATOR_KIND_NAME.MUTATOR_FLOAT ||
      kind === MUTATOR_KIND_NAME.MUTATOR_SPARSE_FLOAT;

    const defaultValue =
      "defaultValue" in kindValue.mutator
        ? kindValue.mutator.defaultValue
        : kindValue.mutator.value;

    // --- Numeric / Range mutator
    if (range) {
      return {
        isPerTeam,
        defaultValue,
        mutatorUi: MUTATOR_UI_NAMES.NUMBER,
        step: isFloat ? 0.1 : 1,
        range: {
          min: common_utils.roundToPrecision(range.minValue, 1) ?? 0,
          max: common_utils.roundToPrecision(range.maxValue ?? 0, 1),
        },
      };
    }

    // --- Select / Enum mutator
    return {
      isPerTeam,
      defaultValue,
      mutatorUi: MUTATOR_UI_NAMES.SELECT,
      ...(sparse && { availableValues: sparse }),
    };
  }

  // --- 5️⃣ Fallback: boolean or scalar mutators
  const defaultValue =
    "defaultValue" in kindValue
      ? kindValue.defaultValue
      : "value" in kindValue
        ? kindValue.value
        : undefined;

  if (defaultValue !== undefined) {
    return {
      isPerTeam,
      mutatorUi: MUTATOR_UI_NAMES.BOOL,
      defaultValue,
    };
  }

  // --- 6️⃣ Nothing matched — warn for debugging
  console.warn(`Mutator "${name}" did not match any of the criteria and was not included`);
  return undefined;
}


export function toGrpc(mod: ConfigType, blueprint: Generated_pb.Blueprint) {
  const balancingMethod = GAME_MOD_TEAM_BALANCING_MAP.get(mod.gameMode as string)
  const teamCompositionPayload = getTeamCompositionPayload({
    teamComposition: getSyncTeamComposition(new Map(mod.teamComposition)),
    aiType: MUTATOR_AI_SPAWN_TYPE_TO_CAPACITY_TYPE.get(Number(mod.mutators?.AiSpawnType)),
    teamBalancingMethod: balancingMethod,
    removeBots: GAME_MODES_THAT_DO_NOT_SUPPORT_BOTS.includes(mod.gameMode as string),
  })

  const maps = (mod.mapRotation ?? []).map((map) => {
    const [levelName, levelLocation] = map.id.split('-');
    const rawMapData = getRawMapData(levelLocation, levelName, blueprint.availableGameData?.maps ?? [])
    return {
      levelName,
      levelLocation,
      gameSize: getTeamSize(mod.teamComposition) ?? DEFAULT_GAME_SIZE_MIN,
      teamComposition: teamCompositionPayload,
      rounds: rawMapData?.rounds ?? 0,
      allowedSpectators: rawMapData?.allowedSpectators?.defaultValue ?? 0,
    }
  })

  const mapRotation = {
    maps,
    attributes: {
      rotationBehavior: Generated_pb.RotationBehavior.LOOP,
    },
  }

  const availableGameData = blueprint.availableGameData!;

  const mutators: Record<string, WebMutator> =
      availableGameData?.mutators?.reduce<Record<string, WebMutator>>((acc, { name, kind, category, metadata }) => {
        const translations = metadata?.translations ?? [];
        const resources = metadata?.resources ?? [];

        // Parse child mutator querystring (RESOURCE_KIND.CHILD_MUTATOR_KIND)
        const childUrl = resources.find((r) => r.kind === RESOURCE_KIND.CHILD_MUTATOR_KIND)?.location?.url;
        const displayFormat = getResourceMetadata(resources, RESOURCE_KIND.DISPLAY_FORMAT_KIND);
        const forceSave =
          getResourceMetadata(resources, RESOURCE_KIND.FORCE_SAVE_KIND) === "true" ||
          // @ts-expect-error
          HARDCODED_FORCE_SAVE_MUTATOR_IDS.includes(name);
        const isInternal = doesResourceKindExist(resources, RESOURCE_KIND.INTERNAL);
        const displayPriorityStr = getResourceMetadata(resources, RESOURCE_KIND.DISPLAY_PRIORITY);
        const categoryMeta = getResourceMetadata(resources, RESOURCE_KIND.CATEGORY);
        const parentActiveValueStr = childUrl
          ? new URLSearchParams(childUrl).get(RESOURCE_KIND.PARENT_ACTIVE_VALUE) ?? undefined
          : undefined;

        // Linked child mutators requested via querystring (?OtherMutator=42)
        const childMutators =
          childUrl
            ? Array.from(new URLSearchParams(childUrl)).reduce<Array<{ name: string; lockToValue: any }>>(
                (list, [k, v]) => {
                  if (k === RESOURCE_KIND.PARENT_ACTIVE_VALUE) return list;
                  const exists = availableGameData?.mutators?.some((m) => m.name === k);
                  if (exists) list.push({ name: k, lockToValue: convertStringToType(v) });
                  return list;
                },
                [],
              )
            : [];

        // Tag categories on the mutator (comma-separated)
        const tags = category.split(",");

        if (!kind) return acc;
        const base = getMutatorKindData(kind, name);
        if (!base) return acc;

        // Choose display format for number UIs
        let rangeDisplayFormat: string | undefined;
        if (base.mutatorUi === MUTATOR_UI_NAMES.NUMBER) {
          if (displayFormat === "minutes") rangeDisplayFormat = RANGE_MUTATOR_DISPLAY_FORMAT.MINUTES;
          else if (displayFormat === "seconds") rangeDisplayFormat = RANGE_MUTATOR_DISPLAY_FORMAT.SECONDS;
          else if (displayFormat === "percent") rangeDisplayFormat = RANGE_MUTATOR_DISPLAY_FORMAT.PERCENT;
        }

        // Build translationIds, including option labels (Value <n>)
        const translationIds = translations.reduce<Record<string, any>>((t, { kind: k, translationId }) => {
          const mapped = MUTATOR_TRANSLATION_KIND_ID_MAP.get(k);
          if (mapped) {
            t[mapped] = translationId;
          } else if (k.includes("Value")) {
            const match = k.match(/Value\s(-?\d+)/);
            const code = match?.[1];
            if (code && base.availableValues?.includes(Number(code))) {
              if (!("options" in t) || !t.options) t.options = new Map<string, string>();
              t.options.set(code, translationId);
            }
          }
          return t;
        }, { name: "" });

        acc[name] = {
          ...base,
          tags,
          translationIds,
          ...(categoryMeta && { category: categoryMeta }),
          ...(forceSave && { isForceSave: forceSave }),
          ...(displayPriorityStr !== undefined &&
            !Number.isNaN(Number(displayPriorityStr)) && { displayPriority: Number(displayPriorityStr) }),
          ...(rangeDisplayFormat && { displayFormat: rangeDisplayFormat }),
          ...(isInternal && { isInternal }),
          ...(parentActiveValueStr !== undefined && { parentActiveValue: convertStringToType(parentActiveValueStr) }),
          ...(childMutators.length && { childMutators }),
        };

        return acc;
      }, {}) ?? {};


  let normalizedMutators = getSyncMutatorsOrAssetTags(mod.mutators ?? {});
  normalizedMutators = applyLinkedMutators(
    normalizedMutators,
    blueprint?.mutators as any, // metadata object with .defaultValue per mutator
  );
}
