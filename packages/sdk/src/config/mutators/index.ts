import type { PerTeam } from "../index.ts";

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
	Undocumented = 3,
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

export type Mutators = {
	/**
	 * AI PRONE
	 * Controls whether AI soldiers can go prone.
	 *
	 * @id 2294859495
	 */
	AI_ProneAllowed_PerTeam: PerTeam<boolean>;

	/**
	 * @id 3918918809
	 * @constraints Range: [0 to 1]
	 * @default 1
	 */
	AgingModifierForCommittedOrder: number;

	/**
	 * MAXIMUM HUMAN PLAYERS
	 * Max Player Count Per Team
	 *
	 * @id 2976738751
	 * @constraints Range: [0 to 128]
	 * @default 0
	 */
	MaxPlayerCount_PerTeam: PerTeam<number>;

	/**
	 * Static AI Count Per Team
	 * Sets the maximum number of static AI, this setting is not used for Backfill AI.
	 *
	 * @id 1544673979
	 * @constraints Range: [0 to 64]
	 * @default 0
	 */
	AiMaxCount_PerTeam: PerTeam<number>;

	/**
	 * AI TYPE
	 * Controls which type of AI to spawn. Backfill AI will automatically spawn and can be replaced by human players. Static AI is a fixed number that cannot be replaced, for Solo or Co-op experiences.
	 *
	 * @id 1666992788
	 * @constraints Allowed Values: 0, 1, 2
	 * @default 0
	 */
	AiSpawnType: AiSpawnType;

	/**
	 * FRIENDLY FIRE
	 * Controls whether damage will be applied to allies.
	 *
	 * @id 836139493
	 */
	FriendlyFireAllowed_PerTeam: PerTeam<boolean>;

	/**
	 * SQUAD SPAWN TYPE
	 * Controls the rules for Squad Spawning, for squad members and squad leaders.
	 *
	 * @id 1476270551
	 * @constraints Allowed Values: 0, 1, 2, 3
	 * @default 0
	 */
	SquadSpawnMode_PerTeam: PerTeam<SquadSpawnType>;

	/**
	 * MAN-DOWN TYPE
	 * Determines the Man-Down behavior when a soldier is downed.
	 *
	 * @id 1722734603
	 * @constraints Allowed Values: 0, 1, 2
	 * @default 1
	 */
	ManDownExperienceType_PerTeam: PerTeam<ManDownExperienceType>;

	/**
	 * STRAFE WHILE SPRINTING
	 * Controls whether soldiers are allowed to strafe laterally while sprinting.
	 *
	 * @id 2382243254
	 */
	SprintStrafeAllowed_PerTeam: PerTeam<boolean>;

	/**
	 * FACTION
	 * Sets the faction for each team.
	 *
	 * @id 548273204
	 * @constraints Allowed Values: -1865993703, 0, 607944106
	 * @default 0
	 */
	FactionID_PerTeam: PerTeam<FactionID>;

	/**
	 * Sets the numbers of teams that will be in the match.
	 *
	 * @id 4262527312
	 * @constraints Range: [1 to 129]
	 * @default 3
	 */
	MaxTeamCount: number;

	/**
	 * PASSENGER SEATS
	 * Controls whether vehicles take passengers.
	 *
	 * @id 561253693
	 */
	Vehicle_AllowPassengers: boolean;

	/**
	 * AI PASSENGER SEATS
	 * Controls whether vehicles take AI passengers.
	 *
	 * @id 1557246182
	 */
	AI_Vehicle_AllowAiInPassengerSeats: boolean;

	/**
	 * ALLY IDENTIFICATION
	 * Controls whether allies are visibly marked as allies when viewed in-game.
	 *
	 * @id 1308565896
	 */
	FriendlyIdentificationAllowed_PerTeam: PerTeam<boolean>;

	/**
	 * SQUAD REVIVE
	 * Controls whether soldiers in a squad can revive other players in the squad, regardless of class or gadget.
	 *
	 * @id 2270279538
	 */
	SquadReviveAllowed_PerTeam: PerTeam<boolean>;

	/**
	 * REINFORCEMENT MULTIPLIER
	 * Multiplies the reinforcement count required to end the game. Values less than 1.0 will result in fewer reinforcements and shorter games, while values greater than 1.0 will increase the reinforcement count and extend the game time.
	 *
	 * @id 809598703
	 * @constraints Range: [0.10000000149011612 to 10]
	 * @default 1
	 */
	ScoreMultiplier: number;

	/**
	 * SECTOR TIME
	 * Sets the maximum time (in minutes) for each sector.
	 *
	 * @id 1663663112
	 * @constraints Range: [10 to 60]
	 * @default 15
	 */
	R_iSectorTime: number;

	/**
	 * GAME TIME
	 * Sets the maximum time (in minutes) for the round
	 *
	 * @id 3283626574
	 * @constraints Range: [30 to 60]
	 * @default 45
	 */
	CQ_iModeTime: number;

	/**
	 * AIM ASSIST ZOOM SNAP
	 * Controls whether Snap-to-target is used for Aim Assisted players. When this is set to OFF, the crosshair will not snap to a nearby target when entering ADS.
	 *
	 * @id 1152845640
	 */
	AimAssistSnapZoomEnabled: boolean;

	/**
	 * PRONE
	 * Controls whether soldiers can go prone.
	 *
	 * @id 2434061171
	 */
	ProneAllowed_PerTeam: PerTeam<boolean>;

	/**
	 * VEHICLE HEALTH REGENERATION
	 * Controls whether vehicles regenerate health over time after not taking damage.
	 *
	 * @id 3575692072
	 */
	VehicleHealthRegenAllowed_PerTeam: PerTeam<boolean>;

	/**
	 * INFINITE WEAPON MAGAZINES
	 * Control if primary and secondary weapons have infinite magazines.
	 *
	 * @id 794544630
	 */
	InfiniteWeaponMagazines_PerTeam: PerTeam<boolean>;

	/**
	 * SPRINT
	 * Controls whether soldiers are allowed to sprint.
	 *
	 * @id 902078290
	 */
	SprintAllowed_PerTeam: PerTeam<boolean>;

	/**
	 * SOLDIER HEALTH REGENERATION
	 * Controls whether soldiers regenerate health over time after not taking damage.
	 *
	 * @id 233704148
	 */
	SoldierHealthRegenAllowed_PerTeam: PerTeam<boolean>;

	/**
	 * STATIONARY WEAPON EMPLACEMENTS
	 * Controls whether Stationary Weapon Emplacements should appear in the map (where applicable).
	 *
	 * @id 1526538121
	 */
	StationaryEmplacementsAllowed: boolean;

	/**
	 * SLIDE
	 * Controls whether soldiers can slide.
	 *
	 * @id 3767405896
	 */
	SlideAllowed_PerTeam: PerTeam<boolean>;

	/**
	 * COMPASS
	 * Controls whether the Compass is displayed in the HUD.
	 *
	 * @id 2005480485
	 */
	CompassAllowed_PerTeam: PerTeam<boolean>;

	/**
	 * MINIMAP
	 * Controls whether the Minimap is displayed in the HUD.
	 *
	 * @id 588019110
	 */
	MinimapAllowed_PerTeam: PerTeam<boolean>;

	/**
	 * PING BEHAVIOR
	 * Determines the behavior of the Ping command.
	 *
	 * @id 1017389623
	 * @constraints Allowed Values: 0, 2
	 * @default 0
	 */
	PingBehavior_PerTeam: PerTeam<PingBehavior>;

	/**
	 * HUD
	 * Controls whether players have a Heads-Up Display. Does not disable the Full Map.
	 *
	 * @id 3287878479
	 */
	HUDAllowed_PerTeam: PerTeam<boolean>;

	/**
	 * SOLDIER MAXIMUM HEALTH MULTIPLIER
	 * Multiplies soldier maximum health. Values less than 1.0 reduce health, while values greater than 1.0 increase it.
	 *
	 * @id 1899412422
	 * @constraints Range: [0.10000000149011612 to 5]
	 * @default 1
	 */
	SoldierMaxHealthMultiplier_PerTeam: PerTeam<number>;

	/**
	 * SOLDIER REDEPLOY DELAY MULTIPLIER
	 * Multiplies the time it takes for soldiers to redeploy. Values less than 1.0 allow soldiers to redeploy more quickly, while values greater than 1.0 force soldiers to wait longer before redeploying.
	 *
	 * @id 2390282071
	 * @constraints Range: [0 to 18]
	 * @default 1
	 */
	SoldierRespawnDelayMultiplier_PerTeam: PerTeam<number>;

	/**
	 * PLAYER DAMAGE MULTIPLIER
	 * Multiplies damage from all sources. Values less than 1.0 reduce damage from all sources, while values greater than 1.0 increase damage.
	 *
	 * @id 1671953404
	 * @constraints Range: [0.009999999776482582 to 5]
	 * @default 1
	 */
	DamageMultiplier_PerTeam: PerTeam<number>;

	/**
	 * VEHICLE MAXIMUM HEALTH MULTIPLIER
	 * Multiplies the maximum health of all vehicles. Values less than 1.0 reduces the health of all vehicles, while values greater than 1.0 increases it.
	 *
	 * @id 3752128436
	 * @constraints Range: [0.10000000149011612 to 3.5]
	 * @default 1
	 */
	VehicleMaxHealthMultiplier_PerTeam: PerTeam<number>;

	/**
	 * VEHICLE SPAWN DELAY MULTIPLIER
	 * Multiplies the default timer that spawns or respawns vehicles. Values below 1.0 make spawns faster, values above 1.0 delay spawns for longer.
	 *
	 * @id 2145356810
	 * @constraints Range: [0.20000000298023224 to 5]
	 * @default 1
	 */
	Portal_KitsLimit_VehicleSpawnDelayMultiplier_PerTeam: PerTeam<number>;

	/**
	 * PROJECTILE SPEED MULTIPLIER
	 * Multiplies the speed of all projectiles. Values smaller than 1.0 will slow projectiles, values larger than 1.0 will increase the speed.
	 *
	 * @id 900970640
	 * @constraints Range: [0.5 to 5]
	 * @default 1
	 */
	ProjectileSpeedMultiplier: number;

	/**
	 * BODY SHOT DAMAGE MULTIPLIER
	 * Multiplies the damage dealt when successfully landing a body shot. Note that this modifier combines with other damage modifiers.
	 *
	 * @id 31136365
	 * @constraints Range: [0 to 4]
	 * @default 1
	 */
	BodyshotMultiplier_PerTeam: PerTeam<number>;

	/**
	 * HEADSHOT DAMAGE MULTIPLIER
	 * Multiplies the damage dealt when successfully landing a headshot. Note that this modifier combines with other damage modifiers.
	 *
	 * @id 2101284162
	 * @constraints Range: [0 to 4]
	 * @default 1
	 */
	HeadshotMultiplier_PerTeam: PerTeam<number>;

	/**
	 * FALL DAMAGE MULTIPLIER
	 * Multiplies damage taken from falling. Values lower than 1.0 reduce damage, while values greater than 1.0 increase damage.
	 *
	 * @id 2759418217
	 * @constraints Range: [0 to 2]
	 * @default 1
	 */
	FallDamageHeightMultiplier_PerTeam: PerTeam<number>;

	/**
	 * VEHICLE DAMAGE MULTIPLIER
	 * Multiplies the damage output of vehicles. Note that this modifier combines with other damage modifiers.
	 *
	 * @id 2009820847
	 * @constraints Range: [0.009999999776482582 to 5]
	 * @default 1
	 */
	VehicleDamageMultiplier_PerTeam: PerTeam<number>;

	/**
	 * VEHICLE HEALTH REGENERATION RATE
	 * Controls the timing for vehicle health regeneration. Values less than 1.0 slow the time it takes to regenerate to full health, while values greater than 1.0 regenerate health more quickly for all vehicles.
	 *
	 * @id 896388464
	 * @constraints Range: [0.10000000149011612 to 10]
	 * @default 1
	 */
	VehicleRegenRateMultiplier_PerTeam: PerTeam<number>;

	/**
	 * SOLDIER HEALTH REGENERATION RATE
	 * Controls the timing for soldier health regeneration. Values less than 1.0 slow the time it takes to regenerate to full health, while values greater than 1.0 regenerate health more quickly.
	 *
	 * @id 2317849662
	 * @constraints Range: [0.10000000149011612 to 10]
	 * @default 1
	 */
	SoldierRegenRateMultiplier_PerTeam: PerTeam<number>;

	/**
	 * SCOREBOARD TYPE
	 * Controls what type of scoreboard layout to use.
	 *
	 * @id 2749696498
	 * @constraints Allowed Values: 0, 1, 2, 3, 4
	 * @default 1
	 */
	ScoreboardType: ScoreboardType;

	/**
	 * AI MAN-DOWN TYPE
	 * Determines the Man-Down behavior when an AI soldier is downed.
	 *
	 * @id 4119966672
	 * @constraints Allowed Values: 0, 1, 2
	 * @default 1
	 */
	AI_ManDownExperienceType_PerTeam: PerTeam<number>;

	/**
	 * AI SOLDIER MOVEMENT SPEED
	 * Controls the default speed of AI Soldier movement, which can then be multiplied by other movement types. Values less than 1.0 slow down AI soldier movement, while values greater than 1.0 increase movement speed.
	 *
	 * @id 918657157
	 * @constraints Range: [0.800000011920929 to 1.2000000476837158]
	 * @default 1
	 */
	AI_SoldierMovementSpeedMultiplier_PerTeam: PerTeam<number>;

	/**
	 * AI SPRINT
	 * Controls whether AI soldiers are allowed to sprint.
	 *
	 * @id 186024129
	 */
	AI_SprintAllowed_PerTeam: PerTeam<boolean>;

	/**
	 * AI EXITING VEHICLES
	 * Controls whether AI soldiers inside a vehicle can exit the vehicle. When this is set to OFF, AI soldiers in a vehicle must remain in the vehicle.
	 *
	 * @id 3239967550
	 */
	AI_ExitVehiclesAllowed_PerTeam: PerTeam<boolean>;

	/**
	 * TICKETS PER-KILL MULTIPLIER
	 * Control how many tickets are removed on a kill.
	 *
	 * @id 105207428
	 * @constraints Range: [0 to 10]
	 * @default 1
	 */
	ScorePerKillMultiplier: number;

	/**
	 * INFINITE AMMO
	 * Controls whether soldier weapons have infinite ammo and never need to reload.
	 *
	 * @id 2114774834
	 */
	InfiniteWeaponAmmo_PerTeam: PerTeam<boolean>;

	/**
	 * AI SOLDIER HEALTH REGENERATION
	 * Controls whether AI soldiers regenerate health over time after not taking damage.
	 *
	 * @id 734729469
	 */
	AI_SoldierHealthRegenAllowed_PerTeam: PerTeam<boolean>;

	/**
	 * AI SOLDIER MAXIMUM HEALTH MULTIPLIER
	 * Multiplies AI soldier maximum health. Values less than 1.0 reduce AI health, while values greater than 1.0 increase it.
	 *
	 * @id 4092794051
	 * @constraints Range: [0.10000000149011612 to 10]
	 * @default 1
	 */
	AI_SoldierMaxHealthMultiplier_PerTeam: PerTeam<number>;

	/**
	 * AI HEALTH REGENERATION RATE
	 * Controls the timing for AI soldier health regeneration. Values less than 1.0 slow the time it takes to regenerate AI soldiers to full health, while values greater than 1.0 regenerate health more quickly.
	 *
	 * @id 987645454
	 * @constraints Range: [0.10000000149011612 to 10]
	 * @default 1
	 */
	AI_SoldierRegenRateMultiplier_PerTeam: PerTeam<number>;

	/**
	 * AI DAMAGE MULTIPLIER
	 * Multiplies AI damage output from all sources.
	 *
	 * @id 3626262758
	 * @constraints Range: [0.009999999776482582 to 5]
	 * @default 1
	 */
	AI_DamageMultiplier_PerTeam: PerTeam<number>;

	/**
	 * AIM ASSIST
	 * Controls whether Aim Assist is allowed for players using the Aim Assist option. When this is set to OFF, the crosshair will not adjust its speed when tracking over an enemy player.
	 *
	 * @id 2699039760
	 */
	AimAssistSlowdownEnabled: boolean;

	/**
	 * EXITING VEHICLES
	 *	Controls whether players inside a vehicle can exit the vehicle. When this is set to OFF, players in a vehicle must remain in the vehicle.
	 *
	 * @id 4072888461
	 */
	ExitVehiclesAllowed_PerTeam: PerTeam<boolean>;

	/**
	 * SOLDIER MOVE SPEED MULTIPLIER
	 * Controls the default speed of Soldier movement, which can then be multiplied by other movement types. Values less than 1.0 slow down soldier movement, while values greater than 1.0 increase movement speed.
	 *
	 * @id 1955023128
	 * @constraints Range: [0.800000011920929 to 1.2000000476837158]
	 * @default 1
	 */
	SoldierMovementSpeedMultiplier_PerTeam: PerTeam<number>;

	/**
	 * CROSSHAIR ALLOWED
	 * Controls whether crosshairs are disabled for players.
	 *
	 * @id 289584529
	 */
	CrosshairsAllowed_PerTeam: PerTeam<boolean>;

	/**
	 * ON-FOOT DEPLOYMENT
	 * Controls whether players are allowed to deploy on foot as a soldier.
	 *
	 * @id 2849852964
	 */
	OnFootSpawnAllowed_PerTeam: PerTeam<boolean>;

	/**
	 * AI VEHICLE DAMAGE MULTIPLIER
	 * Multiplies AI damage output from vehicles.
	 *
	 * @id 1871419702
	 * @constraints Range: [0.009999999776482582 to 5]
	 * @default 1
	 */
	AI_VehicleDamageMultiplier_PerTeam: PerTeam<number>;

	/**
	 * AI ON-FOOT DEPLOYMENT
	 * Controls whether AI are allowed to deploy on foot as soldiers.
	 *
	 * @id 1807768999
	 */
	AI_OnFootSpawnAllowed_PerTeam: PerTeam<boolean>;

	/**
	 * AI SQUAD SPAWN
	 * Controls the rules for AI Squad Spawning, for squad members and squad leaders.
	 *
	 * @id 310492599
	 * @constraints Allowed Values: 0, 1, 2, 3
	 * @default 0
	 */
	AI_SquadSpawnMode_PerTeam: PerTeam<SquadSpawnType>;

	/**
	 * AI REDEPLOY DELAY MULTIPLIER
	 * Multiplies the time it takes for AI soldiers to redeploy. Values less than 1.0 allow AI soldiers to redeploy more quickly, while values greater than 1.0 force AI soldiers to wait longer before redeploying.
	 *
	 * @id 830816070
	 * @constraints Range: [0 to 18]
	 * @default 1
	 */
	AI_SoldierRespawnDelayMultiplier_PerTeam: PerTeam<number>;

	/**
	 * REFLECT FRIENDLY FIRE DAMAGE
	 * If the FRIENDLY FIRE modifier is enabled all damage to allies will be reflected back to a player after they kill two allies. Resets after 90 seconds.
	 *
	 * @id 3050333889
	 */
	FriendlyFireDamageReflectionEnabled: boolean;

	/**
	 * @id 2047132398
	 * @constraints Allowed Values: 2
	 * @default 2
	 */
	ModBuilder_GameMode: ModBuilderGameMode;

	/**
	 * @id 3985279000
	 * @constraints Range: [-1000 to 1000]
	 * @default 1
	 */
	AimAssistSnapCapsuleRadiusMultiplier: number;

	/**
	 * @id 482929310
	 * @constraints Range: [1 to 50]
	 * @default 2
	 */
	FriendlyFireDamageReflectionMaxTeamKills: number;

	/**
	 * GAME TIME
	 * Sets the maximum time (in minutes) for the round.
	 *
	 * @id 1796950356
	 * @constraints Range: [6 to 60]
	 * @default 20
	 */
	fPortalExperienceGameTime: number;

	/**
	 * Squad Size
	 * Sets the maximum number of members per squad.
	 *
	 * @id 1512026338
	 * @constraints Range: [1 to 4]
	 * @default 4
	 */
	SquadSize_PerTeam: PerTeam<number>;

	/**
	 * SECTOR TIME
	 * Sets the maximum time (in minutes) for the sector.
	 *
	 * @id 3923238025
	 * @constraints Range: [10 to 60]
	 * @default 20
	 */
	BT_iSectorTime: number;

	/**
	 * DISABLE THIRD PERSON VIEW
	 * Disables the third person view on vehicles.
	 *
	 * @id 2791486999
	 */
	DisableVehicle3p: boolean;

	/**
	 * RELOAD WHOLE MAGAZINES
	 * Controls whether reloading a magazine causes the soldier or vehicle to lose any remaining ammo within the currently loaded magazine.
	 *
	 * @id 4131112494
	 */
	ReloadWholeWeaponMagazines: boolean;

	/**
	 * CLASS LOCK WEAPONS
	 * If enabled, all soldier kits will use their class locked weapon loadout variants instead of the normal open weapon pool loadouts.
	 *
	 * @id 3428887440
	 */
	EnableClassLockedWeaponLoadouts: boolean;

	/**
	 * RESTRICT GAME FEEDBACK
	 * Controls the degree of feedback given to the player via audio or visual cues.
	 *
	 * @id 1979857396
	 */
	bPortalRestrictedGameFeedback: boolean;

	/**
	 * HARDCORE MODE
	 * Enables hardcore mode. Hardcore tweaks the experience into a less forgiving and somewhat more "realistic" feel.
	 *
	 * @id 3696653317
	 */
	IsHardcore: boolean;

	/**
	 * @id 1461965916
	 * @constraints Range: [0 to 1]
	 * @default 0.5
	 */
	FriendlyFireMinVelocityForRoadKill_PerTeam: PerTeam<number>;

	/**
	 * @id 2952797941
	 */
	FriendlyFireDisableVehicleCollision_PerTeam: PerTeam<boolean>;

	/**
	 * @id 2664535737
	 * @constraints Range: [1 to 600]
	 * @default 90
	 */
	FriendlyFireDamageReflectionResetTime: number;

	/**
	 * @id 4064956639
	 */
	FriendlyFireDisableVehicleTriggerFriendlyMines: boolean;

	/**
	 * @id 1178389245
	 */
	FriendlyFireDisableSoldierTriggerFriendlyMines: boolean;

	/**
	 * @id 3570813653
	 * @constraints Range: [0.10000000149011612 to 5]
	 * @default 1
	 */
	VehicleWeaponAutoReplenishDelayMultiplier: number;

	/**
	 * @id 3585332942
	 */
	HealthBarAllowed_PerTeam: PerTeam<boolean>;

	/**
	 * @id 1173798620
	 */
	HideDamageNumbers_PerTeam: PerTeam<boolean>;

	/**
	 * @id 1519216395
	 */
	HitIndicatorAllowed_PerTeam: PerTeam<boolean>;

	/**
	 * @id 3102875672
	 * @constraints Range: [0 to 0]
	 * @default 2
	 */
	HUDInventoryDisplayTime_PerTeam: PerTeam<number>;

	/**
	 * @id 2589053639
	 */
	HUDInventoryAutoHide_PerTeam: PerTeam<boolean>;

	/**
	 * @id 601034245
	 */
	UseReducedSquadWorldIcon: boolean;

	/**
	 * @id 1400955202
	 */
	UseReducedFriendlyWorldIcon: boolean;

	/**
	 * @id 2039415736
	 * @constraints Range: [1 to 5000]
	 * @default 2000
	 */
	FriendlyInworldIconsMaxDistance: number;

	/**
	 * @id 2629637312
	 */
	CapturePointScaleAllowed: boolean;

	/**
	 * @id 3795763303
	 */
	KillFeedAllowed_PerTeam: PerTeam<boolean>;

	/**
	 * @id 4285291858
	 */
	SquadListAllowed_PerTeam: PerTeam<boolean>;

	/**
	 * @id 4192837966
	 */
	bRestrictCommunicationVO: boolean;

	/**
	 * @id 1685003453
	 */
	bRestrictCommunicationUI: boolean;

	/**
	 * SECTOR REINFORCEMENT REWARD MULTIPLIER
	 * Multiplies the reinforcement the attacking team is rewarded when taking a sector. Values less than 1.0 will result in fewer reinforcements, while values greater than 1.0 will increase the reinforcement count.
	 *
	 * @id 611091070
	 * @constraints Range: [0 to 10]
	 * @default 1
	 */
	BT_fSectorRewardMultiplier: number;

	/**
	 * FLAG CAPTURE TIME MULTIPLIER
	 * Flag capture time multiplier
	 *
	 * @id 1246107735
	 * @constraints Range: [1 to 10]
	 * @default 1
	 */
	fPortal_CaptureTimeMultiplier: number;

	/**
	 * Flag Neutralization Time
	 * Sets the time it takes to neutralize a flag in seconds
	 *
	 * @id 3826668350
	 * @constraints Range: [1 to 10]
	 * @default 1
	 */
	fPortal_NeutralisationTimeMultiplier: number;

	/**
	 * SPOTTING
	 * Controls whether spotting is allowed for players.
	 *
	 * @id 2217845162
	 */
	SpottingAllowed: boolean;

	/**
	 * SHARED AMMO
	 * Controls whether the soldier uses the default inventory or the Battle Royale inventory.
	 *
	 * @id 3493038109
	 */
	Portal_UseSharedAmmo: boolean;

	/**
	 * Second Chance Threshold
	 * Controls when the second chance is disabled, the value is based on the percentage of squads alive, if set at 0.5 it means its disabled after half the squads are dead.
	 *
	 * @id 1823350640
	 * @constraints Range: [0 to 1]
	 * @default 0.75
	 */
	BR_SecondChanceDeactivateThreshold: number;

	/**
	 * Zone Shrink Time
	 * Controls the time in seconds it takes for the Ring of Fire to shrink from one zone size to the next.
	 *
	 * @id 3390523150
	 * @constraints Range: [240 to 1000]
	 * @default 240
	 */
	fPortal_BRShrinkTime: number;

	/**
	 * Zone Damage
	 * Controls the damage done by being outside the Ring of Fire.
	 *
	 * @id 1074769675
	 * @constraints Range: [500 to 1000]
	 * @default 500
	 */
	Portal_BRZoneDamage: number;

	/**
	 * ZONE SIZE 1
	 * Controls the size of the zone at the first stage.
	 *
	 * @id 1726101892
	 * @constraints Range: [1650 to 2000]
	 * @default 1650
	 */
	ZoneSize_00: number;

	/**
	 * ZONE SIZE 2
	 * Controls the size of the zone at the second stage.
	 *
	 * @id 4126637072
	 * @constraints Range: [1200 to 2000]
	 * @default 1200
	 */
	ZoneSize_01: number;

	/**
	 * ZONE SIZE 3
	 * Controls the size of the zone at the third stage.
	 *
	 * @id 2050945192
	 * @constraints Range: [800 to 2000]
	 * @default 800
	 */
	ZoneSize_02: number;

	/**
	 * ZONE SIZE 4
	 * Controls the size of the zone at the fourth stage.
	 *
	 * @id 494621827
	 * @constraints Range: [400 to 2000]
	 * @default 400
	 */
	ZoneSize_03: number;

	/**
	 * ZONE SIZE 5
	 * Controls the size of the zone at the fifth stage.
	 *
	 * @id 3179700427
	 * @constraints Range: [175 to 2000]
	 * @default 175
	 */
	ZoneSize_04: number;

	/**
	 * ZONE SIZE 6
	 * Controls the size of the zone at the sixth stage.
	 *
	 * @id 2743600001
	 * @constraints Range: [60 to 2000]
	 * @default 60
	 */
	ZoneSize_05: number;

	/**
	 * ZONE SIZE 7
	 * Controls the size of the zone at the seventh stage.
	 *
	 * @id 3274338396
	 * @constraints Range: [0 to 2000]
	 * @default 0
	 */
	ZoneSize_06: number;

	/**
	 * SECOND CHANCE DELAY
	 * Controls how much delay the second chance has in seconds.
	 *
	 * @id 2064257196
	 * @constraints Range: [29 to 60]
	 * @default 29
	 */
	BR_SecondChanceDelayTimer: number;

	/**
	 * Disable Missions
	 * Controls if missions are enabled or disabled.
	 *
	 * @id 1685318755
	 */
	BR_Missions_DisableMissions: boolean;

	/**
	 * Disable Respawn Towers
	 * Controls if respawn towers are enabled or disabled.
	 *
	 * @id 4045121817
	 */
	BR_DisableRespawnTower: boolean;

	/**
	 * AI SQUAD REVIVE
	 * Controls whether AI soldiers in a squad can revive other players in the squad, regardless of class or gadget.
	 *
	 * @id 3171571450
	 */
	AI_SquadReviveAllowed_PerTeam: PerTeam<boolean>;

	/**
	 * @id 722396075
	 * @constraints Range: [-1 to 90]
	 * @default -1
	 */
	SpawnBalancing_GamemodeStartTimer: number;

	/**
	 * @id 3464890382
	 */
	Portal_UsePortalRingOfFireMutators: boolean;

	/**
	 * Players Required to Start Lobby Timer
	 * The minimum number of players required to start the lobby countdown timer
	 *
	 * @id 212789314
	 * @constraints Range: [50 to 100]
	 * @default 96
	 */
	BR_LobbyPlayerCountStartTimer: number;

	/**
	 * @id 1896590494
	 * @constraints Range: [100 to 100]
	 * @default 100
	 */
	BR_LobbyPlayerCountToSpeedUpTimer: number;

	/**
	 * @id 3192277320
	 * @constraints Range: [0.20000000298023224 to 500]
	 * @default 1
	 */
	VehicleSpawnDelayMultiplier_PerTeam: PerTeam<number>;

	/**
	 * @id 4132993187
	 * @constraints Range: [0 to 1]
	 * @default 1
	 */
	SpawnBalancing_GamemodePlayerCountRatio: number;

	/**
	 * @id 510030070
	 * @constraints Range: [0 to 3]
	 * @default 0
	 */
	CrosshairType_PerTeam: PerTeam<number>;

	/**
	 * @id 3902436054
	 */
	DisableKillCamUI: boolean;

	/**
	 * CALL-IN VEHICLE COOLDOWN MULTIPLIER
	 * Multiplies the default cooldown for call-in vehicles. Values below 1.0 make cooldowns faster, values above 1.0 make cooldowns longer.
	 *
	 * @id 745298605
	 * @constraints Range: [0 to 100]
	 * @default 1
	 */
	VehicleCallInCoolDownMultiplier_PerTeam: PerTeam<number>;

	/**
	 * @id 449841308
	 * @constraints Range: [0 to 0]
	 * @default 1
	 */
	FriendlyFireExplosiveDamageMultiplier: number;

	/**
	 * @id 2978413856
	 * @constraints Range: [4 to 48]
	 * @default 4
	 */
	CQ_iLobbyPlayerCountStartTimer: number;

	/**
	 * @id 1962565
	 * @constraints Range: [4 to 48]
	 * @default 4
	 */
	BT_iLobbyPlayerCountStartTimer: number;

	/**
	 * @id 1463281593
	 * @constraints Range: [4 to 48]
	 * @default 4
	 */
	Rush_iLobbyPlayerCountStartTimer: number;

	/**
	 * @id 4222134728
	 * @constraints Range: [12 to 12]
	 * @default 12
	 */
	SpawnBalancing_Mica_MaxBackfillAICount: number;

	/**
	 * Soldier Redeploy Delay
	 * Sets the time it takes for soldiers to redeploy.
	 *
	 * @id 3207432275
	 * @constraints Range: [8 to 30]
	 * @default 16
	 */
	Portal_GauntletBaseRedeployDelay: number;

	/**
	 * Mission Time
	 * Sets the maximum time for all the mission.
	 *
	 * @id 739148162
	 * @constraints Range: [300 to 420]
	 * @default 360
	 */
	Portal_GauntletGlobalMissionTimer: number;

	/**
	 * Standard Armor
	 * Controls if Standard Armor is enabled or disabled.
	 *
	 * @id 4233667812
	 */
	Portal_GauntletIsSoftArmorEnabled: boolean;

	/**
	 * Qualification Threshold
	 * Controls the amount of team disqualified at the end of each round. (Every teams tied for last will all be eliminated).
	 *
	 * @id 4202445796
	 * @constraints Range: [1 to 2]
	 * @default 2
	 */
	Portal_GauntletNumberOfDisqualifiedTeamsPerRound: number;

	/**
	 * @id 2328511542
	 * @constraints Range: [0 to 30]
	 * @default 16
	 */
	Gauntlet_Beacons_BaseRedeployDelay: number;

	/**
	 * @id 2470925258
	 * @constraints Range: [0 to 30]
	 * @default 16
	 */
	Gauntlet_Contract_BaseRedeployDelay: number;

	/**
	 * @id 547841244
	 * @constraints Range: [0 to 30]
	 * @default 16
	 */
	Gauntlet_Circuit_BaseRedeployDelay: number;

	/**
	 * @id 3916424605
	 * @constraints Range: [0 to 30]
	 * @default 16
	 */
	Gauntlet_CTF_BaseRedeployDelay: number;

	/**
	 * @id 2071192473
	 * @constraints Range: [0 to 30]
	 * @default 16
	 */
	Gauntlet_DataExtraction_BaseRedeployDelay: number;

	/**
	 * @id 2547134283
	 * @constraints Range: [0 to 30]
	 * @default 16
	 */
	Gauntlet_Mission_DefaultBaseRedeployDelay: number;

	/**
	 * @id 86448352
	 * @constraints Range: [0 to 30]
	 * @default 16
	 */
	Gauntlet_Relay_BaseRedeployDelay: number;

	/**
	 * @id 1067942808
	 * @constraints Range: [0 to 30]
	 * @default 16
	 */
	Gauntlet_Rodeo_BaseRedeployDelay: number;

	/**
	 * @id 828448612
	 * @constraints Range: [0 to 30]
	 * @default 16
	 */
	Gauntlet_Standoff_BaseRedeployDelay: number;

	/**
	 * @id 3570063746
	 * @constraints Range: [0 to 30]
	 * @default 16
	 */
	Gauntlet_Vendetta_BaseRedeployDelay: number;

	/**
	 * @id 3554522018
	 * @constraints Range: [0 to 30]
	 * @default 16
	 */
	Gauntlet_Wreckage_BaseRedeployDelay: number;

	/**
	 * @id 3742609123
	 */
	NewServerFetchQuestDefinitionsAtEor: boolean;

	/**
	 * @id 1639766582
	 */
	Portal_IsPortalVerifiedMode: boolean;

	/**
	 * @id 2699056885
	 * @constraints Range: [28 to 28]
	 * @default 28
	 */
	SpawnBalancing_MaxBackfillAICount_Conquest: number;

	/**
	 * @id 1478766565
	 * @constraints Range: [20 to 20]
	 * @default 20
	 */
	SpawnBalancing_MaxBackfillAICount_Breakthrough: number;

	/**
	 * @id 475436411
	 * @constraints Range: [12 to 12]
	 * @default 12
	 */
	SpawnBalancing_MaxBackfillAICount_Rush: number;

	/**
	 * Winter Mode
	 * Enables Freeze Mechanic.
	 *
	 * @id 3245498713
	 */
	WinterMode: boolean;

	/**
	 * Winter Atmosphere
	 * Enables the screen effect, map visuals and audio for the Empire State map.
	 *
	 * @id 3252054121
	 */
	WinterShader: boolean;

	/**
	 * @id 3685143182
	 * @constraints Range: [6 to 100]
	 * @default 28
	 */
	Gauntlet_LobbyPlayerCountStartTimer: number;

	/**
	 * @id 2898594069
	 * @constraints Range: [6 to 100]
	 * @default 32
	 */
	Gauntlet_LobbyPlayerCountToSpeedUpTimer: number;

	/**
	 * @id 1185270375
	 * @constraints Range: [0 to 99]
	 * @default 0
	 */
	Portal_GauntletMissionPool_Large: PerTeam<number>;

	/**
	 * @id 1270957592
	 * @constraints Range: [0 to 99]
	 * @default 0
	 */
	Portal_GauntletMissionPool_Medium: PerTeam<number>;

	/**
	 * @id 142353163
	 * @constraints Range: [0 to 99]
	 * @default 0
	 */
	Portal_GauntletMissionPool_Small: PerTeam<number>;

	/**
	 * @id 3963219136
	 * @constraints Range: [0 to 99]
	 * @default 0
	 */
	Portal_GauntletMissionPool_Duel: PerTeam<number>;

	/**
	 * SUPPORT AI NAVIGATION
	 * Controls whether AI can navigate the map, turning it off will decrease loading times.
	 *
	 * @id 1629366163
	 */
	Portal_GenerateNavMesh: boolean;

	/**
	 * Freeze Max Amount
	 * Sets maximum amount of time required to fully build freeze status.
	 *
	 * @id 4250685829
	 * @constraints Range: [0 to 5000]
	 * @default 100
	 */
	FreezeMaxAmount: number;

	/**
	 * Freeze Spawn Protection Time
	 * Freeze build up immunity window after deploying.
	 *
	 * @id 3537159765
	 * @constraints Range: [0 to 10]
	 * @default 5
	 */
	Freeze_SpawnProtectionTime: number;

	/**
	 * Freeze Damage Interval
	 * Freeze damage tick interval.
	 *
	 * @id 1427692226
	 * @constraints Range: [0 to 30]
	 * @default 4
	 */
	FreezeDamageInterval: number;

	/**
	 * Freeze Build-Up In Water
	 * Freeze build-up amount while in water.
	 *
	 * @id 3717641496
	 * @constraints Range: [0 to 10]
	 * @default 5
	 */
	FreezeInWaterModifyer: number;

	/**
	 * Freeze Build-Up While Moving
	 * Freeze build-up amount while moving.
	 *
	 * @id 3550460112
	 * @constraints Range: [0 to 10]
	 * @default 1.7000000476837158
	 */
	FreezeModifyer: number;

	/**
	 * Freeze Build-Up While Stationary
	 * Freeze build-up amount while not moving.
	 *
	 * @id 3503392189
	 * @constraints Range: [0 to 10]
	 * @default 2.5
	 */
	FreezeNotMovingModifyer: number;

	/**
	 * Freeze Build-Up While Sprinting
	 * Freeze build up amount while sprinting.
	 *
	 * @id 2596530532
	 * @constraints Range: [0 to 10]
	 * @default 1.2000000476837158
	 */
	FreezeSprintingModifyer: number;

	/**
	 * Large Heat Source Modifier
	 * Heat build-up for large heat sources (Heat barrel, incendiary grenades, etc).
	 *
	 * @id 968858745
	 * @constraints Range: [0 to 100]
	 * @default 19
	 */
	Heat_LargeModifier: number;

	/**
	 * Small Heat Source Modifier
	 * Heat build-up amount for small heat source (blow torch).
	 *
	 * @id 4103656462
	 * @constraints Range: [0 to 20]
	 * @default 2
	 */
	Heat_SmallModifier: number;

	/**
	 * @id 1615439116
	 */
	CQ_Gas: boolean;

	/**
	 * @id 2654255402
	 */
	BT_Gas: boolean;

	/**
	 * @id 3311203649
	 */
	ESC_Gas: boolean;

	/**
	 * @id 32390539
	 */
	ExcludeAiFromLobbyPlayerCount: boolean;
};
