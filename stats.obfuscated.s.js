const attackPetalDistanceMult = 1.91, defendPetalDistanceMult = 0.6, petal_damage_mulfactor = 1.5, petal_health_mulfactor = 1.2, BaseStats = (typeof global !== 'undefined' ? global : window)['baseStats'] = {
        'petals': {
            'default': {
                'radius': 0xa,
                'knockback': 0.1
            },
            'Basic': {
                'damage': 0xa,
                'health': 0xa,
                'reload': 2.5,
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health']
            },
            'Compass': {
                'damage': 0xc,
                'health': 0x9,
                'reload': 0x14,
                'override': {
                    0x6: { 'reload': 0xa },
                    0x7: { 'reload': 0x7 },
                    0x8: { 'reload': 0x4 },
                    0x9: { 'reload': 0x1 },
                    0xa: {
                        'reload': 0.5,
                        'damage': 0x1 / 0x2,
                        'health': 0x1 / 0x2,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x12
                                },
                                {
                                    'offsetAngle': Math['PI'],
                                    'offsetRadius': 0x12
                                }
                            ]]
                    },
                    0xb: {
                        'reload': 0.3,
                        'damage': 0x2 / 0x3,
                        'health': 0x2 / 0x3,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x14
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x2 / 0x3,
                                    'offsetRadius': 0x14
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x4 / 0x3,
                                    'offsetRadius': 0x14
                                }
                            ]]
                    },
                    0xc: {
                        'reload': 0.1,
                        'damage': 0x3 / 0x5,
                        'health': 0x3 / 0x5,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x1e
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x2 / 0x5,
                                    'offsetRadius': 0x1e
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x4 / 0x5,
                                    'offsetRadius': 0x1e
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x6 / 0x5,
                                    'offsetRadius': 0x1e
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x8 / 0x5,
                                    'offsetRadius': 0x1e
                                }
                            ]]
                    },
                    0xd: { 'radius': 0xf },
                    0xe: { 'radius': 0x14 },
                    0xf: { 'radius': 0x19 },
                    0x10: { 'radius': 0x1e }
                },
                'pvpOverride': {},
                'tsPetalOverride': {
                    0x6: { 'reload': 0xa / 0x6 },
                    0x7: { 'reload': 0x7 / 0x6 },
                    0x8: { 'reload': 0x4 / 0x6 },
                    0x9: { 'reload': 0x1 / 0x6 },
                    0xa: {
                        'reload': 0.5 / 0x6,
                        'tanksmithBarrelNum': 0x2,
                        'damage': 0x1 / 0x2,
                        'health': 0x1 / 0x2
                    },
                    0xb: {
                        'reload': 0.3 / 0x6,
                        'tanksmithBarrelNum': 0x3,
                        'damage': 0x2 / 0x3,
                        'health': 0x2 / 0x3
                    },
                    0xc: {
                        'reload': 0.1 / 0x6,
                        'tanksmithBarrelNum': 0x5,
                        'damage': 0x3 / 0x5,
                        'health': 0x3 / 0x5
                    }
                },
                'tanksmithBarrelNum': 0x1,
                'radius': 0xc,
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health']
            },
            'Dark\x20Compass': {
                'damage': 0xc,
                'health': 0x9,
                'reload': 0x14,
                'override': {
                    0x6: { 'reload': 0xa },
                    0x7: { 'reload': 0x7 },
                    0x8: { 'reload': 0x4 },
                    0x9: { 'reload': 0x1 },
                    0xa: {
                        'reload': 0.5,
                        'damage': 0x1 / 0x2,
                        'health': 0x1 / 0x2,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x12
                                },
                                {
                                    'offsetAngle': Math['PI'],
                                    'offsetRadius': 0x12
                                }
                            ]]
                    },
                    0xb: {
                        'reload': 0.3,
                        'damage': 0x2 / 0x3,
                        'health': 0x2 / 0x3,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x14
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x2 / 0x3,
                                    'offsetRadius': 0x14
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x4 / 0x3,
                                    'offsetRadius': 0x14
                                }
                            ]]
                    },
                    0xc: {
                        'reload': 0.1,
                        'damage': 0x3 / 0x5,
                        'health': 0x3 / 0x5,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x1e
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x2 / 0x5,
                                    'offsetRadius': 0x1e
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x4 / 0x5,
                                    'offsetRadius': 0x1e
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x6 / 0x5,
                                    'offsetRadius': 0x1e
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x8 / 0x5,
                                    'offsetRadius': 0x1e
                                }
                            ]]
                    },
                    0xd: { 'radius': 0xf },
                    0xe: { 'radius': 0x14 },
                    0xf: { 'radius': 0x19 },
                    0x10: { 'radius': 0x1e }
                },
                'pvpOverride': {},
                'tsPetalOverride': {
                    0x6: { 'reload': 0xa / 0x6 },
                    0x7: { 'reload': 0x7 / 0x6 },
                    0x8: { 'reload': 0x4 / 0x6 },
                    0x9: { 'reload': 0x1 / 0x6 },
                    0xa: {
                        'reload': 0.5 / 0x6,
                        'tanksmithBarrelNum': 0x2,
                        'damage': 0x1 / 0x2,
                        'health': 0x1 / 0x2
                    },
                    0xb: {
                        'reload': 0.3 / 0x6,
                        'tanksmithBarrelNum': 0x3,
                        'damage': 0x2 / 0x3,
                        'health': 0x2 / 0x3
                    },
                    0xc: {
                        'reload': 0.1 / 0x6,
                        'tanksmithBarrelNum': 0x5,
                        'damage': 0x3 / 0x5,
                        'health': 0x3 / 0x5
                    }
                },
                'tanksmithBarrelNum': 0x1,
                'radius': 0xc,
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health']
            },
            'Waterlogged\x20Compass': {
                'damage': 0xc / 0x5,
                'health': 0x9 / 0x5,
                'reload': 0x14,
                'override': {
                    0x6: { 'reload': 0xa },
                    0x7: { 'reload': 0x7 },
                    0x8: { 'reload': 0x4 },
                    0x9: { 'reload': 0x1 },
                    0xa: { 'reload': 0.5 },
                    0xb: {
                        'reload': 0.3,
                        'health': 825.6 / 495.36
                    },
                    0xc: {
                        'reload': 0.1,
                        'damage': 0x5 / 0x7,
                        'health': 0x3de / 0x672,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x1e
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x2 / 0x8,
                                    'offsetRadius': 0x1e
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x4 / 0x8,
                                    'offsetRadius': 0x1e
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x6 / 0x8,
                                    'offsetRadius': 0x1e
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x8 / 0x8,
                                    'offsetRadius': 0x1e
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0xa / 0x8,
                                    'offsetRadius': 0x1e
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0xc / 0x8,
                                    'offsetRadius': 0x1e
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0xe / 0x8,
                                    'offsetRadius': 0x1e
                                }
                            ]]
                    },
                    0xd: {
                        'radius': 0xf,
                        'damage': 0x7 / 0x14,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x1e
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x2 / 0x14,
                                    'offsetRadius': 0x1e
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x4 / 0x14,
                                    'offsetRadius': 0x1e
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x6 / 0x14,
                                    'offsetRadius': 0x1e
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x8 / 0x14,
                                    'offsetRadius': 0x1e
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0xa / 0x14,
                                    'offsetRadius': 0x1e
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0xc / 0x14,
                                    'offsetRadius': 0x1e
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0xe / 0x14,
                                    'offsetRadius': 0x1e
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x10 / 0x14,
                                    'offsetRadius': 0x1e
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x12 / 0x14,
                                    'offsetRadius': 0x1e
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x14 / 0x14,
                                    'offsetRadius': 0x1e
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x16 / 0x14,
                                    'offsetRadius': 0x1e
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x18 / 0x14,
                                    'offsetRadius': 0x1e
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x1a / 0x14,
                                    'offsetRadius': 0x1e
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x1c / 0x14,
                                    'offsetRadius': 0x1e
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x1e / 0x14,
                                    'offsetRadius': 0x1e
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x20 / 0x14,
                                    'offsetRadius': 0x1e
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x22 / 0x14,
                                    'offsetRadius': 0x1e
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x24 / 0x14,
                                    'offsetRadius': 0x1e
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x26 / 0x14,
                                    'offsetRadius': 0x1e
                                }
                            ]]
                    }
                },
                'pvpOverride': {},
                'tsPetalOverride': {
                    0x6: { 'reload': 0xa / 0x6 },
                    0x7: { 'reload': 0x7 / 0x6 },
                    0x8: { 'reload': 0x4 / 0x6 },
                    0x9: { 'reload': 0x1 / 0x6 },
                    0xa: { 'reload': 0.5 / 0x6 },
                    0xb: {
                        'reload': 0.3 / 0x6,
                        'health': 825.6 / 495.36
                    },
                    0xc: {
                        'reload': 0.1 / 0x6,
                        'tanksmithBarrelNum': 0x7,
                        'damage': 0x5 / 0x7,
                        'health': 0x3de / 0x672
                    },
                    0xd: {
                        'tanksmithBarrelNum': 0x14,
                        'damage': 0x7 / 0x14
                    }
                },
                'tanksmithBarrelNum': 0x5,
                'radius': 0xc,
                'petalLayout': [[
                        {
                            'offsetAngle': 0x0,
                            'offsetRadius': 0x1e
                        },
                        {
                            'offsetAngle': Math['PI'] * 0x2 / 0x5,
                            'offsetRadius': 0x1e
                        },
                        {
                            'offsetAngle': Math['PI'] * 0x4 / 0x5,
                            'offsetRadius': 0x1e
                        },
                        {
                            'offsetAngle': Math['PI'] * 0x6 / 0x5,
                            'offsetRadius': 0x1e
                        },
                        {
                            'offsetAngle': Math['PI'] * 0x8 / 0x5,
                            'offsetRadius': 0x1e
                        }
                    ]],
                'damageScalers': ['damage'],
                'healthScalers': ['health']
            },
            'Waterlogged\x20Dark\x20Compass': {
                'damage': 0xc / 0x5,
                'health': 0x9 / 0x5,
                'reload': 0x14,
                'override': {
                    0x6: { 'reload': 0xa },
                    0x7: { 'reload': 0x7 },
                    0x8: { 'reload': 0x4 },
                    0x9: { 'reload': 0x1 },
                    0xa: { 'reload': 0.5 },
                    0xb: {
                        'reload': 0.3,
                        'health': 825.6 / 495.36
                    },
                    0xc: {
                        'reload': 0.1,
                        'damage': 0x5 / 0x7,
                        'health': 0x3de / 0x672,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x1e
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x2 / 0x8,
                                    'offsetRadius': 0x1e
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x4 / 0x8,
                                    'offsetRadius': 0x1e
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x6 / 0x8,
                                    'offsetRadius': 0x1e
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x8 / 0x8,
                                    'offsetRadius': 0x1e
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0xa / 0x8,
                                    'offsetRadius': 0x1e
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0xc / 0x8,
                                    'offsetRadius': 0x1e
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0xe / 0x8,
                                    'offsetRadius': 0x1e
                                }
                            ]]
                    },
                    0xd: {
                        'radius': 0xf,
                        'damage': 0x7 / 0x14,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x1e
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x2 / 0x14,
                                    'offsetRadius': 0x1e
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x4 / 0x14,
                                    'offsetRadius': 0x1e
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x6 / 0x14,
                                    'offsetRadius': 0x1e
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x8 / 0x14,
                                    'offsetRadius': 0x1e
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0xa / 0x14,
                                    'offsetRadius': 0x1e
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0xc / 0x14,
                                    'offsetRadius': 0x1e
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0xe / 0x14,
                                    'offsetRadius': 0x1e
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x10 / 0x14,
                                    'offsetRadius': 0x1e
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x12 / 0x14,
                                    'offsetRadius': 0x1e
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x14 / 0x14,
                                    'offsetRadius': 0x1e
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x16 / 0x14,
                                    'offsetRadius': 0x1e
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x18 / 0x14,
                                    'offsetRadius': 0x1e
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x1a / 0x14,
                                    'offsetRadius': 0x1e
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x1c / 0x14,
                                    'offsetRadius': 0x1e
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x1e / 0x14,
                                    'offsetRadius': 0x1e
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x20 / 0x14,
                                    'offsetRadius': 0x1e
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x22 / 0x14,
                                    'offsetRadius': 0x1e
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x24 / 0x14,
                                    'offsetRadius': 0x1e
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x26 / 0x14,
                                    'offsetRadius': 0x1e
                                }
                            ]]
                    }
                },
                'pvpOverride': {},
                'tsPetalOverride': {
                    0x6: { 'reload': 0xa / 0x6 },
                    0x7: { 'reload': 0x7 / 0x6 },
                    0x8: { 'reload': 0x4 / 0x6 },
                    0x9: { 'reload': 0x1 / 0x6 },
                    0xa: { 'reload': 0.5 / 0x6 },
                    0xb: {
                        'reload': 0.3 / 0x6,
                        'health': 825.6 / 495.36
                    },
                    0xc: {
                        'reload': 0.1 / 0x6,
                        'tanksmithBarrelNum': 0x7,
                        'damage': 0x5 / 0x7,
                        'health': 0x3de / 0x672
                    },
                    0xd: {
                        'tanksmithBarrelNum': 0x14,
                        'damage': 0x7 / 0x14
                    }
                },
                'tanksmithBarrelNum': 0x5,
                'radius': 0xc,
                'petalLayout': [[
                        {
                            'offsetAngle': 0x0,
                            'offsetRadius': 0x1e
                        },
                        {
                            'offsetAngle': Math['PI'] * 0x2 / 0x5,
                            'offsetRadius': 0x1e
                        },
                        {
                            'offsetAngle': Math['PI'] * 0x4 / 0x5,
                            'offsetRadius': 0x1e
                        },
                        {
                            'offsetAngle': Math['PI'] * 0x6 / 0x5,
                            'offsetRadius': 0x1e
                        },
                        {
                            'offsetAngle': Math['PI'] * 0x8 / 0x5,
                            'offsetRadius': 0x1e
                        }
                    ]],
                'damageScalers': ['damage'],
                'healthScalers': ['health']
            },
            'Token': {
                'damage': 0x14,
                'health': 0x14,
                'reload': 2.5,
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health']
            },
            'Bone': {
                'damage': 28.5,
                'health': 24.25,
                'armor': 14.95,
                'radius': 14.5,
                'reload': 2.3,
                'override': {
                    0x9: { 'radius': 0x13 },
                    0xc: {
                        'armor': 1.1,
                        'health': 1.25
                    },
                    0xd: { 'radius': 0x2a },
                    0xe: { 'radius': 0x34 },
                    0xf: { 'radius': 0x44 },
                    0x10: {
                        'radius': 0x54,
                        'damage': 0x1 / 0x2,
                        'petalLayout': [[
                                {},
                                {
                                    'offsetAngle': Math['PI'] / 0x2,
                                    'offsetRadius': 0x0
                                }
                            ]]
                    }
                },
                'pvpOverride': { 0x0: { 'armor': 0x2 } },
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': [
                    'health',
                    'armor'
                ]
            },
            'Corn': {
                'damage': 0x8,
                'health': 0x7530,
                'reload': 0x9,
                'radius': 0xc,
                'override': {
                    0x9: { 'radius': 0x11 },
                    0xc: { 'radius': 0x27 },
                    0xd: { 'radius': 0x42 },
                    0xe: { 'radius': 0x58 },
                    0xf: {
                        'damage': 0x1 / 0x3,
                        'radius': 0x3c,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x19
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x2 / 0x3,
                                    'offsetRadius': 0x19
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x4 / 0x3,
                                    'offsetRadius': 0x19
                                }
                            ]]
                    },
                    0x10: {
                        'radius': 0x48,
                        'damage': 0x3 / 0x4 * 1.01,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x32
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x2 / 0x4,
                                    'offsetRadius': 0x32
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x4 / 0x4,
                                    'offsetRadius': 0x32
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x6 / 0x4,
                                    'offsetRadius': 0x32
                                }
                            ]]
                    }
                },
                'tanksmithRadius': 0x64,
                'tanksmithShootCooldown': 0x1e,
                'tanksmithCooldown': 0x3c,
                'tanksmithHp': 0xc8,
                'tanksmithBarrelNum': 0x3,
                'tsPetalOverride': {
                    0x0: {
                        'radius': 0x2,
                        'damage': 0.3
                    }
                },
                'tsProjectileSpeed': 0x4,
                'tsProjectileLifetime': 0x96,
                'tsBarrelData': [
                    { 'angle': 0x0 },
                    { 'angle': Math['PI'] * 0x2 / 0x3 + 0.5 },
                    { 'angle': Math['PI'] * 0x4 / 0x3 - 0.5 }
                ],
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': [
                    'health',
                    'tanksmithHp'
                ]
            },
            'Blood\x20Corn': {
                'damage': 11.7,
                'health': 0xafc8,
                'damageHeal': -0.55,
                'reload': 0x9,
                'radius': 0xc,
                'override': {
                    0x9: { 'radius': 0x11 },
                    0xc: { 'radius': 0x27 },
                    0xd: {
                        'radius': 0x42,
                        'damage': 1.08
                    },
                    0xe: {
                        'radius': 0x58,
                        'damage': 1.08
                    },
                    0xf: {
                        'damage': 0x1 / 0x3 * 1.08,
                        'damageHeal': 0x1 / 0x3,
                        'radius': 0x3c,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x19
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x2 / 0x3,
                                    'offsetRadius': 0x19
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x4 / 0x3,
                                    'offsetRadius': 0x19
                                }
                            ]]
                    },
                    0x10: {
                        'radius': 0x48,
                        'damage': 0x3 / 0x4 * 1.12,
                        'damageHeal': 0x3 / 0x4,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x32
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x2 / 0x4,
                                    'offsetRadius': 0x32
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x4 / 0x4,
                                    'offsetRadius': 0x32
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x6 / 0x4,
                                    'offsetRadius': 0x32
                                }
                            ]]
                    }
                },
                'pvpOverride': {
                    0x0: {
                        'damage': 0x2 / 0x5,
                        'damageHeal': -0x2
                    }
                },
                'tanksmithRadius': 0x64,
                'tanksmithShootCooldown': 0x2d,
                'tanksmithCooldown': 0x3c,
                'tanksmithHp': 0xc8,
                'tanksmithBarrelNum': 0x3,
                'tsPetalOverride': {
                    0x0: {
                        'radius': 0x2,
                        'damage': 0.005,
                        'damageHeal': -0.1595
                    }
                },
                'tsProjectileSpeed': 0x4,
                'tsProjectileLifetime': 0x96,
                'tsBarrelData': [
                    { 'angle': 0x0 },
                    { 'angle': Math['PI'] * 0x2 / 0x3 + 0.5 },
                    { 'angle': Math['PI'] * 0x4 / 0x3 - 0.5 }
                ],
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': [
                    'health',
                    'tanksmithHp'
                ],
                'healScalers': ['damageHeal']
            },
            'Soil': {
                'damage': 0x6,
                'health': 0x3c,
                'reload': 0x2,
                'healthBuff': 0xc8,
                'radius': 0xa,
                'stickParentRotation': !![],
                'inflation': 0xa,
                'petalLayout': [[{}]],
                'override': {
                    0xc: {
                        'healthBuff': 0x1 / 0x3,
                        'damage': 0x1 / 0x3,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x9
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x2 / 0x3,
                                    'offsetRadius': 0x9
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x4 / 0x3,
                                    'offsetRadius': 0x9
                                }
                            ]]
                    },
                    0xd: {
                        'healthBuff': 0x3 / 0x5,
                        'damage': 0x3 / 0x5,
                        'radius': 0x16,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0xe
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x2 / 0x5,
                                    'offsetRadius': 0xe
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x4 / 0x5,
                                    'offsetRadius': 0xe
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x6 / 0x5,
                                    'offsetRadius': 0xe
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x8 / 0x5,
                                    'offsetRadius': 0xe
                                }
                            ]]
                    },
                    0xe: {
                        'healthBuff': 5.3 / 0x6,
                        'damage': 0x5 / 0x6,
                        'radius': 0x23,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x18
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x2 / 0x6,
                                    'offsetRadius': 0x18
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x4 / 0x6,
                                    'offsetRadius': 0x18
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x6 / 0x6,
                                    'offsetRadius': 0x18
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x8 / 0x6,
                                    'offsetRadius': 0x18
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0xa / 0x6,
                                    'offsetRadius': 0x18
                                }
                            ]]
                    },
                    0xf: {
                        'healthBuff': 0x6 / 0x7,
                        'damage': 0x6 / 0x7,
                        'radius': 0x2d,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x1c
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x2 / 0x7,
                                    'offsetRadius': 0x1c
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x4 / 0x7,
                                    'offsetRadius': 0x1c
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x6 / 0x7,
                                    'offsetRadius': 0x1c
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x8 / 0x7,
                                    'offsetRadius': 0x1c
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0xa / 0x7,
                                    'offsetRadius': 0x1c
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0xc / 0x7,
                                    'offsetRadius': 0x1c
                                }
                            ]]
                    },
                    0x10: { 'radius': 0x37 }
                },
                'pvpOverride': {
                    0xc: {
                        'healthBuff': 0x1 / 0x3,
                        'damage': 0x1 / 0x3,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x9
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x2 / 0x3,
                                    'offsetRadius': 0x9
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x4 / 0x3,
                                    'offsetRadius': 0x9
                                }
                            ]]
                    },
                    0xd: {
                        'healthBuff': 0x3 / 0x5,
                        'damage': 0x3 / 0x5,
                        'radius': 0x16,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0xe
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x2 / 0x5,
                                    'offsetRadius': 0xe
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x4 / 0x5,
                                    'offsetRadius': 0xe
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x6 / 0x5,
                                    'offsetRadius': 0xe
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x8 / 0x5,
                                    'offsetRadius': 0xe
                                }
                            ]]
                    },
                    0xe: {
                        'healthBuff': 0x5 / 0x6,
                        'damage': 0x5 / 0x6,
                        'radius': 0x23,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x18
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x2 / 0x6,
                                    'offsetRadius': 0x18
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x4 / 0x6,
                                    'offsetRadius': 0x18
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x6 / 0x6,
                                    'offsetRadius': 0x18
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x8 / 0x6,
                                    'offsetRadius': 0x18
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0xa / 0x6,
                                    'offsetRadius': 0x18
                                }
                            ]]
                    }
                },
                'healScalers': ['healthBuff'],
                'damageScalers': ['damage'],
                'healthScalers': ['health']
            },
            'Husk': {
                'damage': 0x6,
                'health': 0x3c,
                'reload': 0x1,
                'healthBuff': 0x23,
                'flowerArmor': 0x3,
                'radius': 0xb,
                'override': {
                    0xc: { 'radius': 0x18 },
                    0xd: { 'radius': 0x1e },
                    0xe: { 'radius': 0x24 },
                    0xf: { 'radius': 0x2a },
                    0x10: { 'radius': 0x30 }
                },
                'petalLayout': [[{}]],
                'healScalers': [
                    'healthBuff',
                    'flowerArmor'
                ],
                'damageScalers': ['damage'],
                'healthScalers': ['health']
            },
            'Clover': {
                'damage': 0.1,
                'health': 0x64,
                'reload': 0x3b9aca00,
                'radius': 0x12,
                'weatherChanceBoost': 0.005,
                'override': {
                    0x1: { 'weatherChanceBoost': 0.01 },
                    0x2: { 'weatherChanceBoost': 0.015 },
                    0x3: { 'weatherChanceBoost': 0.02 },
                    0x4: { 'weatherChanceBoost': 0.025 },
                    0x5: { 'weatherChanceBoost': 0.03 },
                    0x6: { 'weatherChanceBoost': 0.035 },
                    0x7: { 'weatherChanceBoost': 0.04 },
                    0x8: { 'weatherChanceBoost': 0.045 },
                    0x9: { 'weatherChanceBoost': 0.05 },
                    0xa: { 'weatherChanceBoost': 0.055 },
                    0xb: { 'weatherChanceBoost': 0.06 },
                    0xc: {
                        'radius': 0x18,
                        'weatherChanceBoost': 0.065
                    },
                    0xd: {
                        'radius': 0x1e,
                        'weatherChanceBoost': 0.07
                    },
                    0xe: {
                        'radius': 0x24,
                        'weatherChanceBoost': 0.075
                    },
                    0xf: {
                        'radius': 0x2a,
                        'weatherChanceBoost': 0.08
                    },
                    0x10: {
                        'radius': 0x32,
                        'weatherChanceBoost': 0.085
                    },
                    0x11: { 'weatherChanceBoost': 0.09 },
                    0x12: { 'weatherChanceBoost': 0.095 }
                },
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'tsPetalOverride': { 0x0: { 'reload': 0.1 } }
            },
            'Horn': {
                'damage': 0x1,
                'health': 0x78,
                'reload': 0x4,
                'radius': 0x12,
                'maximumMobs': 0x5,
                'maximumRarity': 0x0,
                'dropChance': 0x0,
                'override': {
                    0x1: {
                        'maximumMobs': 0x5,
                        'maximumRarity': 0x1
                    },
                    0x2: {
                        'maximumMobs': 0x5,
                        'maximumRarity': 0x2
                    },
                    0x3: {
                        'maximumMobs': 0x5,
                        'maximumRarity': 0x3
                    },
                    0x4: {
                        'maximumMobs': 0x5,
                        'maximumRarity': 0x4
                    },
                    0x5: {
                        'maximumMobs': 0x5,
                        'maximumRarity': 0x5
                    },
                    0x6: {
                        'maximumMobs': 0x6,
                        'maximumRarity': 0x6
                    },
                    0x7: {
                        'maximumMobs': 0x8,
                        'maximumRarity': 0x7
                    },
                    0x8: {
                        'maximumMobs': 0xa,
                        'maximumRarity': 0x8
                    },
                    0x9: {
                        'maximumMobs': 0xc,
                        'maximumRarity': 0x9
                    },
                    0xa: {
                        'maximumMobs': 0xf,
                        'maximumRarity': 0xa
                    },
                    0xb: {
                        'maximumMobs': 0x12,
                        'maximumRarity': 0xb
                    },
                    0xc: {
                        'maximumMobs': 0x1e,
                        'maximumRarity': 0xd
                    },
                    0xd: {
                        'maximumMobs': 0x28,
                        'maximumRarity': 0xf
                    },
                    0xe: {
                        'maximumMobs': 0x32,
                        'maximumRarity': 0x12,
                        'dropChance': 0x2
                    },
                    0xf: {
                        'radius': 0x36,
                        'maximumMobs': 0x37,
                        'maximumRarity': 0x16,
                        'dropChance': 0x4
                    },
                    0x10: {
                        'radius': 0x40,
                        'maximumMobs': 0x3c,
                        'maximumRarity': 0x1a,
                        'dropChance': 0x6
                    },
                    0x11: {
                        'radius': 0x4a,
                        'maximumMobs': 0x41,
                        'maximumRarity': 0x1e,
                        'dropChance': 0x8
                    },
                    0x12: {
                        'radius': 0x54,
                        'maximumMobs': 0x46,
                        'maximumRarity': 0x22,
                        'dropChance': 0xa
                    }
                },
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health']
            },
            'Blood\x20Horn': {
                'damage': 0x1,
                'health': 0x78,
                'reload': 0x18,
                'radius': 0x12,
                'override': {
                    0x6: { 'reload': 0x16 },
                    0x7: { 'reload': 0x14 },
                    0x8: { 'reload': 0x12 },
                    0x9: { 'reload': 0x10 },
                    0xa: { 'reload': 0xe },
                    0xb: { 'reload': 0xc },
                    0xc: { 'reload': 0xa },
                    0xd: { 'reload': 0x8 },
                    0xe: { 'reload': 0x6 },
                    0xf: { 'reload': 0x4 },
                    0x10: { 'reload': 0x2 },
                    0x11: { 'reload': 0x1 },
                    0x12: { 'reload': 0.5 }
                },
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health']
            },
            'Dark\x20Spine': {
                'damage': 0x1,
                'health': 0x14,
                'reload': 0x3,
                'killBossUnder': [
                    0x1e,
                    0x19,
                    0x14,
                    0xf
                ],
                'radius': 0x10,
                'override': {
                    0x2: {
                        'killBossUnder': [
                            0x1e,
                            0x1e,
                            0x19,
                            0x14,
                            0xf
                        ]
                    },
                    0x2: {
                        'killBossUnder': [
                            0x1e,
                            0x1e,
                            0x1e,
                            0x19,
                            0x14,
                            0xf
                        ]
                    },
                    0x3: {
                        'killBossUnder': [
                            0x1e,
                            0x1e,
                            0x1e,
                            0x1e,
                            0x19,
                            0x14,
                            0xf
                        ]
                    },
                    0x4: {
                        'killBossUnder': [
                            0x1e,
                            0x1e,
                            0x1e,
                            0x1e,
                            0x1e,
                            0x19,
                            0x14,
                            0xf
                        ]
                    },
                    0x5: {
                        'killBossUnder': [
                            0x1e,
                            0x1e,
                            0x1e,
                            0x1e,
                            0x1e,
                            0x1e,
                            0x19,
                            0x14,
                            0xf
                        ]
                    },
                    0x6: {
                        'killBossUnder': [
                            0x1e,
                            0x1e,
                            0x1e,
                            0x1e,
                            0x1e,
                            0x1e,
                            0x1e,
                            0x19,
                            0x14,
                            0xf
                        ]
                    },
                    0x7: {
                        'killBossUnder': [
                            0x1e,
                            0x1e,
                            0x1e,
                            0x1e,
                            0x1e,
                            0x1e,
                            0x1e,
                            0x1e,
                            0x19,
                            0x14,
                            0xf
                        ]
                    },
                    0x8: {
                        'killBossUnder': [
                            0x1e,
                            0x1e,
                            0x1e,
                            0x1e,
                            0x1e,
                            0x1e,
                            0x1e,
                            0x1e,
                            0x1e,
                            0x19,
                            0x14,
                            0xf
                        ]
                    },
                    0x9: {
                        'killBossUnder': [
                            0x1e,
                            0x1e,
                            0x1e,
                            0x1e,
                            0x1e,
                            0x1e,
                            0x1e,
                            0x1e,
                            0x1e,
                            0x1e,
                            0x19,
                            0x14,
                            0xf
                        ]
                    },
                    0xa: {
                        'killBossUnder': [
                            0x1e,
                            0x1e,
                            0x1e,
                            0x1e,
                            0x1e,
                            0x1e,
                            0x1e,
                            0x1e,
                            0x1e,
                            0x1e,
                            0x1e,
                            0x19,
                            0x14,
                            0xf
                        ]
                    },
                    0xb: {
                        'killBossUnder': [
                            0x1e,
                            0x1e,
                            0x1e,
                            0x1e,
                            0x1e,
                            0x1e,
                            0x1e,
                            0x1e,
                            0x1e,
                            0x1e,
                            0x1e,
                            0x1e,
                            0x19,
                            0x14,
                            0xf
                        ]
                    },
                    0xc: {
                        'killBossUnder': [
                            0x23,
                            0x23,
                            0x23,
                            0x23,
                            0x23,
                            0x23,
                            0x23,
                            0x23,
                            0x23,
                            0x23,
                            0x23,
                            0x23,
                            0x23,
                            0x1e,
                            0x19,
                            0x14,
                            0xf
                        ]
                    },
                    0xd: {
                        'killBossUnder': [
                            0x2d,
                            0x2d,
                            0x2d,
                            0x2d,
                            0x2d,
                            0x2d,
                            0x2d,
                            0x2d,
                            0x2d,
                            0x2d,
                            0x2d,
                            0x2d,
                            0x2d,
                            0x2d,
                            0x2d,
                            0x2d,
                            0x2a,
                            0x27,
                            0x24,
                            0x1e,
                            0x18
                        ]
                    },
                    0xe: {
                        'killBossUnder': [
                            0x32,
                            0x32,
                            0x32,
                            0x32,
                            0x32,
                            0x32,
                            0x32,
                            0x32,
                            0x32,
                            0x32,
                            0x32,
                            0x32,
                            0x32,
                            0x32,
                            0x32,
                            0x32,
                            0x32,
                            0x32,
                            0x30,
                            0x2d,
                            0x28,
                            0x1e,
                            0x14
                        ]
                    },
                    0xf: {
                        'killBossUnder': [
                            0x37,
                            0x37,
                            0x37,
                            0x37,
                            0x37,
                            0x37,
                            0x37,
                            0x37,
                            0x37,
                            0x37,
                            0x37,
                            0x37,
                            0x37,
                            0x37,
                            0x37,
                            0x37,
                            0x37,
                            0x37,
                            0x37,
                            0x37,
                            0x37,
                            0x34,
                            0x30,
                            0x2a,
                            0x22,
                            0x19
                        ]
                    },
                    0x10: {
                        'killBossUnder': [
                            0x37,
                            0x37,
                            0x37,
                            0x37,
                            0x37,
                            0x37,
                            0x37,
                            0x37,
                            0x37,
                            0x37,
                            0x37,
                            0x37,
                            0x37,
                            0x37,
                            0x37,
                            0x37,
                            0x37,
                            0x37,
                            0x37,
                            0x37,
                            0x37,
                            0x37,
                            0x37,
                            0x37,
                            0x34,
                            0x30,
                            0x2a,
                            0x22,
                            0x19,
                            0x12
                        ]
                    }
                },
                'petalLayout': [[{}]],
                'damageScalers': [
                    'damage',
                    'bodyDamage'
                ],
                'healthScalers': ['health']
            },
            'Cutter': {
                'damage': 0x0,
                'health': 0x32,
                'reload': 0.7,
                'bodyDamage': 45.6,
                'radius': 0xb,
                'override': {
                    0xc: { 'radius': 0x18 },
                    0xd: {
                        'radius': 0x1e,
                        'damage': 0.85
                    },
                    0xe: {
                        'radius': 0x2d,
                        'damage': 0.85
                    },
                    0xf: {
                        'radius': 0x3c,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x16
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x2 / 0x3,
                                    'offsetRadius': 0x16
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x4 / 0x3,
                                    'offsetRadius': 0x16
                                }
                            ]]
                    },
                    0x10: {
                        'radius': 0x48,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x32
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x2 / 0x4,
                                    'offsetRadius': 0x32
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x4 / 0x4,
                                    'offsetRadius': 0x32
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x6 / 0x4,
                                    'offsetRadius': 0x32
                                }
                            ]]
                    }
                },
                'petalLayout': [[{}]],
                'damageScalers': [
                    'damage',
                    'bodyDamage'
                ],
                'healthScalers': ['health']
            },
            'Shade': {
                'damage': 0x0,
                'health': 0x0,
                'reload': 0x0,
                'radius': 0x10,
                'shadowTime': 0.01,
                'unrevivable': 2.65,
                'override': {
                    0x1: { 'shadowTime': 0.05 },
                    0x2: { 'shadowTime': 0.1 },
                    0x3: { 'shadowTime': 0.15 },
                    0x4: { 'shadowTime': 0.2 },
                    0x5: { 'shadowTime': 0.25 },
                    0x6: { 'shadowTime': 0.3 },
                    0x7: { 'shadowTime': 0.35 },
                    0x8: { 'shadowTime': 0.4 },
                    0x9: { 'shadowTime': 0.8 },
                    0xa: { 'shadowTime': 1.4 },
                    0xb: { 'shadowTime': 2.1 },
                    0xc: {
                        'shadowTime': 2.8,
                        'unrevivable': 2.4
                    },
                    0xd: {
                        'shadowTime': 3.45,
                        'unrevivable': 2.2
                    },
                    0xe: {
                        'shadowTime': 3.8,
                        'unrevivable': 2.05
                    },
                    0xf: { 'shadowTime': 0x4 },
                    0x10: { 'shadowTime': 4.2 },
                    0x11: { 'shadowTime': 4.4 },
                    0x12: { 'shadowTime': 4.6 },
                    0x13: { 'shadowTime': 4.8 }
                },
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health']
            },
            'Radiance': {
                'damage': 0x0,
                'health': 0x0,
                'reload': 0x0,
                'radius': 0x10,
                'waveHealthBoost': 0x1e,
                'override': {},
                'petalLayout': [[{}]],
                'healScalers': ['waveHealthBoost'],
                'damageScalers': ['damage'],
                'healthScalers': ['health']
            },
            'Cactus': {
                'damage': 0x87,
                'health': 0xc,
                'reload': 0x3,
                'healthBuff': 0x6e,
                'radius': 0xf,
                'tanksmithCooldown': 0x2d,
                'stickParentRotation': !![],
                'override': {
                    0xc: {
                        'healthBuff': 0x1 / 0x3,
                        'damage': 0x1 / 0x3,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x9
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x2 / 0x3,
                                    'offsetRadius': 0x9
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x4 / 0x3,
                                    'offsetRadius': 0x9
                                }
                            ]]
                    },
                    0xd: {
                        'healthBuff': 0x3 / 0x5,
                        'damage': 3.5 / 0x5,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x9
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x2 / 0x5,
                                    'offsetRadius': 0x9
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x4 / 0x5,
                                    'offsetRadius': 0x9
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x6 / 0x5,
                                    'offsetRadius': 0x9
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x8 / 0x5,
                                    'offsetRadius': 0x9
                                }
                            ]]
                    },
                    0xe: {
                        'healthBuff': 5.3 / 0x6,
                        'damage': 1.17,
                        'radius': 0x37,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x14
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x2 / 0x6,
                                    'offsetRadius': 0x14
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x4 / 0x6,
                                    'offsetRadius': 0x14
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x6 / 0x6,
                                    'offsetRadius': 0x14
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x8 / 0x6,
                                    'offsetRadius': 0x14
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0xa / 0x6,
                                    'offsetRadius': 0x14
                                }
                            ]]
                    },
                    0xf: {
                        'healthBuff': 0x6 / 0x7,
                        'damage': 0x6 / 0x7,
                        'radius': 0x4b,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x1e
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x2 / 0x7,
                                    'offsetRadius': 0x1e
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x4 / 0x7,
                                    'offsetRadius': 0x1e
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x6 / 0x7,
                                    'offsetRadius': 0x1e
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x8 / 0x7,
                                    'offsetRadius': 0x1e
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0xa / 0x7,
                                    'offsetRadius': 0x1e
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0xc / 0x7,
                                    'offsetRadius': 0x1e
                                }
                            ]]
                    },
                    0x10: { 'radius': 0x55 }
                },
                'pvpOverride': {
                    0xc: {
                        'healthBuff': 0x1 / 0x3,
                        'damage': 0x1 / 0x3,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x9
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x2 / 0x3,
                                    'offsetRadius': 0x9
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x4 / 0x3,
                                    'offsetRadius': 0x9
                                }
                            ]]
                    }
                },
                'tsBarrelData': [
                    { 'angle': 0x0 },
                    { 'angle': -0.2 },
                    { 'angle': 0.2 },
                    { 'angle': -0.4 },
                    { 'angle': 0.4 }
                ],
                'tsPetalOverride': { 0x0: { 'healthBuff': 0x0 } },
                'tanksmithHpIncrease': 0x37,
                'petalLayout': [[{}]],
                'healScalers': [
                    'healthBuff',
                    'tanksmithHpIncrease'
                ],
                'damageScalers': ['damage'],
                'healthScalers': ['health']
            },
            'Shiny\x20Cactus': {
                'damage': 0x15e,
                'health': 0x1e,
                'reload': 0x3,
                'healthBuffBoost': 0.188,
                'radius': 0xf,
                'stickParentRotation': !![],
                'override': {
                    0x1: { 'healthBuffBoost': 0.206 },
                    0x2: { 'healthBuffBoost': 0.227 },
                    0x3: { 'healthBuffBoost': 0.25 },
                    0x4: { 'healthBuffBoost': 0.275 },
                    0x5: { 'healthBuffBoost': 0.302 },
                    0x6: { 'healthBuffBoost': 0.332 },
                    0x7: { 'healthBuffBoost': 0.365 },
                    0x8: { 'healthBuffBoost': 0.402 },
                    0x9: { 'healthBuffBoost': 0.442 },
                    0xa: { 'healthBuffBoost': 0.486 },
                    0xb: { 'healthBuffBoost': 0.535 },
                    0xc: {
                        'healthBuffBoost': 0.588 / 0x3,
                        'damage': 0x1 / 0x3,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x9
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x2 / 0x3,
                                    'offsetRadius': 0x9
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x4 / 0x3,
                                    'offsetRadius': 0x9
                                }
                            ]]
                    },
                    0xd: {
                        'healthBuffBoost': 0.647 / 0x5,
                        'damage': 3.5 / 0x5,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x9
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x2 / 0x5,
                                    'offsetRadius': 0x9
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x4 / 0x5,
                                    'offsetRadius': 0x9
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x6 / 0x5,
                                    'offsetRadius': 0x9
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x8 / 0x5,
                                    'offsetRadius': 0x9
                                }
                            ]]
                    },
                    0xe: {
                        'healthBuffBoost': 0.712 / 0x6,
                        'damage': 1.17,
                        'radius': 0x37,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x14
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x2 / 0x6,
                                    'offsetRadius': 0x14
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x4 / 0x6,
                                    'offsetRadius': 0x14
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x6 / 0x6,
                                    'offsetRadius': 0x14
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x8 / 0x6,
                                    'offsetRadius': 0x14
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0xa / 0x6,
                                    'offsetRadius': 0x14
                                }
                            ]]
                    },
                    0xf: {
                        'healthBuffBoost': 0.783 / 0x7,
                        'damage': 0x6 / 0x7,
                        'radius': 0x4b,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x1e
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x2 / 0x7,
                                    'offsetRadius': 0x1e
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x4 / 0x7,
                                    'offsetRadius': 0x1e
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x6 / 0x7,
                                    'offsetRadius': 0x1e
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x8 / 0x7,
                                    'offsetRadius': 0x1e
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0xa / 0x7,
                                    'offsetRadius': 0x1e
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0xc / 0x7,
                                    'offsetRadius': 0x1e
                                }
                            ]]
                    },
                    0x10: {
                        'radius': 0x55,
                        'healthBuffBoost': 0.862 / 0x7
                    },
                    0x11: { 'healthBuffBoost': 0.948 / 0x7 },
                    0x11: { 'healthBuffBoost': 1.042 / 0x7 }
                },
                'pvpOverride': {
                    0xc: {
                        'healthBuff': 0x1 / 0x3,
                        'damage': 0x1 / 0x3,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x9
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x2 / 0x3,
                                    'offsetRadius': 0x9
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x4 / 0x3,
                                    'offsetRadius': 0x9
                                }
                            ]]
                    }
                },
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health']
            },
            'Leaf': {
                'damage': 0x2a,
                'health': 13.5,
                'reload': 0x1,
                'passiveHealingBuff': 0x7,
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'healScalers': ['passiveHealingBuff'],
                'override': {
                    0x5: { 'radius': 0xe },
                    0x7: { 'radius': 0x11 },
                    0x9: {
                        'radius': 0x12,
                        'damage': 0x1 / 0x3,
                        'passiveHealingBuff': 0x1 / 0x3,
                        'petalLayout': [
                            [{}],
                            [{}],
                            [{}]
                        ]
                    },
                    0xc: {
                        'radius': 0x18,
                        'passiveHealingBuff': 1.3
                    },
                    0xd: {
                        'radius': 0x1e,
                        'damage': 0x3 / 0x5,
                        'passiveHealingBuff': 0x3 / 0x5,
                        'petalLayout': [
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}]
                        ]
                    },
                    0xe: {
                        'radius': 0x2d,
                        'damage': 1.11,
                        'passiveHealingBuff': 5.4 / 0x6,
                        'petalLayout': [
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}]
                        ]
                    },
                    0xf: {
                        'radius': 0x37,
                        'damage': 0x6 / 0x7,
                        'passiveHealingBuff': 0x6 / 0x7,
                        'petalLayout': [
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}]
                        ]
                    },
                    0x10: {
                        'radius': 0x8c,
                        'damage': 0x7,
                        'passiveHealingBuff': 0x7,
                        'petalLayout': [[{}]]
                    }
                },
                'tsPetalOverride': { 0x0: { 'radius': 0x2 } },
                'pvpOverride': {
                    0x0: { 'passiveHealingBuff': 8.9 },
                    0x5: { 'radius': 0xe },
                    0x7: { 'radius': 0x11 },
                    0x9: { 'radius': 0x12 },
                    0xc: { 'radius': 0x18 },
                    0xd: { 'radius': 0x1e }
                },
                'tsBarrelData': [
                    { 'angle': 0x0 },
                    { 'angle': -0.2 },
                    { 'angle': 0.2 },
                    { 'angle': -0.4 },
                    { 'angle': 0.4 }
                ]
            },
            'Blood\x20Leaf': {
                'damage': 0x23,
                'health': 0xc,
                'reload': 0x1,
                'passiveDamagePerKill': 0.03,
                'healingBoost': 0.01,
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'healScalers': ['passiveDamagePerKill'],
                'override': {
                    0x1: { 'healingBoost': 0.011 },
                    0x2: { 'healingBoost': 0.012 },
                    0x3: { 'healingBoost': 0.013 },
                    0x4: { 'healingBoost': 0.015 },
                    0x5: {
                        'radius': 0xe,
                        'healingBoost': 0.016
                    },
                    0x6: { 'healingBoost': 0.018 },
                    0x7: {
                        'radius': 0x11,
                        'healingBoost': 0.019
                    },
                    0x8: { 'healingBoost': 0.021 },
                    0x9: {
                        'radius': 0x12,
                        'damage': 0x1 / 0x3,
                        'passiveDamagePerKill': 0x1 / 0x3,
                        'petalLayout': [
                            [{}],
                            [{}],
                            [{}]
                        ],
                        'healingBoost': 0.024 / 0x3
                    },
                    0xa: { 'healingBoost': 0.026 / 0x3 },
                    0xb: { 'healingBoost': 0.029 / 0x3 },
                    0xc: {
                        'radius': 0x18,
                        'healingBoost': 0.031 / 0x3
                    },
                    0xd: {
                        'radius': 0x1e,
                        'damage': 0x3 / 0x5,
                        'passiveDamagePerKill': 0x3 / 0x5,
                        'petalLayout': [
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}]
                        ],
                        'healingBoost': 0.035 / 0x5
                    },
                    0xe: {
                        'healingBoost': 0.038 / 0x6,
                        'radius': 0x28,
                        'damage': 1.11 * 1.03,
                        'passiveDamagePerKill': 0x5 / 0x6,
                        'petalLayout': [
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}]
                        ]
                    },
                    0xf: {
                        'healingBoost': 0.042 / 0x7,
                        'radius': 0x37,
                        'damage': 0x6 / 0x7 * 1.06,
                        'passiveHealingBuff': 0x6 / 0x7,
                        'passiveDamagePerKill': 0x6 / 0x7,
                        'petalLayout': [
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}]
                        ]
                    },
                    0x10: {
                        'healingBoost': 0.046,
                        'radius': 0x8c,
                        'damage': 0x7 * 1.12,
                        'passiveHealingBuff': 0x7,
                        'passiveDamagePerKill': 0x7,
                        'petalLayout': [[{}]]
                    },
                    0x11: { 'healingBoost': 0.051 },
                    0x12: { 'healingBoost': 0.056 }
                },
                'tsPetalOverride': { 0x0: { 'radius': 0x2 } },
                'tsBarrelData': [
                    { 'angle': 0x0 },
                    { 'angle': -0.2 },
                    { 'angle': 0.2 },
                    { 'angle': -0.4 },
                    { 'angle': 0.4 }
                ],
                'pvpOverride': {
                    0x5: { 'radius': 0xe },
                    0x7: { 'radius': 0x11 },
                    0x9: { 'radius': 0x12 },
                    0xc: { 'radius': 0x18 },
                    0xd: { 'radius': 0x1e }
                }
            },
            'Starfish': {
                'damage': 0x1e,
                'health': 0xb,
                'reload': 0x2,
                'passiveHealingBuff': 0xe,
                'radius': 0x14,
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'healScalers': ['passiveHealingBuff'],
                'override': {
                    0xc: { 'passiveHealingBuff': 1.3 },
                    0xd: {
                        'radius': 0x1e,
                        'damage': 0x1 / 0x3,
                        'passiveHealingBuff': 1.125 / 0x3,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x10
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x2 / 0x3,
                                    'offsetRadius': 0x10
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x4 / 0x3,
                                    'offsetRadius': 0x10
                                }
                            ]]
                    },
                    0xe: {
                        'radius': 0x32,
                        'damage': 0x3 / 0x5,
                        'passiveHealingBuff': 0x3 / 0x5,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x1a
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x2 / 0x5,
                                    'offsetRadius': 0x1a
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x4 / 0x5,
                                    'offsetRadius': 0x1a
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x6 / 0x5,
                                    'offsetRadius': 0x1a
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x8 / 0x5,
                                    'offsetRadius': 0x1a
                                }
                            ]]
                    },
                    0xf: { 'radius': 0x41 },
                    0x10: {
                        'radius': 0x46,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x38
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x2 / 0x5,
                                    'offsetRadius': 0x38
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x4 / 0x5,
                                    'offsetRadius': 0x38
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x6 / 0x5,
                                    'offsetRadius': 0x38
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x8 / 0x5,
                                    'offsetRadius': 0x38
                                }
                            ]]
                    }
                }
            },
            'Brisingida': {
                'damage': 0x64,
                'health': 0xa,
                'reload': 0x2,
                'passiveHealingBuff': 17.5,
                'radius': 0x19,
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'healScalers': ['passiveHealingBuff'],
                'override': {
                    0xc: { 'passiveHealingBuff': 1.3 },
                    0xd: {
                        'radius': 0x1e,
                        'damage': 0x1 / 0x3,
                        'passiveHealingBuff': 1.125 / 0x3,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x23
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x2 / 0x3,
                                    'offsetRadius': 0x23
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x4 / 0x3,
                                    'offsetRadius': 0x23
                                }
                            ]]
                    },
                    0xe: {
                        'radius': 0x32,
                        'damage': 0x3 / 0x4,
                        'passiveHealingBuff': 0x3 / 0x4,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x4d
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x2 / 0x4,
                                    'offsetRadius': 0x4d
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x4 / 0x4,
                                    'offsetRadius': 0x4d
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x6 / 0x4,
                                    'offsetRadius': 0x4d
                                }
                            ]]
                    },
                    0xf: {
                        'radius': 0x41,
                        'damage': 0x4 / 0x5,
                        'passiveHealingBuff': 0x4 / 0x5,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x63
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x2 / 0x5,
                                    'offsetRadius': 0x63
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x4 / 0x5,
                                    'offsetRadius': 0x63
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x6 / 0x5,
                                    'offsetRadius': 0x63
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x8 / 0x5,
                                    'offsetRadius': 0x63
                                }
                            ]]
                    },
                    0x10: {
                        'radius': 0x41,
                        'damage': 0x5 / 0x6,
                        'passiveHealingBuff': 0x5 / 0x6,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x63
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x2 / 0x6,
                                    'offsetRadius': 0x63
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x4 / 0x6,
                                    'offsetRadius': 0x63
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x6 / 0x6,
                                    'offsetRadius': 0x63
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x8 / 0x6,
                                    'offsetRadius': 0x63
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0xa / 0x6,
                                    'offsetRadius': 0x63
                                }
                            ]]
                    }
                }
            },
            'Blade': {
                'damage': 0x1e / 0x3e8,
                'health': 0x28 * 0x3e8,
                'aliveHealingBuff': 0x3,
                'stickParentRotation': !![],
                'reload': 0x4,
                'radius': 0x19,
                'petalLayout': [[
                        {
                            'offsetAngle': 0x0,
                            'offsetRadius': 0x21
                        },
                        {
                            'offsetAngle': Math['PI'] * 0x2 / 0x5,
                            'offsetRadius': 0x21
                        },
                        {
                            'offsetAngle': Math['PI'] * 0x4 / 0x5,
                            'offsetRadius': 0x21
                        },
                        {
                            'offsetAngle': Math['PI'] * 0x6 / 0x5,
                            'offsetRadius': 0x21
                        },
                        {
                            'offsetAngle': Math['PI'] * 0x8 / 0x5,
                            'offsetRadius': 0x21
                        }
                    ]],
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'healScalers': ['aliveHealingBuff'],
                'override': {
                    0x7: { 'radius': 0x1e },
                    0x8: { 'radius': 0x23 },
                    0x9: { 'radius': 0x28 },
                    0xc: { 'radius': 0x2d },
                    0xd: { 'radius': 0x3c },
                    0xe: { 'radius': 0x4b },
                    0xf: { 'radius': 0x5a },
                    0x10: { 'radius': 0x69 }
                },
                'attackDistanceMult': 0x1 / attackPetalDistanceMult
            },
            'BladeProjectile': {
                'damage': 0x1e,
                'health': 0x28,
                'reload': 0x4,
                'radius': 0x19,
                'petalLayout': [[
                        {
                            'offsetAngle': 0x0,
                            'offsetRadius': 16.7
                        },
                        {
                            'offsetAngle': Math['PI'] * 0x2 / 0x5,
                            'offsetRadius': 16.7
                        },
                        {
                            'offsetAngle': Math['PI'] * 0x4 / 0x5,
                            'offsetRadius': 16.7
                        },
                        {
                            'offsetAngle': Math['PI'] * 0x6 / 0x5,
                            'offsetRadius': 16.7
                        },
                        {
                            'offsetAngle': Math['PI'] * 0x8 / 0x5,
                            'offsetRadius': 16.7
                        }
                    ]],
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'override': {
                    0x7: { 'radius': 0x1e },
                    0x8: { 'radius': 0x23 },
                    0x9: { 'radius': 0x28 },
                    0xc: { 'radius': 0x2d },
                    0xd: { 'radius': 0x3c },
                    0xe: { 'radius': 0x4b },
                    0xf: { 'radius': 0x5a },
                    0x10: { 'radius': 0x69 }
                },
                'attackDistanceMult': 0x1 / attackPetalDistanceMult
            },
            'Yucca': {
                'damage': 4.5,
                'health': 0xaa,
                'reload': 0x1,
                'passiveHealingBuff': 0x12,
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'healScalers': [
                    'passiveHealingBuff',
                    'tanksmithPassiveHealing'
                ],
                'override': {
                    0x5: { 'radius': 0xe },
                    0x7: { 'radius': 0x11 },
                    0xc: {
                        'radius': 0x13,
                        'passiveHealingBuff': 1.3
                    },
                    0xd: { 'radius': 0x1a },
                    0xe: {
                        'radius': 0x28,
                        'damage': 0x1 / 0x2,
                        'passiveHealingBuff': 1.1 / 0x3,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x15
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x2 / 0x3,
                                    'offsetRadius': 0x15
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x4 / 0x3,
                                    'offsetRadius': 0x15
                                }
                            ]]
                    },
                    0xf: {
                        'radius': 0x37,
                        'damage': 0x3 / 0x4,
                        'passiveHealingBuff': 0x3 / 0x5,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x1f
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x2 / 0x5,
                                    'offsetRadius': 0x1f
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x4 / 0x5,
                                    'offsetRadius': 0x1f
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x6 / 0x5,
                                    'offsetRadius': 0x1f
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x8 / 0x5,
                                    'offsetRadius': 0x1f
                                }
                            ]]
                    },
                    0x10: { 'radius': 0x43 }
                },
                'pvpOverride': { 0x0: { 'passiveHealingBuff': 0xf } },
                'tsPetalOverride': { 0x0: { 'passiveHealingBuff': 0x0 } },
                'tanksmithCooldown': 0xf,
                'tanksmithPassiveHealing': 2.4
            },
            'Shiny\x20Yucca': {
                'damage': 0x8,
                'health': 0x12c,
                'reload': 0.5,
                'healingBoost': 0.25 / 0x2,
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'override': {
                    0x1: { 'healingBoost': 1.25 * 0.275 / 1.5 },
                    0x2: { 'healingBoost': 1.25 * 0.303 / 1.5 },
                    0x3: { 'healingBoost': 1.25 * 0.333 / 1.5 },
                    0x4: { 'healingBoost': 1.25 * 0.366 / 1.5 },
                    0x5: {
                        'healingBoost': 1.25 * 0.402 / 1.51,
                        'radius': 0xe
                    },
                    0x6: { 'healingBoost': 1.25 * 0.443 / 1.52 },
                    0x7: {
                        'healingBoost': 1.25 * 0.487 / 1.53,
                        'radius': 0x11
                    },
                    0x8: { 'healingBoost': 1.25 * 0.536 / 1.54 },
                    0x9: { 'healingBoost': 1.25 * 0.589 / 1.55 },
                    0xa: { 'healingBoost': 1.25 * 0.648 / 1.56 },
                    0xb: { 'healingBoost': 1.25 * 0.713 / 1.57 },
                    0xc: {
                        'healingBoost': 1.25 * 0.785 / 1.58,
                        'radius': 0x13
                    },
                    0xd: {
                        'healingBoost': 1.25 * 0.863 / 1.59,
                        'radius': 0x1a
                    },
                    0xe: {
                        'healingBoost': 1.25 * 0.949 / 1.6 / 0x2,
                        'radius': 0x28,
                        'damage': 0x1 / 0x2,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x15
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x2 / 0x3,
                                    'offsetRadius': 0x15
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x4 / 0x3,
                                    'offsetRadius': 0x15
                                }
                            ]]
                    },
                    0xf: {
                        'healingBoost': 1.25 * 1.04 / 1.6 / 0x3,
                        'radius': 0x37,
                        'damage': 0x3 / 0x4,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x1f
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x2 / 0x5,
                                    'offsetRadius': 0x1f
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x4 / 0x5,
                                    'offsetRadius': 0x1f
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x6 / 0x5,
                                    'offsetRadius': 0x1f
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x8 / 0x5,
                                    'offsetRadius': 0x1f
                                }
                            ]]
                    },
                    0x10: {
                        'healingBoost': 1.25 * 1.15 / 1.6 / 0x3,
                        'radius': 0x43
                    },
                    0x11: { 'healingBoost': 1.25 * 1.26 / 1.6 / 0x3 },
                    0x12: { 'healingBoost': 1.25 * 1.39 / 1.6 / 0x3 }
                }
            },
            'Rose': {
                'damage': 0x1,
                'health': 0x5,
                'reload': 1.5,
                'heal': 0x1a,
                'healScalers': ['heal'],
                'override': {
                    0x7: { 'radius': 0x11 },
                    0xc: {
                        'radius': 0x13,
                        'health': 0x64,
                        'reload': 0x1,
                        'heal': 3.08 / 0x5
                    },
                    0xd: { 'radius': 0x22 },
                    0xe: {
                        'radius': 0x42,
                        'heal': 1.1,
                        'reload': 0.9
                    },
                    0xf: { 'heal': 1.05 },
                    0x10: { 'radius': 0x47 }
                },
                'pvpOverride': { 0x0: { 'heal': 0x14 } },
                'tsProjectileSpeed': 0x4,
                'tanksmithHp': 0x3e8,
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': [
                    'health',
                    'tanksmithHp'
                ],
                'ignoreAttackDistance': !![]
            },
            'RoseProjectile': {
                'damage': 0x1,
                'health': 0x19,
                'reload': 1.5,
                'heal': 0x1a,
                'healScalers': ['heal'],
                'override': {
                    0x7: { 'radius': 0x11 },
                    0xc: {
                        'radius': 0x13,
                        'health': 0x64,
                        'reload': 0x1,
                        'heal': 3.07 / 0x5
                    },
                    0xd: { 'radius': 0x22 },
                    0xe: {
                        'radius': 0x42,
                        'heal': 1.001
                    },
                    0xf: { 'heal': 1.05 },
                    0x10: { 'radius': 0x47 }
                },
                'pvpOverride': { 0x0: { 'heal': 0x14 } },
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health']
            },
            'Blood\x20Rose': {
                'damage': 0x1,
                'health': 0x61a8,
                'reload': 0.5,
                'passiveHealingStack': 0xf,
                'passiveHealingStackDuration': 0x14,
                'killsRequired': 0x4,
                'timeLimit': 0x3,
                'failDamage': 0x19,
                'healScalers': [
                    'passiveHealingStack',
                    'failDamage'
                ],
                'override': {
                    0x7: { 'radius': 0x11 },
                    0xc: { 'radius': 0x13 },
                    0xd: { 'radius': 0x22 },
                    0xe: { 'radius': 0x2e },
                    0xf: { 'radius': 0x38 },
                    0x10: { 'radius': 0x3d }
                },
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'ignoreAttackDistance': !![]
            },
            'Blood\x20RoseProjectile': {
                'damage': 0x1,
                'health': 0x61a8,
                'reload': 0.5,
                'passiveHealingStack': 0xf,
                'passiveHealingStackDuration': 0x14,
                'killsRequired': 0x4,
                'timeLimit': 0x3,
                'failDamage': 0x19,
                'healScalers': [
                    'passiveHealingStack',
                    'failDamage'
                ],
                'override': {
                    0x7: { 'radius': 0x11 },
                    0xc: { 'radius': 0x13 },
                    0xd: { 'radius': 0x22 },
                    0xe: { 'radius': 0x2e },
                    0xf: { 'radius': 0x38 },
                    0x10: { 'radius': 0x3d }
                },
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'ignoreAttackDistance': !![]
            },
            'Dust': {
                'damage': 0x3,
                'health': 0x19,
                'reload': 0x6,
                'radius': 0xf,
                'override': {
                    0xb: { 'reload': 0x3 },
                    0xc: { 'reload': 1.5 },
                    0xd: { 'reload': 0.7 },
                    0xe: { 'reload': 0.55 },
                    0xf: { 'reload': 0.45 },
                    0x10: { 'reload': 0.4 },
                    0x11: { 'reload': 0.35 },
                    0x12: { 'reload': 0x0 }
                },
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'ignoreAttackDistance': !![]
            },
            'DustProjectile': {
                'damage': 0x3,
                'health': 0x19,
                'reload': 0x6,
                'radius': 0xf,
                'override': {
                    0xb: { 'reload': 0x3 },
                    0xc: { 'reload': 1.5 },
                    0xd: { 'reload': 0.7 },
                    0xe: { 'reload': 0.55 },
                    0xf: { 'reload': 0.45 },
                    0x10: { 'reload': 0.4 },
                    0x11: { 'reload': 0.35 },
                    0x12: { 'reload': 0x0 }
                },
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health']
            },
            'Toxin': {
                'damage': 0x0,
                'health': 0.01,
                'reload': 0.7,
                'summonBodyPoison': [
                    0x16,
                    0xb
                ],
                'radius': 0xc,
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'override': {
                    0x5: { 'radius': 0xe },
                    0x7: { 'radius': 0x10 },
                    0xc: { 'radius': 0x12 },
                    0xd: { 'radius': 0x19 },
                    0xe: {
                        'radius': 0x2d,
                        'summonBodyPoison': 1.1
                    },
                    0xf: { 'radius': 0x41 },
                    0x10: { 'radius': 0x47 }
                },
                'ignoreAttackDistance': !![]
            },
            'Batrachotoxin': {
                'damage': 0x0,
                'health': 0x0,
                'reload': 0.7,
                'flowerBodyPoison': [
                    0x63,
                    0x21
                ],
                'radius': 0xc,
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'override': {
                    0x5: { 'radius': 0xe },
                    0x7: { 'radius': 0x10 },
                    0xc: { 'radius': 0x12 },
                    0xd: { 'radius': 0x19 },
                    0xe: {
                        'radius': 0x2d,
                        'flowerBodyPoison': 1.5
                    },
                    0xf: { 'radius': 0x37 }
                },
                'ignoreAttackDistance': !![]
            },
            'Neurotoxin': {
                'damage': 0x0,
                'health': 0x5,
                'reload': 2.5,
                'radius': 0xc,
                'slowdown': 0.11,
                'slowdownTime': 0xa,
                'poison': [
                    0x14 / 0x1e,
                    0x14
                ],
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'override': {
                    0x5: { 'radius': 0xe },
                    0x7: { 'radius': 0x10 },
                    0xc: { 'radius': 0x12 },
                    0xd: { 'radius': 0x19 },
                    0xe: {
                        'radius': 0x2d,
                        'poison': 1.1
                    },
                    0xf: { 'radius': 0x37 }
                },
                'ignoreAttackDistance': !![]
            },
            'NeurotoxinProjectile': {
                'damage': 0.1,
                'health': 0x1f4,
                'reload': 0x3,
                'radius': 0xc,
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'override': {
                    0x5: { 'radius': 0xe },
                    0x7: { 'radius': 0x10 },
                    0xc: { 'radius': 0x12 },
                    0xd: { 'radius': 0x19 },
                    0xe: { 'radius': 0x2d },
                    0xf: { 'radius': 0x37 }
                },
                'ignoreAttackDistance': !![]
            },
            'NeurotoxinProjectilePuddle': {
                'damage': 0x0,
                'health': 0x3a35294400,
                'reload': 2.5,
                'radius': 0x14 * 1.25,
                'slowdown': 0.11,
                'slowdownTime': 0xa,
                'poison': [
                    0x14 / 0x1e,
                    0x14
                ],
                'override': {
                    0x1: { 'radius': 27.5 * 1.3 * 0x2 },
                    0x2: { 'radius': 0x23 * 1.3 * 0x2 },
                    0x3: { 'radius': 47.5 * 1.3 * 0x2 },
                    0x4: { 'radius': 0x37 * 1.3 * 0x2 },
                    0x5: { 'radius': 0x41 * 1.3 * 0x2 },
                    0x6: { 'radius': 0x50 * 1.3 * 0x2 },
                    0x7: { 'radius': 0x64 * 1.3 * 0x2 },
                    0x8: { 'radius': 0x7d * 1.3 * 0x2 },
                    0x9: { 'radius': 0x9b * 1.3 * 0x2 },
                    0xa: { 'radius': 0xbe * 1.3 * 0x2 },
                    0xb: { 'radius': 0xe6 * 1.3 * 0x2 },
                    0xc: { 'radius': 0x113 * 1.3 * 0x2 },
                    0xd: { 'radius': 0x177 * 1.3 * 0x2 },
                    0xe: { 'radius': 0x181 * 1.3 * 0x2 },
                    0xf: { 'radius': 0x18b * 1.3 * 0x2 },
                    0x10: { 'radius': 0x195 * 1.3 * 0x2 },
                    0x11: { 'radius': 0x19f * 1.3 * 0x2 }
                },
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health']
            },
            'Trident': {
                'damage': 0x1,
                'health': 0x5dc,
                'reload': 0x5,
                'poison': [
                    0x9 / 0x1e,
                    0x9
                ],
                'radius': 0xc,
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'override': {
                    0x5: { 'radius': 0xe },
                    0x7: {
                        'radius': 0x10,
                        'reload': 4.5
                    },
                    0x8: { 'reload': 0x4 },
                    0x9: { 'reload': 3.5 },
                    0xa: { 'reload': 0x3 },
                    0xb: { 'reload': 2.5 },
                    0xc: {
                        'radius': 0x12,
                        'reload': 0x2
                    },
                    0xd: {
                        'radius': 0x16,
                        'reload': 1.5,
                        'health': 0x4
                    },
                    0xe: {
                        'radius': 0x1a,
                        'reload': 0x1,
                        'health': 0x4
                    },
                    0xf: {
                        'radius': 0x1e,
                        'reload': 0.8
                    },
                    0x10: {
                        'radius': 0x22,
                        'reload': 0.67
                    },
                    0x11: {
                        'radius': 0x26,
                        'reload': 0.64
                    }
                },
                'pvpOverride': {
                    0x0: {
                        'reload': Infinity,
                        'poison': [
                            0x0,
                            0x0
                        ]
                    }
                },
                'ignoreAttackDistance': !![]
            },
            'Dahlia': {
                'damage': 0x1,
                'health': 0x64,
                'reload': 3.5,
                'heal': 10.7,
                'radius': 0x7,
                'tanksmithCooldown': 0x1e,
                'healScalers': ['heal'],
                'override': {
                    0xc: {
                        'radius': 0x8,
                        'heal': 0x1 / 0x9,
                        'reload': 0.1,
                        'damage': 0x3 / 0x5,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x9
                                },
                                {
                                    'offsetAngle': Math['PI'] / 0x5 * 0x2,
                                    'offsetRadius': 0x9
                                },
                                {
                                    'offsetAngle': Math['PI'] / 0x5 * 0x4,
                                    'offsetRadius': 0x9
                                },
                                {
                                    'offsetAngle': Math['PI'] / 0x5 * 0x6,
                                    'offsetRadius': 0x9
                                },
                                {
                                    'offsetAngle': Math['PI'] / 0x5 * 0x8,
                                    'offsetRadius': 0x9
                                }
                            ]]
                    },
                    0xe: {
                        'radius': 0xc,
                        'heal': 0.9,
                        'damage': 0x5 / 0x7,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x9
                                },
                                {
                                    'offsetAngle': Math['PI'] / 0x7 * 0x2,
                                    'offsetRadius': 0x9
                                },
                                {
                                    'offsetAngle': Math['PI'] / 0x7 * 0x4,
                                    'offsetRadius': 0x9
                                },
                                {
                                    'offsetAngle': Math['PI'] / 0x7 * 0x6,
                                    'offsetRadius': 0x9
                                },
                                {
                                    'offsetAngle': Math['PI'] / 0x7 * 0x8,
                                    'offsetRadius': 0x9
                                },
                                {
                                    'offsetAngle': Math['PI'] / 0x7 * 0xa,
                                    'offsetRadius': 0x9
                                },
                                {
                                    'offsetAngle': Math['PI'] / 0x7 * 0xc,
                                    'offsetRadius': 0x9
                                }
                            ]]
                    },
                    0xf: { 'radius': 0x10 },
                    0x10: { 'radius': 0x11 }
                },
                'pvpOverride': { 0x0: { 'heal': 0xd } },
                'petalLayout': [[
                        {},
                        {
                            'offsetAngle': -Math['PI'] / 0x6,
                            'offsetRadius': 0x10
                        },
                        {
                            'offsetAngle': Math['PI'] / 0x6,
                            'offsetRadius': 0x10
                        }
                    ]],
                'tsProjectileSpeed': 0x4,
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'ignoreAttackDistance': !![]
            },
            'DahliaProjectile': {
                'damage': 0x1,
                'health': 0x64,
                'reload': 3.5,
                'heal': 10.7,
                'radius': 0x7,
                'healScalers': ['heal'],
                'override': {
                    0xc: {
                        'radius': 0x8,
                        'heal': 0x1 / 0x9,
                        'damage': 0x3 / 0x5
                    },
                    0xe: {
                        'radius': 0xc,
                        'heal': 0.9,
                        'damage': 0x5 / 0x7,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x9
                                },
                                {
                                    'offsetAngle': Math['PI'] / 0x7 * 0x2,
                                    'offsetRadius': 0x9
                                },
                                {
                                    'offsetAngle': Math['PI'] / 0x7 * 0x4,
                                    'offsetRadius': 0x9
                                },
                                {
                                    'offsetAngle': Math['PI'] / 0x7 * 0x6,
                                    'offsetRadius': 0x9
                                },
                                {
                                    'offsetAngle': Math['PI'] / 0x7 * 0x8,
                                    'offsetRadius': 0x9
                                },
                                {
                                    'offsetAngle': Math['PI'] / 0x7 * 0xa,
                                    'offsetRadius': 0x9
                                },
                                {
                                    'offsetAngle': Math['PI'] / 0x7 * 0xc,
                                    'offsetRadius': 0x9
                                }
                            ]]
                    },
                    0xf: { 'radius': 0x10 },
                    0x10: { 'radius': 0x11 }
                },
                'pvpOverride': { 0x0: { 'heal': 0xd } },
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health']
            },
            'Shell': {
                'damage': 0x5,
                'health': 0x5,
                'reload': 1.7,
                'shield': 0x16,
                'override': {
                    0xc: {
                        'shield': 0.1,
                        'reload': 0.1,
                        'radius': 0x14,
                        'health': 0x4,
                        'damage': 0x1 / 0x2,
                        'petalLayout': [
                            [{}],
                            [{}],
                            [{}]
                        ]
                    },
                    0xd: {
                        'shield': 0x3 / 0x5,
                        'radius': 0x1e,
                        'health': 1.25,
                        'damage': 0x3 / 0x5,
                        'petalLayout': [
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}]
                        ]
                    },
                    0xe: {
                        'shield': 0x5 / 0x6,
                        'radius': 0x28,
                        'damage': 0x5 / 0x6,
                        'petalLayout': [
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}]
                        ]
                    },
                    0xf: {
                        'shield': 6.3 / 0x7,
                        'radius': 0x2d,
                        'damage': 0x6 / 0x7,
                        'petalLayout': [
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}]
                        ]
                    },
                    0x10: {
                        'shield': 0x9 / 0x7,
                        'radius': 0x37,
                        'damage': 0x7 / 0x8,
                        'petalLayout': [
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}]
                        ]
                    }
                },
                'pvpOverride': {},
                'healScalers': ['shield'],
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'ignoreAttackDistance': !![]
            },
            'ShellProjectile': {
                'damage': 0x5,
                'health': 0x5,
                'reload': 1.7,
                'shield': 0x11,
                'override': {
                    0xc: {
                        'shield': 0.1,
                        'reload': 0.1,
                        'radius': 0x14,
                        'health': 0x4,
                        'damage': 0x1 / 0x2,
                        'petalLayout': [
                            [{}],
                            [{}],
                            [{}]
                        ]
                    },
                    0xd: {
                        'shield': 0x3 / 0x5,
                        'radius': 0x1e,
                        'health': 1.25,
                        'damage': 0x3 / 0x5,
                        'petalLayout': [
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}]
                        ]
                    },
                    0xe: {
                        'shield': 0x5 / 0x6,
                        'radius': 0x28,
                        'damage': 0x5 / 0x6,
                        'petalLayout': [
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}]
                        ]
                    },
                    0xf: {
                        'shield': 6.3 / 0x7,
                        'radius': 0x2d,
                        'damage': 0x6 / 0x7,
                        'petalLayout': [
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}]
                        ]
                    },
                    0x10: {
                        'shield': 0x7 / 0x8,
                        'radius': 0x37,
                        'damage': 0x7 / 0x8,
                        'petalLayout': [
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}]
                        ]
                    }
                },
                'pvpOverride': {},
                'healScalers': ['shield'],
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'ignoreAttackDistance': !![]
            },
            'Yin\x20Yang': {
                'damage': 0x24,
                'health': 0xa,
                'reload': 0x1,
                'tsPetalOverride': { 0x0: { 'radius': 0x2 } },
                'override': {
                    0xc: { 'radius': 0x28 },
                    0xd: {
                        'damage': 1.44,
                        'radius': 0x3c
                    },
                    0xe: {
                        'damage': 1.23,
                        'radius': 0x64
                    },
                    0xf: {
                        'damage': 1.23,
                        'radius': 0x78
                    },
                    0x10: {
                        'radius': 1.23,
                        'radius': 0x8c
                    }
                },
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health']
            },
            'Wing': {
                'damage': 61.5,
                'health': 0xa,
                'reload': 1.5,
                'radius': 0xe,
                'tanksmithRadius': 0x24,
                'tsPetalOverride': { 0x0: { 'radius': 2.5 } },
                'override': {
                    0x7: { 'radius': 0x1c },
                    0xc: {
                        'radius': 0x28,
                        'petalLayout': [
                            [{}],
                            [{}]
                        ],
                        'damage': 0x1 / 0x2
                    },
                    0xd: {
                        'radius': 0x37,
                        'damage': 0x7 / 0x6
                    },
                    0xe: {
                        'petalLayout': [
                            [{}],
                            [{}],
                            [{}],
                            [{}]
                        ],
                        'damage': 2.2 / 0x4
                    },
                    0xf: {
                        'petalLayout': [
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}]
                        ],
                        'damage': 0x4 / 0x5,
                        'radius': 0x46
                    },
                    0x10: {
                        'petalLayout': [
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}]
                        ],
                        'damage': 0x5 / 0x6,
                        'radius': 0x4d
                    }
                },
                'wingExtraRange': 0.5,
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health']
            },
            'Shiny\x20Wing': {
                'damage': 61.5,
                'health': 0x19,
                'maxDamage': 163.5,
                'reload': 1.5,
                'radius': 0xe,
                'tanksmithRadius': 0x12,
                'tsPetalOverride': { 0x0: { 'radius': 0x5 } },
                'tsProjectileSpeed': 0xf,
                'override': {
                    0x7: { 'radius': 0x1c },
                    0xc: {
                        'radius': 0x28,
                        'petalLayout': [
                            [{}],
                            [{}]
                        ],
                        'damage': 0x1 / 0x2,
                        'maxDamage': 0x1 / 0x2
                    },
                    0xd: {
                        'radius': 0x37,
                        'damage': 0x7 / 0x6,
                        'maxDamage': 0x7 / 0x6
                    },
                    0xe: {
                        'petalLayout': [
                            [{}],
                            [{}],
                            [{}],
                            [{}]
                        ],
                        'damage': 2.2 / 0x3,
                        'maxDamage': 2.2 / 0x3
                    },
                    0xf: {
                        'petalLayout': [
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}]
                        ],
                        'damage': 0x4 / 0x5 * 1.1,
                        'maxDamage': 0x4 / 0x5 * 1.1
                    },
                    0x10: {
                        'petalLayout': [
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}]
                        ],
                        'damage': 0x5 / 0x6 * 1.1,
                        'maxDamage': 0x5 / 0x6 * 1.1,
                        'radius': 0x4d
                    }
                },
                'wingExtraRange': 0.5,
                'petalLayout': [[{}]],
                'damageScalers': [
                    'damage',
                    'maxDamage'
                ],
                'healthScalers': ['health']
            },
            'Oranges': {
                'damage': 18.5,
                'health': 0xa,
                'reload': 2.3,
                'radius': 0xc,
                'stickParentRotation': !![],
                'petalLayout': [[
                        {},
                        {
                            'offsetAngle': -Math['PI'] / 0x6,
                            'offsetRadius': 0x1e
                        },
                        {
                            'offsetAngle': Math['PI'] / 0x6,
                            'offsetRadius': 0x1e
                        }
                    ]],
                'override': {
                    0x7: {
                        'damage': 0x3 / 0x4,
                        'radius': 0xd,
                        'petalLayout': [[
                                {},
                                {
                                    'offsetAngle': -Math['PI'] / 0x6,
                                    'offsetRadius': 0x1e
                                },
                                {
                                    'offsetAngle': Math['PI'] / 0x6,
                                    'offsetRadius': 0x1e
                                },
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 51.9
                                }
                            ]]
                    },
                    0xc: {
                        'damage': 0x5 / 0x3,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0xf
                                },
                                {
                                    'offsetAngle': Math['PI'] / 0x5 * 0x2,
                                    'offsetRadius': 0xf
                                },
                                {
                                    'offsetAngle': Math['PI'] / 0x5 * 0x4,
                                    'offsetRadius': 0xf
                                },
                                {
                                    'offsetAngle': Math['PI'] / 0x5 * 0x6,
                                    'offsetRadius': 0xf
                                },
                                {
                                    'offsetAngle': Math['PI'] / 0x5 * 0x8,
                                    'offsetRadius': 0xf
                                }
                            ]]
                    },
                    0xd: {
                        'radius': 0x2d,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x32
                                },
                                {
                                    'offsetAngle': Math['PI'] / 0x5 * 0x2,
                                    'offsetRadius': 0x32
                                },
                                {
                                    'offsetAngle': Math['PI'] / 0x5 * 0x4,
                                    'offsetRadius': 0x32
                                },
                                {
                                    'offsetAngle': Math['PI'] / 0x5 * 0x6,
                                    'offsetRadius': 0x32
                                },
                                {
                                    'offsetAngle': Math['PI'] / 0x5 * 0x8,
                                    'offsetRadius': 0x32
                                }
                            ]]
                    },
                    0xe: {
                        'damage': 0x5 / 0x6 * 0xa / 0x9,
                        'radius': 0x3c,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x4b
                                },
                                {
                                    'offsetAngle': Math['PI'] / 0x6 * 0x2,
                                    'offsetRadius': 0x4b
                                },
                                {
                                    'offsetAngle': Math['PI'] / 0x6 * 0x4,
                                    'offsetRadius': 0x4b
                                },
                                {
                                    'offsetAngle': Math['PI'] / 0x6 * 0x6,
                                    'offsetRadius': 0x4b
                                },
                                {
                                    'offsetAngle': Math['PI'] / 0x6 * 0x8,
                                    'offsetRadius': 0x4b
                                },
                                {
                                    'offsetAngle': Math['PI'] / 0x6 * 0xa,
                                    'offsetRadius': 0x4b
                                }
                            ]]
                    },
                    0xf: {
                        'damage': 0x6 / 0x7,
                        'radius': 0x46,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x55
                                },
                                {
                                    'offsetAngle': Math['PI'] / 0x7 * 0x2,
                                    'offsetRadius': 0x55
                                },
                                {
                                    'offsetAngle': Math['PI'] / 0x7 * 0x4,
                                    'offsetRadius': 0x55
                                },
                                {
                                    'offsetAngle': Math['PI'] / 0x7 * 0x6,
                                    'offsetRadius': 0x55
                                },
                                {
                                    'offsetAngle': Math['PI'] / 0x7 * 0x8,
                                    'offsetRadius': 0x55
                                },
                                {
                                    'offsetAngle': Math['PI'] / 0x7 * 0xa,
                                    'offsetRadius': 0x55
                                },
                                {
                                    'offsetAngle': Math['PI'] / 0x7 * 0xc,
                                    'offsetRadius': 0x55
                                }
                            ]]
                    },
                    0x10: { 'radius': 0x5a }
                },
                'tanksmithRadius': 0x28,
                'tanksmithShootCooldown': 0xa,
                'tanksmithCooldown': 0xb4,
                'tanksmithBarrelNum': 0x3,
                'tsPetalOverride': {
                    0x0: {
                        'radius': 0x2,
                        'damage': 0.66
                    }
                },
                'tsProjectileSpeed': 0xc,
                'tsProjectileLifetime': 0x5a,
                'tsBarrelData': [
                    {
                        'angle': 0x0,
                        'behavior': 'barrelTestBehavior'
                    },
                    {
                        'angle': Math['PI'] * 0x2 / 0x3,
                        'behavior': 'barrelTestBehavior'
                    },
                    {
                        'angle': Math['PI'] * 0x4 / 0x3,
                        'behavior': 'barrelTestBehavior'
                    }
                ],
                'damageScalers': ['damage'],
                'healthScalers': ['health']
            },
            'Blood\x20Oranges': {
                'damage': 0x1d,
                'health': 0xf,
                'reload': 2.3,
                'radius': 0xc,
                'damageHeal': -0.1,
                'stickParentRotation': !![],
                'petalLayout': [[
                        {},
                        {
                            'offsetAngle': -Math['PI'] / 0x6,
                            'offsetRadius': 0x1e
                        },
                        {
                            'offsetAngle': Math['PI'] / 0x6,
                            'offsetRadius': 0x1e
                        }
                    ]],
                'override': {
                    0x7: {
                        'damage': 0x3 / 0x4,
                        'radius': 0xd,
                        'petalLayout': [[
                                {},
                                {
                                    'offsetAngle': -Math['PI'] / 0x6,
                                    'offsetRadius': 0x1e
                                },
                                {
                                    'offsetAngle': Math['PI'] / 0x6,
                                    'offsetRadius': 0x1e
                                },
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 51.9
                                }
                            ]]
                    },
                    0xc: {
                        'damage': 0x5 / 0x3,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0xf
                                },
                                {
                                    'offsetAngle': Math['PI'] / 0x5 * 0x2,
                                    'offsetRadius': 0xf
                                },
                                {
                                    'offsetAngle': Math['PI'] / 0x5 * 0x4,
                                    'offsetRadius': 0xf
                                },
                                {
                                    'offsetAngle': Math['PI'] / 0x5 * 0x6,
                                    'offsetRadius': 0xf
                                },
                                {
                                    'offsetAngle': Math['PI'] / 0x5 * 0x8,
                                    'offsetRadius': 0xf
                                }
                            ]]
                    },
                    0xd: {
                        'radius': 0x2d,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x32
                                },
                                {
                                    'offsetAngle': Math['PI'] / 0x5 * 0x2,
                                    'offsetRadius': 0x32
                                },
                                {
                                    'offsetAngle': Math['PI'] / 0x5 * 0x4,
                                    'offsetRadius': 0x32
                                },
                                {
                                    'offsetAngle': Math['PI'] / 0x5 * 0x6,
                                    'offsetRadius': 0x32
                                },
                                {
                                    'offsetAngle': Math['PI'] / 0x5 * 0x8,
                                    'offsetRadius': 0x32
                                }
                            ]]
                    },
                    0xe: {
                        'damage': 0x5 / 0x6 * 0xa / 0x9,
                        'radius': 0x3c,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x4b
                                },
                                {
                                    'offsetAngle': Math['PI'] / 0x6 * 0x2,
                                    'offsetRadius': 0x4b
                                },
                                {
                                    'offsetAngle': Math['PI'] / 0x6 * 0x4,
                                    'offsetRadius': 0x4b
                                },
                                {
                                    'offsetAngle': Math['PI'] / 0x6 * 0x6,
                                    'offsetRadius': 0x4b
                                },
                                {
                                    'offsetAngle': Math['PI'] / 0x6 * 0x8,
                                    'offsetRadius': 0x4b
                                },
                                {
                                    'offsetAngle': Math['PI'] / 0x6 * 0xa,
                                    'offsetRadius': 0x4b
                                }
                            ]]
                    },
                    0xf: {
                        'damage': 0x6 / 0x7 * 1.2,
                        'radius': 0x46,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x55
                                },
                                {
                                    'offsetAngle': Math['PI'] / 0x7 * 0x2,
                                    'offsetRadius': 0x55
                                },
                                {
                                    'offsetAngle': Math['PI'] / 0x7 * 0x4,
                                    'offsetRadius': 0x55
                                },
                                {
                                    'offsetAngle': Math['PI'] / 0x7 * 0x6,
                                    'offsetRadius': 0x55
                                },
                                {
                                    'offsetAngle': Math['PI'] / 0x7 * 0x8,
                                    'offsetRadius': 0x55
                                },
                                {
                                    'offsetAngle': Math['PI'] / 0x7 * 0xa,
                                    'offsetRadius': 0x55
                                },
                                {
                                    'offsetAngle': Math['PI'] / 0x7 * 0xc,
                                    'offsetRadius': 0x55
                                }
                            ]]
                    },
                    0x10: {
                        'radius': 0x5a,
                        'damage': 1.2
                    }
                },
                'tanksmithRadius': 0x28,
                'tanksmithShootCooldown': 0xa,
                'tanksmithCooldown': 0xb4,
                'tanksmithBarrelNum': 0x3,
                'tsPetalOverride': {
                    0x0: {
                        'radius': 0x2,
                        'damage': 0.66,
                        'damageHeal': -0x1
                    }
                },
                'tsProjectileSpeed': 0xc,
                'tsProjectileLifetime': 0x5a,
                'tsBarrelData': [
                    {
                        'angle': 0x0,
                        'behavior': 'barrelTestBehavior'
                    },
                    {
                        'angle': Math['PI'] * 0x2 / 0x3,
                        'behavior': 'barrelTestBehavior'
                    },
                    {
                        'angle': Math['PI'] * 0x4 / 0x3,
                        'behavior': 'barrelTestBehavior'
                    }
                ],
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'healScalers': ['damageHeal']
            },
            'Spikes': {
                'damage': 0x2d,
                'health': 0x14,
                'reload': 2.29,
                'radius': 0xc,
                'stickParentRotation': !![],
                'petalLayout': [[
                        {},
                        {
                            'offsetAngle': -Math['PI'] / 0x6,
                            'offsetRadius': 0x1e
                        },
                        {
                            'offsetAngle': Math['PI'] / 0x6,
                            'offsetRadius': 0x1e
                        }
                    ]],
                'override': {
                    0xc: {
                        'radius': 0x1e,
                        'petalLayout': [[
                                {},
                                {
                                    'offsetAngle': -Math['PI'] / 0x6,
                                    'offsetRadius': 0x3c
                                },
                                {
                                    'offsetAngle': Math['PI'] / 0x6,
                                    'offsetRadius': 0x3c
                                }
                            ]]
                    },
                    0xd: {
                        'radius': 0x2d,
                        'petalLayout': [[
                                {},
                                {
                                    'offsetAngle': -Math['PI'] / 0x6,
                                    'offsetRadius': 0x5a
                                },
                                {
                                    'offsetAngle': Math['PI'] / 0x6,
                                    'offsetRadius': 0x5a
                                }
                            ]]
                    },
                    0xe: {
                        'radius': 0x3c,
                        'petalLayout': [[
                                {},
                                {
                                    'offsetAngle': -Math['PI'] / 0x6,
                                    'offsetRadius': 0x78
                                },
                                {
                                    'offsetAngle': Math['PI'] / 0x6,
                                    'offsetRadius': 0x78
                                }
                            ]]
                    },
                    0xf: { 'radius': 0x4b },
                    0x10: { 'radius': 0x5a }
                },
                'tsBarrelData': [
                    {
                        'angle': 0x0,
                        'behavior': 'barrelTestBehavior'
                    },
                    {
                        'angle': Math['PI'] * 0x2 / 0x3,
                        'behavior': 'barrelTestBehavior'
                    },
                    {
                        'angle': Math['PI'] * 0x4 / 0x3,
                        'behavior': 'barrelTestBehavior'
                    }
                ],
                'damageScalers': ['damage'],
                'healthScalers': ['health']
            },
            'Ikea': {
                'damage': 0xc,
                'health': 0xc,
                'reload': 2.8,
                'radius': 0x10,
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health']
            },
            'IkeaChair': {
                'damage': 0x3,
                'health': 0x28,
                'reload': 0x2,
                'radius': 0x10,
                'pvpOverride': {
                    'damage': 0.5,
                    'health': 0.1
                },
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health']
            },
            'Ruby': {
                'damage': 0xa,
                'health': 0xa,
                'reload': 0x1,
                'radius': 0xc,
                'petLifespan': 12.5,
                'maxReviveRarity': 0x0,
                'minimumConvert': 0x0,
                'override': {
                    0x1: { 'maxReviveRarity': 0x1 },
                    0x2: { 'maxReviveRarity': 0x2 },
                    0x3: { 'maxReviveRarity': 0x3 },
                    0x4: { 'maxReviveRarity': 0x4 },
                    0x5: { 'maxReviveRarity': 0x5 },
                    0x6: { 'maxReviveRarity': 0x6 },
                    0x7: { 'maxReviveRarity': 0x7 },
                    0x8: { 'maxReviveRarity': 0x8 },
                    0x9: { 'maxReviveRarity': 0x9 },
                    0xa: { 'maxReviveRarity': 0xa },
                    0xb: { 'maxReviveRarity': 0xb },
                    0xc: { 'maxReviveRarity': 0xc },
                    0xd: {
                        'radius': 0x14,
                        'petLifespan': 0xf,
                        'maxReviveRarity': 0xd,
                        'minimumConvert': 0x11
                    },
                    0xe: {
                        'radius': 0x1e,
                        'petLifespan': 0x14,
                        'maxReviveRarity': 0x10,
                        'minimumConvert': 0x13
                    },
                    0xf: {
                        'radius': 0x28,
                        'petLifespan': 32.5,
                        'maxReviveRarity': 0x13,
                        'minimumConvert': 0x16
                    },
                    0x10: {
                        'radius': 0x32,
                        'petLifespan': 36.7,
                        'maxReviveRarity': 0x17,
                        'minimumConvert': 0x1a
                    }
                },
                'pvpOverride': {
                    0x0: {
                        'petLifespan': 0.1,
                        'maxReviveRarity': 0x4
                    },
                    0xb: { 'petLifespan': 0x8 },
                    0xc: { 'petLifespan': 0xa },
                    0xd: { 'petLifespan': 0xc },
                    0xe: { 'petLifespan': 0x10 },
                    0xf: { 'petLifespan': 0x14 },
                    0x10: { 'petLifespan': 0x15 },
                    0x11: { 'petLifespan': 0x16 },
                    0x12: { 'petLifespan': 0x17 }
                },
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health']
            },
            'Shiny\x20Ruby': {
                'damage': 0xa,
                'health': 0xa,
                'reload': 0x1,
                'radius': 0xc,
                'petLifespan': 18.75,
                'maxReviveRarity': 0x0,
                'minimumConvert': 0x0,
                'override': {
                    0x1: { 'maxReviveRarity': 0x1 },
                    0x2: { 'maxReviveRarity': 0x2 },
                    0x3: { 'maxReviveRarity': 0x3 },
                    0x4: { 'maxReviveRarity': 0x4 },
                    0x5: { 'maxReviveRarity': 0x5 },
                    0x6: { 'maxReviveRarity': 0x6 },
                    0x7: { 'maxReviveRarity': 0x7 },
                    0x8: { 'maxReviveRarity': 0x8 },
                    0x9: { 'maxReviveRarity': 0x9 },
                    0xa: { 'maxReviveRarity': 0xa },
                    0xb: { 'maxReviveRarity': 0xb },
                    0xc: { 'maxReviveRarity': 0xc },
                    0xd: {
                        'radius': 0x14,
                        'petLifespan': 22.5,
                        'maxReviveRarity': 0xd,
                        'minimumConvert': 0x11
                    },
                    0xe: {
                        'radius': 0x1e,
                        'petLifespan': 0x1e,
                        'maxReviveRarity': 0x10,
                        'minimumConvert': 0x13
                    },
                    0xf: {
                        'radius': 0x28,
                        'petLifespan': 48.75,
                        'maxReviveRarity': 0x13,
                        'minimumConvert': 0x16
                    },
                    0x10: {
                        'radius': 0x32,
                        'petLifespan': 0x37,
                        'maxReviveRarity': 0x17,
                        'minimumConvert': 0x1a
                    },
                    0x11: {
                        'radius': 0x3c,
                        'petLifespan': 0x37,
                        'maxReviveRarity': 0x1a,
                        'minimumConvert': 0x1d
                    }
                },
                'pvpOverride': {
                    0x0: {
                        'petLifespan': 0.15,
                        'maxReviveRarity': 0x4
                    },
                    0xb: { 'petLifespan': 0xc },
                    0xc: { 'petLifespan': 0xf },
                    0xd: { 'petLifespan': 0x12 },
                    0xe: { 'petLifespan': 0x18 },
                    0xf: { 'petLifespan': 0x1e },
                    0x10: { 'petLifespan': 31.5 },
                    0x11: { 'petLifespan': 0x21 },
                    0x12: { 'petLifespan': 34.5 }
                },
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health']
            },
            'Sapphire': {
                'damage': 0x0,
                'health': 0x1f4,
                'reload': 0x8,
                'radius': 0xc,
                'maxConversionRarity': 0x2,
                'petalLayout': [[{}]],
                'override': {
                    0x1: { 'maxConversionRarity': 0x3 },
                    0x2: { 'maxConversionRarity': 0x4 },
                    0x3: { 'maxConversionRarity': 0x5 },
                    0x4: { 'maxConversionRarity': 0x6 },
                    0x5: { 'maxConversionRarity': 0x7 },
                    0x6: { 'maxConversionRarity': 0x8 },
                    0x7: { 'maxConversionRarity': 0x9 },
                    0x8: { 'maxConversionRarity': 0xa },
                    0x9: { 'maxConversionRarity': 0xb },
                    0xa: { 'maxConversionRarity': 0xc },
                    0xb: { 'maxConversionRarity': 0xd },
                    0xc: { 'maxConversionRarity': 0xe },
                    0xd: {
                        'radius': 0x14,
                        'maxConversionRarity': 0x10
                    },
                    0xe: {
                        'radius': 0x19,
                        'maxConversionRarity': 0x14
                    },
                    0xf: {
                        'radius': 0x1e,
                        'maxConversionRarity': 0x18
                    },
                    0x10: {
                        'radius': 0x23,
                        'maxConversionRarity': 0x1b
                    },
                    0x11: {
                        'reload': 0x1,
                        'maxConversionRarity': 0x1e
                    },
                    0x12: {
                        'reload': 0.1,
                        'maxConversionRarity': 0x21
                    }
                },
                'pvpOverride': { 0x0: { 'reload': 0x3b9aca00 } },
                'tanksmithShootCooldown': 0x5 * 0x1e,
                'tanksmithCooldown': 0x14 * 0x1e,
                'damageScalers': ['damage'],
                'healthScalers': ['health']
            },
            'Emerald': {
                'damage': 0x0,
                'health': 0x1f4,
                'reload': 0xa,
                'radius': 0xc,
                'maxDuplicationRarity': 0x2,
                'petalLayout': [[{}]],
                'override': {
                    0x1: { 'maxDuplicationRarity': 0x3 },
                    0x2: { 'maxDuplicationRarity': 0x4 },
                    0x3: { 'maxDuplicationRarity': 0x5 },
                    0x4: { 'maxDuplicationRarity': 0x6 },
                    0x5: { 'maxDuplicationRarity': 0x7 },
                    0x6: { 'maxDuplicationRarity': 0x8 },
                    0x7: { 'maxDuplicationRarity': 0x9 },
                    0x8: { 'maxDuplicationRarity': 0xa },
                    0x9: { 'maxDuplicationRarity': 0xb },
                    0xa: { 'maxDuplicationRarity': 0xc },
                    0xb: { 'maxDuplicationRarity': 0xd },
                    0xc: {
                        'reload': 0x6,
                        'maxDuplicationRarity': 0xe
                    },
                    0xd: {
                        'reload': 0x5,
                        'radius': 0x14,
                        'maxDuplicationRarity': 0x10
                    },
                    0xe: {
                        'radius': 0x19,
                        'maxDuplicationRarity': 0x14
                    },
                    0xf: {
                        'radius': 0x1e,
                        'maxDuplicationRarity': 0x18
                    },
                    0x10: {
                        'radius': 0x23,
                        'maxDuplicationRarity': 0x1b
                    },
                    0x11: {
                        'reload': 0x1,
                        'maxDuplicationRarity': 0x1e
                    },
                    0x12: {
                        'reload': 0.1,
                        'maxDuplicationRarity': 0x21
                    }
                },
                'pvpOverride': { 0x0: { 'reload': 0x3b9aca00 } },
                'tanksmithShootCooldown': 0x5 * 0x1e,
                'tanksmithCooldown': 0x14 * 0x1e,
                'damageScalers': ['damage'],
                'healthScalers': ['health']
            },
            'Amulet\x20of\x20Divergence': {
                'damage': 0x0,
                'health': 0xc350,
                'reload': 0x168,
                'radius': 0xc,
                'mana': 0x0,
                'petalLayout': [[{}]],
                'override': {
                    0xc: {
                        'reload': 0x9,
                        'mana': 0x1f4
                    },
                    0xd: {
                        'reload': 0x8,
                        'mana': 0x3e8
                    },
                    0xe: {
                        'reload': 0x7,
                        'mana': 0xd05,
                        'radius': 0x60
                    },
                    0xf: {
                        'reload': 0x6,
                        'mana': 0x2710,
                        'radius': 0x68
                    },
                    0x10: {
                        'reload': 0x5,
                        'mana': 0x8235,
                        'radius': 0x7c
                    },
                    0x12: {
                        'reload': 0.1,
                        'mana': 0x186a0
                    }
                },
                'pvpOverride': { 0x0: { 'reload': 0x3b9aca00 } },
                'tanksmithCooldown': 0x3 * 0x1e,
                'damageScalers': ['damage'],
                'healthScalers': ['health']
            },
            'Shard\x20of\x20Divergence': {
                'damage': 0x0,
                'health': 0xc350,
                'reload': 0x5,
                'radius': 0x6,
                'useLimit': 0x0,
                'petalLayout': [[{}]],
                'override': {},
                'pvpOverride': { 0x0: { 'reload': 0x3b9aca00 } },
                'damageScalers': ['damage'],
                'healthScalers': ['health']
            },
            'Amulet\x20of\x20Grace': {
                'damage': 0x0,
                'health': 0xc350,
                'reload': 0x5,
                'radius': 0xc,
                'petalLayout': [[{}]],
                'mana': 0x0,
                'override': {
                    0xc: {
                        'reload': 0x8,
                        'mana': 0x3e8
                    },
                    0xd: {
                        'reload': 0x4,
                        'mana': 0x9c4
                    },
                    0xe: {
                        'reload': 0x3,
                        'radius': 0x60,
                        'mana': 0x2710
                    },
                    0xf: {
                        'radius': 0x6c,
                        'mana': 0x9c40
                    },
                    0x10: {
                        'radius': 0x80,
                        'mana': 0x27100
                    },
                    0x12: { 'reload': 0.1 }
                },
                'pvpOverride': { 0x0: { 'reload': 0x3b9aca00 } },
                'tanksmithCooldown': 0x3 * 0x1e,
                'damageScalers': ['damage'],
                'healthScalers': ['health']
            },
            'Shard\x20of\x20Grace': {
                'damage': 0x0,
                'health': 0xc350,
                'reload': 0x5,
                'radius': 0x6,
                'petalLayout': [[{}]],
                'override': {},
                'pvpOverride': { 0x0: { 'reload': 0x3b9aca00 } },
                'damageScalers': ['damage'],
                'healthScalers': ['health']
            },
            'Amulet\x20of\x20GraceProjectile': {
                'damage': 0x0,
                'health': 0xc350,
                'reload': 0x5,
                'radius': 0xc,
                'petalLayout': [[{}]],
                'mana': 0x0,
                'override': {
                    0xc: {
                        'reload': 0x8,
                        'mana': 0x3e8
                    },
                    0xd: {
                        'reload': 0x4,
                        'mana': 0x9c4
                    },
                    0xe: {
                        'reload': 0x3,
                        'radius': 0x60,
                        'mana': 0x2710
                    },
                    0xf: {
                        'radius': 0x6c,
                        'mana': 0x9c40
                    },
                    0x10: {
                        'radius': 0x80,
                        'mana': 0x27100
                    },
                    0x12: { 'reload': 0.1 }
                },
                'pvpOverride': { 0x0: { 'reload': 0x3b9aca00 } },
                'damageScalers': ['damage'],
                'healthScalers': ['health']
            },
            'Shard\x20of\x20GraceProjectile': {
                'damage': 0x0,
                'health': 0xc350,
                'reload': 0x5,
                'radius': 0x6,
                'petalLayout': [[{}]],
                'override': {},
                'pvpOverride': { 0x0: { 'reload': 0x3b9aca00 } },
                'damageScalers': ['damage'],
                'healthScalers': ['health']
            },
            'Amulet\x20of\x20Time': {
                'damage': 0x0,
                'health': 0xc350,
                'reload': 0x14,
                'radius': 0xc,
                'mana': 0x0,
                'petalLayout': [[{}]],
                'override': {
                    0xc: { 'mana': 0x3e8 },
                    0xd: { 'mana': 0x9c4 },
                    0xe: {
                        'mana': 0x2710,
                        'radius': 0x60
                    },
                    0xf: {
                        'mana': 0x9c40,
                        'radius': 0x6c
                    },
                    0x10: {
                        'radius': 0x80,
                        'mana': 0x27100
                    },
                    0x12: { 'mana': 0x845951614014880000000 }
                },
                'pvpOverride': { 0x0: { 'reload': 0x3b9aca00 } },
                'tanksmithCooldown': 0x3 * 0x1e,
                'damageScalers': ['damage'],
                'healthScalers': ['health']
            },
            'Shard\x20of\x20Time': {
                'damage': 0x0,
                'health': 0xc350,
                'reload': 0x5,
                'radius': 0x6,
                'petalLayout': [[{}]],
                'override': {},
                'pvpOverride': { 0x0: { 'reload': 0x3b9aca00 } },
                'damageScalers': ['damage'],
                'healthScalers': ['health']
            },
            'Thomas': {
                'damage': 0x0,
                'health': 0x64,
                'reload': 0xf,
                'radius': 0x10,
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health']
            },
            'ThomasProjectile': {
                'damage': 0x7d0,
                'health': 0x7d0,
                'reload': 0x2,
                'radius': 0x3e8,
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health']
            },
            'Rock': {
                'damage': 28.5,
                'health': 0xeb,
                'reload': 3.2,
                'radius': 0xe,
                'petalLayout': [[{}]],
                'override': {
                    0x7: { 'radius': 0x13 },
                    0xb: { 'radius': 0x18 },
                    0xc: { 'radius': 0x1d },
                    0xd: { 'radius': 0x2d },
                    0xe: {
                        'health': 2.25,
                        'radius': 0x55
                    },
                    0xf: { 'radius': 0x6c },
                    0x10: { 'radius': 0x80 }
                },
                'tanksmithBodyDamage': 0x0,
                'tsPetalOverride': { 0x0: { 'radius': 0x2 } },
                'damageScalers': ['damage'],
                'healthScalers': ['health']
            },
            'Rog456': {
                'damage': 0.3,
                'health': 0xa3930,
                'reload': 0x5,
                'radius': 0x4b0,
                'petalLayout': [[
                        {
                            'offsetAngle': 0x0,
                            'offsetRadius': 0x4b0
                        },
                        {
                            'offsetAngle': Math['PI'],
                            'offsetRadius': 0x4b0
                        }
                    ]],
                'override': {
                    0xc: {
                        'radius': 0x4e2,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x4e2
                                },
                                {
                                    'offsetAngle': Math['PI'],
                                    'offsetRadius': 0x4e2
                                }
                            ]]
                    },
                    0xd: {
                        'radius': 0x514,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x514
                                },
                                {
                                    'offsetAngle': Math['PI'],
                                    'offsetRadius': 0x514
                                }
                            ]]
                    },
                    0xe: {
                        'radius': 0x546,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x546
                                },
                                {
                                    'offsetAngle': Math['PI'],
                                    'offsetRadius': 0x546
                                }
                            ]]
                    },
                    0xf: {
                        'radius': 0x578,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x578
                                },
                                {
                                    'offsetAngle': Math['PI'],
                                    'offsetRadius': 0x578
                                }
                            ]]
                    },
                    0x10: {
                        'radius': 0x5aa,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x5aa
                                },
                                {
                                    'offsetAngle': Math['PI'],
                                    'offsetRadius': 0x5aa
                                }
                            ]]
                    },
                    0x11: {
                        'radius': 0x5dc,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x5dc
                                },
                                {
                                    'offsetAngle': Math['PI'],
                                    'offsetRadius': 0x5dc
                                }
                            ]]
                    }
                },
                'pvpOverride': { 0x0: { 'reload': 0xe10 } },
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'attackDistanceMult': Math['sqrt'](0x1 / attackPetalDistanceMult)
            },
            'Heavy': {
                'damage': 0x7,
                'health': 0x258,
                'reload': 4.4,
                'radius': 0x14,
                'knockbackMass': 0x1,
                'petalLayout': [[{}]],
                'massScalers': ['knockbackMass'],
                'override': {
                    0x8: { 'radius': 0x19 },
                    0xc: { 'radius': 0x2d },
                    0xd: { 'radius': 0x82 },
                    0xe: {
                        'radius': 0xaf,
                        'health': 0x4
                    },
                    0xf: {
                        'radius': 0xf0,
                        'health': 1.5
                    },
                    0x10: {
                        'radius': 0x113,
                        'health': 1.3
                    }
                },
                'pvpOverride': {
                    0x8: { 'radius': 0x19 },
                    0xc: { 'radius': 0x23 },
                    0xd: { 'radius': 0x2d },
                    0x12: { 'radius': 0x8c }
                },
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'attackDistanceMult': Math['sqrt'](0x1 / attackPetalDistanceMult)
            },
            'FlowerFace': {
                'damage': 0x14,
                'health': 0x14,
                'reload': 0x2,
                'radius': 0x19,
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health']
            },
            'Pearl': {
                'damage': 0xf0,
                'health': 0x38f,
                'armor': -14.1,
                'reload': 0x168,
                'radius': 0x1e,
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': [
                    'health',
                    'armor',
                    'tanksmithHp'
                ],
                'attackDistanceMult': Math['sqrt'](0x1 / attackPetalDistanceMult),
                'override': {
                    0xd: {
                        'radius': 0x30,
                        'health': 1.1,
                        'damage': 0xb / 0xc
                    },
                    0xe: {
                        'radius': 0x3c,
                        'health': 1.64,
                        'damage': 0.63,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x28
                                },
                                {
                                    'offsetAngle': Math['PI'] / 0x3 * 0x2,
                                    'offsetRadius': 0x28
                                },
                                {
                                    'offsetAngle': Math['PI'] / 0x3 * 0x4,
                                    'offsetRadius': 0x28
                                }
                            ]]
                    },
                    0xf: {
                        'radius': 0x46,
                        'damage': 0x3 / 0x4,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x3c
                                },
                                {
                                    'offsetAngle': Math['PI'] / 0x4 * 0x2,
                                    'offsetRadius': 0x3c
                                },
                                {
                                    'offsetAngle': Math['PI'] / 0x4 * 0x4,
                                    'offsetRadius': 0x3c
                                },
                                {
                                    'offsetAngle': Math['PI'] / 0x4 * 0x6,
                                    'offsetRadius': 0x3c
                                }
                            ]]
                    },
                    0x10: {
                        'radius': 0x50,
                        'damage': 0x4 / 0x5,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x5a
                                },
                                {
                                    'offsetAngle': Math['PI'] / 0x5 * 0x2,
                                    'offsetRadius': 0x5a
                                },
                                {
                                    'offsetAngle': Math['PI'] / 0x5 * 0x4,
                                    'offsetRadius': 0x5a
                                },
                                {
                                    'offsetAngle': Math['PI'] / 0x5 * 0x6,
                                    'offsetRadius': 0x5a
                                },
                                {
                                    'offsetAngle': Math['PI'] / 0x5 * 0x8,
                                    'offsetRadius': 0x5a
                                }
                            ]]
                    }
                },
                'tanksmithShootCooldown': 0x9,
                'tanksmithRadius': 0x50,
                'tanksmithCooldown': 0x258,
                'tanksmithHp': 0x1,
                'tanksmithBarrelNum': 0x1,
                'tsPetalOverride': {
                    0x0: {
                        'radius': 1.1,
                        'health': 0.03,
                        'damage': 0.015
                    }
                },
                'tsProjectileSpeed': 0x14,
                'tsProjectileLifetime': 0x3c,
                'tsBarrelData': [{ 'angle': 0x0 }]
            },
            'Bloodshot\x20Eye': {
                'damage': 0.1,
                'health': 0xc8,
                'reload': 0x4,
                'cooldown': 0x3c,
                'damageIncrease': 0x3c,
                'duration': 0xd,
                'extraRange': 1.05,
                'override': {
                    0x1: { 'extraRange': 1.1 },
                    0x2: { 'extraRange': 1.2 },
                    0x3: { 'extraRange': 1.3 },
                    0x4: { 'extraRange': 1.4 },
                    0x5: { 'extraRange': 1.5 },
                    0x6: { 'extraRange': 1.6 },
                    0x7: {
                        'extraRange': 1.7,
                        'damage': 1.25
                    },
                    0x8: {
                        'extraRange': 1.8,
                        'damage': 1.15
                    },
                    0x9: { 'extraRange': 1.9 },
                    0xa: { 'extraRange': 0x2 },
                    0xb: { 'extraRange': 2.1 },
                    0xc: {
                        'extraRange': 2.2,
                        'damageIncrease': 0x41
                    },
                    0xd: {
                        'extraRange': 2.6,
                        'damageIncrease': 0x46,
                        'radius': 0x12
                    },
                    0xe: {
                        'extraRange': 2.835,
                        'damageIncrease': 0x4b,
                        'radius': 0x28
                    },
                    0xf: {
                        'extraRange': 3.29,
                        'damageIncrease': 0x50,
                        'radius': 0x46
                    },
                    0x10: {
                        'extraRange': 3.395,
                        'damageIncrease': 0x55,
                        'radius': 0x50
                    },
                    0x11: {
                        'extraRange': 3.5,
                        'damageIncrease': 0x5a,
                        'radius': 0x5a
                    },
                    0x12: {
                        'extraRange': 3.57,
                        'damageIncrease': 92.5,
                        'radius': 0x5f
                    }
                },
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'ignoreAttackDistance': !![]
            },
            'Bloodshot\x20EyeProjectile': {
                'damage': 0.1,
                'health': 0xc8,
                'reload': 0x4,
                'radius': 0xa,
                'cooldown': 0x3c,
                'damageIncrease': 0x3c,
                'duration': 0xc,
                'override': {
                    0xc: { 'damageIncrease': 0x41 },
                    0xd: {
                        'damageIncrease': 0x46,
                        'radius': 0x12
                    },
                    0xe: {
                        'damageIncrease': 0x4b,
                        'radius': 0x28
                    },
                    0xf: {
                        'damageIncrease': 0x50,
                        'radius': 0x46
                    },
                    0x10: {
                        'damageIncrease': 0x55,
                        'radius': 0x50
                    },
                    0x11: {
                        'damageIncrease': 0x5a,
                        'radius': 0x5a
                    }
                },
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'ignoreAttackDistance': !![]
            },
            'Third\x20Eye': {
                'damage': 0x12,
                'health': 0xa,
                'reload': 0x1,
                'extraRange': 1.1,
                'petalLayout': [[{}]],
                'override': {
                    0x1: { 'extraRange': 1.2 },
                    0x2: { 'extraRange': 1.3 },
                    0x3: { 'extraRange': 1.4 },
                    0x4: { 'extraRange': 1.5 },
                    0x5: { 'extraRange': 1.9 },
                    0x6: { 'extraRange': 2.2 },
                    0x7: {
                        'extraRange': 2.4,
                        'damage': 1.25
                    },
                    0x8: {
                        'extraRange': 2.55,
                        'damage': 1.15
                    },
                    0x9: { 'extraRange': 2.7 },
                    0xa: { 'extraRange': 2.85 },
                    0xb: { 'extraRange': 0x3 },
                    0xc: { 'extraRange': 3.15 },
                    0xd: {
                        'extraRange': 3.75,
                        'radius': 0x12,
                        'damage': 1.325
                    },
                    0xe: {
                        'extraRange': 4.05,
                        'radius': 0x28,
                        'damage': 1.3
                    },
                    0xf: {
                        'extraRange': 4.7,
                        'radius': 0x46
                    },
                    0x10: {
                        'extraRange': 4.85,
                        'radius': 0x50
                    },
                    0x11: {
                        'extraRange': 0x5,
                        'radius': 0x5a
                    },
                    0x12: {
                        'extraRange': 5.1,
                        'radius': 0x5f
                    },
                    0x13: {
                        'extraRange': 5.2,
                        'radius': 0x64
                    },
                    0x14: {
                        'extraRange': 5.3,
                        'radius': 0x69
                    }
                },
                'pvpOverride': {
                    0x4: { 'extraRange': 1.15 },
                    0x5: { 'extraRange': 1.2 },
                    0x6: { 'extraRange': 1.25 },
                    0x7: { 'extraRange': 1.3 },
                    0x8: { 'extraRange': 1.35 },
                    0x9: { 'extraRange': 1.4 },
                    0xa: { 'extraRange': 1.45 },
                    0xb: { 'extraRange': 1.5 },
                    0xc: { 'extraRange': 1.55 },
                    0xd: { 'extraRange': 1.6 }
                },
                'damageScalers': ['damage'],
                'healthScalers': ['health']
            },
            'Salt': {
                'damage': 0x5,
                'health': 0xf,
                'maxDamage': 0x32,
                'salt': 0x14,
                'reload': 0x1,
                'petalLayout': [[{}]],
                'override': {
                    0x1: { 'salt': 0x28 },
                    0x2: { 'salt': 0x50 },
                    0x3: { 'salt': 0x8c },
                    0x4: { 'salt': 0xfa },
                    0x5: { 'salt': 0x190 },
                    0x6: { 'salt': 0x258 },
                    0x7: { 'salt': 0x384 },
                    0x8: { 'salt': 0x578 },
                    0x9: { 'salt': 0x898 },
                    0xa: { 'salt': 0xfa0 },
                    0xb: { 'salt': 0x1f40 },
                    0xc: {
                        'salt': 0x3a98,
                        'radius': 0x14
                    },
                    0xd: {
                        'salt': 0x7530,
                        'maxDamage': 0.8,
                        'radius': 0x24
                    },
                    0xe: {
                        'salt': 0x13880,
                        'radius': 0x2a
                    },
                    0xf: {
                        'salt': 0x3d090,
                        'radius': 0x32
                    },
                    0x10: {
                        'salt': 0xd9038,
                        'radius': 0x42
                    }
                },
                'pvpOverride': {
                    0x0: {
                        'salt': 0x4,
                        'maxDamage': 0x1
                    }
                },
                'damageScalers': [
                    'damage',
                    'maxDamage'
                ],
                'healthScalers': ['health']
            },
            'Powder': {
                'damage': 0x10,
                'health': 0x18,
                'reload': 0x1,
                'petalLayout': [[{}]],
                'speedBuff': 0x8,
                'healthNerf': 0x19,
                'radiusChange': 0x0,
                'override': {
                    0x1: {
                        'speedBuff': 0x9,
                        'healthNerf': 0x17
                    },
                    0x2: {
                        'speedBuff': 0xa,
                        'healthNerf': 0x15
                    },
                    0x3: {
                        'speedBuff': 0xb,
                        'healthNerf': 0x13
                    },
                    0x4: {
                        'speedBuff': 0xd,
                        'healthNerf': 0x11
                    },
                    0x5: {
                        'speedBuff': 0x10,
                        'healthNerf': 0xf
                    },
                    0x6: {
                        'speedBuff': 0x16,
                        'healthNerf': 0xd
                    },
                    0x7: {
                        'speedBuff': 0x1e,
                        'healthNerf': 0xb
                    },
                    0x8: {
                        'speedBuff': 0x26,
                        'healthNerf': 0x9
                    },
                    0x9: {
                        'speedBuff': 0x2a,
                        'healthNerf': 0x7
                    },
                    0xa: {
                        'speedBuff': 0x2f,
                        'healthNerf': 0x5
                    },
                    0xb: {
                        'speedBuff': 0x34,
                        'healthNerf': 0x3
                    },
                    0xc: {
                        'speedBuff': 0x3c,
                        'healthNerf': 0x2
                    },
                    0xd: {
                        'speedBuff': 0x64,
                        'healthNerf': 0x1,
                        'radiusChange': 0x55,
                        'radius': 0x14
                    },
                    0xe: {
                        'speedBuff': 0x78,
                        'healthNerf': 0.5,
                        'radiusChange': 0x46
                    },
                    0xf: {
                        'speedBuff': 0x8c,
                        'healthNerf': 0.25,
                        'radiusChange': 0x37
                    },
                    0x10: {
                        'damage': 1.21,
                        'speedBuff': 0x9b,
                        'healthNerf': 0.125,
                        'radiusChange': 42.5,
                        'radius': 0x32
                    }
                },
                'pvpOverride': {
                    0x0: {
                        'speedBuff': 0xa,
                        'healthNerf': 0x14
                    },
                    0x2: {
                        'speedBuff': 0xb,
                        'healthNerf': 0x15
                    },
                    0x3: {
                        'speedBuff': 0xc,
                        'healthNerf': 0x13
                    },
                    0x4: {
                        'speedBuff': 0xd,
                        'healthNerf': 0x11
                    },
                    0x5: {
                        'speedBuff': 0xe,
                        'healthNerf': 0xf
                    },
                    0x6: {
                        'speedBuff': 0xf,
                        'healthNerf': 0xd
                    },
                    0x7: {
                        'speedBuff': 0x10,
                        'healthNerf': 0xb
                    },
                    0x8: {
                        'speedBuff': 0x11,
                        'healthNerf': 0x9
                    },
                    0x9: {
                        'speedBuff': 0x12,
                        'healthNerf': 0x7
                    },
                    0xa: {
                        'speedBuff': 0x13,
                        'healthNerf': 0x5
                    },
                    0xb: {
                        'speedBuff': 0x14,
                        'healthNerf': 0x3
                    },
                    0xc: {
                        'speedBuff': 0x15,
                        'healthNerf': 2.5
                    },
                    0xd: {
                        'speedBuff': 0x16,
                        'healthNerf': 0x2
                    },
                    0xe: {
                        'speedBuff': 0x17,
                        'healthNerf': 1.5
                    },
                    0xf: {
                        'speedBuff': 0x18,
                        'healthNerf': 1.2
                    },
                    0x12: {
                        'speedBuff': 0x64,
                        'healthNerf': 0x0
                    }
                },
                'damageScalers': ['damage'],
                'healthScalers': ['health']
            },
            'Missile': {
                'damage': 0x14,
                'health': 0x1f,
                'reload': 0.95,
                'radius': 0xc,
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'override': {
                    0x7: { 'radius': 0x11 },
                    0x8: { 'radius': 0x18 },
                    0x9: { 'radius': 0x20 },
                    0xc: { 'radius': 0x28 },
                    0xd: {
                        'damage': 1.05,
                        'radius': 0x50
                    },
                    0xe: { 'radius': 0x64 },
                    0xf: {
                        'damage': 1.01,
                        'radius': 0x78
                    },
                    0x10: {
                        'radius': 0x8c,
                        'damage': 0.6,
                        'reload': 0.1
                    }
                },
                'pvpOverride': {
                    0x0: {
                        'radius': 0x23,
                        'damage': 0.9,
                        'health': 0.1
                    }
                },
                'tanksmithRadius': 0x32,
                'attackDistanceMult': 0x1 / attackPetalDistanceMult
            },
            'MissileProjectile': {
                'damage': 0x14,
                'health': 0x1f,
                'reload': 0.95,
                'radius': 0xc,
                'override': {
                    0x7: { 'radius': 0x11 },
                    0x8: { 'radius': 0x18 },
                    0x9: { 'radius': 0x20 },
                    0xc: { 'radius': 0x28 },
                    0xd: {
                        'damage': 1.05,
                        'radius': 0x50
                    },
                    0xe: { 'radius': 0x64 },
                    0xf: {
                        'damage': 1.01,
                        'radius': 0x78
                    },
                    0x10: {
                        'radius': 0x8c,
                        'damage': 0.6,
                        'reload': 0.15
                    }
                },
                'pvpOverride': {
                    0x0: {
                        'radius': 0x23,
                        'damage': 0.9,
                        'health': 0.1
                    }
                },
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health']
            },
            'Spore': {
                'damage': 37.5,
                'health': 37.5,
                'reload': 0.75,
                'radius': 0xc,
                'petalLayout': [[
                        {
                            'offsetAngle': 0x0,
                            'offsetRadius': 16.7
                        },
                        {
                            'offsetAngle': Math['PI'] * 0x2 / 0x5,
                            'offsetRadius': 16.7
                        },
                        {
                            'offsetAngle': Math['PI'] * 0x4 / 0x5,
                            'offsetRadius': 16.7
                        },
                        {
                            'offsetAngle': Math['PI'] * 0x6 / 0x5,
                            'offsetRadius': 16.7
                        },
                        {
                            'offsetAngle': Math['PI'] * 0x8 / 0x5,
                            'offsetRadius': 16.7
                        }
                    ]],
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'override': {
                    0x7: { 'radius': 0xe },
                    0x8: { 'radius': 0x10 },
                    0x9: { 'radius': 0x12 },
                    0xc: { 'radius': 0x14 },
                    0xd: { 'radius': 0x18 },
                    0xe: { 'radius': 0x1c },
                    0xf: { 'radius': 0x20 },
                    0x10: { 'radius': 0x40 }
                },
                'pvpOverride': {
                    0x0: {
                        'radius': 0x23,
                        'damage': 0.9,
                        'health': 0.1
                    }
                },
                'tanksmithRadius': 0x14,
                'attackDistanceMult': 0x1 / attackPetalDistanceMult
            },
            'SporeProjectile': {
                'damage': 37.5,
                'health': 37.5,
                'reload': 0.75,
                'radius': 0xc,
                'petalLayout': [[
                        {
                            'offsetAngle': 0x0,
                            'offsetRadius': 16.7
                        },
                        {
                            'offsetAngle': Math['PI'] * 0x2 / 0x5,
                            'offsetRadius': 16.7
                        },
                        {
                            'offsetAngle': Math['PI'] * 0x4 / 0x5,
                            'offsetRadius': 16.7
                        },
                        {
                            'offsetAngle': Math['PI'] * 0x6 / 0x5,
                            'offsetRadius': 16.7
                        },
                        {
                            'offsetAngle': Math['PI'] * 0x8 / 0x5,
                            'offsetRadius': 16.7
                        }
                    ]],
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'override': {
                    0x7: { 'radius': 0xe },
                    0x8: { 'radius': 0x10 },
                    0x9: { 'radius': 0x12 },
                    0xc: { 'radius': 0x14 },
                    0xd: { 'radius': 0x18 },
                    0xe: { 'radius': 0x1c },
                    0xf: { 'radius': 0x20 },
                    0x10: { 'radius': 0x40 }
                },
                'pvpOverride': {
                    0x0: {
                        'radius': 0x23,
                        'damage': 0.9,
                        'health': 0.1
                    }
                },
                'tanksmithRadius': 0x14,
                'attackDistanceMult': 0x1 / attackPetalDistanceMult
            },
            'Homing\x20Missile': {
                'damage': 0xf,
                'health': 0x26c,
                'reload': 1.4,
                'radius': 0x3c,
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'override': {
                    0xc: { 'radius': 0x46 },
                    0xd: { 'radius': 0x50 },
                    0xe: { 'radius': 0x5a },
                    0xf: {
                        'radius': 0x64,
                        'damage': 1.15
                    },
                    0x10: {
                        'radius': 0x78,
                        'damage': 1.5
                    }
                },
                'pvpOverride': {
                    0x0: {
                        'radius': 0x23,
                        'damage': 0.9,
                        'health': 0.1
                    }
                },
                'attackDistanceMult': 0x1 / attackPetalDistanceMult
            },
            'Homing\x20MissileProjectile': {
                'damage': 0xf,
                'health': 0x26c,
                'reload': 1.4,
                'radius': 0x3c,
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'override': {
                    0xc: { 'radius': 0x46 },
                    0xd: { 'radius': 0x50 },
                    0xe: { 'radius': 0x5a },
                    0xf: {
                        'radius': 0x64,
                        'damage': 1.15
                    },
                    0x10: {
                        'radius': 0x78,
                        'damage': 1.5
                    }
                },
                'pvpOverride': {
                    0x0: {
                        'radius': 0x23,
                        'damage': 0.9,
                        'health': 0.1
                    }
                },
                'attackDistanceMult': 0x1 / attackPetalDistanceMult
            },
            'Fire\x20Missile': {
                'damage': 0x14,
                'poison': [
                    0x16,
                    0x16
                ],
                'health': 0x5a,
                'reload': 0.95,
                'radius': 0xc,
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'override': {
                    0x7: { 'radius': 0x11 },
                    0x8: { 'radius': 0x18 },
                    0x9: { 'radius': 0x20 },
                    0xc: { 'radius': 0x28 },
                    0xd: {
                        'damage': 1.15,
                        'radius': 0x50,
                        'poison': 1.3
                    },
                    0xe: {
                        'health': 0x2,
                        'radius': 0x64,
                        'poison': 0x2,
                        'damage': 1.5
                    },
                    0xf: {
                        'damage': 1.3,
                        'poison': 1.3,
                        'radius': 0x78
                    },
                    0x10: {
                        'radius': 0x8c,
                        'damage': 0.6,
                        'poison': 1.05,
                        'reload': 0.1
                    }
                },
                'pvpOverride': {
                    0x0: {
                        'radius': 0x23,
                        'damage': 0.6,
                        'health': 0.1
                    }
                },
                'attackDistanceMult': 0x1 / attackPetalDistanceMult
            },
            'Fire\x20MissileProjectile': {
                'damage': 0x14,
                'poison': [
                    0x16,
                    0x16
                ],
                'health': 0x5a,
                'reload': 0.95,
                'radius': 0xc,
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'override': {
                    0x7: { 'radius': 0x11 },
                    0x8: { 'radius': 0x18 },
                    0x9: { 'radius': 0x20 },
                    0xc: { 'radius': 0x28 },
                    0xd: {
                        'damage': 1.15,
                        'radius': 0x50,
                        'poison': 1.3
                    },
                    0xe: {
                        'health': 0x2,
                        'radius': 0x64,
                        'poison': 0x2,
                        'damage': 1.5
                    },
                    0xf: {
                        'damage': 1.3,
                        'poison': 1.3,
                        'radius': 0x78
                    },
                    0x10: {
                        'radius': 0x8c,
                        'damage': 0.6,
                        'poison': 0.8,
                        'reload': 0.1
                    }
                },
                'pvpOverride': {
                    0x0: {
                        'radius': 0x23,
                        'damage': 0.6,
                        'health': 0.1
                    }
                }
            },
            'Bud': {
                'damage': 0.01,
                'health': 0x96,
                'reload': 0x28,
                'radius': 0xc,
                'lifespan': 0x28,
                'reviveHealth': 0.1,
                'tanksmithCooldown': 0x5a,
                'maximumWave': 0x6,
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'override': {
                    0x1: {
                        'lifespan': 0x1e,
                        'reload': 0x1e,
                        'reviveHealth': 0.13,
                        'maximumWave': 0xb
                    },
                    0x2: {
                        'lifespan': 0x14,
                        'reload': 0x14,
                        'reviveHealth': 0.16,
                        'maximumWave': 0x11
                    },
                    0x3: {
                        'lifespan': 0xa,
                        'reload': 0xa,
                        'reviveHealth': 0.19,
                        'maximumWave': 0x16
                    },
                    0x4: {
                        'lifespan': 7.5,
                        'reload': 7.5,
                        'reviveHealth': 0.22,
                        'maximumWave': 0x32
                    },
                    0x5: {
                        'lifespan': 5.75,
                        'reload': 5.75,
                        'reviveHealth': 0.25,
                        'maximumWave': 0x42
                    },
                    0x6: {
                        'lifespan': 3.7,
                        'reload': 3.7,
                        'reviveHealth': 0.28,
                        'maximumWave': 0x53
                    },
                    0x7: {
                        'lifespan': 3.1,
                        'reload': 3.1,
                        'reviveHealth': 0.31,
                        'maximumWave': 0x6e
                    },
                    0x8: {
                        'lifespan': 2.5,
                        'reload': 2.5,
                        'reviveHealth': 0.34,
                        'maximumWave': 0x8f
                    },
                    0x9: {
                        'lifespan': 2.2,
                        'reload': 2.2,
                        'reviveHealth': 0.37,
                        'maximumWave': 0xb0
                    },
                    0xa: {
                        'lifespan': 0x2,
                        'reload': 0x2,
                        'reviveHealth': 0.4,
                        'maximumWave': 0xdc
                    },
                    0xb: {
                        'lifespan': 1.95,
                        'reload': 1.6,
                        'reviveHealth': 0.43,
                        'maximumWave': 0x113
                    },
                    0xc: {
                        'lifespan': 1.9,
                        'reload': 1.4,
                        'reviveHealth': 0.49,
                        'maximumWave': 0x171
                    },
                    0xd: {
                        'lifespan': 1.88,
                        'reload': 1.2,
                        'reviveHealth': 0.6,
                        'maximumWave': 0x1c3
                    },
                    0xe: {
                        'lifespan': 1.86,
                        'reload': 0x1,
                        'reviveHealth': 0.625,
                        'maximumWave': 0x231
                    },
                    0xf: {
                        'lifespan': 1.84,
                        'reload': 0.9,
                        'reviveHealth': 0.63,
                        'maximumWave': 0x284
                    },
                    0x10: {
                        'lifespan': 1.8,
                        'reload': 0.8,
                        'reviveHealth': 0.635,
                        'maximumWave': 0x2e7
                    },
                    0x11: {
                        'lifespan': 1.78,
                        'reload': 0.7,
                        'reviveHealth': 0.64,
                        'maximumWave': 0x34a
                    },
                    0x12: {
                        'lifespan': 1.76,
                        'reload': 0.6,
                        'reviveHealth': 0.645,
                        'maximumWave': 0x3ad
                    }
                },
                'ignoreAttackDistance': !![],
                'tanksmithBarrelNum': 0x0
            },
            'BudProjectile': {
                'damage': 0.01,
                'health': 0x96,
                'reload': 0xf,
                'radius': 0xc,
                'reviveHealth': 0.1,
                'maximumWave': 0x6,
                'override': {
                    0x1: {
                        'lifespan': 0x1e,
                        'reload': 0x1e,
                        'reviveHealth': 0.13,
                        'maximumWave': 0xb
                    },
                    0x2: {
                        'lifespan': 0x14,
                        'reload': 0x14,
                        'reviveHealth': 0.16,
                        'maximumWave': 0x11
                    },
                    0x3: {
                        'lifespan': 0xa,
                        'reload': 0xa,
                        'reviveHealth': 0.19,
                        'maximumWave': 0x16
                    },
                    0x4: {
                        'lifespan': 7.5,
                        'reload': 7.5,
                        'reviveHealth': 0.22,
                        'maximumWave': 0x32
                    },
                    0x5: {
                        'lifespan': 5.75,
                        'reload': 5.75,
                        'reviveHealth': 0.25,
                        'maximumWave': 0x42
                    },
                    0x6: {
                        'lifespan': 3.7,
                        'reload': 3.7,
                        'reviveHealth': 0.28,
                        'maximumWave': 0x53
                    },
                    0x7: {
                        'lifespan': 3.1,
                        'reload': 3.1,
                        'reviveHealth': 0.31,
                        'maximumWave': 0x6e
                    },
                    0x8: {
                        'lifespan': 2.5,
                        'reload': 2.5,
                        'reviveHealth': 0.34,
                        'maximumWave': 0x8f
                    },
                    0x9: {
                        'lifespan': 2.2,
                        'reload': 2.2,
                        'reviveHealth': 0.37,
                        'maximumWave': 0xb0
                    },
                    0xa: {
                        'lifespan': 0x2,
                        'reload': 0x2,
                        'reviveHealth': 0.4,
                        'maximumWave': 0xdc
                    },
                    0xb: {
                        'lifespan': 1.95,
                        'reload': 1.6,
                        'reviveHealth': 0.43,
                        'maximumWave': 0x113
                    },
                    0xc: {
                        'lifespan': 1.9,
                        'reload': 1.4,
                        'reviveHealth': 0.49,
                        'maximumWave': 0x171
                    },
                    0xd: {
                        'lifespan': 1.88,
                        'reload': 1.2,
                        'reviveHealth': 0.6,
                        'maximumWave': 0x1c3
                    },
                    0xe: {
                        'lifespan': 1.86,
                        'reload': 0x1,
                        'reviveHealth': 0.625,
                        'maximumWave': 0x231
                    },
                    0xf: {
                        'lifespan': 1.84,
                        'reload': 0.9,
                        'reviveHealth': 0.63,
                        'maximumWave': 0x284
                    },
                    0x10: {
                        'lifespan': 1.8,
                        'reload': 0.8,
                        'reviveHealth': 0.635,
                        'maximumWave': 0x2e7
                    },
                    0x11: {
                        'lifespan': 1.78,
                        'reload': 0.7,
                        'reviveHealth': 0.64,
                        'maximumWave': 0x34a
                    },
                    0x12: {
                        'lifespan': 1.76,
                        'reload': 0.6,
                        'reviveHealth': 0.645,
                        'maximumWave': 0x3ad
                    }
                },
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'ignoreAttackDistance': !![]
            },
            'Bloom': {
                'damage': 0.01,
                'health': 0x12c,
                'reload': 0x50,
                'radius': 0x18,
                'lifespan': 0x50,
                'reviveHealth': 0.1,
                'tanksmithCooldown': 0xaf,
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'maximumWave': 0x5,
                'override': {
                    0x1: {
                        'lifespan': 0x3c,
                        'reload': 0x3c,
                        'reviveHealth': 0.13,
                        'maximumWave': 0xa
                    },
                    0x2: {
                        'lifespan': 0x28,
                        'reload': 0x28,
                        'reviveHealth': 0.16,
                        'maximumWave': 0xf
                    },
                    0x3: {
                        'lifespan': 0x14,
                        'reload': 0x14,
                        'reviveHealth': 0.19,
                        'maximumWave': 0x14
                    },
                    0x4: {
                        'lifespan': 0xd,
                        'reload': 0xd,
                        'reviveHealth': 0.22,
                        'maximumWave': 0x2d
                    },
                    0x5: {
                        'lifespan': 11.4,
                        'reload': 11.4,
                        'reviveHealth': 0.25,
                        'maximumWave': 0x3c
                    },
                    0x6: {
                        'lifespan': 7.4,
                        'reload': 7.4,
                        'reviveHealth': 0.28,
                        'maximumWave': 0x4b
                    },
                    0x7: {
                        'lifespan': 6.2,
                        'reload': 6.2,
                        'reviveHealth': 0.31,
                        'maximumWave': 0x64
                    },
                    0x8: {
                        'lifespan': 0x5,
                        'reload': 0x5,
                        'reviveHealth': 0.34,
                        'maximumWave': 0x82
                    },
                    0x9: {
                        'lifespan': 3.7,
                        'reload': 0x4,
                        'reviveHealth': 0.37,
                        'maximumWave': 0xa0
                    },
                    0xa: {
                        'lifespan': 3.4,
                        'reload': 3.7,
                        'reviveHealth': 0.4,
                        'maximumWave': 0xc8
                    },
                    0xb: {
                        'lifespan': 0x3,
                        'reload': 3.3,
                        'reviveHealth': 0.43,
                        'maximumWave': 0xfa
                    },
                    0xc: {
                        'lifespan': 0x3,
                        'reload': 0x3,
                        'reviveHealth': 0.46,
                        'maximumWave': 0x14f
                    },
                    0xd: {
                        'lifespan': 0x3,
                        'reload': 2.7,
                        'reviveHealth': 0.49,
                        'maximumWave': 0x19a
                    },
                    0xe: {
                        'lifespan': 0x3,
                        'reload': 2.4,
                        'reviveHealth': 0.52,
                        'maximumWave': 0x1fe
                    },
                    0xf: {
                        'lifespan': 0x3,
                        'reload': 2.2,
                        'reviveHealth': 0.55,
                        'maximumWave': 0x249
                    },
                    0x10: {
                        'lifespan': 0x3,
                        'reload': 0x2,
                        'reviveHealth': 0.58,
                        'maximumWave': 0x2a3
                    }
                },
                'ignoreAttackDistance': !![],
                'tanksmithBarrelNum': 0x0
            },
            'BloomProjectile': {
                'damage': 0.01,
                'health': 0x12c,
                'reload': 0x50,
                'radius': 0x18,
                'reviveHealth': 0.1,
                'maximumWave': 0x5,
                'override': {
                    0x1: {
                        'lifespan': 0x3c,
                        'reload': 0x3c,
                        'reviveHealth': 0.13,
                        'maximumWave': 0xa
                    },
                    0x2: {
                        'lifespan': 0x28,
                        'reload': 0x28,
                        'reviveHealth': 0.16,
                        'maximumWave': 0xf
                    },
                    0x3: {
                        'lifespan': 0x14,
                        'reload': 0x14,
                        'reviveHealth': 0.19,
                        'maximumWave': 0x14
                    },
                    0x4: {
                        'lifespan': 0xd,
                        'reload': 0xd,
                        'reviveHealth': 0.22,
                        'maximumWave': 0x2d
                    },
                    0x5: {
                        'lifespan': 11.4,
                        'reload': 11.4,
                        'reviveHealth': 0.25,
                        'maximumWave': 0x3c
                    },
                    0x6: {
                        'lifespan': 7.4,
                        'reload': 7.4,
                        'reviveHealth': 0.28,
                        'maximumWave': 0x4b
                    },
                    0x7: {
                        'lifespan': 6.2,
                        'reload': 6.2,
                        'reviveHealth': 0.31,
                        'maximumWave': 0x64
                    },
                    0x8: {
                        'lifespan': 0x5,
                        'reload': 0x5,
                        'reviveHealth': 0.34,
                        'maximumWave': 0x82
                    },
                    0x9: {
                        'lifespan': 3.7,
                        'reload': 0x4,
                        'reviveHealth': 0.37,
                        'maximumWave': 0xa0
                    },
                    0xa: {
                        'lifespan': 3.4,
                        'reload': 3.7,
                        'reviveHealth': 0.4,
                        'maximumWave': 0xc8
                    },
                    0xb: {
                        'lifespan': 0x3,
                        'reload': 3.3,
                        'reviveHealth': 0.43,
                        'maximumWave': 0xfa
                    },
                    0xc: {
                        'lifespan': 0x3,
                        'reload': 0x3,
                        'reviveHealth': 0.46,
                        'maximumWave': 0x14f
                    },
                    0xd: {
                        'lifespan': 0x3,
                        'reload': 2.7,
                        'reviveHealth': 0.49,
                        'maximumWave': 0x19a
                    },
                    0xe: {
                        'lifespan': 0x3,
                        'reload': 2.4,
                        'reviveHealth': 0.52,
                        'maximumWave': 0x1fe
                    },
                    0xf: {
                        'lifespan': 0x3,
                        'reload': 2.2,
                        'reviveHealth': 0.55,
                        'maximumWave': 0x249
                    },
                    0x10: {
                        'lifespan': 0x3,
                        'reload': 0x2,
                        'reviveHealth': 0.58,
                        'maximumWave': 0x2a3
                    }
                },
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'ignoreAttackDistance': !![]
            },
            'TanksmithProjectile': {
                'damage': 0x1,
                'health': 0xa,
                'reload': 0x1,
                'radius': 0xa,
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health']
            },
            'Mandible': {
                'damage': 0x15,
                'criticalDamage': 0x15 * 0x14,
                'health': 0.1,
                'reload': 1.2,
                'radius': 0xc,
                'override': {
                    0xc: { 'radius': 0x12 },
                    0xd: {
                        'radius': 0x24,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x9
                                },
                                {
                                    'offsetAngle': Math['PI'] / 1.5,
                                    'offsetRadius': 0x9
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x2 / 1.5,
                                    'offsetRadius': 0x9
                                }
                            ]],
                        'damage': 0x1 / 0x3 * 1.03,
                        'criticalDamage': 0x1 / 0x3 * 1.03,
                        'reload': 0.9
                    },
                    0xe: {
                        'radius': 0x40,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x27
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x2 / 0x5,
                                    'offsetRadius': 0x27
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x4 / 0x5,
                                    'offsetRadius': 0x27
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x6 / 0x5,
                                    'offsetRadius': 0x27
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x8 / 0x5,
                                    'offsetRadius': 0x27
                                }
                            ]],
                        'damage': 4.5 / 0x5 * 1.03,
                        'criticalDamage': 4.5 / 0x5 * 1.03,
                        'reload': 0.85
                    },
                    0xf: {
                        'radius': 0x4c,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x38
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x2 / 0x6,
                                    'offsetRadius': 0x38
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x4 / 0x6,
                                    'offsetRadius': 0x38
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x6 / 0x6,
                                    'offsetRadius': 0x38
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x8 / 0x6,
                                    'offsetRadius': 0x38
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0xa / 0x6,
                                    'offsetRadius': 0x38
                                }
                            ]],
                        'damage': 0x5 / 0x6 * 1.03,
                        'criticalDamage': 0x5 / 0x6 * 1.03,
                        'reload': 0.83
                    },
                    0x10: { 'radius': 0x56 }
                },
                'pvpOverride': {
                    0x0: {
                        'damage': 0x1 / 1.35,
                        'criticalDamage': 0x1 / 1.35
                    }
                },
                'petalLayout': [[{}]],
                'damageScalers': [
                    'damage',
                    'criticalDamage'
                ],
                'healthScalers': ['health']
            },
            'Blood\x20Mandible': {
                'damage': 0x20,
                'criticalDamage': 0x20 * 0x14,
                'health': 0.1,
                'damageHeal': -0x43,
                'reload': 1.2,
                'radius': 0xc,
                'override': {
                    0xc: { 'radius': 0x12 },
                    0xd: {
                        'radius': 0x24,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x9
                                },
                                {
                                    'offsetAngle': Math['PI'] / 1.5,
                                    'offsetRadius': 0x9
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x2 / 1.5,
                                    'offsetRadius': 0x9
                                }
                            ]],
                        'damage': 0x1 / 0x3 * 1.09,
                        'criticalDamage': 0x1 / 0x3 * 1.09,
                        'damageHeal': 0x1 / 0x3,
                        'reload': 0.9
                    },
                    0xe: {
                        'radius': 0x40,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x27
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x2 / 0x5,
                                    'offsetRadius': 0x27
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x4 / 0x5,
                                    'offsetRadius': 0x27
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x6 / 0x5,
                                    'offsetRadius': 0x27
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x8 / 0x5,
                                    'offsetRadius': 0x27
                                }
                            ]],
                        'damage': 4.5 / 0x5 * 1.09,
                        'criticalDamage': 4.5 / 0x5 * 1.09,
                        'damageHeal': 0x3 / 0x5,
                        'reload': 0.85
                    },
                    0xf: {
                        'radius': 0x4c,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x38
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x2 / 0x6,
                                    'offsetRadius': 0x38
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x4 / 0x6,
                                    'offsetRadius': 0x38
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x6 / 0x6,
                                    'offsetRadius': 0x38
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x8 / 0x6,
                                    'offsetRadius': 0x38
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0xa / 0x6,
                                    'offsetRadius': 0x38
                                }
                            ]],
                        'damage': 0x5 / 0x6 * 1.09,
                        'criticalDamage': 0x5 / 0x6 * 1.09,
                        'damageHeal': 0x5 / 0x6,
                        'reload': 0.83
                    },
                    0x10: {
                        'radius': 0x56,
                        'damage': 1.15,
                        'criticalDamage': 1.15
                    }
                },
                'pvpOverride': {
                    0x0: {
                        'damage': 0x1 / 1.35,
                        'criticalDamage': 0x1 / 1.35
                    }
                },
                'petalLayout': [[{}]],
                'damageScalers': [
                    'damage',
                    'criticalDamage'
                ],
                'healthScalers': ['health'],
                'healScalers': ['damageHeal']
            },
            'Claw': {
                'damage': 0x0,
                'maxDamage': 0x148,
                'damagePercent': 0xc,
                'health': 0x5,
                'reload': 3.5,
                'radius': 0xc,
                'tsPetalOverride': {
                    0x0: {
                        'maxDamage': 0.9,
                        'radius': 1.5,
                        'health': 0xa
                    }
                },
                'override': {
                    0x1: { 'damagePercent': 0xf },
                    0x2: { 'damagePercent': 0x12 },
                    0x3: { 'damagePercent': 0x15 },
                    0x4: { 'damagePercent': 0x18 },
                    0x5: { 'damagePercent': 0x1b },
                    0x6: { 'damagePercent': 0x1e },
                    0x7: { 'damagePercent': 0x21 },
                    0x8: { 'damagePercent': 0x24 },
                    0x9: { 'damagePercent': 0x27 },
                    0xa: { 'damagePercent': 0x2a },
                    0xb: { 'damagePercent': 0x2d },
                    0xc: {
                        'radius': 0x1e,
                        'damagePercent': 0x30
                    },
                    0xd: {
                        'radius': 0x2d,
                        'damagePercent': 0x33
                    },
                    0xe: {
                        'radius': 0x3c,
                        'damagePercent': 0x36,
                        'maxDamage': 1.067
                    },
                    0xf: {
                        'radius': 0x4b,
                        'reload': 2.67,
                        'damagePercent': 10.7,
                        'maxDamage': 0.43,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x16
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x2 / 0x3,
                                    'offsetRadius': 0x16
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x4 / 0x3,
                                    'offsetRadius': 0x16
                                }
                            ]]
                    },
                    0x10: { 'radius': 0x56 }
                },
                'petalLayout': [[{}]],
                'damageScalers': [
                    'damage',
                    'maxDamage'
                ],
                'healthScalers': ['health'],
                'attackDistanceMult': 1.2
            },
            'Lightning': {
                'damage': 36.7,
                'bounces': 0x5,
                'health': 0.01,
                'reload': 1.8,
                'radius': 0x8,
                'tsPetalOverride': {
                    0x0: {
                        'damage': 1.4,
                        'radius': 2.5
                    }
                },
                'tanksmithShootCooldown': 0x28,
                'override': {
                    0x4: { 'bounces': 0x5 },
                    0x5: {
                        'bounces': 0x6,
                        'damage': 5.25 / 0x6
                    },
                    0x6: { 'bounces': 0x6 },
                    0x7: {
                        'bounces': 0x7,
                        'damage': 6.25 / 0x7
                    },
                    0x8: { 'bounces': 0x7 },
                    0x9: {
                        'bounces': 0x8,
                        'damage': 7.25 / 0x8
                    },
                    0xa: { 'bounces': 0x8 },
                    0xb: {
                        'bounces': 0x9,
                        'damage': 8.25 / 0x9
                    },
                    0xc: {
                        'bounces': 0xa,
                        'damage': 9.25 / 0xa
                    },
                    0xd: {
                        'radius': 0x20,
                        'bounces': 0xb,
                        'damage': 10.1 / 0xb
                    },
                    0xe: {
                        'radius': 0x2d,
                        'bonuces': 0xc,
                        'damage': 11.1 / 0xc
                    },
                    0xf: {
                        'radius': 0x37,
                        'bounces': 0xd,
                        'damage': 12.1 / 0xd
                    },
                    0x10: {
                        'radius': 0x47,
                        'bounces': 0xe,
                        'damage': 13.1 / 0xe
                    }
                },
                'petalLayout': [[{}]],
                'damageScalers': [
                    'damage',
                    'maxDamage'
                ],
                'healthScalers': ['health']
            },
            'Shiny\x20Lightning': {
                'damage': 3.3,
                'bounces': 0xa,
                'health': 0.01,
                'reload': 0x1,
                'radius': 0x8,
                'override': {
                    0x4: { 'bounces': 0xa },
                    0x5: {
                        'bounces': 0xc,
                        'damage': 10.25 / 0xc
                    },
                    0x6: { 'bounces': 0xc },
                    0x7: {
                        'bounces': 0xe,
                        'damage': 12.25 / 0xe
                    },
                    0x8: { 'bounces': 0xe },
                    0x9: {
                        'bounces': 0x10,
                        'damage': 14.25 / 0x10
                    },
                    0xa: { 'bounces': 0x10 },
                    0xb: {
                        'bounces': 0x16,
                        'damage': 0x11 / 0x16
                    },
                    0xc: {
                        'bounces': 0x1a,
                        'damage': 0x17 / 0x1a
                    },
                    0xd: {
                        'radius': 0x20,
                        'bounces': 0x1e,
                        'damage': 26.5 / 0x1e
                    },
                    0xe: {
                        'radius': 0x2d,
                        'bonuces': 0x22,
                        'damage': 30.5 / 0x22
                    },
                    0xf: {
                        'radius': 0x37,
                        'bounces': 0x24,
                        'damage': 34.5 / 0x24
                    },
                    0x10: {
                        'radius': 0x47,
                        'bounces': 0x26,
                        'damage': 36.5 / 0x26
                    }
                },
                'petalLayout': [[{}]],
                'damageScalers': [
                    'damage',
                    'maxDamage'
                ],
                'healthScalers': ['health']
            },
            'Battery': {
                'damage': 0x17,
                'bounces': 0x5,
                'health': 0x0,
                'reload': 1.8,
                'radius': 0x8,
                'tsPetalOverride': {
                    0x0: {
                        'damage': 1.2,
                        'radius': 2.5
                    }
                },
                'tanksmithShootCooldown': 0x28,
                'override': {
                    0x4: { 'bounces': 0x5 },
                    0x5: {
                        'bounces': 0x6,
                        'damage': 5.25 / 0x6
                    },
                    0x6: { 'bounces': 0x6 },
                    0x7: {
                        'bounces': 0x7,
                        'damage': 6.25 / 0x7
                    },
                    0x8: { 'bounces': 0x7 },
                    0x9: {
                        'bounces': 0x8,
                        'damage': 7.25 / 0x8
                    },
                    0xa: { 'bounces': 0x8 },
                    0xb: {
                        'bounces': 0xb,
                        'damage': 8.25 / 0xa
                    },
                    0xc: {
                        'bounces': 0xd,
                        'damage': 11.25 / 0xd
                    },
                    0xd: {
                        'radius': 0x20,
                        'bounces': 0xf
                    },
                    0xe: {
                        'radius': 0x2d,
                        'bounces': 0x11
                    },
                    0xf: {
                        'radius': 0x37,
                        'bounces': 0x12
                    },
                    0x10: {
                        'radius': 0x47,
                        'bounces': 0x13
                    }
                },
                'petalLayout': [[{}]],
                'damageScalers': [
                    'damage',
                    'maxDamage'
                ],
                'healthScalers': ['health']
            },
            'Cinderleaf': {
                'damage': 0x0,
                'hitBlastRadius': 0xb4,
                'hitBlastDamage': 15.4,
                'health': 0x3b9aca00,
                'reload': 0.2,
                'radius': 0x8,
                'ignoreAttackDistance': !![],
                'tsPetalOverride': {
                    0x0: {
                        'damage': 1.1,
                        'radius': 2.5
                    }
                },
                'tanksmithShootCooldown': 0x14,
                'override': {
                    0x4: {
                        'hitBlastRadius': 0xdc,
                        'radius': 0xa
                    },
                    0x5: {
                        'hitBlastRadius': 0x104,
                        'radius': 0xc
                    },
                    0x6: {
                        'hitBlastRadius': 0x12c,
                        'radius': 0xe
                    },
                    0x7: {
                        'hitBlastRadius': 0x154,
                        'radius': 0x10
                    },
                    0x8: {
                        'hitBlastRadius': 0x17c,
                        'radius': 0x12
                    },
                    0x9: {
                        'hitBlastRadius': 0x1a4,
                        'radius': 0x14
                    },
                    0xa: {
                        'hitBlastRadius': 0x1e0,
                        'radius': 0x16,
                        'hitBlastDamage': 0.96
                    },
                    0xb: {
                        'hitBlastRadius': 0x21c,
                        'radius': 0x18,
                        'hitBlastDamage': 0.92
                    },
                    0xc: {
                        'hitBlastRadius': 0x258,
                        'radius': 0x1a,
                        'hitBlastDamage': 0.92
                    },
                    0xd: {
                        'hitBlastRadius': 0x294,
                        'radius': 0x20,
                        'hitBlastDamage': 0.92
                    },
                    0xe: {
                        'hitBlastRadius': 0x2d0,
                        'radius': 0x26,
                        'hitBlastDamage': 0.92 * 0.72
                    },
                    0xf: {
                        'hitBlastRadius': 0x2e4,
                        'radius': 0x2c,
                        'hitBlastDamage': 0.95
                    },
                    0x10: {
                        'hitBlastRadius': 0x2f8,
                        'radius': 0x8c,
                        'hitBlastDamage': 0.975
                    },
                    0x11: {
                        'hitBlastRadius': 0x30c,
                        'radius': 0x92,
                        'hitBlastDamage': 0.975
                    },
                    0x12: {
                        'hitBlastRadius': 0x320,
                        'radius': 0x98,
                        'hitBlastDamage': 0.975
                    }
                },
                'tanksmithCooldown': 0x6,
                'petalLayout': [[{}]],
                'damageScalers': ['hitBlastDamage'],
                'healthScalers': ['health']
            },
            'Fig': {
                'damage': 0x28,
                'blastRadius': 0xb4,
                'health': 0.1,
                'reload': 0.8,
                'radius': 0x10,
                'attackDistanceMult': 1.25,
                'tsPetalOverride': {
                    0x0: {
                        'damage': 0.9,
                        'radius': 1.5
                    }
                },
                'tanksmithShootCooldown': 0x14,
                'override': {
                    0x4: {
                        'blastRadius': 0xdc,
                        'radius': 0xa
                    },
                    0x5: {
                        'blastRadius': 0x104,
                        'radius': 0xc
                    },
                    0x6: {
                        'blastRadius': 0x12c,
                        'radius': 0xe
                    },
                    0x7: {
                        'blastRadius': 0x154,
                        'radius': 0x10
                    },
                    0x8: {
                        'blastRadius': 0x17c,
                        'radius': 0x12
                    },
                    0x9: {
                        'blastRadius': 0x1a4,
                        'radius': 0x14
                    },
                    0xa: {
                        'blastRadius': 0x1e0,
                        'radius': 0x16,
                        'damage': 0.96
                    },
                    0xb: {
                        'blastRadius': 0x21c,
                        'radius': 0x18,
                        'damage': 0.93
                    },
                    0xc: {
                        'blastRadius': 0x258,
                        'radius': 0x1a,
                        'damage': 0.93
                    },
                    0xd: {
                        'blastRadius': 0x294,
                        'radius': 0x20,
                        'damage': 0.93
                    },
                    0xe: {
                        'blastRadius': 0x2d0,
                        'radius': 0x26,
                        'damage': 0.92 * 0.86
                    },
                    0xf: {
                        'blastRadius': 0x2e4,
                        'radius': 0x2c,
                        'damage': 0.95
                    },
                    0x10: {
                        'blastRadius': 0x2f8,
                        'radius': 0x32,
                        'damage': 0.95
                    },
                    0x11: {
                        'blastRadius': 0x30c,
                        'radius': 0x38,
                        'damage': 0.95
                    },
                    0x12: {
                        'blastRadius': 0x320,
                        'radius': 0x3e,
                        'damage': 0.95
                    }
                },
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health']
            },
            'Coconut': {
                'damage': 0.2,
                'finalHitDamage': 0x3a7,
                'health': 0x1676,
                'reload': 1.6,
                'radius': 0xf,
                'tsPetalOverride': {
                    0x0: {
                        'finalHitDamage': 1.1,
                        'radius': 1.5,
                        'health': 0.75
                    }
                },
                'override': {
                    0x8: { 'radius': 0x14 },
                    0xc: {
                        'radius': 0x19,
                        'health': 0.85,
                        'finalHitDamage': 1.2
                    },
                    0xd: {
                        'radius': 0x28,
                        'finalHitDamage': 1.1 * 1.06,
                        'health': 0.8
                    },
                    0xe: {
                        'radius': 0x3c,
                        'health': 0x2 / 0x3,
                        'finalHitDamage': 0x1 / 0x3 * 1.06,
                        'damage': 0x1 / 0x3 * 1.06,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x37
                                },
                                {
                                    'offsetAngle': 0x2 * Math['PI'] / 0x3,
                                    'offsetRadius': 0x37
                                },
                                {
                                    'offsetAngle': 0x4 * Math['PI'] / 0x3,
                                    'offsetRadius': 0x37
                                }
                            ]]
                    },
                    0xf: {
                        'radius': 0x50,
                        'health': 0.6,
                        'finalHitDamage': 1.06
                    },
                    0x10: {
                        'radius': 0x64,
                        'finalHitDamage': 1.06
                    }
                },
                'petalLayout': [[{}]],
                'damageScalers': [
                    'damage',
                    'finalHitDamage'
                ],
                'healthScalers': ['health']
            },
            'Root': {
                'damage': 32.6,
                'health': 0xa,
                'reload': 0x1,
                'armorPercent': 0x14,
                'flowerArmor': 0x5,
                'radius': 0xb,
                'override': {
                    0x1: { 'armorPercent': 0x16 },
                    0x2: { 'armorPercent': 0x18 },
                    0x3: { 'armorPercent': 0x1a },
                    0x4: { 'armorPercent': 0x1c },
                    0x5: { 'armorPercent': 0x1e },
                    0x6: { 'armorPercent': 0x20 },
                    0x7: { 'armorPercent': 0x22 },
                    0x8: { 'armorPercent': 0x24 },
                    0x9: { 'armorPercent': 0x26 },
                    0xa: { 'armorPercent': 0x28 },
                    0xb: { 'armorPercent': 0x2a },
                    0xc: {
                        'radius': 0x18,
                        'armorPercent': 0x2c
                    },
                    0xd: {
                        'radius': 0x1e,
                        'armorPercent': 0x2e
                    },
                    0xe: {
                        'radius': 0x24,
                        'armorPercent': 0x30
                    },
                    0xf: {
                        'radius': 0x2a,
                        'armorPercent': 0x32
                    },
                    0x10: {
                        'radius': 0x2e,
                        'armorPercent': 0x34
                    },
                    0x11: {
                        'radius': 0x34,
                        'armorPercent': 0x35
                    },
                    0x12: {
                        'radius': 0x38,
                        'armorPercent': 0x36
                    },
                    0x13: {
                        'radius': 0x3c,
                        'armorPercent': 0x37
                    },
                    0x14: {
                        'radius': 0x40,
                        'armorPercent': 0x38
                    },
                    0x15: {
                        'radius': 0x44,
                        'armorPercent': 0x39
                    }
                },
                'petalLayout': [[{}]],
                'healScalers': ['flowerArmor'],
                'damageScalers': ['damage'],
                'healthScalers': ['health']
            },
            'Fangs': {
                'damage': 0xb,
                'health': 0x64,
                'reload': 0x1,
                'damageHeal': 5.5,
                'radius': 0xb,
                'override': {
                    0xd: { 'radius': 0x24 },
                    0xe: { 'radius': 0x2a },
                    0xf: { 'radius': 0x2e },
                    0x10: {
                        'radius': 0x34,
                        'petalLayout': [
                            [{}],
                            [{}]
                        ],
                        'damage': 0x1 / 0x2,
                        'damageHeal': 0x1 / 0x2
                    },
                    0x11: {
                        'radius': 0x3c,
                        'petalLayout': [
                            [{}],
                            [{}],
                            [{}]
                        ],
                        'damage': 0x2 / 0x3,
                        'damageHeal': 0x2 / 0x3
                    },
                    0x12: {
                        'radius': 0x42,
                        'petalLayout': [
                            [{}],
                            [{}],
                            [{}],
                            [{}]
                        ],
                        'damage': 0x3 / 0x4,
                        'damageHeal': 0x3 / 0x4
                    }
                },
                'tsPetalOverride': { 0x0: { 'damageHeal': 2.2 } },
                'petalLayout': [[{}]],
                'healScalers': ['damageHeal'],
                'damageScalers': ['damage'],
                'healthScalers': ['health']
            },
            'Jolt': {
                'damage': 0x1,
                'health': 0x3e8,
                'reload': 4.2,
                'cooldown': 0xf,
                'radius': 0xe,
                'override': {
                    0x1: { 'reload': 0x4 },
                    0x2: { 'reload': 3.8 },
                    0x3: { 'reload': 3.6 },
                    0x4: { 'reload': 3.4 },
                    0x5: { 'reload': 3.2 },
                    0x6: { 'reload': 0x3 },
                    0x7: { 'reload': 2.8 },
                    0x8: { 'reload': 2.6 },
                    0x9: { 'reload': 2.4 },
                    0xa: { 'reload': 1.8 },
                    0xb: {
                        'reload': 1.2,
                        'cooldown': 0xc
                    },
                    0xc: {
                        'reload': 0.4,
                        'cooldown': 0x8
                    },
                    0xd: {
                        'reload': 0.4,
                        'cooldown': 0x3c
                    },
                    0xe: { 'cooldown': 0x32 },
                    0xf: { 'cooldown': 0x28 },
                    0x10: { 'cooldown': 0x1e },
                    0x11: { 'cooldown': 0x19 },
                    0x12: { 'cooldown': 0x14 },
                    0x13: { 'cooldown': 0x12 },
                    0x14: { 'cooldown': 0x10 },
                    0x15: { 'cooldown': 0xf },
                    0x16: { 'cooldown': 0xe },
                    0x17: { 'cooldown': 0xd },
                    0x18: { 'cooldown': 0xc },
                    0x19: { 'cooldown': 0xb }
                },
                'pvpOverride': {
                    0x0: {
                        'reload': 0x1e,
                        'cooldown': 0x78
                    }
                },
                'tsPetalOverride': {
                    0x1: { 'reload': 0x4 + 0.32 },
                    0x2: { 'reload': 3.8 + 0.32 },
                    0x3: { 'reload': 3.6 + 0.32 },
                    0x4: { 'reload': 3.4 + 0.32 },
                    0x5: { 'reload': 3.2 + 0.32 },
                    0x6: { 'reload': 0x3 + 0.32 },
                    0x7: { 'reload': 2.8 + 0.32 },
                    0x8: { 'reload': 2.6 + 0.32 },
                    0x9: { 'reload': 2.4 + 0.32 },
                    0xa: { 'reload': 1.8 + 0.32 },
                    0xb: {
                        'reload': 1.2 + 0.32,
                        'cooldown': 0xc
                    },
                    0xc: {
                        'reload': 0.4 + 0.32,
                        'cooldown': 0x8
                    },
                    0xd: {
                        'reload': 0.4 + 0.32,
                        'cooldown': 0x3c
                    },
                    0xe: { 'cooldown': 0x32 },
                    0xf: { 'cooldown': 0x2a },
                    0x10: { 'cooldown': 0x23 },
                    0x11: { 'cooldown': 0x1e },
                    0x12: { 'cooldown': 0x1a },
                    0x13: { 'cooldown': 0x17 },
                    0x14: { 'cooldown': 0x14 }
                },
                'petalLayout': [[{}]],
                'healScalers': ['damageHeal'],
                'damageScalers': ['damage'],
                'healthScalers': ['health']
            },
            'JoltProjectile': {
                'damage': 0x1,
                'health': 0x3e8,
                'reload': 4.2,
                'cooldown': 0xf,
                'radius': 0xe,
                'override': {
                    0x1: { 'reload': 0x4 },
                    0x2: { 'reload': 3.8 },
                    0x3: { 'reload': 3.6 },
                    0x4: { 'reload': 3.4 },
                    0x5: { 'reload': 3.2 },
                    0x6: { 'reload': 0x3 },
                    0x7: { 'reload': 2.8 },
                    0x8: { 'reload': 2.6 },
                    0x9: { 'reload': 2.4 },
                    0xa: { 'reload': 1.8 },
                    0xb: {
                        'reload': 1.2,
                        'cooldown': 0xc
                    },
                    0xc: {
                        'reload': 0.4,
                        'cooldown': 0x8
                    },
                    0xd: {
                        'reload': 0.4,
                        'cooldown': 0x3c
                    },
                    0xe: { 'cooldown': 0x32 },
                    0xf: { 'cooldown': 0x28 },
                    0x10: { 'cooldown': 0x1e },
                    0x11: { 'cooldown': 0x19 },
                    0x12: { 'cooldown': 0x14 },
                    0x13: { 'cooldown': 0x12 },
                    0x14: { 'cooldown': 0x10 },
                    0x15: { 'cooldown': 0xf },
                    0x16: { 'cooldown': 0xe },
                    0x17: { 'cooldown': 0xd },
                    0x18: { 'cooldown': 0xc },
                    0x19: { 'cooldown': 0xb }
                },
                'pvpOverride': {
                    0x0: {
                        'reload': 0x1e,
                        'cooldown': 0x78
                    }
                },
                'petalLayout': [[{}]],
                'healScalers': ['damageHeal'],
                'damageScalers': ['damage'],
                'healthScalers': ['health']
            },
            'Blood\x20Jolt': {
                'damage': 0x1,
                'health': 0x3e8,
                'reload': 4.2,
                'cooldown': 0x64,
                'radius': 0xe,
                'override': {
                    0x1: {
                        'reload': 0x4,
                        'cooldown': 0x5a
                    },
                    0x2: {
                        'reload': 3.8,
                        'cooldown': 0x50
                    },
                    0x3: {
                        'reload': 3.6,
                        'cooldown': 0x46
                    },
                    0x4: {
                        'reload': 3.4,
                        'cooldown': 0x3c
                    },
                    0x5: {
                        'reload': 3.2,
                        'cooldown': 0x38
                    },
                    0x6: {
                        'reload': 0x3,
                        'cooldown': 0x30
                    },
                    0x7: {
                        'reload': 2.8,
                        'cooldown': 0x2a
                    },
                    0x8: {
                        'reload': 2.6,
                        'cooldown': 0x24
                    },
                    0x9: {
                        'reload': 2.4,
                        'cooldown': 0x1e
                    },
                    0xa: {
                        'reload': 1.8,
                        'cooldown': 0x18
                    },
                    0xb: {
                        'reload': 1.2,
                        'cooldown': 0x12
                    },
                    0xc: {
                        'reload': 0.4,
                        'cooldown': 0xc
                    },
                    0xd: {
                        'reload': 0.4,
                        'cooldown': 0x6
                    },
                    0xe: { 'cooldown': 0x5 },
                    0xf: { 'cooldown': 4.6 },
                    0x10: { 'cooldown': 4.2 },
                    0x11: { 'cooldown': 3.9 },
                    0x12: { 'cooldown': 3.7 },
                    0x13: { 'cooldown': 3.6 },
                    0x14: { 'cooldown': 3.5 }
                },
                'pvpOverride': {
                    0x0: {
                        'reload': 0xf0,
                        'cooldown': 0xf0
                    }
                },
                'petalLayout': [[{}]],
                'healScalers': ['damageHeal'],
                'damageScalers': ['damage'],
                'healthScalers': ['health']
            },
            'BloodJoltProjectile': {
                'damage': 0x1,
                'health': 0x3e8,
                'reload': 4.2,
                'cooldown': 0x78,
                'radius': 0xe,
                'override': {
                    0x1: {
                        'reload': 0x4,
                        'cooldown': 0x5a
                    },
                    0x2: {
                        'reload': 3.8,
                        'cooldown': 0x50
                    },
                    0x3: {
                        'reload': 3.6,
                        'cooldown': 0x46
                    },
                    0x4: {
                        'reload': 3.4,
                        'cooldown': 0x3c
                    },
                    0x5: {
                        'reload': 3.2,
                        'cooldown': 0x38
                    },
                    0x6: {
                        'reload': 0x3,
                        'cooldown': 0x30
                    },
                    0x7: {
                        'reload': 2.8,
                        'cooldown': 0x2a
                    },
                    0x8: {
                        'reload': 2.6,
                        'cooldown': 0x24
                    },
                    0x9: {
                        'reload': 2.4,
                        'cooldown': 0x1e
                    },
                    0xa: {
                        'reload': 1.8,
                        'cooldown': 0x18
                    },
                    0xb: {
                        'reload': 1.2,
                        'cooldown': 0x12
                    },
                    0xc: {
                        'reload': 0.4,
                        'cooldown': 0xc
                    },
                    0xd: {
                        'reload': 0.4,
                        'cooldown': 0x6
                    },
                    0xe: { 'cooldown': 0x5 },
                    0xf: { 'cooldown': 4.6 },
                    0x10: { 'cooldown': 4.2 },
                    0x11: { 'cooldown': 3.9 },
                    0x12: { 'cooldown': 3.7 },
                    0x13: { 'cooldown': 3.6 },
                    0x14: { 'cooldown': 3.5 }
                },
                'pvpOverride': {
                    0x0: {
                        'reload': 0xf0,
                        'cooldown': 0xf0
                    }
                },
                'petalLayout': [[{}]],
                'healScalers': ['damageHeal'],
                'damageScalers': ['damage'],
                'healthScalers': ['health']
            },
            'Jelly': {
                'damage': 0x9,
                'health': 0xbe,
                'reload': 1.7,
                'radius': 0xb,
                'knockbackMass': 0x5,
                'petalLayout': [[{}]],
                'override': {
                    0xc: { 'radius': 0x16 },
                    0xd: { 'radius': 0x30 },
                    0xe: { 'damage': 1.002 },
                    0xf: { 'radius': 0x3c },
                    0x10: { 'radius': 0x48 },
                    0x11: { 'radius': 0x50 },
                    0x12: { 'radius': 0x58 },
                    0x13: { 'radius': 0x60 }
                },
                'tsPetalOverride': {
                    0x0: {
                        'damage': 0.8,
                        'knockbackMass': 0x4
                    }
                },
                'tanksmithShootCooldown': 0x42,
                'tanksmithCooldown': 0xf0,
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'massScalers': ['knockbackMass']
            },
            'Sponge': {
                'damage': 0x1,
                'health': 0x30d40,
                'reload': 7.6,
                'radius': 0xf,
                'period': 0x1,
                'override': {
                    0x1: {
                        'period': 0x2,
                        'reload': 7.2
                    },
                    0x2: {
                        'period': 0x3,
                        'reload': 6.8
                    },
                    0x3: {
                        'period': 0x4,
                        'reload': 6.4
                    },
                    0x4: {
                        'period': 0x5,
                        'reload': 0x6
                    },
                    0x5: {
                        'period': 0x6,
                        'reload': 5.6
                    },
                    0x6: {
                        'period': 0x7,
                        'reload': 5.2
                    },
                    0x7: {
                        'period': 0x8,
                        'reload': 4.8
                    },
                    0x8: {
                        'period': 0x9,
                        'reload': 4.4
                    },
                    0x9: {
                        'period': 0xa,
                        'reload': 0x4
                    },
                    0xa: {
                        'period': 0xb,
                        'reload': 3.6
                    },
                    0xb: {
                        'period': 0xd,
                        'reload': 3.2
                    },
                    0xc: {
                        'period': 0xf,
                        'reload': 0x3
                    },
                    0xd: {
                        'period': 0x14,
                        'reload': 2.9
                    },
                    0xe: {
                        'period': 0x19,
                        'reload': 2.8
                    },
                    0xf: {
                        'period': 0x1c,
                        'reload': 2.7
                    },
                    0x10: {
                        'period': 0x1f,
                        'reload': 2.6
                    }
                },
                'pvpOverride': {
                    0x0: {
                        'period': 0x1,
                        'reload': 0x5
                    },
                    0x1: {
                        'period': 1.1,
                        'reload': 0x5
                    },
                    0x2: {
                        'period': 1.2,
                        'reload': 0x5
                    },
                    0x3: {
                        'period': 1.3,
                        'reload': 0x5
                    },
                    0x4: {
                        'period': 1.4,
                        'reload': 0x5
                    },
                    0x5: {
                        'period': 1.5,
                        'reload': 0x5
                    },
                    0x6: {
                        'period': 1.6,
                        'reload': 0x5
                    },
                    0x7: {
                        'period': 1.7,
                        'reload': 0x5
                    },
                    0x8: {
                        'period': 1.8,
                        'reload': 0x5
                    },
                    0x9: {
                        'period': 1.9,
                        'reload': 0x5
                    },
                    0xa: {
                        'period': 0x2,
                        'reload': 0x5
                    },
                    0xb: {
                        'period': 2.1,
                        'reload': 0x5
                    },
                    0xc: {
                        'period': 2.2,
                        'reload': 0x5
                    },
                    0xd: {
                        'period': 2.3,
                        'reload': 0x5
                    }
                },
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': [
                    'health',
                    'tanksmithHp'
                ],
                'ignoreAttackDistance': !![],
                'tanksmithShootCooldown': 0x9,
                'tanksmithRadius': 0x1e,
                'tanksmithCooldown': 0xaa,
                'tanksmithHp': 0x12c,
                'tanksmithBarrelNum': 0x1,
                'tsPetalOverride': {
                    0x0: {
                        'radius': 0x2,
                        'damage': 0.01
                    }
                },
                'tsProjectileSpeed': 0xa,
                'tsProjectileLifetime': 0x5a,
                'tsBarrelData': [{ 'angle': 0x0 }]
            },
            'Dandelion': {
                'damage': 0xa,
                'health': 0x5,
                'reload': 0x1,
                'radius': 0xa,
                'effect': 0xa * 0x3,
                'override': {
                    0x1: { 'effect': 0x30 },
                    0x2: { 'effect': 0x60 },
                    0x3: { 'effect': 0xc0 },
                    0x4: { 'effect': 0x1a4 },
                    0x5: {
                        'effect': 0x49c,
                        'petalLayout': [
                            [{}],
                            [{}]
                        ],
                        'damage': 0x1 / 0x2
                    },
                    0x6: {
                        'effect': 0xd98,
                        'petalLayout': [
                            [{}],
                            [{}],
                            [{}]
                        ],
                        'damage': 0x2 / 0x3
                    },
                    0x7: {
                        'effect': 0x27d8,
                        'petalLayout': [
                            [{}],
                            [{}],
                            [{}]
                        ],
                        'radius': 0xc
                    },
                    0x8: {
                        'effect': 0x68b0,
                        'petalLayout': [
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}]
                        ],
                        'damage': 0x4 / 0x5
                    },
                    0x9: {
                        'effect': 0x13560,
                        'petalLayout': [
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}]
                        ],
                        'radius': 0xe
                    },
                    0xa: { 'effect': 0x42680 },
                    0xb: { 'effect': 0xe4070 },
                    0xc: {
                        'effect': 0x30fb10,
                        'petalLayout': [
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}]
                        ],
                        'damage': 0x6 / 0x7
                    },
                    0xd: {
                        'effect': 0x18bac30,
                        'radius': 0x14,
                        'petalLayout': [
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}]
                        ],
                        'damage': 0x7 / 0x8
                    },
                    0xe: {
                        'effect': 0xbebc200,
                        'radius': 0x1e,
                        'petalLayout': [
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}]
                        ],
                        'damage': 0x8 / 0x9
                    },
                    0xf: {
                        'effect': 0x5f5e1000,
                        'radius': 0x1e,
                        'petalLayout': [
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}]
                        ],
                        'damage': 0x9 / 0xa
                    },
                    0x10: {
                        'effect': 0x2540be400,
                        'radius': 0x1e,
                        'petalLayout': [
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}]
                        ],
                        'damage': 0xa / 0xb
                    }
                },
                'pvpOverride': {
                    0x0: {
                        'radius': 0x28,
                        'health': 0x32,
                        'damage': 0x1
                    }
                },
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'attackDistanceMult': 0x1 / attackPetalDistanceMult
            },
            'DandelionProjectile': {
                'damage': 0xa,
                'health': 0x5,
                'reload': 0x1,
                'radius': 0xa,
                'effect': 0xa * 0x3,
                'override': {
                    0x1: { 'effect': 0x30 },
                    0x2: { 'effect': 0x60 },
                    0x3: { 'effect': 0xc0 },
                    0x4: { 'effect': 0x1a4 },
                    0x5: {
                        'effect': 0x49c,
                        'petalLayout': [
                            [{}],
                            [{}]
                        ],
                        'damage': 0x1 / 0x2
                    },
                    0x6: {
                        'effect': 0xd98,
                        'petalLayout': [
                            [{}],
                            [{}],
                            [{}]
                        ],
                        'damage': 0x2 / 0x3
                    },
                    0x7: {
                        'effect': 0x27d8,
                        'petalLayout': [
                            [{}],
                            [{}],
                            [{}]
                        ],
                        'radius': 0xc
                    },
                    0x8: {
                        'effect': 0x68b0,
                        'petalLayout': [
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}]
                        ],
                        'damage': 0x4 / 0x5
                    },
                    0x9: {
                        'effect': 0x13560,
                        'petalLayout': [
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}]
                        ],
                        'radius': 0xe
                    },
                    0xa: { 'effect': 0x42680 },
                    0xb: { 'effect': 0xe4070 },
                    0xc: {
                        'effect': 0x30fb10,
                        'petalLayout': [
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}]
                        ],
                        'damage': 0x6 / 0x7
                    },
                    0xd: {
                        'effect': 0x18bac30,
                        'radius': 0x14,
                        'petalLayout': [
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}]
                        ],
                        'damage': 0x7 / 0x8
                    },
                    0xe: {
                        'effect': 0xbebc200,
                        'radius': 0x1e,
                        'petalLayout': [
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}]
                        ],
                        'damage': 0x8 / 0x9
                    },
                    0xf: {
                        'effect': 0x5f5e1000,
                        'radius': 0x1e,
                        'petalLayout': [
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}]
                        ],
                        'damage': 0x9 / 0xa
                    },
                    0x10: {
                        'effect': 0x2540be400,
                        'radius': 0x1e,
                        'petalLayout': [
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}]
                        ],
                        'damage': 0xa / 0xb
                    }
                },
                'pvpOverride': {
                    0x0: {
                        'radius': 0x28,
                        'health': 0x32,
                        'damage': 0x1
                    }
                },
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'ignoreAttackDistance': !![]
            },
            'Web': {
                'damage': 0x8,
                'health': 0x5,
                'reload': 2.5,
                'radius': 0xa,
                'slowdown': 0.7,
                'slowdownTime': 0.04,
                'stickParentRotation': !![],
                'override': { 0xd: { 'radius': 0x1e } },
                'tsProjectileSpeed': 0x14,
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'ignoreAttackDistance': !![]
            },
            'WebProjectile': {
                'damage': 0x8,
                'health': 0x1f4,
                'reload': 2.5,
                'radius': 0xa,
                'override': { 0xd: { 'radius': 0x1e } },
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health']
            },
            'WebProjectileWeb': {
                'damage': 0x0,
                'health': 0x3a35294400,
                'reload': 0x3,
                'radius': 0x28,
                'slowdown': 0.7,
                'slowdownTime': 0.04,
                'override': {
                    0x1: { 'radius': 0x37 * 1.3 },
                    0x2: { 'radius': 0x46 * 1.3 },
                    0x3: { 'radius': 0x5f * 1.3 },
                    0x4: { 'radius': 0x6e * 1.3 },
                    0x5: { 'radius': 0x82 * 1.3 },
                    0x6: { 'radius': 0xa0 * 1.3 },
                    0x7: { 'radius': 0xc8 * 1.3 },
                    0x8: { 'radius': 0xfa * 1.3 },
                    0x9: { 'radius': 0x136 * 1.3 },
                    0xa: { 'radius': 0x17c * 1.3 },
                    0xb: { 'radius': 0x1cc * 1.3 },
                    0xc: { 'radius': 0x226 * 1.3 },
                    0xd: { 'radius': 0x2ee * 1.3 },
                    0xe: { 'radius': 0x302 * 1.3 },
                    0xf: { 'radius': 0x316 * 1.3 },
                    0x10: { 'radius': 0x32a * 1.3 }
                },
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health']
            },
            'Egg': {
                'damage': 0x1,
                'health': 0x23,
                'reload': 0x3,
                'radius': 0xc,
                'hatchTime': 0x1,
                'spawnRarity': 0x0,
                'override': {
                    0x1: { 'spawnRarity': 0x1 },
                    0x2: { 'spawnRarity': 0x2 },
                    0x3: { 'spawnRarity': 0x3 },
                    0x4: {
                        'hatchTime': 0x9,
                        'spawnRarity': 0x4
                    },
                    0x5: {
                        'hatchTime': 0x7,
                        'spawnRarity': 0x5
                    },
                    0x6: {
                        'hatchTime': 0x5,
                        'spawnRarity': 0x6
                    },
                    0x7: {
                        'hatchTime': 0x3,
                        'spawnRarity': 0x7
                    },
                    0x8: {
                        'hatchTime': 0x2,
                        'reload': 0x2,
                        'spawnRarity': 0x8
                    },
                    0x9: { 'spawnRarity': 0x9 },
                    0xa: {
                        'hatchTime': 2.8,
                        'reload': 2.8,
                        'spawnRarity': 0xa
                    },
                    0xb: {
                        'hatchTime': 3.6,
                        'reload': 3.6,
                        'spawnRarity': 0xb
                    },
                    0xc: {
                        'hatchTime': 4.4,
                        'reload': 4.4,
                        'spawnRarity': 0xc
                    },
                    0xd: {
                        'hatchTime': 5.2,
                        'reload': 5.2,
                        'spawnRarity': 0xd
                    },
                    0xe: {
                        'hatchTime': 0x7,
                        'reload': 0x7,
                        'spawnRarity': 0xf
                    },
                    0xf: {
                        'hatchTime': 0xb,
                        'reload': 0x7,
                        'spawnRarity': 0x13
                    },
                    0x10: {
                        'hatchTime': 0xd,
                        'reload': 0x7,
                        'spawnRarity': 0x16
                    },
                    0x11: { 'spawnRarity': 0x19 },
                    0x12: { 'spawnRarity': 0x1c }
                },
                'pvpOverride': {
                    0x0: {
                        'spawnRarity': 0x0,
                        'hatchTime': 0x8,
                        'reload': 0x8
                    },
                    0x1: {
                        'spawnRarity': 0x0,
                        'hatchTime': 0x6,
                        'reload': 0x6
                    },
                    0x2: {
                        'spawnRarity': 0x0,
                        'hatchTime': 0x4,
                        'reload': 0x4
                    },
                    0x3: {
                        'spawnRarity': 0x0,
                        'hatchTime': 0x2,
                        'reload': 0x2
                    },
                    0x4: {
                        'spawnRarity': 0x1,
                        'hatchTime': 0x4,
                        'reload': 0x4
                    },
                    0x5: {
                        'spawnRarity': 0x1,
                        'hatchTime': 0x2,
                        'reload': 0x2
                    },
                    0x6: {
                        'spawnRarity': 0x2,
                        'hatchTime': 0x6,
                        'reload': 0x4
                    },
                    0x7: {
                        'spawnRarity': 0x2,
                        'hatchTime': 0x4,
                        'reload': 0x2
                    },
                    0x8: {
                        'spawnRarity': 0x3,
                        'hatchTime': 0x8,
                        'reload': 0x4
                    },
                    0x9: {
                        'spawnRarity': 0x3,
                        'hatchTime': 0x6,
                        'reload': 0x2
                    },
                    0xa: {
                        'spawnRarity': 0x4,
                        'hatchTime': 0xa,
                        'reload': 0x4
                    },
                    0xb: {
                        'spawnRarity': 0x4,
                        'hatchTime': 0x8,
                        'reload': 0x2
                    },
                    0xc: {
                        'spawnRarity': 0x5,
                        'hatchTime': 0xc,
                        'reload': 0x4
                    },
                    0xd: {
                        'spawnRarity': 0x5,
                        'hatchTime': 0xa,
                        'reload': 0x2
                    },
                    0xe: {
                        'spawnRarity': 0x6,
                        'hatchTime': 0xe,
                        'reload': 0x4
                    },
                    0xf: {
                        'spawnRarity': 0x6,
                        'hatchTime': 0xc,
                        'reload': 0x2
                    },
                    0x10: {
                        'spawnRarity': 0x7,
                        'hatchTime': 0x10,
                        'reload': 0x4
                    },
                    0x11: {
                        'spawnRarity': 0x7,
                        'hatchTime': 0x2,
                        'reload': 0x2
                    },
                    0x12: {
                        'spawnRarity': 0x8,
                        'hatchTime': 0x3,
                        'reload': 0x3
                    }
                },
                'tsProjectileSpeed': 0x1,
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'ignoreAttackDistance': !![]
            },
            'Shiny\x20Egg': {
                'damage': 0x1,
                'health': 0x23,
                'reload': 0x3,
                'radius': 0xc,
                'hatchTime': 0x1,
                'spawnRarity': 0x0,
                'maxEat': 0x0,
                'override': {
                    0x1: {
                        'spawnRarity': 0x1,
                        'maxEat': 0x0
                    },
                    0x2: {
                        'spawnRarity': 0x2,
                        'maxEat': 0x0
                    },
                    0x3: {
                        'spawnRarity': 0x3,
                        'maxEat': 0x1
                    },
                    0x4: {
                        'hatchTime': 0x12,
                        'spawnRarity': 0x4,
                        'maxEat': 0x2
                    },
                    0x5: {
                        'hatchTime': 0xe,
                        'spawnRarity': 0x5,
                        'maxEat': 0x3
                    },
                    0x6: {
                        'hatchTime': 0xa,
                        'spawnRarity': 0x6,
                        'maxEat': 0x4
                    },
                    0x7: {
                        'hatchTime': 0x6,
                        'spawnRarity': 0x7,
                        'maxEat': 0x5
                    },
                    0x8: {
                        'hatchTime': 0x4,
                        'reload': 0x2,
                        'spawnRarity': 0x8,
                        'maxEat': 0x6
                    },
                    0x9: {
                        'spawnRarity': 0x9,
                        'maxEat': 0x7
                    },
                    0xa: {
                        'hatchTime': 5.4,
                        'reload': 2.8,
                        'spawnRarity': 0xa,
                        'maxEat': 0x8
                    },
                    0xb: {
                        'hatchTime': 7.2,
                        'reload': 3.6,
                        'spawnRarity': 0xb,
                        'maxEat': 0x9
                    },
                    0xc: {
                        'hatchTime': 8.8,
                        'reload': 4.4,
                        'spawnRarity': 0xc,
                        'maxEat': 0xa
                    },
                    0xd: {
                        'hatchTime': 10.4,
                        'reload': 5.2,
                        'spawnRarity': 0xd,
                        'maxEat': 0xc
                    },
                    0xe: {
                        'hatchTime': 0xe,
                        'reload': 0x7,
                        'spawnRarity': 0xf,
                        'maxEat': 0x10
                    },
                    0xf: {
                        'hatchTime': 0x16,
                        'reload': 0x7,
                        'spawnRarity': 0x13,
                        'maxEat': 0x14
                    },
                    0x10: {
                        'hatchTime': 0x1a,
                        'reload': 0x7,
                        'spawnRarity': 0x17,
                        'maxEat': 0x19
                    },
                    0x11: {
                        'spawnRarity': 0x1a,
                        'maxEat': 0x1c
                    },
                    0x12: {
                        'spawnRarity': 0x1d,
                        'maxEat': 0x21
                    }
                },
                'pvpOverride': {
                    0x0: {
                        'spawnRarity': 0x0,
                        'hatchTime': 0x8,
                        'reload': 0x8
                    },
                    0x1: {
                        'spawnRarity': 0x0,
                        'hatchTime': 0x6,
                        'reload': 0x6
                    },
                    0x2: {
                        'spawnRarity': 0x0,
                        'hatchTime': 0x4,
                        'reload': 0x4
                    },
                    0x3: {
                        'spawnRarity': 0x0,
                        'hatchTime': 0x2,
                        'reload': 0x2
                    },
                    0x4: {
                        'spawnRarity': 0x1,
                        'hatchTime': 0x4,
                        'reload': 0x4
                    },
                    0x5: {
                        'spawnRarity': 0x1,
                        'hatchTime': 0x2,
                        'reload': 0x2
                    },
                    0x6: {
                        'spawnRarity': 0x2,
                        'hatchTime': 0x6,
                        'reload': 0x4
                    },
                    0x7: {
                        'spawnRarity': 0x2,
                        'hatchTime': 0x4,
                        'reload': 0x2
                    },
                    0x8: {
                        'spawnRarity': 0x3,
                        'hatchTime': 0x8,
                        'reload': 0x4
                    },
                    0x9: {
                        'spawnRarity': 0x3,
                        'hatchTime': 0x6,
                        'reload': 0x2
                    },
                    0xa: {
                        'spawnRarity': 0x4,
                        'hatchTime': 0xa,
                        'reload': 0x4
                    },
                    0xb: {
                        'spawnRarity': 0x4,
                        'hatchTime': 0x8,
                        'reload': 0x2
                    },
                    0xc: {
                        'spawnRarity': 0x5,
                        'hatchTime': 0xc,
                        'reload': 0x4
                    },
                    0xd: {
                        'spawnRarity': 0x5,
                        'hatchTime': 0xa,
                        'reload': 0x2
                    },
                    0xe: {
                        'spawnRarity': 0x6,
                        'hatchTime': 0xe,
                        'reload': 0x4
                    },
                    0xf: {
                        'spawnRarity': 0x6,
                        'hatchTime': 0xc,
                        'reload': 0x2
                    },
                    0x10: {
                        'spawnRarity': 0x7,
                        'hatchTime': 0x10,
                        'reload': 0x4
                    },
                    0x11: {
                        'spawnRarity': 0x7,
                        'hatchTime': 0x2,
                        'reload': 0x2
                    },
                    0x12: {
                        'spawnRarity': 0x8,
                        'hatchTime': 0x3,
                        'reload': 0x3
                    }
                },
                'tsProjectileSpeed': 0x1,
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'ignoreAttackDistance': !![]
            },
            'Jellyfish\x20Egg': {
                'damage': 0x1,
                'health': 0x23,
                'reload': 0x3,
                'hatchTime': 0x1,
                'radius': 0xc,
                'spawnRarity': 0x0,
                'override': {
                    0x1: { 'spawnRarity': 0x1 },
                    0x2: { 'spawnRarity': 0x2 },
                    0x3: { 'spawnRarity': 0x3 },
                    0x4: {
                        'hatchTime': 0x9,
                        'spawnRarity': 0x4
                    },
                    0x5: {
                        'hatchTime': 0x7,
                        'spawnRarity': 0x5
                    },
                    0x6: {
                        'hatchTime': 0x5,
                        'spawnRarity': 0x6
                    },
                    0x7: {
                        'hatchTime': 0x3,
                        'spawnRarity': 0x7
                    },
                    0x8: {
                        'hatchTime': 0x2,
                        'reload': 0x2,
                        'spawnRarity': 0x8
                    },
                    0x9: { 'spawnRarity': 0x9 },
                    0xa: {
                        'hatchTime': 2.8,
                        'reload': 2.8,
                        'spawnRarity': 0xa
                    },
                    0xb: {
                        'hatchTime': 3.6,
                        'reload': 3.6,
                        'spawnRarity': 0xb
                    },
                    0xc: {
                        'hatchTime': 4.4,
                        'reload': 4.4,
                        'spawnRarity': 0xc
                    },
                    0xd: {
                        'hatchTime': 5.2,
                        'reload': 5.2,
                        'spawnRarity': 0xd
                    },
                    0xe: {
                        'hatchTime': 6.3,
                        'reload': 6.3,
                        'spawnRarity': 0x10
                    },
                    0xf: {
                        'hatchTime': 0x9,
                        'reload': 0x9,
                        'spawnRarity': 0x13
                    },
                    0x10: {
                        'hatchTime': 0xd,
                        'reload': 0x7,
                        'spawnRarity': 0x17
                    },
                    0x11: { 'spawnRarity': 0x1a },
                    0x12: { 'spawnRarity': 0x1d },
                    0x13: { 'spawnRarity': 0x20 }
                },
                'pvpOverride': {
                    0x0: {
                        'spawnRarity': 0x0,
                        'hatchTime': 0x8,
                        'reload': 0x8
                    },
                    0x1: {
                        'spawnRarity': 0x0,
                        'hatchTime': 0x6,
                        'reload': 0x6
                    },
                    0x2: {
                        'spawnRarity': 0x0,
                        'hatchTime': 0x4,
                        'reload': 0x4
                    },
                    0x3: {
                        'spawnRarity': 0x0,
                        'hatchTime': 0x2,
                        'reload': 0x2
                    },
                    0x4: {
                        'spawnRarity': 0x1,
                        'hatchTime': 0x4,
                        'reload': 0x4
                    },
                    0x5: {
                        'spawnRarity': 0x1,
                        'hatchTime': 0x2,
                        'reload': 0x2
                    },
                    0x6: {
                        'spawnRarity': 0x2,
                        'hatchTime': 0x6,
                        'reload': 0x4
                    },
                    0x7: {
                        'spawnRarity': 0x2,
                        'hatchTime': 0x4,
                        'reload': 0x2
                    },
                    0x8: {
                        'spawnRarity': 0x3,
                        'hatchTime': 0x8,
                        'reload': 0x4
                    },
                    0x9: {
                        'spawnRarity': 0x3,
                        'hatchTime': 0x6,
                        'reload': 0x2
                    },
                    0xa: {
                        'spawnRarity': 0x4,
                        'hatchTime': 0xa,
                        'reload': 0x4
                    },
                    0xb: {
                        'spawnRarity': 0x4,
                        'hatchTime': 0x8,
                        'reload': 0x2
                    },
                    0xc: {
                        'spawnRarity': 0x5,
                        'hatchTime': 0xc,
                        'reload': 0x4
                    },
                    0xd: {
                        'spawnRarity': 0x5,
                        'hatchTime': 0xa,
                        'reload': 0x2
                    },
                    0xe: {
                        'spawnRarity': 0x6,
                        'hatchTime': 0xe,
                        'reload': 0x4
                    },
                    0xf: {
                        'spawnRarity': 0x6,
                        'hatchTime': 0xc,
                        'reload': 0x2
                    },
                    0x10: {
                        'spawnRarity': 0x7,
                        'hatchTime': 0x10,
                        'reload': 0x4
                    },
                    0x11: {
                        'spawnRarity': 0x7,
                        'hatchTime': 0x2,
                        'reload': 0x2
                    },
                    0x12: {
                        'spawnRarity': 0x8,
                        'hatchTime': 0x3,
                        'reload': 0x3
                    }
                },
                'tsProjectileSpeed': 0x1,
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'ignoreAttackDistance': !![]
            },
            'Neuroflare\x20Egg': {
                'damage': 0x1,
                'health': 0x2d,
                'reload': 0x3,
                'hatchTime': 0x1,
                'radius': 0xc,
                'spawnRarity': 0x0,
                'override': {
                    0x1: { 'spawnRarity': 0x1 },
                    0x2: { 'spawnRarity': 0x2 },
                    0x3: { 'spawnRarity': 0x3 },
                    0x4: {
                        'hatchTime': 0xf,
                        'spawnRarity': 0x4
                    },
                    0x5: {
                        'hatchTime': 0xd,
                        'spawnRarity': 0x5
                    },
                    0x6: {
                        'hatchTime': 0xb,
                        'spawnRarity': 0x6
                    },
                    0x7: {
                        'hatchTime': 0x9,
                        'spawnRarity': 0x7
                    },
                    0x8: {
                        'hatchTime': 0x7,
                        'reload': 0x2,
                        'spawnRarity': 0x8
                    },
                    0x9: { 'spawnRarity': 0x9 },
                    0xa: {
                        'hatchTime': 0x6,
                        'reload': 0x3,
                        'spawnRarity': 0xa
                    },
                    0xb: {
                        'hatchTime': 0x7,
                        'reload': 0x4,
                        'spawnRarity': 0xb
                    },
                    0xc: {
                        'hatchTime': 0x8,
                        'reload': 0x5,
                        'spawnRarity': 0xc
                    },
                    0xd: {
                        'hatchTime': 0x9,
                        'reload': 0x6,
                        'spawnRarity': 0xd
                    },
                    0xe: {
                        'hatchTime': 0xc,
                        'reload': 0x8,
                        'spawnRarity': 0x10
                    },
                    0xf: {
                        'hatchTime': 0xf,
                        'reload': 0x9,
                        'spawnRarity': 0x13
                    },
                    0x10: { 'spawnRarity': 0x17 },
                    0x11: { 'spawnRarity': 0x1a },
                    0x12: { 'spawnRarity': 0x1d }
                },
                'pvpOverride': {
                    0x0: {
                        'spawnRarity': 0x0,
                        'hatchTime': 0x8,
                        'reload': 0x8
                    },
                    0x1: {
                        'spawnRarity': 0x0,
                        'hatchTime': 0x6,
                        'reload': 0x6
                    },
                    0x2: {
                        'spawnRarity': 0x0,
                        'hatchTime': 0x4,
                        'reload': 0x4
                    },
                    0x3: {
                        'spawnRarity': 0x0,
                        'hatchTime': 0x2,
                        'reload': 0x2
                    },
                    0x4: {
                        'spawnRarity': 0x1,
                        'hatchTime': 0x4,
                        'reload': 0x4
                    },
                    0x5: {
                        'spawnRarity': 0x1,
                        'hatchTime': 0x2,
                        'reload': 0x2
                    },
                    0x6: {
                        'spawnRarity': 0x2,
                        'hatchTime': 0x6,
                        'reload': 0x4
                    },
                    0x7: {
                        'spawnRarity': 0x2,
                        'hatchTime': 0x4,
                        'reload': 0x2
                    },
                    0x8: {
                        'spawnRarity': 0x3,
                        'hatchTime': 0x8,
                        'reload': 0x4
                    },
                    0x9: {
                        'spawnRarity': 0x3,
                        'hatchTime': 0x6,
                        'reload': 0x2
                    },
                    0xa: {
                        'spawnRarity': 0x4,
                        'hatchTime': 0xa,
                        'reload': 0x4
                    },
                    0xb: {
                        'spawnRarity': 0x4,
                        'hatchTime': 0x8,
                        'reload': 0x2
                    },
                    0xc: {
                        'spawnRarity': 0x5,
                        'hatchTime': 0xc,
                        'reload': 0x4
                    },
                    0xd: {
                        'spawnRarity': 0x5,
                        'hatchTime': 0xa,
                        'reload': 0x2
                    },
                    0xe: {
                        'spawnRarity': 0x6,
                        'hatchTime': 0xe,
                        'reload': 0x4
                    },
                    0xf: {
                        'spawnRarity': 0x6,
                        'hatchTime': 0xc,
                        'reload': 0x2
                    },
                    0x10: {
                        'spawnRarity': 0x7,
                        'hatchTime': 0x10,
                        'reload': 0x4
                    },
                    0x11: {
                        'spawnRarity': 0x7,
                        'hatchTime': 0x2,
                        'reload': 0x2
                    },
                    0x12: {
                        'spawnRarity': 0x8,
                        'hatchTime': 0x3,
                        'reload': 0x3
                    }
                },
                'tsProjectileSpeed': 0x1,
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'ignoreAttackDistance': !![]
            },
            'Plastic\x20Egg': {
                'damage': 0x1,
                'health': 0x28,
                'reload': 0.5,
                'radius': 0xc,
                'hatchTime': 0x1,
                'spawnRarity': 0x0,
                'override': {
                    0x1: { 'spawnRarity': 0x1 },
                    0x2: { 'spawnRarity': 0x2 },
                    0x3: { 'spawnRarity': 0x3 },
                    0x4: {
                        'hatchTime': 0x4,
                        'spawnRarity': 0x4
                    },
                    0x5: {
                        'hatchTime': 0x3,
                        'spawnRarity': 0x5
                    },
                    0x6: {
                        'hatchTime': 0x2,
                        'spawnRarity': 0x6
                    },
                    0x7: {
                        'hatchTime': 1.25,
                        'spawnRarity': 0x7
                    },
                    0x8: {
                        'hatchTime': 0.8,
                        'spawnRarity': 0x8
                    },
                    0x9: {
                        'hatchTime': 0.5,
                        'spawnRarity': 0x9
                    },
                    0xa: { 'spawnRarity': 0xa },
                    0xb: { 'spawnRarity': 0xb },
                    0xc: {
                        'spawnRarity': 0xc,
                        'hatchTime': 0x1
                    },
                    0xd: {
                        'spawnRarity': 0xd,
                        'hatchTime': 0x2
                    },
                    0xe: { 'spawnRarity': 0x10 },
                    0xf: { 'spawnRarity': 0x13 },
                    0x10: { 'spawnRarity': 0x17 },
                    0x11: { 'spawnRarity': 0x1a },
                    0x12: { 'spawnRarity': 0x1d }
                },
                'pvpOverride': {
                    0x0: {
                        'spawnRarity': 0x0,
                        'hatchTime': 0x4,
                        'reload': 0x4
                    },
                    0x1: {
                        'spawnRarity': 0x0,
                        'hatchTime': 0x3,
                        'reload': 0x3
                    },
                    0x2: {
                        'spawnRarity': 0x0,
                        'hatchTime': 0x2,
                        'reload': 0x2
                    },
                    0x3: {
                        'spawnRarity': 0x0,
                        'hatchTime': 0x1,
                        'reload': 0x1
                    },
                    0x4: {
                        'spawnRarity': 0x1,
                        'hatchTime': 0x2,
                        'reload': 0x2
                    },
                    0x5: {
                        'spawnRarity': 0x1,
                        'hatchTime': 0x1,
                        'reload': 0x1
                    },
                    0x6: {
                        'spawnRarity': 0x2,
                        'hatchTime': 0x2,
                        'reload': 0x2
                    },
                    0x7: {
                        'spawnRarity': 0x2,
                        'hatchTime': 0x1,
                        'reload': 0x1
                    },
                    0x8: {
                        'spawnRarity': 0x3,
                        'hatchTime': 0x2,
                        'reload': 0x2
                    },
                    0x9: {
                        'spawnRarity': 0x3,
                        'hatchTime': 0x1,
                        'reload': 0x1
                    },
                    0xa: {
                        'spawnRarity': 0x4,
                        'hatchTime': 0x2,
                        'reload': 0x2
                    },
                    0xb: {
                        'spawnRarity': 0x4,
                        'hatchTime': 0x1,
                        'reload': 0x1
                    },
                    0xc: {
                        'spawnRarity': 0x5,
                        'hatchTime': 0x2,
                        'reload': 0x2
                    },
                    0xd: {
                        'spawnRarity': 0x5,
                        'hatchTime': 0x1,
                        'reload': 0x1
                    },
                    0xe: {
                        'spawnRarity': 0x6,
                        'hatchTime': 0x2,
                        'reload': 0x2
                    },
                    0xf: {
                        'spawnRarity': 0x6,
                        'hatchTime': 0x1,
                        'reload': 0x1
                    },
                    0x10: {
                        'spawnRarity': 0x7,
                        'hatchTime': 0x2,
                        'reload': 0x2
                    },
                    0x11: {
                        'spawnRarity': 0x7,
                        'hatchTime': 0x1,
                        'reload': 0x1
                    },
                    0x12: {
                        'spawnRarity': 0x8,
                        'hatchTime': 1.5,
                        'reload': 1.5
                    }
                },
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'ignoreAttackDistance': !![]
            },
            'Mini\x20Flower': {
                'damage': 0x1,
                'health': 0x28,
                'reload': 0xf,
                'radius': 0xc,
                'petalNum': 0x2,
                'override': {
                    0x0: {
                        'petalNum': 0x2,
                        'damage': 0x1,
                        'reload': 0xa
                    },
                    0x1: {
                        'petalNum': 0x3,
                        'damage': 0x1,
                        'reload': 0x8
                    },
                    0x2: {
                        'petalNum': 0x3,
                        'damage': 0x1,
                        'reload': 0x6
                    },
                    0x3: {
                        'petalNum': 0x4,
                        'reload': 5.5
                    },
                    0x4: {
                        'petalNum': 0x4,
                        'reload': 0x5
                    },
                    0x5: {
                        'petalNum': 0x5,
                        'reload': 4.5
                    },
                    0xe: {
                        'petalNum': 0xa,
                        'reload': 0.5
                    },
                    0xf: {
                        'petalNum': 0x19,
                        'reload': 0.5
                    },
                    0x10: {
                        'petalNum': 0x32,
                        'reload': 0.5
                    },
                    0x11: {
                        'petalNum': 0x64,
                        'reload': 0.5
                    }
                },
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'attackDistanceMult': 0x1 / attackPetalDistanceMult
            },
            'Stick': {
                'damage': 0.1,
                'health': 0x3e8,
                'reload': 0x3,
                'radius': 0xc,
                'spawnSystem': [
                    0x0,
                    0xc,
                    0x2
                ],
                'petalLayout': [[{}]],
                'tanksmithShootCooldown': 0x140,
                'override': {
                    0x1: {
                        'spawnSystem': [
                            0x1,
                            0xc,
                            0x2
                        ]
                    },
                    0x2: {
                        'spawnSystem': [
                            0x2,
                            0xc,
                            0x2
                        ]
                    },
                    0x3: {
                        'spawnSystem': [
                            0x3,
                            0xc,
                            0x3
                        ]
                    },
                    0x4: {
                        'spawnSystem': [
                            0x4,
                            0x19,
                            0x3
                        ]
                    },
                    0x5: {
                        'spawnSystem': [
                            0x5,
                            0x19,
                            0x3
                        ]
                    },
                    0x6: {
                        'spawnSystem': [
                            0x6,
                            0x19,
                            0x3
                        ]
                    },
                    0x7: {
                        'spawnSystem': [
                            0x7,
                            0x19,
                            0x3
                        ]
                    },
                    0x8: {
                        'spawnSystem': [
                            0x8,
                            0x19,
                            0x3
                        ]
                    },
                    0x9: {
                        'spawnSystem': [
                            0x9,
                            0x19,
                            0x3
                        ]
                    },
                    0xa: {
                        'spawnSystem': [
                            0xa,
                            0x19,
                            0x3
                        ]
                    },
                    0xb: {
                        'spawnSystem': [
                            0xb,
                            0x19,
                            0x3
                        ]
                    },
                    0xc: {
                        'spawnSystem': [
                            0xc,
                            0x19,
                            0x4
                        ]
                    },
                    0xd: {
                        'spawnSystem': [
                            0xd,
                            0x20,
                            0x4
                        ]
                    },
                    0xe: {
                        'spawnSystem': [
                            0x10,
                            0x30,
                            0x3
                        ]
                    },
                    0xf: {
                        'spawnSystem': [
                            0x13,
                            0x30,
                            0x3
                        ]
                    },
                    0x10: {
                        'spawnSystem': [
                            0x17,
                            0x30,
                            0x3
                        ]
                    },
                    0x11: {
                        'spawnSystem': [
                            0x1a,
                            0x30,
                            0x3
                        ]
                    },
                    0x12: {
                        'spawnSystem': [
                            0x1d,
                            0x30,
                            0x3
                        ]
                    }
                },
                'pvpOverride': {
                    0x0: {
                        'spawnSystem': [
                            0x0,
                            0x12,
                            0x2
                        ]
                    },
                    0x1: {
                        'spawnSystem': [
                            0x0,
                            0xf,
                            0x2
                        ]
                    },
                    0x2: {
                        'spawnSystem': [
                            0x0,
                            0xc,
                            0x2
                        ]
                    },
                    0x3: {
                        'spawnSystem': [
                            0x0,
                            0x9,
                            0x2
                        ]
                    },
                    0x4: {
                        'spawnSystem': [
                            0x0,
                            0x6,
                            0x2
                        ]
                    },
                    0x5: {
                        'spawnSystem': [
                            0x0,
                            0x3,
                            0x2
                        ]
                    },
                    0x6: {
                        'spawnSystem': [
                            0x1,
                            0x6,
                            0x2
                        ]
                    },
                    0x7: {
                        'spawnSystem': [
                            0x1,
                            0x3,
                            0x2
                        ]
                    },
                    0x8: {
                        'spawnSystem': [
                            0x2,
                            0x9,
                            0x2
                        ]
                    },
                    0x9: {
                        'spawnSystem': [
                            0x2,
                            0x6,
                            0x2
                        ]
                    },
                    0xa: {
                        'spawnSystem': [
                            0x3,
                            0xc,
                            0x2
                        ]
                    },
                    0xb: {
                        'spawnSystem': [
                            0x3,
                            0x9,
                            0x2
                        ]
                    },
                    0xc: {
                        'spawnSystem': [
                            0x4,
                            0xf,
                            0x2
                        ]
                    },
                    0xd: {
                        'spawnSystem': [
                            0x4,
                            0xc,
                            0x2
                        ]
                    },
                    0xe: {
                        'spawnSystem': [
                            0x4,
                            0x12,
                            0x2
                        ]
                    },
                    0xf: {
                        'spawnSystem': [
                            0x5,
                            0x12,
                            0x2
                        ]
                    },
                    0x10: {
                        'spawnSystem': [
                            0x5,
                            0x3,
                            0x2
                        ]
                    },
                    0x11: {
                        'spawnSystem': [
                            0x5,
                            0x1,
                            0x2
                        ]
                    },
                    0x12: {
                        'spawnSystem': [
                            0x6,
                            4.5,
                            0x2
                        ]
                    }
                },
                'tsProjectileSpeed': 0x1,
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'ignoreAttackDistance': !![]
            },
            'Square': {
                'damage': 0x1,
                'health': 0x1c2,
                'reload': 0x1,
                'radius': 0x11,
                'hatchTime': 0x6,
                'spawnRarity': 0x0,
                'petalLayout': [[{}]],
                'override': {
                    0x1: { 'spawnRarity': 0x1 },
                    0x2: { 'spawnRarity': 0x2 },
                    0x3: { 'spawnRarity': 0x3 },
                    0x4: { 'spawnRarity': 0x4 },
                    0x5: { 'spawnRarity': 0x5 },
                    0x6: { 'spawnRarity': 0x6 },
                    0x7: { 'spawnRarity': 0x7 },
                    0x8: { 'spawnRarity': 0x8 },
                    0x9: { 'spawnRarity': 0x9 },
                    0xa: { 'spawnRarity': 0xa },
                    0xb: {
                        'spawnRarity': 0xb,
                        'hatchTime': 0x8
                    },
                    0xc: {
                        'spawnRarity': 0xc,
                        'hatchTime': 0x12
                    },
                    0xd: {
                        'spawnRarity': 0xd,
                        'hatchTime': 0x24
                    },
                    0xe: {
                        'spawnRarity': 0x10,
                        'hatchTime': 0x12
                    },
                    0xf: { 'spawnRarity': 0x13 },
                    0x10: {
                        'spawnRarity': 0x17,
                        'hatchTime': 0x10
                    },
                    0x11: {
                        'spawnRarity': 0x1a,
                        'hatchTime': 0xf
                    },
                    0x12: {
                        'spawnRarity': 0x1d,
                        'hatchTime': 0xe
                    }
                },
                'pvpOverride': {
                    0x0: {
                        'spawnRarity': 0x0,
                        'hatchTime': 0x8,
                        'reload': 0x8
                    },
                    0x1: {
                        'spawnRarity': 0x0,
                        'hatchTime': 0x6,
                        'reload': 0x6
                    },
                    0x2: {
                        'spawnRarity': 0x0,
                        'hatchTime': 0x4,
                        'reload': 0x4
                    },
                    0x3: {
                        'spawnRarity': 0x0,
                        'hatchTime': 0x2,
                        'reload': 0x2
                    },
                    0x4: {
                        'spawnRarity': 0x1,
                        'hatchTime': 0x4,
                        'reload': 0x4
                    },
                    0x5: {
                        'spawnRarity': 0x1,
                        'hatchTime': 0x2,
                        'reload': 0x2
                    },
                    0x6: {
                        'spawnRarity': 0x2,
                        'hatchTime': 0x4,
                        'reload': 0x4
                    },
                    0x7: {
                        'spawnRarity': 0x2,
                        'hatchTime': 0x2,
                        'reload': 0x2
                    },
                    0x8: {
                        'spawnRarity': 0x3,
                        'hatchTime': 0x4,
                        'reload': 0x4
                    },
                    0x9: {
                        'spawnRarity': 0x3,
                        'hatchTime': 0x2,
                        'reload': 0x2
                    },
                    0xa: {
                        'spawnRarity': 0x4,
                        'hatchTime': 0x4,
                        'reload': 0x4
                    },
                    0xb: {
                        'spawnRarity': 0x4,
                        'hatchTime': 0x2,
                        'reload': 0x2
                    },
                    0xc: {
                        'spawnRarity': 0x5,
                        'hatchTime': 0x4,
                        'reload': 0x4
                    },
                    0xd: {
                        'spawnRarity': 0x5,
                        'hatchTime': 0x2,
                        'reload': 0x2
                    },
                    0xe: {
                        'spawnRarity': 0x6,
                        'hatchTime': 0x4,
                        'reload': 0x4
                    },
                    0xf: {
                        'spawnRarity': 0x6,
                        'hatchTime': 0x2,
                        'reload': 0x2
                    },
                    0x10: {
                        'spawnRarity': 0x7,
                        'hatchTime': 0x4,
                        'reload': 0x4
                    },
                    0x11: {
                        'spawnRarity': 0x7,
                        'hatchTime': 0x2,
                        'reload': 0x2
                    },
                    0x12: {
                        'spawnRarity': 0x8,
                        'hatchTime': 0x3,
                        'reload': 0x3
                    }
                },
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'ignoreAttackDistance': !![]
            },
            'Pentagon': {
                'damage': 0x1,
                'health': 0x1c2,
                'reload': 0x2,
                'radius': 0x11,
                'hatchTime': 0x9,
                'spawnRarity': 0x0,
                'petalLayout': [[{}]],
                'override': {
                    0x1: { 'spawnRarity': 0x1 },
                    0x2: { 'spawnRarity': 0x2 },
                    0x3: { 'spawnRarity': 0x3 },
                    0x4: { 'spawnRarity': 0x4 },
                    0x5: { 'spawnRarity': 0x5 },
                    0x6: { 'spawnRarity': 0x6 },
                    0x7: { 'spawnRarity': 0x7 },
                    0x8: { 'spawnRarity': 0x8 },
                    0x9: { 'spawnRarity': 0x9 },
                    0xa: { 'spawnRarity': 0xa },
                    0xb: { 'spawnRarity': 0xb },
                    0xc: {
                        'spawnRarity': 0xc,
                        'hatchTime': 0xa
                    },
                    0xd: {
                        'spawnRarity': 0xb,
                        'hatchTime': 0.2,
                        'reload': 0.2
                    },
                    0xe: {
                        'spawnRarity': 0xf,
                        'hatchTime': 0.5
                    },
                    0xf: { 'spawnRarity': 0x12 },
                    0x10: { 'spawnRarity': 0x16 },
                    0x11: { 'spawnRarity': 0x19 },
                    0x12: { 'spawnRarity': 0x1c }
                },
                'pvpOverride': {
                    0x0: {
                        'spawnRarity': 0x0,
                        'hatchTime': 0x8,
                        'reload': 0x8
                    },
                    0x1: {
                        'spawnRarity': 0x0,
                        'hatchTime': 0x6,
                        'reload': 0x6
                    },
                    0x2: {
                        'spawnRarity': 0x0,
                        'hatchTime': 0x4,
                        'reload': 0x4
                    },
                    0x3: {
                        'spawnRarity': 0x0,
                        'hatchTime': 0x2,
                        'reload': 0x2
                    },
                    0x4: {
                        'spawnRarity': 0x1,
                        'hatchTime': 0x4,
                        'reload': 0x4
                    },
                    0x5: {
                        'spawnRarity': 0x1,
                        'hatchTime': 0x2,
                        'reload': 0x2
                    },
                    0x6: {
                        'spawnRarity': 0x2,
                        'hatchTime': 0x4,
                        'reload': 0x4
                    },
                    0x7: {
                        'spawnRarity': 0x2,
                        'hatchTime': 0x2,
                        'reload': 0x2
                    },
                    0x8: {
                        'spawnRarity': 0x3,
                        'hatchTime': 0x4,
                        'reload': 0x4
                    },
                    0x9: {
                        'spawnRarity': 0x3,
                        'hatchTime': 0x2,
                        'reload': 0x2
                    },
                    0xa: {
                        'spawnRarity': 0x4,
                        'hatchTime': 0x4,
                        'reload': 0x4
                    },
                    0xb: {
                        'spawnRarity': 0x4,
                        'hatchTime': 0x2,
                        'reload': 0x2
                    },
                    0xc: {
                        'spawnRarity': 0x5,
                        'hatchTime': 0x4,
                        'reload': 0x4
                    },
                    0xd: {
                        'spawnRarity': 0x5,
                        'hatchTime': 0x2,
                        'reload': 0x2
                    },
                    0xe: {
                        'spawnRarity': 0x6,
                        'hatchTime': 0x4,
                        'reload': 0x4
                    },
                    0xf: {
                        'spawnRarity': 0x6,
                        'hatchTime': 0x2,
                        'reload': 0x2
                    },
                    0x10: {
                        'spawnRarity': 0x7,
                        'hatchTime': 0x4,
                        'reload': 0x4
                    },
                    0x11: {
                        'spawnRarity': 0x7,
                        'hatchTime': 0x2,
                        'reload': 0x2
                    },
                    0x12: {
                        'spawnRarity': 0x8,
                        'hatchTime': 0x3,
                        'reload': 0x3
                    }
                },
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'ignoreAttackDistance': !![]
            },
            'Hexagon': {
                'damage': 0x1,
                'health': 0x1c2,
                'reload': 0x2,
                'radius': 0x11,
                'hatchTime': 0x9,
                'spawnRarity': 0x0,
                'petalLayout': [[{}]],
                'override': {
                    0x1: { 'spawnRarity': 0x1 },
                    0x2: { 'spawnRarity': 0x2 },
                    0x3: { 'spawnRarity': 0x3 },
                    0x4: { 'spawnRarity': 0x4 },
                    0x5: { 'spawnRarity': 0x5 },
                    0x6: { 'spawnRarity': 0x6 },
                    0x7: { 'spawnRarity': 0x7 },
                    0x8: { 'spawnRarity': 0x8 },
                    0x9: { 'spawnRarity': 0x9 },
                    0xa: { 'spawnRarity': 0xa },
                    0xb: {
                        'spawnRarity': 0xb,
                        'hatchTime': 0x8
                    },
                    0xc: {
                        'spawnRarity': 0xc,
                        'hatchTime': 0x12
                    },
                    0xd: {
                        'spawnRarity': 0xd,
                        'hatchTime': 0x24
                    },
                    0xe: {
                        'spawnRarity': 0x10,
                        'hatchTime': 0x12
                    },
                    0xf: { 'spawnRarity': 0x13 },
                    0x10: {
                        'spawnRarity': 0x17,
                        'hatchTime': 0x10
                    },
                    0x11: {
                        'spawnRarity': 0x1a,
                        'hatchTime': 0xf
                    },
                    0x12: {
                        'spawnRarity': 0x1d,
                        'hatchTime': 0xe
                    }
                },
                'pvpOverride': {
                    0x0: {
                        'spawnRarity': 0x0,
                        'hatchTime': 0x8,
                        'reload': 0x8
                    },
                    0x1: {
                        'spawnRarity': 0x0,
                        'hatchTime': 0x6,
                        'reload': 0x6
                    },
                    0x2: {
                        'spawnRarity': 0x0,
                        'hatchTime': 0x4,
                        'reload': 0x4
                    },
                    0x3: {
                        'spawnRarity': 0x0,
                        'hatchTime': 0x2,
                        'reload': 0x2
                    },
                    0x4: {
                        'spawnRarity': 0x1,
                        'hatchTime': 0x4,
                        'reload': 0x4
                    },
                    0x5: {
                        'spawnRarity': 0x1,
                        'hatchTime': 0x2,
                        'reload': 0x2
                    },
                    0x6: {
                        'spawnRarity': 0x2,
                        'hatchTime': 0x4,
                        'reload': 0x4
                    },
                    0x7: {
                        'spawnRarity': 0x2,
                        'hatchTime': 0x2,
                        'reload': 0x2
                    },
                    0x8: {
                        'spawnRarity': 0x3,
                        'hatchTime': 0x4,
                        'reload': 0x4
                    },
                    0x9: {
                        'spawnRarity': 0x3,
                        'hatchTime': 0x2,
                        'reload': 0x2
                    },
                    0xa: {
                        'spawnRarity': 0x4,
                        'hatchTime': 0x4,
                        'reload': 0x4
                    },
                    0xb: {
                        'spawnRarity': 0x4,
                        'hatchTime': 0x2,
                        'reload': 0x2
                    },
                    0xc: {
                        'spawnRarity': 0x5,
                        'hatchTime': 0x4,
                        'reload': 0x4
                    },
                    0xd: {
                        'spawnRarity': 0x5,
                        'hatchTime': 0x2,
                        'reload': 0x2
                    },
                    0xe: {
                        'spawnRarity': 0x6,
                        'hatchTime': 0x4,
                        'reload': 0x4
                    },
                    0xf: {
                        'spawnRarity': 0x6,
                        'hatchTime': 0x2,
                        'reload': 0x2
                    },
                    0x10: {
                        'spawnRarity': 0x7,
                        'hatchTime': 0x4,
                        'reload': 0x4
                    },
                    0x11: {
                        'spawnRarity': 0x7,
                        'hatchTime': 0x2,
                        'reload': 0x2
                    },
                    0x12: {
                        'spawnRarity': 0x8,
                        'hatchTime': 0x3,
                        'reload': 0x3
                    }
                },
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'ignoreAttackDistance': !![]
            },
            'Honey': {
                'damage': 0x0,
                'health': 0x6978,
                'reload': 0x6,
                'radius': 0xa,
                'attractionRadius': [
                    0x190,
                    0x85
                ],
                'override': {
                    0x1: {
                        'attractionRadius': [
                            0x190,
                            0x190,
                            0x85
                        ]
                    },
                    0x2: {
                        'attractionRadius': [
                            0x190,
                            0x190,
                            0x190,
                            0x85
                        ]
                    },
                    0x3: {
                        'attractionRadius': [
                            0x190,
                            0x190,
                            0x190,
                            0x190,
                            0x85
                        ]
                    },
                    0x4: {
                        'attractionRadius': [
                            0x190,
                            0x190,
                            0x190,
                            0x190,
                            0x190,
                            0x85
                        ]
                    },
                    0x5: {
                        'attractionRadius': [
                            0x190,
                            0x190,
                            0x190,
                            0x190,
                            0x190,
                            0x190,
                            0x85
                        ]
                    },
                    0x6: {
                        'attractionRadius': [
                            0x1c2,
                            0x1c2,
                            0x1c2,
                            0x1c2,
                            0x1c2,
                            0x1c2,
                            0x1c2,
                            0x96
                        ]
                    },
                    0x7: {
                        'attractionRadius': [
                            0x1f4,
                            0x1f4,
                            0x1f4,
                            0x1f4,
                            0x1f4,
                            0x1f4,
                            0x1f4,
                            0x1f4,
                            0xa7
                        ]
                    },
                    0x8: {
                        'attractionRadius': [
                            0x226,
                            0x226,
                            0x226,
                            0x226,
                            0x226,
                            0x226,
                            0x226,
                            0x226,
                            0x226,
                            0xb7
                        ],
                        'radius': 0xf
                    },
                    0x9: {
                        'attractionRadius': [
                            0x258,
                            0x258,
                            0x258,
                            0x258,
                            0x258,
                            0x258,
                            0x258,
                            0x258,
                            0x258,
                            0x258,
                            0xc8
                        ],
                        'radius': 0x14
                    },
                    0xa: {
                        'attractionRadius': [
                            0x28a,
                            0x28a,
                            0x28a,
                            0x28a,
                            0x28a,
                            0x28a,
                            0x28a,
                            0x28a,
                            0x28a,
                            0x28a,
                            0x28a,
                            0xd9
                        ],
                        'radius': 0x19
                    },
                    0xb: {
                        'attractionRadius': [
                            0x2bc,
                            0x2bc,
                            0x2bc,
                            0x2bc,
                            0x2bc,
                            0x2bc,
                            0x2bc,
                            0x2bc,
                            0x2bc,
                            0x2bc,
                            0x2bc,
                            0x2bc,
                            0xe9
                        ],
                        'radius': 0x1e
                    },
                    0xc: {
                        'attractionRadius': [
                            0x2ee,
                            0x2ee,
                            0x2ee,
                            0x2ee,
                            0x2ee,
                            0x2ee,
                            0x2ee,
                            0x2ee,
                            0x2ee,
                            0x2ee,
                            0x2ee,
                            0x2ee,
                            0x2ee,
                            0x1f4,
                            0xfa
                        ],
                        'radius': 0x23
                    },
                    0xd: {
                        'attractionRadius': [
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x2bc,
                            0x258,
                            0x190
                        ],
                        'radius': 0x28
                    },
                    0xe: {
                        'attractionRadius': [
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x2bc,
                            0x226,
                            0x190,
                            0x12c
                        ],
                        'radius': 0x2d
                    },
                    0xf: {
                        'attractionRadius': [
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x2bc,
                            0x258,
                            0x1f4,
                            0x190,
                            0xc8
                        ],
                        'radius': 0x32
                    },
                    0x10: {
                        'attractionRadius': [
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x2bc,
                            0x258,
                            0x1f4,
                            0x190,
                            0xc8
                        ],
                        'radius': 0x3c
                    }
                },
                'pvpOverride': { 0x0: { 'attractionRadius': 0x64 } },
                'tsProjectileLifetime': 0x6 * 0x1e,
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'attackDistanceMult': 0x1 / attackPetalDistanceMult
            },
            'HoneyProjectile': {
                'damage': 0x0,
                'health': 0x6978,
                'reload': 0x6,
                'radius': 0xa,
                'attractionRadius': [
                    0x190,
                    0x85
                ],
                'override': {
                    0x1: {
                        'attractionRadius': [
                            0x190,
                            0x190,
                            0x85
                        ]
                    },
                    0x2: {
                        'attractionRadius': [
                            0x190,
                            0x190,
                            0x190,
                            0x85
                        ]
                    },
                    0x3: {
                        'attractionRadius': [
                            0x190,
                            0x190,
                            0x190,
                            0x190,
                            0x85
                        ]
                    },
                    0x4: {
                        'attractionRadius': [
                            0x190,
                            0x190,
                            0x190,
                            0x190,
                            0x190,
                            0x85
                        ]
                    },
                    0x5: {
                        'attractionRadius': [
                            0x190,
                            0x190,
                            0x190,
                            0x190,
                            0x190,
                            0x190,
                            0x85
                        ]
                    },
                    0x6: {
                        'attractionRadius': [
                            0x1c2,
                            0x1c2,
                            0x1c2,
                            0x1c2,
                            0x1c2,
                            0x1c2,
                            0x1c2,
                            0x96
                        ]
                    },
                    0x7: {
                        'attractionRadius': [
                            0x1f4,
                            0x1f4,
                            0x1f4,
                            0x1f4,
                            0x1f4,
                            0x1f4,
                            0x1f4,
                            0x1f4,
                            0xa7
                        ]
                    },
                    0x8: {
                        'attractionRadius': [
                            0x226,
                            0x226,
                            0x226,
                            0x226,
                            0x226,
                            0x226,
                            0x226,
                            0x226,
                            0x226,
                            0xb7
                        ],
                        'radius': 0xf
                    },
                    0x9: {
                        'attractionRadius': [
                            0x258,
                            0x258,
                            0x258,
                            0x258,
                            0x258,
                            0x258,
                            0x258,
                            0x258,
                            0x258,
                            0x258,
                            0xc8
                        ],
                        'radius': 0x14
                    },
                    0xa: {
                        'attractionRadius': [
                            0x28a,
                            0x28a,
                            0x28a,
                            0x28a,
                            0x28a,
                            0x28a,
                            0x28a,
                            0x28a,
                            0x28a,
                            0x28a,
                            0x28a,
                            0xd9
                        ],
                        'radius': 0x19
                    },
                    0xb: {
                        'attractionRadius': [
                            0x2bc,
                            0x2bc,
                            0x2bc,
                            0x2bc,
                            0x2bc,
                            0x2bc,
                            0x2bc,
                            0x2bc,
                            0x2bc,
                            0x2bc,
                            0x2bc,
                            0x2bc,
                            0xe9
                        ],
                        'radius': 0x1e
                    },
                    0xc: {
                        'attractionRadius': [
                            0x2ee,
                            0x2ee,
                            0x2ee,
                            0x2ee,
                            0x2ee,
                            0x2ee,
                            0x2ee,
                            0x2ee,
                            0x2ee,
                            0x2ee,
                            0x2ee,
                            0x2ee,
                            0x2ee,
                            0x1f4,
                            0xfa
                        ],
                        'radius': 0x23
                    },
                    0xd: {
                        'attractionRadius': [
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x2bc,
                            0x258,
                            0x190
                        ],
                        'radius': 0x28
                    },
                    0xe: {
                        'attractionRadius': [
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x2bc,
                            0x226,
                            0x190,
                            0x12c
                        ],
                        'radius': 0x2d
                    },
                    0xf: {
                        'attractionRadius': [
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x2bc,
                            0x258,
                            0x1f4,
                            0x190,
                            0xc8
                        ],
                        'radius': 0x32
                    },
                    0x10: {
                        'attractionRadius': [
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x320,
                            0x2bc,
                            0x258,
                            0x1f4,
                            0x190,
                            0xc8
                        ],
                        'radius': 0x3c
                    }
                },
                'pvpOverride': {
                    0x0: {
                        'attractionRadius': [
                            0xc8,
                            0xaf,
                            0x96,
                            0x7d,
                            0x64,
                            0x32
                        ]
                    }
                },
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health']
            },
            'Neutron\x20Star': {
                'damage': 0x0,
                'health': 0x2ab98,
                'poison': [
                    0x28,
                    0x28
                ],
                'reload': 0x2,
                'cooldown': 0x8,
                'radius': 0xa,
                'attractionRadius': 0xc8,
                'maxAttractionRarity': 0x1,
                'override': {
                    0x1: { 'maxAttractionRarity': 0x2 },
                    0x2: { 'maxAttractionRarity': 0x3 },
                    0x3: { 'maxAttractionRarity': 0x4 },
                    0x4: { 'maxAttractionRarity': 0x5 },
                    0x5: { 'maxAttractionRarity': 0x6 },
                    0x6: {
                        'attractionRadius': 0xe6,
                        'maxAttractionRarity': 0x7
                    },
                    0x7: {
                        'attractionRadius': 0x104,
                        'maxAttractionRarity': 0x8
                    },
                    0x8: {
                        'attractionRadius': 0x122,
                        'radius': 0xf,
                        'maxAttractionRarity': 0x9
                    },
                    0x9: {
                        'attractionRadius': 0x140,
                        'radius': 0x14,
                        'maxAttractionRarity': 0xa
                    },
                    0xa: {
                        'attractionRadius': 0x15e,
                        'radius': 0x19,
                        'maxAttractionRarity': 0xb
                    },
                    0xb: {
                        'attractionRadius': 0x17c,
                        'radius': 0x1e,
                        'maxAttractionRarity': 0xc
                    },
                    0xc: {
                        'attractionRadius': 0x19a,
                        'radius': 32.5,
                        'maxAttractionRarity': 0xe
                    },
                    0xd: {
                        'attractionRadius': 0x1b8,
                        'radius': 0x3c,
                        'cooldown': 0xb,
                        'maxAttractionRarity': 0x10
                    },
                    0xe: {
                        'attractionRadius': 0x1c2,
                        'radius': 0x46,
                        'cooldown': 0x7,
                        'maxAttractionRarity': 0x14,
                        'health': 1.5
                    },
                    0xf: {
                        'attractionRadius': 0x1cc,
                        'radius': 0x50,
                        'cooldown': 0x6,
                        'maxAttractionRarity': 0x17,
                        'health': 1.5
                    },
                    0x10: {
                        'attractionRadius': 0x1d6,
                        'radius': 0x5a,
                        'cooldown': 0x5,
                        'maxAttractionRarity': 0x1a
                    },
                    0x11: {
                        'attractionRadius': 0x1e0,
                        'radius': 0x64,
                        'maxAttractionRarity': 0x1d
                    },
                    0x12: { 'maxAttractionRarity': 0x20 },
                    0x19: { 'cooldown': -0x6 }
                },
                'pvpOverride': { 0x0: { 'attractionRadius': 0x64 } },
                'tsProjectileLifetime': 0x6 * 0x1e,
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'attackDistanceMult': 0x1 / attackPetalDistanceMult
            },
            'NeutronStarProjectile': {
                'damage': 0x0,
                'health': 0x2ab98,
                'poison': [
                    0x28,
                    0x28
                ],
                'reload': 0x2,
                'cooldown': 0x8,
                'radius': 0xa,
                'attractionRadius': 0xc8,
                'maxAttractionRarity': 0x1,
                'override': {
                    0x1: { 'maxAttractionRarity': 0x2 },
                    0x2: { 'maxAttractionRarity': 0x3 },
                    0x3: { 'maxAttractionRarity': 0x4 },
                    0x4: { 'maxAttractionRarity': 0x5 },
                    0x5: { 'maxAttractionRarity': 0x6 },
                    0x6: {
                        'attractionRadius': 0xe6,
                        'maxAttractionRarity': 0x7
                    },
                    0x7: {
                        'attractionRadius': 0x104,
                        'maxAttractionRarity': 0x8
                    },
                    0x8: {
                        'attractionRadius': 0x122,
                        'radius': 0xf,
                        'maxAttractionRarity': 0x9
                    },
                    0x9: {
                        'attractionRadius': 0x140,
                        'radius': 0x14,
                        'maxAttractionRarity': 0xa
                    },
                    0xa: {
                        'attractionRadius': 0x15e,
                        'radius': 0x19,
                        'maxAttractionRarity': 0xb
                    },
                    0xb: {
                        'attractionRadius': 0x17c,
                        'radius': 0x1e,
                        'maxAttractionRarity': 0xc
                    },
                    0xc: {
                        'attractionRadius': 0x19a,
                        'radius': 32.5,
                        'maxAttractionRarity': 0xe
                    },
                    0xd: {
                        'attractionRadius': 0x1b8,
                        'radius': 0x3c,
                        'cooldown': 0xb,
                        'maxAttractionRarity': 0x10
                    },
                    0xe: {
                        'attractionRadius': 0x1c2,
                        'radius': 0x46,
                        'cooldown': 0x7,
                        'maxAttractionRarity': 0x14,
                        'health': 1.5
                    },
                    0xf: {
                        'attractionRadius': 0x1cc,
                        'radius': 0x50,
                        'cooldown': 0x6,
                        'maxAttractionRarity': 0x17,
                        'health': 1.5
                    },
                    0x10: {
                        'attractionRadius': 0x1d6,
                        'radius': 0x5a,
                        'cooldown': 0x5,
                        'maxAttractionRarity': 0x1a
                    },
                    0x11: {
                        'attractionRadius': 0x1e0,
                        'radius': 0x64,
                        'maxAttractionRarity': 0x1d
                    },
                    0x12: { 'maxAttractionRarity': 0x20 },
                    0x19: { 'cooldown': -0x6 }
                },
                'pvpOverride': { 0x0: { 'attractionRadius': 0x64 } },
                'tsProjectileLifetime': 0x6 * 0x1e,
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'attackDistanceMult': 0x1 / attackPetalDistanceMult
            },
            'Peas': {
                'damage': 9.45,
                'health': 0x28,
                'reload': 0x3,
                'radius': 0x8,
                'stickParentRotation': !![],
                'petalLayout': [[
                        {
                            'offsetAngle': 0x0,
                            'offsetRadius': 0x9
                        },
                        {
                            'offsetAngle': Math['PI'] / 0x2,
                            'offsetRadius': 0x9
                        },
                        {
                            'offsetAngle': 0x3 * Math['PI'] / 0x2,
                            'offsetRadius': 0x9
                        },
                        {
                            'offsetAngle': Math['PI'],
                            'offsetRadius': 0x9
                        }
                    ]],
                'override': {
                    '8': { 'radius': 0xc },
                    '9': { 'radius': 0x10 },
                    '12': { 'radius': 0x16 },
                    '13': { 'radius': 0x1e },
                    '14': {
                        'radius': 0x24,
                        'damage': 1.01
                    },
                    0xf: { 'radius': 0x2a },
                    0x10: { 'radius': 0x2e }
                },
                'tsPetalOverride': { 0x0: { 'radius': 0x8 } },
                'pvpOverride': { 0x0: { 'reload': 0x5 } },
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'ignoreAttackDistance': !![]
            },
            'PeasProjectile': {
                'damage': 6.3,
                'health': 0x190,
                'reload': 0x3,
                'radius': 0x8,
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'tsPetalOverride': {
                    0x0: { 'radius': 0x8 },
                    0x8: { 'radius': 0xc },
                    0x9: { 'radius': 0x10 },
                    0xc: { 'radius': 0x16 },
                    0xd: { 'radius': 0x1e },
                    0xe: {
                        'radius': 0x24,
                        'damage': 1.01
                    },
                    0xf: { 'radius': 0x2a },
                    0x10: { 'radius': 0x2e }
                },
                'override': {
                    '8': { 'radius': 0xc },
                    '9': { 'radius': 0x10 },
                    '12': { 'radius': 0x16 },
                    '13': { 'radius': 0x1e },
                    '14': { 'radius': 0x24 }
                },
                'pvpOverride': { 0x0: { 'reload': 0x5 } }
            },
            'Blueberries': {
                'damage': 6.3,
                'health': 0x0,
                'reload': 0x3,
                'radius': 0x8,
                'bounces': 0x3,
                'stickParentRotation': !![],
                'tsPetalOverride': { 0x0: { 'damage': 0x2 } },
                'petalLayout': [[
                        {
                            'offsetAngle': 0x0,
                            'offsetRadius': 0x9
                        },
                        {
                            'offsetAngle': Math['PI'] / 0x2,
                            'offsetRadius': 0x9
                        },
                        {
                            'offsetAngle': 0x3 * Math['PI'] / 0x2,
                            'offsetRadius': 0x9
                        },
                        {
                            'offsetAngle': Math['PI'],
                            'offsetRadius': 0x9
                        }
                    ]],
                'override': {
                    '8': {
                        'radius': 0xc,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 13.5
                                },
                                {
                                    'offsetAngle': Math['PI'] / 0x2,
                                    'offsetRadius': 13.5
                                },
                                {
                                    'offsetAngle': 0x3 * Math['PI'] / 0x2,
                                    'offsetRadius': 13.5
                                },
                                {
                                    'offsetAngle': Math['PI'],
                                    'offsetRadius': 13.5
                                }
                            ]]
                    },
                    '9': {
                        'radius': 0x10,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x12
                                },
                                {
                                    'offsetAngle': Math['PI'] / 0x2,
                                    'offsetRadius': 0x12
                                },
                                {
                                    'offsetAngle': 0x3 * Math['PI'] / 0x2,
                                    'offsetRadius': 0x12
                                },
                                {
                                    'offsetAngle': Math['PI'],
                                    'offsetRadius': 0x12
                                }
                            ]]
                    },
                    '12': {
                        'damage': 0x4 / 0x5,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x12
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x2 / 0x5,
                                    'offsetRadius': 0x12
                                },
                                {
                                    'offsetAngle': 0x2 * Math['PI'] * 0x2 / 0x5,
                                    'offsetRadius': 0x12
                                },
                                {
                                    'offsetAngle': 0x3 * Math['PI'] * 0x2 / 0x5,
                                    'offsetRadius': 0x12
                                },
                                {
                                    'offsetAngle': 0x4 * Math['PI'] * 0x2 / 0x5,
                                    'offsetRadius': 0x12
                                }
                            ]]
                    },
                    '13': {
                        'radius': 0x30,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x36
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x2 / 0x5,
                                    'offsetRadius': 0x36
                                },
                                {
                                    'offsetAngle': 0x2 * Math['PI'] * 0x2 / 0x5,
                                    'offsetRadius': 0x36
                                },
                                {
                                    'offsetAngle': 0x3 * Math['PI'] * 0x2 / 0x5,
                                    'offsetRadius': 0x36
                                },
                                {
                                    'offsetAngle': 0x4 * Math['PI'] * 0x2 / 0x5,
                                    'offsetRadius': 0x36
                                }
                            ]]
                    },
                    '14': {
                        'damage': 0x5 / 0x6,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x36
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x2 / 0x6,
                                    'offsetRadius': 0x36
                                },
                                {
                                    'offsetAngle': 0x2 * Math['PI'] * 0x2 / 0x6,
                                    'offsetRadius': 0x36
                                },
                                {
                                    'offsetAngle': 0x3 * Math['PI'] * 0x2 / 0x6,
                                    'offsetRadius': 0x36
                                },
                                {
                                    'offsetAngle': 0x4 * Math['PI'] * 0x2 / 0x6,
                                    'offsetRadius': 0x36
                                },
                                {
                                    'offsetAngle': 0x5 * Math['PI'] * 0x2 / 0x6,
                                    'offsetRadius': 0x36
                                }
                            ]]
                    },
                    0x10: { 'radius': 0x2e }
                },
                'pvpOverride': { 0x0: { 'reload': 0x5 } },
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'ignoreAttackDistance': !![]
            },
            'BlueberriesProjectile': {
                'damage': 6.3,
                'health': 0x0,
                'reload': 0x3,
                'radius': 0x8,
                'bounces': 0x3,
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'tsPetalOverride': {
                    0x0: {
                        'radius': 2.5,
                        'damage': 0.5
                    }
                },
                'override': {
                    '8': {
                        'radius': 0xc,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 13.5
                                },
                                {
                                    'offsetAngle': Math['PI'] / 0x2,
                                    'offsetRadius': 13.5
                                },
                                {
                                    'offsetAngle': 0x3 * Math['PI'] / 0x2,
                                    'offsetRadius': 13.5
                                },
                                {
                                    'offsetAngle': Math['PI'],
                                    'offsetRadius': 13.5
                                }
                            ]]
                    },
                    '9': {
                        'radius': 0x10,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x12
                                },
                                {
                                    'offsetAngle': Math['PI'] / 0x2,
                                    'offsetRadius': 0x12
                                },
                                {
                                    'offsetAngle': 0x3 * Math['PI'] / 0x2,
                                    'offsetRadius': 0x12
                                },
                                {
                                    'offsetAngle': Math['PI'],
                                    'offsetRadius': 0x12
                                }
                            ]]
                    },
                    '12': {
                        'damage': 0x4 / 0x5,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x12
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x2 / 0x5,
                                    'offsetRadius': 0x12
                                },
                                {
                                    'offsetAngle': 0x2 * Math['PI'] * 0x2 / 0x5,
                                    'offsetRadius': 0x12
                                },
                                {
                                    'offsetAngle': 0x3 * Math['PI'] * 0x2 / 0x5,
                                    'offsetRadius': 0x12
                                },
                                {
                                    'offsetAngle': 0x4 * Math['PI'] * 0x2 / 0x5,
                                    'offsetRadius': 0x12
                                }
                            ]]
                    },
                    '13': {
                        'radius': 0x30,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x36
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x2 / 0x5,
                                    'offsetRadius': 0x36
                                },
                                {
                                    'offsetAngle': 0x2 * Math['PI'] * 0x2 / 0x5,
                                    'offsetRadius': 0x36
                                },
                                {
                                    'offsetAngle': 0x3 * Math['PI'] * 0x2 / 0x5,
                                    'offsetRadius': 0x36
                                },
                                {
                                    'offsetAngle': 0x4 * Math['PI'] * 0x2 / 0x5,
                                    'offsetRadius': 0x36
                                }
                            ]]
                    },
                    '14': {
                        'damage': 0x5 / 0x6,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x36
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x2 / 0x6,
                                    'offsetRadius': 0x36
                                },
                                {
                                    'offsetAngle': 0x2 * Math['PI'] * 0x2 / 0x6,
                                    'offsetRadius': 0x36
                                },
                                {
                                    'offsetAngle': 0x3 * Math['PI'] * 0x2 / 0x6,
                                    'offsetRadius': 0x36
                                },
                                {
                                    'offsetAngle': 0x4 * Math['PI'] * 0x2 / 0x6,
                                    'offsetRadius': 0x36
                                },
                                {
                                    'offsetAngle': 0x5 * Math['PI'] * 0x2 / 0x6,
                                    'offsetRadius': 0x36
                                }
                            ]]
                    },
                    0x10: { 'radius': 0x2e }
                },
                'pvpOverride': { 0x0: { 'reload': 0x5 } }
            },
            'Pomegranate': {
                'damage': 17.6,
                'health': 0x28,
                'reload': 0x3,
                'radius': 0x8,
                'damageHeal': -0.4,
                'stickParentRotation': !![],
                'tsPetalOverride': {
                    0x0: {
                        'radius': 0x8,
                        'damageHeal': -0.5
                    }
                },
                'petalLayout': [[
                        {
                            'offsetAngle': 0x0,
                            'offsetRadius': 0x9
                        },
                        {
                            'offsetAngle': Math['PI'] / 0x2,
                            'offsetRadius': 0x9
                        },
                        {
                            'offsetAngle': 0x3 * Math['PI'] / 0x2,
                            'offsetRadius': 0x9
                        },
                        {
                            'offsetAngle': Math['PI'],
                            'offsetRadius': 0x9
                        }
                    ]],
                'override': {
                    0x8: { 'radius': 0xc },
                    0x9: { 'radius': 0x10 },
                    0xc: { 'radius': 0x16 },
                    0xd: { 'radius': 0x1e },
                    0xe: { 'radius': 0x24 },
                    0xf: { 'radius': 0x2a },
                    0x10: { 'radius': 0x2e }
                },
                'pvpOverride': { 0x0: { 'reload': 0x5 } },
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'healScalers': ['damageHeal'],
                'ignoreAttackDistance': !![]
            },
            'PomegranateProjectile': {
                'damage': 17.6,
                'health': 0x190,
                'reload': 0x3,
                'radius': 0x8,
                'damageHeal': -0.4,
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'healScalers': ['damageHeal'],
                'tsPetalOverride': {
                    0x0: {
                        'radius': 0x8,
                        'damageHeal': -0.5
                    },
                    0x8: { 'radius': 0xc },
                    0x9: { 'radius': 0x10 },
                    0xc: { 'radius': 0x16 },
                    0xd: { 'radius': 0x1e },
                    0xe: { 'radius': 0x24 },
                    0xf: { 'radius': 0x2a },
                    0x10: { 'radius': 0x2e }
                },
                'override': {
                    0x8: { 'radius': 0xc },
                    0x9: { 'radius': 0x10 },
                    0xc: { 'radius': 0x16 },
                    0xd: { 'radius': 0x1e },
                    0xe: { 'radius': 0x24 }
                },
                'pvpOverride': { 0x0: { 'reload': 0x5 } }
            },
            'Grapes': {
                'damage': 2.25,
                'health': 0x28,
                'poison': [
                    23.5,
                    23.5
                ],
                'reload': 0x3,
                'radius': 0x8,
                'tsPetalOverride': { 0x0: { 'radius': 0x8 } },
                'stickParentRotation': !![],
                'petalLayout': [[
                        {
                            'offsetAngle': 0x0,
                            'offsetRadius': 0x9
                        },
                        {
                            'offsetAngle': Math['PI'] / 0x2,
                            'offsetRadius': 0x9
                        },
                        {
                            'offsetAngle': Math['PI'],
                            'offsetRadius': 0x9
                        },
                        {
                            'offsetAngle': 0x3 * Math['PI'] / 0x2,
                            'offsetRadius': 0x9
                        }
                    ]],
                'override': {
                    '8': { 'radius': 0xc },
                    '9': { 'radius': 0x10 },
                    '12': { 'radius': 0x18 },
                    '13': { 'radius': 0x20 },
                    '14': {
                        'radius': 0x28,
                        'poison': 0.9
                    },
                    0xf: { 'radius': 0x2a },
                    0x10: { 'radius': 0x2e }
                },
                'pvpOverride': { 0x0: { 'reload': 0x5 } },
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'ignoreAttackDistance': !![]
            },
            'GrapesProjectile': {
                'damage': 1.5,
                'health': 0x190,
                'poison': [
                    23.5,
                    23.5
                ],
                'reload': 0x3,
                'radius': 0x8,
                'tsPetalOverride': {
                    0x0: { 'radius': 0x8 },
                    0x8: { 'radius': 0xc },
                    0x9: { 'radius': 0x10 },
                    0xc: { 'radius': 0x16 },
                    0xd: { 'radius': 0x1e },
                    0xe: { 'radius': 0x24 },
                    0xf: { 'radius': 0x2a },
                    0x10: { 'radius': 0x2e }
                },
                'petalLayout': [[
                        {
                            'offsetAngle': 0x0,
                            'offsetRadius': 0x9
                        },
                        {
                            'offsetAngle': Math['PI'] / 0x2,
                            'offsetRadius': 0x9
                        },
                        {
                            'offsetAngle': Math['PI'],
                            'offsetRadius': 0x9
                        },
                        {
                            'offsetAngle': 0x3 * Math['PI'] / 0x2,
                            'offsetRadius': 0x9
                        }
                    ]],
                'override': {
                    '8': { 'radius': 0xc },
                    '9': { 'radius': 0x10 },
                    '12': { 'radius': 0x18 },
                    '13': { 'radius': 0x20 },
                    '14': {
                        'radius': 0x28,
                        'poison': 0.9
                    }
                },
                'pvpOverride': { 0x0: { 'reload': 0x5 } },
                'damageScalers': ['damage'],
                'healthScalers': ['health']
            },
            'Compost': {
                'damage': 10.67,
                'health': 0xa,
                'reload': 0.8,
                'radius': 0xf,
                'healthBuff': 0xc,
                'petalLayout': [
                    [{}],
                    [{}],
                    [{}]
                ],
                'override': {
                    0xc: { 'radius': 0x1e },
                    0xd: { 'radius': 0x2d },
                    0xe: { 'radius': 0x3c },
                    0xf: { 'radius': 0x48 },
                    0x10: { 'radius': 0x50 }
                },
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'healScalers': ['healthBuff']
            },
            'Stalk': {
                'damage': 0x64,
                'health': 0xa,
                'reload': 1.5,
                'radius': 0xf,
                'passiveHealingBuff': 0x1,
                'petalLayout': [[{}]],
                'override': {
                    0xc: { 'radius': 0x1e },
                    0xd: { 'radius': 0x2d },
                    0xe: {
                        'damage': 1.15,
                        'radius': 0x3c
                    },
                    0xf: {
                        'damage': 1.1,
                        'radius': 0x48
                    },
                    0x10: { 'radius': 0x50 }
                },
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'healScalers': ['passiveHealingBuff']
            },
            'Stinger': {
                'damage': 0x1a9,
                'health': 0x5,
                'reload': 0x5,
                'radius': 0x7,
                'stickParentRotation': !![],
                'petalLayout': [[{}]],
                'override': {
                    0x5: {
                        'damage': 0x1 / 0x3,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0xa
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x2 / 0x3,
                                    'offsetRadius': 0xa
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x4 / 0x3,
                                    'offsetRadius': 0xa
                                }
                            ]]
                    },
                    0x6: {
                        'damage': 0x3 / 0x5,
                        'radius': 0x9,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0xc
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x2 / 0x5,
                                    'offsetRadius': 0xc
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x4 / 0x5,
                                    'offsetRadius': 0xc
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x6 / 0x5,
                                    'offsetRadius': 0xc
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x8 / 0x5,
                                    'offsetRadius': 0xc
                                }
                            ]]
                    },
                    0x8: {
                        'radius': 0xf,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x12
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x2 / 0x5,
                                    'offsetRadius': 0x12
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x4 / 0x5,
                                    'offsetRadius': 0x12
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x6 / 0x5,
                                    'offsetRadius': 0x12
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x8 / 0x5,
                                    'offsetRadius': 0x12
                                }
                            ]]
                    },
                    0xb: {
                        'radius': 0x13,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x16
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x2 / 0x5,
                                    'offsetRadius': 0x16
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x4 / 0x5,
                                    'offsetRadius': 0x16
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x6 / 0x5,
                                    'offsetRadius': 0x16
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x8 / 0x5,
                                    'offsetRadius': 0x16
                                }
                            ]]
                    },
                    0xc: {
                        'radius': 0x26,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x29
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x2 / 0x5,
                                    'offsetRadius': 0x29
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x4 / 0x5,
                                    'offsetRadius': 0x29
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x6 / 0x5,
                                    'offsetRadius': 0x29
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x8 / 0x5,
                                    'offsetRadius': 0x29
                                }
                            ]]
                    },
                    0xd: {
                        'damage': 5.15 / 0x6,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x29
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x2 / 0x6,
                                    'offsetRadius': 0x29
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x4 / 0x6,
                                    'offsetRadius': 0x29
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x6 / 0x6,
                                    'offsetRadius': 0x29
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x8 / 0x6,
                                    'offsetRadius': 0x29
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0xa / 0x6,
                                    'offsetRadius': 0x29
                                }
                            ]]
                    },
                    0xe: {
                        'damage': 6.5 / 0x7 * 1.05,
                        'radius': 0x30,
                        'reload': 0x4,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x39
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x2 / 0x7,
                                    'offsetRadius': 0x39
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x4 / 0x7,
                                    'offsetRadius': 0x39
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x6 / 0x7,
                                    'offsetRadius': 0x39
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x8 / 0x7,
                                    'offsetRadius': 0x39
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0xa / 0x7,
                                    'offsetRadius': 0x39
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0xc / 0x7,
                                    'offsetRadius': 0x39
                                }
                            ]]
                    },
                    0xf: {
                        'damage': 1.2,
                        'radius': 0x3c
                    },
                    0x10: { 'radius': 0x43 }
                },
                'pvpOverride': {
                    0x0: { 'damage': 0x4 / 0x5 },
                    0x8: { 'radius': 0x11 }
                },
                'tanksmithRadius': 0x19,
                'tanksmithCooldown': 0x5a,
                'tanksmithHp': 0x3c,
                'tsPetalOverride': {
                    0x0: {
                        'radius': 3.5,
                        'health': 0xa,
                        'damage': 0.3
                    }
                },
                'tsProjectileSpeed': 0x16,
                'tsProjectileLifetime': 0x78,
                'tsBarrelData': [
                    { 'angle': 0x0 },
                    { 'angle': -0.2 },
                    { 'angle': 0.2 },
                    { 'angle': -0.4 },
                    { 'angle': 0.4 }
                ],
                'damageScalers': ['damage'],
                'healthScalers': [
                    'health',
                    'tanksmithHp'
                ]
            },
            'Blood\x20Stinger': {
                'damage': 0x1a9,
                'health': 0x5,
                'reload': 2.5,
                'radius': 0x7,
                'damageHeal': -0xf,
                'tsPetalOverride': {
                    0x0: {
                        'damageHeal': -1.95,
                        'radius': 3.5,
                        'health': 0xa,
                        'damage': 0.3
                    }
                },
                'tanksmithRadius': 0x19,
                'tanksmithCooldown': 0x2d,
                'tanksmithHp': 0x3c,
                'tsProjectileSpeed': 0x16,
                'tsProjectileLifetime': 0x78,
                'tsBarrelData': [
                    { 'angle': 0x0 },
                    { 'angle': -0.2 },
                    { 'angle': 0.2 },
                    { 'angle': -0.4 },
                    { 'angle': 0.4 }
                ],
                'petalLayout': [[{}]],
                'override': {
                    0x5: {
                        'damage': 0x1 / 0x3,
                        'damageHeal': 0x1 / 0x3,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0xa
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x2 / 0x3,
                                    'offsetRadius': 0xa
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x4 / 0x3,
                                    'offsetRadius': 0xa
                                }
                            ]]
                    },
                    0x6: {
                        'damage': 0x3 / 0x5,
                        'damageHeal': 0x3 / 0x5,
                        'radius': 0x9,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0xc
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x2 / 0x5,
                                    'offsetRadius': 0xc
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x4 / 0x5,
                                    'offsetRadius': 0xc
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x6 / 0x5,
                                    'offsetRadius': 0xc
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x8 / 0x5,
                                    'offsetRadius': 0xc
                                }
                            ]]
                    },
                    0x8: {
                        'radius': 0xf,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x12
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x2 / 0x5,
                                    'offsetRadius': 0x12
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x4 / 0x5,
                                    'offsetRadius': 0x12
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x6 / 0x5,
                                    'offsetRadius': 0x12
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x8 / 0x5,
                                    'offsetRadius': 0x12
                                }
                            ]]
                    },
                    0xb: {
                        'radius': 0x13,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x16
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x2 / 0x5,
                                    'offsetRadius': 0x16
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x4 / 0x5,
                                    'offsetRadius': 0x16
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x6 / 0x5,
                                    'offsetRadius': 0x16
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x8 / 0x5,
                                    'offsetRadius': 0x16
                                }
                            ]]
                    },
                    0xc: {
                        'radius': 0x26,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x29
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x2 / 0x5,
                                    'offsetRadius': 0x29
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x4 / 0x5,
                                    'offsetRadius': 0x29
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x6 / 0x5,
                                    'offsetRadius': 0x29
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x8 / 0x5,
                                    'offsetRadius': 0x29
                                }
                            ]]
                    },
                    0xd: {
                        'damage': 5.15 / 0x6,
                        'damageHeal': 0x5 / 0x6,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x29
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x2 / 0x6,
                                    'offsetRadius': 0x29
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x4 / 0x6,
                                    'offsetRadius': 0x29
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x6 / 0x6,
                                    'offsetRadius': 0x29
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x8 / 0x6,
                                    'offsetRadius': 0x29
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0xa / 0x6,
                                    'offsetRadius': 0x29
                                }
                            ]]
                    },
                    0xe: {
                        'damage': 6.5 / 0x7 * 1.05,
                        'damageHeal': 0x6 / 0x7,
                        'radius': 0x30,
                        'reload': 0x2,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x39
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x2 / 0x7,
                                    'offsetRadius': 0x39
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x4 / 0x7,
                                    'offsetRadius': 0x39
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x6 / 0x7,
                                    'offsetRadius': 0x39
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x8 / 0x7,
                                    'offsetRadius': 0x39
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0xa / 0x7,
                                    'offsetRadius': 0x39
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0xc / 0x7,
                                    'offsetRadius': 0x39
                                }
                            ]]
                    },
                    0xf: {
                        'damage': 1.2,
                        'radius': 0x3c
                    },
                    0x10: {
                        'damage': 1.12,
                        'radius': 0x43
                    }
                },
                'pvpOverride': {
                    0x0: {
                        'damage': 0x4 / 0x5,
                        'damageHeal': -0x32
                    },
                    0x8: { 'radius': 0x11 }
                },
                'tsBarrelData': [
                    { 'angle': 0x0 },
                    { 'angle': -0.2 },
                    { 'angle': 0.2 },
                    { 'angle': -0.4 },
                    { 'angle': 0.4 }
                ],
                'healScalers': ['damageHeal'],
                'damageScalers': ['damage'],
                'healthScalers': ['health']
            },
            'Sand': {
                'damage': 0x12,
                'health': 0x1,
                'reload': 1.2,
                'radius': 0x7,
                'stickParentRotation': !![],
                'petalLayout': [[
                        {
                            'offsetAngle': 0x0,
                            'offsetRadius': 0x9
                        },
                        {
                            'offsetAngle': Math['PI'] / 0x2,
                            'offsetRadius': 0x9
                        },
                        {
                            'offsetAngle': Math['PI'],
                            'offsetRadius': 0x9
                        },
                        {
                            'offsetAngle': 0x3 * Math['PI'] / 0x2,
                            'offsetRadius': 0x9
                        }
                    ]],
                'override': {
                    0xd: {
                        'damage': 4.15 / 0x5,
                        'radius': 0xd,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 16.7
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x2 / 0x5,
                                    'offsetRadius': 16.7
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x4 / 0x5,
                                    'offsetRadius': 16.7
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x6 / 0x5,
                                    'offsetRadius': 16.7
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x8 / 0x5,
                                    'offsetRadius': 16.7
                                }
                            ]]
                    },
                    0xe: {
                        'damage': 1.09,
                        'radius': 0x55,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x43
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x2 / 0x6,
                                    'offsetRadius': 0x43
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x4 / 0x6,
                                    'offsetRadius': 0x43
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x6 / 0x6,
                                    'offsetRadius': 0x43
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x8 / 0x6,
                                    'offsetRadius': 0x43
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0xa / 0x6,
                                    'offsetRadius': 0x43
                                }
                            ]]
                    },
                    0xf: {
                        'damage': 0.99,
                        'radius': 0x5f,
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x4d
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x2 / 0x7,
                                    'offsetRadius': 0x4d
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x4 / 0x7,
                                    'offsetRadius': 0x4d
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x6 / 0x7,
                                    'offsetRadius': 0x4d
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x8 / 0x7,
                                    'offsetRadius': 0x4d
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0xa / 0x7,
                                    'offsetRadius': 0x4d
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0xc / 0x7,
                                    'offsetRadius': 0x4d
                                }
                            ]]
                    },
                    0x10: { 'radius': 0x64 }
                },
                'tanksmithRadius': 0x28,
                'tanksmithCooldown': 0x50,
                'tanksmithHp': 0x46,
                'tsPetalOverride': { 0x0: { 'radius': 2.5 } },
                'tsBarrelData': [
                    { 'angle': -0.45 },
                    { 'angle': -0.15 },
                    { 'angle': 0.15 },
                    { 'angle': 0.45 }
                ],
                'damageScalers': ['damage'],
                'healthScalers': [
                    'health',
                    'tanksmithHp'
                ]
            },
            'Light': {
                'damage': 32.4,
                'health': 0x1,
                'reload': 0.6,
                'radius': 0x6,
                'petalLayout': [[{}]],
                'override': {
                    0x1: {
                        'damage': 0x1 / 0x2,
                        'petalLayout': [
                            [{}],
                            [{}]
                        ]
                    },
                    0x3: {
                        'damage': 0x2 / 0x3,
                        'petalLayout': [
                            [{}],
                            [{}],
                            [{}]
                        ]
                    },
                    0x4: { 'radius': 0x8 },
                    0x5: {
                        'damage': 0x3 / 0x5,
                        'petalLayout': [
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}]
                        ]
                    },
                    0x7: { 'radius': 0xc },
                    0x8: { 'radius': 0xf },
                    0xc: {
                        'petalLayout': [
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}]
                        ],
                        'radius': 0x14,
                        'damage': 5.5 / 0x7
                    },
                    0xd: {
                        'petalLayout': [
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}]
                        ],
                        'radius': 0x16,
                        'damage': 7.5 / 0x9
                    },
                    0xe: {
                        'radius': 0x19,
                        'damage': 1.066 * 1.03,
                        'reload': 0.567,
                        'petalLayout': [
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}]
                        ]
                    },
                    0xf: {
                        'radius': 0x1c,
                        'damage': 0xb / 0xc * 1.03,
                        'damageHeal': 0xb / 0xc,
                        'petalLayout': [
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}]
                        ]
                    },
                    0x10: { 'radius': 0x21 }
                },
                'damageScalers': ['damage'],
                'healthScalers': ['health']
            },
            'Blood\x20Light': {
                'damage': 0x3c,
                'health': 0x1,
                'reload': 0.6,
                'radius': 0x6,
                'damageHeal': -3.6,
                'petalLayout': [[{}]],
                'override': {
                    0x1: {
                        'damage': 0x1 / 0x2,
                        'damageHeal': 0x1 / 0x2,
                        'petalLayout': [
                            [{}],
                            [{}]
                        ]
                    },
                    0x3: {
                        'damage': 0x2 / 0x3,
                        'damageHeal': 0x2 / 0x3,
                        'petalLayout': [
                            [{}],
                            [{}],
                            [{}]
                        ]
                    },
                    0x4: { 'radius': 0x8 },
                    0x5: {
                        'damage': 0x3 / 0x5,
                        'damageHeal': 0x3 / 0x5,
                        'petalLayout': [
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}]
                        ]
                    },
                    0x7: { 'radius': 0xc },
                    0x8: { 'radius': 0xf },
                    0xc: {
                        'petalLayout': [
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}]
                        ],
                        'radius': 0x14,
                        'damage': 5.5 / 0x7,
                        'damageHeal': 0x5 / 0x7
                    },
                    0xd: {
                        'petalLayout': [
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}]
                        ],
                        'radius': 0x16,
                        'damage': 7.5 / 0x9 * 1.3 * 1.08,
                        'damageHeal': 0x7 / 0x9
                    },
                    0xe: {
                        'radius': 0x19,
                        'damage': 1.055 * 1.08,
                        'reload': 0.567,
                        'petalLayout': [
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}]
                        ],
                        'damageHeal': 0x9 / 0xb
                    },
                    0xf: {
                        'damage': 1.08,
                        'radius': 0x1c
                    },
                    0x10: {
                        'damage': 1.12,
                        'radius': 0x21
                    }
                },
                'tsPetalOverride': {
                    0x0: {
                        'damage': 1.21,
                        'damageHeal': 0.4
                    }
                },
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'healScalers': ['damageHeal']
            },
            'Fast': {
                'damage': 0x5,
                'health': 0x5,
                'reload': 1.5,
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health']
            },
            'Citrus': {
                'damage': 0x8,
                'health': 0xf,
                'reload': 0x3,
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health']
            },
            'Pollen': {
                'damage': 29.75,
                'health': 0x9,
                'armor': 0x8,
                'reload': 0x1,
                'radius': 0x8,
                'petalLayout': [
                    [{}],
                    [{}]
                ],
                'tsProjectileSpeed': 7.5 * 0x1e,
                'tanksmithRadius': 0x32,
                'override': {
                    0x3: {
                        'damage': 0x2 / 0x3 * 0x8 / 0x7,
                        'petalLayout': [
                            [{}],
                            [{}],
                            [{}]
                        ]
                    },
                    0x7: {
                        'radius': 0x14,
                        'damage': 1.2,
                        'health': 1.2
                    },
                    0x8: {
                        'radius': 0x1e,
                        'health': 1.05
                    },
                    0x9: {
                        'radius': 0x28,
                        'health': 1.05
                    },
                    0xc: {
                        'damage': 0x3 / 0x5,
                        'petalLayout': [
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}]
                        ]
                    },
                    0xd: {
                        'damage': 0x5 / 0x6 * 1.03,
                        'petalLayout': [
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}]
                        ]
                    },
                    0xe: {
                        'damage': 0x6 / 0x7 * 1.03,
                        'petalLayout': [
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}]
                        ]
                    },
                    0xf: {
                        'damage': 0x7 / 0x8 * 1.03,
                        'armor': 1.25,
                        'health': 1.8,
                        'petalLayout': [
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}]
                        ]
                    },
                    0x10: { 'radius': 0x2d }
                },
                'pvpOverride': { 0x0: { 'armor': 0x1 } },
                'tsPetalOverride': {
                    0x0: { 'petalLayout': [[{}]] },
                    0x3: {
                        'petalLayout': [[{}]],
                        'damage': 0x2 / 0x3,
                        'tanksmithBarrelNum': 0x3
                    },
                    0xc: {
                        'petalLayout': [[{}]],
                        'damage': 0x3 / 0x5,
                        'tanksmithBarrelNum': 0x5
                    },
                    0xd: {
                        'petalLayout': [[{}]],
                        'damage': 0x5 / 0x6,
                        'tanksmithBarrelNum': 0x6
                    },
                    0xe: {
                        'petalLayout': [[{}]],
                        'damage': 0x6 / 0x7,
                        'tanksmithBarrelNum': 0x7
                    },
                    0xf: {
                        'petalLayout': [[{}]],
                        'damage': 0x7 / 0x8,
                        'tanksmithBarrelNum': 0x8
                    }
                },
                'tanksmithBarrelNum': 0x2,
                'damageScalers': ['damage'],
                'healthScalers': [
                    'health',
                    'armor'
                ],
                'attackDistanceMult': Math['sqrt'](0x1 / attackPetalDistanceMult)
            },
            'PollenProjectile': {
                'damage': 17.5,
                'health': 0x9,
                'armor': 0x8,
                'reload': 0x1,
                'radius': 0x8,
                'petalLayout': [[{}]],
                'override': {
                    0x3: {
                        'damage': 0x2 / 0x3 * 0x8 / 0x7,
                        'petalLayout': [
                            [{}],
                            [{}],
                            [{}]
                        ]
                    },
                    0x7: {
                        'radius': 0x14,
                        'damage': 1.2,
                        'health': 1.2
                    },
                    0x8: {
                        'radius': 0x1e,
                        'health': 1.05
                    },
                    0x9: {
                        'radius': 0x28,
                        'health': 1.05
                    },
                    0xc: {
                        'damage': 0x3 / 0x5,
                        'petalLayout': [
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}]
                        ]
                    },
                    0xd: {
                        'damage': 0x5 / 0x6 * 1.03,
                        'petalLayout': [
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}]
                        ]
                    },
                    0xe: {
                        'damage': 0x6 / 0x7 * 1.03,
                        'petalLayout': [
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}]
                        ]
                    },
                    0xf: {
                        'damage': 0x7 / 0x8 * 1.03,
                        'armor': 1.25,
                        'health': 1.8,
                        'petalLayout': [
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}]
                        ]
                    },
                    0x10: { 'radius': 0x2d }
                },
                'pvpOverride': { 0x0: { 'armor': 0x1 } },
                'damageScalers': ['damage'],
                'healthScalers': [
                    'health',
                    'armor'
                ]
            },
            'Magnet': {
                'damage': 0x1,
                'health': 0xb4,
                'reload': 2.2,
                'radius': 0x12,
                'petalLayout': [[{}]],
                'range': 0x190,
                'collectDupeChance': 0x0,
                'override': {
                    0x1: { 'range': 0x258 * 1.5 },
                    0x2: { 'range': 0x320 * 1.5 },
                    0x3: { 'range': 0x3e8 * 1.5 },
                    0x4: { 'range': 0x514 * 1.5 },
                    0x5: { 'range': 0x640 * 1.5 },
                    0x6: { 'range': 0x7d0 * 1.5 },
                    0x7: { 'range': 0x960 * 1.5 },
                    0x8: { 'range': 0xaf0 * 1.5 },
                    0x9: { 'range': 0xc80 * 1.5 },
                    0xa: {
                        'range': 0xe74 * 1.5,
                        'petalLayout': [
                            [{}],
                            [{}]
                        ],
                        'health': 0x1 / 0x2,
                        'damage': 0x1 / 0x2
                    },
                    0xb: { 'range': 0x19c8 },
                    0xc: { 'range': 0x2bf2 },
                    0xd: {
                        'range': 0x57e4,
                        'radius': 0x1e,
                        'petalLayout': [
                            [{}],
                            [{}],
                            [{}]
                        ],
                        'health': 0x2 / 0x3,
                        'damage': 0x2 / 0x3
                    },
                    0xe: {
                        'collectDupeChance': 0x2,
                        'range': 0x7148,
                        'radius': 0x23
                    },
                    0xf: {
                        'range': 0x84d0,
                        'radius': 0x28,
                        'collectDupeChance': 0x4
                    },
                    0x10: {
                        'range': 0x876e,
                        'radius': 0x2d,
                        'health': 0x2,
                        'collectDupeChance': 0x6
                    },
                    0x11: { 'collectDupeChance': 0x8 },
                    0x12: { 'collectDupeChance': 0x64 }
                },
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'ignoreAttackDistance': !![]
            },
            'Faster': {
                'damage': 14.5,
                'health': 0xa,
                'reload': 0x1,
                'radius': 0x7,
                'rotateSpeedBuff': 0.5,
                'reloadBuff': 0x0,
                'petalLayout': [[{}]],
                'override': {
                    0x1: { 'rotateSpeedBuff': 0.7 },
                    0x2: { 'rotateSpeedBuff': 0.9 },
                    0x3: { 'rotateSpeedBuff': 1.1 },
                    0x4: { 'rotateSpeedBuff': 1.4 },
                    0x5: { 'rotateSpeedBuff': 2.5 },
                    0x6: { 'rotateSpeedBuff': 2.7 },
                    0x7: {
                        'rotateSpeedBuff': 1.1,
                        'damage': 0x1 / 0x3,
                        'stickParentRotation': !![],
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x9
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x2 / 0x3,
                                    'offsetRadius': 0x9
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x4 / 0x3,
                                    'offsetRadius': 0x9
                                }
                            ]]
                    },
                    0x8: {
                        'rotateSpeedBuff': 1.4,
                        'reload': 0.7
                    },
                    0x9: { 'rotateSpeedBuff': 1.7 },
                    0xa: { 'rotateSpeedBuff': 0x2 },
                    0xb: { 'rotateSpeedBuff': 2.3 },
                    0xc: { 'rotateSpeedBuff': 2.7 },
                    0xd: {
                        'rotateSpeedBuff': 1.9,
                        'damage': 0.85,
                        'radius': 0x15,
                        'reloadBuff': 0xa,
                        'stickParentRotation': !![],
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x1b
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x2 / 0x5,
                                    'offsetRadius': 0x1b
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x4 / 0x5,
                                    'offsetRadius': 0x1b
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x6 / 0x5,
                                    'offsetRadius': 0x1b
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x8 / 0x5,
                                    'offsetRadius': 0x1b
                                }
                            ]]
                    },
                    0xe: {
                        'rotateSpeedBuff': 2.3,
                        'reloadBuff': 0xb
                    },
                    0xf: {
                        'rotateSpeedBuff': 2.5,
                        'reloadBuff': 11.5
                    },
                    0x10: {
                        'rotateSpeedBuff': 2.7,
                        'reloadBuff': 11.75
                    },
                    0x11: {
                        'rotateSpeedBuff': 2.9,
                        'reloadBuff': 11.875
                    },
                    0x12: {
                        'rotateSpeedBuff': 3.1,
                        'reloadBuff': 0xc
                    },
                    0x13: {
                        'rotateSpeedBuff': 3.3,
                        'reloadBuff': 12.125
                    }
                },
                'pvpOverride': {
                    0x0: { 'rotateSpeedBuff': 0.25 },
                    0x1: { 'rotateSpeedBuff': 0.35 },
                    0x2: { 'rotateSpeedBuff': 0.45 },
                    0x3: { 'rotateSpeedBuff': 0.55 },
                    0x4: { 'rotateSpeedBuff': 0.7 },
                    0x5: { 'rotateSpeedBuff': 1.25 },
                    0x6: { 'rotateSpeedBuff': 1.35 },
                    0x7: {
                        'rotateSpeedBuff': 0.55,
                        'damage': 0x1 / 0x3,
                        'stickParentRotation': !![],
                        'petalLayout': [[
                                {
                                    'offsetAngle': 0x0,
                                    'offsetRadius': 0x9
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x2 / 0x3,
                                    'offsetRadius': 0x9
                                },
                                {
                                    'offsetAngle': Math['PI'] * 0x4 / 0x3,
                                    'offsetRadius': 0x9
                                }
                            ]]
                    },
                    0x8: {
                        'rotateSpeedBuff': 0.65,
                        'reload': 0.7
                    },
                    0x9: { 'rotateSpeedBuff': 0.75 },
                    0xa: { 'rotateSpeedBuff': 0.85 },
                    0xb: { 'rotateSpeedBuff': 0.95 },
                    0xc: { 'rotateSpeedBuff': 1.05 }
                },
                'tsPetalOverride': { 0x0: { 'radius': 0x3 } },
                'tsBarrelData': [
                    { 'angle': 0x0 },
                    { 'angle': -0.2 },
                    { 'angle': 0.2 },
                    { 'angle': -0.4 },
                    { 'angle': 0.4 }
                ],
                'damageScalers': ['damage'],
                'healthScalers': ['health']
            },
            'Iris': {
                'damage': 0x0,
                'health': 0x46,
                'poison': [
                    0x5a,
                    0x3f
                ],
                'reload': 1.2,
                'radius': 0x6,
                'tanksmithRadius': 0x28,
                'tanksmithCooldown': 0x50,
                'tanksmithHp': 0x3c,
                'tsPetalOverride': { 0x0: { 'radius': 2.5 } },
                'petalLayout': [[{}]],
                'override': {
                    0x7: { 'radius': 0x7 },
                    0x8: { 'radius': 0x8 },
                    0x9: { 'radius': 0x10 },
                    0xc: { 'radius': 0x18 },
                    0xd: { 'radius': 0x34 },
                    0xe: {
                        'radius': 0x48,
                        'attackDistanceMult': 1.25
                    },
                    0xf: {
                        'radius': 0x54,
                        'attackDistanceMult': 1.35
                    },
                    0x10: {
                        'radius': 0x60,
                        'attackDistanceMult': 1.45
                    }
                },
                'pvpOverride': {
                    0x0: {
                        'poison': [
                            0xfa,
                            0x3c
                        ],
                        'health': 0x1 / 0x2
                    }
                },
                'damageScalers': ['damage'],
                'healthScalers': [
                    'health',
                    'tanksmithHp'
                ],
                'attackDistanceMult': 1.2
            },
            'Shiny\x20Iris': {
                'damage': 0x0,
                'health': 0xfa,
                'poison': [
                    0x1,
                    0.7
                ],
                'reload': 1.1,
                'radius': 0x6,
                'tanksmithRadius': 0x28,
                'tanksmithCooldown': 0x50,
                'tanksmithHp': 0x3c,
                'tsPetalOverride': { 0x0: { 'radius': 2.5 } },
                'petalLayout': [[{}]],
                'override': {
                    0x7: { 'radius': 0x7 },
                    0x8: { 'radius': 0x8 },
                    0x9: { 'radius': 0x10 },
                    0xc: { 'radius': 0x18 },
                    0xd: { 'radius': 0x34 },
                    0xe: {
                        'radius': 0x48,
                        'attackDistanceMult': 1.25
                    },
                    0xf: {
                        'radius': 0x54,
                        'attackDistanceMult': 1.35
                    },
                    0x10: {
                        'radius': 0x60,
                        'attackDistanceMult': 1.45
                    }
                },
                'pvpOverride': {
                    0x0: {
                        'poison': [
                            12.5,
                            0x3
                        ],
                        'health': 0x1 / 0x2
                    }
                },
                'damageScalers': ['damage'],
                'healthScalers': [
                    'health',
                    'tanksmithHp'
                ],
                'attackDistanceMult': 1.2
            },
            'Pincer': {
                'damage': 0x0,
                'health': 0xf0,
                'poison': [
                    0x4b,
                    0x19
                ],
                'reload': 1.5,
                'radius': 0xa,
                'slowdown': 0.35,
                'slowdownTime': 0x5,
                'petalLayout': [[{}]],
                'override': {
                    0x4: { 'slowdownTime': 0x6 },
                    0x8: { 'slowdownTime': 0x7 },
                    0xc: { 'slowdownTime': 0x8 },
                    0xd: {
                        'slowdownTime': 0xc,
                        'radius': 0x1e
                    },
                    0xe: {
                        'slowdownTime': 0x10,
                        'radius': 0x28
                    },
                    0xf: {
                        'slowdownTime': 0x14,
                        'radius': 0x50,
                        'attackDistanceMult': 1.6
                    },
                    0x10: { 'radius': 0x5a }
                },
                'tsPetalOverride': { 0x0: { 'radius': 0x2 } },
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'attackDistanceMult': 1.4
            },
            'Rubber': {
                'damage': 0xc,
                'health': 0x5,
                'reload': 0.7,
                'radius': 0xd,
                'bodyKnockback': 0.75,
                'override': {
                    0xd: {
                        'radius': 0x1a,
                        'bodyKnockback': 0x3
                    },
                    0xe: {
                        'radius': 0x28,
                        'bodyKnockback': 0x2
                    },
                    0xf: {
                        'radius': 0x42,
                        'bodyKnockback': 0x2
                    },
                    0x10: { 'radius': 0x50 }
                },
                'pvpOverride': {
                    0x0: { 'bodyKnockback': 2.4 },
                    0x12: { 'bodyKnockback': 0x3e8 }
                },
                'tsPetalOverride': { 0x0: { 'radius': 0x2 } },
                'massScalers': ['bodyKnockback'],
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'ignoreAttackDistance': !![]
            },
            'Coral': {
                'damage': 0x1e,
                'health': 0xf,
                'reload': 1.2,
                'extraDamage': 0x21,
                'petalLayout': [[{}]],
                'damageScalers': [
                    'damage',
                    'extraDamage'
                ],
                'healthScalers': ['health'],
                'overhealConversion': 0x3,
                'radius': 0x10,
                'override': {
                    0x1: { 'overhealConversion': 0x5 },
                    0x2: { 'overhealConversion': 0x7 },
                    0x3: { 'overhealConversion': 0xa },
                    0x4: { 'overhealConversion': 0xf },
                    0x5: { 'overhealConversion': 0x1e },
                    0x6: { 'overhealConversion': 0x2d },
                    0x7: { 'overhealConversion': 0x3c },
                    0x8: { 'overhealConversion': 0x46 },
                    0x9: { 'overhealConversion': 0x50 },
                    0xa: { 'overhealConversion': 0x5a },
                    0xb: { 'overhealConversion': 0x64 },
                    0xc: {
                        'overhealConversion': 0x6e,
                        'radius': 0x18
                    },
                    0xd: {
                        'overhealConversion': 0x82,
                        'radius': 0x26
                    },
                    0xe: {
                        'overhealConversion': 0x8c,
                        'radius': 0x2c
                    },
                    0xf: {
                        'overhealConversion': 0x96,
                        'radius': 0x36
                    },
                    0x10: {
                        'overhealConversion': 0x9b,
                        'radius': 0x3c
                    }
                }
            },
            'Rice': {
                'damage': 10.83,
                'health': 0x1,
                'reload': 0.01,
                'radius': 0xc,
                'petalLayout': [[{}]],
                'override': {
                    0x5: { 'radius': 0x10 },
                    0x7: { 'radius': 0x14 },
                    0x8: { 'radius': 0x18 },
                    0x9: { 'radius': 0x1c },
                    0xc: {
                        'radius': 0x22,
                        'damage': 1.1
                    },
                    0xd: {
                        'radius': 0x31,
                        'damage': 1.15 * 1.16
                    },
                    0xe: {
                        'radius': 0x4b,
                        'damage': 1.15 * 1.16
                    },
                    0xf: {
                        'radius': 0x69,
                        'damage': 1.12
                    },
                    0x10: { 'radius': 0x73 }
                },
                'pvpOverride': {
                    0x0: { 'damage': 0.65 },
                    0x5: { 'radius': 0x10 },
                    0x7: { 'radius': 0x14 },
                    0x8: { 'radius': 0x18 },
                    0x9: { 'radius': 0x1c },
                    0xc: { 'radius': 0x22 }
                },
                'tsPetalOverride': { 0x0: { 'damage': 0.2 } },
                'tanksmithCooldown': 0xf,
                'tanksmithShootCooldown': 0x6,
                'damageScalers': ['damage'],
                'healthScalers': ['health']
            },
            'Ricemissile': {
                'damage': 2.106,
                'health': 0x1,
                'reload': 0.01,
                'radius': 0xc,
                'petalLayout': [[{}]],
                'override': {
                    0x5: { 'radius': 0x10 },
                    0x7: { 'radius': 0x14 },
                    0x8: { 'radius': 0x18 },
                    0x9: { 'radius': 0x1c },
                    0xc: {
                        'radius': 0x22,
                        'damage': 1.1
                    },
                    0xd: {
                        'radius': 0x31,
                        'damage': 1.15 * 1.16
                    },
                    0xe: {
                        'radius': 0x4b,
                        'damage': 1.15 * 1.16
                    },
                    0xf: {
                        'radius': 0x69,
                        'damage': 1.12
                    },
                    0x10: { 'radius': 0x73 }
                },
                'pvpOverride': {
                    0x0: { 'damage': 0.65 },
                    0x5: { 'radius': 0x10 },
                    0x7: { 'radius': 0x14 },
                    0x8: { 'radius': 0x18 },
                    0x9: { 'radius': 0x1c },
                    0xc: { 'radius': 0x22 }
                },
                'tsPetalOverride': { 0x0: { 'damage': 0.2 } },
                'tanksmithCooldown': 0.1,
                'tanksmithShootCooldown': 0.1,
                'damageScalers': ['damage'],
                'healthScalers': ['health']
            },
            'Bubble': {
                'damage': 0x1,
                'health': 0x1,
                'radius': 0xe,
                'reload': 0x5,
                'hatchTime': 0x0,
                'spawnRarity': 0x0,
                'timeToPop': 0.5,
                'maxEnemyBoost': 0x0,
                'tanksmithCooldown': 0x5 * 0x1e,
                'override': {
                    0x1: {
                        'reload': 0x4,
                        'tanksmithCooldown': 0x4 * 0x1e,
                        'timeToPop': 0.45
                    },
                    0x2: {
                        'reload': 0x3,
                        'tanksmithCooldown': 0x3 * 0x1e,
                        'timeToPop': 0.4
                    },
                    0x3: {
                        'reload': 0x2,
                        'tanksmithCooldown': 0x2 * 0x1e,
                        'timeToPop': 0.35
                    },
                    0x4: {
                        'reload': 1.5,
                        'tanksmithCooldown': 1.5 * 0x1e,
                        'timeToPop': 0.3
                    },
                    0x5: {
                        'reload': 0x1,
                        'tanksmithCooldown': 0x1 * 0x1e,
                        'timeToPop': 0.25
                    },
                    0x6: {
                        'reload': 0.6,
                        'tanksmithCooldown': 0.6 * 0x1e,
                        'timeToPop': 0.2
                    },
                    0x7: {
                        'reload': 0.3,
                        'tanksmithCooldown': 0.3 * 0x1e,
                        'timeToPop': 0.15,
                        'maxEnemyBoost': 0x7d0
                    },
                    0x8: {
                        'reload': 0.2,
                        'tanksmithCooldown': 0.2 * 0x1e,
                        'maxEnemyBoost': 0x1f40
                    },
                    0x9: {
                        'reload': 0.12,
                        'tanksmithCooldown': 0.12 * 0x1e,
                        'maxEnemyBoost': 0x9c40
                    },
                    0xa: {
                        'reload': 0.05,
                        'tanksmithCooldown': 0.05 * 0x1e,
                        'timeToPop': 0.12,
                        'maxEnemyBoost': 0x1d4c0
                    },
                    0xb: {
                        'reload': 0.05,
                        'tanksmithCooldown': 0.05 * 0x1e,
                        'timeToPop': 0.07,
                        'maxEnemyBoost': 0x493e0
                    },
                    0xc: {
                        'reload': 0x0,
                        'tanksmithCooldown': 0x0,
                        'timeToPop': 0.07,
                        'maxEnemyBoost': 0xc3500
                    },
                    0xd: {
                        'health': 0x2,
                        'tanksmithCooldown': 0.6 * 0x1e,
                        'reload': 0.6,
                        'hatchTime': 0.3,
                        'spawnRarity': 0xd,
                        'timeToPop': 0x0,
                        'maxEnemyBoost': 0x0
                    },
                    0xe: {
                        'health': 0x2,
                        'spawnRarity': 0x10
                    },
                    0xf: { 'spawnRarity': 0x14 },
                    0x10: { 'spawnRarity': 0x17 },
                    0x11: { 'spawnRarity': 0x1a },
                    0x12: { 'spawnRarity': 0x1d }
                },
                'pvpOverride': {
                    0x0: {
                        'reload': 2.2,
                        'timeToPop': 0.25
                    },
                    0x1: { 'reload': 0x2 },
                    0x2: { 'reload': 1.8 },
                    0x3: { 'reload': 1.6 },
                    0x4: { 'reload': 1.4 },
                    0x5: { 'reload': 1.2 },
                    0x6: { 'reload': 0x1 },
                    0x7: { 'reload': 0.9 },
                    0x8: { 'reload': 0.85 },
                    0x9: { 'reload': 0.8 },
                    0xa: { 'reload': 0.75 },
                    0xb: { 'reload': 0.7 },
                    0xc: { 'reload': 0.6 },
                    0xd: {
                        'reload': 0.55,
                        'timeToPop': 0.15
                    },
                    0xe: {
                        'reload': 0.5,
                        'timeToPop': 0.12
                    },
                    0xf: { 'reload': 0.45 },
                    0x12: {
                        'reload': 0x0,
                        'timeToPop': 0x0
                    }
                },
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'ignoreAttackDistance': !![]
            },
            'Shiny\x20Bubble': {
                'damage': 0.001,
                'health': 0x14,
                'radius': 0xe,
                'reload': 0x5,
                'timeToPop': 0.5,
                'teleportCooldown': 0x0,
                'override': {
                    0x1: {
                        'reload': 0x4,
                        'timeToPop': 0.45
                    },
                    0x2: {
                        'reload': 0x3,
                        'timeToPop': 0.4
                    },
                    0x3: {
                        'reload': 0x2,
                        'timeToPop': 0.35
                    },
                    0x4: {
                        'reload': 1.5,
                        'timeToPop': 0.3
                    },
                    0x5: {
                        'reload': 0x1,
                        'timeToPop': 0.25
                    },
                    0x6: {
                        'reload': 0.6,
                        'timeToPop': 0.2
                    },
                    0x7: {
                        'reload': 0.5,
                        'timeToPop': 0.15
                    },
                    0x8: { 'reload': 0.4 },
                    0x9: { 'reload': 0.3 },
                    0xa: { 'reload': 0.2 },
                    0xb: { 'reload': 0.1 },
                    0xc: {
                        'reload': 0.07,
                        'timeToPop': 0.08
                    },
                    0xd: {
                        'reload': 0x0,
                        'timeToPop': 0.06
                    },
                    0xe: {
                        'reload': 0x0,
                        'timeToPop': 0.05,
                        'teleportCooldown': 0x5
                    },
                    0xf: {
                        'reload': 0x0,
                        'timeToPop': 0.03,
                        'teleportCooldown': 0x4
                    },
                    0x10: { 'teleportCooldown': 3.67 }
                },
                'pvpOverride': {
                    0x0: {
                        'reload': 2.2,
                        'timeToPop': 0.5
                    },
                    0x1: { 'reload': 0x2 },
                    0x2: { 'reload': 1.8 },
                    0x3: { 'reload': 1.6 },
                    0x4: { 'reload': 1.4 },
                    0x5: { 'reload': 1.2 },
                    0x6: { 'reload': 0x1 },
                    0x7: { 'reload': 0.9 },
                    0x8: { 'reload': 0.85 },
                    0x9: { 'reload': 0.8 },
                    0xa: { 'reload': 0.75 },
                    0xb: { 'reload': 0.7 },
                    0xc: { 'reload': 0.6 },
                    0xd: {
                        'reload': 0.3,
                        'timeToPop': 0.3
                    },
                    0xe: {
                        'reload': 0.06,
                        'timeToPop': 0.12,
                        'teleportCooldown': 0x19
                    },
                    0xf: {
                        'reload': 0.03,
                        'timeToPop': 0.06
                    },
                    0x12: {
                        'reload': 0x0,
                        'timeToPop': 0x0
                    }
                },
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'ignoreAttackDistance': !![]
            },
            'Air': {
                'damage': 0x0,
                'health': 0x0,
                'radius': 0xa,
                'reload': 0x2540be400,
                'inflation': 0xc,
                'override': {
                    0x1: { 'inflation': 0x18 },
                    0x2: { 'inflation': 0x24 },
                    0x3: { 'inflation': 0x30 },
                    0x4: { 'inflation': 0x3c },
                    0x5: { 'inflation': 0x48 },
                    0x6: { 'inflation': 0x54 },
                    0x7: { 'inflation': 0x60 },
                    0x8: { 'inflation': 0x6c },
                    0x9: { 'inflation': 0x78 },
                    0xa: { 'inflation': 0x96 },
                    0xb: { 'inflation': 0xb4 },
                    0xc: { 'inflation': 0xf0 },
                    0xd: { 'inflation': 0x12c },
                    0xe: { 'inflation': 0x168 },
                    0xf: { 'inflation': 0x190 },
                    0x10: { 'inflation': 0x1a4 },
                    0x11: { 'inflation': 0x1b8 },
                    0x12: { 'inflation': 0x1cc }
                },
                'pvpOverride': {
                    0x1: { 'inflation': 0xd },
                    0x2: { 'inflation': 0xe },
                    0x3: { 'inflation': 0xf },
                    0x4: { 'inflation': 0x10 },
                    0x5: { 'inflation': 0x11 },
                    0x6: { 'inflation': 0x12 },
                    0x7: { 'inflation': 0x13 },
                    0x8: { 'inflation': 0x14 },
                    0x9: { 'inflation': 0x15 },
                    0xa: { 'inflation': 0x16 },
                    0xb: { 'inflation': 0x17 },
                    0xc: { 'inflation': 0x18 },
                    0xd: { 'inflation': 0x19 },
                    0xe: { 'inflation': 0x1a },
                    0xf: { 'inflation': 0x1b },
                    0x10: { 'inflation': 0x1c },
                    0x11: { 'inflation': 0x1d },
                    0x12: { 'inflation': 0x1e }
                },
                'tsPetalOverride': {
                    0x0: { 'inflation': 0x0 },
                    0x1: { 'inflation': 0.1 },
                    0x2: { 'inflation': 0.2 },
                    0x3: { 'inflation': 0.3 },
                    0x4: { 'inflation': 0.4 },
                    0x5: { 'inflation': 0.5 },
                    0x6: { 'inflation': 0.6 },
                    0x7: { 'inflation': 0.7 },
                    0x8: { 'inflation': 0.8 },
                    0x9: { 'inflation': 0.9 },
                    0xa: { 'inflation': 0x1 },
                    0xb: { 'inflation': 1.1 },
                    0xc: { 'inflation': 1.2 },
                    0xd: { 'inflation': 1.3 },
                    0xe: { 'inflation': 1.4 },
                    0xf: { 'inflation': 1.5 },
                    0x10: { 'inflation': 1.6 },
                    0x11: { 'inflation': 1.7 },
                    0x12: { 'inflation': 1.8 }
                },
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health']
            },
            'Card': {
                'damage': 0x4,
                'health': 0x19,
                'reload': 0x3,
                'radius': 0xf,
                'waveSpeedBoost': 1.4,
                'ratedWave': 0x86,
                'speedReduction': 0.02,
                'override': {
                    0x1: {
                        'waveSpeedBoost': 1.4,
                        'ratedWave': 0x86,
                        'speedReduction': 0.02
                    },
                    0x2: {
                        'waveSpeedBoost': 1.56,
                        'ratedWave': 0x90,
                        'speedReduction': 0.02
                    },
                    0x3: {
                        'waveSpeedBoost': 1.8,
                        'ratedWave': 0x9e,
                        'speedReduction': 0.02
                    },
                    0x4: {
                        'waveSpeedBoost': 2.12,
                        'ratedWave': 0xb1,
                        'speedReduction': 0.02
                    },
                    0x5: {
                        'waveSpeedBoost': 2.76,
                        'ratedWave': 0xd8,
                        'speedReduction': 0.02
                    },
                    0x6: {
                        'waveSpeedBoost': 3.5,
                        'ratedWave': 0x104,
                        'speedReduction': 0.03
                    },
                    0x7: {
                        'waveSpeedBoost': 4.3,
                        'ratedWave': 0x134,
                        'speedReduction': 0.04
                    },
                    0x8: {
                        'waveSpeedBoost': 4.8,
                        'ratedWave': 0x152,
                        'speedReduction': 0.04
                    },
                    0x9: {
                        'waveSpeedBoost': 5.8,
                        'ratedWave': 0x18e,
                        'speedReduction': 0.04
                    },
                    0xa: {
                        'waveSpeedBoost': 7.4,
                        'ratedWave': 0x1ee,
                        'speedReduction': 0.05
                    },
                    0xb: {
                        'waveSpeedBoost': 0x9,
                        'ratedWave': 0x24e,
                        'speedReduction': 0.06
                    },
                    0xc: {
                        'waveSpeedBoost': 10.8,
                        'ratedWave': 0x2ba,
                        'speedReduction': 0.06
                    },
                    0xd: {
                        'waveSpeedBoost': 0xe,
                        'ratedWave': 0x37a,
                        'speedReduction': 0.07
                    },
                    0xe: {
                        'waveSpeedBoost': 0x12,
                        'ratedWave': 0x46a,
                        'speedReduction': 0.08
                    },
                    0xf: {
                        'waveSpeedBoost': 22.6,
                        'ratedWave': 0x57e,
                        'speedReduction': 0.09
                    },
                    0x10: {
                        'waveSpeedBoost': 28.2,
                        'ratedWave': 0x6ce,
                        'speedReduction': 0.1
                    }
                },
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'ignoreAttackDistance': !![]
            },
            'Cash': {
                'damage': 0x4,
                'health': 0x19,
                'reload': 0x1770,
                'radius': 0x1e,
                'maxWave': 0x3,
                'maxSkip': 0x3,
                'petalLayout': [[{}]],
                'override': {
                    0x1: { 'maxWave': 0x6 },
                    0x2: { 'maxWave': 0xa },
                    0x3: {
                        'maxWave': 0x10,
                        'maxSkip': 0x4
                    },
                    0x4: { 'maxWave': 0x1c },
                    0x5: { 'maxWave': 0x28 },
                    0x6: {
                        'maxWave': 0x3c,
                        'maxSkip': 0x5
                    },
                    0x7: { 'maxWave': 0x52 },
                    0x8: { 'maxWave': 0x68 },
                    0x9: {
                        'maxWave': 0x7e,
                        'maxSkip': 0x6
                    },
                    0xa: { 'maxWave': 0x94 },
                    0xb: { 'maxWave': 0xaa },
                    0xc: {
                        'maxWave': 0xdc,
                        'maxSkip': 0x7
                    },
                    0xd: { 'maxWave': 0x10e },
                    0xe: { 'maxWave': 0x172 },
                    0xf: { 'maxWave': 0x1d6 },
                    0x10: { 'maxWave': 0x23a }
                },
                'pvpOverride': { 0x0: { 'reload': 0x3b9aca00 } },
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'ignoreAttackDistance': !![]
            },
            'Blossom': {
                'damage': 0x1,
                'health': 0x64,
                'armor': 0x1e,
                'reload': 0x1,
                'radius': 0x19,
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': [
                    'health',
                    'armor'
                ],
                'ignoreAttackDistance': !![]
            },
            'Shiny\x20Leaf': {
                'damage': 0x7d,
                'health': 0x1e,
                'reload': 0x1,
                'maxDamage': 0x87,
                'petalLayout': [[{}]],
                'damageScalers': [
                    'damage',
                    'maxDamage'
                ],
                'healthScalers': ['health'],
                'override': {
                    0x9: {
                        'radius': 0x12,
                        'damage': 0x1 / 0x3,
                        'maxDamage': 0x1 / 0x3,
                        'petalLayout': [
                            [{}],
                            [{}],
                            [{}]
                        ]
                    },
                    0xc: { 'radius': 0x18 },
                    0xd: {
                        'radius': 0x1e,
                        'damage': 0x3 / 0x5,
                        'maxDamage': 0x3 / 0x5,
                        'petalLayout': [
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}]
                        ]
                    },
                    0xe: {
                        'radius': 0x28,
                        'damage': 0x5 / 0x6,
                        'maxDamage': 0x5 / 0x6,
                        'petalLayout': [
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}]
                        ]
                    },
                    0xf: {
                        'radius': 0x37,
                        'damage': 0x6 / 0x7,
                        'passiveHealingBuff': 0x6 / 0x7,
                        'petalLayout': [
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}]
                        ]
                    },
                    0x10: {
                        'radius': 0x8c,
                        'damage': 0x7,
                        'maxDamage': 0x7,
                        'petalLayout': [[{}]]
                    }
                }
            },
            'Carapace': {
                'damage': 0x2d,
                'health': 0xc,
                'reload': 1.5,
                'passiveHealingBuff': 5.5,
                'healthBuff': 0x5a,
                'petalLayout': [[{}]],
                'healScalers': [
                    'healthBuff',
                    'passiveHealingBuff'
                ],
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'override': {
                    0x7: { 'radius': 0xc },
                    0x8: { 'radius': 0x11 },
                    0xc: {
                        'radius': 0x16,
                        'passiveHealingBuff': 1.3
                    },
                    0xd: { 'radius': 0x1b },
                    0xe: { 'radius': 0x20 },
                    0xf: { 'radius': 0x25 },
                    0x10: { 'radius': 0x2a }
                }
            },
            'Thorax': {
                'damage': 0x2d,
                'health': 0xc,
                'reload': 1.5,
                'passiveHealingBuff': 7.2,
                'flowerArmor': 2.6,
                'armorPercent': 0xa,
                'petalLayout': [[{}]],
                'healScalers': [
                    'flowerArmor',
                    'passiveHealingBuff'
                ],
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'override': {
                    0x7: { 'radius': 0xc },
                    0x8: { 'radius': 0x11 },
                    0xc: {
                        'radius': 0x16,
                        'passiveHealingBuff': 1.3
                    },
                    0xd: { 'radius': 0x1b },
                    0xe: { 'radius': 0x20 },
                    0xf: { 'radius': 0x25 },
                    0x10: { 'radius': 0x2a }
                }
            },
            'Lilypad': {
                'damage': 0xa,
                'health': 0xa,
                'reload': 0x4,
                'petHeal': 0x7d,
                'flowerHeal': 0x7,
                'radius': 17.5,
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': [
                    'health',
                    'petHeal'
                ],
                'healScalers': ['flowerHeal'],
                'ignoreAttackDistance': !![]
            },
            'LilypadProjectile': {
                'damage': 0xa,
                'health': 0xa,
                'reload': 0x4,
                'radius': 17.5,
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'ignoreAttackDistance': !![]
            },
            'LilypadGiantProjectile': {
                'damage': 0x0,
                'health': 0x3a35294400,
                'reload': 0x4,
                'radius': 0x96 * 0.7,
                'petHeal': 0x7d,
                'flowerHeal': 0x7,
                'override': {
                    0x1: { 'radius': 0xc8 * 0.7 },
                    0x2: { 'radius': 0xfa * 0.7 },
                    0x3: { 'radius': 0x12c * 0.7 },
                    0x4: { 'radius': 0x15e * 0.7 },
                    0x5: { 'radius': 0x190 * 0.7 },
                    0x6: { 'radius': 0x1c2 * 0.7 },
                    0x7: { 'radius': 0x1f4 * 0.7 },
                    0x8: { 'radius': 0x226 * 0.7 },
                    0x9: { 'radius': 0x258 * 0.7 },
                    0xa: { 'radius': 0x28a * 0.7 },
                    0xb: { 'radius': 0x2bc * 0.7 },
                    0xc: { 'radius': 0x2ee * 0.7 },
                    0xd: { 'radius': 0x320 * 0.7 },
                    0xe: { 'radius': 0x352 * 0.7 },
                    0xf: { 'radius': 0x384 * 0.7 },
                    0x10: { 'radius': 0x39d * 0.7 },
                    0x11: { 'radius': 0x3b6 * 0.7 }
                },
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': [
                    'health',
                    'petHeal'
                ],
                'healScalers': ['flowerHeal']
            },
            'Trinket\x20of\x20the\x20Hivemind': {
                'damage': 0x0,
                'health': 0xa,
                'reload': 2.5,
                'radius': 0x19,
                'maximumRarity': 0x0,
                'override': {
                    0x1: { 'maximumRarity': 0x1 },
                    0x2: { 'maximumRarity': 0x2 },
                    0x3: { 'maximumRarity': 0x3 },
                    0x4: { 'maximumRarity': 0x4 },
                    0x5: { 'maximumRarity': 0x5 },
                    0x6: { 'maximumRarity': 0x6 },
                    0x7: { 'maximumRarity': 0x7 },
                    0x8: { 'maximumRarity': 0x8 },
                    0x9: { 'maximumRarity': 0x9 },
                    0xa: { 'maximumRarity': 0xa },
                    0xb: { 'maximumRarity': 0xb },
                    0xc: { 'maximumRarity': 0xc },
                    0xd: { 'maximumRarity': 0xd },
                    0xe: { 'maximumRarity': 0x10 },
                    0xf: { 'maximumRarity': 0x13 },
                    0x10: { 'maximumRarity': 0x16 },
                    0x11: { 'maximumRarity': 0x19 },
                    0x12: { 'maximumRarity': 0x1c },
                    0x13: { 'maximumRarity': 0x1f }
                },
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'ignoreAttackDistance': !![]
            },
            'Trinket\x20of\x20the\x20Sea': {
                'damage': 0x0,
                'health': 0xa,
                'reload': 2.5,
                'radius': 0x19,
                'maximumRarity': 0x0,
                'override': {
                    0x1: { 'maximumRarity': 0x1 },
                    0x2: { 'maximumRarity': 0x2 },
                    0x3: { 'maximumRarity': 0x3 },
                    0x4: { 'maximumRarity': 0x4 },
                    0x5: { 'maximumRarity': 0x5 },
                    0x6: { 'maximumRarity': 0x6 },
                    0x7: { 'maximumRarity': 0x7 },
                    0x8: { 'maximumRarity': 0x8 },
                    0x9: { 'maximumRarity': 0x9 },
                    0xa: { 'maximumRarity': 0xa },
                    0xb: { 'maximumRarity': 0xb },
                    0xc: { 'maximumRarity': 0xc },
                    0xd: { 'maximumRarity': 0xd },
                    0xe: { 'maximumRarity': 0x10 },
                    0xf: { 'maximumRarity': 0x13 },
                    0x10: { 'maximumRarity': 0x16 },
                    0x11: { 'maximumRarity': 0x19 },
                    0x12: { 'maximumRarity': 0x1c },
                    0x13: { 'maximumRarity': 0x1f }
                },
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'ignoreAttackDistance': !![]
            },
            'Trinket\x20of\x20the\x20Wild': {
                'damage': 0x0,
                'health': 0xa,
                'reload': 2.5,
                'radius': 0x19,
                'maximumRarity': 0x0,
                'override': {
                    0x1: { 'maximumRarity': 0x1 },
                    0x2: { 'maximumRarity': 0x2 },
                    0x3: { 'maximumRarity': 0x3 },
                    0x4: { 'maximumRarity': 0x4 },
                    0x5: { 'maximumRarity': 0x5 },
                    0x6: { 'maximumRarity': 0x6 },
                    0x7: { 'maximumRarity': 0x7 },
                    0x8: { 'maximumRarity': 0x8 },
                    0x9: { 'maximumRarity': 0x9 },
                    0xa: { 'maximumRarity': 0xa },
                    0xb: { 'maximumRarity': 0xb },
                    0xc: { 'maximumRarity': 0xc },
                    0xd: { 'maximumRarity': 0xd },
                    0xe: { 'maximumRarity': 0x10 },
                    0xf: { 'maximumRarity': 0x13 },
                    0x10: { 'maximumRarity': 0x17 },
                    0x11: { 'maximumRarity': 0x1b },
                    0x12: { 'maximumRarity': 0x1f },
                    0x13: { 'maximumRarity': 0x23 }
                },
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'ignoreAttackDistance': !![]
            },
            'Plank': {
                'damage': 0x3,
                'health': 0x1f4,
                'reload': 0.5,
                'radius': 0x14,
                'petalLayout': [[{}]],
                'override': {
                    0x7: { 'radius': 0x19 },
                    0xc: {
                        'radius': 0x32,
                        'health': 1.5
                    },
                    0xd: {
                        'radius': 0x4b,
                        'health': 1.25
                    },
                    0xe: {
                        'radius': 0x64,
                        'health': 1.5
                    },
                    0xf: { 'radius': 0x50 },
                    0x10: { 'radius': 0x6e }
                },
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'ignoreAttackDistance': !![]
            },
            'Carrot': {
                'damage': 0xe,
                'health': 0x258,
                'reload': 4.4,
                'radius': 0x14,
                'petalLayout': [[{}]],
                'override': {
                    0x8: { 'radius': 0x19 },
                    0xc: { 'radius': 0x2d },
                    0xd: { 'radius': 0x82 },
                    0xe: { 'radius': 0xaa },
                    0xf: { 'radius': 0xdc },
                    0x10: { 'radius': 0xfa }
                },
                'pvpOverride': {},
                'stickParentRotation': !![],
                'damageScalers': ['damage'],
                'healthScalers': ['health']
            },
            'CarrotProjectile': {
                'damage': 0xe,
                'health': 0x258,
                'reload': 4.4,
                'radius': 0x14,
                'petalLayout': [[{}]],
                'override': {
                    0x8: { 'radius': 0x19 },
                    0xc: { 'radius': 0x2d },
                    0xd: { 'radius': 0x82 },
                    0xe: { 'radius': 0xaa },
                    0xf: { 'radius': 0xdc },
                    0x10: { 'radius': 0xfa }
                },
                'pvpOverride': {},
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'attackDistanceMult': Math['sqrt'](0x1 / attackPetalDistanceMult)
            },
            'Ant\x20Egg': {
                'damage': 0x1,
                'health': 0x8c,
                'reload': 7.5,
                'hatchTime': 0.2,
                'radius': 0xc,
                'spawnRarity': 0x0,
                'override': {
                    0x1: { 'spawnRarity': 0x1 },
                    0x2: { 'spawnRarity': 0x2 },
                    0x3: { 'spawnRarity': 0x3 },
                    0x4: {
                        'tanksmithCooldown': 0xa * 0x1e,
                        'spawnRarity': 0x4
                    },
                    0x5: { 'spawnRarity': 0x5 },
                    0x6: { 'spawnRarity': 0x6 },
                    0x7: { 'spawnRarity': 0x7 },
                    0x8: { 'spawnRarity': 0x8 },
                    0x9: { 'spawnRarity': 0x9 },
                    0xa: {
                        'spawnRarity': 0xa,
                        'petalLayout': [
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}]
                        ]
                    },
                    0xb: { 'spawnRarity': 0xb },
                    0xc: { 'spawnRarity': 0xc },
                    0xd: {
                        'reload': 0xb,
                        'spawnRarity': 0xd,
                        'petalLayout': [
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}]
                        ]
                    },
                    0xe: {
                        'reload': 11.5,
                        'spawnRarity': 0xf
                    },
                    0xf: {
                        'reload': 0xe,
                        'spawnRarity': 0x12
                    },
                    0x10: {
                        'reload': 0xd,
                        'spawnRarity': 0x15,
                        'petalLayout': [
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}],
                            [{}]
                        ]
                    },
                    0x11: { 'spawnRarity': 0x18 },
                    0x12: { 'spawnRarity': 0x1b }
                },
                'pvpOverride': {
                    0x0: {
                        'spawnRarity': 0x0,
                        'hatchTime': 0x8,
                        'reload': 0x8
                    },
                    0x1: {
                        'spawnRarity': 0x0,
                        'hatchTime': 0x6,
                        'reload': 0x6
                    },
                    0x2: {
                        'spawnRarity': 0x0,
                        'hatchTime': 0x4,
                        'reload': 0x4
                    },
                    0x3: {
                        'spawnRarity': 0x0,
                        'hatchTime': 0x2,
                        'reload': 0x2
                    },
                    0x4: {
                        'spawnRarity': 0x1,
                        'hatchTime': 0x4,
                        'reload': 0x4
                    },
                    0x5: {
                        'spawnRarity': 0x1,
                        'hatchTime': 0x2,
                        'reload': 0x2
                    },
                    0x6: {
                        'spawnRarity': 0x2,
                        'hatchTime': 0x6,
                        'reload': 0x4
                    },
                    0x7: {
                        'spawnRarity': 0x2,
                        'hatchTime': 0x4,
                        'reload': 0x2
                    },
                    0x8: {
                        'spawnRarity': 0x3,
                        'hatchTime': 0x8,
                        'reload': 0x4
                    },
                    0x9: {
                        'spawnRarity': 0x3,
                        'hatchTime': 0x6,
                        'reload': 0x2
                    },
                    0xa: {
                        'spawnRarity': 0x4,
                        'hatchTime': 0xa,
                        'reload': 0x4
                    },
                    0xb: {
                        'spawnRarity': 0x4,
                        'hatchTime': 0x8,
                        'reload': 0x2
                    },
                    0xc: {
                        'spawnRarity': 0x5,
                        'hatchTime': 0xc,
                        'reload': 0x4
                    },
                    0xd: {
                        'spawnRarity': 0x5,
                        'hatchTime': 0xa,
                        'reload': 0x2
                    },
                    0xe: {
                        'spawnRarity': 0x6,
                        'hatchTime': 0xe,
                        'reload': 0x4
                    },
                    0xf: {
                        'spawnRarity': 0x6,
                        'hatchTime': 0xc,
                        'reload': 0x2
                    },
                    0x10: {
                        'spawnRarity': 0x7,
                        'hatchTime': 0x10,
                        'reload': 0x4
                    },
                    0x11: {
                        'spawnRarity': 0x7,
                        'hatchTime': 0x2,
                        'reload': 0x2
                    },
                    0x12: {
                        'spawnRarity': 0x8,
                        'hatchTime': 0x3,
                        'reload': 0x3
                    }
                },
                'tsProjectileSpeed': 0x1,
                'tanksmithCooldown': 0xa * 0x1e,
                'petalLayout': [
                    [{}],
                    [{}],
                    [{}],
                    [{}]
                ],
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'ignoreAttackDistance': !![]
            },
            'Shattered\x20Relic\x20of\x20Wrath': {
                'damage': 0x96,
                'health': 0.1,
                'reload': 0x3,
                'radius': 7.5,
                'petalLayout': [[
                        {
                            'offsetAngle': 0x0,
                            'offsetRadius': 0xa
                        },
                        {
                            'offsetAngle': Math['PI'] * 0x2 / 0x3,
                            'offsetRadius': 0xa
                        },
                        {
                            'offsetAngle': Math['PI'] * 0x4 / 0x3,
                            'offsetRadius': 0xa
                        }
                    ]],
                'damageScalers': [],
                'healthScalers': []
            },
            'Reinforced\x20Relic\x20of\x20Wrath': {
                'damage': 0x19,
                'health': 0x145,
                'reload': 0x6,
                'radius': 0x14,
                'petalLayout': [[{}]],
                'damageScalers': [],
                'healthScalers': []
            },
            'Subset\x20Relic\x20of\x20the\x20Guardian': {
                'damage': 0x1,
                'health': 0x4b,
                'reload': 0x2,
                'hatchTime': 0x2,
                'petalLayout': [[{}]],
                'damageScalers': [],
                'healthScalers': []
            },
            'Division\x20Relic\x20of\x20the\x20Guardian': {
                'damage': 0x1,
                'health': 0x4b,
                'reload': 0x2,
                'hatchTime': 0x2,
                'petalLayout': [[{}]],
                'damageScalers': [],
                'healthScalers': []
            },
            'Guard\x20Relic\x20of\x20the\x20Guardian': {
                'damage': 0x1,
                'health': 0x4b,
                'reload': 0x2,
                'hatchTime': 0x2,
                'petalLayout': [[{}]],
                'damageScalers': [],
                'healthScalers': []
            },
            'Knight\x20Relic\x20of\x20the\x20Guardian': {
                'damage': 0x1,
                'health': 0x4b,
                'reload': 0x2,
                'hatchTime': 0x2,
                'petalLayout': [[{}]],
                'damageScalers': [],
                'healthScalers': []
            },
            'Aid\x20Relic\x20of\x20Serenity': {
                'damage': 0x0,
                'health': 0x0,
                'reload': 0x0,
                'petalLayout': [[{}]],
                'damageScalers': [],
                'healthScalers': []
            },
            'Subliminal\x20Relic\x20of\x20Serenity': {
                'damage': 0x0,
                'health': 0x0,
                'reload': 0x0,
                'petalLayout': [[{}]],
                'damageScalers': [],
                'healthScalers': []
            },
            'Barrier\x20Relic\x20of\x20Serenity': {
                'damage': 0x0,
                'health': 0x0,
                'reload': 0x0,
                'petalLayout': [[{}]],
                'damageScalers': [],
                'healthScalers': []
            },
            'Verdant\x20Artifact': {
                'damage': 0x0,
                'health': 0xc9f2c9cd04675000000000000,
                'reload': 0x3,
                'petalLayout': [[{}]],
                'damageScalers': [],
                'healthScalers': []
            },
            'Scorched\x20Artifact': {
                'damage': 0x0,
                'health': 0xc9f2c9cd04675000000000000,
                'reload': 0x3,
                'petalLayout': [[{}]],
                'damageScalers': [],
                'healthScalers': [],
                'healMultiplier': 1.2,
                'squadHealShare': 0.33,
                'description': ['Enhances\x20healing\x20and\x20provides\x20squad\x20buffs']
            },
            'Chimera': {
                'damage': 0x0,
                'health': 0xc9f2c9cd04675000000000000,
                'reload': 0x3,
                'petalLayout': [[{}]],
                'damageScalers': [],
                'healthScalers': [],
                'mobDamageMultiplier': 1.5,
                'mobSpeedMultiplier': 0x1,
                'mobHpMultiplier': 0x1,
                'abilityCooldown': 0xa,
                'description': [
                    'Transform\x20into\x20a\x20powerful\x20',
                    {
                        'text': 'mob',
                        'color': '#9932cc'
                    },
                    '\x20with\x20unique\x20abilities'
                ]
            },
            'Abyssal\x20Artifact': {
                'damage': 0x0,
                'health': 0xc9f2c9cd04675000000000000,
                'reload': 0x3,
                'petalLayout': [[{}]],
                'damageScalers': [],
                'healthScalers': [],
                'eggHpMultiplier': 0x1,
                'eggMassMultiplier': 0x1,
                'eggDamageMultiplier': 0x2,
                'description': [
                    'Enhances\x20',
                    {
                        'text': 'Egg',
                        'color': '#7eef6d'
                    },
                    '\x20petal\x20performance'
                ]
            },
            'Verdant\x20Artifact': {
                'damage': 0x0,
                'health': 0xc9f2c9cd04675000000000000,
                'reload': 0x3,
                'petalLayout': [[{}]],
                'damageScalers': [],
                'healthScalers': [],
                'dpsMultiplier': 1.1,
                'description': ['Increases\x20damage\x20output\x20and\x20petal\x20performance']
            },
            'Cosmic\x20Artifact': {
                'damage': 0x0,
                'health': 0xc9f2c9cd04675000000000000,
                'reload': 0x3,
                'petalLayout': [[{}]],
                'damageScalers': [],
                'healthScalers': [],
                'hpMultiplier': 1.2,
                'description': ['Enhances\x20survivability\x20and\x20knockback\x20effects']
            },
            'HornetSting': {
                'damage': 0xf,
                'health': 0xa,
                'reload': 2.5,
                'radius': 0xc,
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'description': '大黄蜂基础尖刺\x20-\x20提升基础射击技能伤害'
            },
            'HornetVolley': {
                'damage': 0xa,
                'health': 0xa,
                'reload': 0x3,
                'radius': 0xe,
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'description': '大黄蜂旋风连射\x20-\x20提升旋风连射技能伤害'
            },
            'HornetSwarm': {
                'damage': 0x8,
                'health': 0xf,
                'reload': 0x4,
                'radius': 0x10,
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'description': '大黄蜂蜂群召唤\x20-\x20提升召唤物伤害'
            },
            'HornetFrenzy': {
                'damage': 0x5,
                'health': 0x14,
                'reload': 0x5,
                'radius': 0x12,
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'description': '大黄蜂狂暴\x20-\x20提升狂暴状态移速加成'
            },
            'BeetleClaw': {
                'damage': 0x12,
                'health': 0xc,
                'reload': 2.8,
                'radius': 0xe,
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'description': '甲虫爪击\x20-\x20提升旋风攻击技能伤害'
            },
            'BeetleCharge': {
                'damage': 0x14,
                'health': 0xf,
                'reload': 0x4,
                'radius': 0x10,
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'description': '甲虫冲锋\x20-\x20提升冲锋技能伤害'
            },
            'BeetleSwarm': {
                'damage': 0xa,
                'health': 0x12,
                'reload': 4.5,
                'radius': 0x12,
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'description': '甲虫盟友召唤\x20-\x20提升召唤物伤害'
            },
            'BeetleShell': {
                'damage': 0x5,
                'health': 0x19,
                'reload': 0x6,
                'radius': 0x14,
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'description': '甲虫铁甲\x20-\x20提升护盾持续时间'
            },
            'LadybugHeal': {
                'damage': 0x8,
                'health': 0x14,
                'reload': 3.5,
                'radius': 0xf,
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'description': '瓢虫治疗\x20-\x20提升治疗技能效果'
            },
            'LadybugDodge': {
                'damage': 0xa,
                'health': 0xc,
                'reload': 0x3,
                'radius': 0xd,
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'description': '瓢虫闪避\x20-\x20提升突进技能伤害'
            },
            'LadybugSwarm': {
                'damage': 0x8,
                'health': 0x10,
                'reload': 4.2,
                'radius': 0x10,
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'description': '瓢虫姐妹召唤\x20-\x20提升召唤物伤害'
            },
            'LadybugGrow': {
                'damage': 0x5,
                'health': 0x16,
                'reload': 5.5,
                'radius': 0x13,
                'petalLayout': [[{}]],
                'damageScalers': ['damage'],
                'healthScalers': ['health'],
                'description': '瓢虫成长\x20-\x20提升成长技能体型加成'
            }
        },
        'enemies': {
            'Rock': {
                'health': 0x1e,
                'damage': 0xa,
                'radius': 0x28,
                'speed': 0x0,
                'mass': 0x4,
                'personality': 'stationary',
                'drops': {
                    'Rock': [
                        0.25,
                        0x0
                    ],
                    'Heavy': [
                        0.05,
                        0x0
                    ],
                    'Emerald': [
                        0.25,
                        0xb,
                        0xf
                    ]
                },
                'boss': [
                    {
                        'type': 'spawnAround',
                        'spawnCooldown': 0xc,
                        'cooldown': 0x96,
                        'spawnType': 'Rock\x20Tank',
                        'randomChoices': [0x2]
                    },
                    {
                        'type': 'spawnAround',
                        'spawnCooldown': 0x23,
                        'cooldown': 0x96,
                        'spawnType': 'Rock\x20Tank'
                    },
                    {
                        'type': 'growAndShrink',
                        'switchTimer': 0x50,
                        'cooldown': 0xa0,
                        'magnitude': 0xc
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x1,
                        'cooldown': 0x78,
                        'rotateSpeed': 0.2,
                        'spawnType': 'RockMissile',
                        'raritiesBelow': 0x1
                    },
                    {
                        'type': 'shootNearest',
                        'spawnCooldown': 0x1,
                        'onlyShootOnce': !![],
                        'cooldown': 0x3c,
                        'rotateSpeed': 0.2,
                        'spawnType': 'BigRockMissile'
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x1,
                        'cooldown': 0x3c,
                        'rotateSpeed': 0.6,
                        'spawnType': 'RockMissile',
                        'raritiesBelow': 0x1
                    },
                    {
                        'type': 'stationary',
                        'cooldown': 0x28,
                        'randomChoices': [0x1]
                    }
                ],
                'bossOverride': { 'bossForceStartIndex': 0x0 }
            },
            'Sandstone': {
                'health': 0xf,
                'damage': 0xa,
                'radius': 0x28,
                'speed': 0x0,
                'mass': 0x4,
                'personality': 'stationary',
                'drops': {
                    'Sand': [
                        0.25,
                        0x0
                    ],
                    'Dust': [
                        0.5,
                        0xa
                    ],
                    'Amulet\x20of\x20Divergence': [
                        0.4,
                        0xc,
                        0x10
                    ]
                },
                'boss': [
                    {
                        'type': 'spawnAround',
                        'spawnCooldown': 0xc,
                        'cooldown': 0x96,
                        'spawnType': 'Scorpion',
                        'randomChoices': [0x2]
                    },
                    {
                        'type': 'spawnAround',
                        'spawnCooldown': 0x23,
                        'cooldown': 0x96,
                        'spawnType': 'Scorpion'
                    },
                    {
                        'type': 'growAndShrink',
                        'switchTimer': 0x50,
                        'cooldown': 0xa0,
                        'magnitude': 0xc
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x1,
                        'cooldown': 0x78,
                        'rotateSpeed': 0.2,
                        'spawnType': 'ScorpionMissile',
                        'raritiesBelow': 0x1
                    },
                    {
                        'type': 'shootNearest',
                        'spawnCooldown': 0x1,
                        'onlyShootOnce': !![],
                        'cooldown': 0x3c,
                        'rotateSpeed': 0.2,
                        'spawnType': 'BiggestDesertMissile'
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x1,
                        'cooldown': 0x3c,
                        'rotateSpeed': 0.6,
                        'spawnType': 'ScorpionMissile',
                        'raritiesBelow': 0x1
                    },
                    {
                        'type': 'stationary',
                        'cooldown': 0x28,
                        'randomChoices': [0x1]
                    }
                ],
                'bossOverride': { 'bossForceStartIndex': 0x0 }
            },
            'Soil': {
                'health': 0x4b,
                'damage': 0xa,
                'radius': 0x19,
                'speed': 0x0,
                'mass': 0x4,
                'personality': 'stationary',
                'drops': {
                    'Soil': [
                        0.25,
                        0x0
                    ],
                    'Neutron\x20Star': [
                        0.02,
                        0x8
                    ],
                    'Bloom': [
                        0.01,
                        0x4
                    ]
                },
                'boss': [{
                        'type': 'growAndShrink',
                        'switchTimer': 0x32,
                        'cooldown': 0x4c4b40,
                        'magnitude': 0xc
                    }],
                'bossOverride': { 'bossForceStartIndex': 0x0 }
            },
            'Plastic': {
                'health': 0xf,
                'damage': 0xa,
                'radius': 0x28,
                'speed': 0x0,
                'mass': 0x1,
                'personality': 'stationary',
                'drops': {
                    'Air': [
                        0.25,
                        0x0
                    ],
                    'Rubber': [
                        0.25,
                        0x0
                    ],
                    'Sapphire': [
                        0.25,
                        0xb,
                        0xf
                    ]
                },
                'boss': [
                    {
                        'type': 'heal',
                        'heal': 0.1,
                        'cooldown': 0x3c
                    },
                    {
                        'type': 'mania',
                        'cooldown': 0x0,
                        'timeLimit': 0x5
                    },
                    {
                        'type': 'heal',
                        'heal': 0.1,
                        'cooldown': 0x96,
                        'randomChoices': [
                            0x7,
                            0xc,
                            0xf,
                            0x11,
                            0x14,
                            0x17,
                            0x1b
                        ]
                    },
                    {
                        'type': 'heal',
                        'heal': 0.1,
                        'cooldown': 0x3c
                    },
                    {
                        'type': 'moveCenter',
                        'cooldown': 0x78,
                        'speedMult': 2.6
                    },
                    {
                        'type': 'growAndShrink',
                        'switchTimer': 0x8,
                        'cooldown': 0x20,
                        'magnitude': 0x6 * 0x2d / 0x20
                    },
                    {
                        'type': 'spawnGrows',
                        'cooldown': 0x1,
                        'spawnType': 'Shiny\x20Plastic',
                        'randomChoices': [
                            0x7,
                            0xc,
                            0xf,
                            0x11,
                            0x14,
                            0x17,
                            0x1b
                        ]
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0xf,
                        'cooldown': 0x3c,
                        'rotateSpeed': 0.2,
                        'spawnType': 'Sea\x20Urchin',
                        'raritiesBelow': 0x2
                    },
                    {
                        'type': 'aggroDifferent',
                        'cooldown': 0x0,
                        'detectionType': 'closest'
                    },
                    {
                        'type': 'chaseAggro',
                        'cooldown': 0x3c,
                        'turnSpeed': 0x1
                    },
                    {
                        'type': 'mania',
                        'cooldown': 0x0,
                        'timeLimit': 2.5
                    },
                    {
                        'type': 'chaseAggro',
                        'cooldown': 0x3c,
                        'turnSpeed': 0x1
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x8,
                        'cooldown': 0x78,
                        'rotateSpeed': -0.2,
                        'spawnDistance': 0.9,
                        'spawnType': 'BossUrchinMissile',
                        'raritiesBelow': 0x0
                    },
                    {
                        'type': 'aggroDifferent',
                        'cooldown': 0x0,
                        'detectionType': 'random'
                    },
                    {
                        'type': 'mania',
                        'cooldown': 0x0,
                        'timeLimit': 2.5
                    },
                    {
                        'type': 'smallDash',
                        'cooldown': 0xf0,
                        'dashLength': 0x28,
                        'sizeChangeLength': 0x28,
                        'targetRadius': 0.3,
                        'dashSpeed': 0x7
                    },
                    {
                        'type': 'mania',
                        'cooldown': 0x0,
                        'timeLimit': 2.5
                    },
                    {
                        'type': 'aggroDifferent',
                        'cooldown': 0x0,
                        'detectionType': 'closest'
                    },
                    {
                        'type': 'chaseAggro',
                        'cooldown': 0x3c,
                        'turnSpeed': 0x1
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0xa,
                        'cooldown': 0x1e,
                        'rotateSpeed': 0.2,
                        'spawnType': 'Jellyfish',
                        'raritiesBelow': 0x2
                    },
                    {
                        'type': 'aggroDifferent',
                        'cooldown': 0x0,
                        'detectionType': 'closest'
                    },
                    {
                        'type': 'chaseAggro',
                        'cooldown': 0x1e,
                        'turnSpeed': 0x1
                    },
                    {
                        'type': 'fly',
                        'cooldown': 0x3c,
                        'speedMultiplier': 0x5
                    },
                    {
                        'type': 'mania',
                        'cooldown': 0x0,
                        'timeLimit': 2.5
                    },
                    {
                        'type': 'complexShoot',
                        'shoot': [
                            {
                                'spawnCooldown': 0x3,
                                'spawnAmount': 0x2,
                                'spawnSpacing': Math['PI'] * 0x2,
                                'rotateSpeed': 0.2,
                                'spawnType': 'BossUrchinMissile',
                                'raritiesBelow': 0x1
                            },
                            {
                                'spawnCooldown': 0x4,
                                'spawnAmount': 0x2,
                                'spawnSpacing': Math['PI'] * 0x2,
                                'rotateSpeed': -0.2,
                                'spawnType': 'BossUrchinMissile',
                                'raritiesBelow': 0x2
                            },
                            {
                                'aim': !![],
                                'spawnCooldown': 0x50,
                                'predictionChance': 0x0,
                                'spawnType': 'BigBossUrchinMissile',
                                'raritiesBelow': 0x0
                            }
                        ],
                        'cooldown': 0xf0
                    },
                    {
                        'type': 'mania',
                        'cooldown': 0x0,
                        'timeLimit': 2.5
                    },
                    {
                        'type': 'growAndShrink',
                        'switchTimer': 0x28,
                        'cooldown': 0x50,
                        'magnitude': 0x9
                    },
                    {
                        'type': 'aggroDifferent',
                        'cooldown': 0x0,
                        'detectionType': 'closest'
                    },
                    {
                        'type': 'chaseAggro',
                        'cooldown': 0x3c,
                        'turnSpeed': 0x1,
                        'randomChoices': [0x7]
                    }
                ],
                'bossOverride': {
                    'changeStateOnHpThresholds': { 0.2: [0x3] },
                    'bossForceStartIndex': 0x0,
                    'childrenRotateSpeed': 0.046,
                    'childrenDistance': 0x8e,
                    'collideOtherEnemies': ![],
                    'childrenWanderAngle': ![],
                    'childrenWanderDistance': ![],
                    'spawnRarityOffset': 0x1,
                    'spawnAmount': 0x5,
                    'speed': 1.75,
                    'healing': 0.0058
                }
            },
            'Shiny\x20Plastic': {
                'health': 0x12,
                'damage': 0xa,
                'radius': 0x28,
                'speed': 0x0,
                'mass': 0x1,
                'personality': 'stationary',
                'drops': {
                    'Bloom': [
                        0.25,
                        0x4
                    ],
                    'Rubber': [
                        0.5,
                        0x0
                    ],
                    'Plastic\x20Egg': [
                        0.5,
                        0x0
                    ]
                },
                'boss': [
                    {
                        'type': 'heal',
                        'heal': 0.1,
                        'cooldown': 0x3c
                    },
                    {
                        'type': 'mania',
                        'cooldown': 0x0,
                        'timeLimit': 0x5
                    },
                    {
                        'type': 'heal',
                        'heal': 0.1,
                        'cooldown': 0x96,
                        'randomChoices': [0x7]
                    },
                    {
                        'type': 'heal',
                        'heal': 0.1,
                        'cooldown': 0x3c
                    },
                    {
                        'type': 'moveCenter',
                        'cooldown': 0x78,
                        'speedMult': 2.6
                    },
                    {
                        'type': 'growAndShrink',
                        'switchTimer': 0x8,
                        'cooldown': 0x20,
                        'magnitude': 0x6 * 0x2d / 0x20
                    },
                    {
                        'type': 'spawnGrows',
                        'cooldown': 0x1,
                        'spawnType': 'Sea\x20Floor\x20Burrow',
                        'randomChoices': [0x7]
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x23,
                        'cooldown': 0x3c,
                        'rotateSpeed': 0.2,
                        'spawnType': 'Sea\x20Urchin',
                        'raritiesBelow': 0x1
                    },
                    {
                        'type': 'mania',
                        'cooldown': 0x0,
                        'timeLimit': 0x2
                    },
                    {
                        'type': 'aggroDifferent',
                        'cooldown': 0x0,
                        'detectionType': 'closest'
                    },
                    {
                        'type': 'chaseAggro',
                        'cooldown': 0x50,
                        'turnSpeed': 0x1
                    },
                    {
                        'type': 'chaseAggro',
                        'cooldown': 0x50,
                        'turnSpeed': 0x1
                    },
                    {
                        'type': 'mania',
                        'cooldown': 0x0,
                        'timeLimit': 0x2
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x8,
                        'cooldown': 0x78,
                        'rotateSpeed': -0.2,
                        'spawnDistance': 0.9,
                        'spawnType': 'BossUrchinMissile',
                        'raritiesBelow': 0x0
                    },
                    {
                        'type': 'aggroDifferent',
                        'cooldown': 0x0,
                        'detectionType': 'random'
                    },
                    {
                        'type': 'smallDash',
                        'cooldown': 0xb4,
                        'dashLength': 0x14,
                        'sizeChangeLength': 0x14,
                        'targetRadius': 0.25,
                        'dashSpeed': 0xb
                    },
                    {
                        'type': 'mania',
                        'cooldown': 0x0,
                        'timeLimit': 0x2
                    },
                    {
                        'type': 'aggroDifferent',
                        'cooldown': 0x0,
                        'detectionType': 'closest'
                    },
                    {
                        'type': 'chaseAggro',
                        'cooldown': 0x50,
                        'turnSpeed': 0x1
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x10,
                        'cooldown': 0x1e,
                        'rotateSpeed': 0.2,
                        'spawnType': 'Jellyfish',
                        'raritiesBelow': 0x1
                    },
                    {
                        'type': 'aggroDifferent',
                        'cooldown': 0x0,
                        'detectionType': 'closest'
                    },
                    {
                        'type': 'chaseAggro',
                        'cooldown': 0x32,
                        'turnSpeed': 0x1
                    },
                    {
                        'type': 'fly',
                        'cooldown': 0x50,
                        'speedMultiplier': 0x5
                    },
                    {
                        'type': 'mania',
                        'cooldown': 0x0,
                        'timeLimit': 0x2
                    },
                    {
                        'type': 'complexShoot',
                        'shoot': [
                            {
                                'spawnCooldown': 0x3,
                                'spawnAmount': 0x2,
                                'spawnSpacing': Math['PI'] * 0x2,
                                'rotateSpeed': 0.2,
                                'spawnType': 'BossUrchinMissile',
                                'raritiesBelow': 0x1
                            },
                            {
                                'spawnCooldown': 0x4,
                                'spawnAmount': 0x2,
                                'spawnSpacing': Math['PI'] * 0x2,
                                'rotateSpeed': -0.2,
                                'spawnType': 'BossUrchinMissile',
                                'raritiesBelow': 0x2
                            },
                            {
                                'aim': !![],
                                'spawnCooldown': 0x50,
                                'predictionChance': 0x0,
                                'spawnType': 'BigBossUrchinMissile',
                                'raritiesBelow': 0x0
                            }
                        ],
                        'cooldown': 0x78
                    },
                    {
                        'type': 'complexShoot',
                        'shoot': [
                            {
                                'spawnCooldown': 0x3,
                                'spawnAmount': 0x2,
                                'spawnSpacing': Math['PI'] * 0x2,
                                'rotateSpeed': 0.2,
                                'spawnType': 'BossUrchinMissile',
                                'raritiesBelow': 0x1
                            },
                            {
                                'spawnCooldown': 0x4,
                                'spawnAmount': 0x2,
                                'spawnSpacing': Math['PI'] * 0x2,
                                'rotateSpeed': -0.2,
                                'spawnType': 'BossUrchinMissile',
                                'raritiesBelow': 0x2
                            },
                            {
                                'aim': !![],
                                'spawnCooldown': 0x50,
                                'predictionChance': 0x0,
                                'spawnType': 'BigBossUrchinMissile',
                                'raritiesBelow': 0x0
                            }
                        ],
                        'cooldown': 0x78
                    },
                    {
                        'type': 'mania',
                        'cooldown': 0x0,
                        'timeLimit': 0x2
                    },
                    {
                        'type': 'growAndShrink',
                        'switchTimer': 0x28,
                        'cooldown': 0x50,
                        'magnitude': 0x9
                    },
                    {
                        'type': 'aggroDifferent',
                        'cooldown': 0x0,
                        'detectionType': 'closest'
                    },
                    {
                        'type': 'chaseAggro',
                        'cooldown': 0x50,
                        'turnSpeed': 0x1,
                        'randomChoices': [0x7]
                    }
                ],
                'bossOverride': {
                    'changeStateOnHpThresholds': { 0.2: [0x3] },
                    'bossForceStartIndex': 0x0,
                    'childrenRotateSpeed': 0.046,
                    'childrenDistance': 0x8e,
                    'collideOtherEnemies': ![],
                    'childrenWanderAngle': ![],
                    'childrenWanderDistance': ![],
                    'spawnRarityOffset': 0x3,
                    'spawnAmount': 0xa,
                    'speed': 1.75,
                    'healing': 0.0058
                },
                'xp': 2.5
            },
            'Dandelion': {
                'health': 0x1e,
                'damage': 0x5,
                'radius': 0x28,
                'speed': 0x0,
                'mass': 0x4,
                'personality': 'stationary',
                'drops': {
                    'Dandelion': [
                        0.75,
                        0x1
                    ],
                    'Pollen': [
                        0.1,
                        0x1
                    ]
                },
                'boss': [
                    {
                        'type': 'stationary',
                        'cooldown': 0x96,
                        'randomChoices': [
                            0x1,
                            0x2,
                            0x3,
                            0x4,
                            0x5
                        ]
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x1,
                        'cooldown': 0x78,
                        'rotateSpeed': 0.2,
                        'spawnDistance': 0.9,
                        'spawnType': 'BossDandelionMissile',
                        'raritiesBelow': 0x0,
                        'randomChoices': [0x0]
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x1,
                        'cooldown': 0x78,
                        'rotateSpeed': -0.2,
                        'spawnDistance': 0.9,
                        'spawnType': 'BossDandelionMissile',
                        'raritiesBelow': 0x0,
                        'randomChoices': [0x0]
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x3,
                        'cooldown': 0x3c,
                        'spawnAmount': 0x4,
                        'spawnDistance': 0.9,
                        'spawnSpacing': Math['PI'] * 0x2,
                        'rotateSpeed': Math['PI'] / 0x1e,
                        'spawnType': 'BossDandelionMissile',
                        'raritiesBelow': 0x0,
                        'randomChoices': [0x0]
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x6,
                        'cooldown': 0x3c,
                        'spawnAmount': 0xc,
                        'spawnDistance': 0.9,
                        'spawnSpacing': Math['PI'] * 0x2,
                        'rotateSpeed': Math['PI'] / 0x1e0,
                        'spawnType': 'BossDandelionMissile',
                        'raritiesBelow': 0x0,
                        'randomChoices': [0x0]
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x2,
                        'cooldown': 0x3c,
                        'spawnAmount': 0x1,
                        'spawnDistance': 0.9,
                        'spawnSpacing': Math['PI'] * 0x2,
                        'rotateSpeed': 1.94165,
                        'spawnType': 'BossDandelionMissile',
                        'raritiesBelow': 0x0,
                        'randomChoices': [0x0]
                    }
                ],
                'bossOverride': { 'bossForceStartIndex': 0x0 }
            },
            'Ladybug': {
                'health': 0x19,
                'damage': 0xa,
                'radius': 0x23,
                'speed': 0x5 / 0x3,
                'mass': 0x1,
                'personality': 'passive',
                'drops': {
                    'Rose': [
                        0.25,
                        0x0
                    ],
                    'Light': [
                        0.25,
                        0x0
                    ]
                },
                'override': { 0x2: { 'personality': 'neutral' } },
                'boss': [
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x1,
                        'cooldown': 0x1e,
                        'rotateSpeed': Math['PI'] / 0xf,
                        'spawnDistance': 0.9,
                        'spawnType': 'BossRose',
                        'raritiesBelow': 0x2
                    },
                    {
                        'type': 'aggroDifferent',
                        'cooldown': 0x0,
                        'detectionType': 'closest'
                    },
                    {
                        'type': 'chaseAggro',
                        'cooldown': 0x78,
                        'turnSpeed': 0x1
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x2,
                        'cooldown': 0x3c,
                        'spawnAmount': 0x3,
                        'spawnSpacing': Math['PI'] * 0x2,
                        'rotateSpeed': Math['PI'] / 0x1e,
                        'spawnType': 'Missile',
                        'raritiesBelow': 0x1,
                        'spawnDistance': 0.7,
                        'randomChoices': [
                            0x2,
                            0x4,
                            0x5,
                            0x7
                        ]
                    },
                    {
                        'type': 'aggroDifferent',
                        'cooldown': 0x0,
                        'detectionType': 'closest'
                    },
                    {
                        'type': 'chaseAggro',
                        'cooldown': 0x78,
                        'turnSpeed': 0x1
                    },
                    {
                        'type': 'smallDash',
                        'cooldown': 0xf0,
                        'dashLength': 0x28,
                        'sizeChangeLength': 0x28,
                        'targetRadius': 0.3,
                        'dashSpeed': 0x7
                    },
                    {
                        'type': 'aggroDifferent',
                        'cooldown': 0x0,
                        'detectionType': 'closest'
                    },
                    {
                        'type': 'chaseAggro',
                        'cooldown': 0x78,
                        'turnSpeed': 0x1
                    },
                    {
                        'type': 'complexShoot',
                        'shoot': [{
                                'spawnCooldown': 0x3,
                                'spawnAmount': 0x2,
                                'spawnSpacing': Math['PI'] * 0x2,
                                'rotateSpeed': 0.05,
                                'spawnDistance': 0.7,
                                'spawnType': 'Ladybug',
                                'raritiesBelow': 0x3
                            }],
                        'cooldown': 0x3c
                    },
                    {
                        'type': 'aggroDifferent',
                        'cooldown': 0x0,
                        'detectionType': 'closest'
                    },
                    {
                        'type': 'chaseAggro',
                        'cooldown': 0x78,
                        'turnSpeed': 0x1
                    },
                    {
                        'type': 'growAndShrink',
                        'switchTimer': 0x28,
                        'cooldown': 0x50,
                        'magnitude': 0xf
                    },
                    {
                        'type': 'aggroDifferent',
                        'cooldown': 0x0,
                        'detectionType': 'closest'
                    },
                    {
                        'type': 'chaseAggro',
                        'cooldown': 0x78,
                        'turnSpeed': 0x1
                    }
                ],
                'bossOverride': {
                    'changeStateOnHpThresholds': { 0.2: [0x0] },
                    'bossForceStartIndex': 0x0
                }
            },
            'Dark\x20Ladybug': {
                'health': 0x23,
                'damage': 0xa,
                'radius': 0x23,
                'speed': 0x5 / 0x3,
                'mass': 0x1,
                'personality': 'neutral',
                'drops': {
                    'Yin\x20Yang': [
                        0.25,
                        0x0
                    ],
                    'Dahlia': [
                        0.25,
                        0x0
                    ],
                    'Amulet\x20of\x20Grace': [
                        0.25,
                        0xc,
                        0x10
                    ]
                },
                'override': {},
                'boss': [
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x2,
                        'cooldown': 0x5,
                        'rotateSpeed': Math['PI'] / 0xf,
                        'spawnDistance': 0x0,
                        'spawnType': 'BossRose2',
                        'raritiesBelow': 0x2
                    },
                    {
                        'type': 'aggroDifferent',
                        'cooldown': 0x0,
                        'detectionType': 'closest'
                    },
                    {
                        'type': 'chaseAggro',
                        'cooldown': 0x78,
                        'turnSpeed': 0x1
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x2,
                        'cooldown': 0x5,
                        'rotateSpeed': Math['PI'] / 0xf,
                        'spawnDistance': 0x0,
                        'spawnType': 'BossRose2',
                        'raritiesBelow': 0x2
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x2,
                        'cooldown': 0x3c,
                        'spawnAmount': 0x3,
                        'spawnSpacing': Math['PI'] * 0x2,
                        'rotateSpeed': Math['PI'] / 0x1e,
                        'spawnType': 'Missile',
                        'raritiesBelow': 0x1,
                        'spawnDistance': 0.7,
                        'randomChoices': [
                            0x2,
                            0x4,
                            0x5,
                            0x7
                        ]
                    },
                    {
                        'type': 'aggroDifferent',
                        'cooldown': 0x0,
                        'detectionType': 'closest'
                    },
                    {
                        'type': 'chaseAggro',
                        'cooldown': 0x78,
                        'turnSpeed': 0x1
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x2,
                        'cooldown': 0x5,
                        'rotateSpeed': Math['PI'] / 0xf,
                        'spawnDistance': 0x0,
                        'spawnType': 'BossRose2',
                        'raritiesBelow': 0x2
                    },
                    {
                        'type': 'smallDash',
                        'cooldown': 0xf0,
                        'dashLength': 0x28,
                        'sizeChangeLength': 0x28,
                        'targetRadius': 0.3,
                        'dashSpeed': 0x7
                    },
                    {
                        'type': 'aggroDifferent',
                        'cooldown': 0x0,
                        'detectionType': 'closest'
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x2,
                        'cooldown': 0x5,
                        'rotateSpeed': Math['PI'] / 0xf,
                        'spawnDistance': 0x0,
                        'spawnType': 'BossRose2',
                        'raritiesBelow': 0x2
                    },
                    {
                        'type': 'chaseAggro',
                        'cooldown': 0x78,
                        'turnSpeed': 0x1
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x2,
                        'cooldown': 0x5,
                        'rotateSpeed': Math['PI'] / 0xf,
                        'spawnDistance': 0x0,
                        'spawnType': 'BossRose2',
                        'raritiesBelow': 0x2
                    },
                    {
                        'type': 'complexShoot',
                        'shoot': [{
                                'spawnCooldown': 0x3,
                                'spawnAmount': 0x2,
                                'spawnSpacing': Math['PI'] * 0x2,
                                'rotateSpeed': 0.05,
                                'spawnDistance': 0.7,
                                'spawnType': 'Dark\x20Ladybug',
                                'raritiesBelow': 0x3
                            }],
                        'cooldown': 0x3c
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x2,
                        'cooldown': 0x5,
                        'rotateSpeed': Math['PI'] / 0xf,
                        'spawnDistance': 0x0,
                        'spawnType': 'BossRose2',
                        'raritiesBelow': 0x2
                    },
                    {
                        'type': 'aggroDifferent',
                        'cooldown': 0x0,
                        'detectionType': 'closest'
                    },
                    {
                        'type': 'chaseAggro',
                        'cooldown': 0x78,
                        'turnSpeed': 0x1
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x2,
                        'cooldown': 0x5,
                        'rotateSpeed': Math['PI'] / 0xf,
                        'spawnDistance': 0x0,
                        'spawnType': 'BossRose2',
                        'raritiesBelow': 0x2
                    },
                    {
                        'type': 'growAndShrink',
                        'switchTimer': 0x28,
                        'cooldown': 0x50,
                        'magnitude': 0xf
                    },
                    {
                        'type': 'aggroDifferent',
                        'cooldown': 0x0,
                        'detectionType': 'closest'
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x2,
                        'cooldown': 0x5,
                        'rotateSpeed': Math['PI'] / 0xf,
                        'spawnDistance': 0x0,
                        'spawnType': 'BossRose2',
                        'raritiesBelow': 0x2
                    },
                    {
                        'type': 'chaseAggro',
                        'cooldown': 0x78,
                        'turnSpeed': 0x1
                    }
                ],
                'bossOverride': { 'bossForceStartIndex': 0x0 }
            },
            'Baby\x20Ant': {
                'health': 0xa,
                'damage': 0xa,
                'radius': 0x14,
                'speed': 1.7,
                'mass': 0x1,
                'personality': 'passive',
                'drops': {
                    'Rice': [
                        0.25,
                        0x2
                    ],
                    'Light': [
                        0.15,
                        0x0
                    ],
                    'Leaf': [
                        0.15,
                        0x0
                    ]
                },
                'boss': [{
                        'type': 'passive',
                        'cooldown': 0x3b9aca00
                    }],
                'bossOverride': { 'bossForceStartIndex': 0x0 }
            },
            'Worker\x20Ant': {
                'health': 0xf,
                'damage': 0xa,
                'radius': 0x14,
                'speed': 1.7,
                'mass': 0x1,
                'personality': 'neutral',
                'drops': {
                    'Clover': [
                        0.25,
                        0x9
                    ],
                    'Leaf': [
                        0.25,
                        0x0
                    ],
                    'Light': [
                        0.1,
                        0x0
                    ]
                },
                'boss': [
                    {
                        'type': 'chaseAggro',
                        'cooldown': 0x78,
                        'turnSpeed': 0x1
                    },
                    {
                        'type': 'spawnAround',
                        'spawnCooldown': 0x8,
                        'cooldown': 0x2d,
                        'spawnType': 'Worker\x20Ant',
                        'raritiesBelow': 0x2
                    },
                    {
                        'type': 'chaseAggro',
                        'cooldown': 0x78,
                        'turnSpeed': 0x1
                    },
                    {
                        'type': 'smallDash',
                        'cooldown': 0xb4,
                        'dashLength': 0x14,
                        'sizeChangeLength': 0x14,
                        'targetRadius': 0.25,
                        'dashSpeed': 0xb
                    },
                    {
                        'type': 'chaseAggro',
                        'cooldown': 0x78,
                        'turnSpeed': 0x1
                    },
                    {
                        'type': 'growAndShrink',
                        'switchTimer': 0xf,
                        'cooldown': 0x3c,
                        'magnitude': 3.5
                    }
                ],
                'bossOverride': { 'bossForceStartIndex': 0x0 }
            },
            'Soldier\x20Ant': {
                'health': 0x19,
                'damage': 0xa,
                'radius': 0x14,
                'speed': 1.7,
                'mass': 0x1,
                'detectionDistance': 0x226,
                'personality': 'aggressive',
                'drops': {
                    'Wing': [
                        0.25,
                        0x0
                    ],
                    'Corn': [
                        0.05,
                        0x0
                    ],
                    'Husk': [
                        0.05,
                        0x7
                    ]
                },
                'boss': [
                    {
                        'type': 'chaseAggro',
                        'cooldown': 0x78,
                        'turnSpeed': 0x1
                    },
                    {
                        'type': 'fly',
                        'cooldown': 0x3c,
                        'speedMultiplier': 0x5
                    },
                    {
                        'type': 'chaseAggro',
                        'cooldown': 0x78,
                        'turnSpeed': 0x1
                    },
                    {
                        'type': 'fly',
                        'cooldown': 0x3c,
                        'speedMultiplier': 0x5
                    },
                    {
                        'type': 'chaseAggro',
                        'cooldown': 0x78,
                        'turnSpeed': 0x1
                    },
                    {
                        'type': 'fly',
                        'cooldown': 0x3c,
                        'speedMultiplier': 0x5
                    },
                    {
                        'type': 'spawnAround',
                        'spawnCooldown': 0xf,
                        'cooldown': 0x2d,
                        'spawnType': 'Soldier\x20Ant',
                        'raritiesBelow': 0x1
                    }
                ],
                'bossOverride': { 'bossForceStartIndex': 0x0 }
            },
            'Queen\x20Ant': {
                'health': 0x64,
                'damage': 0xa,
                'radius': 0x44 * 0x3 / 0x4,
                'speed': 1.7,
                'mass': 0x4,
                'detectionDistance': 0x2ee,
                'personality': 'aggressive',
                'drops': {
                    'Clover': [
                        0.25,
                        0x9
                    ],
                    'Wing': [
                        0.5,
                        0x0
                    ],
                    'Ant\x20Egg': [
                        0.5,
                        0x0
                    ]
                },
                'boss': [
                    {
                        'type': 'chaseAggro',
                        'cooldown': 0x78,
                        'turnSpeed': 0x1
                    },
                    {
                        'type': 'fly',
                        'cooldown': 0x3c,
                        'speedMultiplier': 0x5
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x9,
                        'cooldown': 0x2d,
                        'rotateSpeed': 0.139,
                        'spawnDistance': 0x1,
                        'spawnType': 'Ant\x20Egg',
                        'raritiesBelow': 0x1
                    },
                    {
                        'type': 'chaseAggro',
                        'cooldown': 0x78,
                        'turnSpeed': 0x1
                    },
                    {
                        'type': 'fly',
                        'cooldown': 0x3c,
                        'speedMultiplier': 0x5
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x19,
                        'cooldown': 0x2d,
                        'rotateSpeed': 0.139,
                        'spawnDistance': 0x1,
                        'spawnType': 'Ant\x20Egg',
                        'raritiesBelow': 0x0
                    },
                    {
                        'type': 'chaseAggro',
                        'cooldown': 0x78,
                        'turnSpeed': 0x1
                    },
                    {
                        'type': 'fly',
                        'cooldown': 0x3c,
                        'speedMultiplier': 0x5
                    },
                    {
                        'type': 'spinShootMove',
                        'spawnCooldown': 0x2,
                        'moveSpeed': 0xb,
                        'cooldown': 0x3c,
                        'shootOffset': Math['PI'],
                        'rotateSpeed': Math['PI'] / 0x1e,
                        'spawnType': 'Ant\x20Egg',
                        'raritiesBelow': 0x2,
                        'spawnDistance': 0x1
                    },
                    {
                        'type': 'chaseAggro',
                        'cooldown': 0x78,
                        'turnSpeed': 0x1
                    },
                    {
                        'type': 'fly',
                        'cooldown': 0x3c,
                        'speedMultiplier': 0x5
                    },
                    {
                        'type': 'spawnAround',
                        'spawnCooldown': 0x19,
                        'cooldown': 0x2d,
                        'spawnType': 'Baby\x20Ant',
                        'raritiesBelow': 0x1
                    },
                    {
                        'type': 'chaseAggro',
                        'cooldown': 0x78,
                        'turnSpeed': 0x1
                    },
                    {
                        'type': 'fly',
                        'cooldown': 0x3c,
                        'speedMultiplier': 0x5
                    }
                ],
                'bossOverride': { 'bossForceStartIndex': 0x0 }
            },
            'Gnat': {
                'health': 0x4,
                'damage': 0x5,
                'radius': 0xf,
                'speed': 4.6,
                'mass': 0.7,
                'detectionDistance': 0x352,
                'personality': 'aggressive',
                'drops': {
                    'Wing': [
                        0.03,
                        0x0
                    ],
                    'Powder': [
                        0.03,
                        0x2
                    ],
                    'Compost': [
                        0.01,
                        0x0
                    ]
                },
                'boss': [
                    {
                        'type': 'gnatAggro',
                        'cooldown': 0x78,
                        'turnSpeed': 0x1
                    },
                    {
                        'type': 'fly',
                        'cooldown': 0x3c,
                        'speedMultiplier': 0xf
                    },
                    {
                        'type': 'gnatAggro',
                        'cooldown': 0x78,
                        'turnSpeed': 0x1
                    },
                    {
                        'type': 'fly',
                        'cooldown': 0x3c,
                        'speedMultiplier': 0xf
                    },
                    {
                        'type': 'gnatAggro',
                        'cooldown': 0x78,
                        'turnSpeed': 0x1
                    },
                    {
                        'type': 'fly',
                        'cooldown': 0x3c,
                        'speedMultiplier': 0xf
                    },
                    {
                        'type': 'spawnAround',
                        'spawnCooldown': 0x8,
                        'cooldown': 0x2d,
                        'spawnType': 'Gnat',
                        'raritiesBelow': 0x1
                    }
                ],
                'bossOverride': { 'bossForceStartIndex': 0x0 }
            },
            'Baby\x20Termite': {
                'health': 11.25 * 0.6,
                'damage': 0xa,
                'radius': 0x14,
                'speed': 1.7,
                'mass': 0x1,
                'personality': 'passive',
                'drops': {
                    'Rice': [
                        0.06,
                        0x2
                    ],
                    'Light': [
                        0.06,
                        0x0
                    ],
                    'Carrot': [
                        0.1,
                        0x0
                    ]
                },
                'boss': [{
                        'type': 'passive',
                        'cooldown': 0x3b9aca00
                    }],
                'bossOverride': { 'bossForceStartIndex': 0x0 }
            },
            'Worker\x20Termite': {
                'health': 16.875 * 0.6,
                'damage': 0xa,
                'radius': 0x14,
                'speed': 1.7,
                'mass': 0x1,
                'personality': 'neutral',
                'drops': {
                    'Leaf': [
                        0.12,
                        0x0
                    ],
                    'Light': [
                        0.06,
                        0x0
                    ],
                    'Plank': [
                        0.1,
                        0x0
                    ]
                },
                'boss': [
                    {
                        'type': 'chaseAggro',
                        'cooldown': 0x78,
                        'turnSpeed': 0x1
                    },
                    {
                        'type': 'spawnAround',
                        'spawnCooldown': 0x8,
                        'cooldown': 0x2d,
                        'spawnType': 'Worker\x20Termite',
                        'raritiesBelow': 0x2
                    },
                    {
                        'type': 'chaseAggro',
                        'cooldown': 0x78,
                        'turnSpeed': 0x1
                    },
                    {
                        'type': 'smallDash',
                        'cooldown': 0xb4,
                        'dashLength': 0x14,
                        'sizeChangeLength': 0x14,
                        'targetRadius': 0.25,
                        'dashSpeed': 0xb
                    },
                    {
                        'type': 'chaseAggro',
                        'cooldown': 0x78,
                        'turnSpeed': 0x1
                    },
                    {
                        'type': 'growAndShrink',
                        'switchTimer': 0xf,
                        'cooldown': 0x3c,
                        'magnitude': 3.5
                    }
                ],
                'bossOverride': { 'bossForceStartIndex': 0x0 }
            },
            'Soldier\x20Termite': {
                'health': 28.125 * 0.6,
                'damage': 0xa,
                'radius': 0x14,
                'speed': 1.7,
                'mass': 0x1,
                'detectionDistance': 0x226,
                'personality': 'aggressive',
                'drops': {
                    'Bone': [
                        0.08,
                        0x0
                    ],
                    'Wing': [
                        0.06,
                        0x0
                    ],
                    'Husk': [
                        0.035,
                        0x7
                    ]
                },
                'boss': [
                    {
                        'type': 'chaseAggro',
                        'cooldown': 0x78,
                        'turnSpeed': 0x1
                    },
                    {
                        'type': 'fly',
                        'cooldown': 0x3c,
                        'speedMultiplier': 0x5
                    },
                    {
                        'type': 'chaseAggro',
                        'cooldown': 0x78,
                        'turnSpeed': 0x1
                    },
                    {
                        'type': 'fly',
                        'cooldown': 0x3c,
                        'speedMultiplier': 0x5
                    },
                    {
                        'type': 'chaseAggro',
                        'cooldown': 0x78,
                        'turnSpeed': 0x1
                    },
                    {
                        'type': 'fly',
                        'cooldown': 0x3c,
                        'speedMultiplier': 0x5
                    },
                    {
                        'type': 'spawnAround',
                        'spawnCooldown': 0xf,
                        'cooldown': 0x2d,
                        'spawnType': 'Soldier\x20Termite',
                        'raritiesBelow': 0x1
                    }
                ],
                'bossOverride': { 'bossForceStartIndex': 0x0 }
            },
            'Queen\x20Termite': {
                'health': 0x4b * 0.6,
                'damage': 0xa,
                'radius': 0x22,
                'speed': 1.7,
                'mass': 0x4,
                'detectionDistance': 0x2ee,
                'personality': 'aggressive',
                'drops': {
                    'Wing': [
                        0.4,
                        0x0
                    ],
                    'Ant\x20Egg': [
                        0.4,
                        0x0
                    ],
                    'Trinket\x20of\x20the\x20Hivemind': [
                        0.4,
                        0xa
                    ]
                },
                'boss': [
                    {
                        'type': 'chaseAggro',
                        'cooldown': 0x78,
                        'turnSpeed': 0x1
                    },
                    {
                        'type': 'fly',
                        'cooldown': 0x3c,
                        'speedMultiplier': 0x5
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x9,
                        'cooldown': 0x2d,
                        'rotateSpeed': 0.139,
                        'spawnDistance': 0x1,
                        'spawnType': 'Termite\x20Egg',
                        'raritiesBelow': 0x1
                    },
                    {
                        'type': 'chaseAggro',
                        'cooldown': 0x78,
                        'turnSpeed': 0x1
                    },
                    {
                        'type': 'fly',
                        'cooldown': 0x3c,
                        'speedMultiplier': 0x5
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x19,
                        'cooldown': 0x2d,
                        'rotateSpeed': 0.139,
                        'spawnDistance': 0x1,
                        'spawnType': 'Termite\x20Egg',
                        'raritiesBelow': 0x0
                    },
                    {
                        'type': 'chaseAggro',
                        'cooldown': 0x78,
                        'turnSpeed': 0x1
                    },
                    {
                        'type': 'fly',
                        'cooldown': 0x3c,
                        'speedMultiplier': 0x5
                    },
                    {
                        'type': 'spinShootMove',
                        'spawnCooldown': 0x2,
                        'moveSpeed': 0xb,
                        'cooldown': 0x3c,
                        'shootOffset': Math['PI'],
                        'rotateSpeed': Math['PI'] / 0x1e,
                        'spawnType': 'Termite\x20Egg',
                        'raritiesBelow': 0x2,
                        'spawnDistance': 0x1
                    },
                    {
                        'type': 'chaseAggro',
                        'cooldown': 0x78,
                        'turnSpeed': 0x1
                    },
                    {
                        'type': 'fly',
                        'cooldown': 0x3c,
                        'speedMultiplier': 0x5
                    },
                    {
                        'type': 'spawnAround',
                        'spawnCooldown': 0x19,
                        'cooldown': 0x2d,
                        'spawnType': 'Baby\x20Termite',
                        'raritiesBelow': 0x1
                    },
                    {
                        'type': 'chaseAggro',
                        'cooldown': 0x78,
                        'turnSpeed': 0x1
                    },
                    {
                        'type': 'fly',
                        'cooldown': 0x3c,
                        'speedMultiplier': 0x5
                    }
                ],
                'bossOverride': { 'bossForceStartIndex': 0x0 }
            },
            'Carrion\x20Spire': {
                'health': 0x14,
                'damage': 0x5,
                'radius': 32.5,
                'speed': 4.7,
                'poison': [
                    0x14,
                    0xa
                ],
                'mass': 0x6,
                'detectionDistance': 0x352,
                'personality': 'aggressive',
                'drops': {
                    'Wing': [
                        0.5,
                        0x0
                    ],
                    'Dust': [
                        0.5,
                        0x0
                    ],
                    'Trinket\x20of\x20the\x20Wild': [
                        0.4,
                        0xa
                    ]
                },
                'boss': [
                    {
                        'type': 'gnatAggro',
                        'cooldown': 0x78,
                        'turnSpeed': 0x1
                    },
                    {
                        'type': 'fly',
                        'cooldown': 0x3c,
                        'speedMultiplier': 0xf
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x5,
                        'cooldown': 0x2d,
                        'rotateSpeed': 0.139,
                        'spawnDistance': 0x1,
                        'spawnType': 'Gnat',
                        'raritiesBelow': 0x1
                    },
                    {
                        'type': 'gnatAggro',
                        'cooldown': 0x78,
                        'turnSpeed': 0x1
                    },
                    {
                        'type': 'fly',
                        'cooldown': 0x3c,
                        'speedMultiplier': 0xf
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0xa,
                        'cooldown': 0x2d,
                        'rotateSpeed': 0.139,
                        'spawnDistance': 0x1,
                        'spawnType': 'Gnat',
                        'raritiesBelow': 0x0
                    },
                    {
                        'type': 'gnatAggro',
                        'cooldown': 0x78,
                        'turnSpeed': 0x1
                    },
                    {
                        'type': 'fly',
                        'cooldown': 0x3c,
                        'speedMultiplier': 0xf
                    },
                    {
                        'type': 'spinShootMove',
                        'spawnCooldown': 0x2,
                        'moveSpeed': 0xb,
                        'cooldown': 0x3c,
                        'shootOffset': Math['PI'],
                        'rotateSpeed': Math['PI'] / 0x1e,
                        'spawnType': 'Gnat',
                        'raritiesBelow': 0x1,
                        'spawnDistance': 0x1
                    },
                    {
                        'type': 'gnatAggro',
                        'cooldown': 0x78,
                        'turnSpeed': 0x1
                    },
                    {
                        'type': 'fly',
                        'cooldown': 0x3c,
                        'speedMultiplier': 0xf
                    },
                    {
                        'type': 'spawnAround',
                        'spawnCooldown': 0x5,
                        'cooldown': 0x2d,
                        'spawnType': 'Gnat',
                        'raritiesBelow': 0x1
                    },
                    {
                        'type': 'gnatAggro',
                        'cooldown': 0x78,
                        'turnSpeed': 0x1
                    },
                    {
                        'type': 'fly',
                        'cooldown': 0x3c,
                        'speedMultiplier': 0xf
                    }
                ],
                'bossOverride': { 'bossForceStartIndex': 0x0 }
            },
            'Termite\x20Mound': {
                'health': 0x96,
                'damage': 0xa,
                'radius': 32.5,
                'speed': 0x0,
                'mass': 0x989680,
                'personality': 'stationary',
                'detectionDistance': 0x190,
                'drops': {
                    'Soil': [
                        0.15,
                        0x0
                    ],
                    'Rubber': [
                        0.2,
                        0x0
                    ],
                    'Ant\x20Egg': [
                        0.5,
                        0x0
                    ]
                },
                'boss': [{
                        'type': 'termitemound',
                        'cooldown': 0xf4240
                    }],
                'bossOverride': { 'bossForceStartIndex': 0x0 },
                'collideOtherEnemies': ![]
            },
            'Gnat\x20Swarm': {
                'health': 0x32,
                'damage': 0xa,
                'radius': 27.5,
                'speed': 0x0,
                'mass': 0x2,
                'personality': 'stationary',
                'detectionDistance': 0x190,
                'drops': {
                    'Corn': [
                        0.25,
                        0x0
                    ],
                    'Leaf': [
                        0.25,
                        0x0
                    ],
                    'Powder': [
                        0.25,
                        0x2
                    ]
                },
                'boss': [{
                        'type': 'gnatswarm',
                        'cooldown': 0xf4240
                    }],
                'bossOverride': { 'bossForceStartIndex': 0x0 },
                'collideOtherEnemies': ![]
            },
            'Termite\x20Egg': {
                'health': 0x19,
                'damage': 0x2,
                'radius': 0x19,
                'speed': 0x0,
                'mass': 0x1,
                'xp': 0x0,
                'personality': 'projectile',
                'drops': {}
            },
            'Queen\x20Shiny\x20Ant': {
                'health': 0x96,
                'damage': 0xa,
                'radius': 0x44 * 0x3 / 0x4,
                'speed': 1.9,
                'mass': 0x50,
                'detectionDistance': 0x2ee,
                'personality': 'aggressive',
                'drops': {
                    'Shiny\x20Yucca': [
                        0.8,
                        0x0
                    ],
                    'Shiny\x20Wing': [
                        0.25,
                        0x6
                    ],
                    'Ant\x20Egg': [
                        0x1,
                        0x0
                    ]
                },
                'xp': 2.5
            },
            'Soldier\x20Shiny\x20Ant': {
                'health': 0x19,
                'damage': 0xa,
                'radius': 0x14,
                'speed': 1.7,
                'mass': 0x1,
                'detectionDistance': 0x226,
                'personality': 'aggressive',
                'drops': {
                    'Shiny\x20Wing': [
                        0.25,
                        0x6
                    ],
                    'Corn': [
                        0.05,
                        0x0
                    ],
                    'Husk': [
                        0.05,
                        0x7
                    ]
                },
                'boss': [
                    {
                        'type': 'moveCenter',
                        'cooldown': 0x3c,
                        'speedMult': 2.5
                    },
                    {
                        'type': 'generateSingleShock',
                        'cooldown': 0x0
                    },
                    {
                        'type': 'chaseAggro',
                        'cooldown': 0x3c,
                        'turnSpeed': 0.1,
                        'speedMult': 0x0
                    },
                    {
                        'type': 'deploySingleShock',
                        'cooldown': 0x0
                    },
                    {
                        'type': 'chaseAggro',
                        'cooldown': 0x78,
                        'turnSpeed': 0x1
                    },
                    {
                        'type': 'generateShock',
                        'cooldown': 0x0
                    },
                    {
                        'type': 'chaseAggro',
                        'cooldown': 0x14,
                        'turnSpeed': 0x1
                    },
                    {
                        'type': 'deployShock',
                        'cooldown': 0x0
                    },
                    {
                        'type': 'chaseAggro',
                        'cooldown': 0x5,
                        'turnSpeed': 0x1
                    },
                    {
                        'type': 'generateShock',
                        'cooldown': 0x0
                    },
                    {
                        'type': 'chaseAggro',
                        'cooldown': 0x14,
                        'turnSpeed': 0x1
                    },
                    {
                        'type': 'deployShock',
                        'cooldown': 0x0
                    },
                    {
                        'type': 'chaseAggro',
                        'cooldown': 0x5,
                        'turnSpeed': 0x1
                    },
                    {
                        'type': 'generateShock',
                        'cooldown': 0x0
                    },
                    {
                        'type': 'chaseAggro',
                        'cooldown': 0x14,
                        'turnSpeed': 0x1
                    },
                    {
                        'type': 'deployShock',
                        'cooldown': 0x0
                    },
                    {
                        'type': 'chaseAggro',
                        'cooldown': 0x3c,
                        'turnSpeed': 0x1
                    },
                    {
                        'type': 'fly',
                        'cooldown': 0x1e,
                        'speedMultiplier': 0x5
                    },
                    {
                        'type': 'chaseAggro',
                        'cooldown': 0x1e,
                        'turnSpeed': 0x1
                    },
                    {
                        'type': 'fly',
                        'cooldown': 0x1e,
                        'speedMultiplier': 0x5
                    },
                    {
                        'type': 'chaseAggro',
                        'cooldown': 0x1e,
                        'turnSpeed': 0x1
                    },
                    {
                        'type': 'fly',
                        'cooldown': 0x1e,
                        'speedMultiplier': 0x5
                    },
                    {
                        'type': 'spawnAround',
                        'spawnCooldown': 0xf,
                        'cooldown': 0x2d,
                        'spawnType': 'Queen\x20Shiny\x20Ant',
                        'raritiesBelow': 0x3
                    },
                    {
                        'type': 'chaseAggro',
                        'cooldown': 0xf0,
                        'turnSpeed': 0x1
                    },
                    {
                        'type': 'spawnAround',
                        'spawnCooldown': 0x1,
                        'cooldown': 0x1e,
                        'spawnType': 'Shiny\x20Ant\x20Egg',
                        'raritiesBelow': 0x2
                    },
                    {
                        'type': 'chaseAggro',
                        'cooldown': 0xf0,
                        'turnSpeed': 0x1
                    }
                ],
                'bossOverride': { 'bossForceStartIndex': 0x18 },
                'xp': 2.5
            },
            'Queen\x20Fire\x20Ant': {
                'health': 0x64,
                'damage': 0x28,
                'poison': [
                    0xc8,
                    0xa
                ],
                'radius': 0x46 * 0x3 / 0x4,
                'speed': 1.6,
                'mass': 0x4,
                'detectionDistance': 0x2ee,
                'personality': 'aggressive',
                'drops': {
                    'Ant\x20Egg': [
                        0x1,
                        0x0
                    ],
                    'Wing': [
                        0x1,
                        0x0
                    ],
                    'Fire\x20Missile': [
                        0x1,
                        0x0
                    ]
                },
                'boss': [
                    {
                        'type': 'chaseShootAggro',
                        'cooldown': 0x78,
                        'turnSpeed': 0x1,
                        'shootCooldown': 0x1e,
                        'spawnAmount': 0x1,
                        'spawnSpacing': 0x0,
                        'predictionChance': 0.5,
                        'spawnType': 'FireMissile'
                    },
                    {
                        'type': 'fly',
                        'cooldown': 0x3c,
                        'speedMultiplier': 0x5
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x9,
                        'cooldown': 0x2d,
                        'rotateSpeed': 0.139,
                        'spawnDistance': 0x1,
                        'spawnType': 'Fire\x20Ant\x20Egg',
                        'raritiesBelow': 0x1
                    },
                    {
                        'type': 'chaseShootAggro',
                        'cooldown': 0x78,
                        'turnSpeed': 0x1,
                        'shootCooldown': 0x1e,
                        'spawnAmount': 0x1,
                        'spawnSpacing': 0x0,
                        'predictionChance': 0.5,
                        'spawnType': 'FireMissile'
                    },
                    {
                        'type': 'fly',
                        'cooldown': 0x3c,
                        'speedMultiplier': 0x5
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x19,
                        'cooldown': 0x2d,
                        'rotateSpeed': 0.139,
                        'spawnDistance': 0x1,
                        'spawnType': 'Fire\x20Ant\x20Egg',
                        'raritiesBelow': 0x0
                    },
                    {
                        'type': 'chaseShootAggro',
                        'cooldown': 0x78,
                        'turnSpeed': 0x1,
                        'shootCooldown': 0x1e,
                        'spawnAmount': 0x1,
                        'spawnSpacing': 0x0,
                        'predictionChance': 0.5,
                        'spawnType': 'FireMissile'
                    },
                    {
                        'type': 'fly',
                        'cooldown': 0x3c,
                        'speedMultiplier': 0x5
                    },
                    {
                        'type': 'spinShootMove',
                        'spawnCooldown': 0x2,
                        'moveSpeed': 0xb,
                        'cooldown': 0x3c,
                        'shootOffset': Math['PI'],
                        'rotateSpeed': Math['PI'] / 0x1e,
                        'spawnType': 'Fire\x20Ant\x20Egg',
                        'raritiesBelow': 0x2,
                        'spawnDistance': 0x1
                    },
                    {
                        'type': 'chaseShootAggro',
                        'cooldown': 0x78,
                        'turnSpeed': 0x1,
                        'shootCooldown': 0x1e,
                        'spawnAmount': 0x1,
                        'spawnSpacing': 0x0,
                        'predictionChance': 0.5,
                        'spawnType': 'FireMissile'
                    },
                    {
                        'type': 'fly',
                        'cooldown': 0x3c,
                        'speedMultiplier': 0x5
                    },
                    {
                        'type': 'spawnAround',
                        'spawnCooldown': 0x19,
                        'cooldown': 0x2d,
                        'spawnType': 'Soldier\x20Fire\x20Ant',
                        'raritiesBelow': 0x1
                    },
                    {
                        'type': 'chaseShootAggro',
                        'cooldown': 0x78,
                        'turnSpeed': 0x1,
                        'shootCooldown': 0x1e,
                        'spawnAmount': 0x1,
                        'spawnSpacing': 0x0,
                        'predictionChance': 0.5,
                        'spawnType': 'FireMissile'
                    },
                    {
                        'type': 'fly',
                        'cooldown': 0x3c,
                        'speedMultiplier': 0x5
                    }
                ],
                'bossOverride': { 'bossForceStartIndex': 0x0 }
            },
            'Fire\x20Ant\x20Burrow': {
                'health': 0x493e0,
                'damage': 0xf,
                'radius': 0xf,
                'speed': 0x0,
                'mass': 0x989680,
                'personality': 'stationary',
                'detectionDistance': 0x190,
                'collideOtherEnemies': ![],
                'drops': {
                    'Magnet': [
                        0x1,
                        0x0
                    ],
                    'Compass': [
                        0.02,
                        0x6
                    ],
                    'Ant\x20Egg': [
                        0.5,
                        0x0
                    ]
                },
                'override': {
                    0x1: { 'detectionDistance': 0x1a4 },
                    0x2: { 'detectionDistance': 0x1b8 },
                    0x3: { 'detectionDistance': 0x1cc },
                    0x4: { 'detectionDistance': 0x1e0 },
                    0x5: { 'detectionDistance': 0x1f4 },
                    0x6: { 'detectionDistance': 0x208 },
                    0x7: { 'detectionDistance': 0x21c },
                    0x8: { 'detectionDistance': 0x230 },
                    0x9: { 'detectionDistance': 0x244 },
                    0xa: { 'detectionDistance': 0x24e },
                    0xb: { 'detectionDistance': 0x258 },
                    0xc: { 'detectionDistance': 0x262 },
                    0xd: { 'detectionDistance': 0x26c },
                    0xe: { 'detectionDistance': 0x276 },
                    0xf: { 'detectionDistance': 0x280 },
                    0x10: { 'detectionDistance': 0x320 },
                    0x11: { 'detectionDistance': 0x384 },
                    0x12: { 'detectionDistance': 0x3e8 },
                    0x13: { 'detectionDistance': 0x41a }
                },
                'boss': [{
                        'type': 'fireBurrow',
                        'cooldown': 0xf4240
                    }],
                'bossOverride': { 'bossForceStartIndex': 0x0 }
            },
            'Soldier\x20Fire\x20Ant': {
                'health': 0xc,
                'damage': 0xa,
                'radius': 0x14,
                'poison': [
                    0x15,
                    0x7
                ],
                'speed': 1.6,
                'mass': 0x1,
                'detectionDistance': 0x2ee,
                'personality': 'aggressive',
                'drops': {
                    'Yucca': [
                        0.25,
                        0x0
                    ],
                    'Bone': [
                        0.05,
                        0x0
                    ],
                    'Wing': [
                        0.1,
                        0x0
                    ]
                },
                'boss': [
                    {
                        'type': 'chaseAggro',
                        'cooldown': 0x78,
                        'turnSpeed': 0x1
                    },
                    {
                        'type': 'fly',
                        'cooldown': 0x3c,
                        'speedMultiplier': 0x5
                    },
                    {
                        'type': 'growAndShrink',
                        'switchTimer': 0x28,
                        'cooldown': 0x50,
                        'magnitude': 0x9
                    },
                    {
                        'type': 'chaseAggro',
                        'cooldown': 0x78,
                        'turnSpeed': 0x1
                    },
                    {
                        'type': 'fly',
                        'cooldown': 0x3c,
                        'speedMultiplier': 0x5
                    },
                    {
                        'type': 'spawnAround',
                        'spawnCooldown': 0xa,
                        'cooldown': 0x2d,
                        'spawnType': 'Soldier\x20Fire\x20Ant',
                        'raritiesBelow': 0x1
                    },
                    {
                        'type': 'chaseAggro',
                        'cooldown': 0x78,
                        'turnSpeed': 0x1
                    },
                    {
                        'type': 'fly',
                        'cooldown': 0x3c,
                        'speedMultiplier': 0x5
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0xa,
                        'cooldown': 0x3c,
                        'rotateSpeed': Math['PI'] / 0x1e,
                        'spawnType': 'FireMissile',
                        'spawnDistance': 0x1,
                        'raritiesBelow': 0x1
                    }
                ],
                'bossOverride': { 'bossForceStartIndex': 0x0 }
            },
            'Baby\x20Fire\x20Ant': {
                'health': 0x6,
                'damage': 0xa,
                'radius': 0x14,
                'poison': [
                    0x48,
                    0x18
                ],
                'speed': 1.6,
                'mass': 0x1,
                'personality': 'passive',
                'drops': {
                    'Blood\x20Leaf': [
                        0.25,
                        0x2
                    ],
                    'Blood\x20Light': [
                        0.15,
                        0x0
                    ],
                    'Blood\x20Rose': [
                        0.25,
                        0x0
                    ]
                },
                'boss': [{
                        'type': 'passive',
                        'cooldown': 0x3b9aca00
                    }],
                'bossOverride': { 'bossForceStartIndex': 0x0 }
            },
            'Worker\x20Fire\x20Ant': {
                'health': 0x9,
                'damage': 0xa,
                'radius': 0x14,
                'poison': [
                    0x15,
                    0x7
                ],
                'speed': 1.6,
                'mass': 0x1,
                'personality': 'neutral',
                'drops': {
                    'Yucca': [
                        0.25,
                        0x0
                    ],
                    'Blood\x20Corn': [
                        0.15,
                        0x0
                    ],
                    'Blood\x20Stinger': [
                        0.25,
                        0x0
                    ]
                },
                'boss': [
                    {
                        'type': 'shootAggro',
                        'cooldown': 0x96,
                        'turnSpeed': 0x1,
                        'shootCooldown': 0xa,
                        'spawnAmount': 0x5,
                        'spawnSpacing': 0x5,
                        'predictionChance': 0x1,
                        'spawnType': 'FireMissile',
                        'raritiesBelow': 0x3
                    },
                    {
                        'type': 'fly',
                        'cooldown': 0x2d,
                        'speedMultiplier': 0x5
                    },
                    {
                        'type': 'shootAggro',
                        'cooldown': 0x96,
                        'turnSpeed': 0x1,
                        'shootCooldown': 0xa,
                        'spawnAmount': 0x5,
                        'spawnSpacing': 0x5,
                        'predictionChance': 0x1,
                        'spawnType': 'FireMissile',
                        'raritiesBelow': 0x3
                    },
                    {
                        'type': 'fly',
                        'cooldown': 0x2d,
                        'speedMultiplier': 0x5
                    },
                    {
                        'type': 'spawnAround',
                        'spawnCooldown': 0x1e,
                        'cooldown': 0x78,
                        'spawnType': 'Fire\x20Ant\x20Burrow',
                        'raritiesBelow': 0x2
                    },
                    {
                        'type': 'moveCenter',
                        'cooldown': 0x5a,
                        'speedMult': 0x2
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x5,
                        'cooldown': 0x78,
                        'rotateSpeed': Math['PI'] / 0xf,
                        'spawnType': 'FireMissile',
                        'spawnDistance': 0x2,
                        'raritiesBelow': 0x2
                    },
                    {
                        'type': 'chaseAggro',
                        'cooldown': 0xf0,
                        'turnSpeed': 0x1
                    }
                ],
                'bossOverride': { 'bossForceStartIndex': 0x5 }
            },
            'Ant\x20Egg': {
                'health': 0x19,
                'damage': 0x2,
                'radius': 0x19,
                'speed': 0x0,
                'mass': 0x1,
                'xp': 0x0,
                'personality': 'projectile',
                'drops': {}
            },
            'Fire\x20Ant\x20Egg': {
                'health': 0x19,
                'damage': 0x2,
                'radius': 0x19,
                'speed': 0x0,
                'mass': 0x1,
                'xp': 0x0,
                'personality': 'projectile',
                'drops': {}
            },
            'Shiny\x20Ant\x20Egg': {
                'health': 0x19,
                'damage': 0x2,
                'radius': 0x19,
                'speed': 0x0,
                'mass': 0x1,
                'xp': 0x0,
                'personality': 'projectile',
                'drops': {}
            },
            'Sea\x20Floor\x20Burrow': {
                'health': 0x6,
                'damage': 0xa,
                'radius': 0x1e,
                'speed': 0x0,
                'mass': 0x989680,
                'personality': 'stationary',
                'detectionDistance': 0x190,
                'drops': {
                    'Cutter': [
                        0.5,
                        0x7
                    ],
                    'Heavy': [
                        0.5,
                        0x0
                    ],
                    'Jellyfish\x20Egg': [
                        0.03,
                        0xb,
                        0xe
                    ]
                },
                'boss': [{
                        'type': 'stationary',
                        'cooldown': 0xf4240
                    }],
                'bossOverride': { 'bossForceStartIndex': 0x0 },
                'collideOtherEnemies': ![]
            },
            'Ant\x20Burrow': {
                'health': 0x64,
                'damage': 0xa,
                'radius': 0x1e,
                'speed': 0x0,
                'mass': 0x989680,
                'personality': 'stationary',
                'detectionDistance': 0x190,
                'drops': {
                    'Soil': [
                        0.25,
                        0x0
                    ],
                    'Heavy': [
                        0.75,
                        0x0
                    ],
                    'Ant\x20Egg': [
                        0x1,
                        0x0
                    ]
                },
                'boss': [{
                        'type': 'burrow',
                        'cooldown': 0xf4240
                    }],
                'bossOverride': { 'bossForceStartIndex': 0x0 },
                'collideOtherEnemies': ![]
            },
            'Shiny\x20Ant\x20Burrow': {
                'health': 0x96,
                'damage': 0xa,
                'radius': 0x1e,
                'speed': 0x0,
                'mass': 0x989680,
                'personality': 'stationary',
                'detectionDistance': 0x190,
                'drops': {
                    'Magnet': [
                        0x1,
                        0x0
                    ],
                    'Ant\x20Egg': [
                        0x1,
                        0x0
                    ],
                    'Bloom': [
                        0.15,
                        0x4
                    ]
                },
                'boss': [{
                        'type': 'shinyBurrow',
                        'cooldown': 0xf4240
                    }],
                'bossOverride': { 'bossForceStartIndex': 0x0 },
                'collideOtherEnemies': ![],
                'xp': 2.5
            },
            'Locust': {
                'health': 0xc,
                'damage': 0x19,
                'radius': 0x20,
                'speed': 1.25,
                'mass': 0x7,
                'turnSpeed': 0.45,
                'detectionDistance': 0x1f4,
                'personality': 'stationary',
                'drops': {
                    'Egg': [
                        0.1,
                        0x0
                    ],
                    'Sand': [
                        0.01,
                        0x0
                    ],
                    'Ruby': [
                        0.15,
                        0xb,
                        0xf
                    ]
                },
                'boss': [
                    {
                        'type': 'aggroDifferent',
                        'cooldown': 0x0,
                        'detectionType': 'random'
                    },
                    {
                        'type': 'chaseAggro',
                        'cooldown': 0x5a,
                        'turnSpeed': 0.5
                    },
                    {
                        'type': 'shootAggro',
                        'cooldown': 0xb4,
                        'shootCooldown': 0x32,
                        'spawnAmount': 0x1,
                        'spawnSpacing': 0x0,
                        'predictionChance': 0x0,
                        'spawnType': 'LocustMissile'
                    },
                    {
                        'type': 'aggroDifferent',
                        'cooldown': 0x0,
                        'detectionType': 'random'
                    },
                    {
                        'type': 'spawnAround',
                        'spawnCooldown': 0x1e,
                        'cooldown': 0x5a * 2.3,
                        'spawnType': 'Locust',
                        'raritiesBelow': 0x3
                    },
                    {
                        'type': 'chaseAggro',
                        'cooldown': 0x4b,
                        'turnSpeed': 0.5
                    },
                    {
                        'type': 'spawnAround',
                        'spawnCooldown': 0x48,
                        'cooldown': 0x5a * 2.3,
                        'spawnType': 'Locust',
                        'raritiesBelow': 0x2
                    }
                ],
                'bossOverride': { 'bossForceStartIndex': 0x0 }
            },
            'Desert\x20Centipede': {
                'health': 0x14,
                'damage': 0xa,
                'radius': 0x23,
                'speed': 0x4,
                'mass': 0x1,
                'personality': 'passive',
                'drops': {
                    'Powder': [
                        0.05,
                        0x2
                    ],
                    'Salt': [
                        0.15,
                        0x1
                    ],
                    'Faster': [
                        0.25,
                        0x0
                    ]
                },
                'boss': [
                    {
                        'type': 'spawnAround',
                        'spawnCooldown': 0x1e,
                        'cooldown': 0x3c,
                        'spawnType': 'Desert\x20Centipede',
                        'randomChoices': [
                            0x0,
                            0x1,
                            0x2,
                            0x3,
                            0x4,
                            0x5
                        ]
                    },
                    {
                        'type': 'growAndShrink',
                        'switchTimer': 0x28,
                        'cooldown': 0x50,
                        'magnitude': 0x6,
                        'randomChoices': [
                            0x0,
                            0x1,
                            0x2,
                            0x3,
                            0x4,
                            0x5
                        ]
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x6,
                        'cooldown': 0x78,
                        'rotateSpeed': 0.2,
                        'spawnType': 'ScorpionMissile',
                        'raritiesBelow': 0x1,
                        'randomChoices': [
                            0x0,
                            0x1,
                            0x2,
                            0x3,
                            0x4,
                            0x5
                        ]
                    },
                    {
                        'type': 'shootNearest',
                        'spawnCooldown': 0x1,
                        'onlyShootOnce': !![],
                        'cooldown': 0x3c,
                        'rotateSpeed': 0.2,
                        'spawnType': 'BigDesertMissile',
                        'randomChoices': [
                            0x0,
                            0x1,
                            0x2,
                            0x3,
                            0x4,
                            0x5
                        ]
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x6,
                        'cooldown': 0x3c,
                        'rotateSpeed': 0.6,
                        'spawnType': 'ScorpionMissile',
                        'raritiesBelow': 0x1,
                        'randomChoices': [
                            0x0,
                            0x1,
                            0x2,
                            0x3,
                            0x4,
                            0x5
                        ]
                    },
                    {
                        'type': 'stationary',
                        'cooldown': 0x28,
                        'randomChoices': [
                            0x0,
                            0x1,
                            0x2,
                            0x3,
                            0x4,
                            0x5
                        ]
                    }
                ],
                'bossOverride': {
                    'bossForceStartIndex': 0x0,
                    'speed': 0x5
                }
            },
            'Evil\x20Desert\x20Centipede': {
                'health': 0x8,
                'damage': 0xa,
                'radius': 0x23,
                'speed': 0x4,
                'mass': 0.4,
                'personality': 'passive',
                'drops': {
                    'Powder': [
                        0.25,
                        0x2
                    ],
                    'Dark\x20Compass': [
                        0.15,
                        0x6
                    ],
                    'Pomegranate': [
                        0.1,
                        0x0
                    ]
                },
                'boss': [
                    {
                        'type': 'spawnAround',
                        'spawnCooldown': 0x1e,
                        'cooldown': 0x3c,
                        'spawnType': 'Evil\x20Desert\x20Centipede',
                        'randomChoices': [
                            0x0,
                            0x1,
                            0x2,
                            0x3,
                            0x4,
                            0x5
                        ]
                    },
                    {
                        'type': 'growAndShrink',
                        'switchTimer': 0x28,
                        'cooldown': 0x50,
                        'magnitude': 0x6,
                        'randomChoices': [
                            0x0,
                            0x1,
                            0x2,
                            0x3,
                            0x4,
                            0x5
                        ]
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x6,
                        'cooldown': 0x78,
                        'rotateSpeed': 0.2,
                        'spawnType': 'ScorpionMissile',
                        'raritiesBelow': 0x1,
                        'randomChoices': [
                            0x0,
                            0x1,
                            0x2,
                            0x3,
                            0x4,
                            0x5
                        ]
                    },
                    {
                        'type': 'shootNearest',
                        'spawnCooldown': 0x1,
                        'onlyShootOnce': !![],
                        'cooldown': 0x3c,
                        'rotateSpeed': 0.2,
                        'spawnType': 'BigDesertMissile',
                        'randomChoices': [
                            0x0,
                            0x1,
                            0x2,
                            0x3,
                            0x4,
                            0x5
                        ]
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x6,
                        'cooldown': 0x3c,
                        'rotateSpeed': 0.6,
                        'spawnType': 'ScorpionMissile',
                        'raritiesBelow': 0x1,
                        'randomChoices': [
                            0x0,
                            0x1,
                            0x2,
                            0x3,
                            0x4,
                            0x5
                        ]
                    },
                    {
                        'type': 'stationary',
                        'cooldown': 0x28,
                        'randomChoices': [
                            0x0,
                            0x1,
                            0x2,
                            0x3,
                            0x4,
                            0x5
                        ]
                    }
                ],
                'bossOverride': {
                    'bossForceStartIndex': 0x0,
                    'speed': 0x3
                }
            },
            'Tree': {
                'health': 0x2d,
                'damage': 0xa,
                'radius': 36.5,
                'speed': 0x0,
                'mass': 0x4,
                'personality': 'stationary',
                'drops': {
                    'Oranges': [
                        0.35,
                        0x0
                    ],
                    'Fig': [
                        0.25,
                        0x0
                    ],
                    'Coconut': [
                        0.15,
                        0x0
                    ]
                }
            },
            'Root': {
                'health': 0x64,
                'damage': 0xf,
                'radius': 0x18,
                'speed': 0x0,
                'mass': 2.5,
                'personality': 'stationary',
                'drops': {
                    'Root': [
                        0.5,
                        0x0
                    ],
                    'Cinderleaf': [
                        0.5,
                        0x0
                    ],
                    'Plank': [
                        0.75,
                        0x0
                    ]
                }
            },
            'Cactus': {
                'health': 0x1e,
                'damage': 0x23,
                'radius': 0x28,
                'speed': 0x0,
                'mass': 0xa,
                'personality': 'stationary',
                'drops': {
                    'Cactus': [
                        0.25,
                        0x0
                    ],
                    'Stinger': [
                        0.01,
                        0x0
                    ],
                    'Blossom': [
                        0.05,
                        0x0
                    ]
                },
                'boss': [
                    {
                        'type': 'heal',
                        'heal': 0.01,
                        'cooldown': 0x2d
                    },
                    {
                        'type': 'moveCenter',
                        'cooldown': 0x5a,
                        'speedMult': 0x5
                    },
                    {
                        'type': 'heal',
                        'heal': 0.005,
                        'cooldown': 0x2d
                    },
                    {
                        'type': 'spawnGrows',
                        'cooldown': 0x1,
                        'spawnType': 'Stinger'
                    },
                    {
                        'type': 'spawnGrows',
                        'cooldown': 0x1,
                        'spawnType': 'Stinger'
                    },
                    {
                        'type': 'spawnGrows',
                        'cooldown': 0x1,
                        'spawnType': 'Stinger'
                    },
                    {
                        'type': 'spawnGrows',
                        'cooldown': 0x1,
                        'spawnType': 'Stinger'
                    },
                    {
                        'type': 'spawnGrows',
                        'cooldown': 0x1,
                        'spawnType': 'Stinger'
                    },
                    {
                        'type': 'spawnGrows',
                        'cooldown': 0x1,
                        'spawnType': 'Stinger'
                    },
                    {
                        'type': 'spawnGrows',
                        'cooldown': 0x1,
                        'spawnType': 'Stinger'
                    },
                    {
                        'type': 'spawnGrows',
                        'cooldown': 0x1,
                        'spawnType': 'Stinger'
                    },
                    {
                        'type': 'spawnGrows',
                        'cooldown': 0x1,
                        'spawnType': 'Stinger'
                    },
                    {
                        'type': 'spawnGrows',
                        'cooldown': 0x1,
                        'spawnType': 'Stinger'
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x3b9aca00,
                        'cooldown': 0x1a4,
                        'rotateSpeed': -0.01
                    },
                    {
                        'type': 'growAndShrink',
                        'switchTimer': 0xa,
                        'cooldown': 0x28,
                        'magnitude': 3.5,
                        'randomChoices': [
                            0x9,
                            0xa,
                            0xb,
                            0xc
                        ]
                    }
                ],
                'bossOverride': {
                    'bossForceStartIndex': 0x0,
                    'childrenRotateSpeed': 0.046,
                    'childrenDistance': 0x96,
                    'collideOtherEnemies': ![],
                    'childrenWanderAngle': ![],
                    'childrenWanderDistance': ![],
                    'spawnRarityOffset': 0x1,
                    'spawnAmount': 0x1
                }
            },
            'Shiny\x20Cactus': {
                'health': 0x1e,
                'damage': 0x23,
                'radius': 0x28,
                'speed': 0x0,
                'mass': 0xa,
                'personality': 'stationary',
                'drops': {
                    'Shiny\x20Cactus': [
                        0.8,
                        0x0
                    ],
                    'Shiny\x20Ruby': [
                        0.08,
                        0xb
                    ]
                },
                'boss': [
                    {
                        'type': 'heal',
                        'heal': 0.01,
                        'cooldown': 0x2d
                    },
                    {
                        'type': 'moveCenter',
                        'cooldown': 0x5a,
                        'speedMult': 0x5
                    },
                    {
                        'type': 'heal',
                        'heal': 0.005,
                        'cooldown': 0x2d
                    },
                    {
                        'type': 'spawnGrows',
                        'cooldown': 0x1,
                        'spawnType': 'Stinger'
                    },
                    {
                        'type': 'spawnGrows',
                        'cooldown': 0x1,
                        'spawnType': 'Stinger'
                    },
                    {
                        'type': 'spawnGrows',
                        'cooldown': 0x1,
                        'spawnType': 'Stinger'
                    },
                    {
                        'type': 'spawnGrows',
                        'cooldown': 0x1,
                        'spawnType': 'Stinger'
                    },
                    {
                        'type': 'spawnGrows',
                        'cooldown': 0x1,
                        'spawnType': 'Stinger'
                    },
                    {
                        'type': 'spawnGrows',
                        'cooldown': 0x1,
                        'spawnType': 'Stinger'
                    },
                    {
                        'type': 'spawnGrows',
                        'cooldown': 0x1,
                        'spawnType': 'Stinger'
                    },
                    {
                        'type': 'spawnGrows',
                        'cooldown': 0x1,
                        'spawnType': 'Stinger'
                    },
                    {
                        'type': 'spawnGrows',
                        'cooldown': 0x1,
                        'spawnType': 'Stinger'
                    },
                    {
                        'type': 'spawnGrows',
                        'cooldown': 0x1,
                        'spawnType': 'Stinger'
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x3b9aca00,
                        'cooldown': 0x1a4,
                        'rotateSpeed': -0.01
                    },
                    {
                        'type': 'growAndShrink',
                        'switchTimer': 0xa,
                        'cooldown': 0x28,
                        'magnitude': 3.5,
                        'randomChoices': [
                            0x9,
                            0xa,
                            0xb,
                            0xc
                        ]
                    }
                ],
                'bossOverride': {
                    'bossForceStartIndex': 0x0,
                    'childrenRotateSpeed': 0.046,
                    'childrenDistance': 0x96,
                    'collideOtherEnemies': ![],
                    'childrenWanderAngle': ![],
                    'childrenWanderDistance': ![],
                    'spawnRarityOffset': 0x1,
                    'spawnAmount': 0x1
                },
                'xp': 2.5
            },
            'Shiny\x20Ladybug': {
                'health': 0x23,
                'damage': 0xa,
                'radius': 0x28,
                'speed': 1.65,
                'mass': 1.5,
                'personality': 'neutral',
                'drops': {
                    'Rose': [
                        0x1,
                        0x0
                    ],
                    'Dahlia': [
                        0x1,
                        0x0
                    ],
                    'Bud': [
                        0.25,
                        0x4
                    ]
                },
                'boss': [
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x2,
                        'cooldown': 0x5,
                        'rotateSpeed': Math['PI'] / 0xf,
                        'spawnDistance': 0x0,
                        'spawnType': 'BossBud',
                        'raritiesBelow': 0x2
                    },
                    {
                        'type': 'aggroDifferent',
                        'cooldown': 0x0,
                        'detectionType': 'closest'
                    },
                    {
                        'type': 'chaseAggro',
                        'cooldown': 0x78,
                        'turnSpeed': 0x1
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x2,
                        'cooldown': 0x5,
                        'rotateSpeed': Math['PI'] / 0xf,
                        'spawnDistance': 0x0,
                        'spawnType': 'BossBud',
                        'raritiesBelow': 0x2
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x2,
                        'cooldown': 0x3c,
                        'spawnAmount': 0x3,
                        'spawnSpacing': Math['PI'] * 0x2,
                        'rotateSpeed': Math['PI'] / 0x1e,
                        'spawnType': 'ScorpionMissile',
                        'raritiesBelow': 0x1,
                        'spawnDistance': 0.7
                    },
                    {
                        'type': 'aggroDifferent',
                        'cooldown': 0x0,
                        'detectionType': 'closest'
                    },
                    {
                        'type': 'chaseAggro',
                        'cooldown': 0x78,
                        'turnSpeed': 0x1
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x2,
                        'cooldown': 0x5,
                        'rotateSpeed': Math['PI'] / 0xf,
                        'spawnDistance': 0x0,
                        'spawnType': 'BossBud',
                        'raritiesBelow': 0x2
                    },
                    {
                        'type': 'smallDash',
                        'cooldown': 0xf0,
                        'dashLength': 0x28,
                        'sizeChangeLength': 0x28,
                        'targetRadius': 0.3,
                        'dashSpeed': 0x7
                    },
                    {
                        'type': 'aggroDifferent',
                        'cooldown': 0x0,
                        'detectionType': 'closest'
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x2,
                        'cooldown': 0x5,
                        'rotateSpeed': Math['PI'] / 0xf,
                        'spawnDistance': 0x0,
                        'spawnType': 'BossBud',
                        'raritiesBelow': 0x2
                    },
                    {
                        'type': 'chaseAggro',
                        'cooldown': 0x78,
                        'turnSpeed': 0x1
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x2,
                        'cooldown': 0x5,
                        'rotateSpeed': Math['PI'] / 0xf,
                        'spawnDistance': 0x0,
                        'spawnType': 'BossBud',
                        'raritiesBelow': 0x2
                    },
                    {
                        'type': 'complexShoot',
                        'shoot': [{
                                'spawnCooldown': 0x6,
                                'spawnAmount': 0x2,
                                'spawnSpacing': Math['PI'] * 0x2,
                                'rotateSpeed': 0.05,
                                'spawnDistance': 0.7,
                                'spawnType': 'Shiny\x20Ladybug',
                                'raritiesBelow': 0x3
                            }],
                        'cooldown': 0x3c
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x2,
                        'cooldown': 0x5,
                        'rotateSpeed': Math['PI'] / 0xf,
                        'spawnDistance': 0x0,
                        'spawnType': 'BossBud',
                        'raritiesBelow': 0x2
                    },
                    {
                        'type': 'aggroDifferent',
                        'cooldown': 0x0,
                        'detectionType': 'closest'
                    },
                    {
                        'type': 'chaseAggro',
                        'cooldown': 0x78,
                        'turnSpeed': 0x1
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x2,
                        'cooldown': 0x5,
                        'rotateSpeed': Math['PI'] / 0xf,
                        'spawnDistance': 0x0,
                        'spawnType': 'BossBud',
                        'raritiesBelow': 0x2
                    },
                    {
                        'type': 'growAndShrink',
                        'switchTimer': 0x14,
                        'cooldown': 0x50,
                        'magnitude': 0x12
                    },
                    {
                        'type': 'aggroDifferent',
                        'cooldown': 0x0,
                        'detectionType': 'closest'
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x2,
                        'cooldown': 0x5,
                        'rotateSpeed': Math['PI'] / 0xf,
                        'spawnDistance': 0x0,
                        'spawnType': 'BossBud',
                        'raritiesBelow': 0x2
                    },
                    {
                        'type': 'chaseAggro',
                        'cooldown': 0x78,
                        'turnSpeed': 0x1
                    }
                ],
                'bossOverride': { 'bossForceStartIndex': 0x0 },
                'xp': 2.5
            },
            'Ocean\x20Ladybug': {
                'health': 0x64,
                'damage': 0xa,
                'radius': 0x28,
                'speed': 1.65,
                'mass': 1.5,
                'personality': 'neutral',
                'drops': {
                    'Air': [
                        0x1,
                        0x0
                    ],
                    'Rose': [
                        0x1,
                        0x0
                    ],
                    'Trident': [
                        0.5,
                        0x4
                    ]
                },
                'boss': [
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x2,
                        'cooldown': 0x5,
                        'rotateSpeed': Math['PI'] / 0xf,
                        'spawnDistance': 0x0,
                        'spawnType': 'BossTrident',
                        'raritiesBelow': 0x2
                    },
                    {
                        'type': 'aggroDifferent',
                        'cooldown': 0x0,
                        'detectionType': 'closest'
                    },
                    {
                        'type': 'chaseAggro',
                        'cooldown': 0x78,
                        'turnSpeed': 0x1
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x2,
                        'cooldown': 0x5,
                        'rotateSpeed': Math['PI'] / 0xf,
                        'spawnDistance': 0x0,
                        'spawnType': 'BossTrident',
                        'raritiesBelow': 0x2
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x4,
                        'cooldown': 0x3c,
                        'spawnAmount': 0x3,
                        'spawnSpacing': Math['PI'] * 0x2,
                        'rotateSpeed': Math['PI'] / 0x1e,
                        'spawnType': 'StarfishMissile',
                        'raritiesBelow': 0x1,
                        'spawnDistance': 0.7
                    },
                    {
                        'type': 'aggroDifferent',
                        'cooldown': 0x0,
                        'detectionType': 'closest'
                    },
                    {
                        'type': 'chaseAggro',
                        'cooldown': 0x78,
                        'turnSpeed': 0x1
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x2,
                        'cooldown': 0x5,
                        'rotateSpeed': Math['PI'] / 0xf,
                        'spawnDistance': 0x0,
                        'spawnType': 'BossTrident',
                        'raritiesBelow': 0x2
                    },
                    {
                        'type': 'smallDash',
                        'cooldown': 0xf0,
                        'dashLength': 0x28,
                        'sizeChangeLength': 0x28,
                        'targetRadius': 0.3,
                        'dashSpeed': 0x7
                    },
                    {
                        'type': 'aggroDifferent',
                        'cooldown': 0x0,
                        'detectionType': 'closest'
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x2,
                        'cooldown': 0x5,
                        'rotateSpeed': Math['PI'] / 0xf,
                        'spawnDistance': 0x0,
                        'spawnType': 'BossTrident',
                        'raritiesBelow': 0x2
                    },
                    {
                        'type': 'chaseAggro',
                        'cooldown': 0x78,
                        'turnSpeed': 0x1
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x2,
                        'cooldown': 0x5,
                        'rotateSpeed': Math['PI'] / 0xf,
                        'spawnDistance': 0x0,
                        'spawnType': 'BossTrident',
                        'raritiesBelow': 0x2
                    },
                    {
                        'type': 'complexShoot',
                        'shoot': [{
                                'spawnCooldown': 0x9,
                                'spawnAmount': 0x2,
                                'spawnSpacing': Math['PI'] * 0x2,
                                'rotateSpeed': 0.05,
                                'spawnDistance': 0.7,
                                'spawnType': 'Ocean\x20Ladybug',
                                'raritiesBelow': 0x3
                            }],
                        'cooldown': 0x3c
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x2,
                        'cooldown': 0x5,
                        'rotateSpeed': Math['PI'] / 0xf,
                        'spawnDistance': 0x0,
                        'spawnType': 'BossTrident',
                        'raritiesBelow': 0x2
                    },
                    {
                        'type': 'aggroDifferent',
                        'cooldown': 0x0,
                        'detectionType': 'closest'
                    },
                    {
                        'type': 'chaseAggro',
                        'cooldown': 0x78,
                        'turnSpeed': 0x1
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x2,
                        'cooldown': 0x5,
                        'rotateSpeed': Math['PI'] / 0xf,
                        'spawnDistance': 0x0,
                        'spawnType': 'BossTrident',
                        'raritiesBelow': 0x2
                    },
                    {
                        'type': 'growAndShrink',
                        'switchTimer': 0x14,
                        'cooldown': 0x50,
                        'magnitude': 0x12
                    },
                    {
                        'type': 'aggroDifferent',
                        'cooldown': 0x0,
                        'detectionType': 'closest'
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x2,
                        'cooldown': 0x5,
                        'rotateSpeed': Math['PI'] / 0xf,
                        'spawnDistance': 0x0,
                        'spawnType': 'BossTrident',
                        'raritiesBelow': 0x2
                    },
                    {
                        'type': 'chaseAggro',
                        'cooldown': 0x78,
                        'turnSpeed': 0x1
                    }
                ],
                'bossOverride': { 'bossForceStartIndex': 0x0 }
            },
            '1v1text': {
                'health': 0x64,
                'damage': 0xa,
                'radius': 0x3c,
                'speed': 0x2,
                'mass': 0x1,
                'personality': 'neutral',
                'drops': {}
            },
            'Agar.io\x20Cell': {
                'health': 0x64,
                'damage': 0x64,
                'radius': 0x3c,
                'speed': 1.77,
                'mass': 0x2,
                'detectionDistance': 0x3b9aca00,
                'personality': 'neutral',
                'override': {
                    0x1: {
                        'health': 0xc8,
                        'damage': 0x78
                    },
                    0x2: {
                        'health': 0x190,
                        'damage': 0x8c
                    },
                    0x3: {
                        'health': 0x320,
                        'damage': 0xa0
                    },
                    0x4: {
                        'health': 0x640,
                        'damage': 0xb4
                    },
                    0x5: {
                        'health': 0xc80,
                        'damage': 0xc8
                    },
                    0x6: {
                        'health': 0x1900,
                        'damage': 0xdc
                    },
                    0x7: {
                        'health': 0x2710,
                        'damage': 0xf0
                    },
                    0x8: {
                        'health': 0x3a98,
                        'damage': 0x104
                    },
                    0x9: {
                        'health': 0x57e4,
                        'damage': 0x118
                    },
                    0xa: {
                        'health': 0x927c,
                        'damage': 0x12c
                    },
                    0xb: {
                        'health': 0xea60,
                        'damage': 0x140
                    },
                    0xc: {
                        'health': 0x186a0,
                        'damage': 0x154
                    }
                },
                'drops': {}
            },
            'Scorpion': {
                'health': 0x28,
                'damage': 0xa,
                'poison': [
                    0x50,
                    0x14
                ],
                'radius': 0x23,
                'speed': 1.65,
                'mass': 1.5,
                'detectionDistance': 0x2bc,
                'personality': 'aggressive',
                'drops': {
                    'Iris': [
                        0.25,
                        0x0
                    ],
                    'Pincer': [
                        0.25,
                        0x0
                    ],
                    'Missile': [
                        0.15,
                        0x0
                    ]
                },
                'boss': [
                    {
                        'type': 'aggroDifferent',
                        'cooldown': 0x0,
                        'detectionType': 'random'
                    },
                    {
                        'type': 'shootAggro',
                        'cooldown': 0xb4,
                        'shootCooldown': 0x20,
                        'spawnAmount': 0xa,
                        'spawnSpacing': Math['PI'] * 0x2,
                        'predictionChance': 0x0,
                        'spawnType': 'ScorpionMissile',
                        'randomChoices': [
                            0x0,
                            0x2,
                            0x3,
                            0x5,
                            0x7
                        ]
                    },
                    {
                        'type': 'spawnAround',
                        'spawnCooldown': 0.1,
                        'cooldown': 0x78,
                        'spawnType': 'ScorpionMissile',
                        'raritiesBelow': 0x2,
                        'randomChoices': [
                            0x0,
                            0x2,
                            0x3,
                            0x5,
                            0x7
                        ]
                    },
                    {
                        'type': 'aggroDifferent',
                        'cooldown': 0x0,
                        'detectionType': 'random'
                    },
                    {
                        'type': 'shootAggro',
                        'cooldown': 0xb4,
                        'shootCooldown': 0x18,
                        'spawnAmount': 0x3,
                        'spawnSpacing': 1.4,
                        'predictionChance': 0x1,
                        'spawnType': 'ScorpionMissile',
                        'randomChoices': [
                            0x0,
                            0x2,
                            0x3,
                            0x5,
                            0x7
                        ]
                    },
                    {
                        'type': 'aggroDifferent',
                        'cooldown': 0x0,
                        'detectionType': 'random'
                    },
                    {
                        'type': 'chaseAggro',
                        'cooldown': 0x5a,
                        'turnSpeed': 0x1,
                        'randomChoices': [
                            0x0,
                            0x2,
                            0x3,
                            0x5,
                            0x7
                        ]
                    },
                    {
                        'type': 'growAndShrink',
                        'switchTimer': 0x28,
                        'cooldown': 0x50,
                        'magnitude': 3.5,
                        'randomChoices': [
                            0x0,
                            0x2,
                            0x3,
                            0x5
                        ]
                    }
                ],
                'bossOverride': {
                    'bossForceStartIndex': 0x0,
                    'childrenRotateSpeed': 0x0,
                    'childrenDistance': 0xdc,
                    'childrenWanderAngle': !![],
                    'childrenWanderDistance': !![],
                    'spawnRarityOffset': 0x2,
                    'spawnAmount': 0x1
                }
            },
            'Beetle': {
                'health': 0x1e,
                'damage': 0x1e,
                'radius': 0x23,
                'speed': 1.9,
                'mass': 1.5,
                'turnSpeed': 0.1,
                'detectionDistance': 0x2a3,
                'personality': 'aggressive',
                'drops': {
                    'Bone': [
                        0.25,
                        0x0
                    ],
                    'Egg': [
                        0.15,
                        0x0
                    ],
                    'Horn': [
                        0.02,
                        0x5
                    ]
                },
                'boss': [
                    {
                        'type': 'aggroDifferent',
                        'cooldown': 0x0,
                        'detectionType': 'closest'
                    },
                    {
                        'type': 'chaseAggro',
                        'cooldown': 0xa0,
                        'turnSpeed': 0.04
                    },
                    {
                        'type': 'smallDash',
                        'cooldown': 0xf0,
                        'dashLength': 0x28,
                        'sizeChangeLength': 0x28,
                        'targetRadius': 0.3,
                        'dashSpeed': 0x7
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x3,
                        'cooldown': 0x3c,
                        'rotateSpeed': Math['PI'] / 0x1e,
                        'spawnType': 'ScorpionMissile',
                        'spawnDistance': 0x1,
                        'raritiesBelow': 0x1
                    },
                    {
                        'type': 'spawnGrows',
                        'cooldown': 0x1,
                        'spawnType': 'Beetle'
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x2710,
                        'cooldown': 0x3c,
                        'rotateSpeed': Math['PI'] / 0x1e,
                        'spawnType': 'Beetle'
                    }
                ],
                'bossOverride': {
                    'bossForceStartIndex': 0x0,
                    'childrenRotateSpeed': 0.023,
                    'childrenDistance': 0xb4,
                    'childrenWanderAngle': ![],
                    'childrenWanderDistance': ![],
                    'spawnRarityOffset': 0x2,
                    'spawnAmount': 0x2
                }
            },
            'Shiny\x20Beetle': {
                'health': 0x1e,
                'damage': 0x1e,
                'radius': 0x23,
                'speed': 1.9,
                'mass': 0x2,
                'turnSpeed': 0.1,
                'detectionDistance': 0x2a3,
                'personality': 'aggressive',
                'drops': {
                    'Shiny\x20Iris': [
                        0.4,
                        0x0
                    ],
                    'Shiny\x20Egg': [
                        0.8,
                        0x0
                    ]
                },
                'boss': [
                    {
                        'type': 'aggroDifferent',
                        'cooldown': 0x0,
                        'detectionType': 'closest'
                    },
                    {
                        'type': 'chaseAggro',
                        'cooldown': 0xa0,
                        'turnSpeed': 0.04
                    },
                    {
                        'type': 'smallDash',
                        'cooldown': 0xf0,
                        'dashLength': 0x28,
                        'sizeChangeLength': 0x28,
                        'targetRadius': 0.3,
                        'dashSpeed': 0x7
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x3,
                        'cooldown': 0x3c,
                        'rotateSpeed': Math['PI'] / 0x1e,
                        'spawnType': 'ScorpionMissile',
                        'spawnDistance': 0x1,
                        'raritiesBelow': 0x1
                    },
                    {
                        'type': 'spawnGrows',
                        'cooldown': 0x1,
                        'spawnType': 'Shiny\x20Beetle'
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x2710,
                        'cooldown': 0x3c,
                        'rotateSpeed': Math['PI'] / 0x1e,
                        'spawnType': 'Shiny\x20Beetle'
                    }
                ],
                'bossOverride': {
                    'bossForceStartIndex': 0x0,
                    'childrenRotateSpeed': 0.023,
                    'childrenDistance': 0xb4,
                    'childrenWanderAngle': ![],
                    'childrenWanderDistance': ![],
                    'spawnRarityOffset': 0x2,
                    'spawnAmount': 0x2
                },
                'xp': 2.5
            },
            'Dark\x20Beetle': {
                'health': 0x28,
                'damage': 0x28,
                'radius': 0x23,
                'speed': 2.7,
                'mass': 0x2,
                'turnSpeed': 0.1,
                'detectionDistance': 0x4b0,
                'personality': 'aggressive',
                'drops': {
                    'Blood\x20Horn': [
                        0.5,
                        0x0
                    ],
                    'Rog456': [
                        0.5,
                        0xb
                    ]
                },
                'boss': [
                    {
                        'type': 'aggroDifferent',
                        'cooldown': 0x0,
                        'detectionType': 'closest'
                    },
                    {
                        'type': 'chaseAggro',
                        'cooldown': 0xa0,
                        'turnSpeed': 0.04
                    },
                    {
                        'type': 'smallDash',
                        'cooldown': 0xf0,
                        'dashLength': 0x28,
                        'sizeChangeLength': 0x28,
                        'targetRadius': 0.3,
                        'dashSpeed': 0x7
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x3,
                        'cooldown': 0x3c,
                        'rotateSpeed': Math['PI'] / 0x1e,
                        'spawnType': 'DauberMissile',
                        'spawnDistance': 0x1,
                        'raritiesBelow': 0x1
                    },
                    {
                        'type': 'spawnGrows',
                        'cooldown': 0x1,
                        'spawnType': 'Dark\x20Beetle'
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x2710,
                        'cooldown': 0x3c,
                        'rotateSpeed': Math['PI'] / 0x1e,
                        'spawnType': 'Dark\x20Beetle'
                    }
                ],
                'bossOverride': {
                    'bossForceStartIndex': 0x0,
                    'childrenRotateSpeed': 0.023,
                    'childrenDistance': 0xb4,
                    'childrenWanderAngle': ![],
                    'childrenWanderDistance': ![],
                    'spawnRarityOffset': 0x2,
                    'spawnAmount': 0x2
                },
                'xp': 6.7
            },
            'Grasshopper': {
                'health': 32.5,
                'damage': 0xf,
                'radius': 0x1f,
                'speed': 2.1,
                'mass': 1.5,
                'detectionDistance': 0x2e4,
                'personality': 'aggressive',
                'drops': {
                    'Blade': [
                        0.1,
                        0x0
                    ],
                    'Stalk': [
                        0.25,
                        0x0
                    ],
                    'Thorax': [
                        0.01,
                        0x1
                    ]
                },
                'boss': [
                    {
                        'type': 'aggroDifferent',
                        'cooldown': 0x0,
                        'detectionType': 'closest'
                    },
                    {
                        'type': 'jumpBehindAggressive',
                        'cooldown': 0x1e0,
                        'turnSpeed': 0.5
                    },
                    {
                        'type': 'smallDash',
                        'cooldown': 0xf0,
                        'dashLength': 0x28,
                        'sizeChangeLength': 0x28,
                        'targetRadius': 0.3,
                        'dashSpeed': 0x7
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x3,
                        'cooldown': 0x3c,
                        'rotateSpeed': Math['PI'] / 0x1e,
                        'spawnType': 'DauberMissile',
                        'spawnDistance': 0x1,
                        'raritiesBelow': 0x1
                    }
                ],
                'bossOverride': {
                    'bossForceStartIndex': 0x0,
                    'speed': 3.4
                }
            },
            'Stickbug': {
                'health': 0x1c,
                'damage': 0xf,
                'radius': 0x1c,
                'speed': 2.35,
                'mass': 0.6,
                'detectionDistance': 0x2d5,
                'personality': 'aggressive',
                'drops': {
                    'Stick': [
                        0.01,
                        0x0
                    ],
                    'Stalk': [
                        0.25,
                        0x0
                    ],
                    'Plank': [
                        0.25,
                        0x0
                    ]
                },
                'boss': [
                    {
                        'type': 'aggroDifferent',
                        'cooldown': 0x0,
                        'detectionType': 'closest'
                    },
                    {
                        'type': 'teleportAwayAggressive',
                        'cooldown': 0xb4,
                        'turnSpeed': 0x1
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x2,
                        'cooldown': 0x3c,
                        'rotateSpeed': Math['PI'] / 0x1e,
                        'spawnType': 'GrasshopperMissile',
                        'spawnDistance': 0.5,
                        'raritiesBelow': 0x1
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x6,
                        'cooldown': 0x2d,
                        'rotateSpeed': Math['PI'] / 0x1e,
                        'spawnType': 'Stickbug',
                        'spawnDistance': 0.5,
                        'raritiesBelow': 0x2
                    },
                    {
                        'type': 'growAndShrink',
                        'switchTimer': 0x28,
                        'cooldown': 0x50,
                        'magnitude': 0xf
                    },
                    {
                        'type': 'aggroDifferent',
                        'cooldown': 0x0,
                        'detectionType': 'closest'
                    },
                    {
                        'type': 'teleportAwayAggressive',
                        'cooldown': 0xb4,
                        'turnSpeed': 0x1
                    },
                    {
                        'type': 'complexShoot',
                        'shoot': [{
                                'spawnCooldown': 0x2,
                                'spawnAmount': 0x2,
                                'spawnSpacing': Math['PI'] * 0x2,
                                'rotateSpeed': 0.05,
                                'spawnDistance': 0.9,
                                'spawnType': 'Stickbug',
                                'raritiesBelow': 0x4
                            }],
                        'cooldown': 0x3c
                    },
                    {
                        'type': 'aggroDifferent',
                        'cooldown': 0x0,
                        'detectionType': 'closest'
                    },
                    {
                        'type': 'teleportAwayAggressive',
                        'cooldown': 0xb4,
                        'turnSpeed': 0x1
                    },
                    {
                        'type': 'growAndShrink',
                        'switchTimer': 0x28,
                        'cooldown': 0x50,
                        'magnitude': 0xc
                    },
                    {
                        'type': 'aggroDifferent',
                        'cooldown': 0x0,
                        'detectionType': 'closest'
                    },
                    {
                        'type': 'complexShoot',
                        'shoot': [
                            {
                                'spawnCooldown': 0x1,
                                'spawnAmount': 0x2,
                                'spawnSpacing': Math['PI'] * 0x2,
                                'rotateSpeed': 0.2,
                                'spawnType': 'DauberMissile',
                                'raritiesBelow': 0x2
                            },
                            {
                                'spawnCooldown': 0x5,
                                'spawnAmount': 0x2,
                                'spawnSpacing': Math['PI'] * 0x2,
                                'rotateSpeed': 0.05,
                                'spawnType': 'Stickbug',
                                'raritiesBelow': 0x3
                            },
                            {
                                'aim': !![],
                                'spawnCooldown': 0x3c,
                                'predictionChance': 0.5,
                                'spawnType': 'BeeMissile',
                                'raritiesBelow': 0x0
                            }
                        ],
                        'cooldown': 0x3c
                    }
                ],
                'bossOverride': {
                    'bossForceStartIndex': 0x0,
                    'speed': 0x4
                }
            },
            'Sandstorm': {
                'health': 0x27,
                'damage': 0x28,
                'radius': 0x28,
                'speed': 0x4,
                'mass': 0x2,
                'personality': 'sandstorm',
                'drops': {
                    'Stick': [
                        0.05,
                        0x3
                    ],
                    'Sand': [
                        0.25,
                        0x0
                    ]
                },
                'boss': [
                    {
                        'type': 'growAndShrink',
                        'switchTimer': 0x28,
                        'cooldown': 0x50,
                        'magnitude': 0x9
                    },
                    {
                        'type': 'growAndShrink',
                        'switchTimer': 0x28,
                        'cooldown': 0x50,
                        'magnitude': 0x5
                    },
                    {
                        'type': 'growAndShrink',
                        'switchTimer': 0x28,
                        'cooldown': 0x50,
                        'magnitude': 0xf
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x2,
                        'cooldown': 0x3c,
                        'rotateSpeed': Math['PI'] / 0x1e,
                        'raritiesBelow': 0x3,
                        'spawnType': 'Sandstorm'
                    },
                    {
                        'type': 'growAndShrink',
                        'switchTimer': 0x28,
                        'cooldown': 0x50,
                        'magnitude': 0x9
                    },
                    {
                        'type': 'growAndShrink',
                        'switchTimer': 0x28,
                        'cooldown': 0x50,
                        'magnitude': 0xd
                    },
                    {
                        'type': 'growAndShrink',
                        'switchTimer': 0x28,
                        'cooldown': 0x50,
                        'magnitude': 0xe
                    },
                    {
                        'type': 'growAndShrink',
                        'switchTimer': 0x5,
                        'cooldown': 0x28,
                        'magnitude': 0xa
                    },
                    {
                        'type': 'spinPlayers',
                        'magnitude': 0x7530,
                        'cooldown': 0xf0
                    },
                    {
                        'type': 'growAndShrink',
                        'switchTimer': 0x2710,
                        'cooldown': 0x28,
                        'magnitude': 1.25
                    }
                ],
                'bossOverride': { 'bossForceStartIndex': 0x0 }
            },
            'Bee': {
                'health': 0xf,
                'damage': 0x32,
                'radius': 0x1e,
                'speed': 2.25,
                'mass': 0x1,
                'personality': 'passive',
                'drops': {
                    'Stinger': [
                        0.25,
                        0x0
                    ],
                    'Honey': [
                        0.1,
                        0x2
                    ],
                    'Pollen': [
                        0.05,
                        0x1
                    ]
                },
                'override': { 0x2: { 'personality': 'neutral' } },
                'boss': [
                    {
                        'type': 'aggroDifferent',
                        'cooldown': 0x0,
                        'detectionType': 'closest'
                    },
                    {
                        'type': 'chaseAggro',
                        'cooldown': 0x5a,
                        'turnSpeed': 0x1
                    },
                    {
                        'type': 'smallDash',
                        'cooldown': 0xf0,
                        'dashLength': 0x28,
                        'sizeChangeLength': 0x28,
                        'targetRadius': 0.3,
                        'dashSpeed': 0x7
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x2,
                        'cooldown': 0x3c,
                        'rotateSpeed': Math['PI'] / 0x1e,
                        'spawnType': 'BeeMissile',
                        'spawnDistance': 0.5,
                        'raritiesBelow': 0x1
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x6,
                        'cooldown': 0x2d,
                        'rotateSpeed': Math['PI'] / 0x1e,
                        'spawnType': 'Bee',
                        'spawnDistance': 0.5,
                        'raritiesBelow': 0x2
                    },
                    {
                        'type': 'growAndShrink',
                        'switchTimer': 0x28,
                        'cooldown': 0x50,
                        'magnitude': 0xf
                    },
                    {
                        'type': 'aggroDifferent',
                        'cooldown': 0x0,
                        'detectionType': 'closest'
                    },
                    {
                        'type': 'chaseAggro',
                        'cooldown': 0x28,
                        'turnSpeed': 0x1
                    },
                    {
                        'type': 'complexShoot',
                        'shoot': [{
                                'spawnCooldown': 0x2,
                                'spawnAmount': 0x2,
                                'spawnSpacing': Math['PI'] * 0x2,
                                'rotateSpeed': 0.05,
                                'spawnDistance': 0.9,
                                'spawnType': 'Bee',
                                'raritiesBelow': 0x4
                            }],
                        'cooldown': 0x3c
                    },
                    {
                        'type': 'aggroDifferent',
                        'cooldown': 0x0,
                        'detectionType': 'closest'
                    },
                    {
                        'type': 'chaseAggro',
                        'cooldown': 0x6,
                        'turnSpeed': 0x1
                    },
                    {
                        'type': 'smallDash',
                        'cooldown': 0x78,
                        'dashLength': 0x1e,
                        'sizeChangeLength': 0x1e,
                        'targetRadius': 0.6,
                        'dashSpeed': 0x4
                    },
                    {
                        'type': 'growAndShrink',
                        'switchTimer': 0x28,
                        'cooldown': 0x50,
                        'magnitude': 0xc
                    },
                    {
                        'type': 'aggroDifferent',
                        'cooldown': 0x0,
                        'detectionType': 'closest'
                    },
                    {
                        'type': 'complexShoot',
                        'shoot': [
                            {
                                'spawnCooldown': 0x2,
                                'spawnAmount': 0x2,
                                'spawnSpacing': Math['PI'] * 0x2,
                                'rotateSpeed': 0.2,
                                'spawnType': 'BeeMissile',
                                'raritiesBelow': 0x2
                            },
                            {
                                'spawnCooldown': 0xc,
                                'spawnAmount': 0x2,
                                'spawnSpacing': Math['PI'] * 0x2,
                                'rotateSpeed': 0.05,
                                'spawnType': 'Bee',
                                'raritiesBelow': 0x3
                            },
                            {
                                'aim': !![],
                                'spawnCooldown': 0x3c,
                                'predictionChance': 0.5,
                                'spawnType': 'BeeMissile',
                                'raritiesBelow': 0x0
                            }
                        ],
                        'cooldown': 0xb4
                    }
                ],
                'bossOverride': { 'bossForceStartIndex': 0x0 }
            },
            'Desert\x20Moth': {
                'health': 0x19,
                'damage': 0xa,
                'radius': 0x1e,
                'speed': 2.3,
                'mass': 0x1,
                'personality': 'passive',
                'drops': {
                    'Wing': [
                        0.25,
                        0x0
                    ],
                    'Powder': [
                        0.25,
                        0x0
                    ],
                    'Mandible': [
                        0.1,
                        0x0
                    ]
                },
                'override': { 0x2: { 'personality': 'neutral' } },
                'boss': [
                    {
                        'type': 'chaseNearest',
                        'cooldown': 0x0
                    },
                    {
                        'type': 'smallDash',
                        'cooldown': 0xb4,
                        'dashLength': 0x23,
                        'dashSpeed': 0x4
                    },
                    {
                        'type': 'chaseNearest',
                        'cooldown': 0x0
                    },
                    {
                        'type': 'smallDash',
                        'cooldown': 0x96,
                        'dashLength': 0x28,
                        'dashSpeed': 0x5
                    }
                ],
                'bossOverride': { 'bossForceStartIndex': 0x0 }
            },
            'Moonlit\x20Frog': {
                'health': 0x14,
                'damage': 0xa,
                'radius': 0x14,
                'speed': 2.3,
                'mass': 0.8,
                'detectionDistance': 0x258,
                'personality': 'aggressive',
                'drops': {
                    'Faster': [
                        0.25,
                        0x0
                    ],
                    'Shade': [
                        0.25,
                        0x8
                    ]
                },
                'boss': [
                    {
                        'type': 'aggroDifferent',
                        'cooldown': 0x0,
                        'detectionType': 'closest'
                    },
                    {
                        'type': 'frogAggro',
                        'cooldown': 0xc8
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x2,
                        'cooldown': 0x3c,
                        'rotateSpeed': 0.2,
                        'raritiesBelow': 0x3,
                        'spawnType': 'Sunlit\x20Frog'
                    },
                    {
                        'type': 'frogAggro',
                        'cooldown': 0xc8
                    },
                    {
                        'type': 'aggroDifferent',
                        'cooldown': 0x0,
                        'detectionType': 'closest'
                    },
                    {
                        'type': 'smallDash',
                        'cooldown': 0x50,
                        'dashLength': 0x3c,
                        'sizeChangeLength': 0x14,
                        'targetRadius': 0.2,
                        'dashSpeed': 0xa
                    },
                    {
                        'type': 'frogAggro',
                        'cooldown': 0xc8
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x1,
                        'cooldown': 0x3c,
                        'rotateSpeed': 0.2,
                        'raritiesBelow': 0x1,
                        'spawnType': 'ScorpionMissile'
                    }
                ],
                'bossOverride': {
                    'bossForceStartIndex': 0x0,
                    'collideOtherEnemies': ![],
                    'speed': 0x27
                }
            },
            'Sunlit\x20Frog': {
                'health': 0x19,
                'damage': 0xa,
                'radius': 0x14,
                'speed': 2.3,
                'mass': 0.8,
                'personality': 'neutral',
                'drops': {
                    'Faster': [
                        0.25,
                        0x0
                    ],
                    'Radiance': [
                        0.25,
                        0x8
                    ]
                },
                'boss': [
                    {
                        'type': 'aggroDifferent',
                        'cooldown': 0x0,
                        'detectionType': 'closest'
                    },
                    {
                        'type': 'frogAggro',
                        'cooldown': 0xc8
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x2,
                        'cooldown': 0x3c,
                        'rotateSpeed': 0.2,
                        'raritiesBelow': 0x3,
                        'spawnType': 'Moonlit\x20Frog'
                    },
                    {
                        'type': 'frogAggro',
                        'cooldown': 0xc8
                    },
                    {
                        'type': 'aggroDifferent',
                        'cooldown': 0x0,
                        'detectionType': 'closest'
                    },
                    {
                        'type': 'smallDash',
                        'cooldown': 0x50,
                        'dashLength': 0x3c,
                        'sizeChangeLength': 0x14,
                        'targetRadius': 0.2,
                        'dashSpeed': 0xa
                    },
                    {
                        'type': 'frogAggro',
                        'cooldown': 0xc8
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x1,
                        'cooldown': 0x3c,
                        'rotateSpeed': 0.2,
                        'raritiesBelow': 0x1,
                        'spawnType': 'ScorpionMissile'
                    }
                ],
                'bossOverride': {
                    'bossForceStartIndex': 0x0,
                    'collideOtherEnemies': ![],
                    'speed': 0x27
                }
            },
            'Ruby\x20Frog': {
                'health': 0x19,
                'damage': 0x14,
                'radius': 0x14,
                'speed': 38.4,
                'mass': 1.6,
                'personality': 'neutral',
                'drops': {
                    'Ruby': [
                        0x1,
                        0xb,
                        0xf
                    ],
                    'Radiance': [
                        0.25,
                        0x8
                    ],
                    'Shade': [
                        0.25,
                        0x8
                    ]
                },
                'xp': 0x3
            },
            'Poison\x20Dart\x20Frog': {
                'health': 0x19,
                'damage': 0x5,
                'radius': 0x1a,
                'speed': 2.8,
                'mass': 0.8,
                'poison': [
                    0x96,
                    0x32
                ],
                'personality': 'aggressive',
                'drops': {
                    'Batrachotoxin': [
                        0.2,
                        0x7
                    ],
                    'Neurotoxin': [
                        0.07,
                        0x7
                    ],
                    'Faster': [
                        0.25,
                        0x0
                    ]
                }
            },
            'Hornet': {
                'health': 0x1e,
                'damage': 0x32,
                'radius': 0x2a,
                'speed': 0x1,
                'mass': 1.2,
                'personality': 'shoot',
                'detectionDistance': 0x2bc,
                'drops': {
                    'Missile': [
                        0.25,
                        0x2
                    ],
                    'Oranges': [
                        0.25,
                        0x0
                    ],
                    'Husk': [
                        0.15,
                        0x7
                    ]
                },
                'boss': [
                    {
                        'type': 'aggroDifferent',
                        'cooldown': 0x0,
                        'detectionType': 'closest'
                    },
                    {
                        'type': 'shootAggro',
                        'cooldown': 0xb4,
                        'shootCooldown': 0x2a,
                        'spawnAmount': 0x3,
                        'spawnSpacing': 1.38,
                        'predictionChance': 0.5,
                        'spawnType': 'Missile'
                    },
                    {
                        'type': 'aggroDifferent',
                        'cooldown': 0x0,
                        'detectionType': 'closest'
                    },
                    {
                        'type': 'shootAggro',
                        'cooldown': 0x5a * 2.3,
                        'shootCooldown': 0x12 * 0x2,
                        'spawnAmount': 0x1,
                        'spawnSpacing': Math['PI'],
                        'predictionChance': 0x0,
                        'raritiesBelow': 0x2,
                        'spawnType': 'Hornet',
                        'randomChoices': [
                            0x4,
                            0x5,
                            0x7,
                            0x8
                        ]
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x2,
                        'cooldown': 0x3c,
                        'rotateSpeed': Math['PI'] / 0x1e,
                        'spawnType': 'Missile',
                        'raritiesBelow': 0x1,
                        'spawnDistance': 0x1,
                        'randomChoices': [
                            0x2,
                            0x5
                        ]
                    },
                    {
                        'type': 'aggroDifferent',
                        'cooldown': 0x0,
                        'detectionType': 'closest'
                    },
                    {
                        'type': 'shootAggro',
                        'cooldown': 0xb4,
                        'shootCooldown': 0x2a,
                        'spawnAmount': 0x3,
                        'spawnSpacing': 1.38,
                        'predictionChance': 0.5,
                        'spawnType': 'Missile',
                        'randomChoices': [
                            0x2,
                            0x4,
                            0x5,
                            0x7
                        ]
                    },
                    {
                        'type': 'spinShootMove',
                        'spawnCooldown': 0x2,
                        'moveSpeed': 0xb,
                        'cooldown': 0x3c,
                        'shootOffset': Math['PI'],
                        'rotateSpeed': Math['PI'] / 0x1e,
                        'spawnType': 'Missile',
                        'raritiesBelow': 0x1,
                        'spawnDistance': 0x1,
                        'randomChoices': [
                            0x2,
                            0x5,
                            0x5,
                            0x8
                        ]
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x2,
                        'cooldown': 0x3c,
                        'spawnAmount': 0x5,
                        'spawnSpacing': Math['PI'] * 0x2,
                        'rotateSpeed': Math['PI'] / 0x1e,
                        'spawnType': 'Missile',
                        'raritiesBelow': 0x1,
                        'spawnDistance': 0.7,
                        'randomChoices': [
                            0x2,
                            0x4,
                            0x5,
                            0x7
                        ]
                    }
                ],
                'bossOverride': { 'bossForceStartIndex': 0x0 }
            },
            'Tanksmith': {
                'health': 0x1e,
                'damage': 0x32,
                'radius': 0x2a,
                'speed': 0x1,
                'mass': 1.2,
                'personality': 'stationary',
                'detectionDistance': 0x2bc,
                'drops': {}
            },
            'Rock\x20Tank': {
                'health': 0x1e,
                'damage': 0xa,
                'radius': 0x28,
                'speed': 0.76,
                'mass': 0x4,
                'personality': 'stationary',
                'detectionDistance': 0x23a,
                'drops': {
                    'Rock': [
                        0.15,
                        0x0
                    ],
                    'scrap\x20barrel': [
                        0.05,
                        0x0
                    ]
                },
                'spawnType': 'RockMissile'
            },
            'RockMissile': {
                'health': 0xa,
                'damage': 0x8,
                'radius': 0x28 * 0.4,
                'speed': 0x1c,
                'mass': 0x2,
                'xp': 0x0,
                'personality': 'projectile',
                'drops': {},
                'collideOtherEnemies': ![]
            },
            'BossRose': {
                'health': 0x5,
                'damage': 0xa,
                'radius': 0x18,
                'speed': 0x0,
                'mass': 0x2,
                'xp': 0x0,
                'personality': 'stationary',
                'drops': {},
                'collideOtherEnemies': ![]
            },
            'BossRose2': {
                'health': 0xa,
                'damage': 0xa,
                'radius': 0x18,
                'speed': 0x0,
                'mass': 0x2,
                'xp': 0x0,
                'personality': 'stationary',
                'drops': {},
                'collideOtherEnemies': ![]
            },
            'BossBud': {
                'health': 0xa,
                'damage': 0xa,
                'radius': 0x12,
                'speed': 0x3,
                'mass': 0x2,
                'xp': 0x0,
                'personality': 'stationary',
                'drops': {},
                'collideOtherEnemies': !![]
            },
            'BossTrident': {
                'health': 0xa,
                'damage': 0xa,
                'radius': 0x12,
                'speed': 0x3,
                'mass': 0x2,
                'xp': 0x0,
                'personality': 'stationary',
                'drops': {},
                'collideOtherEnemies': !![]
            },
            'BigDesertMissile': {
                'health': 0x64,
                'damage': 0x64,
                'radius': 0x19 * 0x2,
                'speed': 0x10,
                'mass': 0xc8,
                'xp': 0x0,
                'personality': 'projectile',
                'drops': {},
                'collideOtherEnemies': ![]
            },
            'BiggestDesertMissile': {
                'health': 0x64,
                'damage': 0x64,
                'radius': 0x28 * 0x2,
                'speed': 0x10,
                'mass': 0xc8,
                'xp': 0x0,
                'personality': 'projectile',
                'drops': {},
                'collideOtherEnemies': ![]
            },
            'BigRockMissile': {
                'health': 0x64,
                'damage': 0x64,
                'radius': 0x28 * 0x2,
                'speed': 0x10,
                'mass': 0xc8,
                'xp': 0x0,
                'personality': 'projectile',
                'drops': {},
                'collideOtherEnemies': ![]
            },
            'Spider': {
                'health': 0x1e,
                'damage': 0x19,
                'radius': 0x14,
                'speed': 1.8,
                'mass': 0.8,
                'personality': 'aggressive',
                'detectionDistance': 0x2bc,
                'drops': {
                    'Faster': [
                        0.25,
                        0x0
                    ],
                    'Web': [
                        0.25,
                        0x2
                    ],
                    'Third\x20Eye': [
                        0.02,
                        0x4
                    ]
                },
                'boss': [
                    {
                        'type': 'spawnGrows',
                        'cooldown': 0x5,
                        'spawnType': 'Spider'
                    },
                    {
                        'type': 'spawnGrows',
                        'cooldown': 0x5,
                        'spawnType': 'Spider'
                    },
                    {
                        'type': 'spawnGrows',
                        'cooldown': 0x5,
                        'spawnType': 'Spider'
                    },
                    {
                        'type': 'spawnGrows',
                        'cooldown': 0x5,
                        'spawnType': 'Spider'
                    },
                    {
                        'type': 'spawnGrows',
                        'cooldown': 0x5,
                        'spawnType': 'Spider'
                    },
                    {
                        'type': 'spawnGrows',
                        'cooldown': 0x5,
                        'spawnType': 'Spider'
                    },
                    {
                        'type': 'spawnGrows',
                        'cooldown': 0x5,
                        'spawnType': 'Spider'
                    },
                    {
                        'type': 'spawnGrows',
                        'cooldown': 0x5,
                        'spawnType': 'Spider'
                    },
                    {
                        'type': 'spawnGrows',
                        'cooldown': 0x5,
                        'spawnType': 'Spider'
                    },
                    {
                        'type': 'spawnGrows',
                        'cooldown': 0x5,
                        'spawnType': 'Spider'
                    },
                    {
                        'type': 'spawnGrows',
                        'cooldown': 0x5,
                        'spawnType': 'Spider'
                    },
                    {
                        'type': 'spawnGrows',
                        'cooldown': 0x5,
                        'spawnType': 'Spider'
                    },
                    {
                        'type': 'aggroDifferent',
                        'cooldown': 0x0,
                        'detectionType': 'random'
                    },
                    {
                        'type': 'chaseAggro',
                        'cooldown': 0x41,
                        'turnSpeed': 0x1,
                        'randomChoices': [
                            0xd,
                            0xc,
                            0xd,
                            0xe
                        ]
                    },
                    {
                        'type': 'spawnGrows',
                        'cooldown': 0x0,
                        'spawnType': 'Spider',
                        'randomChoices': [0xc]
                    }
                ],
                'bossOverride': {
                    'bossForceStartIndex': 0x0,
                    'childrenRotateSpeed': -0.033,
                    'childrenDistance': 0x21c,
                    'childrenWanderAngle': ![],
                    'childrenWanderDistance': ![],
                    'spawnRarityOffset': 0x2,
                    'spawnAmount': 0x3,
                    'speed': 1.68,
                    'health': 0x19
                }
            },
            'Gloomcrawler': {
                'health': 27.5,
                'damage': 0x1e,
                'radius': 0x18,
                'speed': 2.1,
                'mass': 0.8,
                'personality': 'aggressive',
                'detectionDistance': 0x2e4,
                'drops': {
                    'Faster': [
                        0.25,
                        0x0
                    ],
                    'Neurotoxin': [
                        0.05,
                        0x7
                    ],
                    'Bloodshot\x20Eye': [
                        0.01,
                        0x4
                    ]
                },
                'boss': [
                    {
                        'type': 'spawnGrows',
                        'cooldown': 0x5,
                        'spawnType': 'Gloomcrawler'
                    },
                    {
                        'type': 'spawnGrows',
                        'cooldown': 0x5,
                        'spawnType': 'Gloomcrawler'
                    },
                    {
                        'type': 'spawnGrows',
                        'cooldown': 0x5,
                        'spawnType': 'Gloomcrawler'
                    },
                    {
                        'type': 'spawnGrows',
                        'cooldown': 0x5,
                        'spawnType': 'Gloomcrawler'
                    },
                    {
                        'type': 'spawnGrows',
                        'cooldown': 0x5,
                        'spawnType': 'Gloomcrawler'
                    },
                    {
                        'type': 'spawnGrows',
                        'cooldown': 0x5,
                        'spawnType': 'Gloomcrawler'
                    },
                    {
                        'type': 'spawnGrows',
                        'cooldown': 0x5,
                        'spawnType': 'Gloomcrawler'
                    },
                    {
                        'type': 'spawnGrows',
                        'cooldown': 0x5,
                        'spawnType': 'Gloomcrawler'
                    },
                    {
                        'type': 'spawnGrows',
                        'cooldown': 0x5,
                        'spawnType': 'Gloomcrawler'
                    },
                    {
                        'type': 'spawnGrows',
                        'cooldown': 0x5,
                        'spawnType': 'Gloomcrawler'
                    },
                    {
                        'type': 'spawnGrows',
                        'cooldown': 0x5,
                        'spawnType': 'Gloomcrawler'
                    },
                    {
                        'type': 'spawnGrows',
                        'cooldown': 0x5,
                        'spawnType': 'Gloomcrawler'
                    },
                    {
                        'type': 'aggroDifferent',
                        'cooldown': 0x0,
                        'detectionType': 'random'
                    },
                    {
                        'type': 'chaseAggro',
                        'cooldown': 0x41,
                        'turnSpeed': 0x1,
                        'randomChoices': [
                            0xd,
                            0xc,
                            0xd,
                            0xe
                        ]
                    },
                    {
                        'type': 'spawnGrows',
                        'cooldown': 0x0,
                        'spawnType': 'Gloomcrawler',
                        'randomChoices': [0xc]
                    }
                ],
                'bossOverride': {
                    'bossForceStartIndex': 0x0,
                    'childrenRotateSpeed': -0.033,
                    'childrenDistance': 0x21c,
                    'childrenWanderAngle': ![],
                    'childrenWanderDistance': ![],
                    'spawnRarityOffset': 0x2,
                    'spawnAmount': 0x3,
                    'speed': 3.6,
                    'health': 0x19
                }
            },
            'Tarantula': {
                'health': 0x12,
                'damage': 0xc,
                'radius': 0x14,
                'speed': 3.6,
                'poison': [
                    0x64,
                    0x32
                ],
                'mass': 0.6,
                'personality': 'neutral',
                'drops': {
                    'Faster': [
                        0.25,
                        0x0
                    ],
                    'Iris': [
                        0.25,
                        0x2
                    ],
                    'Toxin': [
                        0.1,
                        0x7
                    ]
                },
                'boss': [
                    {
                        'type': 'spawnGrows',
                        'cooldown': 0x5,
                        'spawnType': 'Tarantula'
                    },
                    {
                        'type': 'spawnGrows',
                        'cooldown': 0x5,
                        'spawnType': 'Tarantula'
                    },
                    {
                        'type': 'spawnGrows',
                        'cooldown': 0x5,
                        'spawnType': 'Tarantula'
                    },
                    {
                        'type': 'spawnGrows',
                        'cooldown': 0x5,
                        'spawnType': 'Tarantula'
                    },
                    {
                        'type': 'spawnGrows',
                        'cooldown': 0x5,
                        'spawnType': 'Tarantula'
                    },
                    {
                        'type': 'spawnGrows',
                        'cooldown': 0x5,
                        'spawnType': 'Tarantula'
                    },
                    {
                        'type': 'spawnGrows',
                        'cooldown': 0x5,
                        'spawnType': 'Tarantula'
                    },
                    {
                        'type': 'spawnGrows',
                        'cooldown': 0x5,
                        'spawnType': 'Tarantula'
                    },
                    {
                        'type': 'spawnGrows',
                        'cooldown': 0x5,
                        'spawnType': 'Tarantula'
                    },
                    {
                        'type': 'spawnGrows',
                        'cooldown': 0x5,
                        'spawnType': 'Tarantula'
                    },
                    {
                        'type': 'spawnGrows',
                        'cooldown': 0x5,
                        'spawnType': 'Tarantula'
                    },
                    {
                        'type': 'spawnGrows',
                        'cooldown': 0x5,
                        'spawnType': 'Tarantula'
                    },
                    {
                        'type': 'aggroDifferent',
                        'cooldown': 0x0,
                        'detectionType': 'random'
                    },
                    {
                        'type': 'chaseAggro',
                        'cooldown': 0x41,
                        'turnSpeed': 0x1,
                        'randomChoices': [
                            0xc,
                            0xd,
                            0xe,
                            0xf
                        ]
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 1.5,
                        'cooldown': 0x5a,
                        'rotateSpeed': Math['PI'] / 0xf,
                        'spawnType': 'ScorpionMissile',
                        'spawnDistance': 0x1,
                        'raritiesBelow': 0x1,
                        'randomChoices': [
                            0xc,
                            0xf
                        ]
                    },
                    {
                        'type': 'spawnGrows',
                        'cooldown': 0x0,
                        'spawnType': 'Tarantula',
                        'randomChoices': [0xc]
                    }
                ],
                'bossOverride': {
                    'bossForceStartIndex': 0x0,
                    'childrenRotateSpeed': 0.013,
                    'childrenDistance': 0x258,
                    'childrenWanderAngle': ![],
                    'childrenWanderDistance': ![],
                    'spawnRarityOffset': 0x2,
                    'spawnAmount': 0x2,
                    'speed': 2.7
                }
            },
            'Centipede': {
                'health': 0xa,
                'damage': 0xa,
                'radius': 0x1b,
                'speed': 1.5,
                'mass': 0.6,
                'personality': 'passive',
                'drops': {
                    'Leaf': [
                        0.1,
                        0x0
                    ],
                    'Peas': [
                        0.08,
                        0x0
                    ]
                },
                'boss': [
                    {
                        'type': 'spawnAround',
                        'spawnCooldown': 0x1e,
                        'cooldown': 0x3c,
                        'spawnType': 'Centipede',
                        'raritiesBelow': 0x2,
                        'randomChoices': [
                            0x0,
                            0x1,
                            0x2,
                            0x3,
                            0x4,
                            0x5
                        ]
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0xa,
                        'cooldown': 0x3c,
                        'rotateSpeed': 0.2,
                        'spawnType': 'PeasMissile',
                        'raritiesBelow': 0x1,
                        'spawnDistance': 0x1,
                        'randomChoices': [
                            0x0,
                            0x1,
                            0x2,
                            0x3,
                            0x4,
                            0x5
                        ]
                    },
                    {
                        'type': 'fly',
                        'cooldown': 0x3c,
                        'speedMultiplier': 0x5,
                        'randomChoices': [
                            0x0,
                            0x1,
                            0x2,
                            0x3,
                            0x4,
                            0x5
                        ]
                    },
                    {
                        'type': 'growAndShrink',
                        'switchTimer': 0xf,
                        'cooldown': 0x3c,
                        'magnitude': 0x7,
                        'randomChoices': [
                            0x0,
                            0x1,
                            0x2,
                            0x3,
                            0x4,
                            0x5
                        ]
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0xc,
                        'cooldown': 0x3c,
                        'spawnAmount': 0x2,
                        'spawnSpacing': Math['PI'] * 0x2,
                        'rotateSpeed': 0.2,
                        'spawnType': 'Missile',
                        'raritiesBelow': 0x1,
                        'spawnDistance': 0.7,
                        'randomChoices': [
                            0x0,
                            0x1,
                            0x2,
                            0x3,
                            0x4,
                            0x5
                        ]
                    },
                    {
                        'type': 'stationary',
                        'cooldown': 0x50,
                        'randomChoices': [
                            0x0,
                            0x1,
                            0x2,
                            0x3,
                            0x4,
                            0x5
                        ]
                    }
                ],
                'bossOverride': { 'speed': 1.8 }
            },
            'Evil\x20Centipede': {
                'health': 0xa,
                'damage': 0xf,
                'radius': 0x1b,
                'speed': 1.5,
                'mass': 0.6,
                'detectionDistance': 0x2bc,
                'personality': 'aggressive',
                'drops': {
                    'Iris': [
                        0.1,
                        0x0
                    ],
                    'Grapes': [
                        0.08,
                        0x0
                    ]
                },
                'boss': [
                    {
                        'type': 'spawnAround',
                        'spawnCooldown': 0x1e,
                        'cooldown': 0x3c,
                        'spawnType': 'Evil\x20Centipede',
                        'raritiesBelow': 0x2,
                        'randomChoices': [
                            0x0,
                            0x1,
                            0x2,
                            0x3,
                            0x4,
                            0x5
                        ]
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x1f,
                        'cooldown': 0x3c,
                        'spawnAmount': 0x4,
                        'spawnSpacing': Math['PI'] * 0x2,
                        'rotateSpeed': 0.2,
                        'spawnType': 'GrapesMissile',
                        'raritiesBelow': 0x1,
                        'spawnDistance': 0x1,
                        'randomChoices': [
                            0x0,
                            0x1,
                            0x2,
                            0x3,
                            0x4,
                            0x5
                        ]
                    },
                    {
                        'type': 'fly',
                        'cooldown': 0x3c,
                        'speedMultiplier': 0x5,
                        'randomChoices': [
                            0x0,
                            0x1,
                            0x2,
                            0x3,
                            0x4,
                            0x5
                        ]
                    },
                    {
                        'type': 'growAndShrink',
                        'switchTimer': 0x5,
                        'cooldown': 0x3c,
                        'magnitude': 0x1e,
                        'randomChoices': [
                            0x0,
                            0x1,
                            0x2,
                            0x3,
                            0x4,
                            0x5
                        ]
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x6,
                        'cooldown': 0x3c,
                        'spawnAmount': 0x1,
                        'spawnSpacing': 0x0,
                        'rotateSpeed': 0.2,
                        'spawnType': 'ScorpionMissile',
                        'raritiesBelow': 0x1,
                        'spawnDistance': 0.7,
                        'randomChoices': [
                            0x0,
                            0x1,
                            0x2,
                            0x3,
                            0x4,
                            0x5
                        ]
                    },
                    {
                        'type': 'stationary',
                        'cooldown': 0x64,
                        'randomChoices': [
                            0x0,
                            0x1,
                            0x2,
                            0x3,
                            0x4,
                            0x5
                        ]
                    }
                ],
                'bossOverride': { 'speed': 1.8 }
            },
            'Square': {
                'health': 0x2d,
                'damage': 5.5,
                'radius': 0x1e,
                'speed': 0.8,
                'mass': 0.2,
                'personality': 'passive',
                'drops': {
                    'Square': [
                        0x1,
                        0x0
                    ]
                },
                'boss': [{
                        'type': 'stationary',
                        'cooldown': 0xf4240
                    }],
                'bossOverride': { 'bossForceStartIndex': 0x0 },
                'xp': 0x64
            },
            'Pentagon': {
                'health': 0x3c,
                'damage': 5.5,
                'radius': 0x1e,
                'speed': 0.8,
                'mass': -0x8,
                'personality': 'passive',
                'drops': {
                    'Pentagon': [
                        0x1,
                        0x0
                    ]
                },
                'xp': 0x3e8
            },
            'Hexagon': {
                'health': 0xb4,
                'damage': 7.5,
                'radius': 0x2d,
                'speed': 0.8,
                'mass': 0.5,
                'personality': 'passive',
                'drops': {
                    'Hexagon': [
                        0x1,
                        0x0
                    ]
                },
                'xp': 0x2710
            },
            'Dummy': {
                'health': 0x3b9aca00,
                'damage': 0xa,
                'radius': 0x78,
                'speed': 0x0,
                'mass': 0xf4240,
                'personality': 'stationary',
                'drops': {
                    'Basic': [
                        0x1,
                        0x0
                    ]
                }
            },
            'Missile': {
                'health': 0x4,
                'damage': 0xe,
                'radius': 0xb,
                'speed': 0x1e,
                'mass': 0.7,
                'xp': 0x0,
                'personality': 'projectile',
                'drops': {},
                'collideOtherEnemies': ![]
            },
            'GrasshopperMissile': {
                'health': 0x4,
                'damage': 0xa,
                'radius': 0xa,
                'speed': 0x32,
                'mass': 0.45,
                'xp': 0x0,
                'personality': 'projectile',
                'drops': {},
                'collideOtherEnemies': ![]
            },
            'PeasMissile': {
                'health': 0x64,
                'damage': 0x4,
                'radius': 0x8,
                'speed': 0x3c,
                'mass': 0.3,
                'xp': 0x0,
                'personality': 'projectile',
                'drops': {},
                'collideOtherEnemies': ![]
            },
            'GrapesMissile': {
                'health': 0x64,
                'damage': 0x1,
                'poison': [
                    0xc,
                    0x3
                ],
                'radius': 0x8,
                'speed': 0x3c,
                'mass': 0.3,
                'xp': 0x0,
                'personality': 'projectile',
                'drops': {},
                'collideOtherEnemies': ![]
            },
            'BeeMissile': {
                'health': 0xa,
                'damage': 0x12,
                'radius': 0xb,
                'speed': 0x23,
                'mass': 0.5,
                'xp': 0x0,
                'personality': 'projectile',
                'drops': {},
                'collideOtherEnemies': ![]
            },
            'StarfishMissile': {
                'health': 0xf,
                'damage': 0xc,
                'radius': 0xb,
                'speed': 0x23,
                'mass': 0.5,
                'xp': 0x0,
                'personality': 'projectile',
                'drops': {},
                'collideOtherEnemies': ![]
            },
            'FireMissile': {
                'health': 0x4,
                'damage': 0xf,
                'poison': [
                    0x1e,
                    0xf
                ],
                'radius': 0xf,
                'speed': 0x1e,
                'mass': 0.5,
                'xp': 0x0,
                'personality': 'projectile',
                'drops': {},
                'collideOtherEnemies': ![]
            },
            'UrchinMissile': {
                'health': 0x4,
                'damage': 0x1,
                'poison': [
                    0xc,
                    0x3
                ],
                'radius': 0x9,
                'speed': 0x23,
                'mass': 0.3,
                'xp': 0x0,
                'personality': 'projectile',
                'drops': {},
                'collideOtherEnemies': ![]
            },
            'BossUrchinMissile': {
                'health': 0x16,
                'damage': 0x8,
                'poison': [
                    0x24,
                    0x9
                ],
                'radius': 0x8,
                'speed': 0x28,
                'mass': 0.3,
                'xp': 0x0,
                'personality': 'projectile',
                'drops': {},
                'collideOtherEnemies': ![]
            },
            'BigBossUrchinMissile': {
                'health': 0x64,
                'damage': 0x18,
                'poison': [
                    0x48,
                    0x12
                ],
                'radius': 0x15,
                'speed': 0x1e,
                'mass': 0.3,
                'xp': 0x0,
                'personality': 'projectile',
                'drops': {},
                'collideOtherEnemies': ![]
            },
            'ScorpionMissile': {
                'health': 0x1,
                'damage': 0x5,
                'poison': [
                    0x2a,
                    0xe
                ],
                'radius': 0x8,
                'speed': 0x1e,
                'mass': 0.5,
                'xp': 0x0,
                'personality': 'projectile',
                'drops': {},
                'collideOtherEnemies': ![]
            },
            'LocustMissile': {
                'health': 0x32,
                'damage': 0x14,
                'radius': 0xa,
                'speed': 0x1e,
                'mass': 0.5,
                'xp': 0x0,
                'personality': 'projectile',
                'drops': {},
                'collideOtherEnemies': ![]
            },
            'SplitLocustMissile': {
                'health': 0x5,
                'damage': 0x2,
                'radius': 0x6,
                'speed': 0x3c,
                'mass': 0.5,
                'xp': 0x0,
                'personality': 'projectile',
                'drops': {},
                'collideOtherEnemies': ![]
            },
            'DandelionMissile': {
                'health': 0x7,
                'damage': 0x3,
                'radius': 0x28 / 0x3,
                'speed': 0x1e,
                'mass': 0.5,
                'xp': 0x0,
                'personality': 'projectile',
                'drops': {},
                'collideOtherEnemies': ![],
                'healingReduction': 0.2
            },
            'BossDandelionMissile': {
                'health': 0x7,
                'damage': 0x3,
                'radius': 0x28 / 0x3,
                'speed': 0x1e,
                'mass': 0.5,
                'xp': 0x0,
                'personality': 'projectile',
                'drops': {},
                'collideOtherEnemies': ![],
                'healingReduction': 0.2
            },
            'Chris3773': {
                'health': 19.2,
                'damage': 19.2,
                'radius': 19.2,
                'speed': 1.92,
                'mass': 9.2,
                'detectionDistance': 0x3a1,
                'personality': 'aggressive',
                'drops': {
                    'Air': [
                        0x1,
                        0x0
                    ],
                    'Lightning': [
                        0x1,
                        0x0
                    ],
                    'Pincer': [
                        0x1,
                        0x0
                    ]
                }
            },
            'Bubble': {
                'health': 0x1,
                'damage': 0x3,
                'radius': 47.5,
                'speed': 0x0,
                'mass': 0.4,
                'personality': 'stationary',
                'drops': {
                    'Bubble': [
                        0.25,
                        0x0
                    ],
                    'Air': [
                        0x1,
                        0x0
                    ],
                    'Shiny\x20Bubble': [
                        0.1,
                        0xb
                    ]
                },
                'boss': [
                    {
                        'type': 'spawnAround',
                        'spawnCooldown': 8.3,
                        'cooldown': 0x96,
                        'spawnType': 'Bubble',
                        'raritiesBelow': 0x1
                    },
                    {
                        'type': 'growAndShrink',
                        'switchTimer': 0x64 / 0x4,
                        'cooldown': 0xc8 / 0x4,
                        'magnitude': 0x10
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x1,
                        'cooldown': 0x78,
                        'rotateSpeed': 0.2,
                        'spawnType': 'Bubble'
                    }
                ],
                'bossOverride': { 'bossForceStartIndex': 0x0 }
            },
            'Pearl': {
                'health': 0x9,
                'damage': 0xbe,
                'radius': 0x17,
                'speed': 0x0,
                'mass': 0x1,
                'personality': 'stationary',
                'agroState': 'hop',
                'drops': {
                    'Pearl': [
                        0.25,
                        0x0
                    ]
                }
            },
            'Stinger': {
                'health': 0x1,
                'damage': 0x17c,
                'radius': 0x13,
                'speed': 0x0,
                'mass': 0x1,
                'personality': 'stationary',
                'agroState': 'aggressive',
                'collideOtherEnemies': ![],
                'drops': {
                    'Stinger': [
                        0.25,
                        0x0
                    ]
                }
            },
            'PearlMissile': {
                'health': 0x28,
                'damage': 0x64,
                'radius': 0x12,
                'speed': 0x1e,
                'mass': 0x1,
                'personality': 'projectile',
                'drops': {},
                'collideOtherEnemies': ![]
            },
            'Shell': {
                'health': 0x3c,
                'damage': 0xf,
                'radius': 0x1e,
                'speed': 0x38,
                'mass': 0.8,
                'armor': -0.1,
                'personality': 'neutral',
                'agroState': 'hop',
                'drops': {
                    'Pearl': [
                        0.15,
                        0x0
                    ],
                    'Shell': [
                        0.25,
                        0x1
                    ],
                    'Magnet': [
                        0.02,
                        0x0
                    ]
                },
                'boss': [
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x4c4b40,
                        'cooldown': 0x3c,
                        'rotateSpeed': 0.5,
                        'spawnType': 'Shell',
                        'raritiesBelow': 0x1
                    },
                    {
                        'type': 'spawnGrows',
                        'cooldown': 0x1,
                        'spawnType': 'Pearl'
                    },
                    {
                        'type': 'spawnGrows',
                        'cooldown': 0x1,
                        'spawnType': 'Pearl'
                    },
                    {
                        'type': 'spawnGrows',
                        'cooldown': 0x1,
                        'spawnType': 'Pearl'
                    },
                    {
                        'type': 'spawnGrows',
                        'cooldown': 0x1,
                        'spawnType': 'Pearl'
                    },
                    {
                        'type': 'spawnGrows',
                        'cooldown': 0x1,
                        'spawnType': 'Pearl'
                    },
                    {
                        'type': 'aggroDifferent',
                        'cooldown': 0x0,
                        'detectionType': 'closest'
                    },
                    {
                        'type': 'shellAggro',
                        'cooldown': 0xc8
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x2,
                        'cooldown': 0x3c,
                        'rotateSpeed': 0.2,
                        'raritiesBelow': 0x4,
                        'spawnType': 'Shell'
                    },
                    {
                        'type': 'shellAggro',
                        'cooldown': 0xc8
                    },
                    {
                        'type': 'aggroDifferent',
                        'cooldown': 0x0,
                        'detectionType': 'closest'
                    },
                    {
                        'type': 'smallDash',
                        'cooldown': 0x50,
                        'dashLength': 0x3c,
                        'sizeChangeLength': 0x14,
                        'targetRadius': 0.2,
                        'dashSpeed': 0xa
                    },
                    {
                        'type': 'shellAggro',
                        'cooldown': 0xc8
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x1,
                        'cooldown': 0x3c,
                        'rotateSpeed': 0.2,
                        'raritiesBelow': 0x1,
                        'spawnType': 'PearlMissile'
                    },
                    {
                        'type': 'spawnGrows',
                        'cooldown': 0x1,
                        'spawnType': 'Pearl',
                        'randomChoices': [0x6]
                    }
                ],
                'bossOverride': {
                    'bossForceStartIndex': 0x0,
                    'childrenRotateSpeed': 0.046,
                    'childrenDistance': 0xa0,
                    'collideOtherEnemies': ![],
                    'childrenWanderAngle': ![],
                    'childrenWanderDistance': ![],
                    'spawnRarityOffset': 0x1,
                    'spawnAmount': 0x2,
                    'speed': 0x2c
                }
            },
            'Crab': {
                'health': 0x14,
                'damage': 0x23,
                'radius': 0x1f,
                'speed': 2.5,
                'mass': 0x1,
                'detectionDistance': 0x352,
                'personality': 'aggressive',
                'drops': {
                    'Claw': [
                        0.25,
                        0x0
                    ],
                    'Sand': [
                        0.03,
                        0x0
                    ],
                    'Carapace': [
                        0.03,
                        0x5
                    ]
                },
                'boss': [
                    {
                        'type': 'aggroDifferent',
                        'cooldown': 0x0,
                        'detectionType': 'closest'
                    },
                    {
                        'type': 'crabAggro',
                        'cooldown': 0x12c
                    },
                    {
                        'type': 'growAndShrink',
                        'switchTimer': 0x19,
                        'cooldown': 0x32,
                        'magnitude': 0x10
                    },
                    {
                        'type': 'smallDash',
                        'cooldown': 0xf0,
                        'dashLength': 0x28,
                        'sizeChangeLength': 0x28,
                        'targetRadius': 0.2,
                        'dashSpeed': 0x9
                    },
                    {
                        'type': 'shockwave',
                        'cooldown': 0x0
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x5,
                        'cooldown': 0x78,
                        'rotateSpeed': 0.2,
                        'raritiesBelow': 0x4,
                        'spawnType': 'Crab'
                    }
                ],
                'bossOverride': { 'bossForceStartIndex': 0x0 }
            },
            'Starfish': {
                'health': 0x1a,
                'damage': 0x19,
                'radius': 0x22,
                'speed': 1.65,
                'mass': 0x1,
                'healing': 0.007,
                'detectionDistance': 0x320,
                'personality': 'aggressive',
                'drops': {
                    'Starfish': [
                        0.15,
                        0x0
                    ],
                    'Salt': [
                        0.15,
                        0x1
                    ],
                    'Sand': [
                        0.02,
                        0x0
                    ]
                },
                'boss': [
                    {
                        'type': 'heal',
                        'heal': 0.005,
                        'cooldown': 0x3c,
                        'randomChoices': [0x3]
                    },
                    {
                        'type': 'aggroDifferent',
                        'cooldown': 0x0,
                        'detectionType': 'closest'
                    },
                    {
                        'type': 'chaseAggroScared',
                        'cooldown': 0x78,
                        'toSpawnAround': !![],
                        'spawnCooldown': 0x26,
                        'spawnType': 'Starfish'
                    },
                    {
                        'type': 'moveCenter',
                        'cooldown': 0x78,
                        'speedMult': 2.6
                    },
                    {
                        'type': 'growAndShrink',
                        'switchTimer': 0x8,
                        'cooldown': 0x20,
                        'magnitude': 0x6 * 0x2d / 0x20
                    },
                    {
                        'type': 'spawnGrows',
                        'cooldown': 0x1,
                        'spawnType': 'Starfish'
                    },
                    {
                        'type': 'aggroDifferent',
                        'cooldown': 0x0,
                        'detectionType': 'closest',
                        'randomChoices': [
                            0x7,
                            0x8
                        ]
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x5,
                        'cooldown': 0x5a,
                        'spawnAmount': 0x5,
                        'spawnSpacing': Math['PI'] * 0x2,
                        'rotateSpeed': 0.03,
                        'spawnType': 'StarfishMissile',
                        'raritiesBelow': 0x1,
                        'spawnDistance': 0x0,
                        'randomChoices': [0x9]
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x5,
                        'cooldown': 0x5a,
                        'spawnAmount': 0x5,
                        'spawnSpacing': Math['PI'] * 0x2,
                        'rotateSpeed': -0.03,
                        'spawnType': 'StarfishMissile',
                        'raritiesBelow': 0x1,
                        'spawnDistance': 0x0,
                        'randomChoices': [0x9]
                    },
                    {
                        'type': 'chaseAggroScared',
                        'toSpawnAround': !![],
                        'spawnCooldown': 0x41,
                        'cooldown': 0x12c,
                        'spawnType': 'Starfish',
                        'randomChoices': [0x6]
                    }
                ],
                'bossOverride': {
                    'changeStateOnHpThresholds': { 0.2: [0x0] },
                    'bossForceStartIndex': 0x1,
                    'childrenRotateSpeed': 0.046,
                    'childrenDistance': 0x8e,
                    'collideOtherEnemies': ![],
                    'childrenWanderAngle': ![],
                    'childrenWanderDistance': ![],
                    'spawnRarityOffset': 0x1,
                    'spawnAmount': 0x5,
                    'speed': 0.84,
                    'healing': 0.0058
                }
            },
            'Pufferfish': {
                'health': 0x19,
                'damage': 0x19,
                'radius': 0x1e,
                'speed': 1.8,
                'mass': 0x1,
                'detectionDistance': 0x384,
                'personality': 'aggressive',
                'drops': {
                    'Salt': [
                        0.15,
                        0x1
                    ],
                    'Dark\x20Spine': [
                        0.05,
                        0x7
                    ],
                    'Spikes': [
                        0.01,
                        0x0
                    ]
                }
            },
            'Brisingida': {
                'health': 0x1e,
                'damage': 0x1e,
                'radius': 0x22,
                'speed': 1.9,
                'mass': 1.2,
                'healing': 0.009,
                'detectionDistance': 0x384,
                'personality': 'aggressive',
                'drops': {
                    'Brisingida': [
                        0.1,
                        0x0
                    ],
                    'Salt': [
                        0.25,
                        0x1
                    ],
                    'Sand': [
                        0.25,
                        0x0
                    ]
                }
            },
            'Sponge': {
                'health': 0x19,
                'damage': 0xa,
                'radius': 0x23,
                'speed': 0x0,
                'mass': 0x6,
                'drops': {
                    'Sponge': [
                        0.25,
                        0x0
                    ],
                    'Air': [
                        0.25,
                        0x0
                    ],
                    'Waterlogged\x20Compass': [
                        0.03,
                        0x6
                    ]
                },
                'boss': [{
                        'type': 'growAndShrink',
                        'switchTimer': 0x19,
                        'cooldown': 0x4c4b40,
                        'magnitude': 0x10
                    }],
                'bossOverride': { 'bossForceStartIndex': 0x0 }
            },
            'Mushroom': {
                'health': 0x28,
                'damage': 0xa,
                'poison': [
                    0x14,
                    0x14
                ],
                'radius': 0x1e,
                'speed': 0x0,
                'mass': 0x3,
                'drops': {
                    'Spore': [
                        0.25,
                        0x0
                    ]
                }
            },
            'MushroomMissile': {
                'health': 0x4,
                'damage': 0x4,
                'poison': [
                    0xa,
                    0xa
                ],
                'radius': 0xf,
                'speed': 0x48,
                'mass': 0.6,
                'xp': 0x0,
                'personality': 'projectile',
                'drops': {},
                'collideOtherEnemies': ![]
            },
            'Coral': {
                'health': 0xc,
                'damage': 0xa,
                'radius': 0x23,
                'speed': 0x0,
                'mass': 0x4,
                'drops': {
                    'Coral': [
                        0.25,
                        0x5
                    ],
                    'Dark\x20Spine': [
                        0.25,
                        0x7
                    ],
                    'Amulet\x20of\x20Time': [
                        0.15,
                        0xc,
                        0x10
                    ]
                },
                'boss': [{
                        'type': 'killtime',
                        'cooldown': 0x3b9aca00,
                        'randomChoices': [0x0]
                    }],
                'bossOverride': { 'bossForceStartIndex': 0x0 }
            },
            'BudLeech': {
                'health': 0x12,
                'damage': 0x26,
                'radius': 0x14,
                'speed': 4.5,
                'mass': 1.2,
                'detectionDistance': 0x2bc,
                'drops': {
                    'Fangs': [
                        0.25,
                        0x0
                    ],
                    'Faster': [
                        0.25,
                        0x0
                    ]
                }
            },
            'Leech': {
                'health': 0x12,
                'damage': 0x13,
                'radius': 0x14,
                'speed': 0x3,
                'mass': 1.2,
                'detectionDistance': 0x2bc,
                'drops': {
                    'Fangs': [
                        0.25,
                        0x0
                    ],
                    'Faster': [
                        0.25,
                        0x0
                    ]
                },
                'boss': [{
                        'type': 'leech',
                        'cooldown': 0xe8d4a51000,
                        'turnSpeed': 0x1,
                        'spawnCooldown': 0x6,
                        'rotateSpeed': Math['PI'] / 0x14,
                        'spawnType': 'Missile',
                        'spawnDistance': 0x1,
                        'raritiesBelow': 0x1
                    }],
                'bossOverride': { 'bossForceStartIndex': 0x0 }
            },
            'Dark\x20Electric\x20Eel': {
                'health': 0x24,
                'damage': 0x1e,
                'radius': 0x28,
                'speed': 0x5,
                'mass': 1.8,
                'detectionDistance': 0x320,
                'drops': {
                    'Lightning': [
                        0x1,
                        0x0
                    ],
                    'Fangs': [
                        0x1,
                        0x0
                    ],
                    'Blood\x20Jolt': [
                        0.5,
                        0xa
                    ]
                },
                'boss': [{
                        'type': 'leech',
                        'cooldown': 0xe8d4a51000,
                        'turnSpeed': 0x1,
                        'spawnCooldown': 0x6,
                        'rotateSpeed': Math['PI'] / 0x14,
                        'spawnType': 'Missile',
                        'spawnDistance': 0x1,
                        'raritiesBelow': 0x1
                    }],
                'bossOverride': { 'bossForceStartIndex': 0x0 }
            },
            'Electric\x20Eel': {
                'health': 0x12,
                'damage': 0xf,
                'radius': 0x19,
                'speed': 2.6,
                'mass': 1.3,
                'detectionDistance': 0x258,
                'drops': {
                    'Lightning': [
                        0.15,
                        0x0
                    ],
                    'Faster': [
                        0.25,
                        0x0
                    ],
                    'Jolt': [
                        0.15,
                        0x0
                    ]
                },
                'boss': [{
                        'type': 'leech',
                        'cooldown': 0xe8d4a51000,
                        'turnSpeed': 0x1,
                        'spawnCooldown': 0x6,
                        'rotateSpeed': Math['PI'] / 0x14,
                        'spawnType': 'Missile',
                        'spawnDistance': 0x1,
                        'raritiesBelow': 0x1
                    }],
                'bossOverride': { 'bossForceStartIndex': 0x0 }
            },
            'Shiny\x20Electric\x20Eel': {
                'health': 0x12,
                'damage': 0xf,
                'radius': 0x19,
                'speed': 2.6,
                'mass': 1.3,
                'detectionDistance': 0x258,
                'drops': {
                    'Shiny\x20Lightning': [
                        0.6,
                        0x0
                    ],
                    'Faster': [
                        0.25,
                        0x0
                    ],
                    'Jolt': [
                        0.15,
                        0x0
                    ]
                },
                'boss': [{
                        'type': 'leech',
                        'cooldown': 0xe8d4a51000,
                        'turnSpeed': 0x1,
                        'spawnCooldown': 0x6,
                        'rotateSpeed': Math['PI'] / 0x14,
                        'spawnType': 'Missile',
                        'spawnDistance': 0x1,
                        'raritiesBelow': 0x1
                    }],
                'bossOverride': { 'bossForceStartIndex': 0x0 },
                'xp': 2.5
            },
            'Jellyfish': {
                'health': 0x24,
                'damage': 0xa,
                'radius': 37.5,
                'speed': 0.75,
                'mass': 0x2,
                'detectionDistance': 0x4b0,
                'drops': {
                    'Lightning': [
                        0.15,
                        0x0
                    ],
                    'Jelly': [
                        0.25,
                        0x0
                    ],
                    'Jellyfish\x20Egg': [
                        0.01,
                        0xb,
                        0xe
                    ]
                },
                'boss': [
                    {
                        'type': 'aggroDifferent',
                        'cooldown': 0x0,
                        'detectionType': 'closest'
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x5,
                        'cooldown': 0x1e,
                        'rotateSpeed': 0.2,
                        'spawnType': 'Jellyfish',
                        'raritiesBelow': 0x3
                    },
                    {
                        'type': 'shockwave',
                        'cooldown': 0x0
                    },
                    {
                        'type': 'chaseZap',
                        'cooldown': 0x78,
                        'turnSpeed': 0.04
                    },
                    {
                        'type': 'generateShock',
                        'cooldown': 0x0
                    },
                    {
                        'type': 'chaseZap',
                        'cooldown': 0x3c,
                        'turnSpeed': 0.04
                    },
                    {
                        'type': 'deployShock',
                        'cooldown': 0x0
                    },
                    {
                        'type': 'chaseZap',
                        'cooldown': 0x5a,
                        'turnSpeed': 0.04
                    }
                ],
                'bossOverride': { 'bossForceStartIndex': 0x0 }
            },
            'Neuroflare': {
                'health': 0x2d,
                'damage': 0x14,
                'radius': 38.5,
                'speed': 0x2,
                'mass': 0x2,
                'detectionDistance': 0x4e2,
                'drops': {
                    'Lightning': [
                        0.25,
                        0x0
                    ],
                    'Jelly': [
                        0.25,
                        0x0
                    ],
                    'Neuroflare\x20Egg': [
                        0.01,
                        0xd,
                        0x13
                    ]
                }
            },
            'Sea\x20Urchin': {
                'health': 0x19,
                'damage': 0x19,
                'radius': 0x21,
                'speed': 2.2,
                'mass': 1.2,
                'detectionDistance': 0x2bc,
                'drops': {
                    'Missile': [
                        0.25,
                        0x0
                    ],
                    'Cutter': [
                        0.05,
                        0x7
                    ],
                    'Coral': [
                        0.05,
                        0x5
                    ]
                },
                'boss': [
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x1e,
                        'cooldown': 0x3c,
                        'spawnAmount': 0x5,
                        'spawnSpacing': Math['PI'] * 0x2,
                        'rotateSpeed': 0x0,
                        'spawnType': 'Invincible\x20Urchin',
                        'raritiesBelow': 0x2,
                        'spawnDistance': 0x1
                    },
                    {
                        'type': 'moveCenter',
                        'cooldown': 0x5a,
                        'speedMult': 0x2
                    },
                    {
                        'type': 'heal',
                        'heal': 0.005,
                        'cooldown': 0x2d
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x1,
                        'cooldown': 0x78,
                        'spawnAmount': 0x2,
                        'spawnSpacing': Math['PI'] * 0x2,
                        'rotateSpeed': 0.2,
                        'spawnType': 'BossUrchinMissile',
                        'raritiesBelow': 0x1
                    },
                    {
                        'type': 'aggroDifferent',
                        'cooldown': 0x0,
                        'detectionType': 'random'
                    },
                    {
                        'type': 'complexShoot',
                        'shoot': [
                            {
                                'spawnCooldown': 0x2,
                                'spawnAmount': 0x2,
                                'spawnSpacing': Math['PI'] * 0x2,
                                'rotateSpeed': 0.2,
                                'spawnType': 'BossUrchinMissile',
                                'raritiesBelow': 0x1
                            },
                            {
                                'spawnCooldown': 0x2,
                                'spawnAmount': 0x2,
                                'spawnSpacing': Math['PI'] * 0x2,
                                'rotateSpeed': -0.2,
                                'spawnType': 'BossUrchinMissile',
                                'raritiesBelow': 0x2
                            },
                            {
                                'aim': !![],
                                'spawnCooldown': 0x50,
                                'predictionChance': 0x0,
                                'spawnType': 'BigBossUrchinMissile',
                                'raritiesBelow': 0x0
                            }
                        ],
                        'cooldown': 0xf0
                    },
                    {
                        'type': 'complexShoot',
                        'shoot': [
                            {
                                'spawnCooldown': 0xc,
                                'spawnAmount': 0x6,
                                'spawnSpacing': Math['PI'] * 0x2,
                                'rotateSpeed': 0.05,
                                'spawnType': 'BossUrchinMissile',
                                'raritiesBelow': 0x2
                            },
                            {
                                'spawnCooldown': 0xc,
                                'spawnAmount': 0x6,
                                'spawnSpacing': Math['PI'] * 0x2,
                                'rotateSpeed': -0.05,
                                'spawnType': 'BossUrchinMissile',
                                'raritiesBelow': 0x1
                            },
                            {
                                'spawnCooldown': 0x18,
                                'spawnAmount': 0x18,
                                'spawnSpacing': Math['PI'] * 0x2,
                                'rotateSpeed': 0.1,
                                'spawnType': 'BossUrchinMissile',
                                'raritiesBelow': 0x2
                            }
                        ],
                        'cooldown': 0xf0
                    },
                    {
                        'type': 'complexShoot',
                        'shoot': [
                            {
                                'spawnCooldown': 0xb,
                                'spawnAmount': 0x3,
                                'spawnSpacing': 0.5,
                                'rotateSpeed': 0.02,
                                'spawnType': 'BossUrchinMissile',
                                'raritiesBelow': 0x1
                            },
                            {
                                'spawnCooldown': 0xb,
                                'spawnAmount': 0x3,
                                'spawnSpacing': 0.5,
                                'rotateSpeed': 0.04,
                                'spawnType': 'BossUrchinMissile',
                                'raritiesBelow': 0x2
                            },
                            {
                                'spawnCooldown': 0xb,
                                'spawnAmount': 0x3,
                                'spawnSpacing': 0.5,
                                'rotateSpeed': 0.06,
                                'spawnType': 'BossUrchinMissile',
                                'raritiesBelow': 0x1
                            },
                            {
                                'spawnCooldown': 0xb,
                                'spawnAmount': 0x3,
                                'spawnSpacing': 0.5,
                                'rotateSpeed': 0.08,
                                'spawnType': 'BossUrchinMissile',
                                'raritiesBelow': 0x2
                            }
                        ],
                        'cooldown': 0xf0
                    },
                    {
                        'type': 'aggroDifferent',
                        'cooldown': 0x0,
                        'detectionType': 'random'
                    },
                    {
                        'type': 'complexShoot',
                        'shoot': [
                            {
                                'aim': !![],
                                'spawnCooldown': 0x12,
                                'predictionChance': 0x1,
                                'spawnType': 'BigBossUrchinMissile',
                                'raritiesBelow': 0x2
                            },
                            {
                                'spawnCooldown': 0x4,
                                'spawnAmount': 0x4,
                                'spawnSpacing': Math['PI'] * 0x2,
                                'rotateSpeed': 0.2,
                                'spawnType': 'BossUrchinMissile',
                                'raritiesBelow': 0x1
                            }
                        ],
                        'cooldown': 0xf0
                    },
                    {
                        'type': 'complexShoot',
                        'shoot': [{
                                'spawnCooldown': 0x1,
                                'spawnAmount': 0x3,
                                'spawnSpacing': 0.8,
                                'rotateSpeed': 1.94165,
                                'spawnType': 'BossUrchinMissile',
                                'raritiesBelow': 0x1
                            }],
                        'cooldown': 0xf0
                    },
                    {
                        'type': 'complexShoot',
                        'shoot': [
                            {
                                'spawnCooldown': 0xc,
                                'spawnAmount': 0x5,
                                'spawnSpacing': 1.5,
                                'rotateSpeed': -0.1,
                                'spawnType': 'BossUrchinMissile',
                                'raritiesBelow': 0x1
                            },
                            {
                                'spawnCooldown': 0x24,
                                'spawnAmount': 0xa,
                                'spawnSpacing': 1.5,
                                'rotateSpeed': 0.2,
                                'spawnType': 'BossUrchinMissile',
                                'raritiesBelow': 0x2
                            },
                            {
                                'spawnCooldown': 0x6,
                                'spawnAmount': 0x2,
                                'spawnSpacing': 0.3,
                                'rotateSpeed': 0.03,
                                'spawnType': 'BossUrchinMissile',
                                'raritiesBelow': 0x1
                            }
                        ],
                        'cooldown': 0xf0
                    },
                    {
                        'type': 'complexShoot',
                        'shoot': [
                            {
                                'spawnCooldown': 0xc,
                                'spawnAmount': 0x6,
                                'spawnSpacing': Math['PI'] * 0x2,
                                'rotateSpeed': -0.05,
                                'spawnType': 'BossUrchinMissile',
                                'raritiesBelow': 0x1
                            },
                            {
                                'spawnCooldown': 0xc,
                                'spawnAmount': 0x6,
                                'spawnSpacing': Math['PI'] * 0x2,
                                'rotateSpeed': 0.15,
                                'spawnType': 'BossUrchinMissile',
                                'raritiesBelow': 0x2
                            },
                            {
                                'spawnCooldown': 0xc,
                                'spawnAmount': 0xc,
                                'spawnSpacing': Math['PI'] * 0x2,
                                'rotateSpeed': 0.05,
                                'spawnType': 'BossUrchinMissile',
                                'raritiesBelow': 0x2
                            }
                        ],
                        'cooldown': 0xf0
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0xaf,
                        'cooldown': 0x15e,
                        'spawnAmount': 0x1,
                        'spawnSpacing': 0x0,
                        'rotateSpeed': 0x0,
                        'spawnType': 'Invincible\x20Urchin',
                        'raritiesBelow': 0x2,
                        'spawnDistance': 0x1,
                        'randomChoices': [0x3]
                    }
                ],
                'bossOverride': {
                    'changeStateOnHpThresholds': { 0.2: [0x0] },
                    'bossForceStartIndex': 0x0
                }
            },
            'Invincible\x20Urchin': {
                'health': 0x989680,
                'damage': 0x19,
                'radius': 0xf,
                'speed': 3.3,
                'mass': 0x3e8,
                'drops': {},
                'collideOtherEnemies': ![]
            },
            'Coconut': {
                'health': 0x2d,
                'damage': 7.5,
                'radius': 0x14,
                'speed': 0x0,
                'mass': 0xc,
                'personality': 'stationary',
                'drops': {}
            },
            'Hermit\x20Crab': {
                'health': 0x19,
                'damage': 0x19,
                'radius': 0xf,
                'speed': 3.3,
                'mass': 0x3e8,
                'drops': {},
                'collideOtherEnemies': ![]
            },
            'Sea\x20Turtle': {
                'health': 0x19,
                'damage': 0x19,
                'radius': 0xf,
                'speed': 3.3,
                'mass': 0x3e8,
                'drops': {},
                'collideOtherEnemies': ![]
            },
            'Dragonfly': {
                'health': 0x19,
                'damage': 0x19,
                'radius': 0xf,
                'speed': 3.3,
                'mass': 0x3e8,
                'drops': {},
                'collideOtherEnemies': ![]
            },
            'Tick': {
                'health': 12.5,
                'damage': 22.5,
                'poison': [
                    0x12c,
                    0xa
                ],
                'radius': 7.5,
                'speed': 0x5,
                'mass': 0.7,
                'detectionDistance': 0x1f4,
                'drops': {
                    'Faster': [
                        0.375,
                        0x0
                    ],
                    'Pincer': [
                        0.45,
                        0x0
                    ],
                    'Fangs': [
                        0.12,
                        0x0
                    ]
                }
            },
            'Lilypad': {
                'health': 0xa,
                'damage': 0xc,
                'radius': 32.5,
                'speed': 0x0,
                'mass': 0xa,
                'personality': 'stationary',
                'drops': {
                    'Leaf': [
                        0.45,
                        0x0
                    ],
                    'Lilypad': [
                        0.05,
                        0x5
                    ]
                },
                'boss': [
                    {
                        'type': 'heal',
                        'heal': 0.05,
                        'cooldown': 0x2d
                    },
                    {
                        'type': 'moveCenter',
                        'cooldown': 0x5a,
                        'speedMult': 0x5
                    },
                    {
                        'type': 'heal',
                        'heal': 0.05,
                        'cooldown': 0x2d
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x3b9aca00,
                        'cooldown': 0x1a4,
                        'rotateSpeed': -0.01
                    },
                    {
                        'type': 'growAndShrink',
                        'switchTimer': 0xa,
                        'cooldown': 0x28,
                        'magnitude': 3.5,
                        'randomChoices': [
                            0x9,
                            0xa,
                            0xb,
                            0xc
                        ]
                    }
                ],
                'bossOverride': {
                    'bossForceStartIndex': 0x0,
                    'childrenRotateSpeed': 0.046,
                    'childrenDistance': 0x96,
                    'collideOtherEnemies': ![],
                    'childrenWanderAngle': ![],
                    'childrenWanderDistance': ![],
                    'spawnRarityOffset': 0x1,
                    'spawnAmount': 0x1
                }
            },
            'Shiny\x20Lilypad': {
                'health': 0xa,
                'damage': 0xc,
                'radius': 32.5,
                'speed': 0x70,
                'mass': 0xa,
                'personality': 'neutral',
                'agroState': 'hop',
                'drops': {
                    'Shiny\x20Leaf': [
                        0.3,
                        0x8
                    ],
                    'Bloom': [
                        0.2,
                        0x4
                    ],
                    'Lilypad': [
                        0.2,
                        0x5
                    ]
                },
                'boss': [
                    {
                        'type': 'heal',
                        'heal': 0.05,
                        'cooldown': 0x2d
                    },
                    {
                        'type': 'moveCenter',
                        'cooldown': 0x5a,
                        'speedMult': 0x5
                    },
                    {
                        'type': 'heal',
                        'heal': 0.05,
                        'cooldown': 0x2d
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x3b9aca00,
                        'cooldown': 0x1a4,
                        'rotateSpeed': -0.01
                    },
                    {
                        'type': 'growAndShrink',
                        'switchTimer': 0xa,
                        'cooldown': 0x28,
                        'magnitude': 3.5,
                        'randomChoices': [
                            0x9,
                            0xa,
                            0xb,
                            0xc
                        ]
                    }
                ],
                'bossOverride': {
                    'bossForceStartIndex': 0x0,
                    'childrenRotateSpeed': 0.046,
                    'childrenDistance': 0x96,
                    'collideOtherEnemies': ![],
                    'childrenWanderAngle': ![],
                    'childrenWanderDistance': ![],
                    'spawnRarityOffset': 0x1,
                    'spawnAmount': 0x1
                },
                'xp': 2.5
            },
            'Flowering\x20Lilypad': {
                'health': 0xf,
                'damage': 0xc,
                'radius': 32.5,
                'speed': 0x0,
                'mass': 0xa,
                'personality': 'stationary',
                'drops': {
                    'Leaf': [
                        0.45,
                        0x0
                    ],
                    'Lilypad': [
                        0.05,
                        0x5
                    ],
                    'Blossom': [
                        0.2,
                        0x3
                    ]
                },
                'boss': [
                    {
                        'type': 'heal',
                        'heal': 0.05,
                        'cooldown': 0x2d
                    },
                    {
                        'type': 'moveCenter',
                        'cooldown': 0x5a,
                        'speedMult': 0x5
                    },
                    {
                        'type': 'heal',
                        'heal': 0.05,
                        'cooldown': 0x2d
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x3b9aca00,
                        'cooldown': 0x1a4,
                        'rotateSpeed': -0.01
                    },
                    {
                        'type': 'growAndShrink',
                        'switchTimer': 0xa,
                        'cooldown': 0x28,
                        'magnitude': 3.5,
                        'randomChoices': [
                            0x9,
                            0xa,
                            0xb,
                            0xc
                        ]
                    }
                ],
                'bossOverride': {
                    'bossForceStartIndex': 0x0,
                    'childrenRotateSpeed': 0.046,
                    'childrenDistance': 0x96,
                    'collideOtherEnemies': ![],
                    'childrenWanderAngle': ![],
                    'childrenWanderDistance': ![],
                    'spawnRarityOffset': 0x1,
                    'spawnAmount': 0x1
                }
            },
            'Swampy\x20Moth': {
                'health': 0x19,
                'damage': 0xa,
                'radius': 27.5,
                'speed': 3.6,
                'mass': 0x1,
                'personality': 'passive',
                'drops': {
                    'Wing': [
                        0.25,
                        0x0
                    ],
                    'Blood\x20Mandible': [
                        0.01,
                        0x0
                    ],
                    'Bone': [
                        0.1,
                        0x0
                    ]
                },
                'override': { 0x2: { 'personality': 'neutral' } },
                'boss': [{
                        'type': 'passive',
                        'cooldown': 0x3b9aca00,
                        'speedMultiplier': 0xa
                    }],
                'bossOverride': { 'bossForceStartIndex': 0x0 }
            },
            'Fly': {
                'health': 32.5,
                'damage': 0xf,
                'radius': 0x19,
                'speed': 0x3,
                'mass': 0.8,
                'detectionDistance': 0x2bc,
                'drops': {
                    'Wing': [
                        0.25,
                        0x0
                    ],
                    'Powder': [
                        0.2,
                        0x0
                    ],
                    'Dust': [
                        0.09,
                        0xa
                    ]
                },
                'boss': [{
                        'type': 'passive',
                        'cooldown': 0x3b9aca00,
                        'speedMultiplier': 0xa
                    }],
                'bossOverride': { 'bossForceStartIndex': 0x0 }
            },
            'Firefly': {
                'health': 38.5,
                'damage': 0xf,
                'radius': 32.5,
                'speed': 0x5,
                'mass': 0x2,
                'detectionDistance': 0x320,
                'drops': {
                    'Wing': [
                        0.25,
                        0x0
                    ],
                    'Jolt': [
                        0.07,
                        0x0
                    ]
                },
                'override': { 0x2: { 'personality': 'neutral' } },
                'boss': [{
                        'type': 'passive',
                        'cooldown': 0x3b9aca00,
                        'speedMultiplier': 0xa
                    }],
                'bossOverride': { 'bossForceStartIndex': 0x0 }
            },
            'Whirlpool': {
                'health': 0x23,
                'damage': 14.5,
                'radius': 0x1e,
                'speed': 0xc,
                'mass': 0.7,
                'personality': 'sandstorm',
                'detectionDistance': 0x3e8,
                'drops': {
                    'Air': [
                        0.95,
                        0x0
                    ],
                    'Trinket\x20of\x20the\x20Sea': [
                        0.5,
                        0xa
                    ],
                    'Waterlogged\x20Dark\x20Compass': [
                        0.03,
                        0x6
                    ]
                },
                'boss': [
                    {
                        'type': 'growAndShrink',
                        'switchTimer': 0x28,
                        'cooldown': 0x50,
                        'magnitude': 0x9
                    },
                    {
                        'type': 'growAndShrink',
                        'switchTimer': 0x28,
                        'cooldown': 0x50,
                        'magnitude': 0x10
                    },
                    {
                        'type': 'growAndShrink',
                        'switchTimer': 0x28,
                        'cooldown': 0x50,
                        'magnitude': 0x17
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x2,
                        'cooldown': 0x3c,
                        'rotateSpeed': Math['PI'] / 0x1e,
                        'raritiesBelow': 0x3,
                        'spawnType': 'Whirlpool'
                    },
                    {
                        'type': 'growAndShrink',
                        'switchTimer': 0x28,
                        'cooldown': 0x50,
                        'magnitude': 0x9
                    },
                    {
                        'type': 'growAndShrink',
                        'switchTimer': 0x28,
                        'cooldown': 0x50,
                        'magnitude': 0x10
                    },
                    {
                        'type': 'growAndShrink',
                        'switchTimer': 0x28,
                        'cooldown': 0x50,
                        'magnitude': 0x17
                    },
                    {
                        'type': 'growAndShrink',
                        'switchTimer': 0x5,
                        'cooldown': 0x28,
                        'magnitude': 0x1e
                    },
                    {
                        'type': 'spinPlayers',
                        'magnitude': 0x7530,
                        'cooldown': 0xf0
                    },
                    {
                        'type': 'growAndShrink',
                        'switchTimer': 0x2710,
                        'cooldown': 0x28,
                        'magnitude': 1.25
                    }
                ],
                'bossOverride': { 'bossForceStartIndex': 0x0 }
            },
            'Water\x20Mocassin': {
                'health': 0x12,
                'damage': 0x26,
                'radius': 0x14,
                'speed': 0x3,
                'mass': 1.2,
                'detectionDistance': 0x2bc,
                'drops': {},
                'boss': [{
                        'type': 'leech',
                        'cooldown': 0xe8d4a51000,
                        'turnSpeed': 0x1,
                        'spawnCooldown': 0x6,
                        'rotateSpeed': Math['PI'] / 0x14,
                        'spawnType': 'Missile',
                        'spawnDistance': 0x1,
                        'raritiesBelow': 0x1
                    }],
                'bossOverride': { 'bossForceStartIndex': 0x0 }
            },
            'Mocassin\x20Burrow': {
                'health': 0x4,
                'damage': 0xa,
                'radius': 0x1e,
                'speed': 0x0,
                'mass': 0x2710,
                'personality': 'stationary',
                'detectionDistance': 0x190,
                'drops': {},
                'boss': [{
                        'type': 'stationary',
                        'cooldown': 0xf4240
                    }],
                'bossOverride': { 'bossForceStartIndex': 0x0 },
                'collideOtherEnemies': ![]
            },
            'Dauber': {
                'health': 0x19,
                'damage': 0x32,
                'radius': 0x26,
                'speed': 1.2,
                'mass': 0x1,
                'personality': 'shoot',
                'detectionDistance': 0x226,
                'spawnType': 'DauberMissile',
                'drops': {
                    'Blood\x20Oranges': [
                        0.25,
                        0x0
                    ],
                    'Homing\x20Missile': [
                        0.1,
                        0x2
                    ],
                    'Blood\x20Stinger': [
                        0.02,
                        0x0
                    ]
                },
                'boss': [
                    {
                        'type': 'aggroDifferent',
                        'cooldown': 0x0,
                        'detectionType': 'closest'
                    },
                    {
                        'type': 'shootAggro',
                        'cooldown': 0xb4,
                        'shootCooldown': 0x2a,
                        'spawnAmount': 0x3,
                        'spawnSpacing': 1.38,
                        'predictionChance': 0.5,
                        'spawnType': 'DauberMissile'
                    },
                    {
                        'type': 'aggroDifferent',
                        'cooldown': 0x0,
                        'detectionType': 'closest'
                    },
                    {
                        'type': 'shootAggro',
                        'cooldown': 0x5a * 2.3,
                        'shootCooldown': 0x12,
                        'spawnAmount': 0x1,
                        'spawnSpacing': Math['PI'],
                        'predictionChance': 0x0,
                        'raritiesBelow': 0x4,
                        'spawnType': 'Dauber',
                        'randomChoices': [
                            0x4,
                            0x5,
                            0x7,
                            0x8
                        ]
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x2,
                        'cooldown': 0x1e,
                        'rotateSpeed': Math['PI'] / 0x1e,
                        'spawnType': 'DauberMissile',
                        'raritiesBelow': 0x2,
                        'spawnDistance': 0x1,
                        'randomChoices': [
                            0x2,
                            0x5
                        ]
                    },
                    {
                        'type': 'aggroDifferent',
                        'cooldown': 0x0,
                        'detectionType': 'closest'
                    },
                    {
                        'type': 'shootAggro',
                        'cooldown': 0xb4,
                        'shootCooldown': 0x2a,
                        'spawnAmount': 0x3,
                        'spawnSpacing': 1.38,
                        'predictionChance': 0.5,
                        'spawnType': 'DauberMissile',
                        'randomChoices': [
                            0x2,
                            0x4,
                            0x5,
                            0x7
                        ]
                    },
                    {
                        'type': 'spinShootMove',
                        'spawnCooldown': 0x4,
                        'moveSpeed': 0xb,
                        'cooldown': 0x1e,
                        'shootOffset': Math['PI'],
                        'rotateSpeed': Math['PI'] / 0x1e,
                        'spawnType': 'DauberMissile',
                        'raritiesBelow': 0x2,
                        'spawnDistance': 0x1,
                        'randomChoices': [
                            0x2,
                            0x5,
                            0x5,
                            0x8
                        ]
                    },
                    {
                        'type': 'spinShoot',
                        'spawnCooldown': 0x4,
                        'cooldown': 0x1e,
                        'spawnAmount': 0x5,
                        'spawnSpacing': Math['PI'] * 0x2,
                        'rotateSpeed': Math['PI'] / 0x1e,
                        'spawnType': 'DauberMissile',
                        'raritiesBelow': 0x2,
                        'spawnDistance': 0.7,
                        'randomChoices': [
                            0x2,
                            0x4,
                            0x5,
                            0x7
                        ]
                    }
                ],
                'bossOverride': { 'bossForceStartIndex': 0x0 }
            },
            'DauberMissile': {
                'health': 1.5,
                'damage': 0x8,
                'radius': 0xa,
                'speed': 6.7,
                'mass': 0.6,
                'xp': 0x0,
                'turnSpeed': 0.0001,
                'personality': 'projectile',
                'detectionDistance': 0x270f,
                'drops': {},
                'collideOtherEnemies': ![]
            },
            'Antlion': {
                'health': 0x19,
                'damage': 0x19,
                'radius': 0xf,
                'speed': 3.3,
                'mass': 0x3e8,
                'drops': {}
            },
            'Ruby': {
                'health': 0x64,
                'damage': 0x19,
                'radius': 0x19,
                'speed': 0x0,
                'mass': 0x1,
                'detectionDistance': 0x3e8,
                'drops': {
                    'Ruby': [
                        0x1,
                        0xb
                    ]
                }
            },
            'Shiny\x20Ruby': {
                'health': 0x64,
                'damage': 0x19,
                'radius': 0x19,
                'speed': 0x0,
                'mass': 0x1,
                'detectionDistance': 0x3e8,
                'drops': {
                    'Shiny\x20Ruby': [
                        0x1,
                        0xb
                    ]
                },
                'xp': 2.5
            },
            'Palisade\x20Core': {
                'health': 0x1e,
                'damage': 0x1e,
                'radius': 0x23,
                'speed': 1.9,
                'mass': 1.5,
                'drops': {}
            }
        },
        'specialRarityDrops': {
            0xe: [
                {
                    'originalRarity': 0xb,
                    'amount': 0x3
                },
                {
                    'originalRarity': 0xc,
                    'replaceRarity': 0xa,
                    'amount': 0xfa0
                }
            ],
            0xf: [
                {
                    'originalRarity': 0xb,
                    'amount': 0xa
                },
                {
                    'originalRarity': 0xc,
                    'amount': 0x1
                }
            ],
            0x10: [
                {
                    'originalRarity': 0xb,
                    'amount': 0x3c
                },
                {
                    'originalRarity': 0xc,
                    'amount': 0x1
                },
                {
                    'originalRarity': 0xd,
                    'replaceRarity': 0xb,
                    'amount': 0x5dc
                }
            ],
            0x11: [
                {
                    'originalRarity': 0xb,
                    'amount': 0x12c
                },
                {
                    'originalRarity': 0xc,
                    'amount': 0x4
                },
                {
                    'originalRarity': 0xd,
                    'replaceRarity': 0xc,
                    'amount': 0x28
                }
            ],
            0x12: [
                {
                    'originalRarity': 0xb,
                    'amount': 0x258
                },
                {
                    'originalRarity': 0xc,
                    'amount': 0x4
                },
                {
                    'originalRarity': 0xd,
                    'replaceRarity': 0xc,
                    'amount': 0x28
                },
                {
                    'originalRarity': 0xe,
                    'replaceRarity': 0xd,
                    'amount': 0x1
                }
            ],
            0x13: [
                {
                    'originalRarity': 0xb,
                    'amount': 0x258
                },
                {
                    'originalRarity': 0xc,
                    'amount': 0x7
                },
                {
                    'originalRarity': 0xd,
                    'replaceRarity': 0xc,
                    'amount': 0x64
                },
                {
                    'originalRarity': 0xe,
                    'replaceRarity': 0xd,
                    'amount': 0x2
                },
                {
                    'originalRarity': 0xf,
                    'replaceRarity': 0xc,
                    'amount': 0x5dc
                },
                {
                    'originalRarity': 0x10,
                    'replaceRarity': 0xd,
                    'amount': 0xc
                },
                {
                    'originalRarity': 0x11,
                    'replaceRarity': 0xc,
                    'amount': 0x2328
                }
            ],
            0x14: [
                {
                    'originalRarity': 0xb,
                    'amount': 0x258
                },
                {
                    'originalRarity': 0xc,
                    'amount': 0x24
                },
                {
                    'originalRarity': 0xd,
                    'replaceRarity': 0xc,
                    'amount': 0x168
                },
                {
                    'originalRarity': 0xe,
                    'replaceRarity': 0xc,
                    'amount': 0x708
                },
                {
                    'originalRarity': 0xf,
                    'replaceRarity': 0xd,
                    'amount': 0x12
                },
                {
                    'originalRarity': 0x10,
                    'replaceRarity': 0xc,
                    'amount': 0x2ee0
                },
                {
                    'originalRarity': 0x11,
                    'replaceRarity': 0xd,
                    'amount': 0x64
                }
            ],
            0x15: [
                {
                    'originalRarity': 0xb,
                    'amount': 0x258
                },
                {
                    'originalRarity': 0xc,
                    'replaceRarity': 0xd,
                    'amount': 0x1
                },
                {
                    'originalRarity': 0xd,
                    'replaceRarity': 0xd,
                    'amount': 0x6
                },
                {
                    'originalRarity': 0xe,
                    'replaceRarity': 0xd,
                    'amount': 0x18
                },
                {
                    'originalRarity': 0xf,
                    'replaceRarity': 0xd,
                    'amount': 0x60
                },
                {
                    'originalRarity': 0x10,
                    'replaceRarity': 0xd,
                    'amount': 0xc0
                },
                {
                    'originalRarity': 0x11,
                    'replaceRarity': 0xd,
                    'amount': 0x180
                },
                {
                    'originalRarity': 0x12,
                    'replaceRarity': 0xd,
                    'amount': 0x300
                }
            ],
            0x16: [
                {
                    'originalRarity': 0xc,
                    'replaceRarity': 0xd,
                    'amount': 0x6
                },
                {
                    'originalRarity': 0xd,
                    'replaceRarity': 0xd,
                    'amount': 0x18
                },
                {
                    'originalRarity': 0xe,
                    'replaceRarity': 0xc,
                    'amount': 0x61a8
                },
                {
                    'originalRarity': 0xf,
                    'replaceRarity': 0xe,
                    'amount': 0x1
                },
                {
                    'originalRarity': 0x10,
                    'replaceRarity': 0xe,
                    'amount': 0x3
                },
                {
                    'originalRarity': 0x11,
                    'replaceRarity': 0xc,
                    'amount': 0x927c0
                },
                {
                    'originalRarity': 0x12,
                    'replaceRarity': 0xd,
                    'amount': 0x1194
                }
            ],
            0x17: [
                {
                    'originalRarity': 0xd,
                    'replaceRarity': 0xd,
                    'amount': 0x3c
                },
                {
                    'originalRarity': 0xe,
                    'replaceRarity': 0xe,
                    'amount': 0x1
                },
                {
                    'originalRarity': 0xf,
                    'replaceRarity': 0xe,
                    'amount': 0x3
                },
                {
                    'originalRarity': 0x10,
                    'replaceRarity': 0xd,
                    'amount': 0xbb8
                },
                {
                    'originalRarity': 0x11,
                    'replaceRarity': 0xd,
                    'amount': 0x1770
                },
                {
                    'originalRarity': 0x12,
                    'replaceRarity': 0xe,
                    'amount': 0x28
                },
                {
                    'originalRarity': 0x13,
                    'replaceRarity': 0xe,
                    'amount': 0x50
                }
            ],
            0x18: [
                {
                    'originalRarity': 0xd,
                    'replaceRarity': 0xd,
                    'amount': 0x78
                },
                {
                    'originalRarity': 0xe,
                    'replaceRarity': 0xe,
                    'amount': 0x3
                },
                {
                    'originalRarity': 0xf,
                    'replaceRarity': 0xe,
                    'amount': 0x7
                },
                {
                    'originalRarity': 0x10,
                    'replaceRarity': 0xe,
                    'amount': 0x1c
                },
                {
                    'originalRarity': 0x11,
                    'replaceRarity': 0xe,
                    'amount': 0x38
                },
                {
                    'originalRarity': 0x12,
                    'replaceRarity': 0xe,
                    'amount': 0x6e
                },
                {
                    'originalRarity': 0x13,
                    'replaceRarity': 0xf,
                    'amount': 0x1
                },
                {
                    'originalRarity': 0x14,
                    'replaceRarity': 0xf,
                    'amount': 0x3
                }
            ],
            0x19: [
                {
                    'originalRarity': 0xd,
                    'replaceRarity': 0xd,
                    'amount': 0xf0
                },
                {
                    'originalRarity': 0xe,
                    'replaceRarity': 0xd,
                    'amount': 0xbb8
                },
                {
                    'originalRarity': 0xf,
                    'replaceRarity': 0xe,
                    'amount': 0x1b
                },
                {
                    'originalRarity': 0x10,
                    'replaceRarity': 0xd,
                    'amount': 0x4e20
                },
                {
                    'originalRarity': 0x11,
                    'replaceRarity': 0xf,
                    'amount': 0x1
                },
                {
                    'originalRarity': 0x12,
                    'replaceRarity': 0xf,
                    'amount': 0x3
                },
                {
                    'originalRarity': 0x13,
                    'replaceRarity': 0xe,
                    'amount': 0x9c4
                },
                {
                    'originalRarity': 0x14,
                    'replaceRarity': 0xf,
                    'amount': 0xf
                },
                {
                    'originalRarity': 0x15,
                    'replaceRarity': 0xe,
                    'amount': 0x2ee0
                }
            ],
            0x1a: [
                {
                    'originalRarity': 0xd,
                    'replaceRarity': 0xd,
                    'amount': 0x1e0
                },
                {
                    'originalRarity': 0xe,
                    'replaceRarity': 0xe,
                    'amount': 0x16
                },
                {
                    'originalRarity': 0xf,
                    'replaceRarity': 0xe,
                    'amount': 0x4d
                },
                {
                    'originalRarity': 0x10,
                    'replaceRarity': 0xe,
                    'amount': 0xa7
                },
                {
                    'originalRarity': 0x11,
                    'replaceRarity': 0xf,
                    'amount': 0x4
                },
                {
                    'originalRarity': 0x12,
                    'replaceRarity': 0xf,
                    'amount': 0x9
                },
                {
                    'originalRarity': 0x13,
                    'replaceRarity': 0xf,
                    'amount': 0x11
                },
                {
                    'originalRarity': 0x14,
                    'replaceRarity': 0xf,
                    'amount': 0x22
                },
                {
                    'originalRarity': 0x15,
                    'replaceRarity': 0xf,
                    'amount': 0x5a
                },
                {
                    'originalRarity': 0x16,
                    'replaceRarity': 0xf,
                    'amount': 0x10e
                }
            ],
            0x1b: [
                {
                    'originalRarity': 0xd,
                    'replaceRarity': 0xf,
                    'amount': 0x1
                },
                {
                    'originalRarity': 0xe,
                    'replaceRarity': 0xf,
                    'amount': 0x2
                },
                {
                    'originalRarity': 0xf,
                    'replaceRarity': 0xf,
                    'amount': 0x4
                },
                {
                    'originalRarity': 0x10,
                    'replaceRarity': 0xf,
                    'amount': 0x8
                },
                {
                    'originalRarity': 0x11,
                    'replaceRarity': 0xf,
                    'amount': 0x10
                },
                {
                    'originalRarity': 0x12,
                    'replaceRarity': 0xf,
                    'amount': 0x20
                },
                {
                    'originalRarity': 0x13,
                    'replaceRarity': 0xf,
                    'amount': 0x40
                },
                {
                    'originalRarity': 0x14,
                    'replaceRarity': 0xf,
                    'amount': 0x80
                },
                {
                    'originalRarity': 0x15,
                    'replaceRarity': 0xf,
                    'amount': 0x100
                },
                {
                    'originalRarity': 0x16,
                    'replaceRarity': 0xf,
                    'amount': 0x200
                }
            ],
            0x1c: [
                {
                    'originalRarity': 0xe,
                    'replaceRarity': 0xf,
                    'amount': 0x2
                },
                {
                    'originalRarity': 0xf,
                    'replaceRarity': 0xe,
                    'amount': 0x3e8
                },
                {
                    'originalRarity': 0x10,
                    'replaceRarity': 0xe,
                    'amount': 0x9c4
                },
                {
                    'originalRarity': 0x11,
                    'replaceRarity': 0xf,
                    'amount': 0x17
                },
                {
                    'originalRarity': 0x12,
                    'replaceRarity': 0xf,
                    'amount': 0x2e
                },
                {
                    'originalRarity': 0x13,
                    'replaceRarity': 0x10,
                    'amount': 0x1
                },
                {
                    'originalRarity': 0x14,
                    'replaceRarity': 0x10,
                    'amount': 0x2
                },
                {
                    'originalRarity': 0x15,
                    'replaceRarity': 0xe,
                    'amount': 0xa3930
                },
                {
                    'originalRarity': 0x16,
                    'replaceRarity': 0xf,
                    'amount': 0x8fc
                },
                {
                    'originalRarity': 0x17,
                    'replaceRarity': 0xf,
                    'amount': 0x11f8
                }
            ],
            0x1d: [
                {
                    'originalRarity': 0xe,
                    'replaceRarity': 0xf,
                    'amount': 0x4
                },
                {
                    'originalRarity': 0xf,
                    'replaceRarity': 0xf,
                    'amount': 0xf
                },
                {
                    'originalRarity': 0x10,
                    'replaceRarity': 0xf,
                    'amount': 0x23
                },
                {
                    'originalRarity': 0x11,
                    'replaceRarity': 0xf,
                    'amount': 0x55
                },
                {
                    'originalRarity': 0x12,
                    'replaceRarity': 0xf,
                    'amount': 0x145
                },
                {
                    'originalRarity': 0x13,
                    'replaceRarity': 0x10,
                    'amount': 0x2
                },
                {
                    'originalRarity': 0x14,
                    'replaceRarity': 0x10,
                    'amount': 0x6
                },
                {
                    'originalRarity': 0x15,
                    'replaceRarity': 0x10,
                    'amount': 0xc
                },
                {
                    'originalRarity': 0x16,
                    'replaceRarity': 0x10,
                    'amount': 0x14
                },
                {
                    'originalRarity': 0x17,
                    'replaceRarity': 0xf,
                    'amount': 0x38a4
                },
                {
                    'originalRarity': 0x18,
                    'replaceRarity': 0x10,
                    'amount': 0x44
                }
            ],
            0x1e: [
                {
                    'originalRarity': 0xe,
                    'replaceRarity': 0xf,
                    'amount': 0x8
                },
                {
                    'originalRarity': 0xf,
                    'replaceRarity': 0xf,
                    'amount': 0x21
                },
                {
                    'originalRarity': 0x10,
                    'replaceRarity': 0xf,
                    'amount': 0x63
                },
                {
                    'originalRarity': 0x11,
                    'replaceRarity': 0x10,
                    'amount': 0x1
                },
                {
                    'originalRarity': 0x12,
                    'replaceRarity': 0x10,
                    'amount': 0x4
                },
                {
                    'originalRarity': 0x13,
                    'replaceRarity': 0x10,
                    'amount': 0xc
                },
                {
                    'originalRarity': 0x14,
                    'replaceRarity': 0x10,
                    'amount': 0x18
                },
                {
                    'originalRarity': 0x15,
                    'replaceRarity': 0xf,
                    'amount': 0x4650
                },
                {
                    'originalRarity': 0x16,
                    'replaceRarity': 0xf,
                    'amount': 0x8ca0
                },
                {
                    'originalRarity': 0x17,
                    'replaceRarity': 0xf,
                    'amount': 0x17700
                },
                {
                    'originalRarity': 0x18,
                    'replaceRarity': 0xf,
                    'amount': 0x2ee00
                }
            ],
            0x1f: [
                {
                    'originalRarity': 0xf,
                    'replaceRarity': 0xf,
                    'amount': 0x45
                },
                {
                    'originalRarity': 0x10,
                    'replaceRarity': 0x10,
                    'amount': 0x1
                },
                {
                    'originalRarity': 0x11,
                    'replaceRarity': 0x10,
                    'amount': 0x2
                },
                {
                    'originalRarity': 0x12,
                    'replaceRarity': 0xf,
                    'amount': 0xb36
                },
                {
                    'originalRarity': 0x13,
                    'replaceRarity': 0xf,
                    'amount': 0x215c
                },
                {
                    'originalRarity': 0x14,
                    'replaceRarity': 0x10,
                    'amount': 0x2e
                },
                {
                    'originalRarity': 0x15,
                    'replaceRarity': 0x10,
                    'amount': 0x5c
                },
                {
                    'originalRarity': 0x16,
                    'replaceRarity': 0x10,
                    'amount': 0xb8
                },
                {
                    'originalRarity': 0x17,
                    'replaceRarity': 0x11,
                    'amount': 0x1
                },
                {
                    'originalRarity': 0x18,
                    'replaceRarity': 0x11,
                    'amount': 0x2
                }
            ],
            0x20: [
                {
                    'originalRarity': 0x10,
                    'replaceRarity': 0x10,
                    'amount': 0x2
                },
                {
                    'originalRarity': 0x11,
                    'replaceRarity': 0x10,
                    'amount': 0x4
                },
                {
                    'originalRarity': 0x12,
                    'replaceRarity': 0x10,
                    'amount': 0x8
                },
                {
                    'originalRarity': 0x13,
                    'replaceRarity': 0x10,
                    'amount': 0x20
                },
                {
                    'originalRarity': 0x14,
                    'replaceRarity': 0x10,
                    'amount': 0x40
                },
                {
                    'originalRarity': 0x15,
                    'replaceRarity': 0x10,
                    'amount': 0x80
                },
                {
                    'originalRarity': 0x16,
                    'replaceRarity': 0x10,
                    'amount': 0x100
                },
                {
                    'originalRarity': 0x17,
                    'replaceRarity': 0x10,
                    'amount': 0x200
                },
                {
                    'originalRarity': 0x18,
                    'replaceRarity': 0x10,
                    'amount': 0x400
                },
                {
                    'originalRarity': 0x19,
                    'replaceRarity': 0x10,
                    'amount': 0x800
                }
            ],
            0x21: [
                {
                    'originalRarity': 0x11,
                    'replaceRarity': 0x10,
                    'amount': 0x22
                },
                {
                    'originalRarity': 0x12,
                    'replaceRarity': 0x10,
                    'amount': 0x37
                },
                {
                    'originalRarity': 0x13,
                    'replaceRarity': 0x10,
                    'amount': 0x59
                },
                {
                    'originalRarity': 0x14,
                    'replaceRarity': 0x10,
                    'amount': 0x90
                },
                {
                    'originalRarity': 0x15,
                    'replaceRarity': 0x11,
                    'amount': 0x1
                },
                {
                    'originalRarity': 0x16,
                    'replaceRarity': 0x11,
                    'amount': 0x2
                },
                {
                    'originalRarity': 0x17,
                    'replaceRarity': 0x10,
                    'amount': 0x780
                },
                {
                    'originalRarity': 0x18,
                    'replaceRarity': 0x10,
                    'amount': 0xf00
                },
                {
                    'originalRarity': 0x19,
                    'replaceRarity': 0x11,
                    'amount': 0xf
                }
            ],
            0x22: [
                {
                    'originalRarity': 0x13,
                    'replaceRarity': 0x10,
                    'amount': 0x78
                },
                {
                    'originalRarity': 0x14,
                    'replaceRarity': 0x11,
                    'amount': 0x1
                },
                {
                    'originalRarity': 0x15,
                    'replaceRarity': 0x11,
                    'amount': 0x2
                },
                {
                    'originalRarity': 0x16,
                    'replaceRarity': 0x11,
                    'amount': 0x5
                },
                {
                    'originalRarity': 0x17,
                    'replaceRarity': 0x11,
                    'amount': 0xb
                },
                {
                    'originalRarity': 0x18,
                    'replaceRarity': 0x10,
                    'amount': 0x2710
                },
                {
                    'originalRarity': 0x19,
                    'replaceRarity': 0x11,
                    'amount': 0x28
                },
                {
                    'originalRarity': 0x1a,
                    'replaceRarity': 0x11,
                    'amount': 0x46
                }
            ]
        },
        'rarities': [
            {
                'name': 'Basic',
                'health': 0x1,
                'damage': 0x1,
                'radius': 0x1,
                'mass': 0x1,
                'petalDamage': 0x1,
                'petalHealth': 0x1,
                'petalHeal': 0x1,
                'petalMass': 0x1,
                'detectionDistance': 0x1,
                'xp': 0x1
            },
            {
                'name': 'Uncommon',
                'health': 0x2,
                'damage': 1.2,
                'radius': 1.1,
                'mass': 1.52,
                'petalDamage': 1.4,
                'petalHealth': 1.2,
                'petalHeal': 1.51,
                'petalMass': 1.52,
                'detectionDistance': 1.1,
                'xp': 0x3
            },
            {
                'name': 'Scarce',
                'health': 0x4,
                'damage': 1.5,
                'radius': 1.3,
                'mass': 2.5,
                'petalDamage': 0x2,
                'petalHealth': 1.5,
                'petalHeal': 2.2,
                'petalMass': 2.5,
                'detectionDistance': 1.2,
                'xp': 0x9
            },
            {
                'name': 'Exceptional',
                'health': 7.5,
                'damage': 1.9,
                'radius': 1.72,
                'mass': 5.6,
                'petalDamage': 2.9,
                'petalHealth': 1.9,
                'petalHeal': 3.2,
                'petalMass': 5.7,
                'detectionDistance': 1.3,
                'xp': 0x1b
            },
            {
                'name': 'Mythical',
                'health': 0x32,
                'damage': 2.7,
                'radius': 0x3,
                'mass': 0x12,
                'petalDamage': 4.8,
                'petalHealth': 2.8,
                'petalHeal': 0x5,
                'petalMass': 0x12,
                'detectionDistance': 1.7,
                'xp': 0x51
            },
            {
                'name': 'Phantasmal',
                'health': 0x6e,
                'damage': 4.2,
                'radius': 0x5,
                'mass': 0x2b,
                'petalDamage': 9.5,
                'petalHealth': 4.2,
                'petalHeal': 0xa,
                'petalMass': 0x2b,
                'detectionDistance': 2.1,
                'xp': 0xf3
            },
            {
                'name': 'Ultimate',
                'health': 0x136,
                'damage': 8.5,
                'radius': 0x7,
                'mass': 0x64,
                'petalDamage': 0x17,
                'petalHealth': 8.5,
                'petalHeal': 21.5,
                'petalMass': 0x64,
                'detectionDistance': 2.5,
                'xp': 0x2d9
            },
            {
                'name': 'Paramount',
                'health': 0x546,
                'damage': 0x11,
                'radius': 9.5,
                'mass': 0xd8,
                'petalDamage': 0x5a,
                'petalHealth': 0x11,
                'petalHeal': 0x28,
                'petalMass': 0xd8,
                'detectionDistance': 2.5,
                'xp': 0x88b
            },
            {
                'name': 'Alpha',
                'health': 0x12c0,
                'damage': 0x23,
                'radius': 0xd,
                'mass': 0x1f4,
                'petalDamage': 0x140,
                'petalHealth': 0x23,
                'petalHeal': 0x4a,
                'petalMass': 0x1f4,
                'detectionDistance': 2.5,
                'xp': 0x19a1
            },
            {
                'name': 'Doomed',
                'health': 0x4650,
                'damage': 0x46,
                'radius': 0x12,
                'mass': 0x4b0,
                'petalDamage': 0x44c,
                'petalHealth': 0x46,
                'petalHeal': 0x8c,
                'petalMass': 0x4b0,
                'detectionDistance': 2.5,
                'xp': 0x9c40
            },
            {
                'name': 'Sacred',
                'health': 0xfde8,
                'damage': 0x8a,
                'radius': 0x18,
                'mass': 0xc80,
                'petalDamage': 0xf0a,
                'petalHealth': 0x8a,
                'petalHeal': 0x10c,
                'petalMass': 0xc80,
                'detectionDistance': 2.5,
                'xp': 0x493e0
            },
            {
                'name': 'Imperial',
                'health': 0x3d090,
                'damage': 0x113,
                'radius': 0x21,
                'mass': 0x251c,
                'petalDamage': 0x2710 * petal_damage_mulfactor,
                'petalHealth': 0x113,
                'petalHeal': 0x1f4,
                'petalMass': 0x251c,
                'detectionDistance': 2.5,
                'xp': 0x2dc6c0
            },
            {
                'name': 'Absolute',
                'health': 0xef420,
                'damage': 0x226,
                'radius': 0x2d,
                'mass': 0x80e8,
                'petalDamage': 0xb98c * petal_damage_mulfactor,
                'petalHealth': 0x226,
                'petalHeal': 0x3b6,
                'petalMass': 0x80e8,
                'detectionDistance': 2.5,
                'xp': 0x1c9c380
            },
            {
                'name': 'Stellar',
                'health': 0x4c4b40,
                'damage': 0x47e,
                'radius': 0x3e,
                'mass': 0x2f760,
                'petalDamage': 0x41eb0 * petal_damage_mulfactor,
                'petalHealth': 0x672,
                'petalHeal': 0xb49,
                'petalMass': 0x2f760,
                'detectionDistance': 2.5,
                'xp': 0x1dcd6500
            },
            {
                'name': 'Empyrean',
                'health': 0x958940,
                'damage': 0x672,
                'radius': 0x47,
                'mass': 0x5eec0,
                'petalDamage': 0x2625a0 * petal_damage_mulfactor,
                'petalHealth': 0x2648,
                'petalHeal': 0x2580,
                'petalMass': 0x231860,
                'detectionDistance': 2.5,
                'xp': 0x2540be400
            },
            {
                'name': 'Seraphic',
                'health': 0x1312d00,
                'damage': 0x9c4,
                'radius': 0x51,
                'mass': 0xbdd80,
                'petalDamage': 0x19bfcc0 * petal_damage_mulfactor,
                'petalHealth': 0xea60,
                'petalHeal': 0xe290,
                'petalMass': 0x1a52480,
                'detectionDistance': 2.5,
                'xp': 0x45d964b800
            },
            {
                'name': 'Ascended',
                'health': 0x3938700,
                'damage': 0x1356,
                'radius': 0x67,
                'mass': 0x231860,
                'petalDamage': 0xc7bf410 * petal_damage_mulfactor,
                'petalHealth': 0x329c4,
                'petalHeal': 0x33450,
                'petalMass': 0x16e36000,
                'detectionDistance': 3.25,
                'xp': 0x82f79cd9000
            },
            {
                'name': 'Ethereal',
                'health': 0x7270e00,
                'damage': 0x1d4c,
                'radius': 0x76,
                'mass': 0x4630c0,
                'petalDamage': 0x32a9f880 * petal_damage_mulfactor,
                'petalHealth': 0x6ddd0,
                'petalHeal': 0x8d9a0,
                'petalMass': 0x420abd00,
                'detectionDistance': 3.25,
                'xp': 0xf5904616e000
            },
            {
                'name': 'Cosmic',
                'health': 0x15752a00,
                'damage': 0x3a98,
                'radius': 0x87,
                'mass': 0xd29240,
                'petalDamage': 0x1af124af0 * petal_damage_mulfactor,
                'petalHealth': 0x19c800,
                'petalHeal': 516560.652,
                'petalMass': 0xcdfe60000,
                'detectionDistance': 3.25,
                'xp': 0x1cc6e836ae4000
            },
            {
                'name': 'Timeless',
                'health': 0x29b92700,
                'damage': 0x4e20,
                'radius': 0x9a,
                'mass': 0x1a52480,
                'petalDamage': 0x3fc11c9f8 * petal_damage_mulfactor,
                'petalHealth': 0x11300,
                'petalHeal': 0x1500e,
                'petalMass': 0x493e00,
                'detectionDistance': 3.25,
                'xp': 0x35f4f36686b8000
            },
            {
                'name': 'Godlike',
                'health': 0x53724e00,
                'damage': 0x7530,
                'radius': 0xaf,
                'mass': 0x34a4900,
                'petalDamage': 0x1fefe358,
                'petalHealth': 0x22600,
                'petalHeal': 0x27100,
                'petalMass': 0x927c00,
                'detectionDistance': 3.25,
                'xp': 0x6124fee993bc0000
            },
            {
                'name': 'Abyssal',
                'health': 0x10b076000,
                'damage': 0xea60,
                'radius': 0xc8,
                'mass': 0x9896800,
                'petalDamage': 0x6f75ef80,
                'petalHealth': 0x44c00,
                'petalHeal': 0x4e200,
                'petalMass': 0x124f800,
                'detectionDistance': 3.3,
                'xp': 0xad78ebc5ac6200000
            },
            {
                'name': 'Noble',
                'health': 0x1faa3b500,
                'damage': 0x15f90,
                'radius': 0xe4,
                'mass': 0x1312d000,
                'petalDamage': 0xd693a400,
                'petalHealth': 0x89800,
                'petalHeal': 0x9c400,
                'petalMass': 0x16e36000,
                'detectionDistance': 3.35,
                'xp': 0x14542ba12a337c00000
            },
            {
                'name': 'Entropic',
                'health': 0x401332c00,
                'damage': 0x1fbd0,
                'radius': 0x102,
                'mass': 0x2625a000,
                'petalDamage': 0x1ad274800,
                'petalHealth': 0x113000,
                'petalHeal': 0x138800,
                'petalMass': 0x493e000,
                'detectionDistance': 3.4,
                'xp': 0x261dd1ce2f2088000000
            },
            {
                'name': 'Apocalyptic',
                'health': 0xa7a358200,
                'damage': 0x40b28,
                'radius': 0x127,
                'mass': 0x77359400,
                'petalDamage': 0x35a4e9000,
                'petalHealth': 0x226000,
                'petalHeal': 0x271000,
                'petalMass': 0x927c000,
                'detectionDistance': 3.45,
                'xp': 0x4f68ca6d8cd91c0000000
            },
            {
                'name': 'Hollow',
                'health': 0x199c82cc00,
                'damage': 0x81650,
                'radius': 0x14f,
                'mass': 0x165a0bc00,
                'petalDamage': 0x6b49d2000,
                'petalHealth': 0x44c000,
                'petalHeal': 0x4e2000,
                'petalMass': 0x1b6b0b00,
                'detectionDistance': 3.5,
                'xp': 0x94e47b8d68171800000000
            },
            {
                'name': 'Overshadowed',
                'health': 0x30e4f9b400,
                'damage': 0xf4240,
                'radius': 0x17c,
                'mass': 0x2cb417800,
                'petalDamage': 0x6b49d2000,
                'petalHealth': 0x44c000,
                'petalHeal': 0x4e2000,
                'petalMass': 0x1b6b0b00,
                'detectionDistance': 3.5,
                'xp': 0x1172c67a9232b40000000000
            },
            {
                'name': 'Luminous',
                'health': 0x68c6171400,
                'damage': 0x186a00,
                'radius': 0x1af,
                'mass': 0x59682f000,
                'petalDamage': 0x6b49d2000,
                'petalHealth': 0x44c000,
                'petalHeal': 0x4e2000,
                'petalMass': 0x1b6b0b00,
                'detectionDistance': 3.5,
                'xp': 0x20b73425d21f1200000000000
            },
            {
                'name': 'Banished',
                'health': 0x104c533c000,
                'damage': 0x30d400,
                'radius': 0x1e9,
                'mass': 0x10c388d000,
                'petalDamage': 0x6b49d2000,
                'petalHealth': 0x44c000,
                'petalHeal': 0x4e2000,
                'petalMass': 0x1b6b0b00,
                'detectionDistance': 3.5,
                'xp': 0x3d5781c6e9fa42000000000000
            },
            {
                'name': 'Iridescent',
                'health': 0x2ba7def3000,
                'damage': 0x632ea0,
                'radius': 0x22b,
                'mass': 0x218711a000,
                'petalDamage': 0x6b49d2000,
                'petalHealth': 0x44c000,
                'petalHeal': 0x4e2000,
                'petalMass': 0x1b6b0b00,
                'detectionDistance': 3.5,
                'xp': 0x73041354f6b53c0000000000000
            },
            {
                'name': 'Spectral',
                'health': 0x574fbde6000,
                'damage': 0x927c00,
                'radius': 0x276,
                'mass': 0x430e234000,
                'petalDamage': 0xa3b5840f40000,
                'petalHealth': 0x1adb0000,
                'petalHeal': 0x1e848000,
                'petalMass': 0xab5d04c00,
                'detectionDistance': 3.5,
                'xp': 0xd7c0e29888346000000000000000
            },
            {
                'name': 'Mystical',
                'health': 0xcea31f4b000,
                'damage': 0x121eac0,
                'radius': 0x2cb,
                'mass': 0xc92a69c000,
                'petalDamage': 0x6b49d2000,
                'petalHealth': 0x44c000,
                'petalHeal': 0x4e2000,
                'petalMass': 0x1b6b0b00,
                'detectionDistance': 3.5,
                'xp': 0x19097eaecfe4c30000000000000000
            },
            {
                'name': 'Arcane',
                'health': 0x1eec3dec2000,
                'damage': 0x24b76a0,
                'radius': 0x32b,
                'mass': 0x1a04d1ad800,
                'petalDamage': 0x6b49d2000,
                'petalHealth': 0x44c000,
                'petalHeal': 0x4e2000,
                'petalMass': 0x1b6b0b00,
                'detectionDistance': 3.5,
                'xp': 0x2ef1cd87c5ccee00000000000000000
            },
            {
                'name': 'Occult',
                'health': 0x3dd87bd84000,
                'damage': 0x3750280,
                'radius': 0x399,
                'mass': 0x3409a35b000,
                'petalDamage': 0x6b49d2000,
                'petalHealth': 0x44c000,
                'petalHeal': 0x4e2000,
                'petalMass': 0x1b6b0b00,
                'detectionDistance': 3.5,
                'xp': 0x5805615e92e03c000000000000000000
            },
            {
                'name': 'Origin',
                'health': 0x8de19495c000,
                'damage': 0x7088980,
                'radius': 0x416,
                'mass': 0x9c1cea11000,
                'petalDamage': 0x38d7ea4c68000,
                'petalHealth': 0xe8d4a51000,
                'petalHeal': 0xe8d4a51000,
                'petalMass': 0x38d7ea4c68000,
                'detectionDistance': 3.5,
                'xp': 0xa50a16915364700000000000000000000
            }
        ]
    };
function getSlowdown(_0x420b46) {
    const _0x2908a4 = [
            [
                0x61a8,
                0x1d4c,
                0x7d0,
                0x2a3,
                0x91,
                0x13,
                2.1,
                0.25,
                0.029,
                0.0034,
                0.00039,
                0.000044,
                0.0000049,
                4.1e-7,
                1.4e-8
            ],
            [
                0x2bc,
                0x22,
                5.4,
                0.54,
                0.054,
                0.0054,
                0.00054,
                0.000054,
                0.0000054,
                5.4e-7,
                5.4e-8,
                5.4e-9,
                5.4e-10,
                5.4e-11,
                5.4e-12,
                5.4e-13,
                5.4e-14,
                5.4e-15,
                5.4e-16,
                5.4e-17,
                5.4e-18,
                5.4e-19,
                5.4e-20,
                5.4e-21,
                5.4e-22,
                5.4e-23,
                5.4e-24,
                5.4e-25
            ]
        ], _0x58ea24 = [
            [
                0x0,
                -1.4,
                -2.8,
                -4.2,
                -6.2,
                -8.3,
                -10.4,
                -12.6,
                -14.8,
                -0x11,
                -19.2,
                -21.4,
                -23.6,
                -25.5,
                -26.5,
                -27.5,
                -29.5,
                -30.5,
                -31.5,
                -32.5,
                -33.5,
                -34.5,
                -35.5,
                -36.5,
                -37.5,
                -38.5,
                -39.5
            ],
            [
                0x0,
                -0x1,
                -0x2,
                -0x3,
                -0x4,
                -0x5,
                -0x6,
                -0x7,
                -0x8,
                -0x9,
                -0xa,
                -0xb,
                -0xc,
                -0xd,
                -0xe,
                -0xf,
                -0x10,
                -0x11,
                -0x12,
                -0x13,
                -0x14,
                -0x15,
                -0x16,
                -0x17,
                -0x18,
                -0x19,
                -0x1a
            ]
        ], _0x3bf7e4 = [
            [],
            []
        ];
    for (let _0x31c160 = 0x0; _0x31c160 < _0x58ea24['length']; _0x31c160++) {
        for (let _0x5c6d00 = 0x0; _0x5c6d00 < _0x58ea24[_0x31c160]['length']; _0x5c6d00++) {
            if (_0x5c6d00 === 0x0)
                _0x3bf7e4[_0x31c160]['push'](0x0);
            else
                _0x3bf7e4[_0x31c160]['push'](0x1 - Math['exp'](_0x58ea24[_0x31c160][_0x5c6d00]));
        }
    }
    const _0x224170 = new Array(0x23)['fill'](0x0)['map'](_0x8dd593 => new Array(0x24)['fill'](0x0));
    for (let _0x742114 = 0x0; _0x742114 < 0x23; ++_0x742114) {
        let _0x3af695 = 0x0, _0x4a3b92 = 0x0, _0x256634 = 0x0;
        _0x742114 >= 0xf && (_0x3af695 = 0x1, _0x4a3b92 = 0xf, _0x256634 = 0xf);
        const _0x19f514 = _0x2908a4[_0x3af695][_0x742114 - _0x4a3b92] ?? _0x2908a4[_0x3af695]['at'](-0x1);
        for (let _0x25c12d = 0x0; _0x25c12d < _0x256634; ++_0x25c12d) {
            _0x224170[_0x742114][_0x25c12d] = _0x420b46 * 0x64;
        }
        let _0x1cb48c = 0x64;
        for (let _0x3d5ae3 = 0x0; _0x3d5ae3 <= _0x3bf7e4[_0x3af695]['length']; ++_0x3d5ae3) {
            let _0x4d9479 = _0x3bf7e4[_0x3af695][_0x3d5ae3], _0x266432 = _0x3bf7e4[_0x3af695][_0x3d5ae3 + 0x1];
            if (_0x266432 === undefined)
                _0x266432 = 0x1;
            const _0x224894 = Math['pow'](_0x420b46 * _0x4d9479 + (0x1 - _0x420b46), 0x493e0 / _0x19f514), _0x3e77da = Math['pow'](_0x420b46 * _0x266432 + (0x1 - _0x420b46), 0x493e0 / _0x19f514), _0x471fea = Math['max']((_0x1cb48c * _0x420b46)['toFixed'](0x2), 0x0);
            _0x224170[_0x742114][_0x3d5ae3 + _0x256634] = _0x471fea, _0x1cb48c -= 0x64 * (_0x3e77da - _0x224894);
        }
        if (_0x224170[_0x742114][0x24] >= 0x0 && _0x742114 < 0x3) {
            const _0x3104b3 = _0x224170[_0x742114][0x24];
            for (let _0x2e6638 = 0x0; _0x2e6638 <= 0x24; ++_0x2e6638) {
                _0x224170[_0x742114][_0x2e6638] = Math['max']((_0x224170[_0x742114][_0x2e6638] - _0x3104b3)['toFixed'](0x2), 0x0);
            }
        }
    }
    for (let _0x2b1280 of _0x224170) {
        for (let _0x37004c = 0x0; _0x37004c < 0x6; _0x37004c++)
            _0x2b1280['push'](0x0);
    }
    return _0x224170;
}
let Stats = {
    'petals': {},
    'enemies': {},
    'rarities': {}
};
Stats['rarities'] = BaseStats['rarities'], Stats['specialRarityDrops'] = BaseStats['specialRarityDrops'];
let pvpStats = structuredClone(Stats), tsStats = structuredClone(Stats), squareRootHealth = ['Root'], smallerEnemies = {
        'Leech': 0x2,
        'Dark\x20Electric\x20Eel': 0x2,
        'Electric\x20Eel': 0x2,
        'Shiny\x20Electric\x20Eel': 0x2,
        'BudLeech': 0x2,
        'Desert\x20Centipede': 1.4,
        'Centipede': 1.4,
        'Evil\x20Desert\x20Centipede': 1.4,
        'Evil\x20Centipede': 1.4,
        'BigDesertMissile': 1.4,
        'Soldier\x20Ant': 1.2,
        'Worker\x20Ant': 1.2,
        'Baby\x20Ant': 1.2,
        'Soldier\x20Fire\x20Ant': 1.2,
        'Baby\x20Fire\x20Ant': 1.2,
        'Worker\x20Fire\x20Ant': 1.2,
        'Soldier\x20Shiny\x20Ant': 1.2,
        'Locust': 1.15,
        'Soldier\x20Termite': 1.2,
        'Worker\x20Termite': 1.2,
        'Baby\x20Termite': 1.2,
        'Gnat': 1.25
    }, raritiesAmount = BaseStats['rarities']['length'];
function calculateDrops(_0x39f7c3, _0x20dc90, _0x10238c) {
    !_0x10238c && (_0x10238c = 0x0);
    const _0x3f6bc7 = [
            [
                0x56ab8,
                0x1174c,
                0x2710,
                0x3b6,
                0x96,
                0x7,
                0.7,
                0.022,
                0.00029,
                0.000002
            ],
            [
                0x21e,
                0x46,
                0x9,
                0x1,
                0.27,
                0.1,
                0.0045,
                0.0012,
                0.000022
            ],
            [
                0x8,
                1.9,
                0.9,
                0.377,
                0.16,
                0.045,
                0.032,
                0.015,
                0.013,
                0.003,
                0.0013,
                0.001,
                0.00012,
                0.000005,
                0.000002,
                3e-7
            ]
        ], _0x2fd84a = [
            [
                0x0,
                -2.2,
                -4.7,
                -7.9,
                -10.4,
                -14.4,
                -18.9,
                -24.1,
                -30.1
            ],
            [
                0x0,
                -2.5,
                -0x5,
                -7.5,
                -0xa,
                -12.5,
                -17.5,
                -20.9,
                -0x1a,
                -0x20,
                -0x26,
                -0x2b,
                -0x30,
                -0x35,
                -0x3a
            ],
            [
                0x0,
                -0x4,
                -10.35,
                -13.5,
                -0xf,
                -16.5,
                -0x12,
                -19.5,
                -0x15,
                -22.5,
                -0x18,
                -25.5,
                -0x1b,
                -28.5,
                -0x1e,
                -31.5,
                -0x21,
                -34.5,
                -0x24,
                -37.5,
                -0x27,
                -40.5,
                -0x2a
            ]
        ], _0x57dd16 = [
            [],
            [],
            []
        ];
    for (let _0x1ff9a1 = 0x0; _0x1ff9a1 < 0x3; _0x1ff9a1++) {
        for (let _0x57a53f = 0x0; _0x57a53f < _0x2fd84a[_0x1ff9a1]['length']; _0x57a53f++) {
            _0x57a53f == 0x0 ? _0x57dd16[_0x1ff9a1]['push'](0x0) : _0x57dd16[_0x1ff9a1]['push'](0x1 - Math['pow'](Math['E'], _0x2fd84a[_0x1ff9a1][_0x57a53f]));
        }
    }
    const _0x4ca9f8 = new Array(0x23)['fill'](0x0)['map'](_0x195a25 => new Array(0x12)['fill'](0x0));
    for (let _0x2b4cc8 = 0x0; _0x2b4cc8 < 0x23; ++_0x2b4cc8) {
        let _0x1e4722 = _0x2b4cc8 ? _0x2b4cc8 : 0x0;
        _0x2b4cc8 > 0x4 && (_0x1e4722 = _0x2b4cc8 - 0x1);
        _0x2b4cc8 > 0x8 && (_0x1e4722 = _0x2b4cc8 - 0x2);
        _0x2b4cc8 > 0xe && (_0x1e4722 = _0x2b4cc8 - 0x3);
        _0x2b4cc8 > 0x10 && (_0x1e4722 = _0x2b4cc8 - 0x4);
        _0x2b4cc8 > 0x12 && (_0x1e4722 = _0x2b4cc8 - 0x2);
        _0x2b4cc8 > 0x13 && (_0x1e4722 = _0x2b4cc8 - 0x3);
        _0x2b4cc8 > 0x15 && (_0x1e4722 = _0x2b4cc8 - 0x4);
        _0x2b4cc8 > 0x1a && (_0x1e4722 = _0x2b4cc8 - 0x5);
        _0x2b4cc8 > 0x1c && (_0x1e4722 = _0x2b4cc8 - 0x6);
        _0x2b4cc8 > 0x1e && (_0x1e4722 = _0x2b4cc8 - 0x7);
        _0x2b4cc8 > 0x20 && (_0x1e4722 = _0x2b4cc8 - 0x8);
        let _0xe26fc8 = 0x0, _0x4a719f = 0x0, _0x2f7b69 = 0x0;
        if (_0x2b4cc8 > 0x12)
            _0xe26fc8 = 0x2, _0x4a719f = 0x13, _0x2f7b69 = 0xc, _0x1e4722 -= _0x2f7b69;
        else
            _0x2b4cc8 > 0x9 && (_0xe26fc8 = 0x1, _0x4a719f = 0xa, _0x2f7b69 = 0x6, _0x1e4722 -= _0x2f7b69);
        for (let _0x49735d = 0x0; _0x49735d <= _0x1e4722; ++_0x49735d) {
            if (_0x49735d > 0x17)
                break;
            if (_0x49735d + _0x2f7b69 < _0x20dc90)
                continue;
            let _0x439dd0 = _0x57dd16[_0xe26fc8][_0x49735d], _0x537f54 = _0x57dd16[_0xe26fc8][_0x49735d + 0x1];
            if (_0x49735d === _0x1e4722)
                _0x537f54 = 0x1;
            const _0x2f7a61 = Math['pow'](_0x39f7c3 * _0x439dd0 + (0x1 - _0x39f7c3), 0x493e0 / _0x3f6bc7[_0xe26fc8][_0x2b4cc8 - _0x4a719f]), _0x47db92 = Math['pow'](_0x39f7c3 * _0x537f54 + (0x1 - _0x39f7c3), 0x493e0 / _0x3f6bc7[_0xe26fc8][_0x2b4cc8 - _0x4a719f]);
            _0x2b4cc8 >= _0x10238c && (_0x4ca9f8[_0x2b4cc8][_0x49735d + _0x2f7b69] = parseFloat((0x64 * (_0x47db92 - _0x2f7a61))['toFixed'](0x3)));
        }
    }
    return _0x4ca9f8;
}
globalThis['calculateStats'] = (_0x12a83e = ![], _0x4cfc06 = ![]) => {
    for (let _0x40081e in BaseStats['enemies']) {
        Stats['enemies'][_0x40081e] = {};
        for (let _0x52826b = 0x0; _0x52826b < raritiesAmount; _0x52826b++) {
            if (_0x52826b == 0x0)
                Stats['enemies'][_0x40081e][_0x52826b] = structuredClone(BaseStats['enemies'][_0x40081e]), BaseStats['enemies'][_0x40081e]['xp'] == undefined && (Stats['enemies'][_0x40081e][_0x52826b]['xp'] = Math['round'](BaseStats['rarities'][_0x52826b]['xp']));
            else {
                let _0x4b47c7 = {};
                _0x4b47c7 = structuredClone(Stats['enemies'][_0x40081e][_0x52826b - 0x1]), _0x4b47c7['health'] = Math['round'](_0x4b47c7['health'] * BaseStats['rarities'][_0x52826b]['health'] / BaseStats['rarities'][_0x52826b - 0x1]['health'] * 0x64) / 0x64, _0x4b47c7['damage'] = Math['round'](_0x4b47c7['damage'] * BaseStats['rarities'][_0x52826b]['damage'] / BaseStats['rarities'][_0x52826b - 0x1]['damage'] * 0x64) / 0x64;
                if (_0x4b47c7['armor'])
                    _0x4b47c7['armor'] = Math['round'](_0x4b47c7['armor'] * BaseStats['rarities'][_0x52826b]['health'] / BaseStats['rarities'][_0x52826b - 0x1]['health'] * 0x64) / 0x64;
                Object['keys'](smallerEnemies)['includes'](_0x40081e) && _0x52826b < 0x8 ? _0x4b47c7['radius'] = Math['round'](_0x4b47c7['radius'] * ((BaseStats['rarities'][_0x52826b]['radius'] / BaseStats['rarities'][_0x52826b - 0x1]['radius'] - 0x1) / smallerEnemies[_0x40081e] + 0x1) * 0x64) / 0x64 : _0x4b47c7['radius'] = Math['round'](_0x4b47c7['radius'] * BaseStats['rarities'][_0x52826b]['radius'] / BaseStats['rarities'][_0x52826b - 0x1]['radius'] * 0x64) / 0x64;
                _0x4b47c7['xp'] = Math['round'](_0x4b47c7['xp'] * BaseStats['rarities'][_0x52826b]['xp'] / BaseStats['rarities'][_0x52826b - 0x1]['xp'] * 0x64) / 0x64, _0x4b47c7['mass'] = Math['round'](_0x4b47c7['mass'] * BaseStats['rarities'][_0x52826b]['mass'] / BaseStats['rarities'][_0x52826b - 0x1]['mass'] * 0x64) / 0x64, _0x4b47c7['detectionDistance'] = Math['round'](_0x4b47c7['detectionDistance'] * BaseStats['rarities'][_0x52826b]['detectionDistance'] / BaseStats['rarities'][_0x52826b - 0x1]['detectionDistance'] * 0x64) / 0x64;
                _0x4b47c7['poison'] && (_0x4b47c7['poison'][0x0] = Math['round'](_0x4b47c7['poison'][0x0] * BaseStats['rarities'][_0x52826b]['damage'] / BaseStats['rarities'][_0x52826b - 0x1]['damage'] * 0x64) / 0x64, _0x4b47c7['poison'][0x1] = Math['round'](_0x4b47c7['poison'][0x1] * BaseStats['rarities'][_0x52826b]['damage'] / BaseStats['rarities'][_0x52826b - 0x1]['damage'] * 0x64) / 0x64);
                _0x4b47c7['summonBodyPoison'] && (_0x4b47c7['summonBodyPoison'][0x0] = Math['round'](_0x4b47c7['summonBodyPoison'][0x0] * BaseStats['rarities'][_0x52826b]['damage'] / BaseStats['rarities'][_0x52826b - 0x1]['damage'] * 0x64) / 0x64, _0x4b47c7['summonBodyPoison'][0x1] = Math['round'](_0x4b47c7['summonBodyPoison'][0x1] * BaseStats['rarities'][_0x52826b]['damage'] / BaseStats['rarities'][_0x52826b - 0x1]['damage'] * 0x64) / 0x64);
                _0x4b47c7['flowerBodyPoison'] && (_0x4b47c7['flowerBodyPoison'][0x0] = Math['round'](_0x4b47c7['flowerBodyPoison'][0x0] * BaseStats['rarities'][_0x52826b]['damage'] / BaseStats['rarities'][_0x52826b - 0x1]['damage'] * 0x64) / 0x64, _0x4b47c7['flowerBodyPoison'][0x1] = Math['round'](_0x4b47c7['flowerBodyPoison'][0x1] * BaseStats['rarities'][_0x52826b]['damage'] / BaseStats['rarities'][_0x52826b - 0x1]['damage'] * 0x64) / 0x64);
                for (let _0x48d9cd in Stats['enemies'][_0x40081e][_0x52826b - 0x1]) {
                    BaseStats['enemies'][_0x40081e]['override'] != undefined && (BaseStats['enemies'][_0x40081e]['override'][_0x52826b] != undefined && (Object['keys'](BaseStats['enemies'][_0x40081e]['override'][_0x52826b])['includes'](_0x48d9cd) && (_0x4b47c7[_0x48d9cd] = BaseStats['enemies'][_0x40081e]['override'][_0x52826b][_0x48d9cd])));
                }
                Stats['enemies'][_0x40081e][_0x52826b] = _0x4b47c7;
            }
        }
        let _0x5838f4 = structuredClone(BaseStats['enemies'][_0x40081e]['drops']);
        for (let _0x312031 in _0x5838f4) {
            let _0x20aa76 = calculateDrops(_0x5838f4[_0x312031][0x0], _0x5838f4[_0x312031][0x1], _0x5838f4[_0x312031][0x2]);
            for (let _0x2c9fb5 in Stats['enemies'][_0x40081e]) {
                if (_0x20aa76[_0x2c9fb5] !== undefined)
                    Stats['enemies'][_0x40081e][_0x2c9fb5]['drops'][_0x312031] = _0x20aa76[_0x2c9fb5];
                else
                    Stats['enemies'][_0x40081e][_0x2c9fb5]['drops'][_0x312031] = {};
            }
        }
    }
    for (let _0x32b0a7 of squareRootHealth) {
        for (let _0x10e1ea in Stats['enemies'][_0x32b0a7]) {
            Stats['enemies'][_0x32b0a7][_0x10e1ea]['health'] = Math['round'](Stats['enemies'][_0x32b0a7][_0x10e1ea]['health'] ** 0.66);
        }
    }
    for (let _0x47e7aa in BaseStats['petals']) {
        if (_0x47e7aa != 'default') {
            let _0x4cd84d = BaseStats['petals'][_0x47e7aa];
            Stats['petals'][_0x47e7aa] = {};
            for (let _0x35f740 = 0x0; _0x35f740 < raritiesAmount; _0x35f740++) {
                if (_0x35f740 == 0x0) {
                    Stats['petals'][_0x47e7aa][_0x35f740] = structuredClone(BaseStats['petals']['default']);
                    for (let _0x146776 in _0x4cd84d) {
                        Stats['petals'][_0x47e7aa][_0x35f740][_0x146776] = _0x4cd84d[_0x146776], _0x12a83e && (_0x4cd84d['pvpOverride'] != undefined && (_0x4cd84d['pvpOverride'][_0x35f740] != undefined && (Object['keys'](_0x4cd84d['pvpOverride'][_0x35f740])['includes'](_0x146776) && (_0x4cd84d['damageScalers']['includes'](_0x146776) || _0x4cd84d['healthScalers']['includes'](_0x146776) ? Stats['petals'][_0x47e7aa][_0x35f740][_0x146776] *= _0x4cd84d['pvpOverride'][_0x35f740][_0x146776] : Stats['petals'][_0x47e7aa][_0x35f740][_0x146776] = _0x4cd84d['pvpOverride'][_0x35f740][_0x146776])))), _0x4cfc06 && (_0x4cd84d['tsPetalOverride'] != undefined && (_0x4cd84d['tsPetalOverride'][_0x35f740] != undefined && (Object['keys'](_0x4cd84d['tsPetalOverride'][_0x35f740])['includes'](_0x146776) && (_0x4cd84d['damageScalers']['includes'](_0x146776) || _0x4cd84d['healthScalers']['includes'](_0x146776) ? Stats['petals'][_0x47e7aa][_0x35f740][_0x146776] *= _0x4cd84d['tsPetalOverride'][_0x35f740][_0x146776] : Stats['petals'][_0x47e7aa][_0x35f740][_0x146776] = _0x4cd84d['tsPetalOverride'][_0x35f740][_0x146776]))));
                    }
                } else {
                    let _0x5afa4b = BaseStats['rarities'][_0x35f740]['petalDamage'] / BaseStats['rarities'][_0x35f740 - 0x1]['petalDamage'], _0x28e875 = BaseStats['rarities'][_0x35f740]['petalHealth'] / BaseStats['rarities'][_0x35f740 - 0x1]['petalHealth'], _0x45ac5e = BaseStats['rarities'][_0x35f740]['petalHeal'] / BaseStats['rarities'][_0x35f740 - 0x1]['petalHeal'], _0x32fda3 = BaseStats['rarities'][_0x35f740]['petalMass'] / BaseStats['rarities'][_0x35f740 - 0x1]['petalMass'], _0x41a12d = {};
                    for (let _0x1eb8c4 in Stats['petals'][_0x47e7aa][_0x35f740 - 0x1]) {
                        let _0x15bf69 = ![];
                        if (_0x4cd84d['damageScalers']['includes'](_0x1eb8c4))
                            _0x15bf69 = !![], _0x41a12d[_0x1eb8c4] = Math['round'](Stats['petals'][_0x47e7aa][_0x35f740 - 0x1][_0x1eb8c4] * _0x5afa4b * 0x64) / 0x64;
                        else {
                            if (_0x4cd84d['healthScalers']['includes'](_0x1eb8c4))
                                _0x15bf69 = !![], _0x41a12d[_0x1eb8c4] = Math['round'](Stats['petals'][_0x47e7aa][_0x35f740 - 0x1][_0x1eb8c4] * _0x28e875 * 0x64) / 0x64;
                            else {
                                if (_0x4cd84d['healScalers'])
                                    _0x4cd84d['healScalers']['includes'](_0x1eb8c4) && (_0x15bf69 = !![], _0x41a12d[_0x1eb8c4] = Math['round'](Stats['petals'][_0x47e7aa][_0x35f740 - 0x1][_0x1eb8c4] * _0x45ac5e * 0x64) / 0x64);
                                else
                                    _0x4cd84d['massScalers'] && (_0x4cd84d['massScalers']['includes'](_0x1eb8c4) && (_0x15bf69 = !![], _0x41a12d[_0x1eb8c4] = Math['round'](Stats['petals'][_0x47e7aa][_0x35f740 - 0x1][_0x1eb8c4] * _0x32fda3 * 0x64) / 0x64));
                            }
                        }
                        if (_0x1eb8c4 == 'poison')
                            _0x41a12d['poison'] = [], _0x41a12d['poison'][0x0] = Math['round'](Stats['petals'][_0x47e7aa][_0x35f740 - 0x1]['poison'][0x0] * _0x5afa4b * 0x64) / 0x64, _0x41a12d['poison'][0x1] = Math['round'](Stats['petals'][_0x47e7aa][_0x35f740 - 0x1]['poison'][0x1] * _0x5afa4b * 0x64) / 0x64;
                        else {
                            if (_0x1eb8c4 == 'summonBodyPoison')
                                _0x41a12d['summonBodyPoison'] = [], _0x41a12d['summonBodyPoison'][0x0] = Math['round'](Stats['petals'][_0x47e7aa][_0x35f740 - 0x1]['summonBodyPoison'][0x0] * _0x5afa4b * 0x64) / 0x64, _0x41a12d['summonBodyPoison'][0x1] = Math['round'](Stats['petals'][_0x47e7aa][_0x35f740 - 0x1]['summonBodyPoison'][0x1] * _0x5afa4b * 0x64) / 0x64;
                            else {
                                if (_0x1eb8c4 == 'flowerBodyPoison')
                                    _0x41a12d['flowerBodyPoison'] = [], _0x41a12d['flowerBodyPoison'][0x0] = Math['round'](Stats['petals'][_0x47e7aa][_0x35f740 - 0x1]['flowerBodyPoison'][0x0] * _0x5afa4b * 0x64) / 0x64, _0x41a12d['flowerBodyPoison'][0x1] = Math['round'](Stats['petals'][_0x47e7aa][_0x35f740 - 0x1]['flowerBodyPoison'][0x1] * _0x5afa4b * 0x64) / 0x64;
                                else
                                    !_0x15bf69 && (_0x41a12d[_0x1eb8c4] = Stats['petals'][_0x47e7aa][_0x35f740 - 0x1][_0x1eb8c4]);
                            }
                        }
                        if (_0x12a83e)
                            _0x4cd84d['pvpOverride'] != undefined ? _0x4cd84d['pvpOverride'][_0x35f740] != undefined && (Object['keys'](_0x4cd84d['pvpOverride'][_0x35f740])['includes'](_0x1eb8c4) && (_0x4cd84d['damageScalers']['includes'](_0x1eb8c4) || _0x4cd84d['healthScalers']['includes'](_0x1eb8c4) || _0x4cd84d['healScalers']?.['includes'](_0x1eb8c4) || _0x4cd84d['massScalers']?.['includes'](_0x1eb8c4) ? _0x41a12d[_0x1eb8c4] *= _0x4cd84d['pvpOverride'][_0x35f740][_0x1eb8c4] : _0x1eb8c4 == 'poison' || _0x1eb8c4 == 'summonBodyPoison' || _0x1eb8c4 == 'flowerBodyPoison' ? (_0x41a12d[_0x1eb8c4][0x0] *= _0x4cd84d['pvpOverride'][_0x35f740][_0x1eb8c4], _0x41a12d[_0x1eb8c4][0x1] *= _0x4cd84d['pvpOverride'][_0x35f740][_0x1eb8c4]) : _0x41a12d[_0x1eb8c4] = _0x4cd84d['pvpOverride'][_0x35f740][_0x1eb8c4])) : _0x4cd84d['override'] != undefined && (_0x4cd84d['override'][_0x35f740] != undefined && (Object['keys'](_0x4cd84d['override'][_0x35f740])['includes'](_0x1eb8c4) && (_0x4cd84d['damageScalers']['includes'](_0x1eb8c4) || _0x4cd84d['healthScalers']['includes'](_0x1eb8c4) || _0x4cd84d['healScalers']?.['includes'](_0x1eb8c4) || _0x4cd84d['massScalers']?.['includes'](_0x1eb8c4) ? _0x41a12d[_0x1eb8c4] *= _0x4cd84d['override'][_0x35f740][_0x1eb8c4] : _0x1eb8c4 == 'poison' || _0x1eb8c4 == 'summonBodyPoison' || _0x1eb8c4 == 'flowerBodyPoison' ? (_0x41a12d[_0x1eb8c4][0x0] *= _0x4cd84d['override'][_0x35f740][_0x1eb8c4], _0x41a12d[_0x1eb8c4][0x1] *= _0x4cd84d['override'][_0x35f740][_0x1eb8c4]) : _0x41a12d[_0x1eb8c4] = _0x4cd84d['override'][_0x35f740][_0x1eb8c4])));
                        else {
                            if (_0x4cfc06) {
                                let _0x4c1cdf = ![];
                                _0x4cd84d['tsPetalOverride'] != undefined ? _0x4cd84d['tsPetalOverride'][_0x35f740] != undefined ? Object['keys'](_0x4cd84d['tsPetalOverride'][_0x35f740])['includes'](_0x1eb8c4) && (_0x4cd84d['damageScalers']['includes'](_0x1eb8c4) || _0x4cd84d['healthScalers']['includes'](_0x1eb8c4) || _0x4cd84d['healScalers']?.['includes'](_0x1eb8c4) || _0x4cd84d['massScalers']?.['includes'](_0x1eb8c4) ? _0x41a12d[_0x1eb8c4] *= _0x4cd84d['tsPetalOverride'][_0x35f740][_0x1eb8c4] : _0x1eb8c4 == 'poison' || _0x1eb8c4 == 'summonBodyPoison' || _0x1eb8c4 == 'flowerBodyPoison' ? (_0x41a12d[_0x1eb8c4][0x0] *= _0x4cd84d['tsPetalOverride'][_0x35f740][_0x1eb8c4], _0x41a12d[_0x1eb8c4][0x1] *= _0x4cd84d['tsPetalOverride'][_0x35f740][_0x1eb8c4]) : _0x41a12d[_0x1eb8c4] = _0x4cd84d['tsPetalOverride'][_0x35f740][_0x1eb8c4]) : _0x4c1cdf = !![] : _0x4c1cdf = !![];
                                if (_0x4c1cdf == !![])
                                    _0x4cd84d['override'] != undefined && (_0x4cd84d['override'][_0x35f740] != undefined && (Object['keys'](_0x4cd84d['override'][_0x35f740])['includes'](_0x1eb8c4) && (_0x4cd84d['damageScalers']['includes'](_0x1eb8c4) || _0x4cd84d['healthScalers']['includes'](_0x1eb8c4) || _0x4cd84d['healScalers']?.['includes'](_0x1eb8c4) || _0x4cd84d['massScalers']?.['includes'](_0x1eb8c4) ? _0x41a12d[_0x1eb8c4] *= _0x4cd84d['override'][_0x35f740][_0x1eb8c4] : _0x1eb8c4 == 'poison' || _0x1eb8c4 == 'summonBodyPoison' || _0x1eb8c4 == 'flowerBodyPoison' ? (_0x41a12d[_0x1eb8c4][0x0] *= _0x4cd84d['override'][_0x35f740][_0x1eb8c4], _0x41a12d[_0x1eb8c4][0x1] *= _0x4cd84d['override'][_0x35f740][_0x1eb8c4]) : _0x41a12d[_0x1eb8c4] = _0x4cd84d['override'][_0x35f740][_0x1eb8c4])));
                            } else
                                _0x4cd84d['override'] != undefined && (_0x4cd84d['override'][_0x35f740] != undefined && (Object['keys'](_0x4cd84d['override'][_0x35f740])['includes'](_0x1eb8c4) && (_0x4cd84d['damageScalers']['includes'](_0x1eb8c4) || _0x4cd84d['healthScalers']['includes'](_0x1eb8c4) || _0x4cd84d['healScalers']?.['includes'](_0x1eb8c4) || _0x4cd84d['massScalers']?.['includes'](_0x1eb8c4) ? _0x41a12d[_0x1eb8c4] *= _0x4cd84d['override'][_0x35f740][_0x1eb8c4] : _0x1eb8c4 == 'poison' || _0x1eb8c4 == 'summonBodyPoison' || _0x1eb8c4 == 'flowerBodyPoison' ? (_0x41a12d[_0x1eb8c4][0x0] *= _0x4cd84d['override'][_0x35f740][_0x1eb8c4], _0x41a12d[_0x1eb8c4][0x1] *= _0x4cd84d['override'][_0x35f740][_0x1eb8c4]) : _0x41a12d[_0x1eb8c4] = _0x4cd84d['override'][_0x35f740][_0x1eb8c4])));
                        }
                    }
                    Stats['petals'][_0x47e7aa][_0x35f740] = _0x41a12d;
                }
            }
        }
        if (BaseStats['petals'][_0x47e7aa]['slowdown']) {
            let _0x17995a = structuredClone(BaseStats['petals'][_0x47e7aa]['slowdown']), _0x1f1542 = getSlowdown(_0x17995a);
            for (let _0x46299e in Stats['petals'][_0x47e7aa]) {
                _0x12a83e ? Stats['petals'][_0x47e7aa][_0x46299e]['slowdown'] = _0x1f1542[0x1] : Stats['petals'][_0x47e7aa][_0x46299e]['slowdown'] = _0x1f1542[_0x46299e];
            }
        }
    }
};
const alphabet = 'abcdefghijklmnopqrstuvwxyz'['split'](''), alphabetUpper = 'abcdefghijklmnopqrstuvwxyz'['toUpperCase']()['split'](''), numbers = '0123456789'['split'](''), chars = alphabet['concat'](alphabetUpper)['concat'](numbers), letterToNumber = {};
for (let i = 0x0; i < chars['length']; i++) {
    letterToNumber[chars[i]] = i;
}
function stringToNumberArray(_0x5ca4fc) {
    return _0x5ca4fc['split']('')['map'](_0x226c20 => letterToNumber[_0x226c20]);
}
const oldStats = Stats, oldRarityStats = Stats['rarities'];
Stats['rarities'] = [Stats['rarities'][0x0]];
for (let i = 0x1; i < oldRarityStats['length']; i++) {
    Stats['rarities'][i] = {};
    for (let key in oldRarityStats[i]) {
        Stats['rarities'][i][key] = Stats['rarities'][i - 0x1][key] * 1.05;
    }
    Stats['rarities'][i]['name'] = oldRarityStats[i]['name'];
}
BaseStats['rarities'] = Stats['rarities'], calculateStats(!![]), pvpStats = structuredClone(Stats), Stats = {
    'petals': {},
    'enemies': {},
    'rarities': {}
}, Stats['rarities'] = BaseStats['rarities'] = oldRarityStats, Stats['specialRarityDrops'] = BaseStats['specialRarityDrops'], calculateStats(![], !![]), tsStats = structuredClone(Stats), Stats = {
    'petals': {},
    'enemies': {},
    'rarities': {}
}, Stats['rarities'] = BaseStats['rarities'] = oldRarityStats, Stats['specialRarityDrops'] = BaseStats['specialRarityDrops'], calculateStats(![]), Stats['levelPerXp'] = _0xf79fe => {
    return 11.18213 * Math['log'](0.000480827337943866 * (0x820 + _0xf79fe));
}, Stats['hpPerLevel'] = _0x24a986 => {
    let _0x5c6574 = Math['floor'](_0x24a986);
    return (_0x5c6574 ** 0x3 / 0xe10 + _0x5c6574 ** 0x2 / 0x19 + 0x4 * _0x5c6574) ** 1.71 / 0xa + 0x3e8;
}, Stats['basePetalSlots'] = 0x5, Stats['petalSlotThresholds'] = [
    0xf,
    0x1e,
    0x2d,
    0x3c,
    0x4b,
    0x3e8
], Stats['validTypeAndRarity'] = _0x1a37da => {
    if (typeof _0x1a37da != 'object')
        return ![];
    if (_0x1a37da == null)
        return ![];
    if (Object['keys'](_0x1a37da)['length'] !== 0x2)
        return ![];
    if (typeof _0x1a37da['type'] != 'string')
        return ![];
    if (typeof _0x1a37da['rarity'] != 'number')
        return ![];
    if (Stats['petals'][_0x1a37da['type']] === undefined)
        return ![];
    if (Stats['petals'][_0x1a37da['type']][_0x1a37da['rarity']] === undefined)
        return ![];
    return !![];
}, Stats['validEnemyTypeAndRarity'] = _0x14f90f => {
    if (_0x14f90f['toString'] === undefined)
        return ![];
    if (Object['keys'](_0x14f90f)['length'] !== 0x2)
        return ![];
    if (Stats['enemies'][_0x14f90f['type']] === undefined)
        return ![];
    if (Stats['enemies'][_0x14f90f['type']][_0x14f90f['rarity']] === undefined)
        return ![];
    return !![];
}, Stats['getPetalCustomBiome'] = globalThis['getPetalCustomBiome'] = _0x47610f => {
    if (_0x47610f === 'Basic')
        return undefined;
    return BaseStats['petals'][_0x47610f]?.['customBiome'];
};
function deepFreeze(_0x5c02d1) {
    return Object['freeze'](_0x5c02d1), Object['getOwnPropertyNames'](_0x5c02d1)['forEach'](_0xe9f555 => {
        const _0x5c4195 = _0x5c02d1[_0xe9f555];
        _0x5c4195 !== null && (typeof _0x5c4195 === 'object' || typeof _0x5c4195 === 'function') && !Object['isFrozen'](_0x5c4195) && deepFreeze(_0x5c4195);
    }), _0x5c02d1;
}
function deepWatch(_0x50f99f, _0x187055, _0x231bff = '') {
    return new Proxy(_0x50f99f, {
        'get'(_0xac177e, _0x394224) {
            const _0x579658 = _0xac177e[_0x394224];
            if (typeof _0x579658 === 'object' && _0x579658 !== null)
                return deepWatch(_0x579658, _0x187055, _0x231bff + ('.' + _0x394224));
            return _0x579658;
        },
        'set'(_0x4a80d7, _0x4a2c69, _0x5b8eff) {
            return console['log']('Property\x20\x22' + _0x231bff + '.' + _0x4a2c69 + '\x22\x20changed\x20from', _0x4a80d7[_0x4a2c69], 'to', _0x5b8eff), _0x187055(_0x4a2c69, _0x4a80d7[_0x4a2c69], _0x5b8eff), _0x4a80d7[_0x4a2c69] = _0x5b8eff, !![];
        }
    });
}
if (typeof window === 'undefined') {
    let callback = (_0x275bf9, _0x4b88bb, _0x22092e) => {
    };
    module['exports'] = {
        'Stats': Stats,
        'BaseStats': BaseStats,
        'pvpStats': pvpStats,
        'tsStats': tsStats
    };
}