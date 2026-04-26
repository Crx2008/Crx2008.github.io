const ROMAN_NUMERALS = [
    'I',
    'II',
    'III',
    'IV',
    'V',
    'VI',
    'VII',
    'VIII',
    'IX',
    'X'
];
function createLinearSkillChain(_0x1f8678, _0x1a086e, _0x4c57dc, _0x5d9423, _0x31d9c1, _0x6f4edc, _0x1f2b4c, _0x4a6959, _0x255555) {
    const _0x24ac3a = [];
    for (let _0x5b5c1e = 0x1; _0x5b5c1e <= _0x5d9423; _0x5b5c1e++) {
        const _0x1864d0 = ROMAN_NUMERALS[_0x5b5c1e - 0x1] || _0x5b5c1e;
        _0x24ac3a['push']({
            'id': _0x1f8678 + '_' + _0x5b5c1e,
            'name': _0x1a086e + '\x20' + _0x1864d0,
            'description': _0x4c57dc,
            'maxLevel': 0x1,
            'costPerLevel': _0x31d9c1,
            'requires': _0x5b5c1e === 0x1 ? _0x6f4edc : [_0x1f8678 + '_' + (_0x5b5c1e - 0x1)],
            'statKey': _0x1f2b4c,
            'baseValue': _0x4a6959,
            'valuePerLevel': _0x255555
        });
    }
    return _0x24ac3a;
}
const SKILL_TREES = {
        'Abyssal\x20Artifact': {
            'name': 'Abyssal\x20Artifact',
            'description': 'Enhances\x20Egg\x20petal\x20performance',
            'color': '#7b68ee',
            'icon': '🥚',
            'passiveEffects': {
                'eggHpMultiplier': 1.4,
                'eggMassMultiplier': 1.4,
                'eggDamageMultiplier': 1.25
            },
            'nodes': [
                {
                    'id': 'root',
                    'name': 'Egg\x20Enhancement',
                    'description': 'Enhances\x20base\x20Egg\x20petal\x20performance',
                    'maxLevel': 0x1,
                    'costPerLevel': 0x0,
                    'requires': [],
                    'statKey': null,
                    'baseValue': 0x0,
                    'valuePerLevel': 0x0,
                    'isRoot': !![]
                },
                ...createLinearSkillChain('egg_hp', 'HP\x20Boost', 'Increases\x20Egg\x20HP\x20multiplier', 0xa, 0x1, ['root'], 'eggHpMultiplier', 1.4, 0.03),
                ...createLinearSkillChain('egg_damage', 'Damage\x20Boost', 'Increases\x20Egg\x20damage\x20multiplier', 0xa, 0x1, ['root'], 'eggDamageMultiplier', 1.25, 0.03),
                ...createLinearSkillChain('egg_mass', 'Mass\x20Boost', 'Increases\x20Egg\x20size\x20(hitbox)', 0xa, 0x1, ['egg_hp_3'], 'eggMassMultiplier', 1.4, 0.03),
                ...createLinearSkillChain('cooldown', 'Cooldown\x20Reduction', 'Reduces\x20ultimate\x20cooldown', 0xa, 0x1, ['egg_damage_3'], 'cooldown', 0x3c, -1.5),
                ...createLinearSkillChain('duration', 'Death\x20Delay', 'Extends\x20bandage\x20effect\x20duration', 0x5, 0x2, ['cooldown_3'], 'duration', 0x2, 0.1)
            ]
        },
        'Scorched\x20Artifact': {
            'name': 'Scorched\x20Artifact',
            'description': 'Enhances\x20healing\x20and\x20provides\x20squad\x20buffs',
            'color': '#ff6b6b',
            'icon': '🔥',
            'passiveEffects': {
                'squadHealShare': 0.33,
                'healMultiplier': 1.2
            },
            'nodes': [
                {
                    'id': 'root',
                    'name': 'Healing\x20Enhancement',
                    'description': 'Enhances\x20healing\x20effects',
                    'maxLevel': 0x1,
                    'costPerLevel': 0x0,
                    'requires': [],
                    'statKey': null,
                    'baseValue': 0x0,
                    'valuePerLevel': 0x0,
                    'isRoot': !![]
                },
                ...createLinearSkillChain('heal_mult', 'Heal\x20Multiplier', 'Increases\x20healing\x20amount', 0xa, 0x1, ['root'], 'healMultiplier', 1.2, 0.1),
                ...createLinearSkillChain('ult_cd', 'Ult\x20Cooldown', 'Reduces\x20ultimate\x20cooldown', 0x6, 0x1, ['root'], 'cooldown', 0x3c, -1.5),
                ...createLinearSkillChain('duration', 'Buff\x20Duration', 'Extends\x20raid\x20heal\x20buff\x20duration', 0x8, 0x1, ['heal_mult_3'], 'duration', 0x7, 0.2),
                ...createLinearSkillChain('heal_boost', 'Raid\x20Boost', 'Increases\x20raid\x20heal\x20buff\x20effect', 0x8, 0x1, ['ult_cd_3'], 'healBoost', 0.3, 0.01)
            ]
        },
        'Verdant\x20Artifact': {
            'name': 'Verdant\x20Artifact',
            'description': 'Increases\x20damage\x20output\x20and\x20petal\x20performance',
            'color': '#32cd32',
            'icon': '🌿',
            'passiveEffects': { 'dpsMultiplier': 1.8 },
            'nodes': [
                {
                    'id': 'root',
                    'name': 'Frenzy\x20Core',
                    'description': 'Unlocks\x20frenzy\x20mode\x20path',
                    'maxLevel': 0x1,
                    'costPerLevel': 0x0,
                    'requires': [],
                    'statKey': null,
                    'baseValue': 0x0,
                    'valuePerLevel': 0x0,
                    'isRoot': !![]
                },
                ...createLinearSkillChain('dps', 'DPS\x20Boost', 'Increases\x20overall\x20damage\x20output', 0xa, 0x1, ['root'], 'dpsMultiplier', 1.2, 0.02),
                ...createLinearSkillChain('ult_cd', 'Petal\x20Cooldown', 'Reduces\x20petal\x20reload\x20time', 0x6, 0x1, ['root'], 'cooldownReduction', 0x0, 0.04),
                ...createLinearSkillChain('duration', 'Frenzy\x20Duration', 'Extends\x20frenzy\x20mode\x20duration', 0x6, 0x1, ['dps_3'], 'duration', 0x8, 0.2),
                ...createLinearSkillChain('damage_mult', 'Frenzy\x20Damage', 'Increases\x20frenzy\x20mode\x20damage\x20bonus', 0x8, 0x1, ['ult_cd_3'], 'damageMultiplier', 0x0, 0.1)
            ]
        },
        'Cosmic\x20Artifact': {
            'name': 'Cosmic\x20Artifact',
            'description': 'Enhances\x20survivability\x20and\x20knockback\x20effects',
            'color': '#4169e1',
            'icon': '✨',
            'passiveEffects': { 'hpMultiplier': 1.2 },
            'nodes': [
                {
                    'id': 'root',
                    'name': 'Cosmic\x20Power',
                    'description': 'Masters\x20the\x20core\x20of\x20cosmic\x20energy',
                    'maxLevel': 0x1,
                    'costPerLevel': 0x0,
                    'requires': [],
                    'statKey': null,
                    'baseValue': 0x0,
                    'valuePerLevel': 0x0,
                    'isRoot': !![]
                },
                ...createLinearSkillChain('hp_mult', 'HP\x20Multiplier', 'Increases\x20HP', 0x8, 0x1, ['root'], 'hpMultiplier', 1.2, 0.1),
                ...createLinearSkillChain('ult_cd', 'Skill\x20Cooldown', 'Reduces\x20shockwave\x20cooldown', 0x8, 0x1, ['root'], 'cooldown', 0x3c, -1.5),
                ...createLinearSkillChain('range', 'Knockback\x20Range', 'Expands\x20shockwave\x20knockback\x20range', 0x6, 0x1, ['hp_mult_3'], 'range', 0x1f4, 0x14),
                ...createLinearSkillChain('knockback', 'Knockback\x20Force', 'Bubble\x20knockback\x20force\x20multiplier', 0xa, 0x1, ['range_3'], 'knockbackForce', 0x1, 0.05)
            ]
        },
        'Chimera': {
            'name': 'Chimera',
            'description': 'Transform\x20into\x20a\x20powerful\x20mob\x20with\x20unique\x20abilities',
            'color': '#9932cc',
            'icon': '🐝',
            'passiveEffects': { 'mobDamageMultiplier': 1.5 },
            'nodes': [
                {
                    'id': 'root',
                    'name': 'Mob\x20Form',
                    'description': 'Unlocks\x20mob\x20transformation',
                    'maxLevel': 0x1,
                    'costPerLevel': 0x0,
                    'requires': [],
                    'statKey': null,
                    'baseValue': 0x0,
                    'valuePerLevel': 0x0,
                    'isRoot': !![]
                },
                ...createLinearSkillChain('damage', 'Damage\x20Boost', 'Increases\x20mob\x20form\x20damage', 0xa, 0x1, ['root'], 'mobDamageMultiplier', 1.5, 0.1),
                ...createLinearSkillChain('speed', 'Movement\x20Speed', 'Increases\x20movement\x20speed\x20in\x20mob\x20form', 0x8, 0x1, ['root'], 'mobSpeedMultiplier', 0x1, 0.05),
                ...createLinearSkillChain('hp', 'Health\x20Boost', 'Increases\x20max\x20HP\x20in\x20mob\x20form', 0xa, 0x1, ['damage_3'], 'mobHpMultiplier', 0x1, 0.1),
                ...createLinearSkillChain('ult_cd', 'Ability\x20Cooldown', 'Reduces\x20ability\x20cooldowns', 0x6, 0x1, ['speed_3'], 'abilityCooldown', 0xa, -0.5)
            ]
        }
    }, ARTIFACT_TYPES = [
        'Abyssal\x20Artifact',
        'Scorched\x20Artifact',
        'Verdant\x20Artifact',
        'Cosmic\x20Artifact'
    ];
class SpecialGlobalInventory {
    constructor() {
        this['menuActive'] = ![], this['hoveringOverButton'] = ![], this['hoveringOverX'] = ![], this['fadingOut'] = ![], this['w'] = 0x1bd, this['h'] = 0x299, this['x'] = 0x82, this['y'] = canvas['h'] - this['h'] - 0x14, this['lastOpenTime'] = 0x0, this['lastCloseTime'] = 0x0, this['originalFadeOutTime'] = 0x0, this['artifacts'] = {}, this['equippedArtifact'] = null, this['selectedArtifactIndex'] = -0x1, this['availableLevelPoints'] = 0x0, this['nodePositions'] = {}, this['hoveredNode'] = null, this['hoveredArtifact'] = null, this['hoveredTooltip'] = null, this['skillTreeOffset'] = {
            'x': 0x0,
            'y': 0x0
        }, this['skillTreeRenderOffset'] = {
            'x': 0x0,
            'y': 0x0
        }, this['isDraggingSkillTree'] = ![], this['dragStartPos'] = {
            'x': 0x0,
            'y': 0x0
        }, this['hoveringOverReset'] = ![], this['lastArtifactResetTime'] = 0x0, this['lastClickMobType'] = null, this['lastClickUnequipSlot'] = null, this['initDefaultArtifacts']();
    }
    ['initDefaultArtifacts']() {
        const _0x590fd8 = 0x0;
        for (const _0x21b3e2 of ARTIFACT_TYPES) {
            const _0x15e1b6 = {}, _0x3fae3d = SKILL_TREES[_0x21b3e2];
            for (const _0x5d4173 of _0x3fae3d['nodes']) {
                _0x15e1b6[_0x5d4173['id']] = 0x0;
            }
            const _0x2fb27b = _0x3fae3d['nodes']['find'](_0x2b66fc => _0x2b66fc['isRoot']);
            _0x2fb27b && (_0x15e1b6[_0x2fb27b['id']] = 0x1);
            const _0x27caa6 = new Petal({
                    'type': _0x21b3e2,
                    'rarity': _0x590fd8,
                    'x': 0x0,
                    'y': 0x0,
                    'distance': 0x0,
                    'angle': 0x0,
                    'maxHp': 0xc9f2c9cd04675000000000000,
                    'hp': 0xc9f2c9cd04675000000000000,
                    'maxReload': 0x3,
                    'reload': 0x3,
                    'damage': 0x0
                }), _0x15c0f1 = new Petal({
                    'type': _0x21b3e2,
                    'rarity': _0x590fd8,
                    'x': 0x0,
                    'y': 0x0,
                    'distance': 0x0,
                    'angle': 0x0,
                    'maxHp': 0xc9f2c9cd04675000000000000,
                    'hp': 0xc9f2c9cd04675000000000000,
                    'maxReload': 0x3,
                    'reload': 0x3,
                    'damage': 0x0
                }), _0x4ede89 = new PetalContainer([_0x27caa6], {
                    'x': 0x0,
                    'y': 0x0,
                    'w': 0x41,
                    'h': 0x41,
                    'originalX': 0x0,
                    'originalY': 0x0,
                    'radius': 32.5,
                    'toOscillate': ![],
                    'petalStats': null
                }, _0x21b3e2 + '_artifact', 0x1, 0x0);
            _0x4ede89['amount'] = 0x0;
            const _0x494535 = new PetalContainer([_0x15c0f1], {
                'x': 0x0,
                'y': 0x0,
                'w': 0x41,
                'h': 0x41,
                'originalX': 0x0,
                'originalY': 0x0,
                'radius': 32.5,
                'toOscillate': ![],
                'petalStats': null
            }, _0x21b3e2 + '_artifact_render', 0x1, 0x0);
            _0x494535['amount'] = 0x0, _0x494535['x'] = 0x0, _0x494535['y'] = 0x0, _0x494535['render']['x'] = 0x0, _0x494535['render']['y'] = 0x0, _0x494535['spawnAnimation'] = 0x1, this['artifacts'][_0x21b3e2] = {
                'skillLevels': _0x15e1b6,
                'totalLevelPoints': 0x0,
                'petalContainer': _0x4ede89,
                'renderPetalContainer': _0x494535
            };
        }
    }
    ['addPetalContainer'](_0x5acdb3, _0x3faaf5 = ![], _0x332442 = !![]) {
        if (!showCommunityBiomes && !petalRenderMap[_0x5acdb3['type']])
            return;
        const _0x1f5a7a = _0x5acdb3['type'];
        if (!this['artifacts'][_0x1f5a7a])
            return;
        const _0x520b81 = this['artifacts'][_0x1f5a7a];
        _0x520b81['petalContainer']['amount'] = 0x1, _0x520b81['renderPetalContainer']['amount'] = 0x1, _0x3faaf5 !== ![] && send({
            'addPetalContainer': {
                'type': _0x1f5a7a,
                'rarity': _0x5acdb3['rarity'] || 0x0,
                'amount': 0x1
            }
        });
    }
    ['removePetalContainer'](_0x4af60c, _0x5853e8) {
        for (const _0x365846 of ARTIFACT_TYPES) {
            const _0x54ca1d = this['artifacts'][_0x365846];
            if (!_0x54ca1d['petalContainer'] || _0x54ca1d['petalContainer']['amount'] <= 0x0)
                continue;
            if (_0x54ca1d['petalContainer']['rarity'] === _0x4af60c) {
                const _0x2320a3 = _0x54ca1d['petalContainer'];
                return _0x54ca1d['petalContainer']['amount'] = 0x0, _0x54ca1d['renderPetalContainer']['amount'] = 0x0, _0x2320a3;
            }
        }
        return null;
    }
    ['removeByRarityAndType'](_0x4f722d, _0x7a97a5) {
        const _0xe7d0af = this['artifacts'][_0x7a97a5];
        if (!_0xe7d0af)
            return ![];
        if (_0xe7d0af['petalContainer']?.['rarity'] === _0x4f722d && _0xe7d0af['petalContainer']?.['amount'] > 0x0) {
            const _0x342d15 = _0xe7d0af['petalContainer'];
            return _0xe7d0af['petalContainer']['amount'] = 0x0, _0xe7d0af['renderPetalContainer']['amount'] = 0x0, !![];
        }
        return ![];
    }
    ['getNodeLevel'](_0x434a88, _0x341383) {
        return this['artifacts'][_0x434a88]?.['skillLevels'][_0x341383] || 0x0;
    }
    ['getNodeValue'](_0x247809, _0x4850b) {
        const _0x2888b4 = SKILL_TREES[_0x247809], _0x2511d2 = _0x2888b4['nodes']['find'](_0x824903 => _0x824903['id'] === _0x4850b);
        if (!_0x2511d2 || !_0x2511d2['statKey'])
            return null;
        const _0x1d017e = this['getNodeLevel'](_0x247809, _0x4850b);
        return _0x2511d2['baseValue'] + _0x2511d2['valuePerLevel'] * _0x1d017e;
    }
    ['getArtifactValue'](_0x4d91f3, _0x3c2814) {
        const _0x5f3106 = SKILL_TREES[_0x4d91f3], _0x28d91b = _0x5f3106['passiveEffects'][_0x3c2814] || 0x0;
        let _0x1ea1d8 = 0x0;
        for (const _0x132c0a of _0x5f3106['nodes']) {
            if (_0x132c0a['statKey'] === _0x3c2814) {
                const _0x3dcd43 = this['getNodeLevel'](_0x4d91f3, _0x132c0a['id']);
                _0x1ea1d8 += _0x132c0a['valuePerLevel'] * _0x3dcd43;
            }
        }
        return _0x28d91b + _0x1ea1d8;
    }
    ['isNodeUnlocked'](_0x412bb1, _0x43247c) {
        const _0x63e85f = SKILL_TREES[_0x412bb1], _0x25d9de = _0x63e85f['nodes']['find'](_0x51e11d => _0x51e11d['id'] === _0x43247c);
        if (!_0x25d9de)
            return ![];
        if (_0x25d9de['isRoot'])
            return !![];
        for (const _0x583556 of _0x25d9de['requires']) {
            if (this['getNodeLevel'](_0x412bb1, _0x583556) < 0x1)
                return ![];
        }
        return !![];
    }
    ['canUpgradeNode'](_0x3f30b7, _0x568816) {
        const _0x382968 = SKILL_TREES[_0x3f30b7], _0x90efe1 = _0x382968['nodes']['find'](_0x1f33ea => _0x1f33ea['id'] === _0x568816);
        if (!_0x90efe1)
            return ![];
        if (_0x90efe1['isRoot'])
            return ![];
        if (!this['isNodeUnlocked'](_0x3f30b7, _0x568816))
            return ![];
        const _0x551399 = this['getNodeLevel'](_0x3f30b7, _0x568816);
        if (_0x551399 >= _0x90efe1['maxLevel'])
            return ![];
        return this['availableLevelPoints'] >= _0x90efe1['costPerLevel'];
    }
    ['upgradeNode'](_0x375d2d, _0x2141da) {
        if (!this['canUpgradeNode'](_0x375d2d, _0x2141da))
            return ![];
        const _0x3ae33b = SKILL_TREES[_0x375d2d], _0x2b3996 = _0x3ae33b['nodes']['find'](_0x53c1ae => _0x53c1ae['id'] === _0x2141da), _0x2dd358 = this['artifacts'][_0x375d2d];
        return _0x2dd358['skillLevels'][_0x2141da] === undefined && (_0x2dd358['skillLevels'][_0x2141da] = 0x0), this['availableLevelPoints'] -= _0x2b3996['costPerLevel'], _0x2dd358['skillLevels'][_0x2141da]++, _0x2dd358['totalLevelPoints'] += _0x2b3996['costPerLevel'], send({
            'upgradeArtifact': {
                'type': _0x375d2d,
                'nodeId': _0x2141da,
                'level': _0x2dd358['skillLevels'][_0x2141da]
            }
        }), !![];
    }
    ['equipArtifact'](_0x5575f2) {
        this['equippedArtifact'] = _0x5575f2, send({ 'equipArtifact': _0x5575f2 });
    }
    ['resetArtifactSkills'](_0x208c35) {
        return send({ 'resetArtifactSkills': { 'type': _0x208c35 } }), !![];
    }
    ['loadArtifactData'](_0x3b5968) {
        if (_0x3b5968['artifacts'])
            for (const _0x2462cc in _0x3b5968['artifacts']) {
                this['artifacts'][_0x2462cc] && (this['artifacts'][_0x2462cc]['skillLevels'] = _0x3b5968['artifacts'][_0x2462cc]['skillLevels'] || this['artifacts'][_0x2462cc]['skillLevels'], this['artifacts'][_0x2462cc]['totalLevelPoints'] = _0x3b5968['artifacts'][_0x2462cc]['totalLevelPoints'] || 0x0);
            }
        if (_0x3b5968['equippedArtifacts'] && Array['isArray'](_0x3b5968['equippedArtifacts']))
            this['equippedArtifact'] = _0x3b5968['equippedArtifacts']['length'] > 0x0 ? _0x3b5968['equippedArtifacts'][0x0] : null;
        else
            _0x3b5968['equippedArtifact'] !== undefined && (this['equippedArtifact'] = _0x3b5968['equippedArtifact']);
        if (_0x3b5968['availableSkillPoints'] !== undefined)
            this['availableLevelPoints'] = _0x3b5968['availableSkillPoints'];
        else
            _0x3b5968['availableLevelPoints'] !== undefined && (this['availableLevelPoints'] = _0x3b5968['availableLevelPoints']);
        _0x3b5968['lastArtifactResetTime'] !== undefined && (this['lastArtifactResetTime'] = _0x3b5968['lastArtifactResetTime']);
    }
    ['drawIcon'](_0x20e3f3 = 0x1) {
        const _0x45b52e = 0x50, _0x4a1cce = 0x14, _0x442451 = canvas['h'] - 0x14 - 0x50 - 0x64 - 0x64 - 0x64;
        if (_0x20e3f3 !== 0x1)
            ctx['globalAlpha'] = _0x20e3f3;
        ctx['fillStyle'] = '#5a9fdb', ctx['strokeStyle'] = '#4981b1';
        mouse['canvasX'] > _0x4a1cce && mouse['canvasY'] > _0x442451 && mouse['canvasX'] < _0x4a1cce + _0x45b52e && mouse['canvasY'] < _0x442451 + _0x45b52e ? (ctx['fillStyle'] = '#6aa8df', setCursor('pointer'), this['hoveringOverButton'] = !![]) : this['hoveringOverButton'] = ![];
        ctx['lineWidth'] = 0x6, ctx['beginPath'](), ctx['roundRect'](_0x4a1cce, _0x442451, _0x45b52e, _0x45b52e, 0x3), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['font'] = '900\x2040px\x20Ubuntu', ctx['fillStyle'] = '#ffffff', ctx['strokeStyle'] = '#000000', ctx['lineWidth'] = 0x2, ctx['textAlign'] = 'center', ctx['textBaseline'] = 'middle', ctx['strokeText']('⭐', _0x4a1cce + _0x45b52e / 0x2, _0x442451 + _0x45b52e / 0x2), ctx['fillText']('⭐', _0x4a1cce + _0x45b52e / 0x2, _0x442451 + _0x45b52e / 0x2), ctx['fillStyle'] = '#f0f0f0', ctx['strokeStyle'] = 'black', ctx['lineWidth'] = 2.25, ctx['textAlign'] = 'center', ctx['textBaseline'] = 'middle', ctx['font'] = '900\x2014px\x20Ubuntu';
        const _0x289722 = ctx['letterSpacing'];
        ctx['letterSpacing'] = '0px', ctx['strokeText']('[Z]', _0x4a1cce + _0x45b52e - 0xf - 2.5, _0x442451 + 0xf), ctx['fillText']('[Z]', _0x4a1cce + _0x45b52e - 0xf - 2.5, _0x442451 + 0xf), ctx['letterSpacing'] = _0x289722, ctx['globalAlpha'] = 0x1;
    }
    ['toggleMenu']() {
        if (globalInventory['menuActive'] === !![])
            globalInventory['toggleMenu']();
        if (craftingMenu['menuActive'] === !![])
            craftingMenu['toggleMenu']();
        if (mobGallery['menuActive'] === !![])
            mobGallery['toggleMenu']();
        this['menuActive'] === !![] ? this['lastCloseTime'] = time : (this['lastOpenTime'] = time, this['selectedArtifactIndex'] >= 0x0 && this['calculateNodePositions'](ARTIFACT_TYPES[this['selectedArtifactIndex']])), this['menuActive'] = !this['menuActive'];
    }
    ['draw']() {
        let _0x17dd1d = this['fadingOut'] === !![] ? 0x1 - (time - this['originalFadeOutTime']) / 0x64 : 0x1;
        this['menuActive'] === !![] || time - this['lastCloseTime'] < 0x8c ? this['drawMenu'](_0x17dd1d) : (this['hoveringOverX'] = ![], this['hoveredNode'] = null);
    }
    ['drawMenu'](_0x110a7f = 0x1) {
        _0x110a7f !== 0x1 && (ctx['globalAlpha'] = _0x110a7f);
        let _0x5dc1fd = 0x0;
        time - this['lastCloseTime'] < 0xa0 && (_0x5dc1fd += this['h'] * easeOutCubic((time - this['lastCloseTime']) / 0xa0));
        time - this['lastOpenTime'] < 0xa0 && (_0x5dc1fd += this['h'] + 0x28 - (this['h'] + 0x28) * easeOutCubic((time - this['lastOpenTime']) / 0xa0));
        _0x5dc1fd !== 0x0 && ctx['translate'](0x0, _0x5dc1fd);
        this['x'] = 0x82, this['y'] = canvas['h'] - this['h'] - 0x14, ctx['translate'](this['x'], this['y']), ctx['fillStyle'] = '#5a9fdb', ctx['strokeStyle'] = '#4981b1', ctx['lineWidth'] = 0x8, ctx['save'](), ctx['beginPath'](), ctx['roundRect'](0x0, 0x0, this['w'], this['h'], 0x3), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['save'](), ctx['font'] = '600\x2025px\x20\x27Ubuntu\x27', ctx['lineWidth'] = 0x4, ctx['fillStyle'] = '#ffffff', ctx['strokeStyle'] = '#000000', ctx['textAlign'] = 'center', ctx['strokeText']('Skills', this['w'] / 0x2, 0x19), ctx['fillText']('Skills', this['w'] / 0x2, 0x19), ctx['font'] = '700\x2020px\x20\x27Ubuntu\x27', ctx['fillStyle'] = '#ffd700', ctx['strokeStyle'] = '#000000', ctx['lineWidth'] = 0x3, ctx['textAlign'] = 'left', ctx['strokeText']('⭐\x20' + this['availableLevelPoints'], 0xf, 0x1b), ctx['fillText']('⭐\x20' + this['availableLevelPoints'], 0xf, 0x1b), ctx['restore']();
        const _0x1f14d4 = mouse['canvasX'] - this['x'], _0x581b48 = mouse['canvasY'] - this['y'];
        this['hoveredNode'] = null, this['hoveredArtifact'] = null;
        !mouse['left'] && (this['lastClickMobType'] = null, this['lastClickUnequipSlot'] = null);
        const _0x2da46d = 0x41, _0x55b0bd = 0x41, _0x14d7fd = 0xa, _0x9de80a = ARTIFACT_TYPES['length'] * _0x55b0bd + (ARTIFACT_TYPES['length'] - 0x1) * _0x14d7fd, _0x3cd0e5 = (this['w'] - _0x9de80a) / 0x2, _0x5ed384 = 0xf, _0x15738c = 0xa, _0x333db9 = _0x3cd0e5 - _0x5ed384, _0x34e5af = _0x2da46d - _0x15738c, _0x3612ae = _0x9de80a + _0x5ed384 * 0x2, _0xe5b54a = _0x55b0bd + _0x15738c * 0x2;
        ctx['fillStyle'] = 'rgba(0,\x200,\x200,\x200.3)', ctx['beginPath'](), ctx['roundRect'](_0x333db9 + 0x3, _0x34e5af + 0x3, _0x3612ae, _0xe5b54a, 0xa), ctx['fill'](), ctx['closePath']();
        const _0x39b2a9 = ctx['createLinearGradient'](_0x333db9, _0x34e5af, _0x333db9, _0x34e5af + _0xe5b54a);
        _0x39b2a9['addColorStop'](0x0, 'rgba(70,\x2080,\x20100,\x200.6)'), _0x39b2a9['addColorStop'](0x1, 'rgba(50,\x2060,\x2080,\x200.5)'), ctx['fillStyle'] = _0x39b2a9, ctx['strokeStyle'] = 'rgba(200,\x20200,\x20220,\x200.5)', ctx['lineWidth'] = 0x2, ctx['beginPath'](), ctx['roundRect'](_0x333db9, _0x34e5af, _0x3612ae, _0xe5b54a, 0xa), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['strokeStyle'] = 'rgba(255,\x20255,\x20255,\x200.15)', ctx['lineWidth'] = 0x1, ctx['beginPath'](), ctx['roundRect'](_0x333db9 + 0x3, _0x34e5af + 0x3, _0x3612ae - 0x6, _0xe5b54a - 0x6, 0x8), ctx['stroke'](), ctx['closePath']();
        for (let _0x294620 = 0x1; _0x294620 < ARTIFACT_TYPES['length']; _0x294620++) {
            const _0x2ff6e4 = _0x3cd0e5 + _0x294620 * (_0x55b0bd + _0x14d7fd) - _0x14d7fd / 0x2;
            ctx['strokeStyle'] = 'rgba(255,\x20255,\x20255,\x200.1)', ctx['lineWidth'] = 0x1, ctx['beginPath'](), ctx['moveTo'](_0x2ff6e4, _0x34e5af + 0x8), ctx['lineTo'](_0x2ff6e4, _0x34e5af + _0xe5b54a - 0x8), ctx['stroke'](), ctx['closePath']();
        }
        for (let _0x496e72 = 0x0; _0x496e72 < ARTIFACT_TYPES['length']; _0x496e72++) {
            const _0x1a3ba7 = ARTIFACT_TYPES[_0x496e72], _0x57c533 = SKILL_TREES[_0x1a3ba7], _0x465fa2 = _0x3cd0e5 + _0x496e72 * (_0x55b0bd + _0x14d7fd) + _0x55b0bd / 0x2, _0x3b769a = _0x2da46d + _0x55b0bd / 0x2, _0x22b9d2 = this['artifacts'][_0x1a3ba7], _0x281458 = _0x22b9d2['renderPetalContainer'];
            if (_0x281458) {
                _0x281458['x'] = _0x465fa2, _0x281458['y'] = _0x3b769a, _0x281458['render']['x'] = _0x465fa2, _0x281458['render']['y'] = _0x3b769a;
                const _0x31d5ff = _0x1f14d4 > _0x465fa2 - _0x55b0bd / 0x2 && _0x1f14d4 < _0x465fa2 + _0x55b0bd / 0x2 && _0x581b48 > _0x3b769a - _0x55b0bd / 0x2 && _0x581b48 < _0x3b769a + _0x55b0bd / 0x2, _0x24d73d = this['selectedArtifactIndex'] === _0x496e72;
                _0x31d5ff && (this['hoveredArtifact'] = {
                    'type': _0x1a3ba7,
                    'x': _0x465fa2,
                    'y': _0x3b769a,
                    'renderPc': _0x281458
                }, setCursor('pointer'));
                _0x24d73d && (ctx['fillStyle'] = 'rgba(255,\x20236,\x20139,\x200.3)', ctx['strokeStyle'] = _0x57c533['color'], ctx['lineWidth'] = 0x3, ctx['beginPath'](), ctx['roundRect'](_0x465fa2 - _0x55b0bd / 0x2 - 0x3, _0x3b769a - _0x55b0bd / 0x2 - 0x3, _0x55b0bd + 0x6, _0x55b0bd + 0x6, 0x8), ctx['fill'](), ctx['stroke'](), ctx['closePath']());
                const _0x508b75 = Object['values'](_0x22b9d2['skillLevels'])['reduce']((_0x24ddd8, _0x37c230) => _0x24ddd8 + _0x37c230, 0x0) - 0x1;
                _0x508b75 > 0x0 && (_0x281458['rarity'] = Math['min'](_0x508b75, 0x22)), _0x281458['amount'] > 0x0 ? _0x281458['draw']() : (ctx['globalAlpha'] = 0.3, _0x281458['draw'](), ctx['globalAlpha'] = 0x1);
            }
        }
        if (this['selectedArtifactIndex'] >= 0x0) {
            const _0x2c6d97 = ARTIFACT_TYPES[this['selectedArtifactIndex']];
            this['drawSkillTree'](_0x2c6d97, _0x1f14d4, _0x581b48), this['drawResetButton'](_0x1f14d4, _0x581b48, _0x2c6d97);
        } else
            ctx['fillStyle'] = 'rgba(255,\x20255,\x20255,\x200.5)', ctx['font'] = '500\x2012px\x20\x27Ubuntu\x27', ctx['textAlign'] = 'center', ctx['fillText']('点击上方神器查看技能树', this['w'] / 0x2, this['h'] / 0x2);
        ctx['restore'](), ctx['fillStyle'] = '#5a9fdb', ctx['strokeStyle'] = '#4981b1', ctx['lineWidth'] = 0x8, ctx['beginPath'](), ctx['roundRect'](0x0, 0x0, this['w'], this['h'], 0x3), ctx['stroke'](), ctx['closePath']();
        if (this['hoveredNode'])
            this['drawTooltip'](this['hoveredNode']);
        else {
            if (this['hoveredArtifact'] && this['hoveredArtifact']['renderPc']) {
                const _0x366e80 = this['hoveredArtifact']['renderPc'], _0x3d2d9c = this['artifacts'][this['hoveredArtifact']['type']];
                if (_0x3d2d9c && _0x3d2d9c['skillLevels']) {
                    const _0x4dc260 = Object['values'](_0x3d2d9c['skillLevels'])['reduce']((_0xca3921, _0x3ab7eb) => _0xca3921 + _0x3ab7eb, 0x0) - 0x1;
                    _0x4dc260 > 0x0 && (_0x366e80['rarity'] = Math['min'](_0x4dc260, 0x22));
                }
                !_0x366e80['petalStats'] && typeof Stats !== 'undefined' && (_0x366e80['petalStats'] = Stats['petals'][_0x366e80['type']]?.[0x0] || null);
                _0x366e80['isHovered'] = !![];
                const _0x3af574 = 'petals', _0x413d2f = new StatsBox(_0x366e80['type'], _0x366e80['petalStats'], _0x3af574, _0x366e80['amount'], _0x366e80['rarity']);
                delete _0x413d2f['image'];
                const _0xe36a92 = ctx, _0x2d5e11 = document['createElement']('canvas');
                ctx = _0x2d5e11['getContext']('2d'), _0x413d2f['draw'](), ctx = _0xe36a92;
                const _0x4e1817 = this['hoveredArtifact']['x'], _0xec97c8 = this['hoveredArtifact']['y'], _0x17b48a = _0x413d2f['h'], _0x5e9af6 = _0xec97c8 - _0x17b48a - _0x366e80['h'] / 0x2 - 11.5, _0x10c467 = _0xec97c8 + _0x366e80['h'] / 0x2 + 11.5 + _0x17b48a, _0x590346 = -_0x5e9af6, _0x5b8c30 = _0x10c467 - this['h'], _0x1076a0 = _0x5b8c30 < _0x590346 || _0x590346 < 0x0;
                _0x366e80['drawStatsBox'](_0x1076a0, ![], _0x4e1817, _0xec97c8);
            }
        }
        this['drawCloseButton'](_0x1f14d4, _0x581b48), ctx['translate'](-this['x'], -this['y']), _0x5dc1fd !== 0x0 && ctx['translate'](0x0, -_0x5dc1fd), ctx['globalAlpha'] = 0x1;
    }
    ['calculateNodePositions'](_0xb7c6b2) {
        const _0x3b5d04 = SKILL_TREES[_0xb7c6b2];
        this['nodePositions'] = {};
        const _0x3326b7 = 0x3c, _0x2ee423 = 0xbe, _0x2f6b03 = this['w'] - 0x78, _0x4bb701 = 0x1a, _0x539fbc = 0x78, _0x134318 = _0x3b5d04['nodes']['find'](_0x5a6df8 => _0x5a6df8['isRoot']);
        if (!_0x134318)
            return;
        const _0xb5cccb = _0x3326b7 + _0x2f6b03 / 0x2, _0x6b36ce = _0x2ee423;
        this['nodePositions'][_0x134318['id']] = {
            'x': _0xb5cccb,
            'y': _0x6b36ce,
            'radius': _0x4bb701 + 0x6
        };
        const _0x30580c = _0x3b5d04['nodes']['filter'](_0x28e690 => !_0x28e690['isRoot']);
        if (_0x30580c['length'] === 0x0)
            return;
        const _0x4cbbb3 = _0x30580c['filter'](_0x2f5c75 => _0x2f5c75['requires']['length'] === 0x1 && _0x2f5c75['requires'][0x0] === 'root'), _0x5496f3 = {};
        for (const _0x3da635 of _0x3b5d04['nodes']) {
            _0x5496f3[_0x3da635['id']] = _0x3da635;
        }
        _0x4cbbb3['forEach']((_0x39fd1c, _0x3d8d12) => {
            const _0x10c9e3 = _0x3d8d12 % 0x2 === 0x0, _0x484932 = _0x10c9e3 ? Math['PI'] * 0.75 : Math['PI'] * 0.25, _0x34afac = this['getLinearChain'](_0x39fd1c['id'], _0x5496f3);
            _0x34afac['forEach']((_0x10c4e2, _0x2cf85a) => {
                let _0x27c306, _0x4584f3;
                if (_0x2cf85a === 0x0) {
                    const _0x973a50 = _0x539fbc, _0x4878e6 = _0x484932 - (_0x10c9e3 ? 0.4 : -0.4);
                    _0x27c306 = _0xb5cccb + Math['cos'](_0x4878e6) * _0x973a50, _0x4584f3 = _0x6b36ce + Math['sin'](_0x4878e6) * _0x973a50;
                } else {
                    if (_0x2cf85a === 0x1) {
                        const _0x85b648 = _0x539fbc * 0x2, _0x333b48 = _0x484932 - (_0x10c9e3 ? 0.5 : -0.5);
                        _0x27c306 = _0xb5cccb + Math['cos'](_0x333b48) * _0x85b648, _0x4584f3 = _0x6b36ce + Math['sin'](_0x333b48) * _0x85b648;
                    } else {
                        if (_0x2cf85a === 0x2) {
                            const _0x3b89c0 = _0x539fbc * 0x3, _0x417481 = _0x484932 - (_0x10c9e3 ? 0.4 : -0.4);
                            _0x27c306 = _0xb5cccb + Math['cos'](_0x417481) * _0x3b89c0, _0x4584f3 = _0x6b36ce + Math['sin'](_0x417481) * _0x3b89c0;
                        } else {
                            const _0x58007a = this['nodePositions'][_0x34afac[_0x2cf85a - 0x1]['id']], _0xf0e3b5 = _0x539fbc * (0x1 - (_0x2cf85a - 0x3) * 0.1), _0x3ee1e6 = [
                                    _0x10c9e3 ? Math['PI'] : 0x0,
                                    _0x10c9e3 ? Math['PI'] * 0x4 / 0x3 : Math['PI'] * 0x5 / 0x3,
                                    _0x10c9e3 ? Math['PI'] * 0x5 / 0x3 : Math['PI'] * 0x4 / 0x3,
                                    _0x10c9e3 ? 0x0 : Math['PI'],
                                    _0x10c9e3 ? Math['PI'] * 0x1 / 0x3 : Math['PI'] * 0x2 / 0x3,
                                    _0x10c9e3 ? Math['PI'] * 0x2 / 0x3 : Math['PI'] * 0x1 / 0x3
                                ], _0x87e3f9 = (_0x2cf85a - 0x3) % _0x3ee1e6['length'], _0x3bc179 = _0x3ee1e6[_0x87e3f9];
                            _0x27c306 = _0x58007a['x'] + Math['cos'](_0x3bc179) * _0xf0e3b5, _0x4584f3 = _0x58007a['y'] + Math['sin'](_0x3bc179) * _0xf0e3b5;
                        }
                    }
                }
                this['nodePositions'][_0x10c4e2['id']] = {
                    'x': _0x27c306,
                    'y': _0x4584f3,
                    'radius': _0x4bb701
                };
            });
            if (_0x34afac['length'] >= 0x3) {
                const _0xff2ec7 = _0x34afac[0x2], _0x997ca6 = this['nodePositions'][_0xff2ec7['id']];
                this['drawChildBranches'](_0xff2ec7, _0x997ca6, _0x30580c, _0x5496f3, _0x539fbc, _0x4bb701);
            }
        });
    }
    ['drawChildBranches'](_0x17bbe5, _0x4aa7d8, _0x111728, _0x11d7c8, _0x40419a, _0x529039) {
        const _0x5c1e95 = _0x17bbe5['id']['lastIndexOf']('_'), _0x459f3c = _0x17bbe5['id']['substring'](0x0, _0x5c1e95 + 0x1), _0x1af1f1 = _0x111728['filter'](_0x212741 => _0x212741['requires']['length'] === 0x1 && _0x212741['requires'][0x0] === _0x17bbe5['id'] && !_0x212741['id']['startsWith'](_0x459f3c));
        _0x1af1f1['forEach'](_0x13209c => {
            const _0x25353c = this['getLinearChain'](_0x13209c['id'], _0x11d7c8), _0x353e98 = Math['PI'] * 0.75;
            _0x25353c['forEach']((_0x84a388, _0x20b019) => {
                let _0x29d860, _0x4af7e3;
                if (_0x20b019 === 0x0) {
                    const _0x1f19dc = _0x40419a, _0x22e580 = _0x353e98 - 1.4;
                    _0x29d860 = _0x4aa7d8['x'] + Math['cos'](_0x22e580) * _0x1f19dc, _0x4af7e3 = _0x4aa7d8['y'] + Math['sin'](_0x22e580) * _0x1f19dc;
                } else {
                    if (_0x20b019 === 0x1) {
                        const _0x290177 = _0x40419a * 0x2, _0x167f9a = _0x353e98 - 0x1;
                        _0x29d860 = _0x4aa7d8['x'] + Math['cos'](_0x167f9a) * _0x290177, _0x4af7e3 = _0x4aa7d8['y'] + Math['sin'](_0x167f9a) * _0x290177;
                    } else {
                        if (_0x20b019 === 0x2) {
                            const _0x189e68 = _0x40419a * 0x3, _0x47ee5b = _0x353e98 - 0.8;
                            _0x29d860 = _0x4aa7d8['x'] + Math['cos'](_0x47ee5b) * _0x189e68, _0x4af7e3 = _0x4aa7d8['y'] + Math['sin'](_0x47ee5b) * _0x189e68;
                        } else {
                            const _0xc2fd9f = this['nodePositions'][_0x25353c[_0x20b019 - 0x1]['id']], _0x162a0e = _0x40419a * (0x1 - (_0x20b019 - 0x3) * 0.1), _0x2de6e6 = [
                                    Math['PI'],
                                    Math['PI'] * 0x4 / 0x3,
                                    Math['PI'] * 0x5 / 0x3,
                                    0x0,
                                    Math['PI'] * 0x1 / 0x3,
                                    Math['PI'] * 0x2 / 0x3
                                ], _0x3b1464 = (_0x20b019 - 0x3) % _0x2de6e6['length'], _0x4fc1ae = _0x2de6e6[_0x3b1464];
                            _0x29d860 = _0xc2fd9f['x'] + Math['cos'](_0x4fc1ae) * _0x162a0e, _0x4af7e3 = _0xc2fd9f['y'] + Math['sin'](_0x4fc1ae) * _0x162a0e;
                        }
                    }
                }
                this['nodePositions'][_0x84a388['id']] = {
                    'x': _0x29d860,
                    'y': _0x4af7e3,
                    'radius': _0x529039
                };
            });
            if (_0x25353c['length'] >= 0x3) {
                const _0xd7374f = _0x25353c[0x2], _0x3314e2 = this['nodePositions'][_0xd7374f['id']];
                this['drawChildBranches'](_0xd7374f, _0x3314e2, _0x111728, _0x11d7c8, _0x40419a, _0x529039);
            }
        });
    }
    ['getLinearChain'](_0x2791b7, _0x7b421d) {
        const _0x209c15 = [];
        let _0x1cc64e = _0x2791b7;
        const _0x1f3610 = new Set();
        while (_0x1cc64e && !_0x1f3610['has'](_0x1cc64e)) {
            _0x1f3610['add'](_0x1cc64e);
            const _0x1df0d9 = _0x7b421d[_0x1cc64e];
            if (!_0x1df0d9)
                break;
            _0x209c15['push'](_0x1df0d9);
            let _0xae38da = null;
            for (const [_0xb9ce43, _0xe704e4] of Object['entries'](_0x7b421d)) {
                if (_0xe704e4['requires']['length'] === 0x1 && _0xe704e4['requires'][0x0] === _0x1cc64e) {
                    _0xae38da = _0xb9ce43;
                    break;
                }
            }
            _0x1cc64e = _0xae38da;
        }
        return _0x209c15;
    }
    ['layoutBranchSpiral'](_0x5157d3, _0x3bf782, _0x5c144f, _0x90b23) {
        if (_0x5157d3['length'] === 0x0)
            return;
        const _0x545b5d = 0x3, _0x280c48 = 0x64, _0x5b11cc = -Math['PI'] / 0x4;
        _0x5157d3['forEach']((_0x36ada3, _0x21b3bf) => {
            let _0xd3f58b, _0x5e7103;
            if (_0x21b3bf < _0x545b5d) {
                const _0x440734 = (_0x21b3bf + 0x1) * _0x280c48;
                _0xd3f58b = _0x3bf782 + Math['cos'](_0x5b11cc) * _0x440734, _0x5e7103 = _0x5c144f + Math['sin'](_0x5b11cc) * _0x440734;
            } else {
                const _0x24ac4c = _0x21b3bf - _0x545b5d, _0x10f283 = _0x545b5d * _0x280c48, _0x32d797 = Math['PI'] + _0x24ac4c * 0.6, _0x1812e6 = _0x10f283 - _0x24ac4c * 0xf;
                _0xd3f58b = _0x3bf782 + Math['cos'](_0x32d797) * _0x1812e6, _0x5e7103 = _0x5c144f + Math['sin'](_0x32d797) * _0x1812e6;
            }
            this['nodePositions'][_0x36ada3['id']] = {
                'x': _0xd3f58b,
                'y': _0x5e7103,
                'radius': _0x90b23
            };
        });
    }
    ['layoutSubBranchSpiral'](_0xf5ac40, _0x5d700d, _0x408632, _0x4ea5f2) {
        if (_0xf5ac40['length'] === 0x0)
            return;
        const _0x8d5bd7 = 0x3, _0x5b1baa = 0x64, _0x3f90ac = Math['PI'] / 0x2;
        _0xf5ac40['forEach']((_0x4a7424, _0x163c3f) => {
            let _0x313776, _0x2d6986;
            if (_0x163c3f < _0x8d5bd7) {
                const _0x599f76 = (_0x163c3f + 0x1) * _0x5b1baa;
                _0x313776 = _0x5d700d + Math['cos'](_0x3f90ac) * _0x599f76, _0x2d6986 = _0x408632 + Math['sin'](_0x3f90ac) * _0x599f76;
            } else {
                const _0x2c3cf5 = _0x163c3f - _0x8d5bd7, _0x453cbb = _0x8d5bd7 * _0x5b1baa, _0x51f79f = Math['PI'] / 0x2 + _0x2c3cf5 * 0.6, _0x4f717a = _0x453cbb - _0x2c3cf5 * 0xf;
                _0x313776 = _0x5d700d + Math['cos'](_0x51f79f) * _0x4f717a, _0x2d6986 = _0x408632 + Math['sin'](_0x51f79f) * _0x4f717a;
            }
            this['nodePositions'][_0x4a7424['id']] = {
                'x': _0x313776,
                'y': _0x2d6986,
                'radius': _0x4ea5f2
            };
        });
    }
    ['drawSkillTree'](_0xc4eb06, _0x30238d, _0x541ea0) {
        const _0x49a64e = SKILL_TREES[_0xc4eb06];
        Object['keys'](this['nodePositions'])['length'] === 0x0 && this['calculateNodePositions'](_0xc4eb06);
        const _0x33e769 = 0x0, _0x82caa7 = 0x8c, _0x2f8cce = this['w'], _0x1b7f5e = this['h'] - _0x82caa7;
        this['skillTreeRenderOffset']['x'] = interpolate(this['skillTreeRenderOffset']['x'], this['skillTreeOffset']['x'], 0.1 * dt / 16.66), this['skillTreeRenderOffset']['y'] = interpolate(this['skillTreeRenderOffset']['y'], this['skillTreeOffset']['y'], 0.1 * dt / 16.66), ctx['save'](), ctx['beginPath'](), ctx['rect'](_0x33e769, _0x82caa7, _0x2f8cce, _0x1b7f5e), ctx['clip'](), ctx['closePath'](), ctx['translate'](this['skillTreeRenderOffset']['x'], this['skillTreeRenderOffset']['y']), ctx['setLineDash']([
            0x4,
            0x8
        ]), ctx['lineDashOffset'] = 0x0, ctx['lineWidth'] = 0x9, ctx['strokeStyle'] = 'rgba(255,\x20255,\x20255,\x200.6)';
        for (const _0x2ef3d1 of _0x49a64e['nodes']) {
            if (_0x2ef3d1['isRoot'])
                continue;
            const _0x2e60ce = this['nodePositions'][_0x2ef3d1['id']];
            if (!_0x2e60ce)
                continue;
            for (const _0x1acff1 of _0x2ef3d1['requires']) {
                const _0x472a14 = this['nodePositions'][_0x1acff1];
                if (!_0x472a14)
                    continue;
                ctx['beginPath'](), ctx['moveTo'](_0x472a14['x'], _0x472a14['y']), ctx['lineTo'](_0x2e60ce['x'], _0x2e60ce['y']), ctx['stroke'](), ctx['closePath']();
            }
        }
        ctx['setLineDash']([]);
        for (const _0x3a76aa of _0x49a64e['nodes']) {
            this['drawSkillNode'](_0xc4eb06, _0x3a76aa, _0x30238d, _0x541ea0);
        }
        ctx['restore'](), _0xc4eb06 === 'Chimera' && this['drawChimeraMobUI'](_0x30238d, _0x541ea0);
    }
    ['drawChimeraMobUI'](_0x428cec, _0x138757) {
        const _0xdf3abf = [
                {
                    'id': 'Hornet',
                    'name': 'Hornet',
                    'nameCN': '大黄蜂',
                    'icon': '🐝'
                },
                {
                    'id': 'Beetle',
                    'name': 'Beetle',
                    'nameCN': '甲虫',
                    'icon': '🪲'
                },
                {
                    'id': 'Ladybug',
                    'name': 'Ladybug',
                    'nameCN': '瓢虫',
                    'icon': '🐞'
                }
            ], _0x1057ca = window['userMobSkillData']?.['selectedMobType'] || 'Hornet', _0x1d932d = window['userMobSkillData']?.['equipped'] || [], _0x1ed590 = window['userMobSkillData']?.['backpack'] || [], _0x40b0b8 = 0x50, _0x193700 = 0x64, _0x10c183 = 0x28, _0xaefb5f = 0xf, _0x516bc6 = _0xdf3abf['length'] * _0x193700 + (_0xdf3abf['length'] - 0x1) * _0xaefb5f, _0x17bc67 = (this['w'] - _0x516bc6) / 0x2;
        ctx['fillStyle'] = 'rgba(255,\x20255,\x20255,\x200.1)', ctx['fillRect'](0xa, _0x40b0b8 - 0xa, this['w'] - 0x14, _0x10c183 + 0x14), ctx['fillStyle'] = 'rgba(255,\x20255,\x20255,\x200.7)', ctx['font'] = '500\x2014px\x20\x27Ubuntu\x27', ctx['textAlign'] = 'center', ctx['fillText']('选择\x20Mob\x20类型', this['w'] / 0x2, _0x40b0b8 - 0xf);
        for (let _0xb9d67e = 0x0; _0xb9d67e < _0xdf3abf['length']; _0xb9d67e++) {
            const _0x4c5438 = _0xdf3abf[_0xb9d67e], _0x36f683 = _0x17bc67 + _0xb9d67e * (_0x193700 + _0xaefb5f), _0xb34b63 = _0x40b0b8, _0x5a69b8 = _0x4c5438['id'] === _0x1057ca, _0x546191 = _0x428cec > _0x36f683 && _0x428cec < _0x36f683 + _0x193700 && _0x138757 > _0xb34b63 && _0x138757 < _0xb34b63 + _0x10c183;
            _0x546191 && (setCursor('pointer'), mouse['left'] && !this['lastClickMobType'] && (this['lastClickMobType'] = _0x4c5438['id'], ws && ws['readyState'] === WebSocket['OPEN'] && ws['send'](JSON['stringify']({ 'selectMobType': { 'mobType': _0x4c5438['id'] } })))), ctx['fillStyle'] = _0x5a69b8 ? '#9932cc' : _0x546191 ? '#8a2dbe' : '#5a5a5a', ctx['strokeStyle'] = _0x5a69b8 ? '#ba55d3' : '#888888', ctx['lineWidth'] = 0x2, ctx['beginPath'](), ctx['roundRect'](_0x36f683, _0xb34b63, _0x193700, _0x10c183, 0x5), ctx['fill'](), ctx['stroke'](), ctx['fillStyle'] = '#ffffff', ctx['font'] = '500\x2018px\x20\x27Ubuntu\x27', ctx['textAlign'] = 'center', ctx['fillText'](_0x4c5438['icon'], _0x36f683 + _0x193700 / 0x2, _0xb34b63 + _0x10c183 / 0x2 + 0x6), ctx['font'] = '500\x2011px\x20\x27Ubuntu\x27', ctx['fillText'](_0x4c5438['nameCN'], _0x36f683 + _0x193700 / 0x2, _0xb34b63 + _0x10c183 - 0x8);
        }
        const _0x360716 = this['h'] - 0x78, _0x285b3c = 0x2d, _0x378129 = 0xa, _0x54643d = 0x4, _0x4b5ade = 0x8;
        ctx['fillStyle'] = 'rgba(255,\x20255,\x20255,\x200.1)', ctx['fillRect'](0xa, _0x360716 - 0xa, this['w'] - 0x14, 0x6e), ctx['fillStyle'] = 'rgba(255,\x20255,\x20255,\x200.7)', ctx['font'] = '500\x2014px\x20\x27Ubuntu\x27', ctx['textAlign'] = 'center', ctx['fillText']('Mob\x20技能花瓣装备槽\x20(最多8个)', this['w'] / 0x2, _0x360716 - 0xf);
        const _0x41b226 = this['getMobSkillPetalsForMob'](_0x1057ca);
        for (let _0x3d376c = 0x0; _0x3d376c < _0x4b5ade; _0x3d376c++) {
            const _0x231bdd = Math['floor'](_0x3d376c / _0x54643d), _0x34f0e9 = _0x3d376c % _0x54643d, _0x41338b = 0x23 + _0x34f0e9 * (_0x285b3c + _0x378129), _0x36c538 = _0x360716 + _0x231bdd * (_0x285b3c + _0x378129 + 0x5), _0x442978 = _0x1d932d[_0x3d376c], _0x282695 = _0x428cec > _0x41338b && _0x428cec < _0x41338b + _0x285b3c && _0x138757 > _0x36c538 && _0x138757 < _0x36c538 + _0x285b3c;
            _0x282695 && _0x442978 && (setCursor('pointer'), mouse['left'] && !this['lastClickUnequipSlot'] && (this['lastClickUnequipSlot'] = _0x3d376c, ws && ws['readyState'] === WebSocket['OPEN'] && ws['send'](JSON['stringify']({ 'unequipMobSkillPetal': { 'slotIndex': _0x3d376c } }))));
            ctx['fillStyle'] = _0x442978 ? '#444444' : '#333333', ctx['strokeStyle'] = _0x282695 ? '#ffffff' : '#666666', ctx['lineWidth'] = 0x2, ctx['beginPath'](), ctx['roundRect'](_0x41338b, _0x36c538, _0x285b3c, _0x285b3c, 0x5), ctx['fill'](), ctx['stroke']();
            if (_0x442978) {
                const _0xab9003 = window['rarities'][_0x442978['rarity']]?.['color'] || '#999999';
                ctx['fillStyle'] = _0xab9003, ctx['beginPath'](), ctx['arc'](_0x41338b + _0x285b3c / 0x2, _0x36c538 + _0x285b3c / 0x2, _0x285b3c / 0x2 - 0x5, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['fillStyle'] = '#000000', ctx['font'] = 'bold\x2014px\x20\x27Ubuntu\x27', ctx['textAlign'] = 'center', ctx['fillText'](_0x442978['type']['charAt'](0x0), _0x41338b + _0x285b3c / 0x2, _0x36c538 + _0x285b3c / 0x2 + 0x5), ctx['fillStyle'] = '#ffffff', ctx['font'] = '500\x2010px\x20\x27Ubuntu\x27', ctx['fillText'](_0x442978['rarity'], _0x41338b + _0x285b3c - 0x8, _0x36c538 + 0xc);
            }
            if (_0x282695 && !_0x442978 && mouse['left']) {
            }
        }
        ctx['fillStyle'] = 'rgba(255,\x20255,\x20255,\x200.5)', ctx['font'] = '500\x2012px\x20\x27Ubuntu\x27', ctx['textAlign'] = 'left', ctx['fillText']('背包中\x20' + _0x1057ca + '\x20技能花瓣:', 0x23, _0x360716 + 0x5f);
        let _0x92a8f9 = 0xb4;
        for (const _0x32eac2 of _0x41b226) {
            const背包中 = _0x1ed590['filter'](_0x2c23f9 => _0x2c23f9['type'] === _0x32eac2);
            if (背包中['length'] > 0x0) {
                const _0x49ea9b = 背包中['reduce']((_0x45eeed, _0x1a5762) => _0x45eeed + (_0x1a5762['amount'] || 0x0), 0x0);
                ctx['fillText'](_0x32eac2 + ':\x20' + _0x49ea9b, _0x92a8f9, _0x360716 + 0x5f), _0x92a8f9 += 0x78;
            }
        }
    }
    ['getMobSkillPetalsForMob'](_0xbf83f7) {
        const _0x64c03e = {
            'Hornet': [
                'HornetSting',
                'HornetVolley',
                'HornetSwarm',
                'HornetFrenzy'
            ],
            'Beetle': [
                'BeetleClaw',
                'BeetleCharge',
                'BeetleSwarm',
                'BeetleShell'
            ],
            'Ladybug': [
                'LadybugHeal',
                'LadybugDodge',
                'LadybugSwarm',
                'LadybugGrow'
            ]
        };
        return _0x64c03e[_0xbf83f7] || [];
    }
    ['drawSkillNode'](_0x1e1c5f, _0x591f5b, _0x43a5, _0xd9f420) {
        const _0x6337f1 = this['nodePositions'][_0x591f5b['id']];
        if (!_0x6337f1)
            return;
        const _0x14a8ed = _0x43a5 - this['skillTreeRenderOffset']['x'], _0x13d9d0 = _0xd9f420 - this['skillTreeRenderOffset']['y'], _0x13e6c9 = this['getNodeLevel'](_0x1e1c5f, _0x591f5b['id']), _0x5848e3 = this['isNodeUnlocked'](_0x1e1c5f, _0x591f5b['id']), _0x19f887 = this['canUpgradeNode'](_0x1e1c5f, _0x591f5b['id']), _0x207955 = _0x13e6c9 >= _0x591f5b['maxLevel'], _0x3a9e89 = _0x14a8ed > _0x6337f1['x'] - _0x6337f1['radius'] && _0x14a8ed < _0x6337f1['x'] + _0x6337f1['radius'] && _0x13d9d0 > _0x6337f1['y'] - _0x6337f1['radius'] && _0x13d9d0 < _0x6337f1['y'] + _0x6337f1['radius'];
        _0x3a9e89 && !_0x591f5b['isRoot'] && (this['hoveredNode'] = {
            'artifactType': _0x1e1c5f,
            'node': _0x591f5b,
            'pos': _0x6337f1
        }, setCursor('pointer'));
        let _0x584623, _0x30d355;
        if (_0x591f5b['isRoot'])
            _0x584623 = _0x1e1c5f === this['equippedArtifact'] ? '#ffd700' : '#daa520', _0x30d355 = '#b8860b';
        else {
            if (!_0x5848e3)
                _0x584623 = '#888888', _0x30d355 = '#666666';
            else {
                if (_0x207955)
                    _0x584623 = '#32cd32', _0x30d355 = '#228b22';
                else
                    _0x13e6c9 > 0x0 ? (_0x584623 = _0x19f887 ? '#90ee90' : '#6aa8df', _0x30d355 = _0x19f887 ? '#32cd32' : '#4981b1') : (_0x584623 = _0x19f887 ? '#ffec8b' : '#999999', _0x30d355 = _0x19f887 ? '#ffd700' : '#777777');
            }
        }
        !_0x591f5b['isRoot'] && (ctx['fillStyle'] = _0x584623, ctx['strokeStyle'] = _0x30d355, ctx['lineWidth'] = _0x3a9e89 ? 0x4 : 0x3, ctx['beginPath'](), ctx['arc'](_0x6337f1['x'], _0x6337f1['y'], _0x6337f1['radius'], 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath']());
        if (!_0x591f5b['isRoot'] && !_0x207955) {
            const _0x2c975f = _0x591f5b['costPerLevel'];
            ctx['font'] = '700\x2012px\x20Ubuntu', ctx['fillStyle'] = _0x19f887 ? '#ffd700' : '#888888', ctx['strokeStyle'] = '#000000', ctx['lineWidth'] = 0x2, ctx['textAlign'] = 'right', ctx['textBaseline'] = 'top', ctx['strokeText']('' + _0x2c975f, _0x6337f1['x'] + _0x6337f1['radius'] - 0x2, _0x6337f1['y'] - _0x6337f1['radius'] + 0x2), ctx['fillText']('' + _0x2c975f, _0x6337f1['x'] + _0x6337f1['radius'] - 0x2, _0x6337f1['y'] - _0x6337f1['radius'] + 0x2);
        }
        !_0x591f5b['isRoot'] ? this['drawNodeIcon'](_0x591f5b, _0x6337f1['x'], _0x6337f1['y']) : this['drawRootFlower'](_0x6337f1['x'], _0x6337f1['y'], _0x6337f1['radius']);
    }
    ['drawRootFlower'](_0x3d610e, _0x1013dc, _0x13cb8a) {
        ctx['fillStyle'] = '#ffe763', ctx['strokeStyle'] = '#cebb50', ctx['lineWidth'] = _0x13cb8a / 0x8, ctx['beginPath'](), ctx['lineTo'](_0x3d610e + _0x13cb8a * 1.03, _0x1013dc + _0x13cb8a * -0.02), ctx['quadraticCurveTo'](_0x3d610e + _0x13cb8a * 0.78, _0x1013dc + _0x13cb8a * 1.06, _0x3d610e + _0x13cb8a * 0.27, _0x1013dc + _0x13cb8a * 1.14), ctx['quadraticCurveTo'](_0x3d610e + _0x13cb8a * -0.8, _0x1013dc + _0x13cb8a * 0.75, _0x3d610e + _0x13cb8a * -0.94, _0x1013dc + _0x13cb8a * 0.36), ctx['quadraticCurveTo'](_0x3d610e + _0x13cb8a * -1.18, _0x1013dc + _0x13cb8a * -0.29, _0x3d610e + _0x13cb8a * -0.83, _0x1013dc + _0x13cb8a * -0.95), ctx['quadraticCurveTo'](_0x3d610e + _0x13cb8a * -0.45, _0x1013dc + _0x13cb8a * -1.3, _0x3d610e + _0x13cb8a * -0.06, _0x1013dc + _0x13cb8a * -1.06), ctx['quadraticCurveTo'](_0x3d610e + _0x13cb8a * 0.85, _0x1013dc + _0x13cb8a * -1.04, _0x3d610e + _0x13cb8a * 1.03, _0x1013dc + _0x13cb8a * -0.02), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['fillStyle'] = '#212219', ctx['beginPath'](), ctx['ellipse'](_0x3d610e + _0x13cb8a / 2.5 + _0x13cb8a * 0.05, _0x1013dc + _0x13cb8a * 0x5 / 13.5, _0x13cb8a * 0x3 / 23.5 * 1.1, _0x13cb8a * 5.85 / 23.5 * 1.1, 0x0, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['ellipse'](_0x3d610e - _0x13cb8a / 2.5, _0x1013dc - _0x13cb8a * 0x5 / 23.5 + _0x13cb8a * -0.15, _0x13cb8a * 0x3 / 23.5 * 1.1, _0x13cb8a * 5.85 / 23.5 * 1.1, 0x0, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['save'](), ctx['beginPath'](), ctx['ellipse'](_0x3d610e + _0x13cb8a / 2.5 + _0x13cb8a * 0.05, _0x1013dc + _0x13cb8a * 0x5 / 13.5, _0x13cb8a * 2.5 / 23.5 * 1.1, _0x13cb8a * 0x5 / 23.5 * 1.1, 0x0, 0x0, Math['PI'] * 0x2), ctx['clip'](), ctx['fillStyle'] = '#eeeeee', ctx['beginPath'](), ctx['ellipse'](_0x3d610e + _0x13cb8a / 2.5 + _0x13cb8a * 0.05, _0x1013dc + _0x13cb8a * 0x5 / 13.5, _0x13cb8a * 2.92 / 23.5 * 1.1, _0x13cb8a * 2.92 / 23.5 * 1.1, 0x0, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['restore'](), ctx['save'](), ctx['beginPath'](), ctx['ellipse'](_0x3d610e - _0x13cb8a / 2.5, _0x1013dc - _0x13cb8a * 0x5 / 23.5 + _0x13cb8a * -0.15, _0x13cb8a * 2.5 / 23.5 * 1.1, _0x13cb8a * 0x5 / 23.5 * 1.1, 0x0, 0x0, Math['PI'] * 0x2), ctx['clip'](), ctx['fillStyle'] = '#eeeeee', ctx['beginPath'](), ctx['ellipse'](_0x3d610e - _0x13cb8a / 2.5, _0x1013dc - _0x13cb8a * 0x5 / 23.5 + _0x13cb8a * -0.15, _0x13cb8a * 0x3 / 23.5 * 1.1, _0x13cb8a * 0x3 / 23.5 * 1.1, 0x0, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['restore'](), ctx['strokeStyle'] = ctx['fillStyle'], ctx['lineWidth'] = _0x13cb8a / 0xf, ctx['lineCap'] = 'round', ctx['beginPath'](), ctx['moveTo'](_0x3d610e - _0x13cb8a * 0.3 + _0x13cb8a / 0x4, _0x1013dc + _0x13cb8a * 0.025 + _0x13cb8a * 9.5 / 23.5), ctx['quadraticCurveTo'](_0x3d610e - _0x13cb8a * 0.4, _0x1013dc - _0x13cb8a * 0.1 + 1.07 * _0x13cb8a * 5.5 / 23.5 * 61.1 / 0x46, _0x3d610e - _0x13cb8a * 0.275 - _0x13cb8a / 0x4, _0x1013dc - _0x13cb8a * 0.25 + _0x13cb8a * 9.5 / 23.5), ctx['stroke']();
    }
    ['drawNodeIcon'](_0xc9c75, _0x3b9781, _0x5797cb) {
        ctx['fillStyle'] = '#ffffff', ctx['strokeStyle'] = 'rgba(0,\x200,\x200,\x200.3)', ctx['lineWidth'] = 0x1, ctx['textAlign'] = 'center', ctx['textBaseline'] = 'middle';
        if (_0xc9c75['id']['includes']('hp') || _0xc9c75['id']['includes']('Hp'))
            ctx['font'] = '900\x2014px\x20Ubuntu', ctx['fillText']('❤', _0x3b9781, _0x5797cb);
        else {
            if (_0xc9c75['id']['includes']('damage') || _0xc9c75['id']['includes']('Damage') || _0xc9c75['id']['includes']('dps'))
                ctx['font'] = '900\x2014px\x20Ubuntu', ctx['fillText']('⚔', _0x3b9781, _0x5797cb);
            else {
                if (_0xc9c75['id']['includes']('cooldown') || _0xc9c75['id']['includes']('cd'))
                    ctx['save'](), ctx['translate'](_0x3b9781, _0x5797cb), ctx['setLineDash']([
                        0x2,
                        0x2
                    ]), ctx['beginPath'](), ctx['arc'](0x0, 0x0, 0x6, Math['PI'] * 0.7, Math['PI'] * 2.3), ctx['stroke'](), ctx['beginPath'](), ctx['arc'](0x0, 0x0, 0x9, Math['PI'] * 1.2, Math['PI'] * 1.8), ctx['stroke'](), ctx['beginPath'](), ctx['arc'](0x0, 0x0, 0x6, Math['PI'] * 1.8, Math['PI'] * 2.2), ctx['stroke'](), ctx['beginPath'](), ctx['arc'](0x0, 0x0, 0x6, Math['PI'] * 0x0, Math['PI'] * 0.4), ctx['stroke'](), ctx['setLineDash']([]), ctx['restore']();
                else {
                    if (_0xc9c75['id']['includes']('range'))
                        ctx['save'](), ctx['translate'](_0x3b9781, _0x5797cb), ctx['setLineDash']([
                            0x3,
                            0x3
                        ]), ctx['lineWidth'] = 0x1, ctx['beginPath'](), ctx['arc'](0x0, 0x0, 0x8, 0x0, Math['PI'] * 0x2), ctx['stroke'](), ctx['beginPath'](), ctx['arc'](0x0, 0x0, 0x5, 0x0, Math['PI'] * 0x2), ctx['stroke'](), ctx['setLineDash']([]), ctx['restore']();
                    else {
                        if (_0xc9c75['id']['includes']('knockback'))
                            ctx['font'] = '900\x2014px\x20Ubuntu', ctx['fillText']('↔', _0x3b9781, _0x5797cb);
                        else {
                            if (_0xc9c75['id']['includes']('mass'))
                                ctx['font'] = '900\x2014px\x20Ubuntu', ctx['fillText']('🔍', _0x3b9781, _0x5797cb);
                            else {
                                if (_0xc9c75['id']['includes']('heal') || _0xc9c75['id']['includes']('Heal'))
                                    ctx['font'] = '900\x2014px\x20Ubuntu', ctx['fillText']('✚', _0x3b9781, _0x5797cb);
                                else
                                    _0xc9c75['id']['includes']('duration') ? (ctx['font'] = '900\x2014px\x20Ubuntu', ctx['fillText']('⏱', _0x3b9781, _0x5797cb)) : (ctx['font'] = '900\x2014px\x20Ubuntu', ctx['fillText']('◆', _0x3b9781, _0x5797cb));
                            }
                        }
                    }
                }
            }
        }
    }
    ['drawTooltip'](_0x164552) {
        const {
            artifactType: _0x435851,
            node: _0x43c327,
            pos: _0x52b86
        } = _0x164552;
        if (_0x43c327['isRoot'])
            return;
        const _0x52036d = this['getNodeLevel'](_0x435851, _0x43c327['id']), _0x3806a3 = _0x52036d >= _0x43c327['maxLevel'], _0x5e7105 = this['canUpgradeNode'](_0x435851, _0x43c327['id']), _0x381551 = 22.5, _0x4099ba = 0xa, _0x40cd17 = this['formatDescription'](_0x43c327['description']);
        ctx['font'] = '900\x20' + 1.2 * 22.5 + 'px\x20Ubuntu';
        const _0x4afb24 = ctx['measureText'](_0x43c327['name'])['width'];
        ctx['font'] = '900\x20' + 0.7 * 22.5 + 'px\x20Ubuntu';
        let _0x17fdb1 = 0x0;
        for (const _0x5a352e of _0x40cd17) {
            if (Array['isArray'](_0x5a352e)) {
                let _0x3c2ed4 = 0x0;
                for (const _0x2fa9b9 of _0x5a352e) {
                    _0x3c2ed4 += ctx['measureText'](_0x2fa9b9['text'])['width'];
                }
                _0x17fdb1 = Math['max'](_0x17fdb1, _0x3c2ed4);
            } else
                _0x17fdb1 = Math['max'](_0x17fdb1, ctx['measureText'](_0x5a352e)['width']);
        }
        let _0x33a271 = Math['max'](_0x4afb24, _0x17fdb1);
        if (_0x43c327['statKey']) {
            const _0x31d534 = this['formatStatName'](_0x43c327['statKey']), _0x5db450 = _0x43c327['statKey']['includes']('Multiplier') ? '+x\x20per\x20level' : '+0\x20per\x20level';
            _0x33a271 = Math['max'](_0x33a271, ctx['measureText'](_0x31d534 + ':\x20' + _0x5db450)['width']);
        }
        const _0x5ad572 = _0x3806a3 ? 'MAXED' : 'Need\x20SP\x20to\x20upgrade';
        _0x33a271 = Math['max'](_0x33a271, ctx['measureText'](_0x5ad572)['width']);
        let _0x745325 = 0x28;
        _0x745325 += _0x40cd17['length'] * _0x381551;
        _0x43c327['statKey'] && (_0x745325 += _0x381551);
        _0x745325 += _0x381551, _0x745325 += _0x4099ba;
        const _0x4fea87 = Math['max'](0xc8, _0x33a271 + _0x4099ba * 0x2), _0x1b87f0 = _0x745325, _0x4be21f = _0x52b86['x'] + this['skillTreeRenderOffset']['x'], _0x3b4d12 = _0x52b86['y'] + this['skillTreeRenderOffset']['y'];
        let _0x1bb26f = _0x4be21f + _0x52b86['radius'] + 0xf, _0x684a54 = _0x3b4d12 - _0x1b87f0 / 0x2;
        _0x1bb26f + _0x4fea87 > this['w'] && (_0x1bb26f = _0x4be21f - _0x52b86['radius'] - _0x4fea87 - 0xf);
        if (_0x1bb26f < 0x0)
            _0x1bb26f = 0xa;
        if (_0x684a54 < 0x8c)
            _0x684a54 = 0x91;
        if (_0x684a54 + _0x1b87f0 > this['h'])
            _0x684a54 = this['h'] - _0x1b87f0 - 0xa;
        ctx['save'](), ctx['fillStyle'] = '#000000', ctx['globalAlpha'] = 0.5, ctx['beginPath'](), ctx['roundRect'](_0x1bb26f, _0x684a54, _0x4fea87, _0x1b87f0, 0x5), ctx['fill'](), ctx['closePath'](), ctx['globalAlpha'] = 0x1, ctx['font'] = '900\x20' + 1.2 * 22.5 + 'px\x20Ubuntu', ctx['lineWidth'] = 1.2 * 3.25, ctx['textAlign'] = 'left', ctx['textBaseline'] = 'top', ctx['fillStyle'] = '#ffffff', ctx['strokeStyle'] = '#000000', ctx['strokeText'](_0x43c327['name'], _0x1bb26f + _0x4099ba, _0x684a54 + 0xa), ctx['fillText'](_0x43c327['name'], _0x1bb26f + _0x4099ba, _0x684a54 + 0xa);
        let _0x420b98 = _0x684a54 + 0x28;
        ctx['font'] = '900\x20' + 0.7 * 22.5 + 'px\x20Ubuntu', ctx['lineWidth'] = 0.7 * 3.25;
        for (const _0x220b38 of _0x40cd17) {
            if (Array['isArray'](_0x220b38)) {
                let _0x30c431 = 0x0;
                for (const _0x481e15 of _0x220b38) {
                    ctx['fillStyle'] = _0x481e15['color'], ctx['strokeStyle'] = '#000000', ctx['strokeText'](_0x481e15['text'], _0x1bb26f + _0x4099ba + _0x30c431, _0x420b98), ctx['fillText'](_0x481e15['text'], _0x1bb26f + _0x4099ba + _0x30c431, _0x420b98), _0x30c431 += ctx['measureText'](_0x481e15['text'])['width'];
                }
            } else
                ctx['fillStyle'] = '#ffffff', ctx['strokeStyle'] = '#000000', ctx['strokeText'](_0x220b38, _0x1bb26f + _0x4099ba, _0x420b98), ctx['fillText'](_0x220b38, _0x1bb26f + _0x4099ba, _0x420b98);
            _0x420b98 += _0x381551;
        }
        if (_0x43c327['statKey']) {
            let _0x17d102, _0x24defb = '#ffffff';
            if (_0x43c327['statKey']['includes']('Multiplier'))
                _0x17d102 = '+' + _0x43c327['valuePerLevel']['toFixed'](0x2) + 'x\x20per\x20level';
            else {
                if (_0x43c327['statKey'] === 'cooldown')
                    _0x43c327['valuePerLevel'] < 0x0 ? _0x17d102 = _0x43c327['valuePerLevel']['toFixed'](0x1) + 's\x20per\x20level' : _0x17d102 = '+' + _0x43c327['valuePerLevel']['toFixed'](0x1) + 's\x20per\x20level';
                else {
                    if (_0x43c327['statKey'] === 'range')
                        _0x17d102 = '+' + _0x43c327['valuePerLevel']['toFixed'](0x0) + 'px\x20per\x20level';
                    else
                        _0x43c327['statKey'] === 'knockbackForce' ? _0x17d102 = '+' + _0x43c327['valuePerLevel']['toFixed'](0x2) + 'x\x20per\x20level' : _0x17d102 = '+' + _0x43c327['valuePerLevel']['toFixed'](0x2) + '\x20per\x20level';
                }
            }
            const _0x45232a = this['getStatColor'](_0x43c327['statKey']), _0x1e735a = this['formatStatName'](_0x43c327['statKey']);
            ctx['fillStyle'] = _0x45232a, ctx['strokeStyle'] = '#000000', ctx['strokeText'](_0x1e735a + ':\x20', _0x1bb26f + _0x4099ba, _0x420b98), ctx['fillText'](_0x1e735a + ':\x20', _0x1bb26f + _0x4099ba, _0x420b98);
            const _0x3adbb2 = ctx['measureText'](_0x1e735a + ':\x20')['width'];
            ctx['fillStyle'] = _0x24defb, ctx['strokeText'](_0x17d102, _0x1bb26f + _0x4099ba + _0x3adbb2, _0x420b98), ctx['fillText'](_0x17d102, _0x1bb26f + _0x4099ba + _0x3adbb2, _0x420b98), _0x420b98 += _0x381551;
        }
        ctx['font'] = '900\x20' + 0.7 * 22.5 + 'px\x20Ubuntu', ctx['lineWidth'] = 0.7 * 3.25;
        if (_0x3806a3)
            ctx['fillStyle'] = '#32cd32', ctx['strokeStyle'] = '#000000', ctx['strokeText']('MAXED', _0x1bb26f + _0x4099ba, _0x420b98), ctx['fillText']('MAXED', _0x1bb26f + _0x4099ba, _0x420b98);
        else {
            if (!this['isNodeUnlocked'](_0x435851, _0x43c327['id']))
                ctx['fillStyle'] = '#888888', ctx['strokeStyle'] = '#000000', ctx['strokeText']('Requires\x20previous\x20skills', _0x1bb26f + _0x4099ba, _0x420b98), ctx['fillText']('Requires\x20previous\x20skills', _0x1bb26f + _0x4099ba, _0x420b98);
            else
                _0x5e7105 ? (ctx['fillStyle'] = '#ffd700', ctx['strokeStyle'] = '#000000', ctx['strokeText'](_0x43c327['costPerLevel'] + '\x20SP\x20to\x20upgrade', _0x1bb26f + _0x4099ba, _0x420b98), ctx['fillText'](_0x43c327['costPerLevel'] + '\x20SP\x20to\x20upgrade', _0x1bb26f + _0x4099ba, _0x420b98)) : (ctx['fillStyle'] = '#ff6b6b', ctx['strokeStyle'] = '#000000', ctx['strokeText']('Need\x20' + _0x43c327['costPerLevel'] + '\x20SP', _0x1bb26f + _0x4099ba, _0x420b98), ctx['fillText']('Need\x20' + _0x43c327['costPerLevel'] + '\x20SP', _0x1bb26f + _0x4099ba, _0x420b98));
        }
        if (_0x52036d > 0x0 && !_0x3806a3) {
            const _0x35bacc = _0x3806a3 ? 'MAXED' : _0x43c327['costPerLevel'] + '\x20SP\x20to\x20upgrade', _0x4606f1 = '\x20(' + _0x52036d + '/' + _0x43c327['maxLevel'] + ')';
            ctx['fillStyle'] = '#ffffff', ctx['strokeText'](_0x4606f1, _0x1bb26f + _0x4099ba + ctx['measureText'](_0x35bacc)['width'], _0x420b98), ctx['fillText'](_0x4606f1, _0x1bb26f + _0x4099ba + ctx['measureText'](_0x35bacc)['width'], _0x420b98);
        }
        ctx['restore']();
    }
    ['formatDescription'](_0x21697c) {
        const _0x2c0cf7 = 0x104;
        ctx['font'] = '900\x20' + 0.7 * 22.5 + 'px\x20Ubuntu';
        if (Array['isArray'](_0x21697c))
            return [_0x21697c];
        const _0x374b21 = [];
        let _0x404ffe = '';
        const _0x435309 = _0x21697c['split']('');
        for (const _0x2dc7c5 of _0x435309) {
            const _0x3e915e = _0x404ffe + _0x2dc7c5;
            ctx['measureText'](_0x3e915e)['width'] > _0x2c0cf7 && _0x404ffe !== '' ? (_0x374b21['push'](_0x404ffe), _0x404ffe = _0x2dc7c5) : _0x404ffe = _0x3e915e;
        }
        if (_0x404ffe)
            _0x374b21['push'](_0x404ffe);
        return _0x374b21['length'] > 0x0 ? _0x374b21 : [_0x21697c];
    }
    ['formatStatName'](_0x4af5ae) {
        const _0x4e0271 = {
            'eggHpMultiplier': 'Egg\x20HP',
            'eggMassMultiplier': 'Egg\x20Mass',
            'eggDamageMultiplier': 'Egg\x20Damage',
            'healMultiplier': 'Heal',
            'dpsMultiplier': 'DPS',
            'hpMultiplier': 'HP',
            'cooldown': 'Cooldown',
            'duration': 'Duration',
            'range': 'Range',
            'knockbackForce': 'Knockback',
            'damageMultiplier': 'Frenzy\x20Damage',
            'healBoost': 'Raid\x20Heal',
            'mobDamageMultiplier': 'Mob\x20Damage',
            'mobSpeedMultiplier': 'Mob\x20Speed',
            'mobHpMultiplier': 'Mob\x20HP',
            'abilityCooldown': 'Ability\x20CD'
        };
        return _0x4e0271[_0x4af5ae] || _0x4af5ae;
    }
    ['getStatColor'](_0xbef572) {
        const _0x42f6f7 = {
            'eggHpMultiplier': '#ff9999',
            'eggMassMultiplier': '#99ccff',
            'eggDamageMultiplier': '#ff6666',
            'healMultiplier': '#99ff99',
            'dpsMultiplier': '#ff6666',
            'hpMultiplier': '#ff9999',
            'cooldown': '#ffcc66',
            'duration': '#ccccff',
            'range': '#99ccff',
            'knockbackForce': '#ff9966',
            'damageMultiplier': '#ff6666',
            'healBoost': '#99ff99',
            'mobDamageMultiplier': '#ff6666',
            'mobSpeedMultiplier': '#99ccff',
            'mobHpMultiplier': '#ff9999',
            'abilityCooldown': '#ffcc66'
        };
        return _0x42f6f7[_0xbef572] || '#ffffff';
    }
    ['drawArtifactTooltip'](_0x33487a, _0x423287, _0x40e838) {
        const _0x356759 = SKILL_TREES[_0x33487a], _0x1e49dc = this['artifacts'][_0x33487a];
        if (!_0x356759 || !_0x1e49dc)
            return;
        const _0x1f5fff = _0x1e49dc?.['skillLevels'] || {}, _0x1d8cef = this['formatDescription'](_0x356759['description']), _0x97e65 = 22.5, _0x1c428f = 0xa, _0x2b2c67 = {};
        for (const _0x126a57 of _0x356759['nodes']) {
            if (_0x126a57['isRoot'] || !_0x126a57['statKey'])
                continue;
            const _0x50b989 = _0x126a57['id']['replace'](/_\d+$/, '');
            !_0x2b2c67[_0x50b989] && (_0x2b2c67[_0x50b989] = {
                'statKey': _0x126a57['statKey'],
                'baseValue': _0x126a57['baseValue'],
                'valuePerLevel': _0x126a57['valuePerLevel'],
                'totalLevels': 0x0,
                'displayName': _0x126a57['name']
            });
        }
        for (const [_0x3e4d65, _0x3c8252] of Object['entries'](_0x1f5fff)) {
            const _0x2025d6 = _0x3e4d65['replace'](/_\d+$/, '');
            _0x2b2c67[_0x2025d6] && (_0x2b2c67[_0x2025d6]['totalLevels'] += _0x3c8252);
        }
        let _0x2d5ad8 = [];
        for (const [_0x562a72, _0x4966b8] of Object['entries'](_0x2b2c67)) {
            if (_0x4966b8['totalLevels'] === 0x0 && _0x4966b8['baseValue'] === 0x0)
                continue;
            const _0xd40a10 = _0x4966b8['baseValue'] + _0x4966b8['totalLevels'] * _0x4966b8['valuePerLevel'], _0x3de196 = this['stripRomanNumeral'](_0x4966b8['displayName']), _0x3f9b26 = {
                    'key': _0x3de196,
                    'value': _0xd40a10,
                    'format': this['getValueFormat'](_0x4966b8['statKey'])
                };
            _0x2d5ad8['push'](_0x3f9b26);
        }
        _0x356759['passiveEffects']?.['squadHealShare'] && _0x2d5ad8['push']({
            'key': 'Squad\x20Heal',
            'value': _0x356759['passiveEffects']['squadHealShare'] * 0x64,
            'format': 'percent'
        });
        ctx['font'] = '900\x20' + 1.2 * 22.5 + 'px\x20Ubuntu';
        const _0x597814 = ctx['measureText'](_0x356759['name'])['width'];
        ctx['font'] = '900\x20' + 0.7 * 22.5 + 'px\x20Ubuntu';
        const _0x48a8bb = Math['max'](..._0x1d8cef['map'](_0x4586a1 => ctx['measureText'](_0x4586a1)['width']));
        let _0x5ef532 = 0x0;
        for (const _0x26f0db of _0x2d5ad8) {
            const _0x4476a2 = this['formatStatValue'](_0x26f0db);
            _0x5ef532 = Math['max'](_0x5ef532, ctx['measureText'](_0x4476a2)['width']);
        }
        const _0x4e54b6 = Math['max'](_0x597814 + 0x14, Math['max'](_0x48a8bb + 0x14, _0x5ef532 + 0x14)), _0x51b687 = 0x4b + _0x1d8cef['length'] * 22.5 + _0x2d5ad8['length'] * 22.5 + 0xa;
        let _0x12c7f6 = _0x423287 + 0x2d, _0x250ca1 = _0x40e838 - _0x51b687 / 0x2;
        _0x12c7f6 + _0x4e54b6 > this['w'] && (_0x12c7f6 = _0x423287 - 0x2d - _0x4e54b6);
        if (_0x12c7f6 < 0x0)
            _0x12c7f6 = 0xa;
        if (_0x250ca1 < 0x0)
            _0x250ca1 = 0xa;
        if (_0x250ca1 + _0x51b687 > this['h'])
            _0x250ca1 = this['h'] - _0x51b687 - 0xa;
        ctx['save'](), ctx['fillStyle'] = '#000000', ctx['globalAlpha'] *= 0.5, ctx['beginPath'](), ctx['roundRect'](_0x12c7f6, _0x250ca1, _0x4e54b6, _0x51b687, 0x5), ctx['fill'](), ctx['globalAlpha'] /= 0.5, ctx['font'] = '900\x20' + 1.2 * 22.5 + 'px\x20Ubuntu', ctx['fillStyle'] = _0x356759['color'], ctx['textAlign'] = 'left', ctx['textBaseline'] = 'top', ctx['strokeText'](_0x356759['name'], _0x12c7f6 + _0x1c428f, _0x250ca1 + 0xa), ctx['fillText'](_0x356759['name'], _0x12c7f6 + _0x1c428f, _0x250ca1 + 0xa), ctx['font'] = '900\x20' + 0.7 * 22.5 + 'px\x20Ubuntu', ctx['fillStyle'] = '#ffffff';
        let _0xa6fe2 = _0x250ca1 + 0x32;
        for (const _0x220f7f of _0x1d8cef) {
            ctx['strokeText'](_0x220f7f, _0x12c7f6 + _0x1c428f, _0xa6fe2), ctx['fillText'](_0x220f7f, _0x12c7f6 + _0x1c428f, _0xa6fe2), _0xa6fe2 += 22.5;
        }
        let _0x5c35e3 = _0xa6fe2 + 0x5;
        for (const _0x47d880 of _0x2d5ad8) {
            const _0x296b5c = this['formatStatValue'](_0x47d880);
            ctx['fillStyle'] = _0x356759['color'], ctx['strokeText'](_0x296b5c, _0x12c7f6 + _0x1c428f, _0x5c35e3), ctx['fillText'](_0x296b5c, _0x12c7f6 + _0x1c428f, _0x5c35e3), _0x5c35e3 += 22.5;
        }
        ctx['restore']();
    }
    ['stripRomanNumeral'](_0x4cd4a1) {
        return _0x4cd4a1['replace'](/\s+[IVX]+$/, '');
    }
    ['getValueFormat'](_0x2d17fb) {
        if (_0x2d17fb?.['includes']('Multiplier') || _0x2d17fb === 'healMultiplier' || _0x2d17fb === 'dpsMultiplier' || _0x2d17fb === 'hpMultiplier')
            return 'multiplier';
        if (_0x2d17fb === 'cooldownReduction')
            return 'negative_percent';
        if (_0x2d17fb === 'cooldown')
            return 'time';
        return 'number';
    }
    ['formatStatValue'](_0xc4c5ca) {
        let _0xe605be;
        switch (_0xc4c5ca['format']) {
        case 'multiplier':
            _0xe605be = 'x' + _0xc4c5ca['value']['toFixed'](0x2);
            break;
        case 'percent':
            _0xe605be = _0xc4c5ca['value']['toFixed'](0x0) + '%';
            break;
        case 'negative_percent':
            _0xe605be = '-' + _0xc4c5ca['value']['toFixed'](0x0) + '%';
            break;
        case 'time':
            _0xe605be = _0xc4c5ca['value']['toFixed'](0x1) + 's';
            break;
        default:
            _0xe605be = _0xc4c5ca['value']['toFixed'](0x2);
        }
        return _0xc4c5ca['key'] + ':\x20' + _0xe605be;
    }
    ['drawCloseButton'](_0x2a3133, _0x7555f) {
        const _0x473897 = 0x1e, _0x218e06 = this['w'] - _0x473897 - 0xa, _0x1486f8 = 0xa;
        _0x2a3133 > _0x218e06 && _0x2a3133 < _0x218e06 + _0x473897 && _0x7555f > _0x1486f8 && _0x7555f < _0x1486f8 + _0x473897 ? (ctx['fillStyle'] = '#ff6b6b', setCursor('pointer'), this['hoveringOverX'] = !![]) : (ctx['fillStyle'] = '#c1565e', this['hoveringOverX'] = ![]), ctx['strokeStyle'] = '#90464b', ctx['lineWidth'] = 0x5, ctx['beginPath'](), ctx['roundRect'](_0x218e06, _0x1486f8, _0x473897, _0x473897, 0x6), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['lineWidth'] = 4.75, ctx['lineCap'] = 'round', ctx['strokeStyle'] = '#cccccc', ctx['beginPath'](), ctx['moveTo'](_0x218e06 + 0x8, _0x1486f8 + 0x8), ctx['lineTo'](_0x218e06 + _0x473897 - 0x8, _0x1486f8 + _0x473897 - 0x8), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['moveTo'](_0x218e06 + _0x473897 - 0x8, _0x1486f8 + 0x8), ctx['lineTo'](_0x218e06 + 0x8, _0x1486f8 + _0x473897 - 0x8), ctx['stroke'](), ctx['closePath']();
    }
    ['drawResetButton'](_0x163706, _0x1876cc, _0x175ea4) {
        const _0xa2723b = 0x64, _0x219657 = 0x1e, _0x1430d7 = this['w'] - _0xa2723b - 0xa, _0x400c06 = 0x91, _0xf8d849 = this['artifacts'][_0x175ea4], _0x29808b = _0xf8d849 && _0xf8d849['totalLevelPoints'] > 0x0, _0x53e9a5 = 0xc * 0x3c * 0x3c * 0x3e8, _0x548df8 = Date['now'](), _0x19b17f = this['lastArtifactResetTime'] || 0x0, _0x5676b1 = _0x19b17f > 0x0 ? _0x548df8 - _0x19b17f : _0x53e9a5, _0x56a902 = _0x5676b1 < _0x53e9a5;
        _0x163706 > _0x1430d7 && _0x163706 < _0x1430d7 + _0xa2723b && _0x1876cc > _0x400c06 && _0x1876cc < _0x400c06 + _0x219657 ? (_0x29808b && !_0x56a902 ? (ctx['fillStyle'] = '#90ee90', setCursor('pointer')) : ctx['fillStyle'] = '#888888', this['hoveringOverReset'] = !![]) : (_0x29808b && !_0x56a902 ? ctx['fillStyle'] = '#6aa8df' : ctx['fillStyle'] = '#666666', this['hoveringOverReset'] = ![]);
        ctx['strokeStyle'] = _0x29808b && !_0x56a902 ? '#4981b1' : '#555555', ctx['lineWidth'] = 0x3, ctx['beginPath'](), ctx['roundRect'](_0x1430d7, _0x400c06, _0xa2723b, _0x219657, 0x5), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['font'] = '700\x2014px\x20Ubuntu', ctx['fillStyle'] = '#ffffff', ctx['strokeStyle'] = '#000000', ctx['lineWidth'] = 0x2, ctx['textAlign'] = 'center', ctx['textBaseline'] = 'middle';
        const _0x3ad237 = _0x56a902 ? 'Cooldown' : 'Reset';
        ctx['strokeText'](_0x3ad237, _0x1430d7 + _0xa2723b / 0x2, _0x400c06 + _0x219657 / 0x2), ctx['fillText'](_0x3ad237, _0x1430d7 + _0xa2723b / 0x2, _0x400c06 + _0x219657 / 0x2);
    }
    ['mouseMove']() {
        if (!this['menuActive'])
            return;
        if (this['isDraggingSkillTree']) {
            const _0x5a9901 = mouse['x'] - this['dragStartPos']['x'], _0x381f63 = mouse['y'] - this['dragStartPos']['y'];
            this['skillTreeOffset']['x'] += _0x5a9901, this['skillTreeOffset']['y'] += _0x381f63, this['dragStartPos'] = {
                'x': mouse['x'],
                'y': mouse['y']
            }, setCursor('grabbing');
        }
    }
    ['mouseUp']() {
        this['isDraggingSkillTree'] = ![];
    }
    ['mouseDown']() {
        if (!this['menuActive'])
            return;
        const _0x60f67a = mouse['canvasX'] - this['x'], _0x51aef4 = mouse['canvasY'] - this['y'], _0x53ee35 = 0x1e, _0x3e86a0 = this['w'] - _0x53ee35 - 0xa, _0x4edabf = 0xa;
        if (_0x60f67a > _0x3e86a0 && _0x60f67a < _0x3e86a0 + _0x53ee35 && _0x51aef4 > _0x4edabf && _0x51aef4 < _0x4edabf + _0x53ee35) {
            this['toggleMenu']();
            return;
        }
        if (this['selectedArtifactIndex'] >= 0x0 && this['hoveringOverReset']) {
            const _0x201295 = ARTIFACT_TYPES[this['selectedArtifactIndex']];
            this['resetArtifactSkills'](_0x201295);
            return;
        }
        const _0xda69a4 = 0x41, _0x54b447 = 0x41, _0xaacfb7 = 0xa, _0x110986 = ARTIFACT_TYPES['length'] * _0x54b447 + (ARTIFACT_TYPES['length'] - 0x1) * _0xaacfb7, _0x3584df = (this['w'] - _0x110986) / 0x2;
        for (let _0x27e879 = 0x0; _0x27e879 < ARTIFACT_TYPES['length']; _0x27e879++) {
            const _0x222e76 = ARTIFACT_TYPES[_0x27e879], _0x374ebf = this['artifacts'][_0x222e76], _0x149bdc = _0x3584df + _0x27e879 * (_0x54b447 + _0xaacfb7) + _0x54b447 / 0x2, _0x490fe5 = _0xda69a4 + _0x54b447 / 0x2;
            if (mouse['canvasX'] > this['x'] + _0x149bdc - _0x54b447 / 0x2 && mouse['canvasX'] < this['x'] + _0x149bdc + _0x54b447 / 0x2 && mouse['canvasY'] > this['y'] + _0x490fe5 - _0x54b447 / 0x2 && mouse['canvasY'] < this['y'] + _0x490fe5 + _0x54b447 / 0x2) {
                if (_0x374ebf['petalContainer'] && _0x374ebf['petalContainer']['amount'] > 0x0) {
                    const _0x36372f = {
                        'petals': _0x374ebf['petalContainer']['petals'],
                        'type': _0x374ebf['petalContainer']['type'],
                        'rarity': _0x374ebf['petalContainer']['rarity'],
                        'id': _0x374ebf['petalContainer']['id'],
                        'amount': 0x1
                    };
                    _0x374ebf['petalContainer']['amount'] = 0x0, _0x374ebf['renderPetalContainer']['amount'] = 0x0, draggingPetalContainer = new PetalContainer(_0x36372f['petals'], {
                        ..._0x374ebf['petalContainer'],
                        'isDragging': !![]
                    }, _0x36372f['id'] || _0x222e76 + '_artifact', 0x1);
                    const _0x1ccf3d = Object['values'](_0x374ebf['skillLevels'])['reduce']((_0x186093, _0x3bd6f9) => _0x186093 + _0x3bd6f9, 0x0) - 0x1;
                    _0x1ccf3d > 0x0 && (draggingPetalContainer['rarity'] = Math['min'](_0x1ccf3d, 0x22));
                    draggingPetalContainer['x'] = this['x'] + _0x149bdc, draggingPetalContainer['y'] = this['y'] + _0x490fe5, draggingPetalContainer['render']['x'] = this['x'] + _0x149bdc, draggingPetalContainer['render']['y'] = this['y'] + _0x490fe5, draggingPetalContainer['amount'] = 0x1, draggingPetalContainer['mouseOffset'] = {
                        'x': 0x0,
                        'y': 0x0
                    }, draggingPetalContainer['w'] = 0x55, draggingPetalContainer['h'] = 0x55, draggingPetalContainer['spawnAnimation'] = 0x1;
                    return;
                }
                this['selectedArtifactIndex'] = _0x27e879, this['nodePositions'] = {}, this['calculateNodePositions'](ARTIFACT_TYPES[_0x27e879]), this['skillTreeOffset'] = {
                    'x': 0x0,
                    'y': 0x0
                }, this['skillTreeRenderOffset'] = {
                    'x': 0x0,
                    'y': 0x0
                };
                return;
            }
        }
        if (this['selectedArtifactIndex'] >= 0x0 && this['hoveredNode']) {
            const {
                artifactType: _0x783153,
                node: _0x47e937
            } = this['hoveredNode'];
            !_0x47e937['isRoot'] && this['upgradeNode'](_0x783153, _0x47e937['id']);
            return;
        }
        this['selectedArtifactIndex'] >= 0x0 && _0x51aef4 > 0x82 && (this['isDraggingSkillTree'] = !![], this['dragStartPos'] = {
            'x': mouse['x'],
            'y': mouse['y']
        });
    }
}