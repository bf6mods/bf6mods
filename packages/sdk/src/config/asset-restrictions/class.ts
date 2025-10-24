import { PerTeam } from "../index.ts";

export type ClassRestrictions = {
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
}
