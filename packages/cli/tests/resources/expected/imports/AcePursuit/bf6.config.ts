export default defineBf6Config({
    name: 'Ace Pursuit',
    description: 'Free-For-All Jet fighter race. Precision flying and shooting are key as each pilot vies for the lead in this aerial competition.',
    outDir: 'dist',
    entrypoint: 'src/AcePursuit.ts',
    scenes: [
        [
            MapId.LiberationPeak,
            'src/scenes/MP_Capstone_AcePursuit.spatial.json'
        ]
    ],
    strings: 'src/AcePursuit.strings.json',
    game: {
        mutators: {
            MaxPlayerCount_PerTeam: [
                [
                    0,
                    1
                ],
                [
                    1,
                    1
                ],
                [
                    2,
                    1
                ],
                [
                    3,
                    1
                ],
                [
                    4,
                    1
                ],
                [
                    5,
                    1
                ],
                [
                    6,
                    1
                ],
                [
                    7,
                    1
                ],
                [
                    8,
                    0
                ]
            ],
            AiMaxCount_PerTeam: [
                [
                    0,
                    0
                ],
                [
                    1,
                    0
                ],
                [
                    2,
                    0
                ],
                [
                    3,
                    0
                ],
                [
                    4,
                    0
                ],
                [
                    5,
                    0
                ],
                [
                    6,
                    0
                ],
                [
                    7,
                    0
                ],
                [
                    8,
                    1
                ]
            ],
            AiSpawnType: 1,
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
                ],
                [
                    4,
                    2
                ],
                [
                    5,
                    2
                ],
                [
                    6,
                    2
                ],
                [
                    7,
                    2
                ],
                [
                    8,
                    2
                ]
            ],
            MaxTeamCount: 10,
            AI_ManDownExperienceType_PerTeam: 1,
            AI_ExitVehiclesAllowed_PerTeam: [
                [
                    0,
                    false
                ],
                [
                    1,
                    false
                ],
                [
                    2,
                    false
                ],
                [
                    3,
                    false
                ],
                [
                    4,
                    false
                ],
                [
                    5,
                    false
                ],
                [
                    6,
                    false
                ],
                [
                    7,
                    false
                ],
                [
                    8,
                    false
                ]
            ],
            ModBuilder_GameMode: 2,
            AimAssistSnapCapsuleRadiusMultiplier: 1,
            FriendlyFireDamageReflectionMaxTeamKills: 2,
            Portal_GenerateNavMesh: false,
            SpawnBalancing_GamemodeStartTimer: 0,
            ExitVehiclesAllowed_PerTeam: [
                [
                    0,
                    false
                ],
                [
                    1,
                    false
                ],
                [
                    2,
                    false
                ],
                [
                    3,
                    false
                ],
                [
                    4,
                    false
                ],
                [
                    5,
                    false
                ],
                [
                    6,
                    false
                ],
                [
                    7,
                    false
                ],
                [
                    8,
                    false
                ]
            ]
        },
        assetRestrictions: {},
        gameMode: 'ModBuilderCustom',
        teamComposition: [
            [
                1,
                {
                    humanCapacity: 1,
                    aiCapacity: 0,
                    aiType: 1
                }
            ],
            [
                2,
                {
                    humanCapacity: 1,
                    aiCapacity: 0,
                    aiType: 1
                }
            ],
            [
                3,
                {
                    humanCapacity: 1,
                    aiCapacity: 0,
                    aiType: 1
                }
            ],
            [
                4,
                {
                    humanCapacity: 1,
                    aiCapacity: 0,
                    aiType: 1
                }
            ],
            [
                5,
                {
                    humanCapacity: 1,
                    aiCapacity: 0,
                    aiType: 1
                }
            ],
            [
                6,
                {
                    humanCapacity: 1,
                    aiCapacity: 0,
                    aiType: 1
                }
            ],
            [
                7,
                {
                    humanCapacity: 1,
                    aiCapacity: 0,
                    aiType: 1
                }
            ],
            [
                8,
                {
                    humanCapacity: 1,
                    aiCapacity: 0,
                    aiType: 1
                }
            ],
            [
                9,
                {
                    humanCapacity: 0,
                    aiCapacity: 1,
                    aiType: 1
                }
            ]
        ]
    }
});
