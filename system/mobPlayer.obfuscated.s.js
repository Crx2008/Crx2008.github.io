class MobPlayer extends Flower {
    constructor(_0x184019, _0x57c25d) {
        super(_0x184019), this['isMob'] = !![], this['mobType'] = _0x57c25d, this['skills'] = [], this['skillCooldowns'] = {}, this['mobState'] = null, this['petals'] = [], this['petalSlots'] = 0x0, !this['render'] && (this['render'] = {}), this['render']['time'] = 0x0, this['render']['lastX'] = 0x0, this['render']['lastY'] = 0x0;
    }
    ['setSkills'](_0x4d1135) {
        this['skills'] = _0x4d1135, _0x4d1135['forEach'](_0x389f59 => {
            this['skillCooldowns'][_0x389f59['id']] = 0x0;
        });
    }
    ['updateSkillCooldown'](_0x3e5f9b, _0x4629d7) {
        this['skillCooldowns'][_0x3e5f9b] = _0x4629d7;
    }
    ['getSkillCooldownPercent'](_0x5ad5db) {
        const _0x5da29c = this['skillCooldowns'][_0x5ad5db];
        if (!_0x5da29c)
            return 0x0;
        const _0x44ca7a = Date['now']();
        if (_0x44ca7a >= _0x5da29c)
            return 0x0;
        const _0x3d14dc = this['skills']['find'](_0x156838 => _0x156838['id'] === _0x5ad5db);
        if (!_0x3d14dc)
            return 0x0;
        const _0x1e4e6c = _0x3d14dc['cooldown'] * 0x3e8, _0x35616c = _0x5da29c - _0x44ca7a;
        return _0x35616c / _0x1e4e6c;
    }
    ['draw']() {
        if (window['Perf'])
            window['Perf']['mark']('MobPlayer.draw');
        this['id'] !== window['selfId'] && this['updateInterpolate']();
        this['updatePetsAndProjectiles']();
        for (let _0x2dd11d = 0x0; _0x2dd11d < this['deadProjectiles']['length']; _0x2dd11d++) {
            if (!this['deadProjectiles'][_0x2dd11d])
                continue;
            toRender({
                'x': this['deadProjectiles'][_0x2dd11d]['x'],
                'y': this['deadProjectiles'][_0x2dd11d]['y'],
                'radius': this['deadProjectiles'][_0x2dd11d]['radius']
            }, window['camera']) === !![] && this['deadProjectiles'][_0x2dd11d]['draw'](), this['deadProjectiles'][_0x2dd11d]['updateTimer']();
        }
        this['ticksSinceLastDamaged'] += dt;
        this['ticksSinceLastDamaged'] > 0x29a && (this['beforeStreakHp'] = this['hp']);
        renderHpBar({
            'x': this['render']['headX'],
            'y': this['render']['headY'] - this['render']['radius'] / 0x3,
            'radius': this['render']['radius'],
            'hp': this['render']['hp'],
            'maxHp': this['maxHp'],
            'shield': this['render']['shield'] || 0x0,
            'beforeStreakHp': this['render']['beforeStreakHp'],
            'flowerName': this['name'],
            'flowerUsername': this['username']
        }, this);
        if (typeof enemyRenderMap !== 'undefined' && enemyRenderMap[this['mobType']]) {
            ctx['save'](), this['render']['x'] = this['render']['headX'], this['render']['y'] = this['render']['headY'], ctx['translate'](this['render']['x'], this['render']['y']);
            const _0x539cd0 = {
                'type': this['mobType'],
                'rarity': 0x0,
                'x': this['x'],
                'y': this['y'],
                'radius': this['render']['radius'],
                'angle': this['render']['angle'],
                'hp': this['render']['hp'],
                'maxHp': this['maxHp'],
                'render': this['render'],
                'ticksSinceLastDamaged': this['ticksSinceLastDamaged'],
                'lastTicksSinceLastDamaged': this['lastTicksSinceLastDamaged'] || 0x0
            };
            enemyRenderMap[this['mobType']](_0x539cd0), ctx['restore']();
        } else
            ctx['save'](), ctx['translate'](this['render']['headX'], this['render']['headY']), ctx['beginPath'](), ctx['arc'](0x0, 0x0, this['render']['radius'], 0x0, Math['PI'] * 0x2), ctx['fillStyle'] = '#FFD700', ctx['fill'](), ctx['strokeStyle'] = '#FFA500', ctx['lineWidth'] = 0x3, ctx['stroke'](), ctx['restore']();
        if (window['Perf'])
            window['Perf']['end']('MobPlayer.draw');
    }
}