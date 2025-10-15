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
	Backfill = 1,
	Static = 2,
}

/**
 * Controls the rules for Squad Spawning, for squad members and squad leaders.
 */
export enum SquadSpawnType {
	All = 0,
	SquadmatesOnLeader_LeaderNone = 1,
	SquadmatesOnLeader_LeaderAll = 2,
	Disabled = 2,
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
 * Represents a value that can either apply globally or per team.
 * - Global: a single scalar (e.g., `true`, `5`, `1.2`)
 * - Per team: an array of `[teamIndex, value]` tuples
 */
export type PerTeam<T> = T | [number, T][];

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
	AI_SquadSpawnMode_PerTeam: SquadSpawnType;

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

/**
 * Describes all configurable asset restrictions for the game.
 * Each restriction can either apply globally (single value)
 * or per team (as an array of [teamIndex, value] pairs).
 */
export type AssetRestrictions = {
	/**
	 * Whether the Assault class is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	AssaultClass: PerTeam<boolean>;

	/**
	 * Whether the Support class is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	SupportClass: PerTeam<boolean>;

	/**
	 * Whether the Recon class is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	ReconClass: PerTeam<boolean>;

	/**
	 * Whether the Engineer class is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	EngineerClass: PerTeam<boolean>;

	/**
	 * Whether the HK417A2 weapon (U_HK417A2) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_HK417A2: PerTeam<boolean>;

	/**
	 * Whether the ARAD MR weapon (U_ARADMR) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_ARADMR: PerTeam<boolean>;

	/**
	 * Whether the AK-205 weapon (U_AK205) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_AK205: PerTeam<boolean>;

	/**
	 * Whether the M4A1 weapon (U_M4A1) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_M4A1: PerTeam<boolean>;

	/**
	 * Whether the QBZ-192 weapon (U_QBZ192) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_QBZ192: PerTeam<boolean>;

	/**
	 * Whether the XM7 weapon (U_XM7) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_XM7: PerTeam<boolean>;

	/**
	 * Whether the SIG553R weapon (U_SIG553R) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_SIG553R: PerTeam<boolean>;

	/**
	 * Whether the 590A1 shotgun (U_590A1) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_590A1: PerTeam<boolean>;

	/**
	 * Whether the 185-KSK weapon (U_185KSK) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_185KSK: PerTeam<boolean>;

	/**
	 * Whether the M1014 shotgun (U_M1014) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_M1014: PerTeam<boolean>;

	/**
	 * Whether the stationary M2 machine gun emplacement (U_VEH_Stationary_M2MG) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_VEH_Stationary_M2MG: PerTeam<boolean>;

	/**
	 * Whether the stationary GDF-009 emplacement (U_VEH_Stationary_GDF009) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_VEH_Stationary_GDF009: PerTeam<boolean>;

	/**
	 * Whether the stationary BGM-71 TOW launcher (U_VEH_Stationary_BGM71TOW) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_VEH_Stationary_BGM71TOW: PerTeam<boolean>;

	/**
	 * Whether the Stinger launcher (U_Stinger) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_Stinger: PerTeam<boolean>;

	/**
	 * Whether the M320 Smoke launcher (U_M320Smoke) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_M320Smoke: PerTeam<boolean>;

	/**
	 * Whether the M320 Thermobaric launcher (U_M320Thermobaric) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_M320Thermobaric: PerTeam<boolean>;

	/**
	 * Whether the Drill GL launcher (U_DrillGL) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_DrillGL: PerTeam<boolean>;

	/**
	 * Whether the M320 HE launcher (U_M320HE) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_M320HE: PerTeam<boolean>;

	/**
	 * Whether the Airburst Incendiary weapon (U_AirburstIncendiary) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_AirburstIncendiary: PerTeam<boolean>;

	/**
	 * Whether the M39 EMR weapon (U_M39EMR) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_M39EMR: PerTeam<boolean>;

	/**
	 * Whether the SVDM sniper rifle (U_SVDM) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_SVDM: PerTeam<boolean>;

	/**
	 * Whether the SVCh sniper rifle (U_SVCh) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_SVCh: PerTeam<boolean>;

	/**
	 * Whether the 6P67 assault rifle (U_6P67) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_6P67: PerTeam<boolean>;

	/**
	 * Whether the G36 assault rifle (U_G36) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_G36: PerTeam<boolean>;

	/**
	 * Whether the HK433 assault rifle (U_HK433) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_HK433: PerTeam<boolean>;

	/**
	 * Whether the G3A4 battle rifle (U_G3A4) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_G3A4: PerTeam<boolean>;

	/**
	 * Whether the L85A3 assault rifle (U_L85A3) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_L85A3: PerTeam<boolean>;

	/**
	 * Whether the ACE 32 assault rifle (U_ACE32) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_ACE32: PerTeam<boolean>;

	/**
	 * Whether the SCAR-L assault rifle (U_SCARL) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_SCARL: PerTeam<boolean>;

	/**
	 * Whether the Tavor 7 battle rifle (U_Tavor7) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_Tavor7: PerTeam<boolean>;

	/**
	 * Whether the Ultimax light machine gun (U_Ultimax) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_Ultimax: PerTeam<boolean>;

	/**
	 * Whether the Minimi light machine gun (U_Minimi) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_Minimi: PerTeam<boolean>;

	/**
	 * Whether the M27 IAR weapon (U_M27IAR) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_M27IAR: PerTeam<boolean>;

	/**
	 * Whether the M250 light machine gun (U_M250) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_M250: PerTeam<boolean>;

	/**
	 * Whether the M240L machine gun (U_M240L) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_M240L: PerTeam<boolean>;

	/**
	 * Whether the MG4K light machine gun (U_MG4K) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_MG4K: PerTeam<boolean>;

	/**
	 * Whether the M60E6 light machine gun (U_M60E6) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_M60E6: PerTeam<boolean>;

	/**
	 * Whether the RPKM light machine gun (U_RPKM) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_RPKM: PerTeam<boolean>;

	/**
	 * Whether the M18 pistol (U_M18) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_M18: PerTeam<boolean>;

	/**
	 * Whether the Five-Seven pistol (U_FiveSeven) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_FiveSeven: PerTeam<boolean>;

	/**
	 * Whether the Raging Hunter revolver (U_RagingHunter) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_RagingHunter: PerTeam<boolean>;

	/**
	 * Whether the M45A1 pistol (U_M45A1) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_M45A1: PerTeam<boolean>;

	/**
	 * Whether the M2010 ESR sniper rifle (U_M2010ESR) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_M2010ESR: PerTeam<boolean>;

	/**
	 * Whether the SV-98M sniper rifle (U_SV98M) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_SV98M: PerTeam<boolean>;

	/**
	 * Whether the MRAD sniper rifle (U_MRAD) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_MRAD: PerTeam<boolean>;

	/**
	 * Whether the P90 submachine gun (U_P90) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_P90: PerTeam<boolean>;

	/**
	 * Whether the MPX submachine gun (U_MPX) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_MPX: PerTeam<boolean>;

	/**
	 * Whether the UMP-40 submachine gun (U_UMP40) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_UMP40: PerTeam<boolean>;

	/**
	 * Whether the Vector submachine gun (U_Vector) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_Vector: PerTeam<boolean>;

	/**
	 * Whether the MP5 MLI submachine gun (U_MP5MLI) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_MP5MLI: PerTeam<boolean>;

	/**
	 * Whether the APDW (Advanced Personal Defense Weapon) (U_APDW) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_APDW: PerTeam<boolean>;

	/**
	 * Whether the MP7A2 submachine gun (U_MP7A2) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_MP7A2: PerTeam<boolean>;

	/**
	 * Whether the APC10 submachine gun (U_APC10) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_APC10: PerTeam<boolean>;

	/**
	 * Whether the Cheetah tank (U_VEH_Tank_Cheetah) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_VEH_Tank_Cheetah: PerTeam<boolean>;

	/**
	 * Whether the Flyer 60 vehicle (U_OB_VEH_Car_Flyer60_Base) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_OB_VEH_Car_Flyer60_Base: PerTeam<boolean>;

	/**
	 * Whether the CV90 tank (U_VEH_Tank_CV90) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_VEH_Tank_CV90: PerTeam<boolean>;

	/**
	 * Whether the M1 Abrams tank (U_VEH_Tank_Abrams) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_VEH_Tank_Abrams: PerTeam<boolean>;

	/**
	 * Whether the Gepard anti-air tank (U_VEH_Tank_Gepard) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_VEH_Tank_Gepard: PerTeam<boolean>;

	/**
	 * Whether the Bradley infantry fighting vehicle (U_VEH_Tank_Bradley) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_VEH_Tank_Bradley: PerTeam<boolean>;

	/**
	 * Whether the Leopard main battle tank (U_VEH_Tank_Leopard) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_VEH_Tank_Leopard: PerTeam<boolean>;

	/**
	 * Whether ground transport vehicles (Portal_WebApp_GroundTransport) are allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	Portal_WebApp_GroundTransport: PerTeam<boolean>;

	/**
	 * Whether the Eurocopter helicopter (U_VEH_Helicopter_Eurocopter) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_VEH_Helicopter_Eurocopter: PerTeam<boolean>;

	/**
	 * Whether the SU-57 fighter jet (U_VEH_Airplane_SU57) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_VEH_Airplane_SU57: PerTeam<boolean>;

	/**
	 * Whether the F-16 fighter jet (U_VEH_Airplane_F16) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_VEH_Airplane_F16: PerTeam<boolean>;

	/**
	 * Whether the AH-64E Apache attack helicopter (U_VEH_Helicopter_AH64E) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_VEH_Helicopter_AH64E: PerTeam<boolean>;

	/**
	 * Whether the UH-60 transport helicopter (U_VEH_Helicopter_UH60) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_VEH_Helicopter_UH60: PerTeam<boolean>;

	/**
	 * Whether the F-22 Raptor fighter jet (U_VEH_Airplane_F22) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_VEH_Airplane_F22: PerTeam<boolean>;

	/**
	 * Whether the JAS 39 Gripen fighter jet (U_VEH_Airplane_JAS39) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_VEH_Airplane_JAS39: PerTeam<boolean>;

	/**
	 * Whether the repair tool (U_RepairTool) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_RepairTool: PerTeam<boolean>;

	/**
	 * Whether the Adrenaline Shot gadget (U_AdrenalineShot) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_AdrenalineShot: PerTeam<boolean>;

	/**
	 * Whether the Spawn Beacon gadget (U_SpawnBeacon) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_SpawnBeacon: PerTeam<boolean>;

	/**
	 * Whether the T-UGS motion sensor (U_TUGS) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_TUGS: PerTeam<boolean>;

	/**
	 * Whether the Deployable Cover gadget (U_DeployableCover) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_DeployableCover: PerTeam<boolean>;

	/**
	 * Whether the EIDOS detection device (U_EIDOS) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_EIDOS: PerTeam<boolean>;

	/**
	 * Whether the Deployable Mortar (U_DeployableMortar) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_DeployableMortar: PerTeam<boolean>;

	/**
	 * Whether the Supply Crate gadget (U_Gadget_SupplyCrate) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_Gadget_SupplyCrate: PerTeam<boolean>;

	/**
	 * Whether the Drone gadget (U_Drone) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_Drone: PerTeam<boolean>;

	/**
	 * Whether the Sniper Decoy gadget (U_SniperDecoy) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_SniperDecoy: PerTeam<boolean>;

	/**
	 * Whether the MP-APS active protection system (U_MPAPS) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_MPAPS: PerTeam<boolean>;

	/**
	 * Whether the Deployable Ladder (U_Ladder) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_Ladder: PerTeam<boolean>;

	/**
	 * Whether the EOD Bot gadget (U_EODBot) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_EODBot: PerTeam<boolean>;

	/**
	 * Whether the Vehicle Supply Crate gadget (U_Gadget_VehicleSupplyCrate) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_Gadget_VehicleSupplyCrate: PerTeam<boolean>;

	/**
	 * Whether the Anti-Tank Mine gadget (U_Gadget_ATMine) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_Gadget_ATMine: PerTeam<boolean>;

	/**
	 * Whether the C4 explosive (U_C4) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_C4: PerTeam<boolean>;

	/**
	 * Whether the PTKM-1R smart mine (U_PTKM1R) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_PTKM1R: PerTeam<boolean>;

	/**
	 * Whether the M4 SLAM explosive (U_M4SLAM) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_M4SLAM: PerTeam<boolean>;

	/**
	 * Whether the M18 Claymore (U_M18Claymore) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_M18Claymore: PerTeam<boolean>;

	/**
	 * Whether the Javelin launcher (U_Javelin) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_Javelin: PerTeam<boolean>;

	/**
	 * Whether the RPG-7 V2 launcher (U_RPG7V2) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_RPG7V2: PerTeam<boolean>;

	/**
	 * Whether the AT4 launcher (U_AT4) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_AT4: PerTeam<boolean>;

	/**
	 * Whether the MBT LAW (rocket) (U_MBTLAW) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_MBTLAW: PerTeam<boolean>;

	/**
	 * Whether the Combat Knife melee weapon (U_Melee_CombatKnife) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_Melee_CombatKnife: PerTeam<boolean>;

	/**
	 * Whether the Sledgehammer melee weapon (U_Melee_Sledgehammer) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_Melee_Sledgehammer: PerTeam<boolean>;

	/**
	 * Whether the Geko Knife melee weapon (U_Melee_GekoKnife) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_Melee_GekoKnife: PerTeam<boolean>;

	/**
	 * Whether the Tracer Dart gadget (U_TracerDart) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_TracerDart: PerTeam<boolean>;

	/**
	 * Whether the M26 Mass (Dragonbreath) round (U_M26MassDragonbreath) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_M26MassDragonbreath: PerTeam<boolean>;

	/**
	 * Whether the PLD device (U_PLD) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_PLD: PerTeam<boolean>;

	/**
	 * Whether defibrillators equipped (U_Defibrillators_Equipped) are allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_Defibrillators_Equipped: PerTeam<boolean>;

	/**
	 * Whether the Supply Pouch weapon/gadget (U_WEP_SupplyPouch) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_WEP_SupplyPouch: PerTeam<boolean>;

	/**
	 * Whether incendiary grenades (U_Grenade_IncendiaryGrenade) are allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_Grenade_IncendiaryGrenade: PerTeam<boolean>;

	/**
	 * Whether frag grenades (U_WEP_FragGrenade) are allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_WEP_FragGrenade: PerTeam<boolean>;

	/**
	 * Whether the Proximity Sensor gadget (U_GAD_Proximity) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_GAD_Proximity: PerTeam<boolean>;

	/**
	 * Whether the Anti-Tank Grenade (U_AntiTankGrenade) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_AntiTankGrenade: PerTeam<boolean>;

	/**
	 * Whether the Throwing Knife (U_WEP_ThrowingKnife) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_WEP_ThrowingKnife: PerTeam<boolean>;

	/**
	 * Whether Flashbang grenades (U_WEP_Flashbang) are allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_WEP_Flashbang: PerTeam<boolean>;

	/**
	 * Whether Concussion grenades (U_WEP_ConcussionGrenade) are allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_WEP_ConcussionGrenade: PerTeam<boolean>;

	/**
	 * Whether Mini V40 grenades (U_MiniV40) are allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_MiniV40: PerTeam<boolean>;

	/**
	 * Whether the Portal carbine weapon category (Portal_WebApp_Carbine) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	Portal_WebApp_Carbine: PerTeam<boolean>;

	/**
	 * Whether the Portal shotgun weapon category (Portal_WebApp_SG) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	Portal_WebApp_SG: PerTeam<boolean>;

	/**
	 * Whether the Portal stationary weapon category (Portal_WebApp_Stationary) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	Portal_WebApp_Stationary: PerTeam<boolean>;

	/**
	 * Whether the Portal grenade launcher weapon category (Portal_WebApp_GrenadeLauncher) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	Portal_WebApp_GrenadeLauncher: PerTeam<boolean>;

	/**
	 * Whether the Portal designated marksman rifle (DMR) weapon category (Portal_WebApp_DMR) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	Portal_WebApp_DMR: PerTeam<boolean>;

	/**
	 * Whether the Portal assault rifle weapon category (Portal_WebApp_AR) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	Portal_WebApp_AR: PerTeam<boolean>;

	/**
	 * Whether the Portal machine gun weapon category (Portal_WebApp_MG) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	Portal_WebApp_MG: PerTeam<boolean>;

	/**
	 * Whether the Portal pistol weapon category (Portal_WebApp_Pistol) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	Portal_WebApp_Pistol: PerTeam<boolean>;

	/**
	 * Whether the Portal sniper rifle weapon category (Portal_WebApp_SR) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	Portal_WebApp_SR: PerTeam<boolean>;

	/**
	 * Whether the Portal PDW (personal defense weapon) category (Portal_WebApp_PDW) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	Portal_WebApp_PDW: PerTeam<boolean>;

	/**
	 * Whether the Portal ground combat vehicle category (Portal_WebApp_GroundCombat) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	Portal_WebApp_GroundCombat: PerTeam<boolean>;

	/**
	 * Whether the Portal air combat vehicle category (Portal_WebApp_AirCombat) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	Portal_WebApp_AirCombat: PerTeam<boolean>;

	/**
	 * Whether the Portal class gadget category (Portal_WebApp_ClassGadget) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	Portal_WebApp_ClassGadget: PerTeam<boolean>;

	/**
	 * Whether the Portal deployable gadget category (Portal_WebApp_Deployable) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	Portal_WebApp_Deployable: PerTeam<boolean>;

	/**
	 * Whether the Portal explosive gadget category (Portal_WebApp_Explosive) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	Portal_WebApp_Explosive: PerTeam<boolean>;

	/**
	 * Whether the Portal launcher weapon category (Portal_WebApp_Launcher) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	Portal_WebApp_Launcher: PerTeam<boolean>;

	/**
	 * Whether the Portal melee weapon category (Portal_WebApp_Melee) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	Portal_WebApp_Melee: PerTeam<boolean>;

	/**
	 * Whether the Portal miscellaneous gadget category (Portal_WebApp_Gadget_Misc) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	Portal_WebApp_Gadget_Misc: PerTeam<boolean>;

	/**
	 * Whether the Portal throwable category (Portal_WebApp_Throwable) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	Portal_WebApp_Throwable: PerTeam<boolean>;
};

export enum AttachmentType {
	SpatialData = 1,
	TypeScript = 2,
	Strings = 4,
}

/**
 * Represents a map resource within the game or editor.
 */
export type Map = {
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
		aiCapacity: number;

		/**
		 * Type of AI assigned to this team.
		 * Unknown what any other value than 1 means. If you are aware, please create an issue
		 */
		aiType: 1;
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
	mapRotation?: Map[];

	/**
	 * Optional workspace configuration defining project metadata,
	 * environment paths, and editor state for the mod.
	 */
	workspace?: Workspace;

	/**
	 * Defines team composition or class distribution for this configuration.
	 * Each element specifies per-team roles, limits, or balance parameters.
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
