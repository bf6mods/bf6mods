import { PerTeam } from "../index.ts";

export type WeaponRestrictions = {
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
	 * Whether the Medic Crate gadget (U_Gadget_MedicCrate) is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	U_Gadget_MedicCrate: PerTeam<boolean>;

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
}
