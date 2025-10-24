import { PerTeam } from "../index.ts";

/**
 * Determines the Man-Down behavior when a soldier is downed.
 */
export enum ManDownExperienceType {
	Crawl = 0,
	Downed = 1,
	InstantDeath = 2,
}

/**
 * Controls which type of AI to spawn. PvP AI will automatically spawn and can be replaced by human players. PvE AI is a fixed number that cannot be replaced, for Solo or Co-op experiences.
 */
export enum AiSpawnType {
	NoBots = 0,
	Backfill = 2,
	Static = 1,
}

/**
 * Controls the rules for Squad Spawning, for squad members and squad leaders.
 */
export enum SquadSpawnType {
	All = 0,
	SquadmatesOnLeader_LeaderNone = 1,
	SquadmatesOnLeader_LeaderAll = 2,
	Disabled = 2,
	// If you know what this is, please create an issue
	Undocumneted = 3,
}

/**
 * Controls what type of scoreboard layout to use.
 */
export enum ScoreboardType {
	NotSet = 0,
	DefaultFAA = 1,
	Off = 2,
	CustomTwoTeams = 3,
	CustomFFA = 4,
}

/**
 * Determines the behavior of the Ping command.
 */
export enum PingBehavior {
	PingTargets = 0,
	Disabled = 1,
}

export enum ModBuilderGameMode {
	Custom = 2,
}

/**
 * Sets the faction for each team.
 */
export enum FactionID {
	Pax = -1865993703,
	MapDefault = 0,
	NATO = 607944106,
}

/**
 * Describes all configurable mutators for the game.
 */
export type Mutators = {
	/**
	 * Whether AI is allowed to go prone per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isProneAllowed], ...]`
	 */
	AI_ProneAllowed_PerTeam: PerTeam<boolean>;

	/**
	 * Maximum number of players allowed per team or globally.
	 * If global: `number`
	 * If per team: `[[teamIndex, maxPlayers], ...]`
	 */
	MaxPlayerCount_PerTeam: PerTeam<number>;

	/**
	 * Maximum number of AI allowed per team or globally.
	 * If global: `number`
	 * If per team: `[[teamIndex, maxAI], ...]`
	 */
	AiMaxCount_PerTeam: PerTeam<number>;

	/**
	 * Determines the global AI spawn behavior.
	 * Possible values depend on the internal AI spawn type enumeration.
	 * If global: `SpawnType`
	 * If per team: `[[teamIndex, SpawnType], ...]`
	 */
	AiSpawnType: AiSpawnType;

	/**
	 * Multiplies damage taken from falling. Values lower than 1.0 reduce damage, while values greater than 1.0 increase damage.
	 * If global: `number`
	 * If per team: `[[teamIndex, multiplier], ...]`
	 */
	FallDamageHeightMultiplier_PerTeam: PerTeam<number>;

	/**
	 * Defines the "Man Down" experience type per team or globally.
	 * If global: `ManDownExperienceType`
	 * If per team: `[[teamIndex, ManDownExperienceType], ...]`
	 */
	ManDownExperienceType_PerTeam: PerTeam<ManDownExperienceType>;

	/**
	 * Whether sprint-strafing is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	SprintStrafeAllowed_PerTeam: PerTeam<boolean>;

	/**
	 * The total number of teams supported in this game mode.
	 */
	MaxTeamCount: number;

	/**
	 * Whether passengers are allowed in vehicles.
	 */
	Vehicle_AllowPassengers: boolean;

	/**
	 * Whether AI are allowed to occupy passenger seats in vehicles.
	 */
	AI_Vehicle_AllowAiInPassengerSeats: boolean;

	/**
	 * Whether friendly identification (friend/foe visibility)
	 * is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	FriendlyIdentificationAllowed_PerTeam: PerTeam<boolean>;

	/**
	 * Whether squad revive is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	SquadReviveAllowed_PerTeam: PerTeam<boolean>;

	/**
	 * Whether aim assist snap zoom is enabled globally.
	 */
	AimAssistSnapZoomEnabled: boolean;

	/**
	 * Whether prone is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	ProneAllowed_PerTeam: PerTeam<boolean>;

	/**
	 * Whether vehicle health regeneration is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	VehicleHealthRegenAllowed_PerTeam: PerTeam<boolean>;

	/**
	 * Whether infinite weapon magazines are enabled per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isEnabled], ...]`
	 */
	InfiniteWeaponMagazines_PerTeam: PerTeam<boolean>;

	/**
	 * Whether sprinting is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	SprintAllowed_PerTeam: PerTeam<boolean>;

	/**
	 * Whether soldier health regeneration is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	SoldierHealthRegenAllowed_PerTeam: PerTeam<boolean>;

	/**
	 * Whether stationary emplacements (e.g. turrets) are allowed globally.
	 */
	StationaryEmplacementsAllowed: boolean;

	/**
	 * Whether sliding is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	SlideAllowed_PerTeam: PerTeam<boolean>;

	/**
	 * Whether the compass is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	CompassAllowed_PerTeam: PerTeam<boolean>;

	/**
	 * Whether the minimap is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	MinimapAllowed_PerTeam: PerTeam<boolean>;

	/**
	 * Defines ping behavior per team or globally.
	 * Likely corresponds to an internal ping mode enumeration.
	 * If global: `PingBehavior`
	 * If per team: `[[teamIndex, PingBehavior], ...]`
	 */
	PingBehavior_PerTeam: PerTeam<PingBehavior>;

	/**
	 * Whether the HUD (Heads-Up Display) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	HUDAllowed_PerTeam: PerTeam<boolean>;

	/**
	 * Multiplies the soldier's maximum health.
	 * Values lower than 1.0 reduce health, while values greater than 1.0 increase health.
	 * If global: `number`
	 * If per team: `[[teamIndex, multiplier], ...]`
	 */
	SoldierMaxHealthMultiplier_PerTeam: PerTeam<number>;

	/**
	 * Multiplies the soldier respawn delay time.
	 * Values lower than 1.0 shorten respawn time, while values greater than 1.0 increase it.
	 * If global: `number`
	 * If per team: `[[teamIndex, multiplier], ...]`
	 */
	SoldierRespawnDelayMultiplier_PerTeam: PerTeam<number>;

	/**
	 * Multiplies the maximum vehicle health.
	 * Values lower than 1.0 reduce health, while values greater than 1.0 increase health.
	 * If global: `number`
	 * If per team: `[[teamIndex, multiplier], ...]`
	 */
	VehicleMaxHealthMultiplier_PerTeam: PerTeam<number>;

	/**
	 * Multiplies the speed of all projectiles globally.
	 * Values lower than 1.0 slow down projectiles, while values greater than 1.0 speed them up.
	 */
	ProjectileSpeedMultiplier: number;

	/**
	 * Multiplies bodyshot damage per team or globally.
	 * Values lower than 1.0 reduce damage, while values greater than 1.0 increase damage.
	 * If global: `number`
	 * If per team: `[[teamIndex, multiplier], ...]`
	 */
	BodyshotMultiplier_PerTeam: PerTeam<number>;

	/**
	 * Multiplies headshot damage per team or globally.
	 * Values lower than 1.0 reduce damage, while values greater than 1.0 increase damage.
	 * If global: `number`
	 * If per team: `[[teamIndex, multiplier], ...]`
	 */
	HeadshotMultiplier_PerTeam: PerTeam<number>;

	/**
	 * Multiplies damage dealt to vehicles per team or globally.
	 * Values lower than 1.0 reduce damage, while values greater than 1.0 increase damage.
	 * If global: `number`
	 * If per team: `[[teamIndex, multiplier], ...]`
	 */
	VehicleDamageMultiplier_PerTeam: PerTeam<number>;

	/**
	 * Multiplies the rate at which vehicles regenerate health per team or globally.
	 * Values lower than 1.0 slow regeneration, while values greater than 1.0 speed it up.
	 * If global: `number`
	 * If per team: `[[teamIndex, multiplier], ...]`
	 */
	VehicleRegenRateMultiplier_PerTeam: PerTeam<number>;

	/**
	 * Multiplies the soldier health regeneration rate per team or globally.
	 * Values lower than 1.0 slow regeneration, while values greater than 1.0 speed it up.
	 * If global: `number`
	 * If per team: `[[teamIndex, multiplier], ...]`
	 */
	SoldierRegenRateMultiplier_PerTeam: PerTeam<number>;

	/**
	 * Defines the scoreboard type globally.
	 * Corresponds to an internal scoreboard display mode enumeration.
	 */
	ScoreboardType: ScoreboardType;

	/**
	 * Defines the "Man Down" experience type for AI per team or globally.
	 * If global: `ManDownExperienceType`
	 * If per team: `[[teamIndex, ManDownExperienceType], ...]`
	 */
	AI_ManDownExperienceType_PerTeam: PerTeam<ManDownExperienceType>;

	/**
	 * Multiplies AI soldier movement speed per team or globally.
	 * Values lower than 1.0 reduce speed, while values greater than 1.0 increase speed.
	 * If global: `number`
	 * If per team: `[[teamIndex, multiplier], ...]`
	 */
	AI_SoldierMovementSpeedMultiplier_PerTeam: PerTeam<number>;

	/**
	 * Whether AI sprinting is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	AI_SprintAllowed_PerTeam: PerTeam<boolean>;

	/**
	 * Whether AI are allowed to exit vehicles per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	AI_ExitVehiclesAllowed_PerTeam: PerTeam<boolean>;

	/**
	 * Whether infinite weapon ammunition is enabled per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isEnabled], ...]`
	 */
	InfiniteWeaponAmmo_PerTeam: PerTeam<boolean>;

	/**
	 * Whether AI soldier health regeneration is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	AI_SoldierHealthRegenAllowed_PerTeam: PerTeam<boolean>;

	/**
	 * Multiplies AI soldier maximum health per team or globally.
	 * Values lower than 1.0 reduce health, while values greater than 1.0 increase health.
	 * If global: `number`
	 * If per team: `[[teamIndex, multiplier], ...]`
	 */
	AI_SoldierMaxHealthMultiplier_PerTeam: PerTeam<number>;

	/**
	 * Multiplies AI soldier health regeneration rate per team or globally.
	 * Values lower than 1.0 slow regeneration, while values greater than 1.0 speed it up.
	 * If global: `number`
	 * If per team: `[[teamIndex, multiplier], ...]`
	 */
	AI_SoldierRegenRateMultiplier_PerTeam: PerTeam<number>;

	/**
	 * Multiplies AI damage dealt per team or globally.
	 * Values lower than 1.0 reduce damage, while values greater than 1.0 increase damage.
	 * If global: `number`
	 * If per team: `[[teamIndex, multiplier], ...]`
	 */
	AI_DamageMultiplier_PerTeam: PerTeam<number>;

	/**
	 * Whether aim assist slowdown is enabled globally.
	 */
	AimAssistSlowdownEnabled: boolean;

	/**
	 * Multiplies soldier movement speed per team or globally.
	 * Values lower than 1.0 reduce speed, while values greater than 1.0 increase speed.
	 * If global: `number`
	 * If per team: `[[teamIndex, multiplier], ...]`
	 */
	SoldierMovementSpeedMultiplier_PerTeam: PerTeam<number>;

	/**
	 * Whether crosshairs (reticles) are allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	CrosshairsAllowed_PerTeam: PerTeam<boolean>;

	/**
	 * Multiplies AI vehicle damage dealt per team or globally.
	 * Values lower than 1.0 reduce damage, while values greater than 1.0 increase damage.
	 * If global: `number`
	 * If per team: `[[teamIndex, multiplier], ...]`
	 */
	AI_VehicleDamageMultiplier_PerTeam: PerTeam<number>;

	/**
	 * Whether AI are allowed to spawn on foot per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	AI_OnFootSpawnAllowed_PerTeam: PerTeam<boolean>;

	/**
	 * Defines the AI squad spawn mode per team or globally.
	 * Corresponds to an internal AI squad spawn behavior enumeration.
	 * If global: `number`
	 * If per team: `[[teamIndex, mode], ...]`
	 */
	AI_SquadSpawnMode_PerTeam: PerTeam<SquadSpawnType>;

	/**
	 * Defines the squad spawn mode per team or globally.
	 * Corresponds to an internal squad spawn behavior enumeration.
	 * If global: `number`
	 * If per team: `[[teamIndex, mode], ...]`
	 */
	SquadSpawnMode_PerTeam: PerTeam<SquadSpawnType>;

	/**
	 * Multiplies AI soldier respawn delay time per team or globally.
	 * Values lower than 1.0 shorten respawn time, while values greater than 1.0 increase it.
	 * If global: `number`
	 * If per team: `[[teamIndex, multiplier], ...]`
	 */
	AI_SoldierRespawnDelayMultiplier_PerTeam: PerTeam<number>;

	/**
	 * Whether friendly fire damage reflection is enabled globally.
	 */
	FriendlyFireDamageReflectionEnabled: boolean;

	/**
	 * Defines the current mod builder game mode globally.
	 * Corresponds to an internal game mode enumeration.
	 */
	ModBuilder_GameMode: ModBuilderGameMode;

	/**
	 * Multiplies the radius of the aim assist snap capsule globally.
	 * Values lower than 1.0 reduce radius, while values greater than 1.0 increase radius.
	 */
	AimAssistSnapCapsuleRadiusMultiplier: number;

	/**
	 * Maximum number of team kills before friendly fire damage reflection activates.
	 */
	FriendlyFireDamageReflectionMaxTeamKills: number;

	/**
	 * Defines the total game time for the Portal experience in minutes.
	 * Max of 60 minutes
	 */
	fPortalExperienceGameTime: number;

	/**
	 * Defines the maximum squad size per team or globally.
	 * If global: `number`
	 * If per team: `[[teamIndex, squadSize], ...]`
	 */
	SquadSize_PerTeam: PerTeam<number>;

	/**
	 * Whether third-person vehicle camera views are disabled globally.
	 */
	DisableVehicle3p: boolean;

	/**
	 * Controls whether reloading a magazine causes the soldier or vehicle to lose any remaining ammo within the currently loaded magazine.
	 */
	ReloadWholeWeaponMagazines: boolean;

	/**
	 * Controls the degree of feedback given to the player via audio or visual cues.
	 */
	bPortalRestrictedGameFeedback: boolean;

	/**
	 * Whether health bars are allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	HealthBarAllowed_PerTeam: PerTeam<boolean>;

	/**
	 * Whether damage numbers (floating hit indicators) are hidden per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isHidden], ...]`
	 */
	HideDamageNumbers_PerTeam: PerTeam<boolean>;

	/**
	 * Whether hit indicators are allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	HitIndicatorAllowed_PerTeam: PerTeam<boolean>;

	/**
	 * Whether HUD inventory auto-hide is enabled per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isEnabled], ...]`
	 */
	HUDInventoryAutoHide_PerTeam: PerTeam<boolean>;

	/**
	 * Whether reduced friendly world icons are used globally.
	 */
	UseReducedFriendlyWorldIcon: boolean;

	/**
	 * Whether capture point scaling is allowed globally.
	 */
	CapturePointScaleAllowed: boolean;

	/**
	 * Whether the kill feed (kill log) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	KillFeedAllowed_PerTeam: PerTeam<boolean>;

	/**
	 * Whether the squad list UI element is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	SquadListAllowed_PerTeam: PerTeam<boolean>;

	/**
	 * Whether voice-over (VO) communication is restricted globally.
	 */
	bRestrictCommunicationVO: boolean;

	/**
	 * Whether UI-based communication (pings, menus, etc.) is restricted globally.
	 */
	bRestrictCommunicationUI: boolean;

	/**
	 * Whether player spotting is allowed globally.
	 */
	SpottingAllowed: boolean;

	/**
	 * Controls whether AI can navigate the map, turning it off will decrease loading times.
	 */
	Portal_GenerateNavMesh: boolean;

	/**
	 * Defines the game mode start timer for spawn balancing, in seconds.
	 * Note: This is a best guess and is undocumneted currently, if you notice it is something else
	 * please create an issue
	 */
	SpawnBalancing_GamemodeStartTimer: number;

	/**
	 * Defines the player count ratio used for spawn balancing calculations.
	 * Typically a value between 0.0 and 1.0.
	 * Note: This is a best guess and is undocumneted currently, if you notice it is something else
	 * please create an issue
	 */
	SpawnBalancing_GamemodePlayerCountRatio: number;

	/**
	 * Specifies the lobby player count threshold used to start a match in Conquest (CQ) game modes.
	 * The timer will begin counting down once this player count is reached.
	 * Note: This is a best guess and is undocumented currently; if you notice it behaves differently,
	 * please create an issue.
	 */
	CQ_iLobbyPlayerCountStartTimer: number;

	/**
	 * Specifies the lobby player count threshold used to start a match in Breakthrough (BT) game modes.
	 * The timer will begin counting down once this player count is reached.
	 * Note: This is a best guess and is undocumented currently; if you notice it behaves differently,
	 * please create an issue.
	 */
	BT_iLobbyPlayerCountStartTimer: number;

	/**
	 * Specifies the lobby player count threshold used to start a match in Rush game modes.
	 * The timer will begin counting down once this player count is reached.
	 * Note: This is a best guess and is undocumented currently; if you notice it behaves differently,
	 * please create an issue.
	 */
	Rush_iLobbyPlayerCountStartTimer: number;

	/**
	 * Defines the faction ID per team or globally.
	 * If global: `FactionID`
	 * If per team: `[[teamIndex, FactionID], ...]`
	 */
	FactionID_PerTeam: PerTeam<FactionID>;

	/**
	 * Whether class-locked weapon loadouts are enabled globally.
	 */
	EnableClassLockedWeaponLoadouts: boolean;

	/**
	 * Whether on-foot spawning is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	OnFootSpawnAllowed_PerTeam: PerTeam<boolean>;

	/**
	 * Whether exiting vehicles is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	ExitVehiclesAllowed_PerTeam: PerTeam<boolean>;

	/**
	 * Multiplies the vehicle spawn delay per team or globally.
	 * Values lower than 1.0 shorten delay, while values greater than 1.0 increase it.
	 * If global: `number`
	 * If per team: `[[teamIndex, multiplier], ...]`
	 */
	VehicleSpawnDelayMultiplier_PerTeam: PerTeam<number>;
};
