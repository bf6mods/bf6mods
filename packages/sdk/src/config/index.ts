import type { AssetRestrictions } from "./asset-restrictions/index.ts";
import type { Mutators } from "./mutators/index.ts";

export * from "./asset-restrictions/index.ts";
export * from "./mutators/index.ts";

/**
 * Represents a value that can either apply globally or per team.
 * - Global: a single scalar (e.g., `true`, `5`, `1.2`)
 * - Per team: an array of `[teamIndex, value]` tuples
 */
export type PerTeam<T> = T | [number, T][];

export enum AttachmentType {
	SpatialData = 1,
	TypeScript = 2,
	Strings = 4,
}

/**
 * Represents a map resource within the game or editor.
 */
export type MapType = {
	/**
	 * Unique identifier for the map.
	 */
	id: string;

	/**
	 * Spatial attachment data containing map metadata, versioning,
	 * and processing information.
	 */
	spatialAttachment: {
		/**
		 * Unique identifier for the spatial attachment.
		 */
		id: string;

		/**
		 * Original filename of the attachment.
		 */
		filename: string;

		/**
		 * Additional metadata describing the attachment
		 */
		metadata: string;

		/**
		 * Version string representing the attachment's iteration or schema version.
		 */
		version: string;

		/**
		 * Whether the attachment is processable
		 */
		isProcessable: boolean;

		/**
		 * Numeric code describing the attachment's current processing status.
		 */
		processingStatus: number;

		/**
		 * Raw data associated with the attachment.
		 * May include both original and compiled forms.
		 */
		attachmentData: {
			/**
			 * This is encoded in base64
			 */
			original: string;

			/**
			 * This is encoded in base64
			 */
			compiled: string;
		};

		/**
		 * Type of attachment
		 */
		attachmentType: AttachmentType;

		/**
		 * Any errors encountered during processing or validation.
		 */
		errors: unknown[];
	};
};

/**
 * Represents the workspace structure for a mod or custom experience.
 */
export type Workspace = {
	mod: {
		/**
		 * Describes block-based scripting data (e.g., visual logic definitions).
		 */
		blocks: {
			/**
			 * Version number of the block language schema (e.g., Blockly or internal DSL version).
			 */
			languageVersion: number;

			/**
			 * Array of block definitions representing visual scripting logic.
			 */
			blocks: unknown[];
		};

		/**
		 * List of variables defined within the workspace.
		 */
		variables: {
			/**
			 * Human-readable name of the variable.
			 */
			name: string;

			/**
			 * Unique identifier of the variable.
			 */
			id: string;

			/**
			 * Variable type or data category (e.g., "Global").
			 */
			type: string;
		}[];
	};
};

/**
 * Describes the configuration of a single team in the game.
 * Each entry represents a team index and its composition limits.
 */
export type TeamComposition = [
	/**
	 * The team index (e.g., 0–3 depending on the number of teams).
	 */
	number,
	{
		/**
		 * Maximum number of human players allowed on this team.
		 */
		humanCapacity: number;

		/**
		 * Maximum number of AI bots allowed on this team.
		 */
		aiCapacity?: number;

		/**
		 * Type of AI assigned to this team.
		 * Unknown what any other value than 1 means. If you are aware, please create an issue
		 */
		aiType?: 0 | 1;
	},
];

/**
 * Represents a collection of attachments associated with a map or project.
 * Each attachment can include original and compiled data, metadata,
 * and information about its processing status.
 */
export type Attachment = {
	/**
	 * Unique identifier for this attachment.
	 */
	id: string;

	/**
	 * Version string or numeric revision of the attachment.
	 */
	version: string;

	/**
	 * Name of the file represented by this attachment.
	 */
	filename: string;

	/**
	 * Indicates whether this attachment can be processed (compiled or validated).
	 */
	isProcessable: boolean;

	/**
	 * Numeric code describing the current processing status of the attachment.
	 */
	processingStatus: number;

	/**
	 * Container for raw and compiled forms of the attachment data.
	 */
	attachmentData: {
		/**
		 * Base64-encoded JSON string containing the original (unprocessed) data.
		 */
		original: string;

		/**
		 * Base64-encoded JSON string containing the compiled or processed version.
		 */
		compiled: string;
	};

	/**
	 * Numeric or string identifier describing the type of attachment.
	 * For example, `1` may represent a map attachment.
	 */
	attachmentType: AttachmentType;

	/**
	 * Arbitrary metadata string associated with this attachment.
	 * May contain additional parameters (e.g., "mapIdx=5").
	 */
	metadata?: string;

	/**
	 * Any errors encountered while processing or validating this attachment.
	 */
	errors: unknown[];
};

/**
 * Represents the configuration structure for a BF6 mod project.
 * This defines all high-level metadata, gameplay modifiers, asset restrictions,
 * and references to related attachments or workspace details.
 */
export type ConfigType = {
	/**
	 * Optional set of mutator overrides or customizations.
	 * Each key corresponds to a mutator category or setting that modifies gameplay rules.
	 */
	mutators?: Partial<Mutators>;

	/**
	 * Optional restrictions applied to in-game assets.
	 * Used to limit or enable specific weapons, vehicles, or classes.
	 */
	assetRestrictions?: Partial<AssetRestrictions>;

	/**
	 * Display name of the mod project or configuration.
	 */
	name: string;

	/**
	 * Brief description of the mod, shown in the mod browser or editor.
	 */
	description: string;

	/**
	 * Optional list of maps included in this configuration’s rotation.
	 * Each entry defines a playable map and its associated parameters.
	 */
	mapRotation?: MapType[];

	/**
	 * Optional workspace configuration defining project metadata,
	 * environment paths, and editor state for the mod.
	 */
	workspace?: Workspace;

	/**
	 * Defines team composition for this configuration.
	 * IMPORTANT! Note that each teamComposition MUST be 1 greater than the team ID.
	 */
	teamComposition?: TeamComposition[];

	/**
	 * Specifies the game mode type this configuration belongs to.
	 * Usually "ModBuilderCustom" for user-created modes.
	 */
	gameMode?: "ModBuilderCustom";

	/**
	 * Array of attachment objects containing spatial or file data
	 * such as blueprints, scene files, or custom resource definitions.
	 */
	attachments?: Attachment[];
};
