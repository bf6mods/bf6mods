/* 

Welcome to the Complete BF6 Portal template!

This has all the Battlefield 6 Event Handlers for use in the game.

'mod/index.d.ts' is your bestfriend when it comes to learning about all that is capable within Portal scripting.
If you're ever unsure how to do something, try searching for a relevant function in it! 

*/

////////////////////////////////// ON PLAYER EVENTS ///////////////////////////////////////
//////////// Useful player action-related events to hook up reactive logics to ////////////

// Triggered when player joins the game. Useful for pregame setup, team management, etc.
export function OnPlayerJoinGame(eventPlayer: mod.Player): void {}

// Triggered when player leaves the game. Useful for clean up logic, team management, etc.
export function OnPlayerLeaveGame(eventNumber: number): void {}

// Triggered when player selects their class and deploys into game. Useful for any spawn/start logic.
export function OnPlayerDeployed(eventPlayer: mod.Player): void {}

// Triggered when the player dies and returns to the deploy screen.
export function OnPlayerUndeploy(eventPlayer: mod.Player): void {}

// Triggered on player death/kill, returns dying player, the killer, etc. Useful for updating scores, updating progression, handling any death/kill related logic.
export function OnPlayerDied(eventPlayer: mod.Player, eventOtherPlayer: mod.Player, eventDeathType: mod.DeathType, eventWeaponUnlock: mod.WeaponUnlock): void {}

export function OnPlayerEarnedKill(
    eventPlayer: mod.Player,
    eventOtherPlayer: mod.Player,
    eventDeathType: mod.DeathType,
    eventWeaponUnlock: mod.WeaponUnlock
): void {}

// Triggered when a player earns a kill assist.
export function OnPlayerEarnedKillAssist(eventPlayer: mod.Player, eventOtherPlayer: mod.Player): void {}

// Triggered when a player is damaged, returns same variables as OnPlayerDied. Useful for custom on damage logic and updating custom UI.
export function OnPlayerDamaged(
    eventPlayer: mod.Player,
    eventOtherPlayer: mod.Player,
    eventDamageType: mod.DamageType,
    eventWeaponUnlock: mod.WeaponUnlock
): void {}

// Triggered when a player is forced into the mandown state.
export function OnMandown(eventPlayer: mod.Player, eventOtherPlayer: mod.Player): void {}

// Triggered when a player is revived by another player.
export function OnRevived(eventPlayer: mod.Player, eventOtherPlayer: mod.Player): void {}

// Triggered when a player interacts with InteractPoint. Reference by using 'mod.GetObjId(InteractPoint);'.
// Useful for any custom logic on player interaction such as updating check point, open custom UI, etc.
// Note that InteractPoint has to be placed in Godot scene and assigned an ObjId for reference.
export function OnPlayerInteract(eventPlayer: mod.Player, eventInteractPoint: mod.InteractPoint): void {}

// Triggered when a player enters/leaves referenced BF6 capture point. Useful for tracking capture point activities and overlapping players.
// Note that CapturePoint has to be placed in Godot scene, assigned an ObjId and a CapturePointArea(volume).
export function OnPlayerEnterCapturePoint(eventPlayer: mod.Player, eventCapturePoint: mod.CapturePoint): void {}
export function OnPlayerExitCapturePoint(eventPlayer: mod.Player, eventCapturePoint: mod.CapturePoint): void {}

// Triggered when a player enters/leaves referenced AreaTrigger volume. Useful for creating custom OnOverlap logic, creating custom capture point, etc.
// Note that AreaTrigger has to be placed in Godot scene, assigned an ObjId and a CollisionPolygon3D(volume).
export function OnPlayerEnterAreaTrigger(eventPlayer: mod.Player, eventAreaTrigger: mod.AreaTrigger): void {}
export function OnPlayerExitAreaTrigger(eventPlayer: mod.Player, eventAreaTrigger: mod.AreaTrigger): void {}

// Triggered when a player enters a vehicle.
export function OnPlayerEnterVehicle(eventPlayer: mod.Player, eventVehicle: mod.Vehicle): void {}

// Triggered when a player exits a vehicle.
export function OnPlayerExitVehicle(eventPlayer: mod.Player, eventVehicle: mod.Vehicle): void {}

// Triggered when a player enters a vehicle seat.
export function OnPlayerEnterVehicleSeat(
    eventPlayer: mod.Player,
    eventVehicle: mod.Vehicle,
    eventSeat: mod.Object
): void {}

// Triggered when a player exits a vehicle seat.
export function OnPlayerExitVehicleSeat(
    eventPlayer: mod.Player,
    eventVehicle: mod.Vehicle,
    eventSeat: mod.Object
): void {}

// Triggered when a player changes team.
export function OnPlayerSwitchTeam(eventPlayer: mod.Player, eventTeam: mod.Team): void {}

// Triggered when a player interacts with a UI button.
export function OnPlayerUIButtonEvent(
    eventPlayer: mod.Player,
    eventUIWidget: mod.UIWidget,
    eventUIButtonEvent: mod.UIButtonEvent
): void {}

/////////////////////// GAMEMODE EVENTS AND USEFUL FUNCTIONS //////////////////////////////
////////// Various useful events and functions to manipulate gameplay and actors //////////

// Triggered at the start of the gamemode.
export async function OnGameModeStarted() {

    // Enables or disables a headquater. Note that HQ_PlayerSpawner has to be placed in Godot scene, assigned an ObjId and a HQArea(CollisionPolygon3D).
    const hq = mod.GetHQ(0);
    mod.EnableHQ(hq, true);

    // Enables or disables the provided objective.
    const capturePoint = mod.GetCapturePoint(0);
    mod.EnableGameModeObjective(capturePoint, true);

    // Returns the id corresponding to the provided object.
    const capturePointId = mod.GetObjId(capturePoint);

    // Returns a vector composed of three provided 'X' (left), 'Y' (up), and 'Z' (forward) values.
    // Useful for specifying transform, 3d velocity or RGB color.
    const vector = mod.CreateVector(1, 2, 3);

    // Get player closest to a point
    const player = mod.ClosestPlayerTo(vector);

    // Returns the team value of the specified player OR the corresponding team of the provided number.
    const teamOfPlayer = mod.GetTeam(player);
    const teamObject = mod.GetTeam(0);

    // Displays a notification-type Message on the top-right of the screen for 6 seconds. Useful for communicating game state/info or debugging.
    const exampleMessage = mod.Message('example');
    mod.DisplayNotificationMessage(exampleMessage);
    mod.DisplayNotificationMessage(exampleMessage, player);
    mod.DisplayNotificationMessage(exampleMessage, teamOfPlayer);

    // Adds X delay in seconds. Useful for making sure that everything has been initialized before running logic or delaying triggers.
    await mod.Wait(5);

    // Teleports a target to a provided valid position facing a specified angle (in radians).
    mod.Teleport(player, mod.CreateVector(100, 0, 100), mod.Pi());

    // Returns the 'X', 'Y', or 'Z' component of a provided vector.
    // Useful for modifying specific vector component or debugging transform.
    const x = mod.XComponentOf(vector);
    const y = mod.YComponentOf(vector);
    const z = mod.ZComponentOf(vector);
    const changedVector = mod.CreateVector(x + 10, y - 5, z * 2);

    // Returns various player state information
    const eyePosition = mod.GetSoldierState(player, mod.SoldierStateVector.EyePosition);
    const facingDirection = mod.GetSoldierState(player, mod.SoldierStateVector.GetFacingDirection);
    const health = mod.GetSoldierState(player, mod.SoldierStateNumber.CurrentHealth);
    const isInWater = mod.GetSoldierState(player, mod.SoldierStateBool.IsInWater);
}

// Triggered when the gamemode ends.
export function OnGameModeEnding(): void {}

// Triggered when the gamemode time limit has been reached.
export function OnTimeLimitReached(): void {}

/////////////////////// ONGOING EVENTS ///////////////////////////////
////////// Events that trigger every server tick (30 times per second) //////////

// Triggered every server tick.
export function OngoingGlobal(): void {}

// Triggered every server tick, for each AreaTrigger.
export function OngoingAreaTrigger(eventAreaTrigger: mod.AreaTrigger): void {}

// Triggered every server tick, for each CapturePoint.
export function OngoingCapturePoint(eventCapturePoint: mod.CapturePoint): void {}

// Triggered every server tick, for each EmplacementSpawner.
export function OngoingEmplacementSpawner(eventEmplacementSpawner: mod.EmplacementSpawner): void {}

// Triggered every server tick, for each HQ.
export function OngoingHQ(eventHQ: mod.HQ): void {}

// Triggered every server tick, for each InteractPoint.
export function OngoingInteractPoint(eventInteractPoint: mod.InteractPoint): void {}

// Triggered every server tick, for each LootSpawner.
export function OngoingLootSpawner(eventLootSpawner: mod.LootSpawner): void {}

// Triggered every server tick, for each MCOM.
export function OngoingMCOM(eventMCOM: mod.MCOM): void {}

// Triggered every server tick, for each Player.
export function OngoingPlayer(eventPlayer: mod.Player): void {}

// Triggered every server tick, for each RingOfFire.
export function OngoingRingOfFire(eventRingOfFire: mod.RingOfFire): void {}

// Triggered every server tick, for each Sector.
export function OngoingSector(eventSector: mod.Sector): void {}

// Triggered every server tick, for each Spawner.
export function OngoingSpawner(eventSpawner: mod.Spawner): void {}

// Triggered every server tick, for each SpawnPoint.
export function OngoingSpawnPoint(eventSpawnPoint: mod.SpawnPoint): void {}

// Triggered every server tick, for each Team.
export function OngoingTeam(eventTeam: mod.Team): void {}

// Triggered every server tick, for each Vehicle.
export function OngoingVehicle(eventVehicle: mod.Vehicle): void {}

// Triggered every server tick, for each VehicleSpawner.
export function OngoingVehicleSpawner(eventVehicleSpawner: mod.VehicleSpawner): void {}

// Triggered every server tick, for each WaypointPath.
export function OngoingWaypointPath(eventWaypointPath: mod.WaypointPath): void {}

// Triggered every server tick, for each WorldIcon.
export function OngoingWorldIcon(eventWorldIcon: mod.WorldIcon): void {}

/////////////////////// AI EVENTS ///////////////////////////////
////////// Events related to AI Soldier behavior //////////

// Triggered when an AI Soldier stops trying to reach a destination.
export function OnAIMoveToFailed(eventPlayer: mod.Player): void {}

// Triggered when an AI Soldier starts moving to a target location.
export function OnAIMoveToRunning(eventPlayer: mod.Player): void {}

// Triggered when an AI Soldier reaches target location.
export function OnAIMoveToSucceeded(eventPlayer: mod.Player): void {}

// Triggered when an AI Soldier parachute action is running.
export function OnAIParachuteRunning(eventPlayer: mod.Player): void {}

// Triggered when an AI Soldier parachute action has succeeded.
export function OnAIParachuteSucceeded(eventPlayer: mod.Player): void {}

// Triggered when an AI Soldier stops following a waypoint.
export function OnAIWaypointIdleFailed(eventPlayer: mod.Player): void {}

// Triggered when an AI Soldier starts following a waypoint.
export function OnAIWaypointIdleRunning(eventPlayer: mod.Player): void {}

// Triggered when an AI Soldier finishes following a waypoint.
export function OnAIWaypointIdleSucceeded(eventPlayer: mod.Player): void {}

/////////////////////// CAPTURE POINT EVENTS ///////////////////////////////
////////// Events related to capture points //////////

// Triggered when a team takes control of a CapturePoint.
export function OnCapturePointCaptured(eventCapturePoint: mod.CapturePoint): void {}

// Triggered when a team begins capturing a CapturePoint.
export function OnCapturePointCapturing(eventCapturePoint: mod.CapturePoint): void {}

// Triggered when a team loses control of a CapturePoint.
export function OnCapturePointLost(eventCapturePoint: mod.CapturePoint): void {}

/////////////////////// MCOM EVENTS ///////////////////////////////
////////// Events related to MCOM objectives //////////

// Triggered when a MCOM is armed.
export function OnMCOMArmed(eventMCOM: mod.MCOM): void {}

// Triggered when a MCOM is defused.
export function OnMCOMDefused(eventMCOM: mod.MCOM): void {}

// Triggered when a MCOM detonates.
export function OnMCOMDestroyed(eventMCOM: mod.MCOM): void {}

/////////////////////// RAYCAST EVENTS ///////////////////////////////
////////// Events related to raycasting //////////

// Triggered when a Raycast hits a target.
export function OnRayCastHit(eventPlayer: mod.Player, eventPoint: mod.Vector, eventNormal: mod.Vector): void {}

// Triggered when a Raycast is called and doesn't hit any target.
export function OnRayCastMissed(eventPlayer: mod.Player): void {}

/////////////////////// VEHICLE EVENTS ///////////////////////////////
////////// Events related to vehicles //////////

// Triggered when a Vehicle is destroyed.
export function OnVehicleDestroyed(eventVehicle: mod.Vehicle): void {}

// Triggered when a Vehicle is called into the map.
export function OnVehicleSpawned(eventVehicle: mod.Vehicle): void {}

/////////////////////// SPAWNER EVENTS ///////////////////////////////
////////// Events related to spawners //////////

// Triggered when an AISpawner spawns an AI Soldier.
export function OnSpawnerSpawned(eventPlayer: mod.Player, eventSpawner: mod.Spawner): void {}

/////////////////////// RING OF FIRE EVENTS ///////////////////////////////
////////// Events related to Ring of Fire game mechanic //////////

// Triggered when a RingOfFire changes size.
export function OnRingOfFireZoneSizeChange(eventRingOfFire: mod.RingOfFire, eventNumber: number): void {}


