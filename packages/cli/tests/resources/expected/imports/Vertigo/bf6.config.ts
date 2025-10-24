export default defineBf6Config({
    name: 'Vertigo',
    description: 'PVP Climbing Race! \nGet to the top and capture the objective to win. Eliminate all foes along the way.',
    outDir: 'dist',
    entrypoint: 'src/Vertigo.ts',
    scenes: [
        [
            MapId.LiberationPeak,
            'src/scenes/MP_Capstone_Vertigo.spatial.json'
        ]
    ],
    strings: 'src/Vertigo.strings.json',
    game: {
        mutators: {
            MaxPlayerCount_PerTeam: 4,
            ManDownExperienceType_PerTeam: [
                [
                    0,
                    2
                ],
                [
                    1,
                    2
                ],
                [
                    2,
                    2
                ],
                [
                    3,
                    2
                ]
            ],
            MaxTeamCount: 5,
            SoldierRespawnDelayMultiplier_PerTeam: [
                [
                    0,
                    0.5
                ],
                [
                    1,
                    0.5
                ],
                [
                    2,
                    0.5
                ],
                [
                    3,
                    0.5
                ]
            ],
            AI_ManDownExperienceType_PerTeam: 1,
            ModBuilder_GameMode: 2,
            AimAssistSnapCapsuleRadiusMultiplier: 1,
            FriendlyFireDamageReflectionMaxTeamKills: 2,
            SpawnBalancing_GamemodeStartTimer: 0
        },
        assetRestrictions: {
            Portal_WebApp_Deployable: false
        },
        gameMode: 'ModBuilderCustom',
        teamComposition: [
            [
                1,
                {
                    humanCapacity: 4
                }
            ],
            [
                2,
                {
                    humanCapacity: 4
                }
            ],
            [
                3,
                {
                    humanCapacity: 4
                }
            ],
            [
                4,
                {
                    humanCapacity: 4
                }
            ]
        ]
    }
});
