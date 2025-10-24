export default defineBf6Config({
    name: 'Exfil',
    description: 'Parkour Extraction. Compete to retrieve and extract with the objective while battling against both rival squads and rogue agents.',
    outDir: 'dist',
    entrypoint: 'src/Exfil.ts',
    scenes: [
        [
            MapId.SiegeOfCairo,
            'src/scenes/Exfil.spatial.json'
        ]
    ],
    strings: 'src/Exfil.strings.json',
    game: {
        mutators: {
            MaxPlayerCount_PerTeam: [
                [
                    0,
                    4
                ],
                [
                    1,
                    4
                ],
                [
                    2,
                    4
                ],
                [
                    3,
                    4
                ],
                [
                    4,
                    0
                ]
            ],
            MaxTeamCount: 6,
            CompassAllowed_PerTeam: [
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
                    true
                ]
            ],
            AI_ManDownExperienceType_PerTeam: [
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
                    2
                ]
            ],
            ModBuilder_GameMode: 2,
            AimAssistSnapCapsuleRadiusMultiplier: 1,
            FriendlyFireDamageReflectionMaxTeamKills: 2,
            SpawnBalancing_GamemodeStartTimer: 0
        },
        assetRestrictions: {
            Portal_WebApp_AR: false,
            Portal_WebApp_Carbine: false,
            Portal_WebApp_DMR: false,
            Portal_WebApp_MG: false,
            Portal_WebApp_SR: false
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
            ],
            [
                5,
                {
                    humanCapacity: 0
                }
            ]
        ]
    }
});
