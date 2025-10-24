import type { PerTeam } from "../index.ts";

export type ScopeRestrictions = {
	/**
	 * Whether or not the U_6P67 is allowed to have the OPK7 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_6P67 - SCP - OPK7": PerTeam<boolean>;
	/**
	 * Whether or not the U_590A1 is allowed to have the OPK7 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_590A1 - SCP - OPK7": PerTeam<boolean>;
	/**
	 * Whether or not the U_M18 is allowed to have the RMR scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M18 - SCP - RMR": PerTeam<boolean>;
	/**
	 * Whether or not the U_M27IAR is allowed to have the CompM5b scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M27IAR - SCP - CompM5b": PerTeam<boolean>;
	/**
	 * Whether or not the U_MP7A2 is allowed to have the CompM5b scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MP7A2 - SCP - CompM5b": PerTeam<boolean>;
	/**
	 * Whether or not the U_SV98M is allowed to have the CompM5b scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SV98M - SCP - CompM5b": PerTeam<boolean>;
	/**
	 * Whether or not the U_M250 is allowed to have the CompM5b scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M250 - SCP - CompM5b": PerTeam<boolean>;
	/**
	 * Whether or not the U_G36 is allowed to have the CompM5b scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_G36 - SCP - CompM5b": PerTeam<boolean>;
	/**
	 * Whether or not the U_AK205 is allowed to have the OPK7 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_AK205 - SCP - OPK7": PerTeam<boolean>;
	/**
	 * Whether or not the U_HK417A2 is allowed to have the CompM5b scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_HK417A2 - SCP - CompM5b": PerTeam<boolean>;
	/**
	 * Whether or not the U_HK417A2 is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_HK417A2 - SCP - Trijicon MRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_M27IAR is allowed to have the OPK7 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M27IAR - SCP - OPK7": PerTeam<boolean>;
	/**
	 * Whether or not the U_M2010ESR is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M2010ESR - SCP - Trijicon MRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_M2010ESR is allowed to have the CompM5b scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M2010ESR - SCP - CompM5b": PerTeam<boolean>;
	/**
	 * Whether or not the U_HK417A2 is allowed to have the OPK7 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_HK417A2 - SCP - OPK7": PerTeam<boolean>;
	/**
	 * Whether or not the U_MPX is allowed to have the CompM5b scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MPX - SCP - CompM5b": PerTeam<boolean>;
	/**
	 * Whether or not the U_MPX is allowed to have the OPK7 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MPX - SCP - OPK7": PerTeam<boolean>;
	/**
	 * Whether or not the U_MPX is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MPX - SCP - Trijicon MRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_Ultimax is allowed to have the CompM5b scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_Ultimax - SCP - CompM5b": PerTeam<boolean>;
	/**
	 * Whether or not the U_Ultimax is allowed to have the OPK7 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_Ultimax - SCP - OPK7": PerTeam<boolean>;
	/**
	 * Whether or not the U_Ultimax is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_Ultimax - SCP - Trijicon MRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_Ultimax is allowed to have the RMR scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_Ultimax - SCP - RMR": PerTeam<boolean>;
	/**
	 * Whether or not the U_Minimi is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_Minimi - SCP - Trijicon MRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_Minimi is allowed to have the OPK7 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_Minimi - SCP - OPK7": PerTeam<boolean>;
	/**
	 * Whether or not the U_Minimi is allowed to have the CompM5b scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_Minimi - SCP - CompM5b": PerTeam<boolean>;
	/**
	 * Whether or not the U_M39EMR is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M39EMR - SCP - Trijicon MRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_M39EMR is allowed to have the OPK7 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M39EMR - SCP - OPK7": PerTeam<boolean>;
	/**
	 * Whether or not the U_M39EMR is allowed to have the CompM5b scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M39EMR - SCP - CompM5b": PerTeam<boolean>;
	/**
	 * Whether or not the U_G36 is allowed to have the OPK7 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_G36 - SCP - OPK7": PerTeam<boolean>;
	/**
	 * Whether or not the U_M4A1 is allowed to have the RMR scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M4A1 - SCP - RMR": PerTeam<boolean>;
	/**
	 * Whether or not the U_M4A1 is allowed to have the CompM5b scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M4A1 - SCP - CompM5b": PerTeam<boolean>;
	/**
	 * Whether or not the U_M4A1 is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M4A1 - SCP - Trijicon MRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_M4A1 is allowed to have the VZOR3 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M4A1 - SCP - VZOR3": PerTeam<boolean>;
	/**
	 * Whether or not the U_MAAWS is allowed to have the FCS13RE scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MAAWS - SCP - FCS13RE": PerTeam<boolean>;
	/**
	 * Whether or not the U_M4A1 is allowed to have the XPS3 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M4A1 - SCP - XPS3": PerTeam<boolean>;
	/**
	 * Whether or not the U_ACE32 is allowed to have the OPK7 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_ACE32 - SCP - OPK7": PerTeam<boolean>;
	/**
	 * Whether or not the U_ACE32 is allowed to have the CompM5b scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_ACE32 - SCP - CompM5b": PerTeam<boolean>;
	/**
	 * Whether or not the U_G3A4 is allowed to have the CompM5b scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_G3A4 - SCP - CompM5b": PerTeam<boolean>;
	/**
	 * Whether or not the U_G3A4 is allowed to have the OPK7 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_G3A4 - SCP - OPK7": PerTeam<boolean>;
	/**
	 * Whether or not the U_SCARSC is allowed to have the OPK7 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SCARSC - SCP - OPK7": PerTeam<boolean>;
	/**
	 * Whether or not the U_SCARSC is allowed to have the CompM5b scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SCARSC - SCP - CompM5b": PerTeam<boolean>;
	/**
	 * Whether or not the U_QBZ192 is allowed to have the CompM5b scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_QBZ192 - SCP - CompM5b": PerTeam<boolean>;
	/**
	 * Whether or not the U_QBZ192 is allowed to have the OPK7 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_QBZ192 - SCP - OPK7": PerTeam<boolean>;
	/**
	 * Whether or not the U_AK205 is allowed to have the CompM5b scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_AK205 - SCP - CompM5b": PerTeam<boolean>;
	/**
	 * Whether or not the U_M240L is allowed to have the CompM5b scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M240L - SCP - CompM5b": PerTeam<boolean>;
	/**
	 * Whether or not the U_M240L is allowed to have the OPK7 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M240L - SCP - OPK7": PerTeam<boolean>;
	/**
	 * Whether or not the U_M60E6 is allowed to have the CompM5b scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M60E6 - SCP - CompM5b": PerTeam<boolean>;
	/**
	 * Whether or not the U_M60E6 is allowed to have the OPK7 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M60E6 - SCP - OPK7": PerTeam<boolean>;
	/**
	 * Whether or not the U_RPKM is allowed to have the CompM5b scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_RPKM - SCP - CompM5b": PerTeam<boolean>;
	/**
	 * Whether or not the U_RPKM is allowed to have the OPK7 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_RPKM - SCP - OPK7": PerTeam<boolean>;
	/**
	 * Whether or not the U_MP5MLI is allowed to have the CompM5b scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MP5MLI - SCP - CompM5b": PerTeam<boolean>;
	/**
	 * Whether or not the U_MP5MLI is allowed to have the OPK7 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MP5MLI - SCP - OPK7": PerTeam<boolean>;
	/**
	 * Whether or not the U_XM7 is allowed to have the CompM5b scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_XM7 - SCP - CompM5b": PerTeam<boolean>;
	/**
	 * Whether or not the U_XM7 is allowed to have the OPK7 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_XM7 - SCP - OPK7": PerTeam<boolean>;
	/**
	 * Whether or not the U_6P67 is allowed to have the CompM5b scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_6P67 - SCP - CompM5b": PerTeam<boolean>;
	/**
	 * Whether or not the U_HK433 is allowed to have the OPK7 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_HK433 - SCP - OPK7": PerTeam<boolean>;
	/**
	 * Whether or not the U_HK433 is allowed to have the CompM5b scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_HK433 - SCP - CompM5b": PerTeam<boolean>;
	/**
	 * Whether or not the U_L85A3 is allowed to have the CompM5b scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_L85A3 - SCP - CompM5b": PerTeam<boolean>;
	/**
	 * Whether or not the U_L85A3 is allowed to have the OPK7 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_L85A3 - SCP - OPK7": PerTeam<boolean>;
	/**
	 * Whether or not the U_SCARL is allowed to have the OPK7 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SCARL - SCP - OPK7": PerTeam<boolean>;
	/**
	 * Whether or not the U_SCARL is allowed to have the CompM5b scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SCARL - SCP - CompM5b": PerTeam<boolean>;
	/**
	 * Whether or not the U_Tavor7 is allowed to have the CompM5b scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_Tavor7 - SCP - CompM5b": PerTeam<boolean>;
	/**
	 * Whether or not the U_Tavor7 is allowed to have the OPK7 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_Tavor7 - SCP - OPK7": PerTeam<boolean>;
	/**
	 * Whether or not the U_M2010ESR is allowed to have the OPK7 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M2010ESR - SCP - OPK7": PerTeam<boolean>;
	/**
	 * Whether or not the U_MRAD is allowed to have the CompM5b scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MRAD - SCP - CompM5b": PerTeam<boolean>;
	/**
	 * Whether or not the U_MRAD is allowed to have the OPK7 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MRAD - SCP - OPK7": PerTeam<boolean>;
	/**
	 * Whether or not the U_SV98M is allowed to have the OPK7 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SV98M - SCP - OPK7": PerTeam<boolean>;
	/**
	 * Whether or not the U_SIG553R is allowed to have the CompM5b scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SIG553R - SCP - CompM5b": PerTeam<boolean>;
	/**
	 * Whether or not the U_SIG553R is allowed to have the OPK7 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SIG553R - SCP - OPK7": PerTeam<boolean>;
	/**
	 * Whether or not the U_ARADMR is allowed to have the OPK7 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_ARADMR - SCP - OPK7": PerTeam<boolean>;
	/**
	 * Whether or not the U_ARADMR is allowed to have the CompM5b scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_ARADMR - SCP - CompM5b": PerTeam<boolean>;
	/**
	 * Whether or not the U_SVCh is allowed to have the OPK7 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SVCh - SCP - OPK7": PerTeam<boolean>;
	/**
	 * Whether or not the U_SVCh is allowed to have the CompM5b scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SVCh - SCP - CompM5b": PerTeam<boolean>;
	/**
	 * Whether or not the U_SVDM is allowed to have the OPK7 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SVDM - SCP - OPK7": PerTeam<boolean>;
	/**
	 * Whether or not the U_SVDM is allowed to have the CompM5b scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SVDM - SCP - CompM5b": PerTeam<boolean>;
	/**
	 * Whether or not the U_M250 is allowed to have the OPK7 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M250 - SCP - OPK7": PerTeam<boolean>;
	/**
	 * Whether or not the U_MG4K is allowed to have the OPK7 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MG4K - SCP - OPK7": PerTeam<boolean>;
	/**
	 * Whether or not the U_MG4K is allowed to have the CompM5b scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MG4K - SCP - CompM5b": PerTeam<boolean>;
	/**
	 * Whether or not the U_185KSK is allowed to have the OPK7 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_185KSK - SCP - OPK7": PerTeam<boolean>;
	/**
	 * Whether or not the U_185KSK is allowed to have the CompM5b scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_185KSK - SCP - CompM5b": PerTeam<boolean>;
	/**
	 * Whether or not the U_590A1 is allowed to have the CompM5b scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_590A1 - SCP - CompM5b": PerTeam<boolean>;
	/**
	 * Whether or not the U_KSG is allowed to have the OPK7 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_KSG - SCP - OPK7": PerTeam<boolean>;
	/**
	 * Whether or not the U_KSG is allowed to have the CompM5b scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_KSG - SCP - CompM5b": PerTeam<boolean>;
	/**
	 * Whether or not the U_M1014 is allowed to have the OPK7 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M1014 - SCP - OPK7": PerTeam<boolean>;
	/**
	 * Whether or not the U_M1014 is allowed to have the CompM5b scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M1014 - SCP - CompM5b": PerTeam<boolean>;
	/**
	 * Whether or not the U_Vector is allowed to have the OPK7 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_Vector - SCP - OPK7": PerTeam<boolean>;
	/**
	 * Whether or not the U_Vector is allowed to have the CompM5b scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_Vector - SCP - CompM5b": PerTeam<boolean>;
	/**
	 * Whether or not the U_UMP40 is allowed to have the OPK7 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_UMP40 - SCP - OPK7": PerTeam<boolean>;
	/**
	 * Whether or not the U_UMP40 is allowed to have the CompM5b scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_UMP40 - SCP - CompM5b": PerTeam<boolean>;
	/**
	 * Whether or not the U_P90 is allowed to have the OPK7 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_P90 - SCP - OPK7": PerTeam<boolean>;
	/**
	 * Whether or not the U_P90 is allowed to have the CompM5b scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_P90 - SCP - CompM5b": PerTeam<boolean>;
	/**
	 * Whether or not the U_MP7A2 is allowed to have the OPK7 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MP7A2 - SCP - OPK7": PerTeam<boolean>;
	/**
	 * Whether or not the U_APDW is allowed to have the OPK7 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_APDW - SCP - OPK7": PerTeam<boolean>;
	/**
	 * Whether or not the U_APDW is allowed to have the CompM5b scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_APDW - SCP - CompM5b": PerTeam<boolean>;
	/**
	 * Whether or not the U_APC10 is allowed to have the OPK7 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_APC10 - SCP - OPK7": PerTeam<boolean>;
	/**
	 * Whether or not the U_APC10 is allowed to have the CompM5b scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_APC10 - SCP - CompM5b": PerTeam<boolean>;
	/**
	 * Whether or not the U_185KSK is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_185KSK - SCP - Trijicon MRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_590A1 is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_590A1 - SCP - Trijicon MRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_6P67 is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_6P67 - SCP - Trijicon MRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_ACE32 is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_ACE32 - SCP - Trijicon MRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_AK205 is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_AK205 - SCP - Trijicon MRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_APC10 is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_APC10 - SCP - Trijicon MRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_APDW is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_APDW - SCP - Trijicon MRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_ARADMR is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_ARADMR - SCP - Trijicon MRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_G36 is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_G36 - SCP - Trijicon MRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_HK433 is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_HK433 - SCP - Trijicon MRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_M240L is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M240L - SCP - Trijicon MRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_M250 is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M250 - SCP - Trijicon MRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_MP5MLI is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MP5MLI - SCP - Trijicon MRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_MP7A2 is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MP7A2 - SCP - Trijicon MRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_MRAD is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MRAD - SCP - Trijicon MRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_P90 is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_P90 - SCP - Trijicon MRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_QBZ192 is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_QBZ192 - SCP - Trijicon MRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_SCARL is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SCARL - SCP - Trijicon MRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_SCARSC is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SCARSC - SCP - Trijicon MRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_SIG553R is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SIG553R - SCP - Trijicon MRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_SV98M is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SV98M - SCP - Trijicon MRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_SVCh is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SVCh - SCP - Trijicon MRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_SVDM is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SVDM - SCP - Trijicon MRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_Tavor7 is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_Tavor7 - SCP - Trijicon MRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_UMP40 is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_UMP40 - SCP - Trijicon MRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_Vector is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_Vector - SCP - Trijicon MRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_XM7 is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_XM7 - SCP - Trijicon MRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_M27IAR is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M27IAR - SCP - Trijicon MRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_FiveSeven is allowed to have the RMR scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_FiveSeven - SCP - RMR": PerTeam<boolean>;
	/**
	 * Whether or not the U_FiveSeven is allowed to have the EFLX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_FiveSeven - SCP - EFLX Mini": PerTeam<boolean>;
	/**
	 * Whether or not the U_FiveSeven is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_FiveSeven - SCP - Trijicon SRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_FiveSeven is allowed to have the Shield scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_FiveSeven - SCP - Shield CQS": PerTeam<boolean>;
	/**
	 * Whether or not the U_FiveSeven is allowed to have the ACRO scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_FiveSeven - SCP - ACRO P2": PerTeam<boolean>;
	/**
	 * Whether or not the U_G22 is allowed to have the EFLX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_G22 - SCP - EFLX Mini": PerTeam<boolean>;
	/**
	 * Whether or not the U_G22 is allowed to have the RMR scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_G22 - SCP - RMR": PerTeam<boolean>;
	/**
	 * Whether or not the U_G22 is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_G22 - SCP - Trijicon SRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_G22 is allowed to have the Shield scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_G22 - SCP - Shield CQS": PerTeam<boolean>;
	/**
	 * Whether or not the U_G22 is allowed to have the ACRO scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_G22 - SCP - ACRO P2": PerTeam<boolean>;
	/**
	 * Whether or not the U_M18 is allowed to have the EFLX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M18 - SCP - EFLX Mini": PerTeam<boolean>;
	/**
	 * Whether or not the U_M18 is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M18 - SCP - Trijicon SRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_M18 is allowed to have the Shield scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M18 - SCP - Shield CQS": PerTeam<boolean>;
	/**
	 * Whether or not the U_M18 is allowed to have the ACRO scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M18 - SCP - ACRO P2": PerTeam<boolean>;
	/**
	 * Whether or not the U_M45A1 is allowed to have the EFLX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M45A1 - SCP - EFLX Mini": PerTeam<boolean>;
	/**
	 * Whether or not the U_M45A1 is allowed to have the RMR scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M45A1 - SCP - RMR": PerTeam<boolean>;
	/**
	 * Whether or not the U_M45A1 is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M45A1 - SCP - Trijicon SRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_M45A1 is allowed to have the Shield scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M45A1 - SCP - Shield CQS": PerTeam<boolean>;
	/**
	 * Whether or not the U_M45A1 is allowed to have the ACRO scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M45A1 - SCP - ACRO P2": PerTeam<boolean>;
	/**
	 * Whether or not the U_185KSK is allowed to have the EFLX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_185KSK - SCP - EFLX Mini": PerTeam<boolean>;
	/**
	 * Whether or not the U_185KSK is allowed to have the RMR scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_185KSK - SCP - RMR": PerTeam<boolean>;
	/**
	 * Whether or not the U_185KSK is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_185KSK - SCP - Trijicon SRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_185KSK is allowed to have the Shield scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_185KSK - SCP - Shield CQS": PerTeam<boolean>;
	/**
	 * Whether or not the U_185KSK is allowed to have the ACRO scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_185KSK - SCP - ACRO P2": PerTeam<boolean>;
	/**
	 * Whether or not the U_590A1 is allowed to have the EFLX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_590A1 - SCP - EFLX Mini": PerTeam<boolean>;
	/**
	 * Whether or not the U_590A1 is allowed to have the RMR scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_590A1 - SCP - RMR": PerTeam<boolean>;
	/**
	 * Whether or not the U_590A1 is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_590A1 - SCP - Trijicon SRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_590A1 is allowed to have the Shield scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_590A1 - SCP - Shield CQS": PerTeam<boolean>;
	/**
	 * Whether or not the U_590A1 is allowed to have the ACRO scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_590A1 - SCP - ACRO P2": PerTeam<boolean>;
	/**
	 * Whether or not the U_APC10 is allowed to have the EFLX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_APC10 - SCP - EFLX Mini": PerTeam<boolean>;
	/**
	 * Whether or not the U_APC10 is allowed to have the RMR scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_APC10 - SCP - RMR": PerTeam<boolean>;
	/**
	 * Whether or not the U_APC10 is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_APC10 - SCP - Trijicon SRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_APC10 is allowed to have the Shield scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_APC10 - SCP - Shield CQS": PerTeam<boolean>;
	/**
	 * Whether or not the U_APC10 is allowed to have the ACRO scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_APC10 - SCP - ACRO P2": PerTeam<boolean>;
	/**
	 * Whether or not the U_APDW is allowed to have the EFLX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_APDW - SCP - EFLX Mini": PerTeam<boolean>;
	/**
	 * Whether or not the U_APDW is allowed to have the RMR scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_APDW - SCP - RMR": PerTeam<boolean>;
	/**
	 * Whether or not the U_APDW is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_APDW - SCP - Trijicon SRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_APDW is allowed to have the Shield scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_APDW - SCP - Shield CQS": PerTeam<boolean>;
	/**
	 * Whether or not the U_APDW is allowed to have the ACRO scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_APDW - SCP - ACRO P2": PerTeam<boolean>;
	/**
	 * Whether or not the U_MP5MLI is allowed to have the EFLX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MP5MLI - SCP - EFLX Mini": PerTeam<boolean>;
	/**
	 * Whether or not the U_MP5MLI is allowed to have the RMR scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MP5MLI - SCP - RMR": PerTeam<boolean>;
	/**
	 * Whether or not the U_MP5MLI is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MP5MLI - SCP - Trijicon SRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_MP5MLI is allowed to have the Shield scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MP5MLI - SCP - Shield CQS": PerTeam<boolean>;
	/**
	 * Whether or not the U_MP5MLI is allowed to have the ACRO scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MP5MLI - SCP - ACRO P2": PerTeam<boolean>;
	/**
	 * Whether or not the U_MP7A2 is allowed to have the EFLX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MP7A2 - SCP - EFLX Mini": PerTeam<boolean>;
	/**
	 * Whether or not the U_MP7A2 is allowed to have the RMR scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MP7A2 - SCP - RMR": PerTeam<boolean>;
	/**
	 * Whether or not the U_MP7A2 is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MP7A2 - SCP - Trijicon SRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_MP7A2 is allowed to have the Shield scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MP7A2 - SCP - Shield CQS": PerTeam<boolean>;
	/**
	 * Whether or not the U_MP7A2 is allowed to have the ACRO scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MP7A2 - SCP - ACRO P2": PerTeam<boolean>;
	/**
	 * Whether or not the U_MPX is allowed to have the EFLX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MPX - SCP - EFLX Mini": PerTeam<boolean>;
	/**
	 * Whether or not the U_MPX is allowed to have the RMR scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MPX - SCP - RMR": PerTeam<boolean>;
	/**
	 * Whether or not the U_MPX is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MPX - SCP - Trijicon SRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_MPX is allowed to have the Shield scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MPX - SCP - Shield CQS": PerTeam<boolean>;
	/**
	 * Whether or not the U_MPX is allowed to have the ACRO scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MPX - SCP - ACRO P2": PerTeam<boolean>;
	/**
	 * Whether or not the U_P90 is allowed to have the EFLX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_P90 - SCP - EFLX Mini": PerTeam<boolean>;
	/**
	 * Whether or not the U_P90 is allowed to have the RMR scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_P90 - SCP - RMR": PerTeam<boolean>;
	/**
	 * Whether or not the U_P90 is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_P90 - SCP - Trijicon SRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_P90 is allowed to have the Shield scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_P90 - SCP - Shield CQS": PerTeam<boolean>;
	/**
	 * Whether or not the U_P90 is allowed to have the ACRO scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_P90 - SCP - ACRO P2": PerTeam<boolean>;
	/**
	 * Whether or not the U_UMP40 is allowed to have the EFLX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_UMP40 - SCP - EFLX Mini": PerTeam<boolean>;
	/**
	 * Whether or not the U_UMP40 is allowed to have the RMR scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_UMP40 - SCP - RMR": PerTeam<boolean>;
	/**
	 * Whether or not the U_UMP40 is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_UMP40 - SCP - Trijicon SRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_UMP40 is allowed to have the Shield scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_UMP40 - SCP - Shield CQS": PerTeam<boolean>;
	/**
	 * Whether or not the U_UMP40 is allowed to have the ACRO scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_UMP40 - SCP - ACRO P2": PerTeam<boolean>;
	/**
	 * Whether or not the U_Vector is allowed to have the EFLX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_Vector - SCP - EFLX Mini": PerTeam<boolean>;
	/**
	 * Whether or not the U_Vector is allowed to have the RMR scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_Vector - SCP - RMR": PerTeam<boolean>;
	/**
	 * Whether or not the U_Vector is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_Vector - SCP - Trijicon SRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_Vector is allowed to have the Shield scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_Vector - SCP - Shield CQS": PerTeam<boolean>;
	/**
	 * Whether or not the U_Vector is allowed to have the ACRO scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_Vector - SCP - ACRO P2": PerTeam<boolean>;
	/**
	 * Whether or not the U_KSG is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_KSG - SCP - Trijicon MRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_KSG is allowed to have the EFLX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_KSG - SCP - EFLX Mini": PerTeam<boolean>;
	/**
	 * Whether or not the U_KSG is allowed to have the RMR scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_KSG - SCP - RMR": PerTeam<boolean>;
	/**
	 * Whether or not the U_KSG is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_KSG - SCP - Trijicon SRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_KSG is allowed to have the Shield scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_KSG - SCP - Shield CQS": PerTeam<boolean>;
	/**
	 * Whether or not the U_KSG is allowed to have the ACRO scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_KSG - SCP - ACRO P2": PerTeam<boolean>;
	/**
	 * Whether or not the U_M1014 is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M1014 - SCP - Trijicon MRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_M1014 is allowed to have the EFLX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M1014 - SCP - EFLX Mini": PerTeam<boolean>;
	/**
	 * Whether or not the U_M1014 is allowed to have the RMR scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M1014 - SCP - RMR": PerTeam<boolean>;
	/**
	 * Whether or not the U_M1014 is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M1014 - SCP - Trijicon SRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_M1014 is allowed to have the Shield scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M1014 - SCP - Shield CQS": PerTeam<boolean>;
	/**
	 * Whether or not the U_M1014 is allowed to have the ACRO scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M1014 - SCP - ACRO P2": PerTeam<boolean>;
	/**
	 * Whether or not the U_TRR8 is allowed to have the RMR scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_TRR8 - SCP - RMR": PerTeam<boolean>;
	/**
	 * Whether or not the U_TRR8 is allowed to have the EFLX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_TRR8 - SCP - EFLX Mini": PerTeam<boolean>;
	/**
	 * Whether or not the U_TRR8 is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_TRR8 - SCP - Trijicon SRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_TRR8 is allowed to have the Shield scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_TRR8 - SCP - Shield CQS": PerTeam<boolean>;
	/**
	 * Whether or not the U_TRR8 is allowed to have the ACRO scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_TRR8 - SCP - ACRO P2": PerTeam<boolean>;
	/**
	 * Whether or not the U_RagingHunter is allowed to have the OPK7 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_RagingHunter - SCP - OPK7": PerTeam<boolean>;
	/**
	 * Whether or not the U_RagingHunter is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_RagingHunter - SCP - Trijicon MRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_RagingHunter is allowed to have the CompM5b scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_RagingHunter - SCP - CompM5b": PerTeam<boolean>;
	/**
	 * Whether or not the U_RagingHunter is allowed to have the EFLX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_RagingHunter - SCP - EFLX Mini": PerTeam<boolean>;
	/**
	 * Whether or not the U_RagingHunter is allowed to have the RMR scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_RagingHunter - SCP - RMR": PerTeam<boolean>;
	/**
	 * Whether or not the U_RagingHunter is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_RagingHunter - SCP - Trijicon SRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_RagingHunter is allowed to have the Shield scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_RagingHunter - SCP - Shield CQS": PerTeam<boolean>;
	/**
	 * Whether or not the U_RagingHunter is allowed to have the ACRO scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_RagingHunter - SCP - ACRO P2": PerTeam<boolean>;
	/**
	 * Whether or not the U_M60E6 is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M60E6 - SCP - Trijicon MRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_RPKM is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_RPKM - SCP - Trijicon MRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_L85A3 is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_L85A3 - SCP - Trijicon MRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_MG4K is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MG4K - SCP - Trijicon MRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_G3A4 is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_G3A4 - SCP - Trijicon MRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_MSBSGROTB is allowed to have the OPK7 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MSBSGROTB - SCP - OPK7": PerTeam<boolean>;
	/**
	 * Whether or not the U_MSBSGROTB is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MSBSGROTB - SCP - Trijicon MRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_MSBSGROTB is allowed to have the CompM5b scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MSBSGROTB - SCP - CompM5b": PerTeam<boolean>;
	/**
	 * Whether or not the U_FiveSeven is allowed to have the RomeoX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_FiveSeven - SCP - RomeoX": PerTeam<boolean>;
	/**
	 * Whether or not the U_G22 is allowed to have the RomeoX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_G22 - SCP - RomeoX": PerTeam<boolean>;
	/**
	 * Whether or not the U_M18 is allowed to have the RomeoX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M18 - SCP - RomeoX": PerTeam<boolean>;
	/**
	 * Whether or not the U_M45A1 is allowed to have the RomeoX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M45A1 - SCP - RomeoX": PerTeam<boolean>;
	/**
	 * Whether or not the U_RagingHunter is allowed to have the RomeoX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_RagingHunter - SCP - RomeoX": PerTeam<boolean>;
	/**
	 * Whether or not the U_TRR8 is allowed to have the RomeoX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_TRR8 - SCP - RomeoX": PerTeam<boolean>;
	/**
	 * Whether or not the U_185KSK is allowed to have the RomeoX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_185KSK - SCP - RomeoX": PerTeam<boolean>;
	/**
	 * Whether or not the U_590A1 is allowed to have the RomeoX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_590A1 - SCP - RomeoX": PerTeam<boolean>;
	/**
	 * Whether or not the U_APC10 is allowed to have the RomeoX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_APC10 - SCP - RomeoX": PerTeam<boolean>;
	/**
	 * Whether or not the U_APDW is allowed to have the RomeoX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_APDW - SCP - RomeoX": PerTeam<boolean>;
	/**
	 * Whether or not the U_M1014 is allowed to have the RomeoX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M1014 - SCP - RomeoX": PerTeam<boolean>;
	/**
	 * Whether or not the U_MP5MLI is allowed to have the RomeoX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MP5MLI - SCP - RomeoX": PerTeam<boolean>;
	/**
	 * Whether or not the U_MP7A2 is allowed to have the RomeoX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MP7A2 - SCP - RomeoX": PerTeam<boolean>;
	/**
	 * Whether or not the U_MPX is allowed to have the RomeoX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MPX - SCP - RomeoX": PerTeam<boolean>;
	/**
	 * Whether or not the U_P90 is allowed to have the RomeoX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_P90 - SCP - RomeoX": PerTeam<boolean>;
	/**
	 * Whether or not the U_UMP40 is allowed to have the RomeoX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_UMP40 - SCP - RomeoX": PerTeam<boolean>;
	/**
	 * Whether or not the U_Vector is allowed to have the RomeoX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_Vector - SCP - RomeoX": PerTeam<boolean>;
	/**
	 * Whether or not the U_M4A1 is allowed to have the EFLX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M4A1 - SCP - EFLX Mini": PerTeam<boolean>;
	/**
	 * Whether or not the U_6P67 is allowed to have the EFLX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_6P67 - SCP - EFLX Mini": PerTeam<boolean>;
	/**
	 * Whether or not the U_6P67 is allowed to have the RMR scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_6P67 - SCP - RMR": PerTeam<boolean>;
	/**
	 * Whether or not the U_6P67 is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_6P67 - SCP - Trijicon SRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_6P67 is allowed to have the Shield scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_6P67 - SCP - Shield CQS": PerTeam<boolean>;
	/**
	 * Whether or not the U_6P67 is allowed to have the ACRO scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_6P67 - SCP - ACRO P2": PerTeam<boolean>;
	/**
	 * Whether or not the U_ACE32 is allowed to have the EFLX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_ACE32 - SCP - EFLX Mini": PerTeam<boolean>;
	/**
	 * Whether or not the U_ACE32 is allowed to have the RMR scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_ACE32 - SCP - RMR": PerTeam<boolean>;
	/**
	 * Whether or not the U_ACE32 is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_ACE32 - SCP - Trijicon SRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_ACE32 is allowed to have the Shield scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_ACE32 - SCP - Shield CQS": PerTeam<boolean>;
	/**
	 * Whether or not the U_ACE32 is allowed to have the ACRO scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_ACE32 - SCP - ACRO P2": PerTeam<boolean>;
	/**
	 * Whether or not the U_AK205 is allowed to have the EFLX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_AK205 - SCP - EFLX Mini": PerTeam<boolean>;
	/**
	 * Whether or not the U_AK205 is allowed to have the RMR scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_AK205 - SCP - RMR": PerTeam<boolean>;
	/**
	 * Whether or not the U_AK205 is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_AK205 - SCP - Trijicon SRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_AK205 is allowed to have the Shield scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_AK205 - SCP - Shield CQS": PerTeam<boolean>;
	/**
	 * Whether or not the U_AK205 is allowed to have the ACRO scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_AK205 - SCP - ACRO P2": PerTeam<boolean>;
	/**
	 * Whether or not the U_XM7 is allowed to have the EFLX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_XM7 - SCP - EFLX Mini": PerTeam<boolean>;
	/**
	 * Whether or not the U_XM7 is allowed to have the RMR scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_XM7 - SCP - RMR": PerTeam<boolean>;
	/**
	 * Whether or not the U_XM7 is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_XM7 - SCP - Trijicon SRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_XM7 is allowed to have the Shield scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_XM7 - SCP - Shield CQS": PerTeam<boolean>;
	/**
	 * Whether or not the U_XM7 is allowed to have the ACRO scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_XM7 - SCP - ACRO P2": PerTeam<boolean>;
	/**
	 * Whether or not the U_6P67 is allowed to have the RomeoX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_6P67 - SCP - RomeoX": PerTeam<boolean>;
	/**
	 * Whether or not the U_ACE32 is allowed to have the RomeoX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_ACE32 - SCP - RomeoX": PerTeam<boolean>;
	/**
	 * Whether or not the U_AK205 is allowed to have the RomeoX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_AK205 - SCP - RomeoX": PerTeam<boolean>;
	/**
	 * Whether or not the U_ARADMR is allowed to have the EFLX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_ARADMR - SCP - EFLX Mini": PerTeam<boolean>;
	/**
	 * Whether or not the U_ARADMR is allowed to have the RMR scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_ARADMR - SCP - RMR": PerTeam<boolean>;
	/**
	 * Whether or not the U_ARADMR is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_ARADMR - SCP - Trijicon SRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_ARADMR is allowed to have the Shield scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_ARADMR - SCP - Shield CQS": PerTeam<boolean>;
	/**
	 * Whether or not the U_ARADMR is allowed to have the RomeoX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_ARADMR - SCP - RomeoX": PerTeam<boolean>;
	/**
	 * Whether or not the U_ARADMR is allowed to have the ACRO scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_ARADMR - SCP - ACRO P2": PerTeam<boolean>;
	/**
	 * Whether or not the U_G36 is allowed to have the EFLX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_G36 - SCP - EFLX Mini": PerTeam<boolean>;
	/**
	 * Whether or not the U_G36 is allowed to have the RMR scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_G36 - SCP - RMR": PerTeam<boolean>;
	/**
	 * Whether or not the U_G36 is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_G36 - SCP - Trijicon SRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_G36 is allowed to have the Shield scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_G36 - SCP - Shield CQS": PerTeam<boolean>;
	/**
	 * Whether or not the U_G36 is allowed to have the RomeoX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_G36 - SCP - RomeoX": PerTeam<boolean>;
	/**
	 * Whether or not the U_G36 is allowed to have the ACRO scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_G36 - SCP - ACRO P2": PerTeam<boolean>;
	/**
	 * Whether or not the U_G3A4 is allowed to have the EFLX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_G3A4 - SCP - EFLX Mini": PerTeam<boolean>;
	/**
	 * Whether or not the U_G3A4 is allowed to have the RMR scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_G3A4 - SCP - RMR": PerTeam<boolean>;
	/**
	 * Whether or not the U_G3A4 is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_G3A4 - SCP - Trijicon SRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_G3A4 is allowed to have the Shield scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_G3A4 - SCP - Shield CQS": PerTeam<boolean>;
	/**
	 * Whether or not the U_G3A4 is allowed to have the RomeoX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_G3A4 - SCP - RomeoX": PerTeam<boolean>;
	/**
	 * Whether or not the U_G3A4 is allowed to have the ACRO scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_G3A4 - SCP - ACRO P2": PerTeam<boolean>;
	/**
	 * Whether or not the U_HK417A2 is allowed to have the EFLX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_HK417A2 - SCP - EFLX Mini": PerTeam<boolean>;
	/**
	 * Whether or not the U_HK417A2 is allowed to have the RMR scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_HK417A2 - SCP - RMR": PerTeam<boolean>;
	/**
	 * Whether or not the U_HK417A2 is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_HK417A2 - SCP - Trijicon SRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_HK417A2 is allowed to have the Shield scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_HK417A2 - SCP - Shield CQS": PerTeam<boolean>;
	/**
	 * Whether or not the U_HK417A2 is allowed to have the RomeoX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_HK417A2 - SCP - RomeoX": PerTeam<boolean>;
	/**
	 * Whether or not the U_HK417A2 is allowed to have the ACRO scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_HK417A2 - SCP - ACRO P2": PerTeam<boolean>;
	/**
	 * Whether or not the U_HK433 is allowed to have the EFLX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_HK433 - SCP - EFLX Mini": PerTeam<boolean>;
	/**
	 * Whether or not the U_HK433 is allowed to have the RMR scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_HK433 - SCP - RMR": PerTeam<boolean>;
	/**
	 * Whether or not the U_HK433 is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_HK433 - SCP - Trijicon SRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_HK433 is allowed to have the Shield scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_HK433 - SCP - Shield CQS": PerTeam<boolean>;
	/**
	 * Whether or not the U_HK433 is allowed to have the RomeoX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_HK433 - SCP - RomeoX": PerTeam<boolean>;
	/**
	 * Whether or not the U_HK433 is allowed to have the ACRO scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_HK433 - SCP - ACRO P2": PerTeam<boolean>;
	/**
	 * Whether or not the U_L85A3 is allowed to have the EFLX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_L85A3 - SCP - EFLX Mini": PerTeam<boolean>;
	/**
	 * Whether or not the U_L85A3 is allowed to have the RMR scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_L85A3 - SCP - RMR": PerTeam<boolean>;
	/**
	 * Whether or not the U_L85A3 is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_L85A3 - SCP - Trijicon SRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_L85A3 is allowed to have the Shield scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_L85A3 - SCP - Shield CQS": PerTeam<boolean>;
	/**
	 * Whether or not the U_L85A3 is allowed to have the RomeoX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_L85A3 - SCP - RomeoX": PerTeam<boolean>;
	/**
	 * Whether or not the U_L85A3 is allowed to have the ACRO scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_L85A3 - SCP - ACRO P2": PerTeam<boolean>;
	/**
	 * Whether or not the U_M2010ESR is allowed to have the EFLX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M2010ESR - SCP - EFLX Mini": PerTeam<boolean>;
	/**
	 * Whether or not the U_M2010ESR is allowed to have the RMR scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M2010ESR - SCP - RMR": PerTeam<boolean>;
	/**
	 * Whether or not the U_M2010ESR is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M2010ESR - SCP - Trijicon SRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_M2010ESR is allowed to have the Shield scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M2010ESR - SCP - Shield CQS": PerTeam<boolean>;
	/**
	 * Whether or not the U_M2010ESR is allowed to have the RomeoX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M2010ESR - SCP - RomeoX": PerTeam<boolean>;
	/**
	 * Whether or not the U_M2010ESR is allowed to have the ACRO scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M2010ESR - SCP - ACRO P2": PerTeam<boolean>;
	/**
	 * Whether or not the U_M240L is allowed to have the EFLX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M240L - SCP - EFLX Mini": PerTeam<boolean>;
	/**
	 * Whether or not the U_M240L is allowed to have the RMR scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M240L - SCP - RMR": PerTeam<boolean>;
	/**
	 * Whether or not the U_M240L is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M240L - SCP - Trijicon SRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_M240L is allowed to have the Shield scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M240L - SCP - Shield CQS": PerTeam<boolean>;
	/**
	 * Whether or not the U_M240L is allowed to have the RomeoX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M240L - SCP - RomeoX": PerTeam<boolean>;
	/**
	 * Whether or not the U_M240L is allowed to have the ACRO scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M240L - SCP - ACRO P2": PerTeam<boolean>;
	/**
	 * Whether or not the U_M250 is allowed to have the EFLX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M250 - SCP - EFLX Mini": PerTeam<boolean>;
	/**
	 * Whether or not the U_M250 is allowed to have the RMR scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M250 - SCP - RMR": PerTeam<boolean>;
	/**
	 * Whether or not the U_M250 is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M250 - SCP - Trijicon SRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_M250 is allowed to have the Shield scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M250 - SCP - Shield CQS": PerTeam<boolean>;
	/**
	 * Whether or not the U_M250 is allowed to have the RomeoX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M250 - SCP - RomeoX": PerTeam<boolean>;
	/**
	 * Whether or not the U_M250 is allowed to have the ACRO scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M250 - SCP - ACRO P2": PerTeam<boolean>;
	/**
	 * Whether or not the U_M27IAR is allowed to have the EFLX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M27IAR - SCP - EFLX Mini": PerTeam<boolean>;
	/**
	 * Whether or not the U_M27IAR is allowed to have the RMR scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M27IAR - SCP - RMR": PerTeam<boolean>;
	/**
	 * Whether or not the U_M27IAR is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M27IAR - SCP - Trijicon SRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_M27IAR is allowed to have the Shield scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M27IAR - SCP - Shield CQS": PerTeam<boolean>;
	/**
	 * Whether or not the U_M27IAR is allowed to have the RomeoX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M27IAR - SCP - RomeoX": PerTeam<boolean>;
	/**
	 * Whether or not the U_M27IAR is allowed to have the ACRO scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M27IAR - SCP - ACRO P2": PerTeam<boolean>;
	/**
	 * Whether or not the U_M39EMR is allowed to have the EFLX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M39EMR - SCP - EFLX Mini": PerTeam<boolean>;
	/**
	 * Whether or not the U_M39EMR is allowed to have the RMR scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M39EMR - SCP - RMR": PerTeam<boolean>;
	/**
	 * Whether or not the U_M39EMR is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M39EMR - SCP - Trijicon SRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_M39EMR is allowed to have the Shield scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M39EMR - SCP - Shield CQS": PerTeam<boolean>;
	/**
	 * Whether or not the U_M39EMR is allowed to have the RomeoX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M39EMR - SCP - RomeoX": PerTeam<boolean>;
	/**
	 * Whether or not the U_M39EMR is allowed to have the ACRO scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M39EMR - SCP - ACRO P2": PerTeam<boolean>;
	/**
	 * Whether or not the U_M4A1 is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M4A1 - SCP - Trijicon SRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_M4A1 is allowed to have the Shield scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M4A1 - SCP - Shield CQS": PerTeam<boolean>;
	/**
	 * Whether or not the U_M4A1 is allowed to have the RomeoX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M4A1 - SCP - RomeoX": PerTeam<boolean>;
	/**
	 * Whether or not the U_M4A1 is allowed to have the ACRO scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M4A1 - SCP - ACRO P2": PerTeam<boolean>;
	/**
	 * Whether or not the U_M60E6 is allowed to have the EFLX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M60E6 - SCP - EFLX Mini": PerTeam<boolean>;
	/**
	 * Whether or not the U_M60E6 is allowed to have the RMR scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M60E6 - SCP - RMR": PerTeam<boolean>;
	/**
	 * Whether or not the U_M60E6 is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M60E6 - SCP - Trijicon SRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_M60E6 is allowed to have the Shield scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M60E6 - SCP - Shield CQS": PerTeam<boolean>;
	/**
	 * Whether or not the U_M60E6 is allowed to have the RomeoX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M60E6 - SCP - RomeoX": PerTeam<boolean>;
	/**
	 * Whether or not the U_M60E6 is allowed to have the ACRO scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M60E6 - SCP - ACRO P2": PerTeam<boolean>;
	/**
	 * Whether or not the U_MG4K is allowed to have the EFLX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MG4K - SCP - EFLX Mini": PerTeam<boolean>;
	/**
	 * Whether or not the U_MG4K is allowed to have the RMR scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MG4K - SCP - RMR": PerTeam<boolean>;
	/**
	 * Whether or not the U_MG4K is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MG4K - SCP - Trijicon SRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_MG4K is allowed to have the Shield scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MG4K - SCP - Shield CQS": PerTeam<boolean>;
	/**
	 * Whether or not the U_MG4K is allowed to have the RomeoX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MG4K - SCP - RomeoX": PerTeam<boolean>;
	/**
	 * Whether or not the U_MG4K is allowed to have the ACRO scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MG4K - SCP - ACRO P2": PerTeam<boolean>;
	/**
	 * Whether or not the U_Minimi is allowed to have the EFLX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_Minimi - SCP - EFLX Mini": PerTeam<boolean>;
	/**
	 * Whether or not the U_Minimi is allowed to have the RMR scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_Minimi - SCP - RMR": PerTeam<boolean>;
	/**
	 * Whether or not the U_Minimi is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_Minimi - SCP - Trijicon SRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_Minimi is allowed to have the Shield scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_Minimi - SCP - Shield CQS": PerTeam<boolean>;
	/**
	 * Whether or not the U_Minimi is allowed to have the RomeoX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_Minimi - SCP - RomeoX": PerTeam<boolean>;
	/**
	 * Whether or not the U_Minimi is allowed to have the ACRO scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_Minimi - SCP - ACRO P2": PerTeam<boolean>;
	/**
	 * Whether or not the U_MRAD is allowed to have the EFLX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MRAD - SCP - EFLX Mini": PerTeam<boolean>;
	/**
	 * Whether or not the U_MRAD is allowed to have the RMR scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MRAD - SCP - RMR": PerTeam<boolean>;
	/**
	 * Whether or not the U_MRAD is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MRAD - SCP - Trijicon SRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_MRAD is allowed to have the Shield scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MRAD - SCP - Shield CQS": PerTeam<boolean>;
	/**
	 * Whether or not the U_MRAD is allowed to have the RomeoX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MRAD - SCP - RomeoX": PerTeam<boolean>;
	/**
	 * Whether or not the U_MRAD is allowed to have the ACRO scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MRAD - SCP - ACRO P2": PerTeam<boolean>;
	/**
	 * Whether or not the U_MSBSGROTB is allowed to have the EFLX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MSBSGROTB - SCP - EFLX Mini": PerTeam<boolean>;
	/**
	 * Whether or not the U_MSBSGROTB is allowed to have the RMR scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MSBSGROTB - SCP - RMR": PerTeam<boolean>;
	/**
	 * Whether or not the U_MSBSGROTB is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MSBSGROTB - SCP - Trijicon SRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_MSBSGROTB is allowed to have the Shield scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MSBSGROTB - SCP - Shield CQS": PerTeam<boolean>;
	/**
	 * Whether or not the U_MSBSGROTB is allowed to have the RomeoX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MSBSGROTB - SCP - RomeoX": PerTeam<boolean>;
	/**
	 * Whether or not the U_MSBSGROTB is allowed to have the ACRO scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MSBSGROTB - SCP - ACRO P2": PerTeam<boolean>;
	/**
	 * Whether or not the U_QBZ192 is allowed to have the EFLX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_QBZ192 - SCP - EFLX Mini": PerTeam<boolean>;
	/**
	 * Whether or not the U_QBZ192 is allowed to have the RMR scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_QBZ192 - SCP - RMR": PerTeam<boolean>;
	/**
	 * Whether or not the U_QBZ192 is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_QBZ192 - SCP - Trijicon SRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_QBZ192 is allowed to have the Shield scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_QBZ192 - SCP - Shield CQS": PerTeam<boolean>;
	/**
	 * Whether or not the U_QBZ192 is allowed to have the RomeoX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_QBZ192 - SCP - RomeoX": PerTeam<boolean>;
	/**
	 * Whether or not the U_QBZ192 is allowed to have the ACRO scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_QBZ192 - SCP - ACRO P2": PerTeam<boolean>;
	/**
	 * Whether or not the U_Ultimax is allowed to have the EFLX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_Ultimax - SCP - EFLX Mini": PerTeam<boolean>;
	/**
	 * Whether or not the U_Ultimax is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_Ultimax - SCP - Trijicon SRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_Ultimax is allowed to have the Shield scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_Ultimax - SCP - Shield CQS": PerTeam<boolean>;
	/**
	 * Whether or not the U_Ultimax is allowed to have the RomeoX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_Ultimax - SCP - RomeoX": PerTeam<boolean>;
	/**
	 * Whether or not the U_Ultimax is allowed to have the ACRO scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_Ultimax - SCP - ACRO P2": PerTeam<boolean>;
	/**
	 * Whether or not the U_SCARL is allowed to have the EFLX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SCARL - SCP - EFLX Mini": PerTeam<boolean>;
	/**
	 * Whether or not the U_SCARL is allowed to have the RMR scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SCARL - SCP - RMR": PerTeam<boolean>;
	/**
	 * Whether or not the U_SCARL is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SCARL - SCP - Trijicon SRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_SCARL is allowed to have the Shield scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SCARL - SCP - Shield CQS": PerTeam<boolean>;
	/**
	 * Whether or not the U_SCARL is allowed to have the RomeoX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SCARL - SCP - RomeoX": PerTeam<boolean>;
	/**
	 * Whether or not the U_SCARL is allowed to have the ACRO scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SCARL - SCP - ACRO P2": PerTeam<boolean>;
	/**
	 * Whether or not the U_Tavor7 is allowed to have the EFLX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_Tavor7 - SCP - EFLX Mini": PerTeam<boolean>;
	/**
	 * Whether or not the U_Tavor7 is allowed to have the RMR scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_Tavor7 - SCP - RMR": PerTeam<boolean>;
	/**
	 * Whether or not the U_Tavor7 is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_Tavor7 - SCP - Trijicon SRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_Tavor7 is allowed to have the Shield scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_Tavor7 - SCP - Shield CQS": PerTeam<boolean>;
	/**
	 * Whether or not the U_Tavor7 is allowed to have the RomeoX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_Tavor7 - SCP - RomeoX": PerTeam<boolean>;
	/**
	 * Whether or not the U_Tavor7 is allowed to have the ACRO scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_Tavor7 - SCP - ACRO P2": PerTeam<boolean>;
	/**
	 * Whether or not the U_RPKM is allowed to have the EFLX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_RPKM - SCP - EFLX Mini": PerTeam<boolean>;
	/**
	 * Whether or not the U_RPKM is allowed to have the RMR scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_RPKM - SCP - RMR": PerTeam<boolean>;
	/**
	 * Whether or not the U_RPKM is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_RPKM - SCP - Trijicon SRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_RPKM is allowed to have the Shield scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_RPKM - SCP - Shield CQS": PerTeam<boolean>;
	/**
	 * Whether or not the U_RPKM is allowed to have the RomeoX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_RPKM - SCP - RomeoX": PerTeam<boolean>;
	/**
	 * Whether or not the U_RPKM is allowed to have the ACRO scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_RPKM - SCP - ACRO P2": PerTeam<boolean>;
	/**
	 * Whether or not the U_SCARSC is allowed to have the EFLX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SCARSC - SCP - EFLX Mini": PerTeam<boolean>;
	/**
	 * Whether or not the U_SCARSC is allowed to have the RMR scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SCARSC - SCP - RMR": PerTeam<boolean>;
	/**
	 * Whether or not the U_SCARSC is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SCARSC - SCP - Trijicon SRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_SCARSC is allowed to have the Shield scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SCARSC - SCP - Shield CQS": PerTeam<boolean>;
	/**
	 * Whether or not the U_SCARSC is allowed to have the RomeoX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SCARSC - SCP - RomeoX": PerTeam<boolean>;
	/**
	 * Whether or not the U_SCARSC is allowed to have the ACRO scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SCARSC - SCP - ACRO P2": PerTeam<boolean>;
	/**
	 * Whether or not the U_SIG553R is allowed to have the EFLX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SIG553R - SCP - EFLX Mini": PerTeam<boolean>;
	/**
	 * Whether or not the U_SIG553R is allowed to have the RMR scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SIG553R - SCP - RMR": PerTeam<boolean>;
	/**
	 * Whether or not the U_SIG553R is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SIG553R - SCP - Trijicon SRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_SIG553R is allowed to have the Shield scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SIG553R - SCP - Shield CQS": PerTeam<boolean>;
	/**
	 * Whether or not the U_SIG553R is allowed to have the RomeoX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SIG553R - SCP - RomeoX": PerTeam<boolean>;
	/**
	 * Whether or not the U_SIG553R is allowed to have the ACRO scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SIG553R - SCP - ACRO P2": PerTeam<boolean>;
	/**
	 * Whether or not the U_SV98M is allowed to have the EFLX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SV98M - SCP - EFLX Mini": PerTeam<boolean>;
	/**
	 * Whether or not the U_SV98M is allowed to have the RMR scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SV98M - SCP - RMR": PerTeam<boolean>;
	/**
	 * Whether or not the U_SV98M is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SV98M - SCP - Trijicon SRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_SV98M is allowed to have the Shield scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SV98M - SCP - Shield CQS": PerTeam<boolean>;
	/**
	 * Whether or not the U_SV98M is allowed to have the RomeoX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SV98M - SCP - RomeoX": PerTeam<boolean>;
	/**
	 * Whether or not the U_SV98M is allowed to have the ACRO scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SV98M - SCP - ACRO P2": PerTeam<boolean>;
	/**
	 * Whether or not the U_SVCh is allowed to have the EFLX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SVCh - SCP - EFLX Mini": PerTeam<boolean>;
	/**
	 * Whether or not the U_SVCh is allowed to have the RMR scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SVCh - SCP - RMR": PerTeam<boolean>;
	/**
	 * Whether or not the U_SVCh is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SVCh - SCP - Trijicon SRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_SVCh is allowed to have the Shield scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SVCh - SCP - Shield CQS": PerTeam<boolean>;
	/**
	 * Whether or not the U_SVCh is allowed to have the RomeoX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SVCh - SCP - RomeoX": PerTeam<boolean>;
	/**
	 * Whether or not the U_SVCh is allowed to have the ACRO scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SVCh - SCP - ACRO P2": PerTeam<boolean>;
	/**
	 * Whether or not the U_SVDM is allowed to have the EFLX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SVDM - SCP - EFLX Mini": PerTeam<boolean>;
	/**
	 * Whether or not the U_SVDM is allowed to have the RMR scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SVDM - SCP - RMR": PerTeam<boolean>;
	/**
	 * Whether or not the U_SVDM is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SVDM - SCP - Trijicon SRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_SVDM is allowed to have the Shield scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SVDM - SCP - Shield CQS": PerTeam<boolean>;
	/**
	 * Whether or not the U_SVDM is allowed to have the RomeoX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SVDM - SCP - RomeoX": PerTeam<boolean>;
	/**
	 * Whether or not the U_SVDM is allowed to have the ACRO scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SVDM - SCP - ACRO P2": PerTeam<boolean>;
	/**
	 * Whether or not the U_DP12 is allowed to have the CompM5b scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_DP12 - SCP - CompM5b": PerTeam<boolean>;
	/**
	 * Whether or not the U_DP12 is allowed to have the EFLX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_DP12 - SCP - EFLX Mini": PerTeam<boolean>;
	/**
	 * Whether or not the U_DP12 is allowed to have the OPK7 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_DP12 - SCP - OPK7": PerTeam<boolean>;
	/**
	 * Whether or not the U_DP12 is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_DP12 - SCP - Trijicon MRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_DP12 is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_DP12 - SCP - Trijicon SRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_DP12 is allowed to have the Shield scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_DP12 - SCP - Shield CQS": PerTeam<boolean>;
	/**
	 * Whether or not the U_MiniFix is allowed to have the CompM5b scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MiniFix - SCP - CompM5b": PerTeam<boolean>;
	/**
	 * Whether or not the U_MiniFix is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MiniFix - SCP - Trijicon MRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_MiniFix is allowed to have the OPK7 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MiniFix - SCP - OPK7": PerTeam<boolean>;
	/**
	 * Whether or not the U_DP12 is allowed to have the RomeoX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_DP12 - SCP - RomeoX": PerTeam<boolean>;
	/**
	 * Whether or not the U_DP12 is allowed to have the ACRO scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_DP12 - SCP - ACRO P2": PerTeam<boolean>;
	/**
	 * Whether or not the U_DP12 is allowed to have the RMR scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_DP12 - SCP - RMR": PerTeam<boolean>;
	/**
	 * Whether or not the U_MiniFix is allowed to have the EFLX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MiniFix - SCP - EFLX Mini": PerTeam<boolean>;
	/**
	 * Whether or not the U_MiniFix is allowed to have the RMR scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MiniFix - SCP - RMR": PerTeam<boolean>;
	/**
	 * Whether or not the U_MiniFix is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MiniFix - SCP - Trijicon SRO": PerTeam<boolean>;
	/**
	 * Whether or not the U_MiniFix is allowed to have the Shield scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MiniFix - SCP - Shield CQS": PerTeam<boolean>;
	/**
	 * Whether or not the U_MiniFix is allowed to have the RomeoX scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MiniFix - SCP - RomeoX": PerTeam<boolean>;
	/**
	 * Whether or not the U_MiniFix is allowed to have the ACRO scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MiniFix - SCP - ACRO P2": PerTeam<boolean>;
	/**
	 * Whether or not the U_M27IAR is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M27IAR - SCP - Trijicon SDO": PerTeam<boolean>;
	/**
	 * Whether or not the U_M39EMR is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M39EMR - SCP - Trijicon SDO": PerTeam<boolean>;
	/**
	 * Whether or not the U_M2010ESR is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M2010ESR - SCP - Trijicon SDO": PerTeam<boolean>;
	/**
	 * Whether or not the U_HK417A2 is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_HK417A2 - SCP - Trijicon SDO": PerTeam<boolean>;
	/**
	 * Whether or not the U_MPX is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MPX - SCP - Trijicon SDO": PerTeam<boolean>;
	/**
	 * Whether or not the U_Ultimax is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_Ultimax - SCP - Trijicon SDO": PerTeam<boolean>;
	/**
	 * Whether or not the U_Ultimax is allowed to have the 1P781P scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_Ultimax - SCP - 1P781P": PerTeam<boolean>;
	/**
	 * Whether or not the U_Minimi is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_Minimi - SCP - Trijicon SDO": PerTeam<boolean>;
	/**
	 * Whether or not the U_Minimi is allowed to have the 1P781P scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_Minimi - SCP - 1P781P": PerTeam<boolean>;
	/**
	 * Whether or not the U_M39EMR is allowed to have the 1P781P scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M39EMR - SCP - 1P781P": PerTeam<boolean>;
	/**
	 * Whether or not the U_G36 is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_G36 - SCP - Trijicon SDO": PerTeam<boolean>;
	/**
	 * Whether or not the U_M4A1 is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M4A1 - SCP - Trijicon SDO": PerTeam<boolean>;
	/**
	 * Whether or not the U_M4A1 is allowed to have the 1P781P scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M4A1 - SCP - 1P781P": PerTeam<boolean>;
	/**
	 * Whether or not the U_M27IAR is allowed to have the Bravo3 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M27IAR - SCP - Bravo3": PerTeam<boolean>;
	/**
	 * Whether or not the U_M27IAR is allowed to have the ELCAN scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M27IAR - SCP - ELCAN": PerTeam<boolean>;
	/**
	 * Whether or not the U_M27IAR is allowed to have the Spitfire scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M27IAR - SCP - Spitfire": PerTeam<boolean>;
	/**
	 * Whether or not the U_M27IAR is allowed to have the COD2M scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M27IAR - SCP - COD2M": PerTeam<boolean>;
	/**
	 * Whether or not the U_M2010ESR is allowed to have the Bravo3 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M2010ESR - SCP - Bravo3": PerTeam<boolean>;
	/**
	 * Whether or not the U_M2010ESR is allowed to have the Spitfire scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M2010ESR - SCP - Spitfire": PerTeam<boolean>;
	/**
	 * Whether or not the U_M2010ESR is allowed to have the COD2M scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M2010ESR - SCP - COD2M": PerTeam<boolean>;
	/**
	 * Whether or not the U_185KSK is allowed to have the Bravo3 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_185KSK - SCP - Bravo3": PerTeam<boolean>;
	/**
	 * Whether or not the U_185KSK is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_185KSK - SCP - Trijicon SDO": PerTeam<boolean>;
	/**
	 * Whether or not the U_185KSK is allowed to have the Steiner scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_185KSK - SCP - Steiner T536": PerTeam<boolean>;
	/**
	 * Whether or not the U_185KSK is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_185KSK - SCP - Trijicon RCO": PerTeam<boolean>;
	/**
	 * Whether or not the U_185KSK is allowed to have the Spitfire scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_185KSK - SCP - Spitfire": PerTeam<boolean>;
	/**
	 * Whether or not the U_185KSK is allowed to have the COD2M scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_185KSK - SCP - COD2M": PerTeam<boolean>;
	/**
	 * Whether or not the U_590A1 is allowed to have the Bravo3 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_590A1 - SCP - Bravo3": PerTeam<boolean>;
	/**
	 * Whether or not the U_590A1 is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_590A1 - SCP - Trijicon SDO": PerTeam<boolean>;
	/**
	 * Whether or not the U_590A1 is allowed to have the Steiner scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_590A1 - SCP - Steiner T536": PerTeam<boolean>;
	/**
	 * Whether or not the U_590A1 is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_590A1 - SCP - Trijicon RCO": PerTeam<boolean>;
	/**
	 * Whether or not the U_590A1 is allowed to have the Spitfire scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_590A1 - SCP - Spitfire": PerTeam<boolean>;
	/**
	 * Whether or not the U_590A1 is allowed to have the COD2M scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_590A1 - SCP - COD2M": PerTeam<boolean>;
	/**
	 * Whether or not the U_6P67 is allowed to have the Bravo3 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_6P67 - SCP - Bravo3": PerTeam<boolean>;
	/**
	 * Whether or not the U_6P67 is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_6P67 - SCP - Trijicon SDO": PerTeam<boolean>;
	/**
	 * Whether or not the U_6P67 is allowed to have the Steiner scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_6P67 - SCP - Steiner T536": PerTeam<boolean>;
	/**
	 * Whether or not the U_6P67 is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_6P67 - SCP - Trijicon RCO": PerTeam<boolean>;
	/**
	 * Whether or not the U_6P67 is allowed to have the Spitfire scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_6P67 - SCP - Spitfire": PerTeam<boolean>;
	/**
	 * Whether or not the U_6P67 is allowed to have the COD2M scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_6P67 - SCP - COD2M": PerTeam<boolean>;
	/**
	 * Whether or not the U_ACE32 is allowed to have the Bravo3 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_ACE32 - SCP - Bravo3": PerTeam<boolean>;
	/**
	 * Whether or not the U_ACE32 is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_ACE32 - SCP - Trijicon SDO": PerTeam<boolean>;
	/**
	 * Whether or not the U_ACE32 is allowed to have the Steiner scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_ACE32 - SCP - Steiner T536": PerTeam<boolean>;
	/**
	 * Whether or not the U_ACE32 is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_ACE32 - SCP - Trijicon RCO": PerTeam<boolean>;
	/**
	 * Whether or not the U_ACE32 is allowed to have the Spitfire scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_ACE32 - SCP - Spitfire": PerTeam<boolean>;
	/**
	 * Whether or not the U_ACE32 is allowed to have the COD2M scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_ACE32 - SCP - COD2M": PerTeam<boolean>;
	/**
	 * Whether or not the U_AK205 is allowed to have the Bravo3 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_AK205 - SCP - Bravo3": PerTeam<boolean>;
	/**
	 * Whether or not the U_AK205 is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_AK205 - SCP - Trijicon SDO": PerTeam<boolean>;
	/**
	 * Whether or not the U_AK205 is allowed to have the Steiner scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_AK205 - SCP - Steiner T536": PerTeam<boolean>;
	/**
	 * Whether or not the U_AK205 is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_AK205 - SCP - Trijicon RCO": PerTeam<boolean>;
	/**
	 * Whether or not the U_AK205 is allowed to have the Spitfire scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_AK205 - SCP - Spitfire": PerTeam<boolean>;
	/**
	 * Whether or not the U_AK205 is allowed to have the COD2M scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_AK205 - SCP - COD2M": PerTeam<boolean>;
	/**
	 * Whether or not the U_APC10 is allowed to have the Bravo3 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_APC10 - SCP - Bravo3": PerTeam<boolean>;
	/**
	 * Whether or not the U_APC10 is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_APC10 - SCP - Trijicon SDO": PerTeam<boolean>;
	/**
	 * Whether or not the U_APC10 is allowed to have the Steiner scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_APC10 - SCP - Steiner T536": PerTeam<boolean>;
	/**
	 * Whether or not the U_APC10 is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_APC10 - SCP - Trijicon RCO": PerTeam<boolean>;
	/**
	 * Whether or not the U_APC10 is allowed to have the Spitfire scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_APC10 - SCP - Spitfire": PerTeam<boolean>;
	/**
	 * Whether or not the U_APC10 is allowed to have the COD2M scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_APC10 - SCP - COD2M": PerTeam<boolean>;
	/**
	 * Whether or not the U_APDW is allowed to have the Bravo3 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_APDW - SCP - Bravo3": PerTeam<boolean>;
	/**
	 * Whether or not the U_APDW is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_APDW - SCP - Trijicon SDO": PerTeam<boolean>;
	/**
	 * Whether or not the U_APDW is allowed to have the Steiner scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_APDW - SCP - Steiner T536": PerTeam<boolean>;
	/**
	 * Whether or not the U_APDW is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_APDW - SCP - Trijicon RCO": PerTeam<boolean>;
	/**
	 * Whether or not the U_APDW is allowed to have the Spitfire scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_APDW - SCP - Spitfire": PerTeam<boolean>;
	/**
	 * Whether or not the U_APDW is allowed to have the COD2M scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_APDW - SCP - COD2M": PerTeam<boolean>;
	/**
	 * Whether or not the U_ARADMR is allowed to have the Bravo3 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_ARADMR - SCP - Bravo3": PerTeam<boolean>;
	/**
	 * Whether or not the U_ARADMR is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_ARADMR - SCP - Trijicon SDO": PerTeam<boolean>;
	/**
	 * Whether or not the U_ARADMR is allowed to have the Steiner scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_ARADMR - SCP - Steiner T536": PerTeam<boolean>;
	/**
	 * Whether or not the U_ARADMR is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_ARADMR - SCP - Trijicon RCO": PerTeam<boolean>;
	/**
	 * Whether or not the U_ARADMR is allowed to have the Spitfire scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_ARADMR - SCP - Spitfire": PerTeam<boolean>;
	/**
	 * Whether or not the U_ARADMR is allowed to have the COD2M scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_ARADMR - SCP - COD2M": PerTeam<boolean>;
	/**
	 * Whether or not the U_G36 is allowed to have the Bravo3 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_G36 - SCP - Bravo3": PerTeam<boolean>;
	/**
	 * Whether or not the U_G36 is allowed to have the Steiner scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_G36 - SCP - Steiner T536": PerTeam<boolean>;
	/**
	 * Whether or not the U_G36 is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_G36 - SCP - Trijicon RCO": PerTeam<boolean>;
	/**
	 * Whether or not the U_G36 is allowed to have the Spitfire scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_G36 - SCP - Spitfire": PerTeam<boolean>;
	/**
	 * Whether or not the U_G36 is allowed to have the COD2M scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_G36 - SCP - COD2M": PerTeam<boolean>;
	/**
	 * Whether or not the U_HK417A2 is allowed to have the Bravo3 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_HK417A2 - SCP - Bravo3": PerTeam<boolean>;
	/**
	 * Whether or not the U_HK417A2 is allowed to have the Steiner scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_HK417A2 - SCP - Steiner T536": PerTeam<boolean>;
	/**
	 * Whether or not the U_HK417A2 is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_HK417A2 - SCP - Trijicon RCO": PerTeam<boolean>;
	/**
	 * Whether or not the U_HK417A2 is allowed to have the Spitfire scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_HK417A2 - SCP - Spitfire": PerTeam<boolean>;
	/**
	 * Whether or not the U_HK417A2 is allowed to have the COD2M scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_HK417A2 - SCP - COD2M": PerTeam<boolean>;
	/**
	 * Whether or not the U_HK433 is allowed to have the Bravo3 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_HK433 - SCP - Bravo3": PerTeam<boolean>;
	/**
	 * Whether or not the U_HK433 is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_HK433 - SCP - Trijicon SDO": PerTeam<boolean>;
	/**
	 * Whether or not the U_HK433 is allowed to have the Steiner scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_HK433 - SCP - Steiner T536": PerTeam<boolean>;
	/**
	 * Whether or not the U_HK433 is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_HK433 - SCP - Trijicon RCO": PerTeam<boolean>;
	/**
	 * Whether or not the U_HK433 is allowed to have the Spitfire scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_HK433 - SCP - Spitfire": PerTeam<boolean>;
	/**
	 * Whether or not the U_HK433 is allowed to have the COD2M scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_HK433 - SCP - COD2M": PerTeam<boolean>;
	/**
	 * Whether or not the U_M2010ESR is allowed to have the Steiner scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M2010ESR - SCP - Steiner T536": PerTeam<boolean>;
	/**
	 * Whether or not the U_M2010ESR is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M2010ESR - SCP - Trijicon RCO": PerTeam<boolean>;
	/**
	 * Whether or not the U_M240L is allowed to have the Bravo3 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M240L - SCP - Bravo3": PerTeam<boolean>;
	/**
	 * Whether or not the U_M240L is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M240L - SCP - Trijicon SDO": PerTeam<boolean>;
	/**
	 * Whether or not the U_M240L is allowed to have the Steiner scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M240L - SCP - Steiner T536": PerTeam<boolean>;
	/**
	 * Whether or not the U_M240L is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M240L - SCP - Trijicon RCO": PerTeam<boolean>;
	/**
	 * Whether or not the U_M240L is allowed to have the Spitfire scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M240L - SCP - Spitfire": PerTeam<boolean>;
	/**
	 * Whether or not the U_M240L is allowed to have the COD2M scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M240L - SCP - COD2M": PerTeam<boolean>;
	/**
	 * Whether or not the U_M250 is allowed to have the Bravo3 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M250 - SCP - Bravo3": PerTeam<boolean>;
	/**
	 * Whether or not the U_M250 is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M250 - SCP - Trijicon SDO": PerTeam<boolean>;
	/**
	 * Whether or not the U_M250 is allowed to have the Steiner scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M250 - SCP - Steiner T536": PerTeam<boolean>;
	/**
	 * Whether or not the U_M250 is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M250 - SCP - Trijicon RCO": PerTeam<boolean>;
	/**
	 * Whether or not the U_M250 is allowed to have the Spitfire scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M250 - SCP - Spitfire": PerTeam<boolean>;
	/**
	 * Whether or not the U_M250 is allowed to have the COD2M scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M250 - SCP - COD2M": PerTeam<boolean>;
	/**
	 * Whether or not the U_M39EMR is allowed to have the Bravo3 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M39EMR - SCP - Bravo3": PerTeam<boolean>;
	/**
	 * Whether or not the U_M39EMR is allowed to have the Steiner scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M39EMR - SCP - Steiner T536": PerTeam<boolean>;
	/**
	 * Whether or not the U_M39EMR is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M39EMR - SCP - Trijicon RCO": PerTeam<boolean>;
	/**
	 * Whether or not the U_M39EMR is allowed to have the Spitfire scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M39EMR - SCP - Spitfire": PerTeam<boolean>;
	/**
	 * Whether or not the U_M39EMR is allowed to have the COD2M scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M39EMR - SCP - COD2M": PerTeam<boolean>;
	/**
	 * Whether or not the U_Minimi is allowed to have the Bravo3 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_Minimi - SCP - Bravo3": PerTeam<boolean>;
	/**
	 * Whether or not the U_Minimi is allowed to have the Steiner scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_Minimi - SCP - Steiner T536": PerTeam<boolean>;
	/**
	 * Whether or not the U_Minimi is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_Minimi - SCP - Trijicon RCO": PerTeam<boolean>;
	/**
	 * Whether or not the U_Minimi is allowed to have the Spitfire scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_Minimi - SCP - Spitfire": PerTeam<boolean>;
	/**
	 * Whether or not the U_Minimi is allowed to have the COD2M scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_Minimi - SCP - COD2M": PerTeam<boolean>;
	/**
	 * Whether or not the U_MP5MLI is allowed to have the Bravo3 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MP5MLI - SCP - Bravo3": PerTeam<boolean>;
	/**
	 * Whether or not the U_MP5MLI is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MP5MLI - SCP - Trijicon SDO": PerTeam<boolean>;
	/**
	 * Whether or not the U_MP5MLI is allowed to have the Steiner scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MP5MLI - SCP - Steiner T536": PerTeam<boolean>;
	/**
	 * Whether or not the U_MP5MLI is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MP5MLI - SCP - Trijicon RCO": PerTeam<boolean>;
	/**
	 * Whether or not the U_MP5MLI is allowed to have the Spitfire scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MP5MLI - SCP - Spitfire": PerTeam<boolean>;
	/**
	 * Whether or not the U_MP5MLI is allowed to have the COD2M scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MP5MLI - SCP - COD2M": PerTeam<boolean>;
	/**
	 * Whether or not the U_MP7A2 is allowed to have the Bravo3 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MP7A2 - SCP - Bravo3": PerTeam<boolean>;
	/**
	 * Whether or not the U_MP7A2 is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MP7A2 - SCP - Trijicon SDO": PerTeam<boolean>;
	/**
	 * Whether or not the U_MP7A2 is allowed to have the Steiner scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MP7A2 - SCP - Steiner T536": PerTeam<boolean>;
	/**
	 * Whether or not the U_MP7A2 is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MP7A2 - SCP - Trijicon RCO": PerTeam<boolean>;
	/**
	 * Whether or not the U_MP7A2 is allowed to have the Spitfire scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MP7A2 - SCP - Spitfire": PerTeam<boolean>;
	/**
	 * Whether or not the U_MP7A2 is allowed to have the COD2M scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MP7A2 - SCP - COD2M": PerTeam<boolean>;
	/**
	 * Whether or not the U_MPX is allowed to have the Bravo3 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MPX - SCP - Bravo3": PerTeam<boolean>;
	/**
	 * Whether or not the U_MPX is allowed to have the Steiner scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MPX - SCP - Steiner T536": PerTeam<boolean>;
	/**
	 * Whether or not the U_MPX is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MPX - SCP - Trijicon RCO": PerTeam<boolean>;
	/**
	 * Whether or not the U_MPX is allowed to have the Spitfire scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MPX - SCP - Spitfire": PerTeam<boolean>;
	/**
	 * Whether or not the U_MPX is allowed to have the COD2M scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MPX - SCP - COD2M": PerTeam<boolean>;
	/**
	 * Whether or not the U_MRAD is allowed to have the Bravo3 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MRAD - SCP - Bravo3": PerTeam<boolean>;
	/**
	 * Whether or not the U_MRAD is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MRAD - SCP - Trijicon SDO": PerTeam<boolean>;
	/**
	 * Whether or not the U_MRAD is allowed to have the Steiner scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MRAD - SCP - Steiner T536": PerTeam<boolean>;
	/**
	 * Whether or not the U_MRAD is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MRAD - SCP - Trijicon RCO": PerTeam<boolean>;
	/**
	 * Whether or not the U_MRAD is allowed to have the Spitfire scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MRAD - SCP - Spitfire": PerTeam<boolean>;
	/**
	 * Whether or not the U_MRAD is allowed to have the COD2M scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MRAD - SCP - COD2M": PerTeam<boolean>;
	/**
	 * Whether or not the U_P90 is allowed to have the Bravo3 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_P90 - SCP - Bravo3": PerTeam<boolean>;
	/**
	 * Whether or not the U_P90 is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_P90 - SCP - Trijicon SDO": PerTeam<boolean>;
	/**
	 * Whether or not the U_P90 is allowed to have the Steiner scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_P90 - SCP - Steiner T536": PerTeam<boolean>;
	/**
	 * Whether or not the U_P90 is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_P90 - SCP - Trijicon RCO": PerTeam<boolean>;
	/**
	 * Whether or not the U_P90 is allowed to have the Spitfire scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_P90 - SCP - Spitfire": PerTeam<boolean>;
	/**
	 * Whether or not the U_P90 is allowed to have the COD2M scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_P90 - SCP - COD2M": PerTeam<boolean>;
	/**
	 * Whether or not the U_QBZ192 is allowed to have the Bravo3 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_QBZ192 - SCP - Bravo3": PerTeam<boolean>;
	/**
	 * Whether or not the U_QBZ192 is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_QBZ192 - SCP - Trijicon SDO": PerTeam<boolean>;
	/**
	 * Whether or not the U_QBZ192 is allowed to have the Steiner scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_QBZ192 - SCP - Steiner T536": PerTeam<boolean>;
	/**
	 * Whether or not the U_QBZ192 is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_QBZ192 - SCP - Trijicon RCO": PerTeam<boolean>;
	/**
	 * Whether or not the U_QBZ192 is allowed to have the Spitfire scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_QBZ192 - SCP - Spitfire": PerTeam<boolean>;
	/**
	 * Whether or not the U_QBZ192 is allowed to have the COD2M scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_QBZ192 - SCP - COD2M": PerTeam<boolean>;
	/**
	 * Whether or not the U_SCARL is allowed to have the Bravo3 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SCARL - SCP - Bravo3": PerTeam<boolean>;
	/**
	 * Whether or not the U_SCARL is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SCARL - SCP - Trijicon SDO": PerTeam<boolean>;
	/**
	 * Whether or not the U_SCARL is allowed to have the Steiner scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SCARL - SCP - Steiner T536": PerTeam<boolean>;
	/**
	 * Whether or not the U_SCARL is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SCARL - SCP - Trijicon RCO": PerTeam<boolean>;
	/**
	 * Whether or not the U_SCARL is allowed to have the Spitfire scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SCARL - SCP - Spitfire": PerTeam<boolean>;
	/**
	 * Whether or not the U_SCARL is allowed to have the COD2M scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SCARL - SCP - COD2M": PerTeam<boolean>;
	/**
	 * Whether or not the U_SCARSC is allowed to have the Bravo3 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SCARSC - SCP - Bravo3": PerTeam<boolean>;
	/**
	 * Whether or not the U_SCARSC is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SCARSC - SCP - Trijicon SDO": PerTeam<boolean>;
	/**
	 * Whether or not the U_SCARSC is allowed to have the Steiner scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SCARSC - SCP - Steiner T536": PerTeam<boolean>;
	/**
	 * Whether or not the U_SCARSC is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SCARSC - SCP - Trijicon RCO": PerTeam<boolean>;
	/**
	 * Whether or not the U_SCARSC is allowed to have the Spitfire scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SCARSC - SCP - Spitfire": PerTeam<boolean>;
	/**
	 * Whether or not the U_SCARSC is allowed to have the COD2M scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SCARSC - SCP - COD2M": PerTeam<boolean>;
	/**
	 * Whether or not the U_SIG553R is allowed to have the Bravo3 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SIG553R - SCP - Bravo3": PerTeam<boolean>;
	/**
	 * Whether or not the U_SIG553R is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SIG553R - SCP - Trijicon SDO": PerTeam<boolean>;
	/**
	 * Whether or not the U_SIG553R is allowed to have the Steiner scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SIG553R - SCP - Steiner T536": PerTeam<boolean>;
	/**
	 * Whether or not the U_SIG553R is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SIG553R - SCP - Trijicon RCO": PerTeam<boolean>;
	/**
	 * Whether or not the U_SIG553R is allowed to have the Spitfire scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SIG553R - SCP - Spitfire": PerTeam<boolean>;
	/**
	 * Whether or not the U_SIG553R is allowed to have the COD2M scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SIG553R - SCP - COD2M": PerTeam<boolean>;
	/**
	 * Whether or not the U_SV98M is allowed to have the Bravo3 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SV98M - SCP - Bravo3": PerTeam<boolean>;
	/**
	 * Whether or not the U_SV98M is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SV98M - SCP - Trijicon SDO": PerTeam<boolean>;
	/**
	 * Whether or not the U_SV98M is allowed to have the Steiner scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SV98M - SCP - Steiner T536": PerTeam<boolean>;
	/**
	 * Whether or not the U_SV98M is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SV98M - SCP - Trijicon RCO": PerTeam<boolean>;
	/**
	 * Whether or not the U_SV98M is allowed to have the Spitfire scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SV98M - SCP - Spitfire": PerTeam<boolean>;
	/**
	 * Whether or not the U_SV98M is allowed to have the COD2M scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SV98M - SCP - COD2M": PerTeam<boolean>;
	/**
	 * Whether or not the U_SVCh is allowed to have the Bravo3 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SVCh - SCP - Bravo3": PerTeam<boolean>;
	/**
	 * Whether or not the U_SVCh is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SVCh - SCP - Trijicon SDO": PerTeam<boolean>;
	/**
	 * Whether or not the U_SVCh is allowed to have the Steiner scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SVCh - SCP - Steiner T536": PerTeam<boolean>;
	/**
	 * Whether or not the U_SVCh is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SVCh - SCP - Trijicon RCO": PerTeam<boolean>;
	/**
	 * Whether or not the U_SVCh is allowed to have the Spitfire scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SVCh - SCP - Spitfire": PerTeam<boolean>;
	/**
	 * Whether or not the U_SVCh is allowed to have the COD2M scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SVCh - SCP - COD2M": PerTeam<boolean>;
	/**
	 * Whether or not the U_SVDM is allowed to have the Bravo3 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SVDM - SCP - Bravo3": PerTeam<boolean>;
	/**
	 * Whether or not the U_SVDM is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SVDM - SCP - Trijicon SDO": PerTeam<boolean>;
	/**
	 * Whether or not the U_SVDM is allowed to have the Steiner scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SVDM - SCP - Steiner T536": PerTeam<boolean>;
	/**
	 * Whether or not the U_SVDM is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SVDM - SCP - Trijicon RCO": PerTeam<boolean>;
	/**
	 * Whether or not the U_SVDM is allowed to have the Spitfire scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SVDM - SCP - Spitfire": PerTeam<boolean>;
	/**
	 * Whether or not the U_SVDM is allowed to have the COD2M scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SVDM - SCP - COD2M": PerTeam<boolean>;
	/**
	 * Whether or not the U_Tavor7 is allowed to have the Bravo3 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_Tavor7 - SCP - Bravo3": PerTeam<boolean>;
	/**
	 * Whether or not the U_Tavor7 is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_Tavor7 - SCP - Trijicon SDO": PerTeam<boolean>;
	/**
	 * Whether or not the U_Tavor7 is allowed to have the Steiner scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_Tavor7 - SCP - Steiner T536": PerTeam<boolean>;
	/**
	 * Whether or not the U_Tavor7 is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_Tavor7 - SCP - Trijicon RCO": PerTeam<boolean>;
	/**
	 * Whether or not the U_Tavor7 is allowed to have the Spitfire scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_Tavor7 - SCP - Spitfire": PerTeam<boolean>;
	/**
	 * Whether or not the U_Tavor7 is allowed to have the COD2M scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_Tavor7 - SCP - COD2M": PerTeam<boolean>;
	/**
	 * Whether or not the U_Ultimax is allowed to have the Bravo3 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_Ultimax - SCP - Bravo3": PerTeam<boolean>;
	/**
	 * Whether or not the U_Ultimax is allowed to have the Steiner scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_Ultimax - SCP - Steiner T536": PerTeam<boolean>;
	/**
	 * Whether or not the U_Ultimax is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_Ultimax - SCP - Trijicon RCO": PerTeam<boolean>;
	/**
	 * Whether or not the U_Ultimax is allowed to have the Spitfire scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_Ultimax - SCP - Spitfire": PerTeam<boolean>;
	/**
	 * Whether or not the U_Ultimax is allowed to have the COD2M scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_Ultimax - SCP - COD2M": PerTeam<boolean>;
	/**
	 * Whether or not the U_UMP40 is allowed to have the Bravo3 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_UMP40 - SCP - Bravo3": PerTeam<boolean>;
	/**
	 * Whether or not the U_UMP40 is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_UMP40 - SCP - Trijicon SDO": PerTeam<boolean>;
	/**
	 * Whether or not the U_UMP40 is allowed to have the Steiner scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_UMP40 - SCP - Steiner T536": PerTeam<boolean>;
	/**
	 * Whether or not the U_UMP40 is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_UMP40 - SCP - Trijicon RCO": PerTeam<boolean>;
	/**
	 * Whether or not the U_UMP40 is allowed to have the Spitfire scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_UMP40 - SCP - Spitfire": PerTeam<boolean>;
	/**
	 * Whether or not the U_UMP40 is allowed to have the COD2M scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_UMP40 - SCP - COD2M": PerTeam<boolean>;
	/**
	 * Whether or not the U_Vector is allowed to have the Bravo3 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_Vector - SCP - Bravo3": PerTeam<boolean>;
	/**
	 * Whether or not the U_Vector is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_Vector - SCP - Trijicon SDO": PerTeam<boolean>;
	/**
	 * Whether or not the U_Vector is allowed to have the Steiner scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_Vector - SCP - Steiner T536": PerTeam<boolean>;
	/**
	 * Whether or not the U_Vector is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_Vector - SCP - Trijicon RCO": PerTeam<boolean>;
	/**
	 * Whether or not the U_Vector is allowed to have the Spitfire scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_Vector - SCP - Spitfire": PerTeam<boolean>;
	/**
	 * Whether or not the U_Vector is allowed to have the COD2M scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_Vector - SCP - COD2M": PerTeam<boolean>;
	/**
	 * Whether or not the U_XM7 is allowed to have the Bravo3 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_XM7 - SCP - Bravo3": PerTeam<boolean>;
	/**
	 * Whether or not the U_XM7 is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_XM7 - SCP - Trijicon SDO": PerTeam<boolean>;
	/**
	 * Whether or not the U_XM7 is allowed to have the Steiner scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_XM7 - SCP - Steiner T536": PerTeam<boolean>;
	/**
	 * Whether or not the U_XM7 is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_XM7 - SCP - Trijicon RCO": PerTeam<boolean>;
	/**
	 * Whether or not the U_XM7 is allowed to have the Spitfire scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_XM7 - SCP - Spitfire": PerTeam<boolean>;
	/**
	 * Whether or not the U_XM7 is allowed to have the COD2M scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_XM7 - SCP - COD2M": PerTeam<boolean>;
	/**
	 * Whether or not the U_M27IAR is allowed to have the Steiner scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M27IAR - SCP - Steiner T536": PerTeam<boolean>;
	/**
	 * Whether or not the U_M27IAR is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M27IAR - SCP - Trijicon RCO": PerTeam<boolean>;
	/**
	 * Whether or not the U_KSG is allowed to have the Bravo3 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_KSG - SCP - Bravo3": PerTeam<boolean>;
	/**
	 * Whether or not the U_KSG is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_KSG - SCP - Trijicon SDO": PerTeam<boolean>;
	/**
	 * Whether or not the U_KSG is allowed to have the Steiner scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_KSG - SCP - Steiner T536": PerTeam<boolean>;
	/**
	 * Whether or not the U_KSG is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_KSG - SCP - Trijicon RCO": PerTeam<boolean>;
	/**
	 * Whether or not the U_KSG is allowed to have the Spitfire scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_KSG - SCP - Spitfire": PerTeam<boolean>;
	/**
	 * Whether or not the U_KSG is allowed to have the COD2M scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_KSG - SCP - COD2M": PerTeam<boolean>;
	/**
	 * Whether or not the U_M1014 is allowed to have the Bravo3 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M1014 - SCP - Bravo3": PerTeam<boolean>;
	/**
	 * Whether or not the U_M1014 is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M1014 - SCP - Trijicon SDO": PerTeam<boolean>;
	/**
	 * Whether or not the U_M1014 is allowed to have the Steiner scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M1014 - SCP - Steiner T536": PerTeam<boolean>;
	/**
	 * Whether or not the U_M1014 is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M1014 - SCP - Trijicon RCO": PerTeam<boolean>;
	/**
	 * Whether or not the U_M1014 is allowed to have the Spitfire scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M1014 - SCP - Spitfire": PerTeam<boolean>;
	/**
	 * Whether or not the U_M1014 is allowed to have the COD2M scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M1014 - SCP - COD2M": PerTeam<boolean>;
	/**
	 * Whether or not the U_RagingHunter is allowed to have the Bravo3 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_RagingHunter - SCP - Bravo3": PerTeam<boolean>;
	/**
	 * Whether or not the U_RagingHunter is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_RagingHunter - SCP - Trijicon SDO": PerTeam<boolean>;
	/**
	 * Whether or not the U_RagingHunter is allowed to have the Steiner scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_RagingHunter - SCP - Steiner T536": PerTeam<boolean>;
	/**
	 * Whether or not the U_RagingHunter is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_RagingHunter - SCP - Trijicon RCO": PerTeam<boolean>;
	/**
	 * Whether or not the U_RagingHunter is allowed to have the Spitfire scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_RagingHunter - SCP - Spitfire": PerTeam<boolean>;
	/**
	 * Whether or not the U_RagingHunter is allowed to have the COD2M scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_RagingHunter - SCP - COD2M": PerTeam<boolean>;
	/**
	 * Whether or not the U_M60E6 is allowed to have the Bravo3 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M60E6 - SCP - Bravo3": PerTeam<boolean>;
	/**
	 * Whether or not the U_M60E6 is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M60E6 - SCP - Trijicon SDO": PerTeam<boolean>;
	/**
	 * Whether or not the U_M60E6 is allowed to have the Steiner scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M60E6 - SCP - Steiner T536": PerTeam<boolean>;
	/**
	 * Whether or not the U_M60E6 is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M60E6 - SCP - Trijicon RCO": PerTeam<boolean>;
	/**
	 * Whether or not the U_M60E6 is allowed to have the Spitfire scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M60E6 - SCP - Spitfire": PerTeam<boolean>;
	/**
	 * Whether or not the U_M60E6 is allowed to have the COD2M scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M60E6 - SCP - COD2M": PerTeam<boolean>;
	/**
	 * Whether or not the U_RPKM is allowed to have the Bravo3 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_RPKM - SCP - Bravo3": PerTeam<boolean>;
	/**
	 * Whether or not the U_RPKM is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_RPKM - SCP - Trijicon SDO": PerTeam<boolean>;
	/**
	 * Whether or not the U_RPKM is allowed to have the Steiner scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_RPKM - SCP - Steiner T536": PerTeam<boolean>;
	/**
	 * Whether or not the U_RPKM is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_RPKM - SCP - Trijicon RCO": PerTeam<boolean>;
	/**
	 * Whether or not the U_RPKM is allowed to have the Spitfire scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_RPKM - SCP - Spitfire": PerTeam<boolean>;
	/**
	 * Whether or not the U_RPKM is allowed to have the COD2M scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_RPKM - SCP - COD2M": PerTeam<boolean>;
	/**
	 * Whether or not the U_L85A3 is allowed to have the Bravo3 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_L85A3 - SCP - Bravo3": PerTeam<boolean>;
	/**
	 * Whether or not the U_L85A3 is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_L85A3 - SCP - Trijicon SDO": PerTeam<boolean>;
	/**
	 * Whether or not the U_L85A3 is allowed to have the Steiner scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_L85A3 - SCP - Steiner T536": PerTeam<boolean>;
	/**
	 * Whether or not the U_L85A3 is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_L85A3 - SCP - Trijicon RCO": PerTeam<boolean>;
	/**
	 * Whether or not the U_L85A3 is allowed to have the Spitfire scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_L85A3 - SCP - Spitfire": PerTeam<boolean>;
	/**
	 * Whether or not the U_L85A3 is allowed to have the COD2M scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_L85A3 - SCP - COD2M": PerTeam<boolean>;
	/**
	 * Whether or not the U_MG4K is allowed to have the Bravo3 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MG4K - SCP - Bravo3": PerTeam<boolean>;
	/**
	 * Whether or not the U_MG4K is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MG4K - SCP - Trijicon SDO": PerTeam<boolean>;
	/**
	 * Whether or not the U_MG4K is allowed to have the Steiner scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MG4K - SCP - Steiner T536": PerTeam<boolean>;
	/**
	 * Whether or not the U_MG4K is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MG4K - SCP - Trijicon RCO": PerTeam<boolean>;
	/**
	 * Whether or not the U_MG4K is allowed to have the Spitfire scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MG4K - SCP - Spitfire": PerTeam<boolean>;
	/**
	 * Whether or not the U_MG4K is allowed to have the COD2M scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MG4K - SCP - COD2M": PerTeam<boolean>;
	/**
	 * Whether or not the U_G3A4 is allowed to have the Bravo3 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_G3A4 - SCP - Bravo3": PerTeam<boolean>;
	/**
	 * Whether or not the U_G3A4 is allowed to have the Steiner scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_G3A4 - SCP - Steiner T536": PerTeam<boolean>;
	/**
	 * Whether or not the U_G3A4 is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_G3A4 - SCP - Trijicon SDO": PerTeam<boolean>;
	/**
	 * Whether or not the U_G3A4 is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_G3A4 - SCP - Trijicon RCO": PerTeam<boolean>;
	/**
	 * Whether or not the U_G3A4 is allowed to have the Spitfire scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_G3A4 - SCP - Spitfire": PerTeam<boolean>;
	/**
	 * Whether or not the U_G3A4 is allowed to have the COD2M scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_G3A4 - SCP - COD2M": PerTeam<boolean>;
	/**
	 * Whether or not the U_MSBSGROTB is allowed to have the Bravo3 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MSBSGROTB - SCP - Bravo3": PerTeam<boolean>;
	/**
	 * Whether or not the U_MSBSGROTB is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MSBSGROTB - SCP - Trijicon SDO": PerTeam<boolean>;
	/**
	 * Whether or not the U_MSBSGROTB is allowed to have the Steiner scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MSBSGROTB - SCP - Steiner T536": PerTeam<boolean>;
	/**
	 * Whether or not the U_MSBSGROTB is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MSBSGROTB - SCP - Trijicon RCO": PerTeam<boolean>;
	/**
	 * Whether or not the U_MSBSGROTB is allowed to have the Spitfire scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MSBSGROTB - SCP - Spitfire": PerTeam<boolean>;
	/**
	 * Whether or not the U_MSBSGROTB is allowed to have the COD2M scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MSBSGROTB - SCP - COD2M": PerTeam<boolean>;
	/**
	 * Whether or not the U_M4A1 is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M4A1 - SCP - Trijicon RCO": PerTeam<boolean>;
	/**
	 * Whether or not the U_DP12 is allowed to have the Bravo3 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_DP12 - SCP - Bravo3": PerTeam<boolean>;
	/**
	 * Whether or not the U_DP12 is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_DP12 - SCP - Trijicon SDO": PerTeam<boolean>;
	/**
	 * Whether or not the U_MiniFix is allowed to have the COD2M scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MiniFix - SCP - COD2M": PerTeam<boolean>;
	/**
	 * Whether or not the U_MiniFix is allowed to have the Spitfire scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MiniFix - SCP - Spitfire": PerTeam<boolean>;
	/**
	 * Whether or not the U_MiniFix is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MiniFix - SCP - Trijicon RCO": PerTeam<boolean>;
	/**
	 * Whether or not the U_MiniFix is allowed to have the Steiner scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MiniFix - SCP - Steiner T536": PerTeam<boolean>;
	/**
	 * Whether or not the U_MiniFix is allowed to have the Trijicon scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MiniFix - SCP - Trijicon SDO": PerTeam<boolean>;
	/**
	 * Whether or not the U_MiniFix is allowed to have the Bravo3 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MiniFix - SCP - Bravo3": PerTeam<boolean>;
	/**
	 * Whether or not the U_M2010ESR is allowed to have the Mark4M5A2 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M2010ESR - SCP - Mark4M5A2": PerTeam<boolean>;
	/**
	 * Whether or not the U_M2010ESR is allowed to have the NX8 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M2010ESR - SCP - NX8-4": PerTeam<boolean>;
	/**
	 * Whether or not the U_M2010ESR is allowed to have the Mark4M2 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M2010ESR - SCP - Mark4M2": PerTeam<boolean>;
	/**
	 * Whether or not the U_HK417A2 is allowed to have the Mark4M2 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_HK417A2 - SCP - Mark4M2": PerTeam<boolean>;
	/**
	 * Whether or not the U_Ultimax is allowed to have the Mark4M2 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_Ultimax - SCP - Mark4M2": PerTeam<boolean>;
	/**
	 * Whether or not the U_M39EMR is allowed to have the NX8 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M39EMR - SCP - NX8-4": PerTeam<boolean>;
	/**
	 * Whether or not the U_M39EMR is allowed to have the Mark4M5A2 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M39EMR - SCP - Mark4M5A2": PerTeam<boolean>;
	/**
	 * Whether or not the U_M39EMR is allowed to have the Mark4M2 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M39EMR - SCP - Mark4M2": PerTeam<boolean>;
	/**
	 * Whether or not the U_MRAD is allowed to have the Mark4M5A2 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MRAD - SCP - Mark4M5A2": PerTeam<boolean>;
	/**
	 * Whether or not the U_SV98M is allowed to have the Mark4M5A2 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SV98M - SCP - Mark4M5A2": PerTeam<boolean>;
	/**
	 * Whether or not the U_ARADMR is allowed to have the Mark4M5A2 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_ARADMR - SCP - Mark4M5A2": PerTeam<boolean>;
	/**
	 * Whether or not the U_SVCh is allowed to have the Mark4M5A2 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SVCh - SCP - Mark4M5A2": PerTeam<boolean>;
	/**
	 * Whether or not the U_SVDM is allowed to have the Mark4M5A2 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SVDM - SCP - Mark4M5A2": PerTeam<boolean>;
	/**
	 * Whether or not the U_M27IAR is allowed to have the SB scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M27IAR - SCP - SB PMII": PerTeam<boolean>;
	/**
	 * Whether or not the U_M27IAR is allowed to have the NF scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M27IAR - SCP - NF ATACR": PerTeam<boolean>;
	/**
	 * Whether or not the U_M2010ESR is allowed to have the SB scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M2010ESR - SCP - SB PMII": PerTeam<boolean>;
	/**
	 * Whether or not the U_M2010ESR is allowed to have the NF scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M2010ESR - SCP - NF ATACR": PerTeam<boolean>;
	/**
	 * Whether or not the U_M27IAR is allowed to have the RightRail scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M27IAR - RGT - RightRail": PerTeam<boolean>;
	/**
	 * Whether or not the U_MRAD is allowed to have the NX8 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MRAD - SCP - NX8-4": PerTeam<boolean>;
	/**
	 * Whether or not the U_MRAD is allowed to have the SB scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MRAD - SCP - SB PMII": PerTeam<boolean>;
	/**
	 * Whether or not the U_MRAD is allowed to have the NF scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MRAD - SCP - NF ATACR": PerTeam<boolean>;
	/**
	 * Whether or not the U_SV98M is allowed to have the NX8 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SV98M - SCP - NX8-4": PerTeam<boolean>;
	/**
	 * Whether or not the U_SV98M is allowed to have the SB scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SV98M - SCP - SB PMII": PerTeam<boolean>;
	/**
	 * Whether or not the U_SV98M is allowed to have the NF scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SV98M - SCP - NF ATACR": PerTeam<boolean>;
	/**
	 * Whether or not the U_M2010ESR is allowed to have the RightRail scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M2010ESR - RGT - RightRail": PerTeam<boolean>;
	/**
	 * Whether or not the U_MRAD is allowed to have the RightRail scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MRAD - RGT - RightRail": PerTeam<boolean>;
	/**
	 * Whether or not the U_SV98M is allowed to have the RightRail scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SV98M - RGT - RightRail": PerTeam<boolean>;
	/**
	 * Whether or not the U_185KSK is allowed to have the RightRail scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_185KSK - RGT - RightRail": PerTeam<boolean>;
	/**
	 * Whether or not the U_590A1 is allowed to have the RightRail scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_590A1 - RGT - RightRail": PerTeam<boolean>;
	/**
	 * Whether or not the U_6P67 is allowed to have the RightRail scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_6P67 - RGT - RightRail": PerTeam<boolean>;
	/**
	 * Whether or not the U_ACE32 is allowed to have the RightRail scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_ACE32 - RGT - RightRail": PerTeam<boolean>;
	/**
	 * Whether or not the U_AK205 is allowed to have the RightRail scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_AK205 - RGT - RightRail": PerTeam<boolean>;
	/**
	 * Whether or not the U_APC10 is allowed to have the RightRail scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_APC10 - RGT - RightRail": PerTeam<boolean>;
	/**
	 * Whether or not the U_APDW is allowed to have the RightRail scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_APDW - RGT - RightRail": PerTeam<boolean>;
	/**
	 * Whether or not the U_G36 is allowed to have the RightRail scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_G36 - RGT - RightRail": PerTeam<boolean>;
	/**
	 * Whether or not the U_G3A4 is allowed to have the RightRail scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_G3A4 - RGT - RightRail": PerTeam<boolean>;
	/**
	 * Whether or not the U_HK417A2 is allowed to have the RightRail scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_HK417A2 - RGT - RightRail": PerTeam<boolean>;
	/**
	 * Whether or not the U_HK433 is allowed to have the RightRail scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_HK433 - RGT - RightRail": PerTeam<boolean>;
	/**
	 * Whether or not the U_KSG is allowed to have the RightRail scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_KSG - RGT - RightRail": PerTeam<boolean>;
	/**
	 * Whether or not the U_L85A3 is allowed to have the RightRail scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_L85A3 - RGT - RightRail": PerTeam<boolean>;
	/**
	 * Whether or not the U_M1014 is allowed to have the RightRail scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M1014 - RGT - RightRail": PerTeam<boolean>;
	/**
	 * Whether or not the U_M240L is allowed to have the RightRail scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M240L - RGT - RightRail": PerTeam<boolean>;
	/**
	 * Whether or not the U_M250 is allowed to have the RightRail scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M250 - RGT - RightRail": PerTeam<boolean>;
	/**
	 * Whether or not the U_M60E6 is allowed to have the RightRail scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M60E6 - RGT - RightRail": PerTeam<boolean>;
	/**
	 * Whether or not the U_MG4K is allowed to have the RightRail scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MG4K - RGT - RightRail": PerTeam<boolean>;
	/**
	 * Whether or not the U_Minimi is allowed to have the RightRail scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_Minimi - RGT - RightRail": PerTeam<boolean>;
	/**
	 * Whether or not the U_MP5MLI is allowed to have the RightRail scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MP5MLI - RGT - RightRail": PerTeam<boolean>;
	/**
	 * Whether or not the U_MP7A2 is allowed to have the RightRail scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MP7A2 - RGT - RightRail": PerTeam<boolean>;
	/**
	 * Whether or not the U_MPX is allowed to have the RightRail scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MPX - RGT - RightRail": PerTeam<boolean>;
	/**
	 * Whether or not the U_MSBSGROTB is allowed to have the RightRail scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MSBSGROTB - RGT - RightRail": PerTeam<boolean>;
	/**
	 * Whether or not the U_P90 is allowed to have the RightRail scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_P90 - RGT - RightRail": PerTeam<boolean>;
	/**
	 * Whether or not the U_QBZ192 is allowed to have the RightRail scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_QBZ192 - RGT - RightRail": PerTeam<boolean>;
	/**
	 * Whether or not the U_RPKM is allowed to have the RightRail scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_RPKM - RGT - RightRail": PerTeam<boolean>;
	/**
	 * Whether or not the U_SCARL is allowed to have the RightRail scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SCARL - RGT - RightRail": PerTeam<boolean>;
	/**
	 * Whether or not the U_SCARSC is allowed to have the RightRail scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SCARSC - RGT - RightRail": PerTeam<boolean>;
	/**
	 * Whether or not the U_SIG553R is allowed to have the RightRail scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SIG553R - RGT - RightRail": PerTeam<boolean>;
	/**
	 * Whether or not the U_Tavor7 is allowed to have the RightRail scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_Tavor7 - RGT - RightRail": PerTeam<boolean>;
	/**
	 * Whether or not the U_Ultimax is allowed to have the RightRail scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_Ultimax - RGT - RightRail": PerTeam<boolean>;
	/**
	 * Whether or not the U_UMP40 is allowed to have the RightRail scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_UMP40 - RGT - RightRail": PerTeam<boolean>;
	/**
	 * Whether or not the U_Vector is allowed to have the RightRail scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_Vector - RGT - RightRail": PerTeam<boolean>;
	/**
	 * Whether or not the U_XM7 is allowed to have the RightRail scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_XM7 - RGT - RightRail": PerTeam<boolean>;
	/**
	 * Whether or not the U_SVCh is allowed to have the NX8 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SVCh - SCP - NX8-4": PerTeam<boolean>;
	/**
	 * Whether or not the U_SVCh is allowed to have the SB scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SVCh - SCP - SB PMII": PerTeam<boolean>;
	/**
	 * Whether or not the U_SVCh is allowed to have the NF scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SVCh - SCP - NF ATACR": PerTeam<boolean>;
	/**
	 * Whether or not the U_ARADMR is allowed to have the NX8 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_ARADMR - SCP - NX8-4": PerTeam<boolean>;
	/**
	 * Whether or not the U_ARADMR is allowed to have the SB scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_ARADMR - SCP - SB PMII": PerTeam<boolean>;
	/**
	 * Whether or not the U_ARADMR is allowed to have the NF scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_ARADMR - SCP - NF ATACR": PerTeam<boolean>;
	/**
	 * Whether or not the U_M27IAR is allowed to have the NX8 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M27IAR - SCP - NX8-4": PerTeam<boolean>;
	/**
	 * Whether or not the U_M27IAR is allowed to have the Mark4M5A2 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M27IAR - SCP - Mark4M5A2": PerTeam<boolean>;
	/**
	 * Whether or not the U_M39EMR is allowed to have the SB scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M39EMR - SCP - SB PMII": PerTeam<boolean>;
	/**
	 * Whether or not the U_M39EMR is allowed to have the NF scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_M39EMR - SCP - NF ATACR": PerTeam<boolean>;
	/**
	 * Whether or not the U_SVDM is allowed to have the NX8 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SVDM - SCP - NX8-4": PerTeam<boolean>;
	/**
	 * Whether or not the U_SVDM is allowed to have the SB scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SVDM - SCP - SB PMII": PerTeam<boolean>;
	/**
	 * Whether or not the U_SVDM is allowed to have the NF scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_SVDM - SCP - NF ATACR": PerTeam<boolean>;
	/**
	 * Whether or not the U_DP12 is allowed to have the RightRail scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_DP12 - RGT - RightRail": PerTeam<boolean>;
	/**
	 * Whether or not the U_MiniFix is allowed to have the NF scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MiniFix - SCP - NF ATACR": PerTeam<boolean>;
	/**
	 * Whether or not the U_MiniFix is allowed to have the Mark4M5A2 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MiniFix - SCP - Mark4M5A2": PerTeam<boolean>;
	/**
	 * Whether or not the U_MiniFix is allowed to have the SB scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MiniFix - SCP - SB PMII": PerTeam<boolean>;
	/**
	 * Whether or not the U_MiniFix is allowed to have the NX8 scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MiniFix - SCP - NX8-4": PerTeam<boolean>;
	/**
	 * Whether or not the U_MiniFix is allowed to have the RightRail scope is allowed per team or globally.
	 * If global: `true | false`
	 * If per team: `[[teamIndex, isAllowed], ...]`
	 */
	"U_MiniFix - RGT - RightRail": PerTeam<boolean>;
};
