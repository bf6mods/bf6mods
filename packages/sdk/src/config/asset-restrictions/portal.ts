import type { PerTeam } from "../index.ts";

export type PortalRestrictions = {
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
