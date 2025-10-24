// The goal of this file isn't to make an actual mod, just make sure that building and types are working

import { getPlayersInTeam } from "modlib";

const players = getPlayersInTeam(mod.GetTeam(0));

mod.SetCameraTargetForPlayer(players[0], players[1]);
