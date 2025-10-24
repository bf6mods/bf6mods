import type { ClassRestrictions } from "./class.ts";
import type { PortalRestrictions } from "./portal.ts";
import type { ScopeRestrictions } from "./scope.ts";
import type { WeaponRestrictions } from "./weapons.ts";

export * from "./class.ts";
export * from "./portal.ts";
export * from "./scope.ts";
export * from "./weapons.ts";

/**
 * Describes all configurable asset restrictions for the game.
 * Each restriction can either apply globally (single value)
 * or per team (as an array of [teamIndex, value] pairs).
 */
export interface AssetRestrictions
	extends ClassRestrictions,
		PortalRestrictions,
		WeaponRestrictions,
		ScopeRestrictions {}
