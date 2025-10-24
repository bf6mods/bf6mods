// These are undocumented items in mod, but we added support for them anyway here.
declare namespace mod {
	/**
	 * Sets the camera of the given `player` to follow the specified `targetPlayer`.
	 * 
	 * This causes `player` to see exactly what `targetPlayer` sees.
	 *
	 * @param player - The player whose camera will be updated.
	 * @param targetPlayer - The player whose perspective will be mirrored.
	 */
	export function SetCameraTargetForPlayer(player: Player, targetPlayer: Player): void;
}
