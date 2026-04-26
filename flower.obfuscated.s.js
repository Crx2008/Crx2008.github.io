const playerSpeed = 0x1, petalRotateSpeed = 2.5 / 0x1e, neutralPetalDistance = 0x46, attackPetalDistance = neutralPetalDistance * 1.91, defendPetalDistance = neutralPetalDistance * 0.6, flowerSpeed = 0x1 / 0x9, serverTickLength = 0x3e8 / 0x1e, flowerInterpolateKeys = [
        'headX',
        'headY',
        'radius',
        'hp',
        'baseX',
        'baseY',
        'petalDistance',
        'beforeStreakHp',
        'shield',
        'isPoisoned',
        'healingReduction'
    ], flowerInterpolateMagnitudes = [
        0.14,
        0.14,
        0.44,
        0.22,
        0.14,
        0.14,
        0.2,
        0.22,
        0.22,
        0.088,
        0.088
    ], flowerPackKeys = [
        'id',
        'hp',
        'maxHp',
        'shield',
        'headX',
        'headY',
        'radius',
        'petalRotation',
        'petalRotateSpeed',
        'angle',
        'isPoisoned',
        'petalDistance'
    ];
class Flower {
    constructor(_0x507e62) {
        this['id'] = _0x507e62, this['x'] = 0x0, this['y'] = 0x0, this['baseX'] = 0x0, this['baseY'] = 0x0, this['healingReduction'] = 0x1, this['headX'] = 0x0, this['headY'] = 0x0, this['radius'] = 0x19, this['xv'] = 0x0, this['yv'] = 0x0, this['friction'] = 0.3, this['movementType'] = 'mouse', this['angle'] = 0x0, this['magnitude'] = 0x0, this['maxHp'] = 0x64, this['hp'] = 0x64, this['shield'] = 0x0, this['isPoisoned'] = 0x0, this['name'] = '', this['beforeStreakHp'] = this['maxHp'], this['ticksSinceLastDamaged'] = 0x3e9, this['input'] = {
            'up': ![],
            'down': ![],
            'right': ![],
            'left': ![]
        }, this['eyeOffsetX'] = 0x0, this['eyeOffsetY'] = 0x0, this['petals'] = [], this['petalRotateSpeed'] = petalRotateSpeed, this['petalRotation'] = 0x0, this['petalLag'] = 0x0, this['petalDistance'] = neutralPetalDistance, this['attacking'] = ![], this['defending'] = ![], this['middleState'] = ![], this['render'] = {};
        for (let _0x577bba = 0x0; _0x577bba < flowerInterpolateKeys['length']; _0x577bba++) {
            this['render'][flowerInterpolateKeys[_0x577bba]] = this[flowerInterpolateKeys[_0x577bba]];
        }
        this['render']['angle'] = this['angle'], this['render']['fastPetalDistance'] = this['petalDistance'], this['render']['x'] = this['render']['baseX'], this['render']['y'] = this['render']['baseY'], this['projectiles'] = [], this['pets'] = [], this['deadProjectiles'] = [], this['deadPets'] = [], this['character'] = 'flower', this['score'] = 0x0;
    }
    ['init'](_0x504340) {
        console['log']('🔮\x20[flower.init]\x20调用\x20init,\x20data.equippedArtifacts=', _0x504340['equippedArtifacts'], ',\x20data.id=', _0x504340['id'], ',\x20selfId=', selfId), console['log']('🔮\x20[flower.init]\x20调用前\x20artifactContainer=', typeof menuInventory !== 'undefined' ? menuInventory['artifactContainer'] : 'menuInventory\x20undefined');
        if (_0x504340['id'] == selfId && _0x504340['equippedArtifacts'] && _0x504340['equippedArtifacts']['length'] > 0x0 && typeof menuInventory !== 'undefined') {
            const _0x4322c6 = _0x504340['equippedArtifacts'][0x0];
            console['log']('🔮\x20[flower.init]\x20同步神器到菜单槽位:', _0x4322c6);
            if (_0x4322c6) {
                if (typeof specialGlobalInventory !== 'undefined') {
                    const _0x61c51c = specialGlobalInventory['artifacts'][_0x4322c6];
                    console['log']('🔮\x20[flower.init]\x20神器对象:', _0x61c51c), _0x61c51c && _0x61c51c['petalContainer'] ? (console['log']('🔮\x20[flower.init]\x20装备神器到槽位,\x20amount=', _0x61c51c['petalContainer']['amount']), menuInventory['artifactContainer'] = _0x61c51c['petalContainer'], menuInventory['artifactContainer']['x'] = menuInventory['artifactSlot']['x'], menuInventory['artifactContainer']['y'] = menuInventory['artifactSlot']['y'], menuInventory['artifactContainer']['w'] = menuInventory['artifactSlot']['size'], menuInventory['artifactContainer']['h'] = menuInventory['artifactSlot']['size'], typeof inventory !== 'undefined' && (inventory['artifactContainer'] = _0x61c51c['petalContainer'], inventory['artifactContainer']['x'] = inventory['artifactSlot']['x'], inventory['artifactContainer']['y'] = inventory['artifactSlot']['y'], inventory['artifactContainer']['w'] = inventory['artifactSlot']['size'], inventory['artifactContainer']['h'] = inventory['artifactSlot']['size']), console['log']('🔮\x20[flower.init]\x20完成，artifactContainer=', menuInventory['artifactContainer'])) : console['warn']('⚠️\x20[flower.init]\x20神器或容器不存在');
                }
            }
        }
        if (_0x504340['id'] == selfId) {
        }
        for (let _0x21368b in _0x504340) {
            if (_0x21368b === 'petals') {
                for (let _0x33eeee in _0x504340['petals']) {
                    this['petals'][_0x33eeee] = new Petal(_0x504340['petals'][_0x33eeee]);
                }
                continue;
            } else {
                if (_0x21368b === 'projectiles')
                    for (let _0x30a462 = 0x0; _0x30a462 < _0x504340['projectiles']['length']; _0x30a462++) {
                        this['projectiles'][_0x30a462] = new Petal(_0x504340['projectiles'][_0x30a462]), this['projectiles'][_0x30a462]['isProjectile'] = !![];
                    }
                else {
                    if (_0x21368b === 'pets')
                        for (let _0x3b0e20 = 0x0; _0x3b0e20 < _0x504340['pets']['length']; _0x3b0e20++) {
                            this['pets'][_0x3b0e20] = new Enemy(_0x504340['pets'][_0x3b0e20]);
                        }
                    else
                        this[_0x21368b] = _0x504340[_0x21368b];
                }
            }
        }
    }
    ['update'](_0x5b2d1a, _0xb8e6f0) {
        _0x5b2d1a[_0xb8e6f0 + 0x1] < this['hp'] && this['updateRenderDamage'](_0x5b2d1a['hp']);
        for (let _0x4fccb8 = _0xb8e6f0; _0x4fccb8 < flowerPackKeys['length'] + _0xb8e6f0; _0x4fccb8++) {
            const _0x31f76c = _0xb8e6f0 + 0x9;
            if (_0x4fccb8 === _0x31f76c && this['id'] === window['selfId']) {
                if (!this['inSkillControl'])
                    continue;
            }
            this[flowerPackKeys[_0x4fccb8 - _0xb8e6f0]] = _0x5b2d1a[_0x4fccb8];
        }
        this['x'] = this['headX'], this['y'] = this['headY'], this['baseX'] = interpolate(this['baseX'], this['headX'], 0.4), this['baseY'] = interpolate(this['baseY'], this['headY'], 0.4);
        for (let _0x3cc65a = 0x0; _0x3cc65a < this['petals']['length']; _0x3cc65a++) {
            const _0xf34a70 = _0x5b2d1a[_0xb8e6f0 + flowerPackKeys['length'] + _0x3cc65a * 0x2], _0x37383a = _0x5b2d1a[_0xb8e6f0 + flowerPackKeys['length'] + _0x3cc65a * 0x2 + 0x1];
            this['petals'][_0x3cc65a]['serverDistance'] = _0xf34a70;
            let _0x85818b = Math['floor'](_0x37383a * 0x64) / 0x64, _0x52ea5d = Math['round'](0x3e8 * (_0x37383a - _0x85818b));
            if (_0x37383a <= 0x0) {
                this['petals'][_0x3cc65a]['update']({
                    'takeDamage': !![],
                    'hp': -_0x85818b
                }, this);
                continue;
            } else {
                if (_0x52ea5d === 0x1) {
                    this['petals'][_0x3cc65a]['dead'] !== ![] && this['petals'][_0x3cc65a]['update']({ 'dead': ![] }, this);
                    continue;
                } else {
                    if (_0x37383a >= 0.002 && _0x37383a < 0.003) {
                        const _0x16639e = (_0x37383a - 0.002) / 0.0001;
                        if (!this['petals'][_0x3cc65a]['maxHp']) {
                            const _0x3271d3 = Stats['petals']?.[this['petals'][_0x3cc65a]['type']]?.[this['petals'][_0x3cc65a]['rarity']];
                            this['petals'][_0x3cc65a]['maxHp'] = _0x3271d3?.['health'] || 0x64;
                        }
                        this['petals'][_0x3cc65a]['hp'] = this['petals'][_0x3cc65a]['maxHp'] * Math['max'](0x0, Math['min'](0x1, _0x16639e)), this['petals'][_0x3cc65a]['render']['hp'] = this['petals'][_0x3cc65a]['hp'];
                        if (!this['petals'][_0x3cc65a]['reloadBase']) {
                            const _0x466ca0 = Stats['petals']?.[this['petals'][_0x3cc65a]['type']]?.[this['petals'][_0x3cc65a]['rarity']];
                            this['petals'][_0x3cc65a]['reloadBase'] = _0x466ca0?.['reload'] || 0x3;
                        }
                        !this['petals'][_0x3cc65a]['maxReload'] && (this['petals'][_0x3cc65a]['maxReload'] = this['petals'][_0x3cc65a]['reloadBase'] * 0x3e8);
                        this['petals'][_0x3cc65a]['reload'] = this['petals'][_0x3cc65a]['maxReload'], this['petals'][_0x3cc65a]['render']['reload'] = this['petals'][_0x3cc65a]['reload'];
                        const _0x5e0647 = this['petals'][_0x3cc65a]['dead'] === !![], _0x4c3e32 = this['petals'][_0x3cc65a]['deadPosition'] !== undefined;
                        (_0x5e0647 || _0x4c3e32) && this['petals'][_0x3cc65a]['update']({ 'dead': ![] }, this);
                        continue;
                    } else {
                        if (_0x52ea5d === 0x3) {
                            this['petals'][_0x3cc65a]['update']({ 'distance': _0x85818b }, this);
                            continue;
                        } else {
                            if (_0x52ea5d === 0x4) {
                                const _0x5944ff = (_0x37383a - 0.004) / 0.0001;
                                if (!this['petals'][_0x3cc65a]['maxReload']) {
                                    const _0xf16b5b = Stats['petals']?.[this['petals'][_0x3cc65a]['type']]?.[this['petals'][_0x3cc65a]['rarity']];
                                    this['petals'][_0x3cc65a]['reloadBase'] = _0xf16b5b?.['reload'] || 0x3, this['petals'][_0x3cc65a]['maxReload'] = this['petals'][_0x3cc65a]['reloadBase'] * 0x3e8;
                                }
                                this['petals'][_0x3cc65a]['reload'] = this['petals'][_0x3cc65a]['maxReload'] * Math['max'](0x0, Math['min'](0x1, _0x5944ff)), this['petals'][_0x3cc65a]['render']['reload'] = this['petals'][_0x3cc65a]['reload'];
                                this['petals'][_0x3cc65a]['dead'] !== !![] && this['petals'][_0x3cc65a]['update']({ 'dead': !![] }, this);
                                this['petals'][_0x3cc65a]['deadPosition'] === undefined && (this['petals'][_0x3cc65a]['deadPosition'] = {
                                    'x': this['petals'][_0x3cc65a]['x'],
                                    'y': this['petals'][_0x3cc65a]['y']
                                });
                                continue;
                            } else {
                                if (_0x52ea5d === 0x5) {
                                    if (this['petals'][_0x3cc65a]['dying'] !== !![]) {
                                        const _0xf57eff = this['petals'][_0x3cc65a]['render']?.['x'] ?? this['petals'][_0x3cc65a]['x'], _0x903714 = this['petals'][_0x3cc65a]['render']?.['y'] ?? this['petals'][_0x3cc65a]['y'];
                                        this['petals'][_0x3cc65a]['update']({
                                            'dead': !![],
                                            'dying': !![],
                                            'reload': _0x85818b,
                                            'deadPosition': {
                                                'x': _0xf57eff,
                                                'y': _0x903714
                                            }
                                        }, this);
                                    } else
                                        this['petals'][_0x3cc65a]['update']({ 'reload': _0x85818b }, this);
                                    continue;
                                }
                            }
                        }
                    }
                }
            }
        }
        if (this['projectiles']['length'] !== 0x0) {
            const _0x27a4ec = _0xb8e6f0 + flowerPackKeys['length'] + this['petals']['length'] * 0x2;
            for (let _0x1b8200 = 0x0; _0x1b8200 < this['projectiles']['length']; _0x1b8200++) {
                if (!this['projectiles'][_0x1b8200])
                    continue;
                const _0x53d70c = [
                    _0x5b2d1a[_0x27a4ec + _0x1b8200 * 0x2],
                    _0x5b2d1a[_0x27a4ec + _0x1b8200 * 0x2 + 0x1]
                ];
                _0x53d70c[0x0] === -6.5 ? this['projectiles'][_0x1b8200]['update']({ 'dead': !![] }, this) : this['projectiles'][_0x1b8200]['update']({
                    'x': _0x53d70c[0x0],
                    'y': _0x53d70c[0x1]
                }, this);
            }
        }
        if (this['pets']['length'] !== 0x0) {
            const _0x2fdba1 = _0xb8e6f0 + flowerPackKeys['length'] + this['petals']['length'] * 0x2 + this['projectiles']['length'] * 0x2;
            for (let _0x2e1e66 = 0x0; _0x2e1e66 < this['pets']['length']; _0x2e1e66++) {
                const _0x2959e2 = _0x2fdba1 + _0x2e1e66 * enemyPackKeys['length'];
                this['pets'][_0x2e1e66]['update'](_0x5b2d1a, _0x2959e2);
            }
        }
    }
    ['updateRenderDamage']() {
        this['ticksSinceLastDamaged'] = 0x0;
    }
    ['updatePetsAndProjectiles']() {
        for (let _0x4c42d6 = 0x0; _0x4c42d6 < this['deadProjectiles']['length']; _0x4c42d6++) {
            this['deadProjectiles'][_0x4c42d6]['deadAnimationTimer'] > 0xa6 && (this['deadProjectiles'][_0x4c42d6]['toRemove'] = !![]);
        }
        this['deadProjectiles'] = this['deadProjectiles']['filter'](_0x58e050 => _0x58e050['toRemove'] !== !![]);
        for (let _0x411806 = 0x0; _0x411806 < this['deadPets']['length']; _0x411806++) {
            this['deadPets'][_0x411806]['deadAnimationTimer'] > 0xa6 && (this['deadPets'][_0x411806]['toRemove'] = !![]);
        }
        this['deadPets'] = this['deadPets']['filter'](_0x73810d => _0x73810d['toRemove'] !== !![]);
    }
    ['calculatePetalLag']() {
        return 1.08695652174 * this['petalRotateSpeed'];
    }
    ['updateInterpolate']() {
        if (window['Perf'])
            window['Perf']['mark']('Flower.updateInterpolate');
        if (window['isEditor'] && this['extraRange'] !== undefined && this['petalDistance'] > neutralPetalDistance) {
            var _0x43d0eb = this['petalDistance'];
            this['petalDistance'] /= this['extraRange'];
        }
        for (let _0x123590 = 0x0; _0x123590 < flowerInterpolateKeys['length']; _0x123590++) {
            this['render'][flowerInterpolateKeys[_0x123590]] = interpolate(this['render'][flowerInterpolateKeys[_0x123590]], this[flowerInterpolateKeys[_0x123590]], flowerInterpolateMagnitudes[_0x123590] * dt / 16.66);
        }
        this['render']['angle'] = interpolateDirection(this['render']['angle'], this['angle'], 0.2 * dt / 16.66), this['render']['fastPetalDistance'] = interpolate(this['render']['fastPetalDistance'], this['petalDistance'], 0.4 * dt / 16.66);
        for (let _0x375e69 = 0x0; _0x375e69 < this['petals']['length']; _0x375e69++) {
            this['petals'][_0x375e69]['updateInterpolate'](this);
        }
        for (let _0xb73302 = 0x0; _0xb73302 < this['projectiles']['length']; _0xb73302++) {
            if (!this['projectiles'][_0xb73302])
                continue;
            this['projectiles'][_0xb73302]['updateInterpolate'] !== undefined ? this['projectiles'][_0xb73302]['updateInterpolate'](this) : this['projectiles'][_0xb73302] = new Petal(this['projectiles'][_0xb73302]);
        }
        this['render']['x'] = this['render']['baseX'], this['render']['y'] = this['render']['baseY'];
        window['isEditor'] && this['extraRange'] !== undefined && this['petalDistance'] > neutralPetalDistance && (this['petalDistance'] = _0x43d0eb);
        if (window['Perf'])
            window['Perf']['end']('Flower.updateInterpolate');
    }
    ['drawProjectiles']() {
        if (this['projectiles']['length'] === 0x0 || window['renderSquadPetals'] !== !![] && this['id'] !== window['selfId'])
            return;
        for (let _0x478fa5 = 0x0; _0x478fa5 < this['projectiles']['length']; _0x478fa5++) {
            if (!this['projectiles'][_0x478fa5])
                continue;
            toRender({
                'x': this['projectiles'][_0x478fa5]['x'],
                'y': this['projectiles'][_0x478fa5]['y'],
                'radius': this['projectiles'][_0x478fa5]['radius']
            }, window['camera']) === !![] && this['projectiles'][_0x478fa5]['draw'](), this['projectiles'][_0x478fa5]['updateTimer']();
        }
    }
    ['drawPets']() {
        for (let _0x56e35d = 0x0; _0x56e35d < this['pets']['length']; _0x56e35d++) {
            if (this['pets'][_0x56e35d]?.['render']?.['x'] === undefined)
                continue;
            toRender({
                'x': this['pets'][_0x56e35d]['x'],
                'y': this['pets'][_0x56e35d]['y'],
                'radius': this['pets'][_0x56e35d]['radius'] * 0x4
            }, window['camera']) === !![] && this['pets'][_0x56e35d]['draw']();
        }
        for (let _0xbeb119 = 0x0; _0xbeb119 < this['deadPets']['length']; _0xbeb119++) {
            if (this['deadPets'][_0xbeb119]?.['render']?.['x'] === undefined)
                continue;
            toRender({
                'x': this['deadPets'][_0xbeb119]['x'],
                'y': this['deadPets'][_0xbeb119]['y'],
                'radius': this['deadPets'][_0xbeb119]['radius'] * 0x4
            }, window['camera']) === !![] && this['deadPets'][_0xbeb119]['draw']();
        }
    }
    ['draw']() {
        if (window['Perf'])
            window['Perf']['mark']('Flower.draw');
        this['id'] !== window['selfId'] && this['updateInterpolate']();
        this['updatePetsAndProjectiles']();
        for (let _0x381b46 = 0x0; _0x381b46 < this['deadProjectiles']['length']; _0x381b46++) {
            if (!this['deadProjectiles'][_0x381b46] || window['renderSquadPetals'] !== !![] && this['id'] !== window['selfId'])
                continue;
            toRender({
                'x': this['deadProjectiles'][_0x381b46]['x'],
                'y': this['deadProjectiles'][_0x381b46]['y'],
                'radius': this['deadProjectiles'][_0x381b46]['radius']
            }, window['camera']) === !![] && this['deadProjectiles'][_0x381b46]['draw'](), this['deadProjectiles'][_0x381b46]['updateTimer']();
        }
        this['ticksSinceLastDamaged'] += dt;
        this['ticksSinceLastDamaged'] > 0x29a && (this['beforeStreakHp'] = this['hp']);
        renderHpBar({
            'x': this['render']['headX'],
            'y': this['render']['headY'] - this['render']['radius'] / 0x3,
            'radius': this['render']['radius'],
            'hp': this['render']['hp'],
            'maxHp': this['maxHp'],
            'shield': this['render']['shield'],
            'beforeStreakHp': this['render']['beforeStreakHp'],
            'flowerName': this['name'],
            'flowerUsername': this['username']
        }, this);
        this['petalAlpha'] !== undefined && (ctx['globalAlpha'] = this['petalAlpha']);
        this['id'] == window['selfId'] && (petalReloadData = {}, petalHpData = {});
        if (!(window['renderSquadPetals'] !== !![] && this['id'] !== window['selfId'])) {
            if (this['character'] === 'Tanksmith' && state === 'menu') {
                let _0x18c392 = 0x1;
                for (let _0xb88cd5 = 0x0; _0xb88cd5 < this['petals']['length']; _0xb88cd5++) {
                    let _0x55e471 = this['petals'][_0xb88cd5];
                    if (toRender({
                            'x': _0x55e471['x'],
                            'y': _0x55e471['y'],
                            'radius': _0x55e471['radius']
                        }, window['camera']) === !![]) {
                        if (_0x55e471['subStackedId'] !== 0x0) {
                            _0x18c392++;
                            continue;
                        }
                        ctx['translate'](_0x55e471['render']['x'], _0x55e471['render']['y']);
                        let _0x2720bd = 'Normal';
                        if ([
                                'Rose',
                                'Dahlia',
                                'Leaf',
                                'Starfish',
                                'Shell'
                            ]['includes'](_0x55e471['type']))
                            _0x2720bd = 'Heal';
                        else {
                            if (['Yucca']['includes'](_0x55e471['type']))
                                _0x2720bd = 'TankHeal';
                            else {
                                if (_0x55e471['type'] === 'Bud')
                                    _0x2720bd = 'Bud';
                                else {
                                    if (_0x55e471['type'] === 'Bloom')
                                        _0x2720bd = 'Bloom';
                                    else {
                                        if (_0x55e471['type'] === 'Magnet')
                                            _0x2720bd = 'Magnet';
                                        else {
                                            if (_0x55e471['type'] === 'Egg' || _0x55e471['type'] === 'Jellyfish\x20Egg' || _0x55e471['type'] === 'Neuroflare\x20Egg')
                                                _0x2720bd = 'Egg';
                                        }
                                    }
                                }
                            }
                        }
                        enemyRenderMap['Tanksmith']({
                            'render': {
                                'radius': _0x55e471['radius'] * Math['sqrt'](_0x18c392),
                                'angle': _0x55e471['render']['angle']
                            },
                            'barrelNum': _0x18c392,
                            'tsRenderType': _0x2720bd,
                            'ticksSinceLastDamaged': 0x3e9,
                            'lastTicksSinceLastDamaged': 0x3e9
                        }), ctx['translate'](-_0x55e471['render']['x'], -_0x55e471['render']['y']), _0x18c392 = 0x1;
                    }
                    _0x55e471['updateTimer']();
                }
            } else {
                let _0x347776 = ![], _0x12b29a = 0x1;
                if (window['verdantUltimateEffects'] && window['verdantUltimateEffects'][this['id']]) {
                    const _0xa3f24e = window['verdantUltimateEffects'][this['id']], _0x4be582 = performance['now']();
                    _0x4be582 < _0xa3f24e['endTime'] && (_0x347776 = !![], _0x12b29a = Math['min']((_0x4be582 - _0xa3f24e['startTime']) / 0x12c, 0x1));
                }
                for (let _0x4e36fb = 0x0; _0x4e36fb < this['petals']['length']; _0x4e36fb++) {
                    let _0x50a106 = this['petals'][_0x4e36fb];
                    toRender({
                        'x': _0x50a106['x'],
                        'y': _0x50a106['y'],
                        'radius': _0x50a106['radius']
                    }, window['camera']) === !![] && _0x50a106['draw'](_0x347776, _0x12b29a);
                    if (this['id'] == window['selfId']) {
                        let _0x48fa46 = _0x50a106['petalContainerId'];
                        !petalReloadData[_0x48fa46] ? (_0x50a106['dead'] || _0x50a106['dying']) && (petalReloadData[_0x48fa46] = { 'reload': _0x50a106['render']['reload'] / _0x50a106['maxReload'] }) : petalReloadData[_0x48fa46]['reload'] < _0x50a106['render']['reload'] / _0x50a106['maxReload'] && (_0x50a106['dead'] || _0x50a106['dying']) && (petalReloadData[_0x48fa46]['reload'] = _0x50a106['render']['reload'] / _0x50a106['maxReload']), !petalHpData[_0x48fa46] ? !_0x50a106['dead'] && (petalHpData[_0x48fa46] = {
                            'hp': _0x50a106['render']['hp'] / _0x50a106['maxHp'],
                            'count': 0x1
                        }) : !_0x50a106['dead'] && (petalHpData[_0x48fa46]['hp'] = (petalHpData[_0x48fa46]['count'] * petalHpData[_0x48fa46]['hp'] + _0x50a106['render']['hp'] / _0x50a106['maxHp']) / (petalHpData[_0x48fa46]['count'] + 0x1), petalHpData[_0x48fa46]['count']++);
                    }
                    _0x50a106['updateTimer']();
                }
            }
        }
        ctx['globalAlpha'] = 0x1;
        toRender({
            'x': this['headX'],
            'y': this['headY'],
            'radius': this['radius']
        }, window['camera']) === !![] && this['drawFlower'](this['render']['headX'], this['render']['headY'], this['radius'], this['character']);
        if (!(window['renderSquadPetals'] !== !![] && this['id'] !== window['selfId'])) {
            if (this['lightnings']) {
                if (this['lightnings']['length'] > 0x0) {
                    this['lightnings'] = this['lightnings']['filter'](_0x395a07 => time < _0x395a07['time'] + 0x258);
                    let _0x5eaf9a = null;
                    for (let _0x3728a9 of this['lightnings']) {
                        _0x3728a9['type'] !== _0x5eaf9a && (ctx['strokeStyle'] = [
                            '#97f0ea',
                            '#f0ee97',
                            '#00fca4',
                            '#a82d2d'
                        ][_0x3728a9['type']], _0x5eaf9a = _0x3728a9['type']);
                        _0x3728a9['rarity'] >= 0xd ? ctx['lineWidth'] = 0x9 * (0x2 - (time - _0x3728a9['time']) / 0x2bc) : ctx['lineWidth'] = 0x5 * (0x2 - (time - _0x3728a9['time']) / 0x2bc);
                        ctx['globalAlpha'] = 0x1 - (time - _0x3728a9['time']) / 0x2bc, ctx['beginPath']();
                        for (let _0x146eed = 0x0; _0x146eed < _0x3728a9['renderData']['length']; _0x146eed++) {
                            ctx['lineTo'](_0x3728a9['renderData'][_0x146eed]['x'], _0x3728a9['renderData'][_0x146eed]['y']);
                        }
                        ctx['stroke'](), _0x3728a9['rarity'] >= 0xd && (ctx['lineWidth'] = 0x12 * (0x2 - (time - _0x3728a9['time']) / 0x2bc), ctx['stroke']()), ctx['closePath']();
                    }
                    ctx['globalAlpha'] = 0x1;
                }
            }
        }
        if (!(window['renderSquadPetals'] !== !![] && this['id'] !== window['selfId'])) {
            if (this['blasts']) {
                if (this['blasts']['length'] > 0x0) {
                    this['blasts'] = this['blasts']['filter'](_0x32a310 => time < _0x32a310['time'] + 0x258);
                    for (let _0x4ed675 of this['blasts']) {
                        if (_0x4ed675['type'] == 0x0)
                            ctx['fillStyle'] = '#581e75', ctx['globalAlpha'] = 0.115385 - (time - _0x4ed675['time']) / 0x1450;
                        else
                            _0x4ed675['type'] == 0x1 && (ctx['fillStyle'] = '#e68612', ctx['globalAlpha'] = 0.0555555 - (time - _0x4ed675['time']) / 0x2a30);
                        ctx['beginPath'](), ctx['arc'](_0x4ed675['x'], _0x4ed675['y'], _0x4ed675['radius'] + this['radius'], 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath']();
                    }
                    ctx['globalAlpha'] = 0x1;
                }
            }
        }
        if (this['thunderstruck'] && time < this['thunderstruck']) {
            const _0x5c4bf8 = this['thunderstruck'] - time, _0x4949b1 = Math['min'](0x1, _0x5c4bf8 / 0x7d0);
            ctx['save'](), ctx['translate'](this['render']['headX'], this['render']['headY']), ctx['strokeStyle'] = 'rgba(100,\x20200,\x20255,\x20' + _0x4949b1 * 0.8 + ')', ctx['lineWidth'] = 0x2, ctx['shadowColor'] = '#00ffff', ctx['shadowBlur'] = 0xa;
            const _0x25bfdb = 0x5;
            for (let _0x1035d6 = 0x0; _0x1035d6 < _0x25bfdb; _0x1035d6++) {
                const _0x10ac41 = (time / 0xc8 + _0x1035d6 * (Math['PI'] * 0x2 / _0x25bfdb)) % (Math['PI'] * 0x2), _0x300303 = this['render']['radius'] * 1.3, _0x48c6aa = this['render']['radius'] * 1.8, _0x8a59c9 = Math['PI'] / 0x3;
                ctx['beginPath']();
                for (let _0x25bba5 = 0x0; _0x25bba5 <= 0xa; _0x25bba5++) {
                    const _0x2ce436 = _0x25bba5 / 0xa, _0x5887ef = _0x300303 + (_0x48c6aa - _0x300303) * Math['random'](), _0x542800 = _0x10ac41 + (_0x2ce436 - 0.5) * _0x8a59c9 + (Math['random']() - 0.5) * 0.3, _0x164aa6 = Math['cos'](_0x542800) * _0x5887ef, _0x5b8ac1 = Math['sin'](_0x542800) * _0x5887ef;
                    if (_0x25bba5 === 0x0)
                        ctx['moveTo'](_0x164aa6, _0x5b8ac1);
                    else
                        ctx['lineTo'](_0x164aa6, _0x5b8ac1);
                }
                ctx['stroke']();
            }
            if (Math['random']() < 0.3) {
                const _0x5589fc = Math['random']() * Math['PI'] * 0x2, _0x1bfb7c = this['render']['radius'] * (0.5 + Math['random']() * 0.5);
                ctx['strokeStyle'] = 'rgba(200,\x20220,\x20255,\x20' + _0x4949b1 + ')', ctx['lineWidth'] = 0x1, ctx['beginPath'](), ctx['moveTo'](Math['cos'](_0x5589fc) * this['render']['radius'], Math['sin'](_0x5589fc) * this['render']['radius']), ctx['lineTo'](Math['cos'](_0x5589fc) * (this['render']['radius'] + _0x1bfb7c), Math['sin'](_0x5589fc) * (this['render']['radius'] + _0x1bfb7c)), ctx['stroke']();
            }
            ctx['restore']();
        }
        if (window['Perf'])
            window['Perf']['end']('Flower.draw');
    }
    ['drawFlower'](_0x13bc3d, _0x440a7e, _0x2f8657, _0x34897c = 'flower') {
        if (this['dead'])
            return;
        if (this['dev']) {
            _0x34897c === 'Tanksmith' ? (ctx['fillStyle'] = blendColor('#790000', '#FF0000', Math['max'](0x0, 0x1 - this['ticksSinceLastDamaged'] / 0xa6)), ctx['strokeStyle'] = blendColor('#550000', '#FF0000', Math['max'](0x0, 0x1 - this['ticksSinceLastDamaged'] / 0xa6)), ctx['lineWidth'] = 0x4) : (ctx['fillStyle'] = blendColor('#ffe763', '#FF0000', Math['max'](0x0, 0x1 - this['ticksSinceLastDamaged'] / 0xa6)), ctx['strokeStyle'] = blendColor('#cebb50', '#FF0000', Math['max'](0x0, 0x1 - this['ticksSinceLastDamaged'] / 0xa6)), ctx['lineWidth'] = _0x2f8657 / 0x8);
            ctx['fillStyle'] = blendColor(ctx['fillStyle'], '#ce76da', Math['max'](0x0, this['render']['isPoisoned'])), ctx['strokeStyle'] = blendColor(ctx['strokeStyle'], '#ab63b3', Math['max'](0x0, this['render']['isPoisoned'])), ctx['fillStyle'] = blendColor(ctx['fillStyle'], '#ce76da', Math['max'](0x0, this['render']['isPoisoned'])), ctx['strokeStyle'] = blendColor(ctx['strokeStyle'], '#ab63b3', Math['max'](0x0, this['render']['isPoisoned']));
            this['render']['healingReduction'] < 0.999 && (ctx['fillStyle'] = blendColor(ctx['fillStyle'], '#ffffff', Math['max'](0x0, 0x1 - this['render']['healingReduction'])), ctx['strokeStyle'] = blendColor(ctx['strokeStyle'], '#ffffff', Math['max'](0x0, 0x1 - this['render']['healingReduction'])));
            if (this['undead'])
                ctx['fillStyle'] = '#222222', ctx['strokeStyle'] = '#000000';
            else
                this['rage'] && (ctx['fillStyle'] = '#9900ff', ctx['strokeStyle'] = '#6b00b3');
            ctx['beginPath'](), ctx['lineTo'](_0x13bc3d + _0x2f8657 * 1.03, _0x440a7e + _0x2f8657 * -0.02), ctx['quadraticCurveTo'](_0x13bc3d + _0x2f8657 * 0.78, _0x440a7e + _0x2f8657 * 1.06, _0x13bc3d + _0x2f8657 * 0.27, _0x440a7e + _0x2f8657 * 1.14), ctx['quadraticCurveTo'](_0x13bc3d + _0x2f8657 * -0.8, _0x440a7e + _0x2f8657 * 0.75, _0x13bc3d + _0x2f8657 * -0.94, _0x440a7e + _0x2f8657 * 0.36), ctx['quadraticCurveTo'](_0x13bc3d + _0x2f8657 * -1.18, _0x440a7e + _0x2f8657 * -0.29, _0x13bc3d + _0x2f8657 * -0.83, _0x440a7e + _0x2f8657 * -0.95), ctx['quadraticCurveTo'](_0x13bc3d + _0x2f8657 * -0.45, _0x440a7e + _0x2f8657 * -1.3, _0x13bc3d + _0x2f8657 * -0.06, _0x440a7e + _0x2f8657 * -1.06), ctx['quadraticCurveTo'](_0x13bc3d + _0x2f8657 * 0.85, _0x440a7e + _0x2f8657 * -1.04, _0x13bc3d + _0x2f8657 * 1.03, _0x440a7e + _0x2f8657 * -0.02), ctx['fill'](), ctx['stroke'](), ctx['closePath']();
            if (_0x34897c === 'Tanksmith') {
                ctx['translate'](_0x13bc3d, _0x440a7e), ctx['rotate'](this['render']['angle']), ctx['lineWidth'] = 0x5, ctx['fillStyle'] = blendColor('#bfbfbf', '#FF0000', Math['max'](0x0, 0x1 - this['ticksSinceLastDamaged'] / 0xa6)), ctx['strokeStyle'] = blendColor('#868686', '#FF0000', Math['max'](0x0, 0x1 - this['ticksSinceLastDamaged'] / 0xa6));
                for (let _0x42c51e = 0x0; _0x42c51e < 0x8; _0x42c51e++) {
                    ctx['beginPath'](), ctx['roundRect'](0x0, -_0x2f8657 * 0.23, _0x2f8657 * 1.3, _0x2f8657 * 0.23 * 0x2, 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](Math['PI'] * 0x2 / 0x8);
                }
                ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x2f8657 / 0x2, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](-this['render']['angle']), ctx['translate'](-_0x13bc3d, -_0x440a7e);
                return;
            }
            ctx['fillStyle'] = '#212219', ctx['beginPath'](), ctx['ellipse'](_0x13bc3d + _0x2f8657 / 2.5 + _0x2f8657 * 0.05, _0x440a7e + _0x2f8657 * 0x5 / 13.5, _0x2f8657 * 0x3 / 23.5 * 1.1, _0x2f8657 * 5.85 / 23.5 * 1.1, 0x0, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['ellipse'](_0x13bc3d - _0x2f8657 / 2.5, _0x440a7e - _0x2f8657 * 0x5 / 23.5 + _0x2f8657 * -0.15, _0x2f8657 * 0x3 / 23.5 * 1.1, _0x2f8657 * 5.85 / 23.5 * 1.1, 0x0, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['strokeStyle'] = ctx['fillStyle'], ctx['lineWidth'] = _0x2f8657 / 0xf, ctx['lineCap'] = 'round';
            let _0x933f60;
            if (this['attacking'])
                _0x933f60 = 0x1;
            else
                this['defending'] ? _0x933f60 = 0x1 : _0x933f60 = 0x0;
            this['render']['isPoisoned'] && (_0x933f60 = this['render']['isPoisoned']);
            ctx['beginPath'](), ctx['moveTo'](_0x13bc3d - _0x2f8657 * 0.3 + _0x2f8657 / 0x4, _0x440a7e + _0x2f8657 * 0.025 + _0x2f8657 * 9.5 / 23.5), ctx['quadraticCurveTo'](_0x13bc3d - _0x2f8657 * 0.4, _0x440a7e - _0x2f8657 * 0.1 + 1.07 * _0x2f8657 * (5.5 + 9.5 * (0x1 - _0x933f60)) / 23.5 * 61.1 / 0x46, _0x13bc3d - _0x2f8657 * 0.275 - _0x2f8657 / 0x4, _0x440a7e - _0x2f8657 * 0.25 + _0x2f8657 * 9.5 / 23.5), ctx['stroke'](), ctx['save'](), ctx['beginPath'](), ctx['ellipse'](_0x13bc3d + _0x2f8657 / 2.5 + _0x2f8657 * 0.05, _0x440a7e + _0x2f8657 * 0x5 / 13.5, _0x2f8657 * 2.5 / 23.5 * 1.1, _0x2f8657 * 0x5 / 23.5 * 1.1, 0x0, 0x0, Math['PI'] * 0x2), ctx['clip']();
            const _0x22d55c = {
                'x': Math['cos'](this['render']['angle']) * _0x2f8657 * 0x2 / 0x17,
                'y': Math['sin'](this['render']['angle']) * _0x2f8657 * 3.5 / 0x17
            };
            ctx['fillStyle'] = '#eeeeee', ctx['beginPath'](), ctx['ellipse'](_0x13bc3d + _0x2f8657 / 2.5 + _0x22d55c['x'] + _0x2f8657 * 0.05, _0x440a7e + _0x2f8657 * 0x5 / 13.5 + _0x22d55c['y'], _0x2f8657 * 2.92 / 23.5 * 1.1, _0x2f8657 * 2.92 / 23.5 * 1.1, 0x0, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['restore'](), ctx['save'](), ctx['beginPath'](), ctx['ellipse'](_0x13bc3d - _0x2f8657 / 2.5, _0x440a7e - _0x2f8657 * 0x5 / 23.5 + _0x2f8657 * -0.15, +_0x2f8657 * 2.5 / 23.5 * 1.1, _0x2f8657 * 0x5 / 23.5 * 1.1, 0x0, 0x0, Math['PI'] * 0x2), ctx['clip'](), ctx['fillStyle'] = '#eeeeee', ctx['beginPath'](), ctx['ellipse'](_0x13bc3d - _0x2f8657 / 2.5 - _0x22d55c['x'], _0x440a7e - _0x2f8657 * 0x5 / 23.5 - _0x22d55c['y'] + _0x2f8657 * -0.15, _0x2f8657 * 0x3 / 23.5 * 1.1, _0x2f8657 * 0x3 / 23.5 * 1.1, 0x0, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['restore']();
        } else {
            _0x34897c === 'Tanksmith' ? (ctx['fillStyle'] = blendColor('#790000', '#FF0000', Math['max'](0x0, 0x1 - this['ticksSinceLastDamaged'] / 0xa6)), ctx['strokeStyle'] = blendColor('#550000', '#FF0000', Math['max'](0x0, 0x1 - this['ticksSinceLastDamaged'] / 0xa6)), ctx['lineWidth'] = 0x4) : (ctx['fillStyle'] = blendColor('#ffe763', '#FF0000', Math['max'](0x0, 0x1 - this['ticksSinceLastDamaged'] / 0xa6)), ctx['strokeStyle'] = blendColor('#cebb50', '#FF0000', Math['max'](0x0, 0x1 - this['ticksSinceLastDamaged'] / 0xa6)), ctx['lineWidth'] = _0x2f8657 / 0x8);
            ctx['fillStyle'] = blendColor(ctx['fillStyle'], '#ce76da', Math['max'](0x0, this['render']['isPoisoned'])), ctx['strokeStyle'] = blendColor(ctx['strokeStyle'], '#ab63b3', Math['max'](0x0, this['render']['isPoisoned']));
            this['render']['healingReduction'] < 0.999 && (ctx['fillStyle'] = blendColor(ctx['fillStyle'], '#ffffff', Math['max'](0x0, 0x1 - this['render']['healingReduction'])), ctx['strokeStyle'] = blendColor(ctx['strokeStyle'], '#ffffff', Math['max'](0x0, 0x1 - this['render']['healingReduction'])));
            if (this['undead'])
                ctx['fillStyle'] = '#222222', ctx['strokeStyle'] = '#000000';
            else
                this['rage'] && (ctx['fillStyle'] = '#9900ff', ctx['strokeStyle'] = '#6b00b3');
            ctx['beginPath'](), ctx['arc'](_0x13bc3d, _0x440a7e, _0x2f8657, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath']();
            if (_0x34897c === 'Tanksmith') {
                ctx['translate'](_0x13bc3d, _0x440a7e), ctx['rotate'](this['render']['angle']), ctx['lineWidth'] = 0x5, ctx['fillStyle'] = blendColor('#bfbfbf', '#FF0000', Math['max'](0x0, 0x1 - this['ticksSinceLastDamaged'] / 0xa6)), ctx['strokeStyle'] = blendColor('#868686', '#FF0000', Math['max'](0x0, 0x1 - this['ticksSinceLastDamaged'] / 0xa6));
                for (let _0x5ebfa2 = 0x0; _0x5ebfa2 < 0x8; _0x5ebfa2++) {
                    ctx['beginPath'](), ctx['roundRect'](0x0, -_0x2f8657 * 0.23, _0x2f8657 * 1.3, _0x2f8657 * 0.23 * 0x2, 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](Math['PI'] * 0x2 / 0x8);
                }
                ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x2f8657 / 0x2, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](-this['render']['angle']), ctx['translate'](-_0x13bc3d, -_0x440a7e);
                return;
            }
            ctx['fillStyle'] = '#212219', ctx['beginPath'](), ctx['ellipse'](_0x13bc3d - _0x2f8657 / 3.5, _0x440a7e - _0x2f8657 * 0x5 / 23.5, _0x2f8657 * 0x3 / 23.5, _0x2f8657 * 5.85 / 23.5, 0x0, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['ellipse'](_0x13bc3d + _0x2f8657 / 3.5, _0x440a7e - _0x2f8657 * 0x5 / 23.5, _0x2f8657 * 0x3 / 23.5, _0x2f8657 * 5.85 / 23.5, 0x0, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['strokeStyle'] = ctx['fillStyle'], ctx['lineWidth'] = _0x2f8657 / 0xf, ctx['lineCap'] = 'round';
            let _0x32cfce;
            if (this['attacking'])
                _0x32cfce = 0x1;
            else
                this['defending'] ? _0x32cfce = 0x1 : _0x32cfce = 0x0;
            this['render']['isPoisoned'] > 0.001 && (_0x32cfce = Math['max'](this['render']['isPoisoned'], _0x32cfce));
            ctx['beginPath'](), ctx['moveTo'](_0x13bc3d + _0x2f8657 / 0x4, _0x440a7e + _0x2f8657 * 9.5 / 23.5), ctx['quadraticCurveTo'](_0x13bc3d, _0x440a7e + 1.07 * _0x2f8657 * (5.5 + 9.5 * (0x1 - _0x32cfce)) / 23.5 * 61.1 / 0x46, _0x13bc3d - _0x2f8657 / 0x4, _0x440a7e + _0x2f8657 * 9.5 / 23.5), ctx['stroke'](), ctx['save'](), ctx['beginPath'](), ctx['ellipse'](_0x13bc3d + _0x2f8657 / 3.5, _0x440a7e - _0x2f8657 * 0x5 / 23.5, _0x2f8657 * 2.5 / 23.5, _0x2f8657 * 0x5 / 23.5, 0x0, 0x0, Math['PI'] * 0x2), ctx['clip']();
            const _0x107c99 = {
                'x': Math['cos'](this['render']['angle']) * _0x2f8657 * 0x2 / 0x17,
                'y': Math['sin'](this['render']['angle']) * _0x2f8657 * 3.5 / 0x17
            };
            ctx['fillStyle'] = '#eeeeee', ctx['beginPath'](), ctx['ellipse'](_0x13bc3d + _0x2f8657 / 3.5 + _0x107c99['x'], _0x440a7e - _0x2f8657 * 0x5 / 23.5 + _0x107c99['y'], _0x2f8657 * 2.92 / 23.5, _0x2f8657 * 2.92 / 23.5, 0x0, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['restore'](), ctx['save'](), ctx['beginPath'](), ctx['ellipse'](_0x13bc3d - _0x2f8657 / 3.5, _0x440a7e - _0x2f8657 * 0x5 / 23.5, _0x2f8657 * 2.5 / 23.5, _0x2f8657 * 0x5 / 23.5, 0x0, 0x0, Math['PI'] * 0x2), ctx['clip'](), ctx['fillStyle'] = '#eeeeee', ctx['beginPath'](), ctx['ellipse'](_0x13bc3d - _0x2f8657 / 3.5 + _0x107c99['x'], _0x440a7e - _0x2f8657 * 0x5 / 23.5 + _0x107c99['y'], _0x2f8657 * 0x3 / 23.5, _0x2f8657 * 0x3 / 23.5, 0x0, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['restore']();
            let _0x297704;
            this['attacking'] || this['defending'] ? _0x297704 = (neutralPetalDistance * 1.91 - 0x7 - neutralPetalDistance * 1.8) / 0x23 * _0x2f8657 / 0x19 : _0x297704 = (neutralPetalDistance - 0x7 - neutralPetalDistance * 1.8) / 0x23 * _0x2f8657 / 0x19;
            ctx['fillStyle'] = blendColor('#ffe763', '#FF0000', Math['max'](0x0, 0x1 - this['ticksSinceLastDamaged'] / 0xa6)), ctx['fillStyle'] = blendColor(ctx['fillStyle'], '#ce76da', Math['max'](0x0, this['render']['isPoisoned']));
            if (this['undead'])
                ctx['fillStyle'] = '#222222', ctx['strokeStyle'] = '#000000';
            else
                this['rage'] && (ctx['fillStyle'] = '#9900ff', ctx['strokeStyle'] = '#6b00b3');
            ctx['beginPath'](), ctx['moveTo'](_0x13bc3d - _0x2f8657 / 3.5 * 0x2, _0x440a7e - _0x2f8657 * 0xe / 23.5 + _0x297704), ctx['lineTo'](_0x13bc3d + _0x2f8657 / 3.5 * 0x2, _0x440a7e - _0x2f8657 * 0xe / 23.5 + _0x297704), ctx['lineTo'](_0x13bc3d, _0x440a7e - _0x2f8657 * 0x5 / 23.5 + _0x297704), ctx['fill'](), ctx['closePath']();
        }
    }
    static ['drawDeadFlower'](_0x308b0c, _0x30627e, _0x5535a8) {
        if (this['dev']) {
            ctx['fillStyle'] = '#ffe763', ctx['strokeStyle'] = '#cebb50', ctx['lineWidth'] = _0x5535a8 / 0x8, ctx['beginPath'](), ctx['lineTo'](_0x308b0c + _0x5535a8 * 1.03, _0x30627e + _0x5535a8 * -0.02), ctx['quadraticCurveTo'](_0x308b0c + _0x5535a8 * 0.78, _0x30627e + _0x5535a8 * 1.06, _0x308b0c + _0x5535a8 * 0.27, _0x30627e + _0x5535a8 * 1.14), ctx['quadraticCurveTo'](_0x308b0c + _0x5535a8 * -0.8, _0x30627e + _0x5535a8 * 0.75, _0x308b0c + _0x5535a8 * -0.94, _0x30627e + _0x5535a8 * 0.36), ctx['quadraticCurveTo'](_0x308b0c + _0x5535a8 * -1.18, _0x30627e + _0x5535a8 * -0.29, _0x308b0c + _0x5535a8 * -0.83, _0x30627e + _0x5535a8 * -0.95), ctx['quadraticCurveTo'](_0x308b0c + _0x5535a8 * -0.45, _0x30627e + _0x5535a8 * -1.3, _0x308b0c + _0x5535a8 * -0.06, _0x30627e + _0x5535a8 * -1.06), ctx['quadraticCurveTo'](_0x308b0c + _0x5535a8 * 0.85, _0x30627e + _0x5535a8 * -1.04, _0x308b0c + _0x5535a8 * 1.03, _0x30627e + _0x5535a8 * -0.02), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['fillStyle'] = '#212219', ctx['strokeStyle'] = ctx['fillStyle'], ctx['lineWidth'] = _0x5535a8 / 0xf, ctx['lineCap'] = 'round';
            let _0x11dcd6 = 0x1;
            ctx['beginPath'](), ctx['moveTo'](_0x308b0c - _0x5535a8 * 0.3 + _0x5535a8 / 0x4, _0x30627e + _0x5535a8 * 0.025 + _0x5535a8 * 9.5 / 23.5), ctx['quadraticCurveTo'](_0x308b0c - _0x5535a8 * 0.4, _0x30627e - _0x5535a8 * 0.1 + 1.07 * _0x5535a8 * (5.5 + 9.5 * (0x1 - _0x11dcd6)) / 23.5 * 61.1 / 0x46, _0x308b0c - _0x5535a8 * 0.275 - _0x5535a8 / 0x4, _0x30627e - _0x5535a8 * 0.25 + _0x5535a8 * 9.5 / 23.5), ctx['stroke'](), ctx['lineWidth'] = _0x5535a8 / 0x8, ctx['lineCap'] = 'round';
            let _0x3a70a1 = {
                'x': _0x308b0c + _0x5535a8 / 2.5 + _0x5535a8 * 0.05,
                'y': _0x30627e + _0x5535a8 * 0x5 / 13.5
            };
            ctx['beginPath'](), ctx['moveTo'](_0x3a70a1['x'] + _0x5535a8 * 0x4 / 23.5, _0x3a70a1['y'] + _0x5535a8 * 0x4 / 23.5), ctx['lineTo'](_0x3a70a1['x'] - _0x5535a8 * 0x4 / 23.5, _0x3a70a1['y'] - _0x5535a8 * 0x4 / 23.5), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['moveTo'](_0x3a70a1['x'] + _0x5535a8 * 0x4 / 23.5, _0x3a70a1['y'] - _0x5535a8 * 0x4 / 23.5), ctx['lineTo'](_0x3a70a1['x'] - _0x5535a8 * 0x4 / 23.5, _0x3a70a1['y'] + _0x5535a8 * 0x4 / 23.5), ctx['stroke'](), ctx['closePath'](), _0x3a70a1 = {
                'x': _0x308b0c - _0x5535a8 / 2.5,
                'y': _0x30627e - _0x5535a8 * 0x5 / 23.5 + _0x5535a8 * -0.15
            }, ctx['beginPath'](), ctx['moveTo'](_0x3a70a1['x'] + _0x5535a8 * 0x4 / 23.5, _0x3a70a1['y'] + _0x5535a8 * 0x4 / 23.5), ctx['lineTo'](_0x3a70a1['x'] - _0x5535a8 * 0x4 / 23.5, _0x3a70a1['y'] - _0x5535a8 * 0x4 / 23.5), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['moveTo'](_0x3a70a1['x'] + _0x5535a8 * 0x4 / 23.5, _0x3a70a1['y'] - _0x5535a8 * 0x4 / 23.5), ctx['lineTo'](_0x3a70a1['x'] - _0x5535a8 * 0x4 / 23.5, _0x3a70a1['y'] + _0x5535a8 * 0x4 / 23.5), ctx['stroke'](), ctx['closePath']();
        } else {
            ctx['fillStyle'] = '#ffe763', ctx['strokeStyle'] = '#cebb50', ctx['lineWidth'] = _0x5535a8 / 0x8, ctx['beginPath'](), ctx['arc'](_0x308b0c, _0x30627e, _0x5535a8, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['fillStyle'] = '#212219', ctx['strokeStyle'] = ctx['fillStyle'], ctx['lineWidth'] = _0x5535a8 / 0x8, ctx['lineCap'] = 'round';
            let _0x43c91e = {
                'x': _0x308b0c - _0x5535a8 / 3.5,
                'y': _0x30627e - _0x5535a8 * 0x5 / 23.5
            };
            ctx['beginPath'](), ctx['moveTo'](_0x43c91e['x'] + _0x5535a8 * 0x4 / 23.5, _0x43c91e['y'] + _0x5535a8 * 0x4 / 23.5), ctx['lineTo'](_0x43c91e['x'] - _0x5535a8 * 0x4 / 23.5, _0x43c91e['y'] - _0x5535a8 * 0x4 / 23.5), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['moveTo'](_0x43c91e['x'] + _0x5535a8 * 0x4 / 23.5, _0x43c91e['y'] - _0x5535a8 * 0x4 / 23.5), ctx['lineTo'](_0x43c91e['x'] - _0x5535a8 * 0x4 / 23.5, _0x43c91e['y'] + _0x5535a8 * 0x4 / 23.5), ctx['stroke'](), ctx['closePath'](), _0x43c91e = {
                'x': _0x308b0c + _0x5535a8 / 3.5,
                'y': _0x30627e - _0x5535a8 * 0x5 / 23.5
            }, ctx['beginPath'](), ctx['moveTo'](_0x43c91e['x'] + _0x5535a8 * 0x4 / 23.5, _0x43c91e['y'] + _0x5535a8 * 0x4 / 23.5), ctx['lineTo'](_0x43c91e['x'] - _0x5535a8 * 0x4 / 23.5, _0x43c91e['y'] - _0x5535a8 * 0x4 / 23.5), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['moveTo'](_0x43c91e['x'] + _0x5535a8 * 0x4 / 23.5, _0x43c91e['y'] - _0x5535a8 * 0x4 / 23.5), ctx['lineTo'](_0x43c91e['x'] - _0x5535a8 * 0x4 / 23.5, _0x43c91e['y'] + _0x5535a8 * 0x4 / 23.5), ctx['stroke'](), ctx['closePath'](), ctx['strokeStyle'] = ctx['fillStyle'], ctx['lineWidth'] = _0x5535a8 / 0xf, ctx['lineCap'] = 'round';
            let _0x151c1f = 0x1;
            ctx['beginPath'](), ctx['moveTo'](_0x308b0c + _0x5535a8 / 0x4, _0x30627e + _0x5535a8 * 9.5 / 23.5), ctx['quadraticCurveTo'](_0x308b0c, _0x30627e + 1.07 * _0x5535a8 * (5.5 + 9.5 * (0x1 - _0x151c1f)) / 23.5 * 61.1 / 0x46, _0x308b0c - _0x5535a8 / 0x4, _0x30627e + _0x5535a8 * 9.5 / 23.5), ctx['stroke']();
        }
    }
    ['pack']() {
        return {
            'movementType': this['movementType'],
            'input': this['input']
        };
    }
}
function interpolate(_0x12376f, _0x28358f, _0x208fa8) {
    return _0x208fa8 = Math['max'](0x0, Math['min'](0x1, _0x208fa8)), _0x12376f + (_0x28358f - _0x12376f) * _0x208fa8;
}
function shortAngleDist(_0x1629e6, _0x5eee82) {
    const _0x1251ca = Math['PI'] * 0x2, _0x1f5d0b = (_0x5eee82 - _0x1629e6) % _0x1251ca;
    return 0x2 * _0x1f5d0b % _0x1251ca - _0x1f5d0b;
}
function interpolateDirection(_0x1c749c, _0x29916e, _0x2713cb) {
    return _0x1c749c + shortAngleDist(_0x1c749c, _0x29916e) * _0x2713cb;
}
function toRender(_0x49ad57, _0xbc4da8 = {
    'x': 0x0,
    'y': 0x0
}) {
    if (_0x49ad57['x'] === 'pass' || _0xbc4da8['disableCulling'] === !![])
        return !![];
    if (_0x49ad57['x'] - _0x49ad57['radius'] > _0xbc4da8['x'] + canvas['w'] / 0x2 / renderFov || _0x49ad57['x'] + _0x49ad57['radius'] < _0xbc4da8['x'] - canvas['w'] / 0x2 / renderFov)
        return ![];
    if (_0x49ad57['y'] - _0x49ad57['radius'] > _0xbc4da8['y'] + canvas['h'] / 0x2 / renderFov || _0x49ad57['y'] + _0x49ad57['radius'] < _0xbc4da8['y'] - canvas['h'] / 0x2 / renderFov)
        return ![];
    return !![];
}