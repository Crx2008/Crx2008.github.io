const petalRotationNaturalRotate = {
        'Leaf': 0x1 / 0x3e8,
        'Cinderleaf': 0x1 / 0x1f4,
        'Rock': 0x1 / 0x3e8,
        'Dust': 0x1 / 0x64,
        'Ruby': 0x1 / 0x3e8,
        'Sapphire': 0x1 / 0x3e8,
        'Emerald': 0x1 / 0x3e8,
        'Amulet\x20of\x20Divergence': 0x1 / 0x3e8,
        'Amulet\x20of\x20Grace': 0x1 / 0x3e8,
        'Amulet\x20of\x20Time': 0x1 / 0x3e8,
        'Rice': 0x1 / 0x3e8,
        'Ricemissile': 0x1 / 0x3e8,
        'Yucca': 0x1 / 0x3e8,
        'Clover': 0x1 / 0x3e8,
        'Horn': 0x1 / 0x1f4,
        'Blood\x20Horn': 0x1 / 0x1f4,
        'Dark\x20Spine': 0x1 / 0x1f4,
        'Shade': 0x1 / 0x1f4,
        'Radiance': 0x1 / 0x1f4,
        'Pincer': 0x1 / 0x3e8,
        'Yin\x20Yang': 0x1 / 0x1f4,
        'Corn': 0x1 / 0x7d0,
        'Bone': 0x1 / 0x3e8,
        'Token': 0x1 / 0x3e8,
        'Wing': 0x1 / 0x64,
        'Shiny\x20Wing': 0x1 / 0x64,
        'Honey': 0x1 / 0x3e8,
        'Neutron\x20Star': 0x1 / 0xc8,
        'Magnet': 0x1 / 0x3e8,
        'Stick': 0x1 / 0x3e8,
        'Salt': 0x1 / 0x3e8,
        'Powder': 0x1 / 0x64,
        'Toxin': 0x1 / 0xdc,
        'Neurotoxin': 0x1 / 0xdc,
        'Batrachotoxin': 0x1 / 0xdc,
        'Square': 0x1 / 0x3e8,
        'Pentagon': 0x1 / 0x3e8,
        'Orange': 0x1 / 0x3e8,
        'Mandible': 0x1 / 0x3e8,
        'Blood\x20Mandible': 0x1 / 0x3e8,
        'Third\x20Eye': 0x1 / 0x3e8,
        'Bloodshot\x20Eye': 0x1 / 0x3e8,
        'Bubble': 0x1 / 0x3e8,
        'Shiny\x20Bubble': 0x1 / 0x3e8,
        'Starfish': 0x1 / 0x3e8,
        'Brisingida': 0x1 / 0x7d0,
        'Claw': 0x1 / 0x3e8,
        'Lightning': 0x1 / 0x3e8,
        'Fangs': 0x1 / 0x3e8,
        'Jolt': 0x1 / 0x3e8,
        'Blood\x20Jolt': 0x1 / 0x1f4,
        'Jelly': 0x1 / 0x3e8,
        'Pearl': 0x1 / 0x3e8,
        'Sponge': 0x1 / 0x3e8,
        'Shell': 0x1 / 0x3e8,
        'Coral': 0x1 / 0x3e8,
        'Trident': 0x1 / 0x1f4,
        'Card': 0x1 / 0x3e8,
        'Waterlogged\x20Compass': 0x1 / 0x3e8,
        'Plank': 0x1 / 0x3e8,
        'Fig': 0x1 / 0x3e8,
        'Root': 0x1 / 0x3e8,
        'Coconut': 0x1 / 0x1f4
    }, petalRotationStickToParent = [
        'Spore',
        'Missile',
        'Dandelion',
        'Web',
        'Homing\x20Missile',
        'Fire\x20Missile',
        'Carrot',
        'Stalk'
    ], petalFaceCenter = {
        'Stinger': 0x0,
        'Blood\x20Stinger': 0x0,
        'Blade': 0x0,
        'Starfish': 0x0,
        'Brisingida': 0x0,
        'Spikes': Math['PI']
    }, CONSERVATIVE_PETALS = new Set([
        'Rose',
        'Blood\x20Rose',
        'Dahlia',
        'Shell',
        'Trident',
        'Sponge',
        'Egg',
        'Shiny\x20Egg',
        'Ant\x20Egg',
        'Jellyfish\x20Egg',
        'Neuroflare\x20Egg',
        'Bubble',
        'Stick',
        'Trinket\x20of\x20the\x20Hivemind',
        'Plank'
    ]), petalPackKeys = [];
class Petal {
    constructor(_0x5bdacf) {
        if (petalRenderMap[_0x5bdacf['type']] === undefined && typeof editorPetalShapesMap !== 'undefined' && editorPetalShapesMap[_0x5bdacf['type']] !== undefined)
            return new Petal({
                ..._0x5bdacf,
                'type': 'Custom',
                'customType': _0x5bdacf['type']
            });
        for (let _0x4d9e49 in _0x5bdacf) {
            this[_0x4d9e49] = _0x5bdacf[_0x4d9e49];
        }
        this['render'] = {}, this['render']['distance'] = this['distance'], this['render']['angle'] = this['angle'], this['selfAngle'] = this['angle'], this['render']['x'] = this['x'], this['render']['y'] = this['y'], this['render']['reload'] = this['reload'] !== undefined ? this['reload'] : this['maxReload'] || 0xbb8, this['render']['hp'] = this['hp'] !== undefined ? this['hp'] : this['maxHp'] || 0x64;
        if (this['dying'] === undefined)
            this['dying'] = ![];
        if (this['deadAnimationTimer'] === undefined)
            this['deadAnimationTimer'] = 0x270f;
        _0x5bdacf['dead'] === !![] && (this['firstDeadFlag'] = !![]);
        this['ticksSinceLastDamaged'] = 0x270f, this['insidePetalContainer'] = ![], this['isProjectile'] = ![];
        this['type'] === 'Blood\x20Corn' && (this['bloodCornGrowthStartTime'] = Date['now'](), this['bloodCornBaseRadius'] = this['radius']);
        if (window['isEditor'])
            this['time'] = 0x0;
    }
    ['update'](_0x192880, _0x28a808) {
        _0x192880['takeDamage'] === !![] && this['shotFlag'] !== !![] && (this['updateRenderDamage'](), this['render']['hp'] = _0x192880['hp']);
        for (let _0x5f2492 in _0x192880) {
            this[_0x5f2492] = _0x192880[_0x5f2492];
        }
        if (_0x192880['dead'] === !![]) {
            if (this['firstDeadFlag'] !== undefined) {
                delete this['firstDeadFlag'];
                return;
            }
            if (this['shotFlag'] === !![]) {
                delete this['shotFlag'], this['dead'] = !![], this['dying'] = ![], this['deadAnimationTimer'] = 0x270f, delete this['deadPosition'], this['ticksSinceLastDamaged'] = 0x270f;
                return;
            }
            if (_0x192880['dying'] === !![]) {
                this['dying'] = !![], this['deadAnimationTimer'] = 0x0;
                if (_0x192880['deadPosition'] !== undefined)
                    this['deadPosition'] = _0x192880['deadPosition'];
                else
                    this['deadPosition'] === undefined && (this['deadPosition'] = {
                        'x': this['x'],
                        'y': this['y']
                    });
            } else
                _0x192880['dying'] !== !![] && this['dying'] !== !![] && this['dead'] !== !![] && (this['dying'] = !![], this['deadAnimationTimer'] = 0x0, this['deadPosition'] === undefined && (this['deadPosition'] = {
                    'x': this['x'],
                    'y': this['y']
                }));
        } else {
            if (_0x192880['dead'] === ![]) {
                this['dead'] = ![], this['dying'] = ![], this['deadAnimationTimer'] = 0x270f, delete this['deadPosition'], this['selfAngle'] = this['render']['angle'], this['distance'] = 0x1, this['render']['distance'] = 0x1, this['dv'] = 0x0, this['targetRadius'] = this['radius'], this['radius'] = 0x1, this['render']['radius'] = 0x1;
                if (_0x28a808 && _0x28a808['render']) {
                    const _0x2af62c = this['stickParentRotation'] ? this['offset']['angle'] + this['render']['angle'] : this['offset']['angle'];
                    this['render']['x'] = _0x28a808['render']['x'] + Math['cos'](this['render']['angle']) * this['render']['distance'] + Math['cos'](_0x2af62c) * this['offset']['distance'], this['render']['y'] = _0x28a808['render']['y'] + Math['sin'](this['render']['angle']) * this['render']['distance'] + Math['sin'](_0x2af62c) * this['offset']['distance'];
                }
                this['type'] === 'Blood\x20Corn' && (this['bloodCornGrowthStartTime'] = Date['now'](), this['bloodCornBaseRadius'] = this['targetRadius']);
            }
        }
    }
    ['updateRenderDamage'](_0x1397c0) {
        this['ticksSinceLastDamaged'] = 0x0, this['lastTicksSinceLastDamaged'] = 0x0;
    }
    ['updateInterpolate'](_0x3d62cf) {
        if (this['miniPetalChildId'] !== undefined) {
            const _0x453067 = _0x3d62cf;
            let _0x47dc57 = ![];
            for (let _0xc38274 = 0x0; _0xc38274 < _0x3d62cf['petals']['length']; _0xc38274++) {
                if (_0x3d62cf['petals'][_0xc38274]['miniPetalParentId'] === this['miniPetalChildId']) {
                    _0x3d62cf = _0x3d62cf['petals'][_0xc38274], _0x47dc57 = !![];
                    break;
                }
            }
            if (_0x47dc57 === ![])
                return;
            _0x3d62cf['baseX'] = _0x3d62cf['x'], _0x3d62cf['baseY'] = _0x3d62cf['y'], _0x3d62cf['petalLag'] = _0x453067['petalLag'], _0x3d62cf['render']['baseX'] = _0x3d62cf['render']['x'], _0x3d62cf['render']['baseY'] = _0x3d62cf['render']['y'], _0x3d62cf['petalRotateSpeed'] = 0x0, _0x3d62cf['petalRotation'] = -_0x453067['petalRotation'];
        }
        this['type'] == 'Homing\x20MissileProjectile' && (this['lastPosition'] != undefined && (this['render']['selfAngle'] = Math['atan2'](this['render']['y'] - this['lastPosition']['y'], this['render']['x'] - this['lastPosition']['x'])), this['lastPosition'] = {
            'x': this['render']['x'],
            'y': this['render']['y']
        });
        if (this['isProjectile'] === !![] || this?.['stats']?.['code'] !== undefined && this['hasNormalPetalSimulate'] === undefined) {
            if (window['isEditor'] && this['deadPosition'] !== undefined)
                return;
            this['render']['x'] = interpolate(this['render']['x'], this['x'], 0.3 * dt / 16.66), this['render']['y'] = interpolate(this['render']['y'], this['y'], 0.3 * dt / 16.66), this['selfAngle'] = interpolateDirection(this['selfAngle'], this['render']['selfAngle'], 0.3 * dt / 16.66);
            return;
        }
        this['angle'] = _0x3d62cf['petalRotation'] + this['angleOffset'];
        let _0x55cf4c = this['offset']['angle'];
        this['serverDistance'] !== undefined && this['serverDistance'] !== null && (this['distance'] = this['distance'] + (this['serverDistance'] - this['distance']) * 0.5);
        this['dv'] = this['dv'] || 0x0;
        this['targetRadius'] !== undefined && this['radius'] < this['targetRadius'] && (this['radius'] = this['radius'] + (this['targetRadius'] - this['radius']) * 0.3, Math['abs'](this['targetRadius'] - this['radius']) < 0.1 && (this['radius'] = this['targetRadius'], delete this['targetRadius']));
        if (this['type'] === 'Blood\x20Corn' && this['bloodCornGrowthStartTime'] && this['bloodCornBaseRadius']) {
            const _0x11bb5f = (Date['now']() - this['bloodCornGrowthStartTime']) / 0x3e8, _0x1b9458 = Math['min'](_0x11bb5f, 0x3c), _0x148642 = _0x1b9458 / 0x3c, _0x57d7c5 = 0x1 + 0x2 * _0x148642;
            this['radius'] = this['bloodCornBaseRadius'] * _0x57d7c5;
        }
        this['x'] = _0x3d62cf['baseX'] + Math['cos'](this['angle']) * this['distance'] + Math['cos'](_0x55cf4c) * this['offset']['distance'], this['y'] = _0x3d62cf['baseY'] + Math['sin'](this['angle']) * this['distance'] + Math['sin'](_0x55cf4c) * this['offset']['distance'];
        if (this['type'] === 'Wing' || this['type'] === 'Shiny\x20Wing')
            this['render']['distance'] = this['distance'];
        else
            this['slowInterpolateDistance'] === !![] ? this['render']['distance'] = interpolate(this['render']['distance'], this['distance'], Math['max'](0.01, this['render']['distance'] / this['distance'] / 0xa) * dt / 16.66) : this['render']['distance'] = interpolate(this['render']['distance'], this['distance'], 0.64 * dt / 16.66);
        this['render']['angle'] = interpolateDirection(this['render']['angle'] - _0x3d62cf['petalLag'], this['angle'], Math['min'](0.8, Math['max'](0x5 * Math['abs'](_0x3d62cf['petalRotateSpeed']), 0.3) * dt / 16.66)) + _0x3d62cf['petalLag'], this['dead'] === ![] && this['deadPosition'] !== undefined && delete this['deadPosition'], this['deadPosition'] !== undefined ? (this['render']['x'] = interpolate(this['render']['x'], this['deadPosition']['x'], 0.5 * dt / 16.66), this['render']['y'] = interpolate(this['render']['y'], this['deadPosition']['y'], 0.5 * dt / 16.66)) : (this['render']['x'] = interpolate(this['render']['x'], _0x3d62cf['render']['baseX'] + Math['cos'](this['render']['angle']) * this['render']['distance'] + Math['cos'](_0x55cf4c) * this['offset']['distance'], 0.5 * dt / 16.66), this['render']['y'] = interpolate(this['render']['y'], _0x3d62cf['render']['baseY'] + Math['sin'](this['render']['angle']) * this['render']['distance'] + Math['sin'](_0x55cf4c) * this['offset']['distance'], 0.5 * dt / 16.66)), this['render']['reload'] = interpolate(this['render']['reload'], this['reload'], 0.13 * dt / 16.66), this['render']['hp'] = interpolate(this['render']['hp'], this['hp'], 0.13 * dt / 16.66), petalRotationNaturalRotate[this['type']] && (this['selfAngle'] += petalRotationNaturalRotate[this['type']] * dt), petalRotationStickToParent['includes'](this['type']) && (this['selfAngle'] = Math['atan2'](this['render']['y'] - _0x3d62cf['render']['y'], this['render']['x'] - _0x3d62cf['render']['x'])), Object['keys'](petalFaceCenter)['includes'](this['type']) && (this['selfAngle'] = petalFaceCenter[this['type']] + this['render']['angle'] + this['subStackedId'] / this['totalStackedId'] * Math['PI'] * 0x2), this['type'] === 'Bone' && this['rarity'] >= 0x10 && (this['selfAngle'] = this['render']['angle'] + this['offset']['angle']), this['type'] === 'Custom' && (this['selfAngle'] = Math['atan2'](this['render']['y'] - _0x3d62cf['render']['y'], this['render']['x'] - _0x3d62cf['render']['x'])), (this['type'] === 'Compass' || this['type'] === 'Dark\x20Compass' || this['type'] === 'Waterlogged\x20Compass') && (!this['lastCheckedTime'] && (this['lastCheckedTime'] = 0x0), time > this['lastCheckedTime'] + 0x7d0 && (this['selfAngle'] = Math['random']() * Math['PI'] * 0x2, this['lastCheckedTime'] = time));
    }
    ['draw'](_0xa4f947 = ![], _0x326cd0 = 0x1) {
        if (window['Perf'])
            window['Perf']['mark']('Petal.draw');
        this['lastTicksSinceLastDamaged'] = this['ticksSinceLastDamaged'], this['ticksSinceLastDamaged'] += dt;
        if (this['dying'] === !![]) {
            this['deadAnimationTimer'] += dt;
            if (this['deadAnimationTimer'] > 0xa6) {
                this['dying'] = ![], delete this['deadPosition'];
                return;
            }
        } else {
            if (this['dead'] === !![])
                return;
        }
        ctx['save'](), ctx['translate'](this['render']['x'], this['render']['y']);
        if (this['dying'] === !![]) {
            const _0x4e4a9d = Math['cbrt'](Math['log10'](Math['max'](0x1, this['deadAnimationTimer'] / 16.6))), _0x20739d = 0x1 + (isFinite(_0x4e4a9d) ? _0x4e4a9d : 0x0) * 0.6;
            ctx['globalAlpha'] = Math['max'](0x0, 0x1 - this['deadAnimationTimer'] / 0xa6), this['type'] === 'Custom' && (window['alphaMult'] = ctx['globalAlpha']), isFinite(_0x20739d) && _0x20739d > 0x0 && ctx['scale'](_0x20739d, _0x20739d);
        } else
            this['scaleMult'] !== undefined && isFinite(this['scaleMult']) && this['scaleMult'] > 0x0 && ctx['scale'](this['scaleMult'], this['scaleMult']);
        ctx['rotate'](this['selfAngle']), this['isFrenzy'] = _0xa4f947;
        if (petalRenderMap[this['type']])
            petalRenderMap[this['type']](this);
        delete this['isFrenzy'], ctx['rotate'](-this['selfAngle']);
        if (_0xa4f947) {
            ctx['save']();
            const _0x5d92db = 0.3 + _0x326cd0 * 0.8, _0x577dc1 = 0xff, _0x2b4924 = Math['floor'](0x96 - _0x326cd0 * 0x64), _0x1b2600 = Math['floor'](0x64 - _0x326cd0 * 0x64), _0x1204cb = 0.3 + _0x326cd0 * 0.2;
            ctx['beginPath'](), ctx['arc'](0x0, 0x0, this['radius'] * _0x5d92db, 0x0, Math['PI'] * 0x2), ctx['fillStyle'] = 'rgba(' + _0x577dc1 + ',\x20' + _0x2b4924 + ',\x20' + _0x1b2600 + ',\x20' + _0x1204cb + ')', ctx['shadowColor'] = '#FF3300', ctx['shadowBlur'] = 0x14, ctx['fill'](), ctx['restore']();
        }
        ctx['restore']();
        window['alphaMult'] !== undefined && delete window['alphaMult'];
        if (window['Perf'])
            window['Perf']['end']('Petal.draw');
    }
    ['updateTimer']() {
        this['dying'] === !![] && (this['deadAnimationTimer'] += dt);
    }
}
function blendAmount(_0x34b5fd) {
    return Math['max'](0x0, 0x1 - _0x34b5fd['ticksSinceLastDamaged'] / 166.5);
}
function checkForFirstFrame(_0xec48bb) {
    return _0xec48bb['lastTicksSinceLastDamaged'] < 0xd && !damageFlash;
}
const petalRenderMap = {
    'Basic': _0x20bd7d => {
        ctx['lineWidth'] = 0x3, ctx['beginPath'](), ctx['fillStyle'] = blendColor('#ffffff', '#FF0000', blendAmount(_0x20bd7d)), ctx['strokeStyle'] = blendColor('#cfcfcf', '#FF0000', blendAmount(_0x20bd7d)), checkForFirstFrame(_0x20bd7d) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF'), ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x20bd7d['radius'], 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath']();
    },
    'Rubber': _0x591dd4 => {
        ctx['lineWidth'] = _0x591dd4['radius'] * 0.22, ctx['fillStyle'] = blendColor('#efefef', '#FF0000', blendAmount(_0x591dd4)), ctx['strokeStyle'] = blendColor('#c1c1c1', '#FF0000', blendAmount(_0x591dd4)), checkForFirstFrame(_0x591dd4) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF'), ctx['beginPath'](), ctx['moveTo'](_0x591dd4['radius'] * -0.25, _0x591dd4['radius'] * -1.05), ctx['quadraticCurveTo'](_0x591dd4['radius'] * 0.5, _0x591dd4['radius'] * -0.71, _0x591dd4['radius'] * 1.05, _0x591dd4['radius'] * -0.25), ctx['quadraticCurveTo'](_0x591dd4['radius'] * 0.71, _0x591dd4['radius'] * 0.5, _0x591dd4['radius'] * 0.25, _0x591dd4['radius'] * 1.05), ctx['quadraticCurveTo'](_0x591dd4['radius'] * -0.5, _0x591dd4['radius'] * 0.71, _0x591dd4['radius'] * -1.05, _0x591dd4['radius'] * 0.25), ctx['quadraticCurveTo'](_0x591dd4['radius'] * -0.71, _0x591dd4['radius'] * -0.5, _0x591dd4['radius'] * -0.25, _0x591dd4['radius'] * -1.05), ctx['fill'](), ctx['stroke'](), ctx['closePath']();
    },
    'Husk': _0x38287f => {
        ctx['lineWidth'] = 0x3, ctx['beginPath'](), ctx['strokeStyle'] = blendColor('#000000', '#FF0000', blendAmount(_0x38287f)), checkForFirstFrame(_0x38287f) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF'), ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x38287f['radius'], 0x0, Math['PI'] * 0x2), ctx['stroke'](), ctx['closePath']();
    },
    'Shade': _0x5168d5 => {
        ctx['fillStyle'] = blendColor('#111111', '#FF0000', blendAmount(_0x5168d5));
        checkForFirstFrame(_0x5168d5) && (ctx['fillStyle'] = '#FFFFFF');
        if (_0x5168d5['particles']) {
            if (!Array['isArray'](_0x5168d5['particles']))
                _0x5168d5['particles'] = [];
        }
        if (!_0x5168d5['particles'])
            _0x5168d5['particles'] = [];
        let _0x508455 = 0x19;
        if (_0x5168d5['particles']['length'] < _0x508455)
            for (let _0x5dd2a1 = 0x0; _0x5dd2a1 < _0x508455; _0x5dd2a1++) {
                _0x5168d5['particles']['push']({
                    'distance': 0.25 * Math['random']() * dt / 16.6,
                    'angle': Math['PI'] * 0x2 * Math['random'](),
                    'rotationSpeed': Math['random']() * Math['PI'] / 0x10,
                    'size': 1.25 * Math['random']() * 0.5
                });
            }
        for (let _0x4f0b1c of _0x5168d5['particles']) {
            _0x4f0b1c['distance'] -= 0.05 * dt / 16.6, _0x4f0b1c['size'] += 0.015 * dt / 16.6, _0x4f0b1c['angle'] += _0x4f0b1c['rotationSpeed'] * dt / 16.6, ctx['globalAlpha'] *= 0x1 - _0x4f0b1c['distance'], ctx['beginPath'](), ctx['arc'](Math['cos'](_0x4f0b1c['angle']) * _0x4f0b1c['distance'] * _0x5168d5['radius'] * 0x2, Math['sin'](_0x4f0b1c['angle']) * _0x4f0b1c['distance'] * _0x5168d5['radius'] * 0x2, _0x5168d5['radius'] * _0x4f0b1c['size'], 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['globalAlpha'] /= 0x1 - _0x4f0b1c['distance'], _0x4f0b1c['distance'] < 0x0 && (_0x4f0b1c['distance'] = 0.5 + Math['random']() * 0.5, (_0x4f0b1c['angle'] = Math['PI'] * 0x2 * Math['random'](), _0x4f0b1c['rotationSpeed'] = Math['random']() * Math['PI'] / 0x10, _0x4f0b1c['size'] = 0.625 * Math['random']() * 0.5));
        }
        ctx['globalAlpha'] = 0x1;
    },
    'Radiance': _0x370ed6 => {
        ctx['fillStyle'] = blendColor('#eeeeee', '#FF0000', blendAmount(_0x370ed6));
        checkForFirstFrame(_0x370ed6) && (ctx['fillStyle'] = '#FFFFFF');
        if (_0x370ed6['particles']) {
            if (!Array['isArray'](_0x370ed6['particles']))
                _0x370ed6['particles'] = [];
        }
        if (!_0x370ed6['particles'])
            _0x370ed6['particles'] = [];
        let _0xc437e = 0x19;
        if (_0x370ed6['particles']['length'] < _0xc437e)
            for (let _0x4a5d3e = 0x0; _0x4a5d3e < _0xc437e; _0x4a5d3e++) {
                _0x370ed6['particles']['push']({
                    'distance': 0.1 * Math['random']() * dt / 16.6,
                    'angle': Math['PI'] * 0x2 * Math['random'](),
                    'rotationSpeed': Math['random']() * Math['PI'] / 0x10,
                    'size': 1.25 * Math['random']() * 0.5
                });
            }
        for (let _0x5ca315 of _0x370ed6['particles']) {
            _0x5ca315['distance'] += 0.05 * dt / 16.6, _0x5ca315['size'] -= 0.01 * dt / 16.6, _0x5ca315['size'] = Math['max'](0.05, _0x5ca315['size']), _0x5ca315['angle'] += _0x5ca315['rotationSpeed'] * dt / 16.6, ctx['globalAlpha'] *= 0x1 - _0x5ca315['distance'], ctx['beginPath'](), ctx['arc'](Math['cos'](_0x5ca315['angle']) * _0x5ca315['distance'] * _0x370ed6['radius'] * 0x2, Math['sin'](_0x5ca315['angle']) * _0x5ca315['distance'] * _0x370ed6['radius'] * 0x2, _0x370ed6['radius'] * _0x5ca315['size'], 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['globalAlpha'] /= 0x1 - _0x5ca315['distance'], _0x5ca315['distance'] > 0.7 && (_0x5ca315['distance'] = 0.1 * Math['random']() * dt / 16.6, (_0x5ca315['angle'] = Math['PI'] * 0x2 * Math['random'](), _0x5ca315['rotationSpeed'] = Math['random']() * Math['PI'] / 0x10, _0x5ca315['size'] = 1.25 * Math['random']() * 0.5));
        }
        ctx['globalAlpha'] = 0x1;
    },
    'Horn': _0x446783 => {
        ctx['lineWidth'] = 0.15 * _0x446783['radius'], ctx['beginPath']();
        let _0x5572c0 = blendColor('#af997e', '#FF0000', blendAmount(_0x446783)), _0x246c23 = blendColor('#8f7d67', '#FF0000', blendAmount(_0x446783)), _0x2dd55c = blendColor('#bdab95', '#FF0000', blendAmount(_0x446783)), _0x5035f9 = blendColor('#706150', '#FF0000', blendAmount(_0x446783));
        checkForFirstFrame(_0x446783) && (_0x5572c0 = '#FFFFFF', _0x246c23 = '#FFFFFF', _0x2dd55c = '#FFFFFF', _0x5035f9 = '#FFFFFF'), ctx['fillStyle'] = _0x5572c0, ctx['beginPath'](), ctx['moveTo'](1.16 * _0x446783['radius'], -0.83 * _0x446783['radius']), ctx['lineTo'](0.54 * _0x446783['radius'], -0.37 * _0x446783['radius']), ctx['lineTo'](-0.16 * _0x446783['radius'], -0.23 * _0x446783['radius']), ctx['lineTo'](-0.86 * _0x446783['radius'], -0.53 * _0x446783['radius']), ctx['lineTo'](-1.38 * _0x446783['radius'], -0.99 * _0x446783['radius']), ctx['lineTo'](-1.23 * _0x446783['radius'], -0.3 * _0x446783['radius']), ctx['lineTo'](-0.76 * _0x446783['radius'], 0.22 * _0x446783['radius']), ctx['lineTo'](-0.18 * _0x446783['radius'], 0.64 * _0x446783['radius']), ctx['lineTo'](0.52 * _0x446783['radius'], 0.72 * _0x446783['radius']), ctx['lineTo'](1.28 * _0x446783['radius'], 0.37 * _0x446783['radius']), ctx['fill'](), ctx['closePath'](), ctx['strokeStyle'] = _0x2dd55c, ctx['beginPath'](), ctx['moveTo'](-1.38 * _0x446783['radius'], -0.99 * _0x446783['radius']), ctx['lineTo'](-0.91 * _0x446783['radius'], -0.33 * _0x446783['radius']), ctx['stroke'](), ctx['closePath'](), ctx['lineWidth'] = 0.16 * _0x446783['radius'], ctx['beginPath'](), ctx['moveTo'](-0.91 * _0x446783['radius'], -0.33 * _0x446783['radius']), ctx['lineTo'](-0.27 * _0x446783['radius'], 0.03 * _0x446783['radius']), ctx['stroke'](), ctx['closePath'](), ctx['lineWidth'] = 0.18 * _0x446783['radius'], ctx['beginPath'](), ctx['moveTo'](-0.27 * _0x446783['radius'], 0.03 * _0x446783['radius']), ctx['lineTo'](0.33 * _0x446783['radius'], -0.03 * _0x446783['radius']), ctx['stroke'](), ctx['closePath'](), ctx['lineWidth'] = 0.2 * _0x446783['radius'], ctx['beginPath'](), ctx['moveTo'](0.33 * _0x446783['radius'], -0.03 * _0x446783['radius']), ctx['lineTo'](_0x446783['radius'], -0.37 * _0x446783['radius']), ctx['stroke'](), ctx['closePath'](), ctx['lineWidth'] = 0.15 * _0x446783['radius'], ctx['strokeStyle'] = _0x246c23, ctx['fillStyle'] = _0x5035f9, ctx['beginPath'](), ctx['moveTo'](1.16 * _0x446783['radius'], -0.83 * _0x446783['radius']), ctx['quadraticCurveTo'](0.69 * _0x446783['radius'], -0.15 * _0x446783['radius'], 1.28 * _0x446783['radius'], 0.37 * _0x446783['radius']), ctx['quadraticCurveTo'](1.67 * _0x446783['radius'], -0.29 * _0x446783['radius'], 1.16 * _0x446783['radius'], -0.83 * _0x446783['radius']), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['moveTo'](-0.86 * _0x446783['radius'], -0.53 * _0x446783['radius']), ctx['quadraticCurveTo'](-1.01 * _0x446783['radius'], -0.26 * _0x446783['radius'], -0.76 * _0x446783['radius'], 0.22 * _0x446783['radius']), ctx['moveTo'](-0.16 * _0x446783['radius'], -0.23 * _0x446783['radius']), ctx['quadraticCurveTo'](-0.53 * _0x446783['radius'], 0.15 * _0x446783['radius'], -0.18 * _0x446783['radius'], 0.64 * _0x446783['radius']), ctx['moveTo'](0.54 * _0x446783['radius'], -0.37 * _0x446783['radius']), ctx['quadraticCurveTo'](0.17 * _0x446783['radius'], 0.25 * _0x446783['radius'], 0.52 * _0x446783['radius'], 0.72 * _0x446783['radius']), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['moveTo'](1.16 * _0x446783['radius'], -0.83 * _0x446783['radius']), ctx['lineTo'](0.54 * _0x446783['radius'], -0.37 * _0x446783['radius']), ctx['lineTo'](-0.16 * _0x446783['radius'], -0.23 * _0x446783['radius']), ctx['lineTo'](-0.86 * _0x446783['radius'], -0.53 * _0x446783['radius']), ctx['lineTo'](-1.38 * _0x446783['radius'], -0.99 * _0x446783['radius']), ctx['lineTo'](-1.23 * _0x446783['radius'], -0.3 * _0x446783['radius']), ctx['lineTo'](-0.76 * _0x446783['radius'], 0.22 * _0x446783['radius']), ctx['lineTo'](-0.18 * _0x446783['radius'], 0.64 * _0x446783['radius']), ctx['lineTo'](0.52 * _0x446783['radius'], 0.72 * _0x446783['radius']), ctx['lineTo'](1.28 * _0x446783['radius'], 0.37 * _0x446783['radius']), ctx['stroke'](), ctx['closePath']();
    },
    'Blood\x20Horn': _0x3a4ee9 => {
        ctx['lineWidth'] = 0.15 * _0x3a4ee9['radius'], ctx['beginPath']();
        let _0x104d8f = blendColor('#af7e7eff', '#FF0000', blendAmount(_0x3a4ee9)), _0x4ee708 = blendColor('#8f6767ff', '#FF0000', blendAmount(_0x3a4ee9)), _0x43b7ca = blendColor('#bd9595ff', '#FF0000', blendAmount(_0x3a4ee9)), _0x1a4afb = blendColor('#705050ff', '#FF0000', blendAmount(_0x3a4ee9));
        checkForFirstFrame(_0x3a4ee9) && (_0x104d8f = '#FFFFFF', _0x4ee708 = '#FFFFFF', _0x43b7ca = '#FFFFFF', _0x1a4afb = '#FFFFFF'), ctx['fillStyle'] = _0x104d8f, ctx['beginPath'](), ctx['moveTo'](1.16 * _0x3a4ee9['radius'], -0.83 * _0x3a4ee9['radius']), ctx['lineTo'](0.54 * _0x3a4ee9['radius'], -0.37 * _0x3a4ee9['radius']), ctx['lineTo'](-0.16 * _0x3a4ee9['radius'], -0.23 * _0x3a4ee9['radius']), ctx['lineTo'](-0.86 * _0x3a4ee9['radius'], -0.53 * _0x3a4ee9['radius']), ctx['lineTo'](-1.38 * _0x3a4ee9['radius'], -0.99 * _0x3a4ee9['radius']), ctx['lineTo'](-1.23 * _0x3a4ee9['radius'], -0.3 * _0x3a4ee9['radius']), ctx['lineTo'](-0.76 * _0x3a4ee9['radius'], 0.22 * _0x3a4ee9['radius']), ctx['lineTo'](-0.18 * _0x3a4ee9['radius'], 0.64 * _0x3a4ee9['radius']), ctx['lineTo'](0.52 * _0x3a4ee9['radius'], 0.72 * _0x3a4ee9['radius']), ctx['lineTo'](1.28 * _0x3a4ee9['radius'], 0.37 * _0x3a4ee9['radius']), ctx['fill'](), ctx['closePath'](), ctx['strokeStyle'] = _0x43b7ca, ctx['beginPath'](), ctx['moveTo'](-1.38 * _0x3a4ee9['radius'], -0.99 * _0x3a4ee9['radius']), ctx['lineTo'](-0.91 * _0x3a4ee9['radius'], -0.33 * _0x3a4ee9['radius']), ctx['stroke'](), ctx['closePath'](), ctx['lineWidth'] = 0.16 * _0x3a4ee9['radius'], ctx['beginPath'](), ctx['moveTo'](-0.91 * _0x3a4ee9['radius'], -0.33 * _0x3a4ee9['radius']), ctx['lineTo'](-0.27 * _0x3a4ee9['radius'], 0.03 * _0x3a4ee9['radius']), ctx['stroke'](), ctx['closePath'](), ctx['lineWidth'] = 0.18 * _0x3a4ee9['radius'], ctx['beginPath'](), ctx['moveTo'](-0.27 * _0x3a4ee9['radius'], 0.03 * _0x3a4ee9['radius']), ctx['lineTo'](0.33 * _0x3a4ee9['radius'], -0.03 * _0x3a4ee9['radius']), ctx['stroke'](), ctx['closePath'](), ctx['lineWidth'] = 0.2 * _0x3a4ee9['radius'], ctx['beginPath'](), ctx['moveTo'](0.33 * _0x3a4ee9['radius'], -0.03 * _0x3a4ee9['radius']), ctx['lineTo'](_0x3a4ee9['radius'], -0.37 * _0x3a4ee9['radius']), ctx['stroke'](), ctx['closePath'](), ctx['lineWidth'] = 0.15 * _0x3a4ee9['radius'], ctx['strokeStyle'] = _0x4ee708, ctx['fillStyle'] = _0x1a4afb, ctx['beginPath'](), ctx['moveTo'](1.16 * _0x3a4ee9['radius'], -0.83 * _0x3a4ee9['radius']), ctx['quadraticCurveTo'](0.69 * _0x3a4ee9['radius'], -0.15 * _0x3a4ee9['radius'], 1.28 * _0x3a4ee9['radius'], 0.37 * _0x3a4ee9['radius']), ctx['quadraticCurveTo'](1.67 * _0x3a4ee9['radius'], -0.29 * _0x3a4ee9['radius'], 1.16 * _0x3a4ee9['radius'], -0.83 * _0x3a4ee9['radius']), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['moveTo'](-0.86 * _0x3a4ee9['radius'], -0.53 * _0x3a4ee9['radius']), ctx['quadraticCurveTo'](-1.01 * _0x3a4ee9['radius'], -0.26 * _0x3a4ee9['radius'], -0.76 * _0x3a4ee9['radius'], 0.22 * _0x3a4ee9['radius']), ctx['moveTo'](-0.16 * _0x3a4ee9['radius'], -0.23 * _0x3a4ee9['radius']), ctx['quadraticCurveTo'](-0.53 * _0x3a4ee9['radius'], 0.15 * _0x3a4ee9['radius'], -0.18 * _0x3a4ee9['radius'], 0.64 * _0x3a4ee9['radius']), ctx['moveTo'](0.54 * _0x3a4ee9['radius'], -0.37 * _0x3a4ee9['radius']), ctx['quadraticCurveTo'](0.17 * _0x3a4ee9['radius'], 0.25 * _0x3a4ee9['radius'], 0.52 * _0x3a4ee9['radius'], 0.72 * _0x3a4ee9['radius']), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['moveTo'](1.16 * _0x3a4ee9['radius'], -0.83 * _0x3a4ee9['radius']), ctx['lineTo'](0.54 * _0x3a4ee9['radius'], -0.37 * _0x3a4ee9['radius']), ctx['lineTo'](-0.16 * _0x3a4ee9['radius'], -0.23 * _0x3a4ee9['radius']), ctx['lineTo'](-0.86 * _0x3a4ee9['radius'], -0.53 * _0x3a4ee9['radius']), ctx['lineTo'](-1.38 * _0x3a4ee9['radius'], -0.99 * _0x3a4ee9['radius']), ctx['lineTo'](-1.23 * _0x3a4ee9['radius'], -0.3 * _0x3a4ee9['radius']), ctx['lineTo'](-0.76 * _0x3a4ee9['radius'], 0.22 * _0x3a4ee9['radius']), ctx['lineTo'](-0.18 * _0x3a4ee9['radius'], 0.64 * _0x3a4ee9['radius']), ctx['lineTo'](0.52 * _0x3a4ee9['radius'], 0.72 * _0x3a4ee9['radius']), ctx['lineTo'](1.28 * _0x3a4ee9['radius'], 0.37 * _0x3a4ee9['radius']), ctx['stroke'](), ctx['closePath']();
    },
    'Abyssal\x20Artifact': _0x5414ba => {
        if (!_0x5414ba['artifactAnim'])
            _0x5414ba['artifactAnim'] = Math['random']() * Math['PI'] * 0x2;
        const _0x5ef76c = _0x5414ba['radius'] || 0xa, _0x47b62f = blendColor('#1a0a8a', '#FF0000', blendAmount(_0x5414ba)), _0x5d0b2d = blendColor('rgba(44,\x2027,\x20209,\x200.3)', 'rgba(255,\x200,\x200,\x200.3)', blendAmount(_0x5414ba)), _0x3057b6 = blendColor('#4a3fff', '#FF0000', blendAmount(_0x5414ba));
        if (checkForFirstFrame(_0x5414ba))
            ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF';
        else {
            const _0x4a6b90 = ctx['createRadialGradient'](0x0, 0x0, 0x0, 0x0, 0x0, _0x5ef76c * 1.3);
            _0x4a6b90['addColorStop'](0x0, _0x3057b6), _0x4a6b90['addColorStop'](0.5, _0x47b62f), _0x4a6b90['addColorStop'](0x1, 'rgba(26,\x2010,\x20138,\x200)'), ctx['save'](), ctx['globalAlpha'] = 0.6, ctx['fillStyle'] = _0x4a6b90, ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x5ef76c * 1.2, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['restore']();
        }
        const _0x1e410d = _0x5414ba['artifactAnim'] + time * 0.002;
        ctx['save'](), ctx['rotate'](_0x1e410d), ctx['strokeStyle'] = _0x5d0b2d, ctx['lineWidth'] = 0x2;
        for (let _0x40a2de = 0x0; _0x40a2de < 0x3; _0x40a2de++) {
            ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x5ef76c * 0.7, _0x40a2de * Math['PI'] * 0x2 / 0x3 - 0.3, _0x40a2de * Math['PI'] * 0x2 / 0x3 + 0.3), ctx['stroke']();
        }
        ctx['restore'](), ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x5ef76c * 0.5, 0x0, Math['PI'] * 0x2), ctx['fillStyle'] = _0x3057b6, ctx['fill'](), ctx['save'](), ctx['rotate'](-_0x1e410d * 1.5), ctx['fillStyle'] = 'rgba(100,\x20150,\x20255,\x200.5)', ctx['beginPath']();
        for (let _0x436de4 = 0x0; _0x436de4 < 0x5; _0x436de4++) {
            const _0x67c0a5 = _0x436de4 * Math['PI'] * 0x2 / 0x5 - Math['PI'] / 0x2, _0x59a5de = Math['cos'](_0x67c0a5) * _0x5ef76c * 0.25, _0xb2fac0 = Math['sin'](_0x67c0a5) * _0x5ef76c * 0.25;
            if (_0x436de4 === 0x0)
                ctx['moveTo'](_0x59a5de, _0xb2fac0);
            else
                ctx['lineTo'](_0x59a5de, _0xb2fac0);
        }
        ctx['closePath'](), ctx['fill'](), ctx['restore'](), ctx['strokeStyle'] = _0x47b62f, ctx['lineWidth'] = 0x3, ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x5ef76c, 0x0, Math['PI'] * 0x2), ctx['stroke'](), ctx['closePath']();
    },
    'Scorched\x20Artifact': _0x44e49a => {
        if (!_0x44e49a['artifactAnim'])
            _0x44e49a['artifactAnim'] = Math['random']() * Math['PI'] * 0x2;
        const _0x46f872 = _0x44e49a['radius'] || 0xa, _0x56a974 = blendColor('#8a1a0a', '#FF0000', blendAmount(_0x44e49a)), _0x57e2ab = blendColor('#ff6a2a', '#FF0000', blendAmount(_0x44e49a)), _0x51f710 = blendColor('#ffa500', '#FF0000', blendAmount(_0x44e49a));
        if (checkForFirstFrame(_0x44e49a))
            ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF';
        else {
            if (!_0x44e49a['emberParticles'])
                _0x44e49a['emberParticles'] = [];
            if (_0x44e49a['emberParticles']) {
                if (!Array['isArray'](_0x44e49a['emberParticles']))
                    _0x44e49a['emberParticles'] = [];
            }
            if (!_0x44e49a['emberParticles'])
                _0x44e49a['emberParticles'] = [];
            _0x44e49a['emberParticles']['length'] < 0x8 && _0x44e49a['emberParticles']['push']({
                'angle': Math['random']() * Math['PI'] * 0x2,
                'distance': 0.2 + Math['random']() * 0.3,
                'size': 0x2 + Math['random']() * 0x3,
                'speed': 0.01 + Math['random']() * 0.02
            });
            for (let _0x157a3e = _0x44e49a['emberParticles']['length'] - 0x1; _0x157a3e >= 0x0; _0x157a3e--) {
                const _0x59914f = _0x44e49a['emberParticles'][_0x157a3e];
                _0x59914f['angle'] += _0x59914f['speed'], ctx['globalAlpha'] = 0.8, ctx['fillStyle'] = _0x51f710, ctx['beginPath'](), ctx['arc'](Math['cos'](_0x59914f['angle']) * _0x46f872 * _0x59914f['distance'], Math['sin'](_0x59914f['angle']) * _0x46f872 * _0x59914f['distance'], _0x59914f['size'], 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['globalAlpha'] = 0x1, Math['random']() < 0.02 && _0x44e49a['emberParticles']['splice'](_0x157a3e, 0x1);
            }
        }
        const _0x5f1e16 = ctx['createRadialGradient'](0x0, 0x0, 0x0, 0x0, 0x0, _0x46f872 * 1.3);
        _0x5f1e16['addColorStop'](0x0, _0x57e2ab), _0x5f1e16['addColorStop'](0.6, _0x56a974), _0x5f1e16['addColorStop'](0x1, 'rgba(138,\x2026,\x2010,\x200)'), ctx['save'](), ctx['globalAlpha'] = 0.5, ctx['fillStyle'] = _0x5f1e16, ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x46f872 * 1.2, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['restore']();
        const _0x20c2d7 = _0x44e49a['artifactAnim'] + time * 0.003;
        ctx['save'](), ctx['rotate'](_0x20c2d7), ctx['strokeStyle'] = _0x51f710, ctx['lineWidth'] = 2.5, ctx['setLineDash']([
            0x8,
            0x4
        ]), ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x46f872 * 0.75, 0x0, Math['PI'] * 0x2), ctx['stroke'](), ctx['restore']();
        const _0x5a0453 = 0x1 + Math['sin'](time * 0.005 + _0x44e49a['artifactAnim']) * 0.1;
        ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x46f872 * 0.45 * _0x5a0453, 0x0, Math['PI'] * 0x2), ctx['fillStyle'] = _0x57e2ab, ctx['fill'](), ctx['save'](), ctx['rotate'](-_0x20c2d7 * 0x2), ctx['strokeStyle'] = 'rgba(255,\x20200,\x20100,\x200.6)', ctx['lineWidth'] = 1.5;
        for (let _0x8f5586 = 0x0; _0x8f5586 < 0x4; _0x8f5586++) {
            const _0x15ad67 = _0x8f5586 * Math['PI'] * 0x2 / 0x4;
            ctx['beginPath'](), ctx['moveTo'](0x0, 0x0), ctx['lineTo'](Math['cos'](_0x15ad67) * _0x46f872 * 0.35, Math['sin'](_0x15ad67) * _0x46f872 * 0.35), ctx['stroke']();
        }
        ctx['restore'](), ctx['strokeStyle'] = _0x56a974, ctx['lineWidth'] = 0x3, ctx['setLineDash']([]), ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x46f872, 0x0, Math['PI'] * 0x2), ctx['stroke'](), ctx['closePath']();
    },
    'Verdant\x20Artifact': _0xd83cdd => {
        if (!_0xd83cdd['artifactAnim'])
            _0xd83cdd['artifactAnim'] = Math['random']() * Math['PI'] * 0x2;
        const _0x2258a6 = _0xd83cdd['radius'] || 0xa, _0x52c122 = blendColor('#0a8a2a', '#FF0000', blendAmount(_0xd83cdd)), _0x258d69 = blendColor('#3aff6a', '#FF0000', blendAmount(_0xd83cdd)), _0x4ba9c4 = blendColor('#50ff88', '#FF0000', blendAmount(_0xd83cdd));
        if (checkForFirstFrame(_0xd83cdd))
            ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF';
        else {
            const _0x1b46f0 = ctx['createRadialGradient'](0x0, 0x0, 0x0, 0x0, 0x0, _0x2258a6 * 1.3);
            _0x1b46f0['addColorStop'](0x0, _0x258d69), _0x1b46f0['addColorStop'](0.5, _0x52c122), _0x1b46f0['addColorStop'](0x1, 'rgba(10,\x20138,\x2042,\x200)'), ctx['save'](), ctx['globalAlpha'] = 0.5, ctx['fillStyle'] = _0x1b46f0, ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x2258a6 * 1.2, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['restore']();
        }
        const _0x541237 = _0xd83cdd['artifactAnim'] + time * 0.001;
        ctx['save'](), ctx['rotate'](_0x541237), ctx['fillStyle'] = _0x4ba9c4;
        for (let _0x41ea0b = 0x0; _0x41ea0b < 0x6; _0x41ea0b++) {
            const _0x456d58 = _0x41ea0b * Math['PI'] * 0x2 / 0x6, _0x27d3bb = Math['cos'](_0x456d58) * _0x2258a6 * 0.65, _0x4f0f38 = Math['sin'](_0x456d58) * _0x2258a6 * 0.65;
            ctx['save'](), ctx['translate'](_0x27d3bb, _0x4f0f38), ctx['rotate'](_0x456d58 + Math['PI'] / 0x2), ctx['beginPath'](), ctx['ellipse'](0x0, 0x0, _0x2258a6 * 0.15, _0x2258a6 * 0.25, 0x0, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['restore']();
        }
        ctx['restore'](), ctx['save'](), ctx['rotate'](-_0x541237 * 0.5), ctx['strokeStyle'] = _0x4ba9c4, ctx['lineWidth'] = 0x2, ctx['setLineDash']([
            0xc,
            0x6
        ]), ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x2258a6 * 0.8, 0x0, Math['PI'] * 0x2), ctx['stroke'](), ctx['restore'](), ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x2258a6 * 0.45, 0x0, Math['PI'] * 0x2), ctx['fillStyle'] = _0x258d69, ctx['fill'](), ctx['save'](), ctx['rotate'](_0x541237), ctx['strokeStyle'] = 'rgba(100,\x20255,\x20150,\x200.5)', ctx['lineWidth'] = 0x1;
        const _0x5359f4 = 0x14;
        ctx['beginPath']();
        for (let _0x21c05d = 0x0; _0x21c05d < _0x5359f4; _0x21c05d++) {
            const _0x4fcf88 = _0x21c05d / _0x5359f4, _0x23862c = _0x4fcf88 * Math['PI'] * 0x4, _0xa7da47 = _0x4fcf88 * _0x2258a6 * 0.35, _0x5233de = Math['cos'](_0x23862c) * _0xa7da47, _0x1c52a8 = Math['sin'](_0x23862c) * _0xa7da47;
            if (_0x21c05d === 0x0)
                ctx['moveTo'](_0x5233de, _0x1c52a8);
            else
                ctx['lineTo'](_0x5233de, _0x1c52a8);
        }
        ctx['stroke'](), ctx['restore'](), ctx['strokeStyle'] = _0x52c122, ctx['lineWidth'] = 0x3, ctx['setLineDash']([]), ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x2258a6, 0x0, Math['PI'] * 0x2), ctx['stroke'](), ctx['closePath']();
    },
    'Cosmic\x20Artifact': _0x189dd5 => {
        if (!_0x189dd5['artifactAnim'])
            _0x189dd5['artifactAnim'] = Math['random']() * Math['PI'] * 0x2;
        const _0x3c8586 = _0x189dd5['radius'] || 0xa, _0x2bc5ad = blendColor('#2a0a6a', '#FF0000', blendAmount(_0x189dd5)), _0x14620e = blendColor('#9d4fff', '#FF0000', blendAmount(_0x189dd5)), _0x5912e3 = blendColor('#ff4fff', '#FF0000', blendAmount(_0x189dd5)), _0x4856d7 = blendColor('#4fffff', '#FF0000', blendAmount(_0x189dd5));
        if (checkForFirstFrame(_0x189dd5))
            ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF';
        else {
            const _0x308d28 = ctx['createRadialGradient'](0x0, 0x0, 0x0, 0x0, 0x0, _0x3c8586 * 1.4);
            _0x308d28['addColorStop'](0x0, _0x14620e), _0x308d28['addColorStop'](0.2, _0x5912e3), _0x308d28['addColorStop'](0.5, _0x2bc5ad), _0x308d28['addColorStop'](0.7, _0x4856d7), _0x308d28['addColorStop'](0x1, 'rgba(20,\x200,\x2060,\x200)'), ctx['save'](), ctx['globalAlpha'] = 0.4, ctx['fillStyle'] = _0x308d28, ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x3c8586 * 1.3, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['restore']();
            if (!_0x189dd5['starParticles'])
                _0x189dd5['starParticles'] = [];
            if (_0x189dd5['starParticles']) {
                if (!Array['isArray'](_0x189dd5['starParticles']))
                    _0x189dd5['starParticles'] = [];
            }
            if (!_0x189dd5['starParticles'])
                _0x189dd5['starParticles'] = [];
            _0x189dd5['starParticles']['length'] < 0xc && _0x189dd5['starParticles']['push']({
                'angle': Math['random']() * Math['PI'] * 0x2,
                'distance': 0.3 + Math['random']() * 0.5,
                'size': 0x1 + Math['random']() * 0x2,
                'speed': 0.002 + Math['random']() * 0.004,
                'twinkle': Math['random']() * Math['PI'] * 0x2,
                'color': Math['random']() > 0.5 ? '#ffffff' : Math['random']() > 0.5 ? '#ffccff' : '#ccffff'
            });
            for (let _0xfe06a9 = _0x189dd5['starParticles']['length'] - 0x1; _0xfe06a9 >= 0x0; _0xfe06a9--) {
                const _0x2776c6 = _0x189dd5['starParticles'][_0xfe06a9];
                _0x2776c6['angle'] += _0x2776c6['speed'], _0x2776c6['twinkle'] += 0.1;
                const _0x517fb6 = 0.5 + Math['sin'](_0x2776c6['twinkle']) * 0.5;
                ctx['globalAlpha'] = _0x517fb6, ctx['fillStyle'] = _0x2776c6['color'], ctx['beginPath'](), ctx['arc'](Math['cos'](_0x2776c6['angle']) * _0x3c8586 * _0x2776c6['distance'], Math['sin'](_0x2776c6['angle']) * _0x3c8586 * _0x2776c6['distance'], _0x2776c6['size'], 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['globalAlpha'] = 0x1;
                if (_0x2776c6['size'] > 0x2) {
                    ctx['strokeStyle'] = _0x2776c6['color'], ctx['lineWidth'] = 0.5;
                    const _0x5d226f = Math['cos'](_0x2776c6['angle']) * _0x3c8586 * _0x2776c6['distance'], _0x232099 = Math['sin'](_0x2776c6['angle']) * _0x3c8586 * _0x2776c6['distance'];
                    ctx['beginPath'](), ctx['moveTo'](_0x5d226f - _0x2776c6['size'] * 0x2, _0x232099), ctx['lineTo'](_0x5d226f + _0x2776c6['size'] * 0x2, _0x232099), ctx['moveTo'](_0x5d226f, _0x232099 - _0x2776c6['size'] * 0x2), ctx['lineTo'](_0x5d226f, _0x232099 + _0x2776c6['size'] * 0x2), ctx['stroke']();
                }
            }
            if (!_0x189dd5['cometParticles'])
                _0x189dd5['cometParticles'] = [];
            if (_0x189dd5['cometParticles']) {
                if (!Array['isArray'](_0x189dd5['cometParticles']))
                    _0x189dd5['cometParticles'] = [];
            }
            if (!_0x189dd5['cometParticles'])
                _0x189dd5['cometParticles'] = [];
            _0x189dd5['cometParticles']['length'] < 0x2 && Math['random']() < 0.01 && _0x189dd5['cometParticles']['push']({
                'angle': Math['random']() * Math['PI'] * 0x2,
                'distance': 1.2,
                'speed': 0.03 + Math['random']() * 0.02,
                'size': 0x2 + Math['random']() * 0x2,
                'trail': []
            });
            for (let _0x26b85d = _0x189dd5['cometParticles']['length'] - 0x1; _0x26b85d >= 0x0; _0x26b85d--) {
                const _0x4be437 = _0x189dd5['cometParticles'][_0x26b85d];
                _0x4be437['distance'] -= _0x4be437['speed'];
                if (_0x4be437['distance'] < 0.2) {
                    _0x189dd5['cometParticles']['splice'](_0x26b85d, 0x1);
                    continue;
                }
                const _0x5504e5 = Math['cos'](_0x4be437['angle']) * _0x3c8586 * _0x4be437['distance'], _0x5082e1 = Math['sin'](_0x4be437['angle']) * _0x3c8586 * _0x4be437['distance'];
                _0x4be437['trail']['push']({
                    'x': _0x5504e5,
                    'y': _0x5082e1
                });
                if (_0x4be437['trail']['length'] > 0xf)
                    _0x4be437['trail']['shift']();
                if (_0x4be437['trail']['length'] > 0x2) {
                    ctx['beginPath'](), ctx['moveTo'](_0x4be437['trail'][0x0]['x'], _0x4be437['trail'][0x0]['y']);
                    for (let _0x473937 = 0x1; _0x473937 < _0x4be437['trail']['length']; _0x473937++) {
                        ctx['lineTo'](_0x4be437['trail'][_0x473937]['x'], _0x4be437['trail'][_0x473937]['y']);
                    }
                    const _0x2c7898 = ctx['createLinearGradient'](_0x4be437['trail'][0x0]['x'], _0x4be437['trail'][0x0]['y'], _0x5504e5, _0x5082e1);
                    _0x2c7898['addColorStop'](0x0, 'rgba(255,\x20255,\x20255,\x200)'), _0x2c7898['addColorStop'](0x1, 'rgba(255,\x20200,\x20255,\x200.8)'), ctx['strokeStyle'] = _0x2c7898, ctx['lineWidth'] = _0x4be437['size'] * 0.5, ctx['stroke']();
                }
                ctx['fillStyle'] = '#ffffff', ctx['beginPath'](), ctx['arc'](_0x5504e5, _0x5082e1, _0x4be437['size'], 0x0, Math['PI'] * 0x2), ctx['fill']();
            }
        }
        const _0x2e7eff = _0x189dd5['artifactAnim'] + time * 0.0008;
        ctx['save'](), ctx['rotate'](_0x2e7eff);
        for (let _0x32c78a = 0x0; _0x32c78a < 0x2; _0x32c78a++) {
            ctx['save'](), ctx['rotate'](_0x32c78a * Math['PI']);
            const _0xaa1765 = ctx['createRadialGradient'](0x0, 0x0, 0x0, 0x0, 0x0, _0x3c8586 * 0.8);
            _0x32c78a === 0x0 ? (_0xaa1765['addColorStop'](0x0, _0x5912e3), _0xaa1765['addColorStop'](0x1, 'rgba(255,\x2079,\x20255,\x200)')) : (_0xaa1765['addColorStop'](0x0, _0x4856d7), _0xaa1765['addColorStop'](0x1, 'rgba(79,\x20255,\x20255,\x200)'));
            ctx['strokeStyle'] = _0xaa1765, ctx['lineWidth'] = 0x4, ctx['lineCap'] = 'round', ctx['beginPath']();
            for (let _0xb5a4e2 = 0x0; _0xb5a4e2 < 0x32; _0xb5a4e2++) {
                const _0x1dc3e3 = _0xb5a4e2 / 0x32, _0x4d16f6 = _0x1dc3e3 * Math['PI'] * 0x3, _0x1f63f0 = _0x1dc3e3 * _0x3c8586 * 0.7, _0x4290c5 = Math['cos'](_0x4d16f6) * _0x1f63f0, _0x273396 = Math['sin'](_0x4d16f6) * _0x1f63f0;
                if (_0xb5a4e2 === 0x0)
                    ctx['moveTo'](_0x4290c5, _0x273396);
                else
                    ctx['lineTo'](_0x4290c5, _0x273396);
            }
            ctx['stroke'](), ctx['restore']();
        }
        ctx['restore']();
        const _0x30c3d1 = _0x189dd5['artifactAnim'] + time * 0.002;
        ctx['save'](), ctx['rotate'](_0x30c3d1), ctx['lineWidth'] = 0x2;
        const _0x1add43 = [
            'rgba(255,\x20100,\x20100,\x200.6)',
            'rgba(255,\x20150,\x2050,\x200.6)',
            'rgba(255,\x20255,\x20100,\x200.6)',
            'rgba(100,\x20255,\x20100,\x200.6)',
            'rgba(100,\x20200,\x20255,\x200.6)',
            'rgba(150,\x20100,\x20255,\x200.6)'
        ];
        for (let _0x28dd3b = 0x0; _0x28dd3b < 0x3; _0x28dd3b++) {
            ctx['strokeStyle'] = _0x1add43[(_0x28dd3b + Math['floor'](time * 0.01)) % _0x1add43['length']], ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x3c8586 * (0.55 + _0x28dd3b * 0.1), 0x0, Math['PI'] * 0x2), ctx['stroke']();
        }
        ctx['restore']();
        const _0x5a748c = 0x1 + Math['sin'](time * 0.003 + _0x189dd5['artifactAnim']) * 0.15;
        ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x3c8586 * 0.35 * _0x5a748c, 0x0, Math['PI'] * 0x2);
        const _0x5115a2 = ctx['createRadialGradient'](0x0, 0x0, 0x0, 0x0, 0x0, _0x3c8586 * 0.35);
        _0x5115a2['addColorStop'](0x0, '#ffffff'), _0x5115a2['addColorStop'](0.3, _0x14620e), _0x5115a2['addColorStop'](0x1, _0x5912e3), ctx['fillStyle'] = _0x5115a2, ctx['fill'](), ctx['save'](), ctx['rotate'](-_0x2e7eff * 0x2), ctx['fillStyle'] = 'rgba(255,\x20255,\x20255,\x200.8)';
        for (let _0x406ae9 = 0x0; _0x406ae9 < 0x8; _0x406ae9++) {
            const _0x3a8f0f = _0x406ae9 * Math['PI'] * 0x2 / 0x8 - Math['PI'] / 0x2, _0x11fc83 = _0x3c8586 * 0.2, _0xd28706 = Math['cos'](_0x3a8f0f) * _0x11fc83, _0x51a00f = Math['sin'](_0x3a8f0f) * _0x11fc83, _0xa12b8 = 0.3 + Math['sin'](time * 0.01 + _0x406ae9) * 0.7;
            ctx['globalAlpha'] = _0xa12b8, ctx['beginPath'](), ctx['arc'](_0xd28706, _0x51a00f, 1.5, 0x0, Math['PI'] * 0x2), ctx['fill']();
        }
        ctx['restore'](), ctx['strokeStyle'] = _0x2bc5ad, ctx['lineWidth'] = 0x3, ctx['setLineDash']([]), ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x3c8586, 0x0, Math['PI'] * 0x2), ctx['stroke'](), ctx['save'](), ctx['strokeStyle'] = _0x4856d7, ctx['lineWidth'] = 1.5, ctx['globalAlpha'] = 0.5 + Math['sin'](time * 0.005) * 0.3, ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x3c8586 + 0x2, 0x0, Math['PI'] * 0x2), ctx['stroke'](), ctx['restore'](), ctx['globalAlpha'] = 0x1, ctx['closePath']();
    },
    'Chimera': _0x388ec8 => {
        if (!_0x388ec8['artifactAnim'])
            _0x388ec8['artifactAnim'] = Math['random']() * Math['PI'] * 0x2;
        const _0x4c406c = _0x388ec8['radius'] || 0xa, _0x29dfab = blendColor('#9932cc', '#FF0000', blendAmount(_0x388ec8)), _0x1ac2d3 = blendColor('#ffcc00', '#FF0000', blendAmount(_0x388ec8)), _0x2180a1 = blendColor('#4b0082', '#FF0000', blendAmount(_0x388ec8));
        if (checkForFirstFrame(_0x388ec8))
            ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF';
        else {
            const _0x1ffb7c = ctx['createRadialGradient'](0x0, 0x0, _0x4c406c * 0.5, 0x0, 0x0, _0x4c406c * 1.5);
            _0x1ffb7c['addColorStop'](0x0, 'rgba(153,\x2050,\x20204,\x200.3)'), _0x1ffb7c['addColorStop'](0x1, 'rgba(153,\x2050,\x20204,\x200)'), ctx['fillStyle'] = _0x1ffb7c, ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x4c406c * 1.5, 0x0, Math['PI'] * 0x2), ctx['fill']();
            if (!_0x388ec8['hiveParticles'])
                _0x388ec8['hiveParticles'] = [];
            if (_0x388ec8['hiveParticles']) {
                if (!Array['isArray'](_0x388ec8['hiveParticles']))
                    _0x388ec8['hiveParticles'] = [];
            }
            if (!_0x388ec8['hiveParticles'])
                _0x388ec8['hiveParticles'] = [];
            _0x388ec8['hiveParticles']['length'] < 0x6 && Math['random']() < 0.02 && _0x388ec8['hiveParticles']['push']({
                'angle': Math['random']() * Math['PI'] * 0x2,
                'distance': 0.8 + Math['random']() * 0.4,
                'size': 1.5 + Math['random']() * 1.5,
                'speed': 0.01 + Math['random']() * 0.02,
                'life': 0x1
            });
            for (let _0x5d75b3 = _0x388ec8['hiveParticles']['length'] - 0x1; _0x5d75b3 >= 0x0; _0x5d75b3--) {
                const _0x364b1c = _0x388ec8['hiveParticles'][_0x5d75b3];
                _0x364b1c['angle'] += _0x364b1c['speed'], _0x364b1c['life'] -= 0.01;
                if (_0x364b1c['life'] <= 0x0) {
                    _0x388ec8['hiveParticles']['splice'](_0x5d75b3, 0x1);
                    continue;
                }
                const _0x4f3591 = Math['cos'](_0x364b1c['angle']) * _0x4c406c * _0x364b1c['distance'], _0x1f2545 = Math['sin'](_0x364b1c['angle']) * _0x4c406c * _0x364b1c['distance'];
                ctx['globalAlpha'] = _0x364b1c['life'] * 0.6, ctx['fillStyle'] = _0x1ac2d3, ctx['beginPath']();
                for (let _0x4663ab = 0x0; _0x4663ab < 0x6; _0x4663ab++) {
                    const _0x1656ec = Math['PI'] / 0x3 * _0x4663ab, _0x3a42d4 = _0x4f3591 + Math['cos'](_0x1656ec) * _0x364b1c['size'], _0x5eb7c7 = _0x1f2545 + Math['sin'](_0x1656ec) * _0x364b1c['size'];
                    if (_0x4663ab === 0x0)
                        ctx['moveTo'](_0x3a42d4, _0x5eb7c7);
                    else
                        ctx['lineTo'](_0x3a42d4, _0x5eb7c7);
                }
                ctx['closePath'](), ctx['fill'](), ctx['globalAlpha'] = 0x1;
            }
        }
        ctx['save']();
        const _0x4ea916 = _0x388ec8['artifactAnim'] + time * 0.001;
        ctx['rotate'](_0x4ea916), ctx['fillStyle'] = _0x29dfab, ctx['strokeStyle'] = _0x1ac2d3, ctx['lineWidth'] = 2.5, ctx['beginPath']();
        for (let _0x27dd6f = 0x0; _0x27dd6f < 0x6; _0x27dd6f++) {
            const _0x16be1e = Math['PI'] / 0x3 * _0x27dd6f, _0x3551bc = Math['cos'](_0x16be1e) * _0x4c406c, _0x4e15b2 = Math['sin'](_0x16be1e) * _0x4c406c;
            if (_0x27dd6f === 0x0)
                ctx['moveTo'](_0x3551bc, _0x4e15b2);
            else
                ctx['lineTo'](_0x3551bc, _0x4e15b2);
        }
        ctx['closePath'](), ctx['fill'](), ctx['stroke'](), ctx['strokeStyle'] = _0x2180a1, ctx['lineWidth'] = 0x1, ctx['globalAlpha'] = 0.5, ctx['beginPath']();
        for (let _0xaf9234 = 0x0; _0xaf9234 < 0x6; _0xaf9234++) {
            const _0x20a174 = Math['PI'] / 0x3 * _0xaf9234 + Math['PI'] / 0x6, _0x1a2650 = Math['cos'](_0x20a174) * _0x4c406c * 0.35, _0x4211dd = Math['sin'](_0x20a174) * _0x4c406c * 0.35;
            if (_0xaf9234 === 0x0)
                ctx['moveTo'](_0x1a2650, _0x4211dd);
            else
                ctx['lineTo'](_0x1a2650, _0x4211dd);
        }
        ctx['closePath'](), ctx['stroke']();
        for (let _0x4c56d3 = 0x0; _0x4c56d3 < 0x6; _0x4c56d3++) {
            const _0x783262 = Math['PI'] / 0x3 * _0x4c56d3, _0x5ac338 = Math['cos'](_0x783262) * _0x4c406c * 0.65, _0x34262d = Math['sin'](_0x783262) * _0x4c406c * 0.65;
            ctx['beginPath']();
            for (let _0xd42298 = 0x0; _0xd42298 < 0x6; _0xd42298++) {
                const _0x131691 = Math['PI'] / 0x3 * _0xd42298, _0x5a3f37 = _0x5ac338 + Math['cos'](_0x131691) * _0x4c406c * 0.25, _0x335875 = _0x34262d + Math['sin'](_0x131691) * _0x4c406c * 0.25;
                if (_0xd42298 === 0x0)
                    ctx['moveTo'](_0x5a3f37, _0x335875);
                else
                    ctx['lineTo'](_0x5a3f37, _0x335875);
            }
            ctx['closePath'](), ctx['stroke']();
        }
        ctx['restore'](), ctx['save'](), ctx['rotate'](-_0x4ea916 * 1.5), ctx['strokeStyle'] = _0x1ac2d3, ctx['lineWidth'] = 1.5, ctx['globalAlpha'] = 0.7, ctx['setLineDash']([
            0x5,
            0x5
        ]), ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x4c406c * 0.85, 0x0, Math['PI'] * 0x2), ctx['stroke'](), ctx['setLineDash']([]), ctx['restore'](), ctx['globalAlpha'] = 0x1, ctx['closePath']();
    },
    'Clover': _0x3a39d2 => {
        ctx['lineWidth'] = _0x3a39d2['radius'] * 0.15, ctx['fillStyle'] = blendColor('#39b54a', '#FF0000', blendAmount(_0x3a39d2)), ctx['strokeStyle'] = blendColor('#2e933c', '#FF0000', blendAmount(_0x3a39d2));
        checkForFirstFrame(_0x3a39d2) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF');
        let _0x2a2d30 = 0x3;
        _0x3a39d2['rarity'] >= 0xc && (_0x2a2d30 = _0x3a39d2['rarity'] - 0x8);
        ctx['save'](), ctx['rotate'](0x1e * Math['PI'] / 0x168);
        for (let _0x4b0810 = 0x0; _0x4b0810 < _0x2a2d30; _0x4b0810++) {
            ctx['moveTo'](0x0, 0x0), ctx['beginPath'](), ctx['bezierCurveTo'](0x0, 0x0, -0.5 * _0x3a39d2['radius'], -0.5 * _0x3a39d2['radius'], -0.3 * _0x3a39d2['radius'], -0.8 * _0x3a39d2['radius']), ctx['quadraticCurveTo'](0x0, -1.15 * _0x3a39d2['radius'], 0.3 * _0x3a39d2['radius'], -0.8 * _0x3a39d2['radius']), ctx['bezierCurveTo'](0.5 * _0x3a39d2['radius'], -0.5 * _0x3a39d2['radius'], 0x0, 0x0, 0x0, 0x0), ctx['closePath'](), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](Math['PI'] * 0x2 / _0x2a2d30);
        }
        ctx['restore']();
    },
    'Dark\x20Spine': _0x211798 => {
        ctx['strokeStyle'] = blendColor('#3a1f1f', '#1a0f0f', blendAmount(_0x211798)), checkForFirstFrame(_0x211798) && (ctx['strokeStyle'] = '#ffffff'), ctx['lineWidth'] = _0x211798['radius'] * 0.4, ctx['beginPath'](), ctx['moveTo'](0x0, _0x211798['radius'] * 1.2), ctx['quadraticCurveTo'](_0x211798['radius'] * 0.05, 0x0, 0x0, _0x211798['radius'] * -1.2), ctx['stroke'](), ctx['closePath'](), ctx['strokeStyle'] = blendColor('#5a2d2d', '#2b1a1a', blendAmount(_0x211798)), checkForFirstFrame(_0x211798) && (ctx['strokeStyle'] = '#AAAAAA'), ctx['lineWidth'] = _0x211798['radius'] * 0.18, ctx['beginPath'](), ctx['moveTo'](0x0, _0x211798['radius'] * 0.6), ctx['quadraticCurveTo'](_0x211798['radius'] * -0.3, _0x211798['radius'] * 0.4, _0x211798['radius'] * -0.5, _0x211798['radius'] * 0.2), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['moveTo'](0x0, _0x211798['radius'] * 0.6), ctx['quadraticCurveTo'](_0x211798['radius'] * 0.3, _0x211798['radius'] * 0.4, _0x211798['radius'] * 0.5, _0x211798['radius'] * 0.2), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['moveTo'](0x0, _0x211798['radius'] * -0.2), ctx['quadraticCurveTo'](_0x211798['radius'] * -0.3, _0x211798['radius'] * -0.4, _0x211798['radius'] * -0.5, _0x211798['radius'] * -0.6), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['moveTo'](0x0, _0x211798['radius'] * -0.2), ctx['quadraticCurveTo'](_0x211798['radius'] * 0.3, _0x211798['radius'] * -0.4, _0x211798['radius'] * 0.5, _0x211798['radius'] * -0.6), ctx['stroke'](), ctx['closePath']();
    },
    'Cutter': _0x250898 => {
        ctx['lineWidth'] = 0x3, ctx['fillStyle'] = blendColor('#000000', '#FF0000', blendAmount(_0x250898)), ctx['save'](), ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x250898['radius'], 0x0, Math['PI'] * 0x2), ctx['rect'](_0x250898['radius'] * 0x2, -_0x250898['radius'] * 0x2, -_0x250898['radius'] * 0x4, _0x250898['radius'] * 0x4), ctx['closePath'](), ctx['clip'](), ctx['rotate'](Math['PI'] * time / 0x28a), ctx['beginPath']();
        for (let _0x15323b = 0x0; _0x15323b < 0x9; _0x15323b++) {
            ctx['rotate'](_0x15323b * Math['PI'] * 0x2 / 0x8), ctx['quadraticCurveTo'](0.39 * _0x250898['radius'], -0.9 * _0x250898['radius'], 0x1 * _0x250898['radius'], -0x1 * _0x250898['radius']), ctx['rotate'](-_0x15323b * Math['PI'] * 0x2 / 0x8);
        }
        ctx['fill'](), ctx['rotate'](-Math['PI'] * time / 0x28a), ctx['restore']();
    },
    'Coral': _0x3ddcbe => {
        ctx['strokeStyle'] = blendColor('#b04646', '#FF0000', blendAmount(_0x3ddcbe)), checkForFirstFrame(_0x3ddcbe) && (ctx['strokeStyle'] = '#FFFFFF'), ctx['lineWidth'] = _0x3ddcbe['radius'] * 0.35, ctx['beginPath'](), ctx['moveTo'](0x0, _0x3ddcbe['radius'] * 1.17), ctx['quadraticCurveTo'](0x0, _0x3ddcbe['radius'] * 0.85, _0x3ddcbe['radius'] * 0.6, _0x3ddcbe['radius'] * 0.35), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['moveTo'](_0x3ddcbe['radius'] * 0x0, _0x3ddcbe['radius'] * 1.17), ctx['quadraticCurveTo'](_0x3ddcbe['radius'] * 0.15, _0x3ddcbe['radius'] * 0.26, _0x3ddcbe['radius'] * -0.69, _0x3ddcbe['radius'] * -0.2), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['moveTo'](_0x3ddcbe['radius'] * 0x0, _0x3ddcbe['radius'] * 1.17), ctx['quadraticCurveTo'](_0x3ddcbe['radius'] * -0.05, _0x3ddcbe['radius'] * -0.3, _0x3ddcbe['radius'] * 0.56, _0x3ddcbe['radius'] * -0.75), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['moveTo'](_0x3ddcbe['radius'] * 0x0, _0x3ddcbe['radius'] * 1.17), ctx['quadraticCurveTo'](_0x3ddcbe['radius'] * 0.1, _0x3ddcbe['radius'] * -0.3, _0x3ddcbe['radius'] * -0.08, _0x3ddcbe['radius'] * -1.13), ctx['stroke'](), ctx['closePath'](), ctx['strokeStyle'] = blendColor('#f76767', '#FF0000', blendAmount(_0x3ddcbe)), checkForFirstFrame(_0x3ddcbe) && (ctx['strokeStyle'] = '#FFFFFF'), ctx['lineWidth'] = _0x3ddcbe['radius'] * 0.2, ctx['beginPath'](), ctx['moveTo'](0x0, _0x3ddcbe['radius'] * 1.17), ctx['quadraticCurveTo'](0x0, _0x3ddcbe['radius'] * 0.85, _0x3ddcbe['radius'] * 0.6, _0x3ddcbe['radius'] * 0.35), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['moveTo'](_0x3ddcbe['radius'] * 0x0, _0x3ddcbe['radius'] * 1.17), ctx['quadraticCurveTo'](_0x3ddcbe['radius'] * 0.15, _0x3ddcbe['radius'] * 0.26, _0x3ddcbe['radius'] * -0.69, _0x3ddcbe['radius'] * -0.2), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['moveTo'](_0x3ddcbe['radius'] * 0x0, _0x3ddcbe['radius'] * 1.17), ctx['quadraticCurveTo'](_0x3ddcbe['radius'] * -0.05, _0x3ddcbe['radius'] * -0.3, _0x3ddcbe['radius'] * 0.56, _0x3ddcbe['radius'] * -0.75), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['moveTo'](_0x3ddcbe['radius'] * 0x0, _0x3ddcbe['radius'] * 1.17), ctx['quadraticCurveTo'](_0x3ddcbe['radius'] * 0.1, _0x3ddcbe['radius'] * -0.3, _0x3ddcbe['radius'] * -0.08, _0x3ddcbe['radius'] * -1.13), ctx['stroke'](), ctx['closePath']();
    },
    'Bubble': _0xca5442 => {
        ctx['lineWidth'] = _0xca5442['radius'] / 0x5, ctx['fillStyle'] = blendColor('#ffffff', '#FF0000', Math['max'](0x0, blendAmount(_0xca5442))), ctx['strokeStyle'] = blendColor('#ffffff', '#FF0000', Math['max'](0x0, blendAmount(_0xca5442))), checkForFirstFrame(_0xca5442) && (ctx['fillStyle'] = '#ffffff', ctx['strokeStyle'] = '#ffffff'), ctx['globalAlpha'] *= 0.6, ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0xca5442['radius'] * 0x9 / 0xa, 0x0, Math['PI'] * 0x2), ctx['stroke'](), ctx['closePath'](), ctx['globalAlpha'] *= 0.6, ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0xca5442['radius'] * 0x8 / 0xa, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['arc'](-_0xca5442['radius'] * 0.45, 0x0, _0xca5442['radius'] * 0x1 / 0x4, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['globalAlpha'] *= 2.777777777;
    },
    'Shiny\x20Bubble': _0x45d201 => {
        ctx['lineWidth'] = _0x45d201['radius'] / 0x5, ctx['fillStyle'] = blendColor('#eeeeee', '#FF0000', blendAmount(_0x45d201));
        checkForFirstFrame(_0x45d201) && (ctx['fillStyle'] = '#FFFFFF');
        if (_0x45d201['particles']) {
            if (!Array['isArray'](_0x45d201['particles']))
                _0x45d201['particles'] = [];
        }
        if (!_0x45d201['particles'])
            _0x45d201['particles'] = [];
        let _0x2b76d1 = 0xa;
        if (_0x45d201['particles']['length'] < _0x2b76d1) {
            if (_0x45d201['particles']['length'] < _0x2b76d1)
                for (let _0x3ac049 = 0x0; _0x3ac049 < _0x2b76d1; _0x3ac049++) {
                    _0x45d201['particles']['push']({
                        'distance': 0.325 * Math['random'](),
                        'angle': Math['PI'] * 0x2 * Math['random'](),
                        'rotationSpeed': Math['random']() * Math['PI'] / 0x10,
                        'size': 0.75 * Math['random']() * 0.5
                    });
                }
        }
        for (let _0x31f8e7 of _0x45d201['particles']) {
            _0x31f8e7['distance'] += 0.01 * dt / 16.6, _0x31f8e7['size'] -= 0.01 * dt / 16.6, _0x31f8e7['size'] = Math['max'](0.05, _0x31f8e7['size']), _0x31f8e7['angle'] += _0x31f8e7['rotationSpeed'] * dt / 16.6, ctx['globalAlpha'] *= (0x1 - _0x31f8e7['distance']) * 0.75, ctx['beginPath'](), ctx['arc'](Math['cos'](_0x31f8e7['angle']) * _0x31f8e7['distance'] * _0x45d201['radius'] * 0x2, Math['sin'](_0x31f8e7['angle']) * _0x31f8e7['distance'] * _0x45d201['radius'] * 0x2, _0x45d201['radius'] * _0x31f8e7['size'], 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['globalAlpha'] /= (0x1 - _0x31f8e7['distance']) * 0.75, _0x31f8e7['distance'] > 0.3 && (_0x31f8e7['distance'] = 0.1 * Math['random']() * dt / 16.6, (_0x31f8e7['angle'] = Math['PI'] * 0x2 * Math['random'](), _0x31f8e7['rotationSpeed'] = Math['random']() * Math['PI'] / 0x10, _0x31f8e7['size'] = 0.75 * Math['random']() * 0.5));
        }
        ctx['fillStyle'] = blendColor('#fdff84', '#FF0000', Math['max'](0x0, blendAmount(_0x45d201))), ctx['strokeStyle'] = blendColor('#fdff84', '#FF0000', Math['max'](0x0, blendAmount(_0x45d201)));
        checkForFirstFrame(_0x45d201) && (ctx['fillStyle'] = '#ffffff', ctx['strokeStyle'] = '#ffffff');
        let _0x466bb7 = ctx['globalAlpha'];
        ctx['globalAlpha'] *= 0.6 + (Math['cos'](Date['now']() / 0x32) + 0x1) / 0xa, ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x45d201['radius'] * 0x9 / 0xa, 0x0, Math['PI'] * 0x2), ctx['stroke'](), ctx['closePath'](), ctx['globalAlpha'] *= 0.6, ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x45d201['radius'] * 0x8 / 0xa, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['arc'](-_0x45d201['radius'] * 0.45, 0x0, _0x45d201['radius'] * 0x1 / 0x4, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['globalAlpha'] = _0x466bb7;
    },
    'Air': _0x5d4e82 => {
    },
    'Starfish': _0xf897b3 => {
        ctx['lineWidth'] = _0xf897b3['radius'] * 0.14, ctx['strokeStyle'] = blendColor('#a9403e', '#FF0000', blendAmount(_0xf897b3)), ctx['fillStyle'] = blendColor('#d14f4d', '#FF0000', blendAmount(_0xf897b3)), checkForFirstFrame(_0xf897b3) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF'), ctx['beginPath'](), ctx['lineTo'](_0xf897b3['radius'] * -0.84, _0xf897b3['radius'] * 0.65), ctx['quadraticCurveTo'](_0xf897b3['radius'] * -0.99, _0xf897b3['radius'] * 0.52, _0xf897b3['radius'] * -0.87, _0xf897b3['radius'] * 0.37), ctx['quadraticCurveTo'](_0xf897b3['radius'] * 0.23, _0xf897b3['radius'] * -1.25, _0xf897b3['radius'] * 0.57, _0xf897b3['radius'] * -0.99), ctx['quadraticCurveTo'](_0xf897b3['radius'] * 0.98, _0xf897b3['radius'] * -0.78, _0xf897b3['radius'] * -0.07, _0xf897b3['radius'] * 0.93), ctx['quadraticCurveTo'](_0xf897b3['radius'] * -0.18, _0xf897b3['radius'] * 1.03, _0xf897b3['radius'] * -0.31, _0xf897b3['radius'] * 0.98), ctx['lineTo'](_0xf897b3['radius'] * -0.84, _0xf897b3['radius'] * 0.65), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['fillStyle'] = blendColor('#d4766c', '#FF0000', blendAmount(_0xf897b3)), checkForFirstFrame(_0xf897b3) && (ctx['fillStyle'] = '#FFFFFF'), ctx['beginPath'](), ctx['arc'](_0xf897b3['radius'] * -0.18, _0xf897b3['radius'] * 0.21, _0xf897b3['radius'] * 0.22, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['arc'](_0xf897b3['radius'] * 0.09, _0xf897b3['radius'] * -0.23, _0xf897b3['radius'] * 0.165, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['arc'](_0xf897b3['radius'] * 0.31, _0xf897b3['radius'] * -0.57, _0xf897b3['radius'] * 0.11, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath']();
    },
    'Brisingida': _0x555909 => {
        ctx['lineWidth'] = _0x555909['radius'] * 0.14, ctx['strokeStyle'] = blendColor('#3e87a9ff', '#FF0000', blendAmount(_0x555909)), ctx['fillStyle'] = blendColor('#4db2d1ff', '#FF0000', blendAmount(_0x555909)), checkForFirstFrame(_0x555909) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF'), ctx['beginPath'](), ctx['lineTo'](_0x555909['radius'] * -0.84, _0x555909['radius'] * 0.65), ctx['quadraticCurveTo'](_0x555909['radius'] * -0.99, _0x555909['radius'] * 0.52, _0x555909['radius'] * -0.87, _0x555909['radius'] * 0.37), ctx['quadraticCurveTo'](_0x555909['radius'] * 0.23, _0x555909['radius'] * -1.25, _0x555909['radius'] * 0.57, _0x555909['radius'] * -0.99), ctx['quadraticCurveTo'](_0x555909['radius'] * 0.98, _0x555909['radius'] * -0.78, _0x555909['radius'] * -0.07, _0x555909['radius'] * 0.93), ctx['quadraticCurveTo'](_0x555909['radius'] * -0.18, _0x555909['radius'] * 1.03, _0x555909['radius'] * -0.31, _0x555909['radius'] * 0.98), ctx['lineTo'](_0x555909['radius'] * -0.84, _0x555909['radius'] * 0.65), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['fillStyle'] = blendColor('#9c6cd4ff', '#FF0000', blendAmount(_0x555909)), checkForFirstFrame(_0x555909) && (ctx['fillStyle'] = '#FFFFFF'), ctx['beginPath'](), ctx['arc'](_0x555909['radius'] * -0.18, _0x555909['radius'] * 0.21, _0x555909['radius'] * 0.22, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['arc'](_0x555909['radius'] * 0.09, _0x555909['radius'] * -0.23, _0x555909['radius'] * 0.165, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['arc'](_0x555909['radius'] * 0.31, _0x555909['radius'] * -0.57, _0x555909['radius'] * 0.11, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath']();
    },
    'Compass': _0x88df18 => {
        ctx['lineWidth'] = 2.4, ctx['beginPath'](), ctx['fillStyle'] = blendColor('#3498db', '#FF0000', blendAmount(_0x88df18)), ctx['strokeStyle'] = blendColor('#bfbfbf', '#FF0000', blendAmount(_0x88df18));
        let _0x1ee974 = blendColor('#e74c3c', '#FF0000', blendAmount(_0x88df18)), _0x5a23c0 = blendColor('#ecf0f1', '#FF0000', blendAmount(_0x88df18)), _0x4cce0b = ctx['strokeStyle'];
        if (_0x88df18['glow'] >= 0x0) {
            ctx['save']();
            let _0x138929 = Colors['rarities'][_0x88df18['glow']]['color'], _0x3d3146 = 0x0;
            _0x88df18['glow'] >= 0x8 && (_0x3d3146 += 0.5), _0x88df18['glow'] >= 0xb && (_0x3d3146 += 0.5), _0x88df18['glow'] == 0xb && (_0x138929 = '#db68f7'), ctx['fillStyle'] = _0x138929, ctx['globalAlpha'] = 0.7, ctx['arc'](0x0, 0x0, _0x88df18['radius'] * (0x2 + _0x3d3146 + 0.3 * Math['cos'](Date['now']() / 0x1f4)), 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['globalAlpha'] = 0x1, ctx['restore'](), _0x1ee974 = blendColor(_0x138929, '#FF0000', blendAmount(_0x88df18)), _0x4cce0b = blendColor(Colors['rarities'][_0x88df18['glow']]['border'], '#FF0000', blendAmount(_0x88df18));
        }
        checkForFirstFrame(_0x88df18) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF', _0x1ee974 = '#FFFFFF', _0x5a23c0 = '#FFFFFF'), ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x88df18['radius'], 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['fillStyle'] = _0x1ee974, ctx['beginPath'](), ctx['lineTo'](0x0, -_0x88df18['radius'] * 0.4), ctx['lineTo'](_0x88df18['radius'], 0x0), ctx['lineTo'](0x0, _0x88df18['radius'] * 0.4), ctx['fill'](), ctx['closePath'](), ctx['fillStyle'] = _0x5a23c0, ctx['beginPath'](), ctx['lineTo'](0x0, -_0x88df18['radius'] * 0.4), ctx['lineTo'](-_0x88df18['radius'], 0x0), ctx['lineTo'](0x0, _0x88df18['radius'] * 0.4), ctx['fill'](), ctx['closePath'](), ctx['fillStyle'] = _0x4cce0b, ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x88df18['radius'] / 0x4, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath']();
    },
    'Waterlogged\x20Compass': _0x448113 => {
        ctx['lineWidth'] = 2.4, ctx['beginPath'](), ctx['fillStyle'] = blendColor('#70a7cf', '#FF0000', blendAmount(_0x448113)), ctx['strokeStyle'] = blendColor('#bfbfbf', '#FF0000', blendAmount(_0x448113));
        let _0x6191ac = blendColor('#3c3fe7', '#FF0000', blendAmount(_0x448113)), _0x429cc0 = blendColor('#ecf0f1', '#FF0000', blendAmount(_0x448113)), _0x259fb6 = ctx['strokeStyle'];
        if (_0x448113['glow'] > 0x0) {
            ctx['save']();
            let _0x53dc88 = 'hsl(' + Date['now']() / 0xf % 0x168 + ',\x2050%,\x2050%)', _0x48e125 = 0x0;
            ctx['fillStyle'] = _0x53dc88, ctx['globalAlpha'] = 0.7, ctx['arc'](0x0, 0x0, _0x448113['radius'] * (0x2 + _0x48e125 + 0.3 * Math['cos'](Date['now']() / 0x1f4)), 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['globalAlpha'] = 0x1, ctx['restore'](), _0x6191ac = blendColor(_0x53dc88, '#FF0000', blendAmount(_0x448113)), _0x259fb6 = blendColor(Colors['rarities'][_0x448113['glow']]['border'], '#FF0000', blendAmount(_0x448113));
        }
        checkForFirstFrame(_0x448113) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF', _0x6191ac = '#FFFFFF', _0x429cc0 = '#FFFFFF'), ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x448113['radius'], 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['fillStyle'] = _0x6191ac, ctx['beginPath'](), ctx['lineTo'](0x0, -_0x448113['radius'] * 0.4), ctx['lineTo'](_0x448113['radius'], 0x0), ctx['lineTo'](0x0, _0x448113['radius'] * 0.4), ctx['fill'](), ctx['closePath'](), ctx['fillStyle'] = _0x429cc0, ctx['beginPath'](), ctx['lineTo'](0x0, -_0x448113['radius'] * 0.4), ctx['lineTo'](-_0x448113['radius'], 0x0), ctx['lineTo'](0x0, _0x448113['radius'] * 0.4), ctx['fill'](), ctx['closePath'](), ctx['fillStyle'] = _0x259fb6, ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x448113['radius'] / 0x4, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath']();
    },
    'Waterlogged\x20Dark\x20Compass': _0x76111e => {
        ctx['lineWidth'] = 2.4, ctx['beginPath'](), ctx['fillStyle'] = blendColor('#8f5830', '#FF0000', blendAmount(_0x76111e)), ctx['strokeStyle'] = blendColor('#404040', '#FF0000', blendAmount(_0x76111e));
        let _0x4697c3 = blendColor('#c3c018', '#FF0000', blendAmount(_0x76111e)), _0x5f1964 = blendColor('#130f0e', '#FF0000', blendAmount(_0x76111e)), _0x212cc9 = ctx['strokeStyle'];
        if (_0x76111e['glow'] > 0x0) {
            ctx['save']();
            let _0x4a286c = 'hsl(' + Date['now']() / 0xf % 0x168 + ',\x2050%,\x2050%)', _0x21d12b = 0x0;
            ctx['fillStyle'] = _0x4a286c, ctx['globalAlpha'] = 0.7, ctx['arc'](0x0, 0x0, _0x76111e['radius'] * (0x2 + _0x21d12b + 0.3 * Math['cos'](Date['now']() / 0x1f4)), 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['globalAlpha'] = 0x1, ctx['restore'](), _0x4697c3 = blendColor(_0x4a286c, '#FF0000', blendAmount(_0x76111e)), _0x212cc9 = blendColor(Colors['rarities'][_0x76111e['glow']]['border'], '#FF0000', blendAmount(_0x76111e));
        }
        checkForFirstFrame(_0x76111e) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF', _0x4697c3 = '#FFFFFF', _0x5f1964 = '#FFFFFF'), ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x76111e['radius'], 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['fillStyle'] = _0x4697c3, ctx['beginPath'](), ctx['lineTo'](0x0, -_0x76111e['radius'] * 0.4), ctx['lineTo'](_0x76111e['radius'], 0x0), ctx['lineTo'](0x0, _0x76111e['radius'] * 0.4), ctx['fill'](), ctx['closePath'](), ctx['fillStyle'] = _0x5f1964, ctx['beginPath'](), ctx['lineTo'](0x0, -_0x76111e['radius'] * 0.4), ctx['lineTo'](-_0x76111e['radius'], 0x0), ctx['lineTo'](0x0, _0x76111e['radius'] * 0.4), ctx['fill'](), ctx['closePath'](), ctx['fillStyle'] = _0x212cc9, ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x76111e['radius'] / 0x4, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath']();
    },
    'Dark\x20Compass': _0x4f50e8 => {
        ctx['lineWidth'] = 2.4, ctx['beginPath'](), ctx['fillStyle'] = blendColor('#cb6724', '#FF0000', blendAmount(_0x4f50e8)), ctx['strokeStyle'] = blendColor('#404040', '#FF0000', blendAmount(_0x4f50e8));
        let _0x208dc2 = blendColor('#18b3c3', '#FF0000', blendAmount(_0x4f50e8)), _0x26dcbe = blendColor('#130f0e', '#FF0000', blendAmount(_0x4f50e8)), _0x41f9bf = ctx['strokeStyle'];
        if (_0x4f50e8['glow'] >= 0x0) {
            ctx['save']();
            let _0x4611c8 = Colors['rarities'][_0x4f50e8['glow']]['color'], _0x1a7477 = 0x0;
            _0x4f50e8['glow'] >= 0x8 && (_0x1a7477 += 0.5), _0x4f50e8['glow'] >= 0xb && (_0x1a7477 += 0.5), _0x4f50e8['glow'] == 0xb && (_0x4611c8 = '#db68f7'), ctx['fillStyle'] = _0x4611c8, ctx['globalAlpha'] = 0.7, ctx['arc'](0x0, 0x0, _0x4f50e8['radius'] * (0x2 + _0x1a7477 + 0.3 * Math['cos'](Date['now']() / 0x1f4)), 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['globalAlpha'] = 0x1, ctx['restore'](), _0x208dc2 = blendColor(_0x4611c8, '#FF0000', blendAmount(_0x4f50e8)), _0x41f9bf = blendColor(Colors['rarities'][_0x4f50e8['glow']]['border'], '#FF0000', blendAmount(_0x4f50e8));
        }
        checkForFirstFrame(_0x4f50e8) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF', _0x208dc2 = '#FFFFFF', _0x26dcbe = '#FFFFFF'), ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x4f50e8['radius'], 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['fillStyle'] = _0x208dc2, ctx['beginPath'](), ctx['lineTo'](0x0, -_0x4f50e8['radius'] * 0.4), ctx['lineTo'](_0x4f50e8['radius'], 0x0), ctx['lineTo'](0x0, _0x4f50e8['radius'] * 0.4), ctx['fill'](), ctx['closePath'](), ctx['fillStyle'] = _0x26dcbe, ctx['beginPath'](), ctx['lineTo'](0x0, -_0x4f50e8['radius'] * 0.4), ctx['lineTo'](-_0x4f50e8['radius'], 0x0), ctx['lineTo'](0x0, _0x4f50e8['radius'] * 0.4), ctx['fill'](), ctx['closePath'](), ctx['fillStyle'] = _0x41f9bf, ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x4f50e8['radius'] / 0x4, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath']();
    },
    'Claw': _0x2e8dc6 => {
        ctx['strokeStyle'] = blendColor('#3e1f1b', '#FF0000', blendAmount(_0x2e8dc6)), ctx['fillStyle'] = blendColor('#4d2621', '#FF0000', blendAmount(_0x2e8dc6)), checkForFirstFrame(_0x2e8dc6) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF'), ctx['lineWidth'] = _0x2e8dc6['radius'] * 0.3, ctx['beginPath'](), ctx['lineTo'](_0x2e8dc6['radius'] * -1.045, _0x2e8dc6['radius'] * 0.175), ctx['quadraticCurveTo'](_0x2e8dc6['radius'] * -0.9, _0x2e8dc6['radius'] * -0.14, _0x2e8dc6['radius'] * -0.985, _0x2e8dc6['radius'] * -0.41), ctx['quadraticCurveTo'](_0x2e8dc6['radius'] * 0.68, _0x2e8dc6['radius'] * -1.14, _0x2e8dc6['radius'] * 1.27, _0x2e8dc6['radius'] * 0.55), ctx['lineTo'](_0x2e8dc6['radius'] * 0.59, _0x2e8dc6['radius'] * 0.05), ctx['lineTo'](_0x2e8dc6['radius'] * 0.8, _0x2e8dc6['radius'] * 0.8), ctx['quadraticCurveTo'](_0x2e8dc6['radius'] * -0.2, _0x2e8dc6['radius'] * -0.2, _0x2e8dc6['radius'] * -1.045, _0x2e8dc6['radius'] * 0.175), ctx['fill'](), ctx['stroke'](), ctx['closePath']();
    },
    'Lightning': _0x5bd540 => {
        ctx['strokeStyle'] = blendColor('#21c4b9', '#FF0000', blendAmount(_0x5bd540)), ctx['fillStyle'] = blendColor('#29f2e5', '#FF0000', blendAmount(_0x5bd540));
        checkForFirstFrame(_0x5bd540) && (ctx['fillStyle'] = '#ffffff', ctx['strokeStyle'] = '#ffffff');
        ctx['lineWidth'] = _0x5bd540['radius'] * 0.2, ctx['beginPath']();
        for (let _0x4a1f99 = 0x0; _0x4a1f99 < 0xa; _0x4a1f99++) {
            let _0x1bf46b = _0x4a1f99 * Math['PI'] / 0x5;
            ctx['lineTo'](Math['cos'](_0x1bf46b) * _0x5bd540['radius'] * 0.7, Math['sin'](_0x1bf46b) * _0x5bd540['radius'] * 0.7), ctx['lineTo'](Math['cos'](_0x1bf46b + Math['PI'] / 0xa) * _0x5bd540['radius'] * 1.4, Math['sin'](_0x1bf46b + Math['PI'] / 0xa) * _0x5bd540['radius'] * 1.4);
        }
        ctx['lineTo'](_0x5bd540['radius'] * 0.7, 0x0), ctx['fill'](), ctx['stroke']();
    },
    'Shiny\x20Lightning': _0x3ab1f2 => {
        ctx['strokeStyle'] = blendColor('#b2b43b', '#FF0000', blendAmount(_0x3ab1f2)), ctx['fillStyle'] = blendColor('#dcdf4a', '#FF0000', blendAmount(_0x3ab1f2));
        checkForFirstFrame(_0x3ab1f2) && (ctx['fillStyle'] = '#ffffff', ctx['strokeStyle'] = '#ffffff');
        ctx['lineWidth'] = _0x3ab1f2['radius'] * 0.2, ctx['beginPath']();
        for (let _0x1b799d = 0x0; _0x1b799d < 0xa; _0x1b799d++) {
            let _0x477ee9 = _0x1b799d * Math['PI'] / 0x5;
            ctx['lineTo'](Math['cos'](_0x477ee9) * _0x3ab1f2['radius'] * 0.7, Math['sin'](_0x477ee9) * _0x3ab1f2['radius'] * 0.7), ctx['lineTo'](Math['cos'](_0x477ee9 + Math['PI'] / 0xa) * _0x3ab1f2['radius'] * 1.4, Math['sin'](_0x477ee9 + Math['PI'] / 0xa) * _0x3ab1f2['radius'] * 1.4);
        }
        ctx['lineTo'](_0x3ab1f2['radius'] * 0.7, 0x0), ctx['fill'](), ctx['stroke']();
    },
    'Blood\x20Jolt': _0x375a20 => {
        ctx['strokeStyle'] = blendColor('#8a2525ff', '#FF0000', blendAmount(_0x375a20)), ctx['fillStyle'] = blendColor('#a82d2dff', '#FF0000', blendAmount(_0x375a20));
        checkForFirstFrame(_0x375a20) && (ctx['fillStyle'] = '#ffffff', ctx['strokeStyle'] = '#ffffff');
        ctx['lineWidth'] = _0x375a20['radius'] * 0.2, ctx['beginPath']();
        for (let _0x5a7409 = 0x0; _0x5a7409 < 0x8; _0x5a7409++) {
            let _0x19300f = _0x5a7409 * Math['PI'] / 0x4;
            ctx['lineTo'](Math['cos'](_0x19300f) * _0x375a20['radius'] * 0.7, Math['sin'](_0x19300f) * _0x375a20['radius'] * 0.7), ctx['lineTo'](Math['cos'](_0x19300f + Math['PI'] / 0xa) * _0x375a20['radius'] * 1.4, Math['sin'](_0x19300f + Math['PI'] / 0xa) * _0x375a20['radius'] * 1.4);
        }
        ctx['lineTo'](_0x375a20['radius'] * 0.7, 0x0), ctx['fill'](), ctx['stroke']();
    },
    'Jolt': _0x56e409 => {
        ctx['strokeStyle'] = blendColor('#00cc84', '#FF0000', blendAmount(_0x56e409)), ctx['fillStyle'] = blendColor('#00fca4', '#FF0000', blendAmount(_0x56e409));
        checkForFirstFrame(_0x56e409) && (ctx['fillStyle'] = '#ffffff', ctx['strokeStyle'] = '#ffffff');
        ctx['lineWidth'] = _0x56e409['radius'] * 0.2, ctx['beginPath']();
        for (let _0x407144 = 0x0; _0x407144 < 0x8; _0x407144++) {
            let _0x1df263 = _0x407144 * Math['PI'] / 0x4;
            ctx['lineTo'](Math['cos'](_0x1df263) * _0x56e409['radius'] * 0.7, Math['sin'](_0x1df263) * _0x56e409['radius'] * 0.7), ctx['lineTo'](Math['cos'](_0x1df263 + Math['PI'] / 0xa) * _0x56e409['radius'] * 1.4, Math['sin'](_0x1df263 + Math['PI'] / 0xa) * _0x56e409['radius'] * 1.4);
        }
        ctx['lineTo'](_0x56e409['radius'] * 0.7, 0x0), ctx['fill'](), ctx['stroke']();
    },
    'Fangs': _0x5f327d => {
        ctx['strokeStyle'] = blendColor('#7e0d0d', '#FF0000', blendAmount(_0x5f327d)), ctx['fillStyle'] = blendColor('#9c1010', '#FF0000', blendAmount(_0x5f327d)), checkForFirstFrame(_0x5f327d) && (ctx['fillStyle'] = '#ffffff', ctx['strokeStyle'] = '#ffffff'), ctx['lineWidth'] = _0x5f327d['radius'] * 0.22, ctx['beginPath'](), ctx['moveTo'](-_0x5f327d['radius'] * 0.52, -_0x5f327d['radius'] * 0.815), ctx['lineTo'](-_0x5f327d['radius'] * 0.51, -_0x5f327d['radius'] * 0.11), ctx['quadraticCurveTo'](-_0x5f327d['radius'] * 0.53, _0x5f327d['radius'] * 0.35, -_0x5f327d['radius'] * 0.18, _0x5f327d['radius'] * 0.46), ctx['lineTo'](_0x5f327d['radius'] * 0.515, _0x5f327d['radius'] * 0.785), ctx['lineTo'](_0x5f327d['radius'] * 0.51, _0x5f327d['radius'] * 0.1), ctx['quadraticCurveTo'](_0x5f327d['radius'] * 0.56, _0x5f327d['radius'] * -0.37, _0x5f327d['radius'] * 0.11, _0x5f327d['radius'] * -0.525), ctx['lineTo'](-_0x5f327d['radius'] * 0.52, -_0x5f327d['radius'] * 0.815), ctx['fill'](), ctx['stroke'](), ctx['closePath']();
    },
    'Jelly': _0xe76309 => {
        ctx['strokeStyle'] = blendColor('#bbb9e4', '#FF0000', blendAmount(_0xe76309)), ctx['fillStyle'] = blendColor('#bbb9e4', '#FF0000', blendAmount(_0xe76309)), checkForFirstFrame(_0xe76309) && (ctx['fillStyle'] = '#ffffff', ctx['strokeStyle'] = '#ffffff'), ctx['globalAlpha'] *= 0.5, ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0xe76309['radius'], 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['globalAlpha'] *= 0x2, ctx['lineWidth'] = _0xe76309['radius'] * 0.25, ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0xe76309['radius'], 0x0, Math['PI'] * 0x2), ctx['stroke'](), ctx['closePath'](), ctx['globalAlpha'] *= 0.7, ctx['beginPath'](), ctx['arc'](_0xe76309['radius'] * 0.16, _0xe76309['radius'] * 0.5, _0xe76309['radius'] * 0.33, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['arc'](_0xe76309['radius'] * -0.66, _0xe76309['radius'] * 0.25, _0xe76309['radius'] * 0.12, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['arc'](_0xe76309['radius'] * -0.46, _0xe76309['radius'] * -0.29, _0xe76309['radius'] * 0.25, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['arc'](_0xe76309['radius'] * 0.21, _0xe76309['radius'] * -0.21, _0xe76309['radius'] * 0.165, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['arc'](0x0, _0xe76309['radius'] * -0.82, _0xe76309['radius'] * 0.164, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['globalAlpha'] *= 0x1 / 0.7;
    },
    'FlowerFace': _0x11a409 => {
        const _0x3ec87b = room['flowers'][window['selfId']];
        if (_0x3ec87b === undefined)
            return;
        _0x3ec87b['drawFlower'](0x0, 0x0, _0x11a409['radius']);
    },
    'TanksmithProjectile': _0x40b8d0 => {
        ctx['beginPath'](), ctx['fillStyle'] = blendColor('#bfbfbf', '#FF0000', blendAmount(_0x40b8d0)), ctx['strokeStyle'] = blendColor('#868686', '#FF0000', blendAmount(_0x40b8d0)), checkForFirstFrame(_0x40b8d0) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF'), ctx['arc'](0x0, 0x0, _0x40b8d0['radius'], 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath']();
    },
    'Pearl': _0x3b9f86 => {
        ctx['lineWidth'] = _0x3b9f86['radius'] / 0x5, ctx['fillStyle'] = blendColor('#fffcd1', '#FF0000', blendAmount(_0x3b9f86)), ctx['strokeStyle'] = blendColor('#cfcca9', '#FF0000', blendAmount(_0x3b9f86));
        let _0x3d7028 = blendColor('#ffffff', '#FF0000', blendAmount(_0x3b9f86));
        checkForFirstFrame(_0x3b9f86) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF', _0x3d7028 = '#FFFFFF'), ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x3b9f86['radius'], 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['fillStyle'] = _0x3d7028, ctx['beginPath'](), ctx['arc'](_0x3b9f86['radius'] * 0.3, -_0x3b9f86['radius'] * 0.3, _0x3b9f86['radius'] * 0.3, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath']();
    },
    'Sponge': _0x21d042 => {
        ctx['fillStyle'] = blendColor('#efc99a', '#FF0000', blendAmount(_0x21d042)), ctx['strokeStyle'] = blendColor('#c2a37d', '#FF0000', blendAmount(_0x21d042));
        checkForFirstFrame(_0x21d042) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF');
        ctx['lineWidth'] = _0x21d042['radius'] * 0.2, ctx['beginPath'](), ctx['moveTo'](_0x21d042['radius'] * 0.7, 0x0);
        for (let _0x3f6d5c = Math['PI'] * 0x1 / 0x7; _0x3f6d5c < Math['PI'] * 0x2; _0x3f6d5c += Math['PI'] * 0x2 / 0x7) {
            ctx['quadraticCurveTo'](Math['cos'](_0x3f6d5c) * _0x21d042['radius'] * 1.2, Math['sin'](_0x3f6d5c) * _0x21d042['radius'] * 1.2, Math['cos'](_0x3f6d5c + Math['PI'] * 0x1 / 0x7) * _0x21d042['radius'] * 0.7, Math['sin'](_0x3f6d5c + Math['PI'] * 0x1 / 0x7) * _0x21d042['radius'] * 0.7);
        }
        ctx['fill'](), ctx['stroke'](), ctx['closePath']();
    },
    'Shell': _0x294756 => {
        ctx['strokeStyle'] = blendColor('#ccb36d', '#FF0000', blendAmount(_0x294756)), ctx['fillStyle'] = blendColor('#fcdd86', '#FF0000', blendAmount(_0x294756)), checkForFirstFrame(_0x294756) && (ctx['fillStyle'] = '#ffffff', ctx['strokeStyle'] = '#ffffff'), ctx['lineWidth'] = _0x294756['radius'] * 0.2, ctx['beginPath'](), ctx['lineTo'](_0x294756['radius'] * -0.73, _0x294756['radius'] * -0.375), ctx['lineTo'](_0x294756['radius'] * 0.39, _0x294756['radius'] * -1.15), ctx['arcTo'](_0x294756['radius'] * 3.3, _0x294756['radius'] * 0.21, _0x294756['radius'] * 0.14, _0x294756['radius'] * 1.19, _0x294756['radius'] * 1.24), ctx['lineTo'](_0x294756['radius'] * 0.14, _0x294756['radius'] * 1.19), ctx['lineTo'](_0x294756['radius'] * 0.14, _0x294756['radius'] * 1.19), ctx['lineTo'](_0x294756['radius'] * -0.78, _0x294756['radius'] * 0.24), ctx['quadraticCurveTo'](_0x294756['radius'] * -0.94, _0x294756['radius'] * -0.06, _0x294756['radius'] * -0.73, _0x294756['radius'] * -0.375), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['lineWidth'] = _0x294756['radius'] * 0.16, ctx['beginPath'](), ctx['lineTo'](_0x294756['radius'] * -0.45, _0x294756['radius'] * -0.24), ctx['lineTo'](_0x294756['radius'] * 0.44, _0x294756['radius'] * -0.585), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['lineTo'](_0x294756['radius'] * -0.37, _0x294756['radius'] * -0.115), ctx['lineTo'](_0x294756['radius'] * 0.62, _0x294756['radius'] * -0.19), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['lineTo'](_0x294756['radius'] * -0.39, _0x294756['radius'] * 0.05), ctx['lineTo'](_0x294756['radius'] * 0.57, _0x294756['radius'] * 0.31), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['lineTo'](_0x294756['radius'] * -0.47, _0x294756['radius'] * 0.16), ctx['lineTo'](_0x294756['radius'] * 0.31, _0x294756['radius'] * 0.656), ctx['stroke'](), ctx['closePath']();
    },
    'Bloodshot\x20Eye': _0x23c0ee => {
        ctx['lineWidth'] = 0.1 * _0x23c0ee['radius'], ctx['beginPath'](), ctx['fillStyle'] = blendColor('#44173d', '#FF0000', blendAmount(_0x23c0ee)), ctx['strokeStyle'] = blendColor('#44173d', '#FF0000', blendAmount(_0x23c0ee)), checkForFirstFrame(_0x23c0ee) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF'), ctx['beginPath'](), ctx['lineTo'](0x0, -_0x23c0ee['radius'] * 0.9), ctx['quadraticCurveTo'](_0x23c0ee['radius'] * 0.75, 0x0, 0x0, _0x23c0ee['radius'] * 0.9), ctx['quadraticCurveTo'](-_0x23c0ee['radius'] * 0.75, 0x0, 0x0, -_0x23c0ee['radius'] * 0.9), ctx['fill'](), ctx['closePath'](), ctx['fillStyle'] = blendColor('#dbaaccff', '#FF0000', blendAmount(_0x23c0ee)), ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x23c0ee['radius'] * 0.4, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['lineTo'](0x0, -_0x23c0ee['radius'] * 0.9), ctx['quadraticCurveTo'](_0x23c0ee['radius'] * 0.75, 0x0, 0x0, _0x23c0ee['radius'] * 0.9), ctx['quadraticCurveTo'](-_0x23c0ee['radius'] * 0.75, 0x0, 0x0, -_0x23c0ee['radius'] * 0.9), ctx['stroke'](), ctx['closePath']();
    },
    'Third\x20Eye': _0x5dcef7 => {
        ctx['lineWidth'] = 0.1 * _0x5dcef7['radius'], ctx['beginPath'](), ctx['fillStyle'] = blendColor('#000000', '#FF0000', blendAmount(_0x5dcef7)), ctx['strokeStyle'] = blendColor('#000000', '#FF0000', blendAmount(_0x5dcef7)), checkForFirstFrame(_0x5dcef7) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF'), ctx['beginPath'](), ctx['lineTo'](0x0, -_0x5dcef7['radius'] * 0.9), ctx['quadraticCurveTo'](_0x5dcef7['radius'] * 0.75, 0x0, 0x0, _0x5dcef7['radius'] * 0.9), ctx['quadraticCurveTo'](-_0x5dcef7['radius'] * 0.75, 0x0, 0x0, -_0x5dcef7['radius'] * 0.9), ctx['fill'](), ctx['closePath'](), ctx['fillStyle'] = blendColor('#ffffff', '#FF0000', blendAmount(_0x5dcef7)), ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x5dcef7['radius'] * 0.4, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['lineTo'](0x0, -_0x5dcef7['radius'] * 0.9), ctx['quadraticCurveTo'](_0x5dcef7['radius'] * 0.75, 0x0, 0x0, _0x5dcef7['radius'] * 0.9), ctx['quadraticCurveTo'](-_0x5dcef7['radius'] * 0.75, 0x0, 0x0, -_0x5dcef7['radius'] * 0.9), ctx['stroke'](), ctx['closePath']();
    },
    'Blood\x20Mandible': _0x28582a => {
        ctx['lineWidth'] = 0x3, ctx['beginPath'](), ctx['fillStyle'] = blendColor('#ec2d20ff', '#FF0000', blendAmount(_0x28582a)), ctx['strokeStyle'] = blendColor('#c50e01ff', '#FF0000', blendAmount(_0x28582a)), checkForFirstFrame(_0x28582a) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF'), ctx['beginPath'](), ctx['moveTo'](_0x28582a['radius'] * -0.82, _0x28582a['radius'] * -1.03), ctx['quadraticCurveTo'](_0x28582a['radius'] * 0.21, _0x28582a['radius'] * -0.7, _0x28582a['radius'] * 0.44, _0x28582a['radius'] * -0.3), ctx['quadraticCurveTo'](_0x28582a['radius'] * 0.78, _0x28582a['radius'] * 0.2, _0x28582a['radius'] * 0.74, _0x28582a['radius'] * 0.76), ctx['lineTo'](_0x28582a['radius'] * 0.47, _0x28582a['radius'] * 0.97), ctx['lineTo'](_0x28582a['radius'] * -0.03, _0x28582a['radius'] * 1.01), ctx['quadraticCurveTo'](_0x28582a['radius'] * 0.68, _0x28582a['radius'] * 0.25, _0x28582a['radius'] * 0.06, _0x28582a['radius'] * -0.12), ctx['lineTo'](_0x28582a['radius'] * -0.32, _0x28582a['radius'] * -0.11), ctx['quadraticCurveTo'](_0x28582a['radius'] * 0.12, _0x28582a['radius'] * -0.31, _0x28582a['radius'] * -0.06, _0x28582a['radius'] * -0.5), ctx['quadraticCurveTo'](_0x28582a['radius'] * -0.19, _0x28582a['radius'] * -0.66, _0x28582a['radius'] * -0.66, _0x28582a['radius'] * -0.42), ctx['quadraticCurveTo'](_0x28582a['radius'] * -0.13, _0x28582a['radius'] * -0.73, _0x28582a['radius'] * -0.82, _0x28582a['radius'] * -1.03), ctx['fill'](), ctx['stroke'](), ctx['closePath']();
    },
    'Mandible': _0x3fce5e => {
        ctx['lineWidth'] = 0x3, ctx['beginPath'](), ctx['fillStyle'] = blendColor('#761008', '#FF0000', blendAmount(_0x3fce5e)), ctx['strokeStyle'] = blendColor('#5a0c07', '#FF0000', blendAmount(_0x3fce5e)), checkForFirstFrame(_0x3fce5e) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF'), ctx['beginPath'](), ctx['moveTo'](_0x3fce5e['radius'] * -0.82, _0x3fce5e['radius'] * -1.03), ctx['quadraticCurveTo'](_0x3fce5e['radius'] * 0.21, _0x3fce5e['radius'] * -0.7, _0x3fce5e['radius'] * 0.44, _0x3fce5e['radius'] * -0.3), ctx['quadraticCurveTo'](_0x3fce5e['radius'] * 0.78, _0x3fce5e['radius'] * 0.2, _0x3fce5e['radius'] * 0.74, _0x3fce5e['radius'] * 0.76), ctx['lineTo'](_0x3fce5e['radius'] * 0.47, _0x3fce5e['radius'] * 0.97), ctx['lineTo'](_0x3fce5e['radius'] * -0.03, _0x3fce5e['radius'] * 1.01), ctx['quadraticCurveTo'](_0x3fce5e['radius'] * 0.68, _0x3fce5e['radius'] * 0.25, _0x3fce5e['radius'] * 0.06, _0x3fce5e['radius'] * -0.12), ctx['lineTo'](_0x3fce5e['radius'] * -0.32, _0x3fce5e['radius'] * -0.11), ctx['quadraticCurveTo'](_0x3fce5e['radius'] * 0.12, _0x3fce5e['radius'] * -0.31, _0x3fce5e['radius'] * -0.06, _0x3fce5e['radius'] * -0.5), ctx['quadraticCurveTo'](_0x3fce5e['radius'] * -0.19, _0x3fce5e['radius'] * -0.66, _0x3fce5e['radius'] * -0.66, _0x3fce5e['radius'] * -0.42), ctx['quadraticCurveTo'](_0x3fce5e['radius'] * -0.13, _0x3fce5e['radius'] * -0.73, _0x3fce5e['radius'] * -0.82, _0x3fce5e['radius'] * -1.03), ctx['fill'](), ctx['stroke'](), ctx['closePath']();
    },
    'Light': _0x230c92 => {
        ctx['lineWidth'] = 0x3, ctx['beginPath'](), ctx['fillStyle'] = blendColor('#ffffff', '#FF0000', blendAmount(_0x230c92)), ctx['strokeStyle'] = blendColor('#cfcfcf', '#FF0000', blendAmount(_0x230c92)), checkForFirstFrame(_0x230c92) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF'), ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x230c92['radius'], 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath']();
    },
    'Blood\x20Light': _0x5b25c7 => {
        ctx['lineWidth'] = 0x3, ctx['beginPath'](), ctx['strokeStyle'] = blendColor('#7e0d0d', '#FF0000', blendAmount(_0x5b25c7)), ctx['fillStyle'] = blendColor('#9c1010', '#FF0000', blendAmount(_0x5b25c7)), checkForFirstFrame(_0x5b25c7) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF'), ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x5b25c7['radius'], 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath']();
    },
    'Rog456': _0x1580f6 => {
        ctx['lineWidth'] = _0x1580f6['radius'] / 0x5, ctx['beginPath'](), ctx['fillStyle'] = blendColor('#000000', '#FF0000', blendAmount(_0x1580f6)), ctx['strokeStyle'] = blendColor('#000000', '#FF0000', blendAmount(_0x1580f6)), checkForFirstFrame(_0x1580f6) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF'), ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x1580f6['radius'], 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath']();
    },
    'Heavy': _0x142f3d => {
        ctx['lineWidth'] = _0x142f3d['radius'] / 0x5, ctx['beginPath'](), ctx['fillStyle'] = blendColor('#333333', '#FF0000', blendAmount(_0x142f3d)), ctx['strokeStyle'] = blendColor('#292929', '#FF0000', blendAmount(_0x142f3d));
        let _0x29e55a = blendColor('#cccccc', '#FF0000', blendAmount(_0x142f3d));
        checkForFirstFrame(_0x142f3d) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF', _0x29e55a = '#FFFFFF'), ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x142f3d['radius'], 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['fillStyle'] = _0x29e55a, ctx['beginPath'](), ctx['arc'](_0x142f3d['radius'] * 0.35, -_0x142f3d['radius'] * 0.35, _0x142f3d['radius'] * 0.3, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath']();
    },
    'Rice': _0x14467b => {
        ctx['beginPath']();
        let _0x13f3c3 = blendColor('#ffffff', '#FF0000', blendAmount(_0x14467b)), _0x372cb3 = blendColor('#cfcfcf', '#FF0000', blendAmount(_0x14467b));
        checkForFirstFrame(_0x14467b) && (_0x13f3c3 = '#FFFFFF', _0x372cb3 = '#FFFFFF'), ctx['strokeStyle'] = _0x372cb3, ctx['lineWidth'] = _0x14467b['radius'], ctx['beginPath'](), ctx['moveTo'](-_0x14467b['radius'], 0x0), ctx['quadraticCurveTo'](0x0, -_0x14467b['radius'] * 0.4, _0x14467b['radius'], 0x0), ctx['stroke'](), ctx['closePath'](), ctx['strokeStyle'] = _0x13f3c3, ctx['lineWidth'] = _0x14467b['radius'] / 0x2, ctx['beginPath'](), ctx['moveTo'](-_0x14467b['radius'], 0x0), ctx['quadraticCurveTo'](0x0, -_0x14467b['radius'] * 0.4, _0x14467b['radius'], 0x0), ctx['stroke'](), ctx['closePath']();
    },
    'Ricemissile': _0x5d0afa => {
        ctx['beginPath']();
        let _0x143688 = blendColor('#ffffff', '#FF0000', blendAmount(_0x5d0afa)), _0x50f643 = blendColor('#cfcfcf', '#FF0000', blendAmount(_0x5d0afa));
        checkForFirstFrame(_0x5d0afa) && (_0x143688 = '#FFFFFF', _0x50f643 = '#FFFFFF'), ctx['strokeStyle'] = _0x50f643, ctx['lineWidth'] = _0x5d0afa['radius'], ctx['beginPath'](), ctx['moveTo'](-_0x5d0afa['radius'], 0x0), ctx['quadraticCurveTo'](0x0, -_0x5d0afa['radius'] * 0.4, _0x5d0afa['radius'], 0x0), ctx['stroke'](), ctx['closePath'](), ctx['strokeStyle'] = _0x143688, ctx['lineWidth'] = _0x5d0afa['radius'] / 0x2, ctx['beginPath'](), ctx['moveTo'](-_0x5d0afa['radius'], 0x0), ctx['quadraticCurveTo'](0x0, -_0x5d0afa['radius'] * 0.4, _0x5d0afa['radius'], 0x0), ctx['stroke'](), ctx['closePath']();
    },
    'Iris': _0x4972af => {
        ctx['lineWidth'] = 0x3, ctx['beginPath'](), ctx['fillStyle'] = blendColor('#ce76db', '#FF0000', blendAmount(_0x4972af)), ctx['strokeStyle'] = blendColor('#a760b1', '#FF0000', blendAmount(_0x4972af)), checkForFirstFrame(_0x4972af) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF'), ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x4972af['radius'], 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath']();
    },
    'Shiny\x20Iris': _0x5ef0bb => {
        ctx['lineWidth'] = 0x3, ctx['beginPath'](), ctx['fillStyle'] = blendColor('#d4af5f', '#FF0000', blendAmount(_0x5ef0bb)), ctx['strokeStyle'] = blendColor('#ab8d4c', '#FF0000', blendAmount(_0x5ef0bb)), checkForFirstFrame(_0x5ef0bb) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF'), ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x5ef0bb['radius'], 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath']();
    },
    'Faster': _0x2d247d => {
        ctx['lineWidth'] = 0x3, ctx['beginPath'](), ctx['fillStyle'] = blendColor('#feffc9', '#FF0000', blendAmount(_0x2d247d)), ctx['strokeStyle'] = blendColor('#cecfa3', '#FF0000', blendAmount(_0x2d247d)), checkForFirstFrame(_0x2d247d) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF'), ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x2d247d['radius'], 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath']();
    },
    'Stalk': _0x247e14 => {
        ctx['fillStyle'] = blendColor('#3c763d', '#FF0000', blendAmount(_0x247e14)), ctx['strokeStyle'] = blendColor('#2b502b', '#FF0000', blendAmount(_0x247e14)), checkForFirstFrame(_0x247e14) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF'), ctx['lineWidth'] = _0x247e14['radius'] / 0x3, ctx['lineJoin'] = 'round', ctx['beginPath'](), ctx['moveTo'](0x0, _0x247e14['radius'] * 0x1), ctx['lineTo'](-_0x247e14['radius'] * 0.4, -_0x247e14['radius']), ctx['lineTo'](_0x247e14['radius'] * 0.4, -_0x247e14['radius']), ctx['lineTo'](0x0, _0x247e14['radius'] * 0x1), ctx['fill'](), ctx['stroke'](), ctx['closePath']();
    },
    'Stinger': _0xb3f548 => {
        ctx['fillStyle'] = blendColor('#333333', '#FF0000', blendAmount(_0xb3f548)), ctx['strokeStyle'] = blendColor('#292929', '#FF0000', blendAmount(_0xb3f548)), checkForFirstFrame(_0xb3f548) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF'), ctx['lineWidth'] = 2.75, ctx['lineJoin'] = 'round', ctx['beginPath'](), ctx['moveTo'](_0xb3f548['radius'], 0x0), ctx['lineTo'](Math['cos'](0x2 / 0x3 * Math['PI']) * _0xb3f548['radius'], Math['sin'](0x2 / 0x3 * Math['PI']) * _0xb3f548['radius']), ctx['lineTo'](Math['cos'](0x4 / 0x3 * Math['PI']) * _0xb3f548['radius'], Math['sin'](0x4 / 0x3 * Math['PI']) * _0xb3f548['radius']), ctx['lineTo'](_0xb3f548['radius'], 0x0), ctx['fill'](), ctx['stroke'](), ctx['closePath']();
    },
    'Blood\x20Stinger': _0x291702 => {
        ctx['strokeStyle'] = blendColor('#7e0d0d', '#FF0000', blendAmount(_0x291702)), ctx['fillStyle'] = blendColor('#9c1010', '#FF0000', blendAmount(_0x291702)), checkForFirstFrame(_0x291702) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF'), ctx['lineWidth'] = 2.75, ctx['lineJoin'] = 'round', ctx['beginPath'](), ctx['moveTo'](_0x291702['radius'], 0x0), ctx['lineTo'](Math['cos'](0x2 / 0x3 * Math['PI']) * _0x291702['radius'], Math['sin'](0x2 / 0x3 * Math['PI']) * _0x291702['radius']), ctx['lineTo'](Math['cos'](0x4 / 0x3 * Math['PI']) * _0x291702['radius'], Math['sin'](0x4 / 0x3 * Math['PI']) * _0x291702['radius']), ctx['lineTo'](_0x291702['radius'], 0x0), ctx['fill'](), ctx['stroke'](), ctx['closePath']();
    },
    'Sand': _0x4583ac => {
        ctx['fillStyle'] = blendColor('#e0c85c', '#FF0000', blendAmount(_0x4583ac)), ctx['strokeStyle'] = '#b5a24b', ctx['lineWidth'] = _0x4583ac['radius'] * 0x1 / 0x2, ctx['rotate'](0xf * Math['PI'] / 0xb4), ctx['beginPath']();
        for (let _0x4c2469 = 0x0; _0x4c2469 <= 0x6; _0x4c2469++) {
            ctx['lineTo'](Math['cos'](_0x4c2469 * Math['PI'] * 0x2 / 0x6) * _0x4583ac['radius'], Math['sin'](_0x4c2469 * Math['PI'] * 0x2 / 0x6) * _0x4583ac['radius']);
        }
        ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](-0xf * Math['PI'] / 0xb4);
    },
    'Spore': _0x5c6d41 => {
        ctx['fillStyle'] = blendColor('#9e7d5d', '#FF0000', blendAmount(_0x5c6d41)), ctx['strokeStyle'] = '#755c43', ctx['lineWidth'] = _0x5c6d41['radius'] * 0x1 / 0x2, ctx['rotate'](0xf * Math['PI'] / 0xb4), ctx['beginPath']();
        for (let _0x21335e = 0x0; _0x21335e <= 0x7; _0x21335e++) {
            ctx['lineTo'](Math['cos'](_0x21335e * Math['PI'] * 0x2 / 0x7) * _0x5c6d41['radius'] * (Math['sin'](_0x21335e) / 0xa + 0x1), Math['sin'](_0x21335e * Math['PI'] * 0x2 / 0x7) * _0x5c6d41['radius'] * (Math['sin'](_0x21335e + 17.5) / 0xa + 0x1));
        }
        ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](-0xf * Math['PI'] / 0xb4);
    },
    'Compost': _0xb7407 => {
        ctx['fillStyle'] = blendColor('#4b3b2b', '#ff0000ff', blendAmount(_0xb7407)), ctx['strokeStyle'] = '#2e241a', ctx['lineWidth'] = _0xb7407['radius'] * 0.5, ctx['beginPath']();
        const _0xe8f09c = 0x9;
        for (let _0x1b411a = 0x0; _0x1b411a <= _0xe8f09c; _0x1b411a++) {
            const _0x286e40 = _0x1b411a * Math['PI'] * 0x2 / _0xe8f09c, _0x19508f = Math['sin'](_0x1b411a * 1.7 + _0xb7407['radius'] * 0.1) * 0.4, _0x4ef81d = _0xb7407['radius'] * (0x1 + _0x19508f);
            ctx['lineTo'](Math['cos'](_0x286e40) * _0x4ef81d, Math['sin'](_0x286e40) * _0x4ef81d);
        }
        ctx['closePath'](), ctx['fill'](), ctx['stroke']();
        const _0x5aea85 = Math['floor'](0x3 + Math['random']() * 0x5);
        ctx['fillStyle'] = '#3a2d20';
        for (let _0x441b39 = 0x0; _0x441b39 < _0x5aea85; _0x441b39++) {
            const _0x2f27fe = Math['random']() * Math['PI'] * 0x2, _0x31fa52 = _0xb7407['radius'] * (1.2 + Math['random']() * 0.8), _0x35e7f7 = _0xb7407['radius'] * 0.1 * Math['random']();
            ctx['beginPath'](), ctx['arc'](Math['cos'](_0x2f27fe) * _0x31fa52, Math['sin'](_0x2f27fe) * _0x31fa52, _0x35e7f7, 0x0, Math['PI'] * 0x2), ctx['fill']();
        }
    },
    'Missile': _0xf5778b => {
        let _0x2bce08 = blendColor('#333333', '#FF0000', blendAmount(_0xf5778b));
        checkForFirstFrame(_0xf5778b) && (_0x2bce08 = '#FFFFFF'), ctx['lineJoin'] = 'round', ctx['rotate'](Math['PI'] / 0x2), ctx['beginPath'](), ctx['fillStyle'] = _0x2bce08, ctx['strokeStyle'] = _0x2bce08, ctx['lineWidth'] = _0xf5778b['radius'] / 1.5, ctx['moveTo'](0x0, -_0xf5778b['radius'] * Math['sqrt'](0x3)), ctx['lineTo'](_0xf5778b['radius'] * Math['sqrt'](0x3) * 0.48, _0xf5778b['radius'] / 0x2 * Math['sqrt'](0x3)), ctx['lineTo'](-_0xf5778b['radius'] * Math['sqrt'](0x3) * 0.48, _0xf5778b['radius'] / 0x2 * Math['sqrt'](0x3)), ctx['lineTo'](0x0, -_0xf5778b['radius'] * Math['sqrt'](0x3)), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](-Math['PI'] / 0x2);
    },
    'Homing\x20Missile': _0x24b4aa => {
        let _0x3a9eba = blendColor('#222222', '#ff0000', blendAmount(_0x24b4aa)), _0x386008 = blendColor('#325f28', '#ff0000', blendAmount(_0x24b4aa));
        checkForFirstFrame(_0x24b4aa) && (_0x3a9eba = '#FFFFFF', _0x386008 = '#FFFFFF'), ctx['lineJoin'] = 'round', ctx['rotate'](Math['PI'] / 0x2), ctx['beginPath'](), ctx['fillStyle'] = _0x3a9eba, ctx['strokeStyle'] = _0x3a9eba, ctx['lineWidth'] = _0x24b4aa['radius'] / 1.5, ctx['moveTo'](0x0, _0x24b4aa['radius'] * 0x1), ctx['lineTo'](_0x24b4aa['radius'] * 0.9, _0x24b4aa['radius'] * 0.3), ctx['lineTo'](-_0x24b4aa['radius'] * 0.9, _0x24b4aa['radius'] * 0.3), ctx['closePath'](), ctx['fill'](), ctx['stroke'](), ctx['beginPath'](), ctx['fillStyle'] = _0x386008, ctx['strokeStyle'] = _0x386008, ctx['moveTo'](0x0, -_0x24b4aa['radius'] * 1.2), ctx['lineTo'](_0x24b4aa['radius'] * 0.5, _0x24b4aa['radius'] * 0.3), ctx['lineTo'](-_0x24b4aa['radius'] * 0.5, _0x24b4aa['radius'] * 0.3), ctx['closePath'](), ctx['fill'](), ctx['stroke'](), ctx['rotate'](-Math['PI'] / 0x2);
    },
    'Fire\x20Missile': _0x20ffd3 => {
        let _0x33be4b = blendColor('#882200', '#FF0000', blendAmount(_0x20ffd3));
        checkForFirstFrame(_0x20ffd3) && (_0x33be4b = '#FFFFFF'), ctx['lineJoin'] = 'round', ctx['rotate'](Math['PI'] / 0x2), ctx['beginPath'](), ctx['fillStyle'] = _0x33be4b, ctx['strokeStyle'] = _0x33be4b, ctx['lineWidth'] = _0x20ffd3['radius'] / 1.5, ctx['moveTo'](0x0, -_0x20ffd3['radius'] * Math['sqrt'](0x3)), ctx['lineTo'](_0x20ffd3['radius'] * Math['sqrt'](0x3) * 0.48, _0x20ffd3['radius'] / 0x2 * Math['sqrt'](0x3)), ctx['lineTo'](-_0x20ffd3['radius'] * Math['sqrt'](0x3) * 0.48, _0x20ffd3['radius'] / 0x2 * Math['sqrt'](0x3)), ctx['lineTo'](0x0, -_0x20ffd3['radius'] * Math['sqrt'](0x3)), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](-Math['PI'] / 0x2);
    },
    'Bud': _0x324244 => {
        ctx['lineWidth'] = 0x3, ctx['fillStyle'] = blendColor('#c02dd6', '#FF0000', blendAmount(_0x324244)), ctx['strokeStyle'] = blendColor('#9c24ad', '#FF0000', blendAmount(_0x324244));
        checkForFirstFrame(_0x324244) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF');
        for (let _0x44e7af = 0x5; _0x44e7af--; _0x44e7af > 0x0) {
            ctx['beginPath'](), ctx['arc'](_0x324244['radius'] * Math['sin'](_0x44e7af * 6.28318 / 0x5), _0x324244['radius'] * Math['cos'](_0x44e7af * 6.28318 / 0x5), _0x324244['radius'] * 0.8, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath']();
        }
        ctx['fillStyle'] = blendColor('#ebac00', '#FF0000', blendAmount(_0x324244)), ctx['strokeStyle'] = blendColor('#b38302', '#FF0000', blendAmount(_0x324244)), checkForFirstFrame(_0x324244) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF'), ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x324244['radius'], 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath']();
    },
    'Bloom': _0x27912a => {
        ctx['lineWidth'] = 0x3, ctx['fillStyle'] = blendColor('#ebac00', '#FF0000', blendAmount(_0x27912a)), ctx['strokeStyle'] = blendColor('#b38302', '#FF0000', blendAmount(_0x27912a));
        checkForFirstFrame(_0x27912a) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF');
        for (let _0x5705d0 = 0xa; _0x5705d0--; _0x5705d0 > 0x0) {
            ctx['beginPath'](), ctx['arc'](_0x27912a['radius'] * Math['sin'](_0x5705d0 * 6.28318 / 0xa), _0x27912a['radius'] * Math['cos'](_0x5705d0 * 6.28318 / 0xa), _0x27912a['radius'] * 0.7, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath']();
        }
        ctx['fillStyle'] = blendColor('#c02dd6', '#FF0000', blendAmount(_0x27912a)), ctx['strokeStyle'] = blendColor('#9c24ad', '#FF0000', blendAmount(_0x27912a)), checkForFirstFrame(_0x27912a) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF'), ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x27912a['radius'], 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath']();
    },
    'MissileProjectile': _0x5a114c => {
        petalRenderMap['Missile'](_0x5a114c);
    },
    'BladeProjectile': _0x4b0735 => {
        petalRenderMap['Blade'](_0x4b0735);
    },
    'Homing\x20MissileProjectile': _0x35957e => {
        petalRenderMap['Homing\x20Missile'](_0x35957e);
    },
    'Fire\x20MissileProjectile': _0x5501f1 => {
        petalRenderMap['Fire\x20Missile'](_0x5501f1);
    },
    'Bloodshot\x20EyeProjectile': _0x21c6fc => {
        petalRenderMap['Bloodshot\x20Eye'](_0x21c6fc);
    },
    'SporeProjectile': _0x5a0b12 => {
        petalRenderMap['Spore'](_0x5a0b12);
    },
    'BudProjectile': _0xab90ff => {
        petalRenderMap['Bud'](_0xab90ff);
    },
    'BloomProjectile': _0x3a6066 => {
        petalRenderMap['Bloom'](_0x3a6066);
    },
    'PeasProjectile': _0x54b45c => {
        petalRenderMap['Peas'](_0x54b45c);
    },
    'GrapesProjectile': _0x46922c => {
        petalRenderMap['Grapes'](_0x46922c);
    },
    'BlueberriesProjectile': _0x429991 => {
        petalRenderMap['Blueberries'](_0x429991);
    },
    'PomegranateProjectile': _0x137abc => {
        petalRenderMap['Pomegranate'](_0x137abc);
    },
    'PollenProjectile': _0x411765 => {
        petalRenderMap['Pollen'](_0x411765);
    },
    'HoneyProjectile': _0x5f5ae5 => {
        petalRenderMap['Honey'](_0x5f5ae5);
    },
    'NeutronStarProjectile': _0x46fd4c => {
        petalRenderMap['Neutron\x20Star'](_0x46fd4c);
    },
    'DandelionProjectile': _0x5a8f4d => {
        petalRenderMap['Dandelion'](_0x5a8f4d);
    },
    'RoseProjectile': _0x4fb95e => {
        petalRenderMap['Rose'](_0x4fb95e);
    },
    'Blood\x20RoseProjectile': _0x5db0a9 => {
        petalRenderMap['Blood\x20Rose'](_0x5db0a9);
    },
    'DustProjectile': _0x1c591e => {
        petalRenderMap['Dust'](_0x1c591e);
    },
    'BloodJoltProjectile': _0x56e07d => {
        petalRenderMap['Blood\x20Jolt'](_0x56e07d);
    },
    'JoltProjectile': _0x39ad97 => {
        petalRenderMap['Jolt'](_0x39ad97);
    },
    'DahliaProjectile': _0x39f098 => {
        petalRenderMap['Dahlia'](_0x39f098);
    },
    'WebProjectile': _0x287b17 => {
        petalRenderMap['Web'](_0x287b17);
    },
    'NeurotoxinProjectile': _0x2f5bc3 => {
        petalRenderMap['Neurotoxin'](_0x2f5bc3);
    },
    'ShellProjectile': _0x6fb96e => {
        petalRenderMap['Shell'](_0x6fb96e);
    },
    'NeurotoxinProjectilePuddle': _0x3d7691 => {
        ctx['globalAlpha'] *= 0.2, ctx['fillStyle'] = '#5353c9', ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x3d7691['radius'], 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['globalAlpha'] /= 0.2;
    },
    'WebProjectileWeb': _0x4f1e7c => {
        const _0x4f4b3d = ctx['globalAlpha'];
        ctx['globalAlpha'] *= 0.2, ctx['strokeStyle'] = 'white', ctx['lineWidth'] = _0x4f1e7c['radius'] / 0xc, ctx['beginPath'](), ctx['moveTo'](_0x4f1e7c['radius'] * 0.95, 0x0);
        for (let _0x2f7cd5 = 0x0; _0x2f7cd5 <= Math['PI'] * 0x2; _0x2f7cd5 += Math['PI'] / 5.5) {
            ctx['quadraticCurveTo'](Math['cos'](_0x2f7cd5 - Math['PI'] / 0xb) * (_0x4f1e7c['radius'] * 0.75), Math['sin'](_0x2f7cd5 - Math['PI'] / 0xb) * (_0x4f1e7c['radius'] * 0.75), Math['cos'](_0x2f7cd5) * _0x4f1e7c['radius'] * 0.95, Math['sin'](_0x2f7cd5) * _0x4f1e7c['radius'] * 0.95);
        }
        ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['moveTo'](_0x4f1e7c['radius'] * 0.75, 0x0);
        for (let _0x1ab6b4 = 0x0; _0x1ab6b4 <= Math['PI'] * 0x2; _0x1ab6b4 += Math['PI'] / 5.5) {
            ctx['quadraticCurveTo'](Math['cos'](_0x1ab6b4 - Math['PI'] / 0xb) * (_0x4f1e7c['radius'] * 0.55), Math['sin'](_0x1ab6b4 - Math['PI'] / 0xb) * (_0x4f1e7c['radius'] * 0.55), Math['cos'](_0x1ab6b4) * _0x4f1e7c['radius'] * 0.75, Math['sin'](_0x1ab6b4) * _0x4f1e7c['radius'] * 0.75);
        }
        ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['moveTo'](_0x4f1e7c['radius'] * 0.55, 0x0);
        for (let _0x49c4a2 = 0x0; _0x49c4a2 <= Math['PI'] * 0x2; _0x49c4a2 += Math['PI'] / 5.5) {
            ctx['quadraticCurveTo'](Math['cos'](_0x49c4a2 - Math['PI'] / 0xb) * (_0x4f1e7c['radius'] * 0.35), Math['sin'](_0x49c4a2 - Math['PI'] / 0xb) * (_0x4f1e7c['radius'] * 0.35), Math['cos'](_0x49c4a2) * _0x4f1e7c['radius'] * 0.55, Math['sin'](_0x49c4a2) * _0x4f1e7c['radius'] * 0.55);
        }
        ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['moveTo'](_0x4f1e7c['radius'] * 0.35, 0x0);
        for (let _0x51c36a = 0x0; _0x51c36a <= Math['PI'] * 0x2; _0x51c36a += Math['PI'] / 5.5) {
            ctx['quadraticCurveTo'](Math['cos'](_0x51c36a - Math['PI'] / 0xb) * (_0x4f1e7c['radius'] * 0.15), Math['sin'](_0x51c36a - Math['PI'] / 0xb) * (_0x4f1e7c['radius'] * 0.15), Math['cos'](_0x51c36a) * _0x4f1e7c['radius'] * 0.35, Math['sin'](_0x51c36a) * _0x4f1e7c['radius'] * 0.35);
        }
        ctx['stroke'](), ctx['closePath']();
        for (let _0x3ffdc5 = 0xb; _0x3ffdc5--; _0x3ffdc5 > 0x0) {
            ctx['beginPath'](), ctx['moveTo'](0x0, 0x0), ctx['lineTo'](_0x4f1e7c['radius'] * Math['cos'](_0x3ffdc5 / 0xb * Math['PI'] * 0x2), _0x4f1e7c['radius'] * Math['sin'](_0x3ffdc5 / 0xb * Math['PI'] * 0x2)), ctx['stroke'](), ctx['closePath']();
        }
        ctx['globalAlpha'] = _0x4f4b3d;
    },
    'Ruby': _0xd49a3e => {
        if (_0xd49a3e['rarity'] == 0x10 && window['noTrans'] !== !![]) {
            ctx['save'](), ctx['beginPath'](), ctx['lineWidth'] = 0.3 * _0xd49a3e['radius'], ctx['rotate'](Math['PI'] / 0x4);
            for (let _0x461d54 = 0x0; _0x461d54 <= 0x3; _0x461d54++) {
                ctx['lineTo'](Math['cos'](_0x461d54 * Math['PI'] * 0x2 / 0x3) * _0xd49a3e['radius'], Math['sin'](_0x461d54 * Math['PI'] * 0x2 / 0x3) * _0xd49a3e['radius']);
            }
            ctx['rotate'](-Math['PI'] / 0x4), ctx['fill'](), ctx['closePath'](), ctx['clip'](), ctx['fillStyle'] = blendColor('#5ccefa', '#FF0000', blendAmount(_0xd49a3e)), ctx['rotate'](-_0xd49a3e['selfAngle']), ctx['beginPath'](), ctx['rect'](-0x2 * _0xd49a3e['radius'], -1.05 * _0xd49a3e['radius'], 0x4 * _0xd49a3e['radius'], 0.6 * _0xd49a3e['radius']), ctx['rect'](-0x2 * _0xd49a3e['radius'], 0.45 * _0xd49a3e['radius'], 0x4 * _0xd49a3e['radius'], 0.6 * _0xd49a3e['radius']), ctx['fill'](), ctx['closePath'](), ctx['fillStyle'] = blendColor('#f4a9b7', '#FF0000', blendAmount(_0xd49a3e)), ctx['beginPath'](), ctx['rect'](-0x2 * _0xd49a3e['radius'], -0.45 * _0xd49a3e['radius'], 0x4 * _0xd49a3e['radius'], 0.3 * _0xd49a3e['radius']), ctx['rect'](-0x2 * _0xd49a3e['radius'], 0.3 * _0xd49a3e['radius'], 0x4 * _0xd49a3e['radius'], 0.3 * _0xd49a3e['radius']), ctx['fill'](), ctx['closePath'](), ctx['fillStyle'] = blendColor('#ffffff', '#FF0000', blendAmount(_0xd49a3e)), ctx['beginPath'](), ctx['rect'](-0x2 * _0xd49a3e['radius'], -0.15 * _0xd49a3e['radius'], 0x4 * _0xd49a3e['radius'], 0.45 * _0xd49a3e['radius']), ctx['fill'](), ctx['closePath'](), ctx['restore']();
        } else {
            ctx['beginPath'](), ctx['fillStyle'] = blendColor('#e03f3f', '#FF0000', blendAmount(_0xd49a3e)), ctx['strokeStyle'] = blendColor('#a12222', '#FF0000', blendAmount(_0xd49a3e)), ctx['lineWidth'] = 0x3;
            checkForFirstFrame(_0xd49a3e) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF');
            ctx['rotate'](Math['PI'] / 0x4);
            for (let _0x3cbc13 = 0x0; _0x3cbc13 <= 0x3; _0x3cbc13++) {
                ctx['lineTo'](Math['cos'](_0x3cbc13 * Math['PI'] * 0x2 / 0x3) * _0xd49a3e['radius'], Math['sin'](_0x3cbc13 * Math['PI'] * 0x2 / 0x3) * _0xd49a3e['radius']);
            }
            ctx['rotate'](-Math['PI'] / 0x4), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['fillStyle'] = blendColor(blendColor('#e03f3f', '#ffffff', 0.3), '#FF0000', blendAmount(_0xd49a3e));
            checkForFirstFrame(_0xd49a3e) && (ctx['fillStyle'] = '#FFFFFF');
            ctx['rotate'](Math['PI'] / 0x4);
            for (let _0x245649 = 0x0; _0x245649 <= 0x3; _0x245649++) {
                ctx['lineTo'](Math['cos'](_0x245649 * Math['PI'] * 0x2 / 0x3) * _0xd49a3e['radius'] * 0.4, Math['sin'](_0x245649 * Math['PI'] * 0x2 / 0x3) * _0xd49a3e['radius'] * 0.4);
            }
            ctx['rotate'](-Math['PI'] / 0x4), ctx['fill'](), ctx['closePath']();
        }
    },
    'Shiny\x20Ruby': _0x5a1c3b => {
        ctx['beginPath'](), ctx['fillStyle'] = blendColor('#e0e03f', '#FF0000', blendAmount(_0x5a1c3b)), ctx['strokeStyle'] = blendColor('#9fac27', '#FF0000', blendAmount(_0x5a1c3b)), ctx['lineWidth'] = 0x3;
        checkForFirstFrame(_0x5a1c3b) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF');
        ctx['rotate'](Math['PI'] / 0x4);
        for (let _0x17e9ed = 0x0; _0x17e9ed <= 0x3; _0x17e9ed++) {
            ctx['lineTo'](Math['cos'](_0x17e9ed * Math['PI'] * 0x2 / 0x3) * _0x5a1c3b['radius'], Math['sin'](_0x17e9ed * Math['PI'] * 0x2 / 0x3) * _0x5a1c3b['radius']);
        }
        ctx['rotate'](-Math['PI'] / 0x4), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['fillStyle'] = blendColor(blendColor('#e9e174', '#ffffff', 0.3), '#FF0000', blendAmount(_0x5a1c3b));
        checkForFirstFrame(_0x5a1c3b) && (ctx['fillStyle'] = '#FFFFFF');
        ctx['rotate'](Math['PI'] / 0x4);
        for (let _0x5229dc = 0x0; _0x5229dc <= 0x3; _0x5229dc++) {
            ctx['lineTo'](Math['cos'](_0x5229dc * Math['PI'] * 0x2 / 0x3) * _0x5a1c3b['radius'] * 0.4, Math['sin'](_0x5229dc * Math['PI'] * 0x2 / 0x3) * _0x5a1c3b['radius'] * 0.4);
        }
        ctx['rotate'](-Math['PI'] / 0x4), ctx['fill'](), ctx['closePath']();
    },
    'Sapphire': _0x201985 => {
        ctx['beginPath'](), ctx['fillStyle'] = blendColor('#12a9e7', '#FF0000', blendAmount(_0x201985)), ctx['strokeStyle'] = blendColor('#0896d9', '#FF0000', blendAmount(_0x201985)), ctx['lineWidth'] = 0x3;
        checkForFirstFrame(_0x201985) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF');
        ctx['rotate'](Math['PI'] / 0x4);
        for (let _0x576db9 = 0x0; _0x576db9 <= 0x8; _0x576db9++) {
            ctx['lineTo'](Math['cos'](_0x576db9 * Math['PI'] * 0x2 / 0x8) * _0x201985['radius'], Math['sin'](_0x576db9 * Math['PI'] * 0x2 / 0x8) * _0x201985['radius']);
        }
        ctx['rotate'](-Math['PI'] / 0x4), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['fillStyle'] = blendColor(blendColor('#12a9e7', '#ffffff', 0.3), '#FF0000', blendAmount(_0x201985));
        checkForFirstFrame(_0x201985) && (ctx['fillStyle'] = '#FFFFFF');
        ctx['rotate'](Math['PI'] / 0x4);
        for (let _0x223009 = 0x0; _0x223009 <= 0x8; _0x223009++) {
            ctx['lineTo'](Math['cos'](_0x223009 * Math['PI'] * 0x2 / 0x8) * _0x201985['radius'] * 0.6, Math['sin'](_0x223009 * Math['PI'] * 0x2 / 0x8) * _0x201985['radius'] * 0.6);
        }
        ctx['rotate'](-Math['PI'] / 0x4), ctx['fill'](), ctx['closePath']();
    },
    'Amulet\x20of\x20Divergence': _0x48e1f8 => {
        ctx['fillStyle'] = blendColor('#ffd256', '#ff0000', blendAmount(_0x48e1f8)), ctx['strokeStyle'] = blendColor('#d1ac46', '#ff0000', blendAmount(_0x48e1f8));
        checkForFirstFrame(_0x48e1f8) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF');
        ctx['lineWidth'] = 0.2 * _0x48e1f8['radius'];
        let _0x1f4859 = 0x3, _0x51944d = Math['PI'] * 0x2 / _0x1f4859;
        ctx['beginPath'](), ctx['moveTo'](_0x48e1f8['radius'], 0x0);
        for (let _0x2e6b08 = 0x0; _0x2e6b08 <= _0x1f4859; _0x2e6b08++) {
            ctx['lineTo'](Math['cos'](_0x2e6b08 * _0x51944d) * _0x48e1f8['radius'], Math['sin'](_0x2e6b08 * _0x51944d) * _0x48e1f8['radius']);
        }
        ;
        ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['fillStyle'] = _0x48e1f8['rarity'] < 0xb ? blendColor('#393939', '#ff0000', blendAmount(_0x48e1f8)) : _0x48e1f8['rarity'] < 0xc ? blendColor('#632899', '#ff0000', blendAmount(_0x48e1f8)) : _0x48e1f8['rarity'] > 0xc ? blendColor('#7e52a7', '#ff0000', blendAmount(_0x48e1f8)) : blendColor('#7123b9', '#ff0000', blendAmount(_0x48e1f8));
        checkForFirstFrame(_0x48e1f8) && (ctx['fillStyle'] = '#FFFFFF');
        ;
        ctx['beginPath'](), ctx['moveTo'](_0x48e1f8['radius'], 0x0);
        for (let _0x12ee2b = 0x0; _0x12ee2b <= _0x1f4859; _0x12ee2b++) {
            ctx['lineTo'](Math['cos'](_0x12ee2b * _0x51944d) * _0x48e1f8['radius'] / 0x2, Math['sin'](_0x12ee2b * _0x51944d) * _0x48e1f8['radius'] / 0x2);
        }
        ;
        ctx['fill'](), ctx['closePath'](), ctx['fillStyle'] = _0x48e1f8['rarity'] < 0xb ? blendColor('#464646', '#ff0000', blendAmount(_0x48e1f8)) : _0x48e1f8['rarity'] < 0xc ? blendColor('#7931bb', '#ff0000', blendAmount(_0x48e1f8)) : _0x48e1f8['rarity'] > 0xc ? blendColor('#9a64cc', '#ff0000', blendAmount(_0x48e1f8)) : blendColor('#8A2BE2', '#ff0000', blendAmount(_0x48e1f8));
        checkForFirstFrame(_0x48e1f8) && (ctx['fillStyle'] = '#FFFFFF');
        ;
        ctx['beginPath'](), ctx['moveTo'](_0x48e1f8['radius'], 0x0);
        for (let _0x3e51d6 = 0x0; _0x3e51d6 <= _0x1f4859; _0x3e51d6++) {
            ctx['lineTo'](Math['cos'](_0x3e51d6 * _0x51944d) * _0x48e1f8['radius'] / 0x4, Math['sin'](_0x3e51d6 * _0x51944d) * _0x48e1f8['radius'] / 0x4);
        }
        ;
        ctx['fill'](), ctx['closePath']();
    },
    'Shard\x20of\x20Divergence': _0xb0c85d => {
        ctx['fillStyle'] = blendColor('#8A2BE2', '#FF0000', blendAmount(_0xb0c85d)), ctx['strokeStyle'] = blendColor('#7123b9', '#FF0000', blendAmount(_0xb0c85d)), ctx['lineWidth'] = 0.2 * _0xb0c85d['radius'], checkForFirstFrame(_0xb0c85d) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF'), ctx['beginPath'](), ctx['moveTo'](0x0, _0xb0c85d['radius'] * 1.5), ctx['lineTo'](_0xb0c85d['radius'] * 0.75, 0x0), ctx['lineTo'](0x0, -_0xb0c85d['radius'] * 1.5), ctx['lineTo'](-_0xb0c85d['radius'] * 0.75, 0x0), ctx['lineTo'](0x0, _0xb0c85d['radius'] * 1.5), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['fillStyle'] = blendColor(blendColor(ctx['fillStyle'], '#ffffff', 0.18), '#FF0000', blendAmount(_0xb0c85d)), checkForFirstFrame(_0xb0c85d) && (ctx['fillStyle'] = '#FFFFFF'), ctx['beginPath'](), ctx['moveTo'](0x0, _0xb0c85d['radius'] * 0.9), ctx['lineTo'](_0xb0c85d['radius'] * 0.45, 0x0), ctx['lineTo'](0x0, -_0xb0c85d['radius'] * 0.9), ctx['lineTo'](-_0xb0c85d['radius'] * 0.45, 0x0), ctx['lineTo'](0x0, _0xb0c85d['radius'] * 0.9), ctx['fill'](), ctx['closePath']();
    },
    'Amulet\x20of\x20Grace': _0x4bdce2 => {
        ctx['fillStyle'] = blendColor('#ffd256', '#ff0000', blendAmount(_0x4bdce2)), ctx['strokeStyle'] = blendColor('#d1ac46', '#ff0000', blendAmount(_0x4bdce2));
        checkForFirstFrame(_0x4bdce2) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF');
        ctx['lineWidth'] = 0.2 * _0x4bdce2['radius'];
        let _0x4cd6f0 = 0x5, _0x1a4768 = Math['PI'] * 0x2 / _0x4cd6f0;
        ctx['beginPath'](), ctx['moveTo'](_0x4bdce2['radius'], 0x0);
        for (let _0x598fd9 = 0x0; _0x598fd9 <= _0x4cd6f0; _0x598fd9++) {
            ctx['lineTo'](Math['cos'](_0x598fd9 * _0x1a4768) * _0x4bdce2['radius'], Math['sin'](_0x598fd9 * _0x1a4768) * _0x4bdce2['radius']);
        }
        ;
        ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['fillStyle'] = _0x4bdce2['rarity'] < 0xb ? blendColor('#393939', '#ff0000', blendAmount(_0x4bdce2)) : _0x4bdce2['rarity'] < 0xc ? blendColor('#aa7e84', '#ff0000', blendAmount(_0x4bdce2)) : blendColor('#e8a5af', '#ff0000', blendAmount(_0x4bdce2));
        checkForFirstFrame(_0x4bdce2) && (ctx['fillStyle'] = '#FFFFFF');
        ctx['beginPath'](), ctx['moveTo'](_0x4bdce2['radius'], 0x0);
        for (let _0x229516 = 0x0; _0x229516 <= _0x4cd6f0; _0x229516++) {
            ctx['lineTo'](Math['cos'](_0x229516 * _0x1a4768) * _0x4bdce2['radius'] / 1.5, Math['sin'](_0x229516 * _0x1a4768) * _0x4bdce2['radius'] / 1.5);
        }
        ;
        ctx['fill'](), ctx['closePath'](), ctx['fillStyle'] = _0x4bdce2['rarity'] < 0xb ? blendColor('#464646', '#ff0000', blendAmount(_0x4bdce2)) : _0x4bdce2['rarity'] < 0xc ? blendColor('#d09aa2', '#ff0000', blendAmount(_0x4bdce2)) : blendColor('#FFB6C1', '#ff0000', blendAmount(_0x4bdce2));
        checkForFirstFrame(_0x4bdce2) && (ctx['fillStyle'] = '#FFFFFF');
        ;
        ctx['beginPath'](), ctx['moveTo'](_0x4bdce2['radius'], 0x0);
        for (let _0x334219 = 0x0; _0x334219 <= _0x4cd6f0; _0x334219++) {
            ctx['lineTo'](Math['cos'](_0x334219 * _0x1a4768) * _0x4bdce2['radius'] / 0x3, Math['sin'](_0x334219 * _0x1a4768) * _0x4bdce2['radius'] / 0x3);
        }
        ;
        ctx['fill'](), ctx['closePath']();
    },
    'Shard\x20of\x20Grace': _0x3f2ddd => {
        ctx['fillStyle'] = blendColor('#FFB6C1', '#FF0000', blendAmount(_0x3f2ddd)), ctx['strokeStyle'] = blendColor('#e8a5af', '#FF0000', blendAmount(_0x3f2ddd)), ctx['lineWidth'] = 0.2 * _0x3f2ddd['radius'], checkForFirstFrame(_0x3f2ddd) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF'), ctx['beginPath'](), ctx['moveTo'](0x0, _0x3f2ddd['radius'] * 1.5), ctx['lineTo'](_0x3f2ddd['radius'] * 0.75, 0x0), ctx['lineTo'](0x0, -_0x3f2ddd['radius'] * 1.5), ctx['lineTo'](-_0x3f2ddd['radius'] * 0.75, 0x0), ctx['lineTo'](0x0, _0x3f2ddd['radius'] * 1.5), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['fillStyle'] = blendColor(blendColor(ctx['fillStyle'], '#ffffff', 0.25), '#FF0000', blendAmount(_0x3f2ddd)), checkForFirstFrame(_0x3f2ddd) && (ctx['fillStyle'] = '#FFFFFF'), ctx['beginPath'](), ctx['moveTo'](0x0, _0x3f2ddd['radius'] * 0.9), ctx['lineTo'](_0x3f2ddd['radius'] * 0.45, 0x0), ctx['lineTo'](0x0, -_0x3f2ddd['radius'] * 0.9), ctx['lineTo'](-_0x3f2ddd['radius'] * 0.45, 0x0), ctx['lineTo'](0x0, _0x3f2ddd['radius'] * 0.9), ctx['fill'](), ctx['closePath']();
    },
    'Amulet\x20of\x20Time': _0x32f3a4 => {
        ctx['fillStyle'] = blendColor('#ffd256', '#ff0000', blendAmount(_0x32f3a4)), ctx['strokeStyle'] = blendColor('#d1ac46', '#ff0000', blendAmount(_0x32f3a4));
        checkForFirstFrame(_0x32f3a4) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF');
        ctx['lineWidth'] = 0.2 * _0x32f3a4['radius'], ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x32f3a4['radius'], 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['fillStyle'] = _0x32f3a4['rarity'] < 0xb ? blendColor('#393939', '#ff0000', blendAmount(_0x32f3a4)) : _0x32f3a4['rarity'] < 0xc ? blendColor('#11acae', '#ff0000', blendAmount(_0x32f3a4)) : blendColor('#00CED1', '#ff0000', blendAmount(_0x32f3a4));
        checkForFirstFrame(_0x32f3a4) && (ctx['fillStyle'] = '#FFFFFF');
        ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x32f3a4['radius'] / 1.5, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['fillStyle'] = _0x32f3a4['rarity'] < 0xb ? blendColor('#464646', '#ff0000', blendAmount(_0x32f3a4)) : _0x32f3a4['rarity'] < 0xc ? blendColor('#33b2b4', '#ff0000', blendAmount(_0x32f3a4)) : blendColor('#2dd6d9', '#ff0000', blendAmount(_0x32f3a4));
        checkForFirstFrame(_0x32f3a4) && (ctx['fillStyle'] = '#FFFFFF');
        ;
        ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x32f3a4['radius'] / 0x3, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['strokeStyle'] = '#ffffff', ctx['globalAlpha'] = _0x32f3a4['rarity'] < 0xb ? 0.25 : 0.5, ctx['beginPath'](), ctx['moveTo'](0x0, 0x0), ctx['lineTo'](0.25 * _0x32f3a4['radius'], 0x0), ctx['moveTo'](0x0, 0x0), ctx['lineTo'](0x0, -0.5 * _0x32f3a4['radius']), ctx['stroke'](), ctx['closePath'](), ctx['globalAlpha'] = 0x1;
    },
    'Shard\x20of\x20Time': _0x4ad56e => {
        ctx['fillStyle'] = blendColor('#2dd6d9', '#FF0000', blendAmount(_0x4ad56e)), ctx['strokeStyle'] = blendColor('#00CED1', '#FF0000', blendAmount(_0x4ad56e)), ctx['lineWidth'] = 0.2 * _0x4ad56e['radius'], checkForFirstFrame(_0x4ad56e) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF'), ctx['beginPath'](), ctx['moveTo'](0x0, _0x4ad56e['radius'] * 1.5), ctx['lineTo'](_0x4ad56e['radius'] * 0.75, 0x0), ctx['lineTo'](0x0, -_0x4ad56e['radius'] * 1.5), ctx['lineTo'](-_0x4ad56e['radius'] * 0.75, 0x0), ctx['lineTo'](0x0, _0x4ad56e['radius'] * 1.5), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['fillStyle'] = blendColor(blendColor(ctx['fillStyle'], '#ffffff', 0.25), '#FF0000', blendAmount(_0x4ad56e)), checkForFirstFrame(_0x4ad56e) && (ctx['fillStyle'] = '#FFFFFF'), ctx['beginPath'](), ctx['moveTo'](0x0, _0x4ad56e['radius'] * 0.9), ctx['lineTo'](_0x4ad56e['radius'] * 0.45, 0x0), ctx['lineTo'](0x0, -_0x4ad56e['radius'] * 0.9), ctx['lineTo'](-_0x4ad56e['radius'] * 0.45, 0x0), ctx['lineTo'](0x0, _0x4ad56e['radius'] * 0.9), ctx['fill'](), ctx['closePath']();
    },
    'Amulet\x20of\x20GraceProjectile': _0x186429 => {
        petalRenderMap['Amulet\x20of\x20Grace'](_0x186429);
    },
    'Shard\x20of\x20GraceProjectile': _0x477ffd => {
        petalRenderMap['Shard\x20of\x20Grace'](_0x477ffd);
    },
    'Emerald': _0x1a4369 => {
        ctx['beginPath'](), ctx['fillStyle'] = blendColor('#12e727', '#FF0000', blendAmount(_0x1a4369)), ctx['strokeStyle'] = blendColor('#08c912', '#FF0000', blendAmount(_0x1a4369)), ctx['lineWidth'] = 0x3;
        checkForFirstFrame(_0x1a4369) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF');
        ctx['rotate'](Math['PI'] / 0x4);
        for (let _0x1485e9 = 0x0; _0x1485e9 <= 0x5; _0x1485e9++) {
            ctx['lineTo'](Math['cos'](_0x1485e9 * Math['PI'] * 0x2 / 0x5) * _0x1a4369['radius'], Math['sin'](_0x1485e9 * Math['PI'] * 0x2 / 0x5) * _0x1a4369['radius']);
        }
        ctx['rotate'](-Math['PI'] / 0x4), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['fillStyle'] = blendColor(blendColor('#12e727', '#ffffff', 0.3), '#FF0000', blendAmount(_0x1a4369));
        checkForFirstFrame(_0x1a4369) && (ctx['fillStyle'] = '#FFFFFF');
        ctx['rotate'](Math['PI'] / 0x4);
        for (let _0x4fe91a = 0x0; _0x4fe91a <= 0x5; _0x4fe91a++) {
            ctx['lineTo'](Math['cos'](_0x4fe91a * Math['PI'] * 0x2 / 0x5) * _0x1a4369['radius'] * 0.6, Math['sin'](_0x4fe91a * Math['PI'] * 0x2 / 0x5) * _0x1a4369['radius'] * 0.6);
        }
        ctx['rotate'](-Math['PI'] / 0x4), ctx['fill'](), ctx['closePath']();
    },
    'Rock': _0x38814d => {
        if (_0x38814d['rarity'] === 0x7) {
            (_0x38814d['image'] === undefined || _0x38814d['image']['onload'] === undefined) && (_0x38814d['image'] = new Image(), _0x38814d['image']['src'] = 'https://memes.co.in/memes/update/uploads/2021/12/InShot_20211209_222013681-1024x1024.jpg', _0x38814d['image']['onload'] = () => {
                _0x38814d['imageLoaded'] = !![];
            });
            _0x38814d['imageLoaded'] === !![] && ctx['drawImage'](_0x38814d['image'], -_0x38814d['radius'], -_0x38814d['radius'], _0x38814d['radius'] * 0x2, _0x38814d['radius'] * 0x2);
            return;
        }
        ctx['beginPath'](), ctx['fillStyle'] = blendColor('#777777', '#FF0000', blendAmount(_0x38814d)), ctx['strokeStyle'] = blendColor('#606060', '#FF0000', blendAmount(_0x38814d)), ctx['lineWidth'] = 0x3;
        checkForFirstFrame(_0x38814d) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF');
        for (let _0x5047e4 = 0x0; _0x5047e4 < 0x5; _0x5047e4++) {
            ctx['lineTo'](Math['cos'](_0x5047e4 * 1.256) * _0x38814d['radius'], Math['sin'](_0x5047e4 * 1.256) * _0x38814d['radius']);
        }
        ctx['fill'](), ctx['lineTo'](Math['cos'](0x5 * 1.256) * _0x38814d['radius'], Math['sin'](0x5 * 1.256) * _0x38814d['radius']), ctx['stroke'](), ctx['closePath']();
    },
    'Ikea': _0x4d9f23 => {
        (_0x4d9f23['image'] === undefined || _0x4d9f23['image']['onload'] === undefined) && (_0x4d9f23['image'] = new Image(), _0x4d9f23['image']['src'] = 'https://archello.com/thumbs/images/2014/02/03/IKEA-Tampines.1506072620.5502.jpg?fit=crop&w=414&h=518', _0x4d9f23['image']['onload'] = () => {
            _0x4d9f23['imageLoaded'] = !![];
        }), _0x4d9f23['imageLoaded'] === !![] && ctx['drawImage'](_0x4d9f23['image'], -_0x4d9f23['radius'] * 0x2, -_0x4d9f23['radius'] * 0x2, _0x4d9f23['radius'] * 0x4, _0x4d9f23['radius'] * 0x4);
    },
    'IkeaChair': _0x1ae551 => {
        (_0x1ae551['image'] === undefined || _0x1ae551['image']['onload'] === undefined) && (_0x1ae551['image'] = new Image(), _0x1ae551['image']['src'] = 'https://www.ikea.com/us/en/images/products/lisabo-chair-ash__0786549_pe763015_s5.jpg', _0x1ae551['image']['onload'] = () => {
            _0x1ae551['imageLoaded'] = !![];
        }), _0x1ae551['imageLoaded'] === !![] && ctx['drawImage'](_0x1ae551['image'], -_0x1ae551['radius'] * 1.8, -_0x1ae551['radius'] * 1.8, _0x1ae551['radius'] * 3.6, _0x1ae551['radius'] * 3.6);
    },
    'Thomas': _0x2ca731 => {
        (_0x2ca731['image'] === undefined || _0x2ca731['image']['onload'] === undefined) && (_0x2ca731['image'] = new Image(), _0x2ca731['image']['src'] = 'https://i.pinimg.com/originals/96/21/65/96216524958973ceffb8b7a2f29c9110.png', _0x2ca731['image']['onload'] = () => {
            _0x2ca731['imageLoaded'] = !![];
        }), _0x2ca731['imageLoaded'] === !![] && ctx['drawImage'](_0x2ca731['image'], -_0x2ca731['radius'] * 0x2, -_0x2ca731['radius'] * 0x2, _0x2ca731['radius'] * 0x4, _0x2ca731['radius'] * 0x4);
    },
    'ThomasProjectile': _0x23bcd8 => {
        if (window['state'] !== 'game')
            return;
        if (_0x23bcd8['image'] === undefined || _0x23bcd8['image']['onload'] === undefined) {
            _0x23bcd8['image'] = new Image(), _0x23bcd8['image']['src'] = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cac178bd-54d7-48ce-807a-c46f1a058300/dbdwqrf-dd9b7ed2-7f9f-4630-acaf-6afe5d1574c7.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2NhYzE3OGJkLTU0ZDctNDhjZS04MDdhLWM0NmYxYTA1ODMwMFwvZGJkd3FyZi1kZDliN2VkMi03ZjlmLTQ2MzAtYWNhZi02YWZlNWQxNTc0YzcucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.dv3Wy-zThJiXQnv_L1gKa1UBskTmd6ltcWNnC9rISlI', _0x23bcd8['image']['onload'] = () => {
                _0x23bcd8['imageLoaded'] = !![];
            };
            var _0x218380 = new Audio('/gfx/thomas.mp3');
            _0x218380['play'](), setTimeout(() => {
                _0x23bcd8['dropped'] = !![];
            }, 0xa8c);
        }
        if (_0x23bcd8['imageLoaded'] === !![] && _0x23bcd8['dropped'] === !![]) {
            let _0x176c2a = 0.7 * Math['cos'](Date['now']() / 0x5a), _0x1bd912 = 0.5 * Math['cos'](Date['now']() / 0x2d);
            ctx['rotate'](_0x176c2a), ctx['drawImage'](_0x23bcd8['image'], -_0x23bcd8['radius'] * (1.5 + _0x1bd912), -_0x23bcd8['radius'] * (1.5 + _0x1bd912), _0x23bcd8['radius'] * 0x2 * (1.5 + _0x1bd912), _0x23bcd8['radius'] * 0x2 * (1.5 + _0x1bd912)), ctx['rotate'](-_0x176c2a);
        }
    },
    'Soil': _0x1f53a0 => {
        ctx['lineWidth'] = 0.3, ctx['beginPath'](), ctx['fillStyle'] = blendColor('#695118', '#FF0000', blendAmount(_0x1f53a0)), ctx['strokeStyle'] = blendColor('#554213', '#FF0000', blendAmount(_0x1f53a0)), checkForFirstFrame(_0x1f53a0) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF'), ctx['beginPath'](), ctx['scale'](_0x1f53a0['radius'], _0x1f53a0['radius']), ctx['moveTo'](0.13552, -1.10878), ctx['lineTo'](0.8339, -0.69709), ctx['lineTo'](0.93935, 0.37472), ctx['lineTo'](-0.03939, 0.96486), ctx['lineTo'](-0.74308, 0.7731), ctx['lineTo'](-1.02167, -0.01482), ctx['lineTo'](-0.73154, -0.71841), ctx['lineTo'](0.13552, -1.10878), ctx['fill'](), ctx['stroke'](), ctx['scale'](0x1 / _0x1f53a0['radius'], 0x1 / _0x1f53a0['radius']), ctx['closePath']();
    },
    'Salt': _0xc77ca4 => {
        ctx['beginPath'](), ctx['fillStyle'] = blendColor('#ffffff', '#FF0000', blendAmount(_0xc77ca4)), ctx['strokeStyle'] = blendColor('#cfcfcf', '#FF0000', blendAmount(_0xc77ca4)), ctx['lineWidth'] = 0x3, checkForFirstFrame(_0xc77ca4) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF'), ctx['moveTo'](_0xc77ca4['radius'] * 1.28, _0xc77ca4['radius'] * -0.25), ctx['lineTo'](_0xc77ca4['radius'] * 0.88, _0xc77ca4['radius'] * 0.7), ctx['lineTo'](_0xc77ca4['radius'] * -0.04, _0xc77ca4['radius'] * 1.15), ctx['lineTo'](_0xc77ca4['radius'] * -0.97, _0xc77ca4['radius'] * 0.71), ctx['lineTo'](_0xc77ca4['radius'] * -1.23, _0xc77ca4['radius'] * -0.35), ctx['lineTo'](_0xc77ca4['radius'] * -0.56, _0xc77ca4['radius'] * -1.23), ctx['lineTo'](_0xc77ca4['radius'] * 0.6, _0xc77ca4['radius'] * -1.12), ctx['fill'](), (ctx['lineTo'](_0xc77ca4['radius'] * 1.28, _0xc77ca4['radius'] * -0.25), ctx['stroke']()), ctx['closePath']();
    },
    'Powder': _0x3cdf8a => {
        _0x3cdf8a['rarity'] == 0x10 && window['noTrans'] !== !![] ? (ctx['fillStyle'] = blendColor('#ffffff', '#FF0000', blendAmount(_0x3cdf8a)), ctx['save'](), ctx['beginPath'](), ctx['arc'](_0x3cdf8a['radius'] * 0.63, _0x3cdf8a['radius'] * -0.63, _0x3cdf8a['radius'] * 0.46, 0x0, Math['PI'] * 0x2), ctx['arc'](_0x3cdf8a['radius'] * 0.63, _0x3cdf8a['radius'] * 0x0, _0x3cdf8a['radius'] * 0.43, 0x0, Math['PI'] * 0x2), ctx['arc'](_0x3cdf8a['radius'] * 0.45, _0x3cdf8a['radius'] * 0.26, _0x3cdf8a['radius'] * 0.43, 0x0, Math['PI'] * 0x2), ctx['arc'](_0x3cdf8a['radius'] * 0.34, _0x3cdf8a['radius'] * 0.79, _0x3cdf8a['radius'] * 0.45, 0x0, Math['PI'] * 0x2), ctx['arc'](_0x3cdf8a['radius'] * -0.1, _0x3cdf8a['radius'] * 0.4, _0x3cdf8a['radius'] * 0.45, 0x0, Math['PI'] * 0x2), ctx['arc'](_0x3cdf8a['radius'] * -0.62, _0x3cdf8a['radius'] * 0.2, _0x3cdf8a['radius'] * 0.45, 0x0, Math['PI'] * 0x2), ctx['arc'](_0x3cdf8a['radius'] * -0.71, _0x3cdf8a['radius'] * -0.09, _0x3cdf8a['radius'] * 0.45, 0x0, Math['PI'] * 0x2), ctx['arc'](_0x3cdf8a['radius'] * -0.55, _0x3cdf8a['radius'] * -0.74, _0x3cdf8a['radius'] * 0.45, 0x0, Math['PI'] * 0x2), ctx['arc'](_0x3cdf8a['radius'] * -0.16, _0x3cdf8a['radius'] * -0.57, _0x3cdf8a['radius'] * 0.45, 0x0, Math['PI'] * 0x2), ctx['arc'](_0x3cdf8a['radius'] * 0x0, _0x3cdf8a['radius'] * -0.5, _0x3cdf8a['radius'] * 0.45, 0x0, Math['PI'] * 0x2), ctx['arc'](0x0, 0x0, _0x3cdf8a['radius'] * 0.4, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['clip'](), ctx['fillStyle'] = blendColor('#5ccefa', '#FF0000', blendAmount(_0x3cdf8a)), ctx['rotate'](-_0x3cdf8a['selfAngle']), ctx['beginPath'](), ctx['rect'](-0x2 * _0x3cdf8a['radius'], -1.4 * _0x3cdf8a['radius'], 0x4 * _0x3cdf8a['radius'], 0.7 * _0x3cdf8a['radius']), ctx['rect'](-0x2 * _0x3cdf8a['radius'], 0.6 * _0x3cdf8a['radius'], 0x4 * _0x3cdf8a['radius'], 0.8 * _0x3cdf8a['radius']), ctx['fill'](), ctx['closePath'](), ctx['fillStyle'] = blendColor('#f4a9b7', '#FF0000', blendAmount(_0x3cdf8a)), ctx['beginPath'](), ctx['rect'](-0x2 * _0x3cdf8a['radius'], -0.8 * _0x3cdf8a['radius'], 0x4 * _0x3cdf8a['radius'], 0.6 * _0x3cdf8a['radius']), ctx['rect'](-0x2 * _0x3cdf8a['radius'], 0.2 * _0x3cdf8a['radius'], 0x4 * _0x3cdf8a['radius'], 0.6 * _0x3cdf8a['radius']), ctx['fill'](), ctx['closePath'](), ctx['restore']()) : (ctx['fillStyle'] = blendColor('#ffffff', '#FF0000', blendAmount(_0x3cdf8a)), ctx['beginPath'](), ctx['arc'](_0x3cdf8a['radius'] * 0.63, _0x3cdf8a['radius'] * -0.63, _0x3cdf8a['radius'] * 0.46, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['arc'](_0x3cdf8a['radius'] * 0.63, _0x3cdf8a['radius'] * 0x0, _0x3cdf8a['radius'] * 0.43, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['arc'](_0x3cdf8a['radius'] * 0.45, _0x3cdf8a['radius'] * 0.26, _0x3cdf8a['radius'] * 0.43, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['arc'](_0x3cdf8a['radius'] * 0.34, _0x3cdf8a['radius'] * 0.79, _0x3cdf8a['radius'] * 0.45, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['arc'](_0x3cdf8a['radius'] * -0.1, _0x3cdf8a['radius'] * 0.4, _0x3cdf8a['radius'] * 0.45, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['arc'](_0x3cdf8a['radius'] * -0.62, _0x3cdf8a['radius'] * 0.2, _0x3cdf8a['radius'] * 0.45, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['arc'](_0x3cdf8a['radius'] * -0.71, _0x3cdf8a['radius'] * -0.09, _0x3cdf8a['radius'] * 0.45, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['arc'](_0x3cdf8a['radius'] * -0.55, _0x3cdf8a['radius'] * -0.74, _0x3cdf8a['radius'] * 0.45, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['arc'](_0x3cdf8a['radius'] * -0.16, _0x3cdf8a['radius'] * -0.57, _0x3cdf8a['radius'] * 0.45, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['arc'](_0x3cdf8a['radius'] * 0x0, _0x3cdf8a['radius'] * -0.5, _0x3cdf8a['radius'] * 0.45, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x3cdf8a['radius'] * 0.4, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath']());
    },
    'Dust': _0xf303de => {
        ctx['fillStyle'] = blendColor('#888888', '#FF0000', blendAmount(_0xf303de));
        const _0x3ed86a = Date['now']() * 0.05, _0x4cd012 = 0x14;
        for (let _0x241a9d = 0x0; _0x241a9d < _0x4cd012; _0x241a9d++) {
            const _0x3c9fa9 = _0x241a9d / _0x4cd012 * Math['PI'] * 0x2, _0x38f315 = _0x3c9fa9 + Math['sin'](_0x3ed86a * 0.3 + _0x241a9d) * 0.5, _0x2bde76 = Math['cos'](_0x3ed86a * 0.2 + _0x241a9d * 0x2) * _0xf303de['radius'] * 0.2, _0x43a212 = _0xf303de['radius'] * 0.5 + _0x2bde76, _0x49a679 = Math['cos'](_0x38f315) * _0x43a212, _0x4cfffc = Math['sin'](_0x38f315 + _0x241a9d * 0.5) * (_0x43a212 * 0.8), _0x1eb747 = _0xf303de['radius'] * 0.2 + Math['sin'](_0x3ed86a * 0.7 + _0x241a9d * 0x3) * _0xf303de['radius'] * 0.05;
            ctx['beginPath'](), ctx['arc'](_0x49a679, _0x4cfffc, _0x1eb747, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath']();
        }
        const _0x5b210b = _0xf303de['radius'] * 0.3 + Math['sin'](_0x3ed86a * 0.5) * _0xf303de['radius'] * 0.03;
        ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x5b210b, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath']();
    },
    'Leaf': _0x27f76c => {
        const _0x470ec2 = 1.35;
        ctx['lineWidth'] = _0x27f76c['radius'] / _0x470ec2 / 2.5, ctx['fillStyle'] = blendColor('#39b54a', '#FF0000', blendAmount(_0x27f76c)), ctx['strokeStyle'] = blendColor('#2e933c', '#FF0000', blendAmount(_0x27f76c)), checkForFirstFrame(_0x27f76c) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF'), ctx['rotate'](Math['PI'] / 0x4 - 0.2), ctx['beginPath'](), ctx['moveTo'](0x0, 1.854 * _0x27f76c['radius'] / _0x470ec2), ctx['quadraticCurveTo'](-2.88 * _0x27f76c['radius'] / _0x470ec2 * 0.87, 0.31 * _0x27f76c['radius'] / _0x470ec2, 0x0, -2.325 * _0x27f76c['radius'] / _0x470ec2), ctx['moveTo'](0x0, 1.854 * _0x27f76c['radius'] / _0x470ec2), ctx['quadraticCurveTo'](2.88 * _0x27f76c['radius'] / _0x470ec2 * 0.87, 0.31 * _0x27f76c['radius'] / _0x470ec2, 0x0, -2.325 * _0x27f76c['radius'] / _0x470ec2), ctx['moveTo'](0x0, 1.948 * _0x27f76c['radius'] / _0x470ec2), ctx['lineTo'](0x0, 2.536 * _0x27f76c['radius'] / _0x470ec2), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['moveTo'](0x0, (1.948 - 0x1) * _0x27f76c['radius'] / _0x470ec2), ctx['quadraticCurveTo'](-0.18 * _0x27f76c['radius'] / _0x470ec2, -0.1885 * _0x27f76c['radius'] / _0x470ec2, 0x0, (-2.325 + 1.05) * _0x27f76c['radius'] / _0x470ec2), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](-Math['PI'] / 0x4 + 0.2);
    },
    'Blade': _0x263668 => {
        const _0x170be7 = 1.6;
        ctx['lineWidth'] = _0x263668['radius'] / _0x170be7 / 0x6, ctx['fillStyle'] = blendColor('#3ba43b', '#FF0000', blendAmount(_0x263668)), ctx['strokeStyle'] = blendColor('#1f5c1f', '#FF0000', blendAmount(_0x263668)), checkForFirstFrame(_0x263668) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF'), ctx['beginPath'](), ctx['moveTo'](0x0, _0x263668['radius'] / _0x170be7 * 2.2), ctx['quadraticCurveTo'](-0.5 * _0x263668['radius'] / _0x170be7, -0.5 * _0x263668['radius'] / _0x170be7, 0x0, -2.8 * _0x263668['radius'] / _0x170be7), ctx['moveTo'](0x0, _0x263668['radius'] / _0x170be7 * 2.2), ctx['quadraticCurveTo'](0.5 * _0x263668['radius'] / _0x170be7, -0.5 * _0x263668['radius'] / _0x170be7, 0x0, -2.8 * _0x263668['radius'] / _0x170be7), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['moveTo'](0x0, _0x263668['radius'] / _0x170be7 * 2.1), ctx['lineTo'](0x0, -2.6 * _0x263668['radius'] / _0x170be7), ctx['stroke'](), ctx['closePath']();
    },
    'Cinderleaf': _0x5e1cae => {
        const _0x3b7d24 = 1.35;
        ctx['lineWidth'] = _0x5e1cae['radius'] / _0x3b7d24 / 2.5, ctx['fillStyle'] = blendColor('#fc9547', '#FF0000', blendAmount(_0x5e1cae)), ctx['strokeStyle'] = blendColor('#cc7b3d', '#FF0000', blendAmount(_0x5e1cae)), checkForFirstFrame(_0x5e1cae) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF'), ctx['rotate'](Math['PI'] / 0x4 - 0.2), ctx['beginPath'](), ctx['moveTo'](0x0, 1.854 * _0x5e1cae['radius'] / _0x3b7d24), ctx['quadraticCurveTo'](-2.88 * _0x5e1cae['radius'] / _0x3b7d24 * 0.87, 0.31 * _0x5e1cae['radius'] / _0x3b7d24, 0x0, -2.325 * _0x5e1cae['radius'] / _0x3b7d24), ctx['moveTo'](0x0, 1.854 * _0x5e1cae['radius'] / _0x3b7d24), ctx['quadraticCurveTo'](2.88 * _0x5e1cae['radius'] / _0x3b7d24 * 0.87, 0.31 * _0x5e1cae['radius'] / _0x3b7d24, 0x0, -2.325 * _0x5e1cae['radius'] / _0x3b7d24), ctx['moveTo'](0x0, 1.948 * _0x5e1cae['radius'] / _0x3b7d24), ctx['lineTo'](0x0, 2.536 * _0x5e1cae['radius'] / _0x3b7d24), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['moveTo'](0x0, (1.948 - 0x1) * _0x5e1cae['radius'] / _0x3b7d24), ctx['quadraticCurveTo'](-0.18 * _0x5e1cae['radius'] / _0x3b7d24, -0.1885 * _0x5e1cae['radius'] / _0x3b7d24, 0x0, (-2.325 + 1.05) * _0x5e1cae['radius'] / _0x3b7d24), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](-Math['PI'] / 0x4 + 0.2);
    },
    'Shiny\x20Leaf': _0x396c9b => {
        const _0x4cd564 = 1.35;
        ctx['lineWidth'] = _0x396c9b['radius'] / _0x4cd564 / 2.5, ctx['fillStyle'] = blendColor('#ffe419', '#FF0000', blendAmount(_0x396c9b)), ctx['strokeStyle'] = blendColor('#cfb914', '#FF0000', blendAmount(_0x396c9b)), checkForFirstFrame(_0x396c9b) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF'), ctx['rotate'](Math['PI'] / 0x4 - 0.2), ctx['beginPath'](), ctx['moveTo'](0x0, 1.854 * _0x396c9b['radius'] / _0x4cd564), ctx['quadraticCurveTo'](-2.88 * _0x396c9b['radius'] / _0x4cd564 * 0.87, 0.31 * _0x396c9b['radius'] / _0x4cd564, 0x0, -2.325 * _0x396c9b['radius'] / _0x4cd564), ctx['moveTo'](0x0, 1.854 * _0x396c9b['radius'] / _0x4cd564), ctx['quadraticCurveTo'](2.88 * _0x396c9b['radius'] / _0x4cd564 * 0.87, 0.31 * _0x396c9b['radius'] / _0x4cd564, 0x0, -2.325 * _0x396c9b['radius'] / _0x4cd564), ctx['moveTo'](0x0, 1.948 * _0x396c9b['radius'] / _0x4cd564), ctx['lineTo'](0x0, 2.536 * _0x396c9b['radius'] / _0x4cd564), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['moveTo'](0x0, (1.948 - 0x1) * _0x396c9b['radius'] / _0x4cd564), ctx['quadraticCurveTo'](-0.18 * _0x396c9b['radius'] / _0x4cd564, -0.1885 * _0x396c9b['radius'] / _0x4cd564, 0x0, (-2.325 + 1.05) * _0x396c9b['radius'] / _0x4cd564), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](-Math['PI'] / 0x4 + 0.2);
    },
    'Blood\x20Leaf': _0x426c9a => {
        const _0x3c5aee = 1.35;
        ctx['lineWidth'] = _0x426c9a['radius'] / _0x3c5aee / 2.5, ctx['strokeStyle'] = blendColor('#b73333', '#FF0000', blendAmount(_0x426c9a)), ctx['fillStyle'] = blendColor('#e03f3f', '#FF0000', blendAmount(_0x426c9a)), checkForFirstFrame(_0x426c9a) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF'), ctx['rotate'](Math['PI'] / 0x4 - 0.2), ctx['beginPath'](), ctx['moveTo'](0x0, 1.854 * _0x426c9a['radius'] / _0x3c5aee), ctx['quadraticCurveTo'](-2.88 * _0x426c9a['radius'] / _0x3c5aee * 0.87, 0.31 * _0x426c9a['radius'] / _0x3c5aee, 0x0, -2.325 * _0x426c9a['radius'] / _0x3c5aee), ctx['moveTo'](0x0, 1.854 * _0x426c9a['radius'] / _0x3c5aee), ctx['quadraticCurveTo'](2.88 * _0x426c9a['radius'] / _0x3c5aee * 0.87, 0.31 * _0x426c9a['radius'] / _0x3c5aee, 0x0, -2.325 * _0x426c9a['radius'] / _0x3c5aee), ctx['moveTo'](0x0, 1.948 * _0x426c9a['radius'] / _0x3c5aee), ctx['lineTo'](0x0, 2.536 * _0x426c9a['radius'] / _0x3c5aee), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['moveTo'](0x0, (1.948 - 0x1) * _0x426c9a['radius'] / _0x3c5aee), ctx['quadraticCurveTo'](-0.18 * _0x426c9a['radius'] / _0x3c5aee, -0.1885 * _0x426c9a['radius'] / _0x3c5aee, 0x0, (-2.325 + 1.05) * _0x426c9a['radius'] / _0x3c5aee), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](-Math['PI'] / 0x4 + 0.2);
    },
    'Toxin': _0x5ce6e1 => {
        const _0x473b15 = 0x1;
        ctx['lineWidth'] = _0x5ce6e1['radius'] / _0x473b15 / 5.5, ctx['fillStyle'] = blendColor('#8e44ad', '#00FF00', blendAmount(_0x5ce6e1)), ctx['strokeStyle'] = blendColor('#6c3483', '#00FF00', blendAmount(_0x5ce6e1));
        checkForFirstFrame(_0x5ce6e1) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF');
        ctx['beginPath']();
        const _0x4fdb55 = Math['cos'](0x0) * _0x5ce6e1['radius'] * 1.2, _0x1a0727 = Math['sin'](0x0) * _0x5ce6e1['radius'] * 1.2;
        ctx['moveTo'](_0x4fdb55, _0x1a0727);
        for (let _0x201e29 = 0x0; _0x201e29 <= Math['PI'] * 0x2; _0x201e29 += Math['PI'] / 0x6) {
            const _0x9217f = Math['PI'] / 0xc, _0x2f6f2d = _0x201e29 % (Math['PI'] / 0x3) === 0x0 ? 1.2 : 0.8, _0x1dc934 = _0x5ce6e1['radius'] * _0x2f6f2d, _0x3bd2d6 = Math['cos'](_0x201e29 - _0x9217f) * (_0x1dc934 * 0.9), _0x5cc193 = Math['sin'](_0x201e29 - _0x9217f) * (_0x1dc934 * 0.9), _0x4eafe8 = Math['cos'](_0x201e29) * _0x1dc934, _0x2575cf = Math['sin'](_0x201e29) * _0x1dc934;
            ctx['quadraticCurveTo'](_0x3bd2d6, _0x5cc193, _0x4eafe8, _0x2575cf);
        }
        ctx['lineTo'](_0x4fdb55, _0x1a0727), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['fillStyle'] = blendColor('#b77fe3', '#00FF00', blendAmount(_0x5ce6e1));
        checkForFirstFrame(_0x5ce6e1) && (ctx['fillStyle'] = '#FFFFFF');
        ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x5ce6e1['radius'] / 2.3, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['strokeStyle'] = blendColor('#ffffff', '#00FF00', blendAmount(_0x5ce6e1));
        checkForFirstFrame(_0x5ce6e1) && (ctx['strokeStyle'] = '#FFFFFF');
        ctx['lineWidth'] = 0x1;
        for (let _0x25e334 = 0x0; _0x25e334 < 0x8; _0x25e334++) {
            const _0x2e0dd4 = _0x25e334 * (Math['PI'] / 0x4), _0x23fb7d = Math['cos'](_0x2e0dd4) * (_0x5ce6e1['radius'] - 0x6), _0x42e5a3 = Math['sin'](_0x2e0dd4) * (_0x5ce6e1['radius'] - 0x6), _0x5e21d7 = Math['cos'](_0x2e0dd4) * (_0x5ce6e1['radius'] + 0x6), _0x2250cd = Math['sin'](_0x2e0dd4) * (_0x5ce6e1['radius'] + 0x6);
            ctx['beginPath'](), ctx['moveTo'](_0x23fb7d, _0x42e5a3), ctx['lineTo'](_0x5e21d7, _0x2250cd), ctx['stroke'](), ctx['closePath']();
        }
    },
    'Neurotoxin': _0x2780d1 => {
        const _0x4b85e6 = 0x1;
        ctx['lineWidth'] = _0x2780d1['radius'] / _0x4b85e6 / 5.5, ctx['fillStyle'] = blendColor('#4374ad', '#00FF00', blendAmount(_0x2780d1)), ctx['strokeStyle'] = blendColor('#335883', '#00FF00', blendAmount(_0x2780d1));
        checkForFirstFrame(_0x2780d1) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF');
        ctx['beginPath']();
        const _0x21097e = Math['cos'](0x0) * _0x2780d1['radius'] * 1.2, _0x329cbb = Math['sin'](0x0) * _0x2780d1['radius'] * 1.2;
        ctx['moveTo'](_0x21097e, _0x329cbb);
        for (let _0x5875c1 = 0x0; _0x5875c1 <= Math['PI'] * 0x2; _0x5875c1 += Math['PI'] / 0x6) {
            const _0x56448a = Math['PI'] / 0xc, _0x26b3a9 = _0x5875c1 % (Math['PI'] / 0x3) === 0x0 ? 1.2 : 0.8, _0x352a4a = _0x2780d1['radius'] * _0x26b3a9, _0x3217ef = Math['cos'](_0x5875c1 - _0x56448a) * (_0x352a4a * 0.9), _0x3aef41 = Math['sin'](_0x5875c1 - _0x56448a) * (_0x352a4a * 0.9), _0x237125 = Math['cos'](_0x5875c1) * _0x352a4a, _0x594620 = Math['sin'](_0x5875c1) * _0x352a4a;
            ctx['quadraticCurveTo'](_0x3217ef, _0x3aef41, _0x237125, _0x594620);
        }
        ctx['lineTo'](_0x21097e, _0x329cbb), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['fillStyle'] = blendColor('#7fbbe2', '#00FF00', blendAmount(_0x2780d1));
        checkForFirstFrame(_0x2780d1) && (ctx['fillStyle'] = '#FFFFFF');
        ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x2780d1['radius'] / 2.3, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['strokeStyle'] = blendColor('#cccccc', '#00FF00', blendAmount(_0x2780d1));
        checkForFirstFrame(_0x2780d1) && (ctx['strokeStyle'] = '#FFFFFF');
        ctx['lineWidth'] = 0x1;
        for (let _0x54d54d = 0x0; _0x54d54d < 0x8; _0x54d54d++) {
            const _0x117a2c = _0x54d54d * (Math['PI'] / 0x4), _0x49eb47 = Math['cos'](_0x117a2c) * (_0x2780d1['radius'] - 0x6), _0x5600bb = Math['sin'](_0x117a2c) * (_0x2780d1['radius'] - 0x6), _0x33da7b = Math['cos'](_0x117a2c) * (_0x2780d1['radius'] + 0x6), _0x4fce55 = Math['sin'](_0x117a2c) * (_0x2780d1['radius'] + 0x6);
            ctx['beginPath'](), ctx['moveTo'](_0x49eb47, _0x5600bb), ctx['lineTo'](_0x33da7b, _0x4fce55), ctx['stroke'](), ctx['closePath']();
        }
    },
    'Batrachotoxin': _0x30c7d7 => {
        const _0xff3523 = 0x1;
        ctx['lineWidth'] = _0x30c7d7['radius'] / _0xff3523 / 5.5, ctx['fillStyle'] = blendColor('#ad6c43', '#00FF00', blendAmount(_0x30c7d7)), ctx['strokeStyle'] = blendColor('#835233', '#00FF00', blendAmount(_0x30c7d7));
        checkForFirstFrame(_0x30c7d7) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF');
        ctx['beginPath']();
        const _0x1e56dc = Math['cos'](0x0) * _0x30c7d7['radius'] * 1.2, _0x4f15e2 = Math['sin'](0x0) * _0x30c7d7['radius'] * 1.2;
        ctx['moveTo'](_0x1e56dc, _0x4f15e2);
        for (let _0x187f4a = 0x0; _0x187f4a <= Math['PI'] * 0x2; _0x187f4a += Math['PI'] / 0x6) {
            const _0x5b6d63 = Math['PI'] / 0xc, _0x529af4 = _0x187f4a % (Math['PI'] / 0x3) === 0x0 ? 1.2 : 0.8, _0x5b3c79 = _0x30c7d7['radius'] * _0x529af4, _0x24e49c = Math['cos'](_0x187f4a - _0x5b6d63) * (_0x5b3c79 * 0.9), _0xa7b0d5 = Math['sin'](_0x187f4a - _0x5b6d63) * (_0x5b3c79 * 0.9), _0x277404 = Math['cos'](_0x187f4a) * _0x5b3c79, _0x2f5dfb = Math['sin'](_0x187f4a) * _0x5b3c79;
            ctx['quadraticCurveTo'](_0x24e49c, _0xa7b0d5, _0x277404, _0x2f5dfb);
        }
        ctx['lineTo'](_0x1e56dc, _0x4f15e2), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['fillStyle'] = blendColor('#e2967f', '#00FF00', blendAmount(_0x30c7d7));
        checkForFirstFrame(_0x30c7d7) && (ctx['fillStyle'] = '#FFFFFF');
        ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x30c7d7['radius'] / 2.3, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['strokeStyle'] = blendColor('#aaaaaa', '#00FF00', blendAmount(_0x30c7d7));
        checkForFirstFrame(_0x30c7d7) && (ctx['strokeStyle'] = '#FFFFFF');
        ctx['lineWidth'] = 0x1;
        for (let _0x122ea4 = 0x0; _0x122ea4 < 0x8; _0x122ea4++) {
            const _0x4012af = _0x122ea4 * (Math['PI'] / 0x4), _0x4da324 = Math['cos'](_0x4012af) * (_0x30c7d7['radius'] - 0x6), _0xb1d5a7 = Math['sin'](_0x4012af) * (_0x30c7d7['radius'] - 0x6), _0x1eac3a = Math['cos'](_0x4012af) * (_0x30c7d7['radius'] + 0x6), _0x19998b = Math['sin'](_0x4012af) * (_0x30c7d7['radius'] + 0x6);
            ctx['beginPath'](), ctx['moveTo'](_0x4da324, _0xb1d5a7), ctx['lineTo'](_0x1eac3a, _0x19998b), ctx['stroke'](), ctx['closePath']();
        }
    },
    'Yucca': _0x3e11e9 => {
        const _0x59e837 = 1.35;
        ctx['lineWidth'] = _0x3e11e9['radius'] / _0x59e837 / 2.5, ctx['fillStyle'] = blendColor('#74b53f', '#FF0000', blendAmount(_0x3e11e9)), ctx['strokeStyle'] = blendColor('#5e9333', '#FF0000', blendAmount(_0x3e11e9)), checkForFirstFrame(_0x3e11e9) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF'), ctx['lineWidth'] = _0x3e11e9['radius'] / 4.5 * 1.6, ctx['beginPath'](), ctx['lineTo'](_0x3e11e9['radius'] * 0.49 * 1.6, _0x3e11e9['radius'] * -0.77 * 1.6), ctx['quadraticCurveTo'](_0x3e11e9['radius'] * 0.67 * 1.6, _0x3e11e9['radius'] * 0.37 * 1.6, _0x3e11e9['radius'] * -0.49 * 1.6, _0x3e11e9['radius'] * 0.77 * 1.6), ctx['quadraticCurveTo'](_0x3e11e9['radius'] * -0.67 * 1.6, _0x3e11e9['radius'] * -0.39 * 1.6, _0x3e11e9['radius'] * 0.49 * 1.6, _0x3e11e9['radius'] * -0.77 * 1.6), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['lineWidth'] = _0x3e11e9['radius'] / 0x8 * 1.6, ctx['beginPath'](), ctx['lineTo'](_0x3e11e9['radius'] * -0.45 * 1.6, _0x3e11e9['radius'] * 0.64 * 1.6), ctx['quadraticCurveTo'](_0x3e11e9['radius'] * -0.09 * 1.6, _0x3e11e9['radius'] * -0.21 * 1.6, _0x3e11e9['radius'] * 0.48 * 1.6, _0x3e11e9['radius'] * -0.74 * 1.6), ctx['stroke'](), ctx['closePath']();
    },
    'Shiny\x20Yucca': _0x3972f9 => {
        const _0x12f471 = 1.35;
        ctx['lineWidth'] = _0x3972f9['radius'] / _0x12f471 / 2.5, ctx['fillStyle'] = blendColor('#ffe419', '#FF0000', blendAmount(_0x3972f9)), ctx['strokeStyle'] = blendColor('#cfb914', '#FF0000', blendAmount(_0x3972f9)), checkForFirstFrame(_0x3972f9) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF'), ctx['lineWidth'] = _0x3972f9['radius'] / 4.5 * 1.6, ctx['beginPath'](), ctx['lineTo'](_0x3972f9['radius'] * 0.49 * 1.6, _0x3972f9['radius'] * -0.77 * 1.6), ctx['quadraticCurveTo'](_0x3972f9['radius'] * 0.67 * 1.6, _0x3972f9['radius'] * 0.37 * 1.6, _0x3972f9['radius'] * -0.49 * 1.6, _0x3972f9['radius'] * 0.77 * 1.6), ctx['quadraticCurveTo'](_0x3972f9['radius'] * -0.67 * 1.6, _0x3972f9['radius'] * -0.39 * 1.6, _0x3972f9['radius'] * 0.49 * 1.6, _0x3972f9['radius'] * -0.77 * 1.6), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['lineWidth'] = _0x3972f9['radius'] / 0x8 * 1.6, ctx['beginPath'](), ctx['lineTo'](_0x3972f9['radius'] * -0.45 * 1.6, _0x3972f9['radius'] * 0.64 * 1.6), ctx['quadraticCurveTo'](_0x3972f9['radius'] * -0.09 * 1.6, _0x3972f9['radius'] * -0.21 * 1.6, _0x3972f9['radius'] * 0.48 * 1.6, _0x3972f9['radius'] * -0.74 * 1.6), ctx['stroke'](), ctx['closePath']();
    },
    'Pincer': _0xbb99b6 => {
        const _0x90819a = 1.35;
        ctx['fillStyle'] = blendColor('#333333', '#FF0000', blendAmount(_0xbb99b6)), ctx['strokeStyle'] = blendColor('#292929', '#FF0000', blendAmount(_0xbb99b6)), checkForFirstFrame(_0xbb99b6) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF'), ctx['lineWidth'] = _0xbb99b6['radius'] / 4.5, ctx['beginPath'](), ctx['lineTo'](_0xbb99b6['radius'] * 0.35 * 1.4, _0xbb99b6['radius'] * 0.79 * 1.4), ctx['quadraticCurveTo'](_0xbb99b6['radius'] * 0.25 * 1.4, _0xbb99b6['radius'] * 0.2 * 1.4, _0xbb99b6['radius'] * -0.85 * 1.4, _0xbb99b6['radius'] * -0.22 * 1.4), ctx['quadraticCurveTo'](_0xbb99b6['radius'] * 0.93 * 1.4, _0xbb99b6['radius'] * -0.69 * 1.4, _0xbb99b6['radius'] * 0.35 * 1.4, _0xbb99b6['radius'] * 0.79 * 1.4), ctx['fill'](), ctx['stroke'](), ctx['closePath']();
    },
    'Yin\x20Yang': _0x415b7b => {
        let _0x1a01c3 = blendColor('#ffffff', '#FF0000', blendAmount(_0x415b7b)), _0x191b03 = blendColor('#cfcfcf', '#FF0000', blendAmount(_0x415b7b)), _0x33cf15 = blendColor('#333333', '#FF0000', blendAmount(_0x415b7b)), _0x3aa6df = blendColor('#292929', '#FF0000', blendAmount(_0x415b7b));
        checkForFirstFrame(_0x415b7b) && (_0x1a01c3 = '#FFFFFF', _0x191b03 = '#FFFFFF', _0x33cf15 = '#FFFFFF', _0x3aa6df = '#FFFFFF'), ctx['lineWidth'] = _0x415b7b['radius'] / 4.5, ctx['strokeStyle'] = _0x191b03, ctx['fillStyle'] = _0x1a01c3, ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x415b7b['radius'] * 0.89, Math['PI'] / 0x2, Math['PI'] / 0x2 * 0x3), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['strokeStyle'] = _0x3aa6df, ctx['fillStyle'] = _0x33cf15, ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x415b7b['radius'] * 0.89, 0x3 * Math['PI'] / 0x2, Math['PI'] / 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['arc'](0.5, _0x415b7b['radius'] * 0.445, _0x415b7b['radius'] * 0.445, Math['PI'] / 0x2, Math['PI'] / 0x2 * 0x3), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['strokeStyle'] = _0x191b03, ctx['fillStyle'] = _0x1a01c3, ctx['beginPath'](), ctx['arc'](-0.5, -_0x415b7b['radius'] * 0.44, _0x415b7b['radius'] * 0.445, Math['PI'] / 0x2 * 0x3, Math['PI'] / 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath']();
    },
    'Rose': _0xbb7dc1 => {
        const _0x52ca5d = 1.35;
        ctx['lineWidth'] = _0xbb7dc1['radius'] / _0x52ca5d / 2.5, ctx['fillStyle'] = blendColor('#ff94c9', '#FF0000', blendAmount(_0xbb7dc1)), ctx['strokeStyle'] = blendColor('#cf78a3', '#FF0000', blendAmount(_0xbb7dc1));
        checkForFirstFrame(_0xbb7dc1) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF');
        if (_0xbb7dc1['rarity'] >= 0xc) {
            let _0x7c3628 = 0x3, _0x304b0c = Math['PI'] * 0x2 / _0x7c3628;
            ctx['beginPath'](), ctx['moveTo'](Math['cos'](-0.5 * _0x304b0c) * _0xbb7dc1['radius'] * 0.9, Math['sin'](-0.5 * _0x304b0c) * _0xbb7dc1['radius'] * 0.9);
            for (let _0x3d24e1 = 0x0; _0x3d24e1 < _0x7c3628; _0x3d24e1++) {
                ctx['quadraticCurveTo'](Math['cos'](_0x304b0c * _0x3d24e1) * _0xbb7dc1['radius'] * 0x2, Math['sin'](_0x304b0c * _0x3d24e1) * _0xbb7dc1['radius'] * 0x2, Math['cos'](_0x304b0c * (_0x3d24e1 + 0.5)) * _0xbb7dc1['radius'] * 0.9, Math['sin'](_0x304b0c * (_0x3d24e1 + 0.5)) * _0xbb7dc1['radius'] * 0.9);
            }
            ctx['fill'](), ctx['stroke']();
        } else
            ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0xbb7dc1['radius'], 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath']();
    },
    'Blood\x20Rose': _0x4f307b => {
        const _0x5c65f6 = 1.35;
        ctx['lineWidth'] = _0x4f307b['radius'] / _0x5c65f6 / 2.5, ctx['strokeStyle'] = blendColor('#7e0d0d', '#FF0000', blendAmount(_0x4f307b)), ctx['fillStyle'] = blendColor('#9c1010', '#FF0000', blendAmount(_0x4f307b));
        checkForFirstFrame(_0x4f307b) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF');
        if (_0x4f307b['rarity'] >= 0xc) {
            let _0x582315 = 0x3, _0x54c37d = Math['PI'] * 0x2 / _0x582315;
            ctx['beginPath'](), ctx['moveTo'](Math['cos'](-0.5 * _0x54c37d) * _0x4f307b['radius'] * 0.9, Math['sin'](-0.5 * _0x54c37d) * _0x4f307b['radius'] * 0.9);
            for (let _0x4d222c = 0x0; _0x4d222c < _0x582315; _0x4d222c++) {
                ctx['quadraticCurveTo'](Math['cos'](_0x54c37d * _0x4d222c) * _0x4f307b['radius'] * 0x2, Math['sin'](_0x54c37d * _0x4d222c) * _0x4f307b['radius'] * 0x2, Math['cos'](_0x54c37d * (_0x4d222c + 0.5)) * _0x4f307b['radius'] * 0.9, Math['sin'](_0x54c37d * (_0x4d222c + 0.5)) * _0x4f307b['radius'] * 0.9);
            }
            ctx['fill'](), ctx['stroke']();
        } else
            ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x4f307b['radius'], 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath']();
    },
    'Trident': _0x3c5739 => {
        ctx['lineWidth'] = 0x3, ctx['beginPath'](), ctx['fillStyle'] = blendColor('#25dbe8', '#FF0000', blendAmount(_0x3c5739)), _0x3c5739['rarity'] == 0x5 && (ctx['fillStyle'] = blendColor('#24529c', '#FF0000', blendAmount(_0x3c5739))), checkForFirstFrame(_0x3c5739) && (ctx['fillStyle'] = '#FFFFFF'), ctx['beginPath'](), ctx['moveTo'](_0x3c5739['radius'] * -0.15, _0x3c5739['radius'] * 1.4), ctx['lineTo'](_0x3c5739['radius'] * 0.15, _0x3c5739['radius'] * 1.4), ctx['lineTo'](_0x3c5739['radius'] * 0.15, _0x3c5739['radius'] * -0.6), ctx['lineTo'](_0x3c5739['radius'] * -0.15, _0x3c5739['radius'] * -0.6), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['moveTo'](_0x3c5739['radius'] * 0.35, _0x3c5739['radius'] * -0.6), ctx['lineTo'](_0x3c5739['radius'] * -0.35, _0x3c5739['radius'] * -0.6), ctx['lineTo'](_0x3c5739['radius'] * 0x0, _0x3c5739['radius'] * -1.2), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['lineTo'](_0x3c5739['radius'] * 0.15, _0x3c5739['radius'] * 0.75), ctx['quadraticCurveTo'](_0x3c5739['radius'] * 0.35, _0x3c5739['radius'] * 0.72, _0x3c5739['radius'] * 0.62, _0x3c5739['radius'] * 0.81), ctx['lineTo'](_0x3c5739['radius'] * 0.42, _0x3c5739['radius'] * 0.5), ctx['lineTo'](_0x3c5739['radius'] * 0.15, _0x3c5739['radius'] * 0.5), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['lineTo'](_0x3c5739['radius'] * 0.62, _0x3c5739['radius'] * 0.81), ctx['quadraticCurveTo'](_0x3c5739['radius'] * 0.66, _0x3c5739['radius'] * -0.12, _0x3c5739['radius'] * 1.22, _0x3c5739['radius'] * -0.84), ctx['lineTo'](_0x3c5739['radius'] * 0.71, _0x3c5739['radius'] * -0.5), ctx['quadraticCurveTo'](_0x3c5739['radius'] * 0.5, _0x3c5739['radius'] * -0.26, _0x3c5739['radius'] * 0.42, _0x3c5739['radius'] * 0.5), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['lineTo'](_0x3c5739['radius'] * 0.71, _0x3c5739['radius'] * -0.5), ctx['lineTo'](_0x3c5739['radius'] * 0.56, _0x3c5739['radius'] * -0.54), ctx['quadraticCurveTo'](_0x3c5739['radius'] * 0.84, _0x3c5739['radius'] * -0.81, _0x3c5739['radius'] * 1.22, _0x3c5739['radius'] * -0.84), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['lineTo'](_0x3c5739['radius'] * -0.15, _0x3c5739['radius'] * 0.75), ctx['quadraticCurveTo'](_0x3c5739['radius'] * -0.35, _0x3c5739['radius'] * 0.72, _0x3c5739['radius'] * -0.62, _0x3c5739['radius'] * 0.81), ctx['lineTo'](_0x3c5739['radius'] * -0.42, _0x3c5739['radius'] * 0.5), ctx['lineTo'](_0x3c5739['radius'] * -0.15, _0x3c5739['radius'] * 0.5), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['lineTo'](_0x3c5739['radius'] * -0.62, _0x3c5739['radius'] * 0.81), ctx['quadraticCurveTo'](_0x3c5739['radius'] * -0.66, _0x3c5739['radius'] * -0.12, _0x3c5739['radius'] * -1.22, _0x3c5739['radius'] * -0.84), ctx['lineTo'](_0x3c5739['radius'] * -0.71, _0x3c5739['radius'] * -0.5), ctx['quadraticCurveTo'](_0x3c5739['radius'] * -0.5, _0x3c5739['radius'] * -0.26, _0x3c5739['radius'] * -0.42, _0x3c5739['radius'] * 0.5), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['lineTo'](_0x3c5739['radius'] * -0.71, _0x3c5739['radius'] * -0.5), ctx['lineTo'](_0x3c5739['radius'] * -0.56, _0x3c5739['radius'] * -0.54), ctx['quadraticCurveTo'](_0x3c5739['radius'] * -0.84, _0x3c5739['radius'] * -0.81, _0x3c5739['radius'] * -1.22, _0x3c5739['radius'] * -0.84), ctx['fill'](), ctx['closePath']();
    },
    'Dahlia': _0x40108f => {
        const _0x2c67a8 = 0x1;
        ctx['lineWidth'] = _0x40108f['radius'] / _0x2c67a8 / 2.5, ctx['fillStyle'] = blendColor('#ff94c9', '#FF0000', blendAmount(_0x40108f)), ctx['strokeStyle'] = blendColor('#cf78a3', '#FF0000', blendAmount(_0x40108f)), checkForFirstFrame(_0x40108f) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF'), ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x40108f['radius'], 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath']();
    },
    'Corn': _0x2fc3cc => {
        ctx['lineWidth'] = _0x2fc3cc['radius'] * 0.65, ctx['fillStyle'] = blendColor('#ffe419', '#FF0000', blendAmount(_0x2fc3cc)), ctx['strokeStyle'] = blendColor('#cfb914', '#FF0000', blendAmount(_0x2fc3cc)), checkForFirstFrame(_0x2fc3cc) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF'), ctx['beginPath'](), ctx['lineTo'](_0x2fc3cc['radius'] * -0.159, _0x2fc3cc['radius'] * 1.122), ctx['quadraticCurveTo'](-_0x2fc3cc['radius'] * 0.16, _0x2fc3cc['radius'] * 0.17, _0x2fc3cc['radius'] * -1.085, _0x2fc3cc['radius'] * 0.342), ctx['quadraticCurveTo'](_0x2fc3cc['radius'] * -0.76, _0x2fc3cc['radius'] * -1.91, _0x2fc3cc['radius'] * 0.63, _0x2fc3cc['radius'] * -0.74), ctx['quadraticCurveTo'](_0x2fc3cc['radius'] * 0x2, _0x2fc3cc['radius'] * 0.43, _0x2fc3cc['radius'] * -0.159, _0x2fc3cc['radius'] * 1.122), ctx['stroke'](), ctx['fill'](), ctx['closePath']();
    },
    'Blood\x20Corn': _0x208972 => {
        ctx['lineWidth'] = _0x208972['radius'] * 0.65, ctx['fillStyle'] = blendColor('#ff1919', '#FF0000', blendAmount(_0x208972)), ctx['strokeStyle'] = blendColor('#cf1414', '#FF0000', blendAmount(_0x208972)), checkForFirstFrame(_0x208972) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF'), ctx['beginPath'](), ctx['lineTo'](_0x208972['radius'] * -0.159, _0x208972['radius'] * 1.122), ctx['quadraticCurveTo'](-_0x208972['radius'] * 0.16, _0x208972['radius'] * 0.17, _0x208972['radius'] * -1.085, _0x208972['radius'] * 0.342), ctx['quadraticCurveTo'](_0x208972['radius'] * -0.76, _0x208972['radius'] * -1.91, _0x208972['radius'] * 0.63, _0x208972['radius'] * -0.74), ctx['quadraticCurveTo'](_0x208972['radius'] * 0x2, _0x208972['radius'] * 0.43, _0x208972['radius'] * -0.159, _0x208972['radius'] * 1.122), ctx['stroke'](), ctx['fill'](), ctx['closePath']();
    },
    'Token': _0x432a87 => {
        ctx['lineWidth'] = 0x3, ctx['beginPath'](), ctx['fillStyle'] = blendColor('#ffcb21', '#FF0000', blendAmount(_0x432a87)), ctx['strokeStyle'] = blendColor('#c79b0c', '#FF0000', blendAmount(_0x432a87)), checkForFirstFrame(_0x432a87) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF'), ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x432a87['radius'], 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['fillStyle'] = 'hsl(' + Date['now']() / 2.5 % 0x168 + ',\x2050%,\x2050%)', ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x432a87['radius'] / 2.5, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath']();
    },
    'Bone': _0x1a5dfc => {
        let _0x394301 = blendColor('#ffffff', '#FF0000', blendAmount(_0x1a5dfc)), _0x3962bb = blendColor('#cdcdcd', '#FF0000', blendAmount(_0x1a5dfc));
        checkForFirstFrame(_0x1a5dfc) && (_0x394301 = '#FFFFFF', _0x3962bb = '#FFFFFF'), ctx['fillStyle'] = _0x3962bb, ctx['lineWidth'] = _0x1a5dfc['radius'] / 0x6, ctx['beginPath'](), ctx['arc'](_0x1a5dfc['radius'] * 0.33, _0x1a5dfc['radius'] * 0.93, _0x1a5dfc['radius'] * 0.39, -Math['PI'] * 0.1, Math['PI'] * 1.05), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['arc'](_0x1a5dfc['radius'] * 0.7, _0x1a5dfc['radius'] * 0.69, _0x1a5dfc['radius'] * 0.39, -Math['PI'] * 0.45, Math['PI'] * 0.6), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['arc'](_0x1a5dfc['radius'] * -0.7, _0x1a5dfc['radius'] * -0.67, _0x1a5dfc['radius'] * 0.39, Math['PI'] * 0.69, Math['PI'] * 1.8), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['arc'](_0x1a5dfc['radius'] * -0.32, _0x1a5dfc['radius'] * -0.91, _0x1a5dfc['radius'] * 0.39, Math['PI'] * 0.95, 0.1), ctx['fill'](), ctx['closePath'](), ctx['fillStyle'] = _0x394301, ctx['beginPath'](), ctx['arc'](_0x1a5dfc['radius'] * 0.33, _0x1a5dfc['radius'] * 0.93, _0x1a5dfc['radius'] * 0.22, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['arc'](_0x1a5dfc['radius'] * 0.7, _0x1a5dfc['radius'] * 0.69, _0x1a5dfc['radius'] * 0.22, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['arc'](_0x1a5dfc['radius'] * -0.7, _0x1a5dfc['radius'] * -0.67, _0x1a5dfc['radius'] * 0.22, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['arc'](_0x1a5dfc['radius'] * -0.32, _0x1a5dfc['radius'] * -0.91, _0x1a5dfc['radius'] * 0.22, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['strokeStyle'] = _0x3962bb, ctx['beginPath'](), ctx['lineTo'](_0x1a5dfc['radius'] * 0.035, _0x1a5dfc['radius'] * 0.86), ctx['quadraticCurveTo'](_0x1a5dfc['radius'] * -0.03, _0x1a5dfc['radius'] * 0.07, _0x1a5dfc['radius'] * -0.86, _0x1a5dfc['radius'] * -0.41), ctx['lineTo'](_0x1a5dfc['radius'] * -0.5, _0x1a5dfc['radius'] * -0.78), ctx['lineTo'](_0x1a5dfc['radius'] * -0.02, _0x1a5dfc['radius'] * -0.86), ctx['quadraticCurveTo'](_0x1a5dfc['radius'] * 0.03, _0x1a5dfc['radius'] * -0.07, _0x1a5dfc['radius'] * 0.8, _0x1a5dfc['radius'] * 0.42), ctx['lineTo'](_0x1a5dfc['radius'] * 0.51, _0x1a5dfc['radius'] * 0.789), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['lineTo'](_0x1a5dfc['radius'] * 0.035, _0x1a5dfc['radius'] * 0.86), ctx['quadraticCurveTo'](_0x1a5dfc['radius'] * -0.03, _0x1a5dfc['radius'] * 0.07, _0x1a5dfc['radius'] * -0.86, _0x1a5dfc['radius'] * -0.41), ctx['moveTo'](_0x1a5dfc['radius'] * 0.8, _0x1a5dfc['radius'] * 0.42), ctx['quadraticCurveTo'](_0x1a5dfc['radius'] * 0.03, _0x1a5dfc['radius'] * -0.07, _0x1a5dfc['radius'] * -0.02, _0x1a5dfc['radius'] * -0.86), ctx['stroke'](), ctx['closePath']();
    },
    'Wing': _0x295bd7 => {
        const _0x590851 = 1.35;
        ctx['lineWidth'] = _0x295bd7['radius'] / _0x590851 / 1.9, ctx['fillStyle'] = blendColor('#ffffff', '#FF0000', blendAmount(_0x295bd7)), ctx['strokeStyle'] = blendColor('#cdcdcd', '#FF0000', blendAmount(_0x295bd7)), checkForFirstFrame(_0x295bd7) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF'), ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x295bd7['radius'] * 1.01, -Math['PI'] * 0.18, Math['PI'] * 0.818), ctx['arcTo'](_0x295bd7['radius'] * 0.42, _0x295bd7['radius'] * 0.6, _0x295bd7['radius'] * 0.85, -_0x295bd7['radius'] * 0.53, _0x295bd7['radius'] * 1.7), ctx['stroke'](), ctx['fill'](), ctx['closePath']();
    },
    'Shiny\x20Wing': _0x262fd7 => {
        const _0x430c54 = 1.35;
        ctx['lineWidth'] = _0x262fd7['radius'] / _0x430c54 / 1.9, ctx['fillStyle'] = blendColor('#fff991', '#FF0000', blendAmount(_0x262fd7)), ctx['strokeStyle'] = blendColor('#d1cc76', '#FF0000', blendAmount(_0x262fd7)), checkForFirstFrame(_0x262fd7) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF'), ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x262fd7['radius'] * 1.01, -Math['PI'] * 0.18, Math['PI'] * 0.818), ctx['arcTo'](_0x262fd7['radius'] * 0.42, _0x262fd7['radius'] * 0.6, _0x262fd7['radius'] * 0.85, -_0x262fd7['radius'] * 0.53, _0x262fd7['radius'] * 1.7), ctx['stroke'](), ctx['fill'](), ctx['closePath']();
    },
    'Coconut': _0x18e42e => {
        const _0x2a6a69 = 1.35;
        ctx['lineWidth'] = _0x18e42e['radius'] / _0x2a6a69 / 2.2, ctx['fillStyle'] = blendColor('#8b5a2b', '#FF0000', blendAmount(_0x18e42e)), ctx['strokeStyle'] = blendColor('#5c3b1a', '#FF0000', blendAmount(_0x18e42e));
        checkForFirstFrame(_0x18e42e) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF');
        ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x18e42e['radius'], 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['fillStyle'] = blendColor('#3b2412', '#FF0000', blendAmount(_0x18e42e));
        checkForFirstFrame(_0x18e42e) && (ctx['fillStyle'] = '#FFFFFF');
        const _0x4cfca7 = _0x18e42e['radius'] / 0x6;
        for (let _0x220942 = -0x1; _0x220942 <= 0x1; _0x220942++) {
            ctx['beginPath'](), ctx['arc'](_0x18e42e['radius'] * 0.35 * Math['cos'](_0x220942 * 2.0943), _0x18e42e['radius'] * 0.35 * Math['sin'](_0x220942 * 2.0943), _0x4cfca7, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath']();
        }
    },
    'Fig': _0x1ce792 => {
        const _0x14605d = 1.35;
        ctx['lineWidth'] = _0x1ce792['radius'] / _0x14605d / 2.2, ctx['fillStyle'] = blendColor('#7d3c98', '#FF0000', blendAmount(_0x1ce792)), ctx['strokeStyle'] = blendColor('#5e2b7b', '#FF0000', blendAmount(_0x1ce792)), checkForFirstFrame(_0x1ce792) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF'), ctx['beginPath'](), ctx['moveTo'](0x0, -_0x1ce792['radius'] * 0.9), ctx['bezierCurveTo'](_0x1ce792['radius'] * 0.9, -_0x1ce792['radius'] * 0.5, _0x1ce792['radius'] * 0.9, _0x1ce792['radius'] * 0.9, 0x0, _0x1ce792['radius']), ctx['bezierCurveTo'](-_0x1ce792['radius'] * 0.9, _0x1ce792['radius'] * 0.9, -_0x1ce792['radius'] * 0.9, -_0x1ce792['radius'] * 0.5, 0x0, -_0x1ce792['radius'] * 0.9), ctx['fill'](), ctx['stroke'](), ctx['closePath']();
    },
    'Oranges': _0x130a37 => {
        const _0x4f1363 = 1.35;
        ctx['lineWidth'] = _0x130a37['radius'] / _0x4f1363 / 2.2, ctx['fillStyle'] = blendColor('#f0bd48', '#FF0000', blendAmount(_0x130a37)), ctx['strokeStyle'] = blendColor('#c2993a', '#FF0000', blendAmount(_0x130a37)), checkForFirstFrame(_0x130a37) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF'), ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x130a37['radius'], 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['fillStyle'] = blendColor('#39b54a', '#FF0000', blendAmount(_0x130a37)), ctx['strokeStyle'] = blendColor('#2e933c', '#FF0000', blendAmount(_0x130a37)), checkForFirstFrame(_0x130a37) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF'), ctx['lineWidth'] = _0x130a37['radius'] / 3.4, ctx['beginPath'](), ctx['moveTo'](_0x130a37['radius'] * 0.61, _0x130a37['radius'] * 0.13), ctx['quadraticCurveTo'](_0x130a37['radius'] * 0.92, _0x130a37['radius'] * 0.51, _0x130a37['radius'] * 0.3, _0x130a37['radius'] * 1.09), ctx['quadraticCurveTo'](_0x130a37['radius'] * 0.08, _0x130a37['radius'] * 0.18, _0x130a37['radius'] * 0.61, _0x130a37['radius'] * 0.13), ctx['stroke'](), ctx['fill']();
    },
    'Blood\x20Oranges': _0x2f48da => {
        const _0x300036 = 1.35;
        ctx['lineWidth'] = _0x2f48da['radius'] / _0x300036 / 2.2, ctx['fillStyle'] = blendColor('#f04848', '#FF0000', blendAmount(_0x2f48da)), ctx['strokeStyle'] = blendColor('#c23a3a', '#FF0000', blendAmount(_0x2f48da)), checkForFirstFrame(_0x2f48da) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF'), ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x2f48da['radius'], 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['fillStyle'] = blendColor('#39b54a', '#FF0000', blendAmount(_0x2f48da)), ctx['strokeStyle'] = blendColor('#2e933c', '#FF0000', blendAmount(_0x2f48da)), checkForFirstFrame(_0x2f48da) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF'), ctx['lineWidth'] = _0x2f48da['radius'] / 3.4, ctx['beginPath'](), ctx['moveTo'](_0x2f48da['radius'] * 0.61, _0x2f48da['radius'] * 0.13), ctx['quadraticCurveTo'](_0x2f48da['radius'] * 0.92, _0x2f48da['radius'] * 0.51, _0x2f48da['radius'] * 0.3, _0x2f48da['radius'] * 1.09), ctx['quadraticCurveTo'](_0x2f48da['radius'] * 0.08, _0x2f48da['radius'] * 0.18, _0x2f48da['radius'] * 0.61, _0x2f48da['radius'] * 0.13), ctx['stroke'](), ctx['fill']();
    },
    'Spikes': _0x4dbfbf => {
        const _0x5dbc9b = 1.35;
        ctx['lineWidth'] = _0x4dbfbf['radius'] / _0x5dbc9b / 2.2, ctx['fillStyle'] = blendColor('#f5d76e', '#ff5e5e', blendAmount(_0x4dbfbf)), ctx['strokeStyle'] = blendColor('#c79e2b', '#ff0000', blendAmount(_0x4dbfbf)), checkForFirstFrame(_0x4dbfbf) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF'), ctx['lineWidth'] = 2.75, ctx['lineJoin'] = 'round', ctx['rotate'](Math['PI'] / 0x2), ctx['beginPath'](), ctx['lineWidth'] = _0x4dbfbf['radius'] / 1.5, ctx['moveTo'](0x0, -_0x4dbfbf['radius'] * Math['sqrt'](0x3)), ctx['lineTo'](_0x4dbfbf['radius'] * Math['sqrt'](0x3) * 0.48, _0x4dbfbf['radius'] / 0x2 * Math['sqrt'](0x3)), ctx['lineTo'](-_0x4dbfbf['radius'] * Math['sqrt'](0x3) * 0.48, _0x4dbfbf['radius'] / 0x2 * Math['sqrt'](0x3)), ctx['lineTo'](0x0, -_0x4dbfbf['radius'] * Math['sqrt'](0x3)), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](-Math['PI'] / 0x2);
    },
    'Neutron\x20Star': _0x58bc50 => {
        const _0x39b32b = 1.35;
        ctx['lineWidth'] = _0x58bc50['radius'] / _0x39b32b / 2.5, ctx['strokeStyle'] = blendColor('#0f0742', '#FF0000', blendAmount(_0x58bc50));
        checkForFirstFrame(_0x58bc50) && (ctx['strokeStyle'] = '#FFFFFF');
        ctx['beginPath']();
        for (let _0x3e8636 = 0x7; _0x3e8636--; _0x3e8636 > 0x0) {
            ctx['lineTo'](Math['cos'](_0x3e8636 * Math['PI'] / 0x3 + _0x58bc50['angle'] / 0x5) * _0x58bc50['radius'], Math['sin'](_0x3e8636 * Math['PI'] / 0x3 + _0x58bc50['angle'] / 0x5) * _0x58bc50['radius'] * 0x2 / 0x3);
        }
        ctx['stroke'](), ctx['closePath'](), ctx['strokeStyle'] = blendColor('#3c115c', '#FF0000', blendAmount(_0x58bc50));
        checkForFirstFrame(_0x58bc50) && (ctx['strokeStyle'] = '#FFFFFF');
        ctx['beginPath']();
        for (let _0x1b899d = 0x7; _0x1b899d--; _0x1b899d > 0x0) {
            ctx['lineTo'](Math['cos'](_0x1b899d * Math['PI'] / 0x3 + Math['PI'] / 0x6 - _0x58bc50['angle'] / 0x5) * _0x58bc50['radius'] * 0x2 / 0x3, Math['sin'](_0x1b899d * Math['PI'] / 0x3 + Math['PI'] / 0x6 - _0x58bc50['angle'] / 0x5) * _0x58bc50['radius']);
        }
        ctx['stroke'](), ctx['closePath']();
    },
    'Honey': _0xc5c9aa => {
        const _0xbe4bef = 1.35;
        ctx['lineWidth'] = _0xc5c9aa['radius'] / _0xbe4bef / 2.5, ctx['fillStyle'] = blendColor('#f7cf2f', '#FF0000', blendAmount(_0xc5c9aa)), ctx['strokeStyle'] = blendColor('#c8a826', '#FF0000', blendAmount(_0xc5c9aa));
        checkForFirstFrame(_0xc5c9aa) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF');
        ctx['beginPath']();
        for (let _0x2774a5 = 0x7; _0x2774a5--; _0x2774a5 > 0x0) {
            ctx['lineTo'](Math['cos'](_0x2774a5 * Math['PI'] / 0x3) * _0xc5c9aa['radius'], Math['sin'](_0x2774a5 * Math['PI'] / 0x3) * _0xc5c9aa['radius']);
        }
        ctx['fill'](), ctx['stroke'](), ctx['closePath']();
    },
    'Peas': _0xc0a94a => {
        const _0x1f8e4f = 0x1;
        ctx['lineWidth'] = _0xc0a94a['radius'] / _0x1f8e4f / 2.5, ctx['fillStyle'] = blendColor('#8ac255', '#FF0000', blendAmount(_0xc0a94a)), ctx['strokeStyle'] = blendColor('#709d45', '#FF0000', blendAmount(_0xc0a94a)), checkForFirstFrame(_0xc0a94a) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF'), ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0xc0a94a['radius'], 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath']();
    },
    'Grapes': _0x81bd8c => {
        const _0x31505f = 0x1;
        ctx['lineWidth'] = _0x81bd8c['radius'] / _0x31505f / 2.5, ctx['fillStyle'] = blendColor('#ce76db', '#FF0000', blendAmount(_0x81bd8c)), ctx['strokeStyle'] = blendColor('#a760b1', '#FF0000', blendAmount(_0x81bd8c)), checkForFirstFrame(_0x81bd8c) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF'), ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x81bd8c['radius'], 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath']();
    },
    'Blueberries': _0x3451c3 => {
        const _0x1d2432 = 0x1;
        ctx['lineWidth'] = _0x3451c3['radius'] / _0x1d2432 / 2.5, ctx['strokeStyle'] = blendColor('#21c4b9', '#FF0000', blendAmount(_0x3451c3)), ctx['fillStyle'] = blendColor('#29f2e5', '#FF0000', blendAmount(_0x3451c3)), checkForFirstFrame(_0x3451c3) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF'), ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x3451c3['radius'], 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath']();
    },
    'Pomegranate': _0x52a00e => {
        const _0x5a7b14 = 0x1;
        ctx['lineWidth'] = _0x52a00e['radius'] / _0x5a7b14 / 2.5, ctx['strokeStyle'] = blendColor('#cf235f', '#FF0000', blendAmount(_0x52a00e)), ctx['fillStyle'] = blendColor('#ff2b75', '#FF0000', blendAmount(_0x52a00e)), checkForFirstFrame(_0x52a00e) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF'), ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x52a00e['radius'], 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath']();
    },
    'Cactus': _0x179f10 => {
        if (_0x179f10['rarity'] === 0x6)
            return;
        const _0x2df6c2 = 0x1;
        ctx['lineWidth'] = _0x179f10['radius'] / _0x2df6c2 / 5.5, ctx['fillStyle'] = blendColor('#38c75f', '#FF0000', blendAmount(_0x179f10)), ctx['strokeStyle'] = blendColor('#2da14d', '#FF0000', blendAmount(_0x179f10));
        checkForFirstFrame(_0x179f10) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF');
        ctx['beginPath'](), ctx['moveTo'](_0x179f10['radius'], 0x0);
        for (let _0x5a54da = 0x0; _0x5a54da <= Math['PI'] * 0x2; _0x5a54da += Math['PI'] / 0x4) {
            ctx['quadraticCurveTo'](Math['cos'](_0x5a54da - Math['PI'] / 0x8) * (_0x179f10['radius'] * 0.7), Math['sin'](_0x5a54da - Math['PI'] / 0x8) * (_0x179f10['radius'] * 0.7), Math['cos'](_0x5a54da) * _0x179f10['radius'], Math['sin'](_0x5a54da) * _0x179f10['radius']);
        }
        ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['fillStyle'] = blendColor('#74d68f', '#FF0000', blendAmount(_0x179f10)), checkForFirstFrame(_0x179f10) && (ctx['fillStyle'] = '#FFFFFF'), ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x179f10['radius'] / 0x2, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath']();
    },
    'Shiny\x20Cactus': _0x3b0659 => {
        if (_0x3b0659['rarity'] === 0x6)
            return;
        const _0x5bce4f = 0x1;
        ctx['lineWidth'] = _0x3b0659['radius'] / _0x5bce4f / 5.5, ctx['fillStyle'] = blendColor('#d7d228', '#FF0000', blendAmount(_0x3b0659)), ctx['strokeStyle'] = blendColor('#aeaa20', '#FF0000', blendAmount(_0x3b0659));
        checkForFirstFrame(_0x3b0659) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF');
        ctx['beginPath'](), ctx['moveTo'](_0x3b0659['radius'], 0x0);
        for (let _0x587ea4 = 0x0; _0x587ea4 <= Math['PI'] * 0x2; _0x587ea4 += Math['PI'] / 0x4) {
            ctx['quadraticCurveTo'](Math['cos'](_0x587ea4 - Math['PI'] / 0x8) * (_0x3b0659['radius'] * 0.7), Math['sin'](_0x587ea4 - Math['PI'] / 0x8) * (_0x3b0659['radius'] * 0.7), Math['cos'](_0x587ea4) * _0x3b0659['radius'], Math['sin'](_0x587ea4) * _0x3b0659['radius']);
        }
        ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['fillStyle'] = blendColor('#f1ee59', '#FF0000', blendAmount(_0x3b0659)), checkForFirstFrame(_0x3b0659) && (ctx['fillStyle'] = '#FFFFFF'), ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x3b0659['radius'] / 0x2, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath']();
    },
    'Dandelion': _0x57d9be => {
        ctx['strokeStyle'] = 'black', ctx['lineWidth'] = _0x57d9be['radius'] / 1.39, ctx['beginPath'](), ctx['moveTo'](-_0x57d9be['radius'] * 1.59, 0x0), ctx['lineTo'](0x0, 0x0), ctx['stroke'](), ctx['closePath'](), ctx['lineWidth'] = _0x57d9be['radius'] / 0x4, ctx['fillStyle'] = blendColor('#ffffff', '#FF0000', blendAmount(_0x57d9be)), ctx['strokeStyle'] = blendColor('#cfcfcf', '#FF0000', blendAmount(_0x57d9be)), checkForFirstFrame(_0x57d9be) && (ctx['fillStyle'] = '#ffffff', ctx['strokeStyle'] = '#ffffff'), ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x57d9be['radius'] * 0x9 / 0xa, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath']();
    },
    'Egg': _0x4ff010 => {
        ctx['lineWidth'] = 0x3, ctx['beginPath'](), ctx['fillStyle'] = blendColor('#fff0b8', '#FF0000', blendAmount(_0x4ff010)), ctx['strokeStyle'] = blendColor('#cfc295', '#FF0000', blendAmount(_0x4ff010)), checkForFirstFrame(_0x4ff010) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF'), ctx['beginPath'](), ctx['ellipse'](0x0, 0x0, _0x4ff010['radius'], _0x4ff010['radius'] * 1.35, 0x0, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath']();
    },
    'Shiny\x20Egg': _0xcbe3db => {
        ctx['lineWidth'] = _0xcbe3db['radius'] / 4.5, ctx['fillStyle'] = blendColor('#f5fa6e', '#FFFFFF', Math['max'](0x0, blendAmount(_0xcbe3db))), ctx['strokeStyle'] = blendColor('#c6ca59', '#FFFFFF', Math['max'](0x0, blendAmount(_0xcbe3db))), checkForFirstFrame(_0xcbe3db) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF'), ctx['beginPath'](), ctx['ellipse'](0x0, 0x0, _0xcbe3db['radius'], _0xcbe3db['radius'] * 1.35, 0x0, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath']();
    },
    'Jellyfish\x20Egg': _0x16b150 => {
        ctx['lineWidth'] = 0x3, ctx['beginPath'](), ctx['fillStyle'] = blendColor('#ffffff', '#FF0000', blendAmount(_0x16b150)), ctx['strokeStyle'] = blendColor('#b8b8b8', '#FF0000', blendAmount(_0x16b150)), checkForFirstFrame(_0x16b150) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF'), ctx['globalAlpha'] *= 0.5, ctx['beginPath'](), ctx['ellipse'](0x0, 0x0, _0x16b150['radius'], _0x16b150['radius'] * 1.35, 0x0, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['globalAlpha'] *= 0x2, ctx['beginPath'](), ctx['ellipse'](0x0, 0x0, _0x16b150['radius'], _0x16b150['radius'] * 1.35, 0x0, 0x0, Math['PI'] * 0x2), ctx['stroke'](), ctx['closePath'](), ctx['globalAlpha'] *= 0.7, ctx['beginPath'](), ctx['arc'](_0x16b150['radius'] * 0.31, _0x16b150['radius'] * 0.5, _0x16b150['radius'] * 0.33, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['arc'](_0x16b150['radius'] * -0.53, _0x16b150['radius'] * 0.25, _0x16b150['radius'] * 0.12, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['arc'](_0x16b150['radius'] * -0.34, _0x16b150['radius'] * -0.29, _0x16b150['radius'] * 0.25, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['arc'](_0x16b150['radius'] * 0.33, _0x16b150['radius'] * -0.21, _0x16b150['radius'] * 0.165, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['arc'](0x0, _0x16b150['radius'] * -0.7, _0x16b150['radius'] * 0.164, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['globalAlpha'] *= 0x1 / 0.7;
    },
    'Neuroflare\x20Egg': _0x30619e => {
        ctx['lineWidth'] = 0x3, ctx['beginPath'](), ctx['fillStyle'] = blendColor('#44b8b4', '#FF0000', blendAmount(_0x30619e)), ctx['strokeStyle'] = blendColor('#2c9490', '#FF0000', blendAmount(_0x30619e)), checkForFirstFrame(_0x30619e) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF'), ctx['globalAlpha'] *= 0.5, ctx['beginPath'](), ctx['ellipse'](0x0, 0x0, _0x30619e['radius'], _0x30619e['radius'] * 1.35, 0x0, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['globalAlpha'] *= 0x2, ctx['beginPath'](), ctx['ellipse'](0x0, 0x0, _0x30619e['radius'], _0x30619e['radius'] * 1.35, 0x0, 0x0, Math['PI'] * 0x2), ctx['stroke'](), ctx['closePath'](), ctx['globalAlpha'] *= 0.7, ctx['beginPath'](), ctx['arc'](_0x30619e['radius'] * 0.31, _0x30619e['radius'] * 0.5, _0x30619e['radius'] * 0.33, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['arc'](_0x30619e['radius'] * -0.53, _0x30619e['radius'] * 0.25, _0x30619e['radius'] * 0.12, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['arc'](_0x30619e['radius'] * -0.34, _0x30619e['radius'] * -0.29, _0x30619e['radius'] * 0.25, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['arc'](_0x30619e['radius'] * 0.33, _0x30619e['radius'] * -0.21, _0x30619e['radius'] * 0.165, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['arc'](0x0, _0x30619e['radius'] * -0.7, _0x30619e['radius'] * 0.164, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['globalAlpha'] *= 0x1 / 0.7;
    },
    'Plastic\x20Egg': _0x4cddbc => {
        ctx['lineWidth'] = 0x3, ctx['beginPath'](), ctx['fillStyle'] = blendColor('#4b89db', '#FF0000', blendAmount(_0x4cddbc)), ctx['strokeStyle'] = blendColor('#3563a1', '#FF0000', blendAmount(_0x4cddbc)), checkForFirstFrame(_0x4cddbc) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF'), ctx['beginPath'](), ctx['ellipse'](0x0, 0x0, _0x4cddbc['radius'], _0x4cddbc['radius'] * 1.35, 0x0, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath']();
    },
    'Mini\x20Flower': _0x399231 => {
        ctx['lineWidth'] = 0x3;
        (_0x399231['flowerRender'] === undefined || _0x399231['flowerRender']['drawFlower'] === undefined) && (_0x399231['flowerRender'] = new Flower(0x1));
        const _0x50eea8 = room['flowers'][window['selfId']];
        _0x50eea8 && (_0x399231['flowerRender']['render']['petalDistance'] = _0x50eea8['render']['petalDistance'], _0x399231['flowerRender']['render']['fastPetalDistance'] = _0x50eea8['render']['fastPetalDistance'], _0x399231['flowerRender']['render']['radius'] = _0x399231['radius'], _0x399231['flowerRender']['radius'] = _0x399231['radius']), _0x399231['flowerRender']['drawFlower'](0x0, 0x0, _0x399231['radius']);
    },
    'Web': _0x3035de => {
        const _0x600d41 = 0x1;
        ctx['lineWidth'] = _0x3035de['radius'] / _0x600d41 / 5.5, ctx['fillStyle'] = blendColor('#ffffff', '#FF0000', blendAmount(_0x3035de)), ctx['strokeStyle'] = blendColor('#cfcfcf', '#FF0000', blendAmount(_0x3035de));
        checkForFirstFrame(_0x3035de) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF');
        ctx['beginPath'](), ctx['moveTo'](_0x3035de['radius'], 0x0);
        for (let _0x45444c = 0x0; _0x45444c <= Math['PI'] * 0x2; _0x45444c += Math['PI'] * 0x2 / 0x5) {
            ctx['quadraticCurveTo'](Math['cos'](_0x45444c - Math['PI'] * 0x1 / 0x5) * (_0x3035de['radius'] * 0.6), Math['sin'](_0x45444c - Math['PI'] / 0x5) * (_0x3035de['radius'] * 0.6), Math['cos'](_0x45444c) * _0x3035de['radius'], Math['sin'](_0x45444c) * _0x3035de['radius']);
        }
        ctx['fill'](), ctx['stroke'](), ctx['closePath']();
    },
    'Pollen': _0x57b942 => {
        ctx['lineWidth'] = 0x3, ctx['beginPath'](), ctx['fillStyle'] = blendColor('#ffe763', '#FF0000', blendAmount(_0x57b942)), ctx['strokeStyle'] = blendColor('#cfbb50', '#FF0000', blendAmount(_0x57b942)), checkForFirstFrame(_0x57b942) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF'), ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x57b942['radius'], 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath']();
    },
    'Magnet': _0x3f1f91 => {
        _0x3f1f91['extraRot'] && (ctx['rotate'](_0x3f1f91['extraRot']), ctx['strokeStyle'] = Colors['rarities'][_0x3f1f91['magC']]['color'], ctx['lineWidth'] = _0x3f1f91['radius'] * Math['max'](0x0, Math['min'](0.25, _0x3f1f91['extraRot'] - 0.1)), ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x3f1f91['radius'] * (2.5 + Math['cos'](_0x3f1f91['extraRot'] + Math['PI'])) * 0.75, 0x0, Math['PI'] * 0x2), ctx['stroke'](), ctx['closePath']());
        ctx['fillStyle'] = blendColor('#a44343', '#FF0000', blendAmount(_0x3f1f91)), ctx['strokeStyle'] = blendColor('#853636', '#FF0000', blendAmount(_0x3f1f91));
        checkForFirstFrame(_0x3f1f91) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF');
        ctx['lineWidth'] = _0x3f1f91['radius'] / 0x6, ctx['lineCap'] = 'butt', ctx['beginPath'](), ctx['moveTo'](_0x3f1f91['radius'] * -0.25, _0x3f1f91['radius'] * 0.38), ctx['quadraticCurveTo'](_0x3f1f91['radius'] * -0.47, _0x3f1f91['radius'] * 0.22, _0x3f1f91['radius'] * -0.42, _0x3f1f91['radius'] * 0.08), ctx['quadraticCurveTo'](_0x3f1f91['radius'] * -0.28, _0x3f1f91['radius'] * -0.25, _0x3f1f91['radius'] * 0.05, _0x3f1f91['radius'] * -0.48), ctx['quadraticCurveTo'](_0x3f1f91['radius'] * 0.32, _0x3f1f91['radius'] * -1.12, _0x3f1f91['radius'] * -0.39, _0x3f1f91['radius'] * -1.05), ctx['quadraticCurveTo'](_0x3f1f91['radius'] * -1.78, _0x3f1f91['radius'] * 0.1, _0x3f1f91['radius'] * -0.66, _0x3f1f91['radius'] * 0.96), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['fillStyle'] = blendColor('#4343a4', '#FF0000', blendAmount(_0x3f1f91)), ctx['strokeStyle'] = blendColor('#363685', '#FF0000', blendAmount(_0x3f1f91));
        checkForFirstFrame(_0x3f1f91) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF');
        ctx['beginPath'](), ctx['moveTo'](_0x3f1f91['radius'] * -0.68, _0x3f1f91['radius'] * 0.95), ctx['quadraticCurveTo'](_0x3f1f91['radius'] * 0.65, _0x3f1f91['radius'] * 1.65, _0x3f1f91['radius'] * 1.1, _0x3f1f91['radius'] * -0.06), ctx['quadraticCurveTo'](_0x3f1f91['radius'] * 0.9, _0x3f1f91['radius'] * -0.75, _0x3f1f91['radius'] * 0.4, _0x3f1f91['radius'] * -0.24), ctx['quadraticCurveTo'](_0x3f1f91['radius'] * 0.18, _0x3f1f91['radius'] * 0.7, _0x3f1f91['radius'] * -0.25, _0x3f1f91['radius'] * 0.38), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['lineCap'] = 'round';
        if (_0x3f1f91['extraRot']) {
            ctx['rotate'](-_0x3f1f91['extraRot']), _0x3f1f91['extraRot'] *= 0.98;
            if (_0x3f1f91['extraRot'] < 0.1)
                delete _0x3f1f91['extraRot'];
        }
    },
    'Root': _0x246bf6 => {
        ctx['lineWidth'] = _0x246bf6['radius'] * 0.2, ctx['fillStyle'] = blendColor('#b96c32', '#FF0000', blendAmount(_0x246bf6)), ctx['strokeStyle'] = blendColor('#965728', '#FF0000', blendAmount(_0x246bf6)), checkForFirstFrame(_0x246bf6) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF'), ctx['beginPath'](), ctx['moveTo'](_0x246bf6['radius'] * -0.45, _0x246bf6['radius'] * -1.18), ctx['lineTo'](_0x246bf6['radius'] * -0.3, _0x246bf6['radius'] * -0.94), ctx['lineTo'](_0x246bf6['radius'] * 0.25, _0x246bf6['radius'] * -0.72), ctx['lineTo'](_0x246bf6['radius'] * 0.09, _0x246bf6['radius'] * 0.17), ctx['lineTo'](_0x246bf6['radius'] * 0.77, _0x246bf6['radius'] * 0.89), ctx['lineTo'](_0x246bf6['radius'] * 0.3, _0x246bf6['radius'] * 0.95), ctx['lineTo'](_0x246bf6['radius'] * -0.11, _0x246bf6['radius'] * 1.17), ctx['lineTo'](_0x246bf6['radius'] * -0.44, _0x246bf6['radius'] * 0.12), ctx['lineTo'](_0x246bf6['radius'] * -0.14, _0x246bf6['radius'] * -0.55), ctx['lineTo'](_0x246bf6['radius'] * -0.48, _0x246bf6['radius'] * -0.9), ctx['closePath'](), ctx['fill'](), ctx['stroke']();
    },
    'Stick': _0x34d605 => {
        ctx['beginPath']();
        let _0xb57144 = blendColor('#7d5b1f', '#FF0000', blendAmount(_0x34d605));
        ctx['strokeStyle'] = blendColor('#654a19', '#FF0000', blendAmount(_0x34d605)), checkForFirstFrame(_0x34d605) && (_0xb57144 = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF'), ctx['lineWidth'] = _0x34d605['radius'] * 0.75, ctx['beginPath'](), ctx['moveTo'](_0x34d605['radius'] * -0.9, _0x34d605['radius'] * 0.58), ctx['lineTo'](_0x34d605['radius'] * 0.01, _0x34d605['radius'] * 0x0), ctx['lineTo'](_0x34d605['radius'] * 0.56, _0x34d605['radius'] * -1.14), ctx['moveTo'](_0x34d605['radius'] * 0.01, _0x34d605['radius'] * 0x0), ctx['lineTo'](_0x34d605['radius'] * 0.88, _0x34d605['radius'] * -0.06), ctx['stroke'](), ctx['closePath'](), ctx['lineWidth'] = _0x34d605['radius'] * 0.35, ctx['strokeStyle'] = _0xb57144, ctx['beginPath'](), ctx['moveTo'](_0x34d605['radius'] * -0.9, _0x34d605['radius'] * 0.58), ctx['lineTo'](_0x34d605['radius'] * 0.01, _0x34d605['radius'] * 0x0), ctx['lineTo'](_0x34d605['radius'] * 0.56, _0x34d605['radius'] * -1.14), ctx['moveTo'](_0x34d605['radius'] * 0.01, _0x34d605['radius'] * 0x0), ctx['lineTo'](_0x34d605['radius'] * 0.88, _0x34d605['radius'] * -0.06), ctx['stroke'](), ctx['closePath']();
    },
    'Square': _0x4426f9 => {
        ctx['beginPath'](), ctx['fillStyle'] = blendColor('#ffe869', '#FF0000', blendAmount(_0x4426f9)), ctx['strokeStyle'] = blendColor('#cfbc55', '#FF0000', blendAmount(_0x4426f9)), ctx['lineWidth'] = 0x2;
        checkForFirstFrame(_0x4426f9) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF');
        for (let _0x2e0111 = 0x0; _0x2e0111 <= 0x4; _0x2e0111++) {
            ctx['lineTo'](Math['cos'](_0x2e0111 * 1.57079) * _0x4426f9['radius'], Math['sin'](_0x2e0111 * 1.57079) * _0x4426f9['radius']);
        }
        ctx['fill'](), ctx['stroke'](), ctx['closePath']();
        let _0x5d800f = 1.3 + 0.1 * Math['cos'](time / 0x12c);
        ctx['globalAlpha'] *= 0.5, ctx['beginPath']();
        for (let _0x8745c7 = 0x0; _0x8745c7 <= 0x4; _0x8745c7++) {
            ctx['lineTo'](Math['cos'](_0x8745c7 * 1.57079) * _0x4426f9['radius'] * _0x5d800f, Math['sin'](_0x8745c7 * 1.57079) * _0x4426f9['radius'] * _0x5d800f);
        }
        ctx['fill'](), ctx['closePath'](), ctx['globalAlpha'] /= 0.5;
    },
    'Pentagon': _0x492884 => {
        ctx['beginPath'](), ctx['fillStyle'] = blendColor('#768dfc', '#FF0000', blendAmount(_0x492884)), ctx['strokeStyle'] = blendColor('#586bbd', '#FF0000', blendAmount(_0x492884)), ctx['lineWidth'] = 0x2;
        checkForFirstFrame(_0x492884) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF');
        for (let _0x2a83e6 = 0x0; _0x2a83e6 <= 0x5; _0x2a83e6++) {
            ctx['lineTo'](Math['cos'](_0x2a83e6 * 1.256632) * _0x492884['radius'], Math['sin'](_0x2a83e6 * 1.256632) * _0x492884['radius']);
        }
        ctx['fill'](), ctx['stroke'](), ctx['closePath']();
        let _0x24141b = 1.3 + 0.1 * Math['cos'](time / 0x12c);
        ctx['globalAlpha'] *= 0.5, ctx['beginPath']();
        for (let _0x3ed7e4 = 0x0; _0x3ed7e4 <= 0x5; _0x3ed7e4++) {
            ctx['lineTo'](Math['cos'](_0x3ed7e4 * 1.256632) * _0x492884['radius'] * _0x24141b, Math['sin'](_0x3ed7e4 * 1.256632) * _0x492884['radius'] * _0x24141b);
        }
        ctx['fill'](), ctx['closePath'](), ctx['globalAlpha'] /= 0.5;
    },
    'Hexagon': _0x43302e => {
        ctx['lineWidth'] = _0x43302e['radius'] / 0x5, ctx['fillStyle'] = blendColor('#b50e11', '#FF0000', blendAmount(_0x43302e)), ctx['strokeStyle'] = blendColor('#80090b', '#FF0000', blendAmount(_0x43302e));
        checkForFirstFrame(_0x43302e) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF');
        let _0x472d85 = 1.3 + 0.1 * Math['cos'](time / 0x12c);
        ctx['beginPath']();
        for (let _0x409fe7 = 0x0; _0x409fe7 < 0x6; _0x409fe7++) {
            ctx['lineTo'](Math['cos'](_0x409fe7 * Math['PI'] * 0x2 / 0x6) * _0x43302e['radius'], Math['sin'](_0x409fe7 * Math['PI'] * 0x2 / 0x6) * _0x43302e['radius']);
        }
        ctx['lineTo'](_0x43302e['radius'], 0x0), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['globalAlpha'] *= 0.5, ctx['beginPath']();
        for (let _0x38ff0f = 0x0; _0x38ff0f <= 0x6; _0x38ff0f++) {
            ctx['lineTo'](Math['cos'](_0x38ff0f * Math['PI'] * 0x2 / 0x6) * _0x43302e['radius'] * _0x472d85, Math['sin'](_0x38ff0f * Math['PI'] * 0x2 / 0x6) * _0x43302e['radius'] * _0x472d85);
        }
        ctx['lineTo'](_0x43302e['radius'], 0x0), ctx['fill'](), ctx['closePath'](), ctx['globalAlpha'] /= 0.5;
    },
    'Card': _0xc7517f => {
        ctx['lineWidth'] = 0x3, ctx['beginPath'](), ctx['fillStyle'] = blendColor('#ffffff', '#FF0000', blendAmount(_0xc7517f));
        let _0x4824cb = ctx['strokeStyle'] = blendColor('#cfcfcf', '#FF0000', blendAmount(_0xc7517f)), _0x14c74a = blendColor('#202020', '#FF0000', blendAmount(_0xc7517f));
        checkForFirstFrame(_0xc7517f) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF', _0x14c74a = '#FFFFFF', _0x4824cb = '#FFFFFF'), ctx['beginPath'](), ctx['roundRect'](-_0xc7517f['radius'] * 1.2, -_0xc7517f['radius'] * 0.8, _0xc7517f['radius'] * 2.4, _0xc7517f['radius'] * 1.6, _0xc7517f['radius'] / 0x4), ctx['fill'](), ctx['closePath'](), ctx['strokeStyle'] = _0x14c74a, ctx['beginPath'](), ctx['moveTo'](-_0xc7517f['radius'] * 1.1, _0xc7517f['radius'] * 0.35), ctx['lineTo'](_0xc7517f['radius'] * 1.1, _0xc7517f['radius'] * 0.35), ctx['stroke'](), ctx['closePath'](), ctx['strokeStyle'] = _0x4824cb, ctx['beginPath'](), ctx['roundRect'](-_0xc7517f['radius'] * 1.2, -_0xc7517f['radius'] * 0.8, _0xc7517f['radius'] * 2.4, _0xc7517f['radius'] * 1.6, _0xc7517f['radius'] / 0x4), ctx['stroke'](), ctx['closePath'](), ctx['fillStyle'] = blendColor('#d4af37', '#FF0000', blendAmount(_0xc7517f)), ctx['beginPath'](), ctx['roundRect'](-_0xc7517f['radius'] * 0.9, -_0xc7517f['radius'] * 0.45, _0xc7517f['radius'] * 0.8, _0xc7517f['radius'] * 0.5, _0xc7517f['radius'] / 0x4), ctx['fill'](), ctx['closePath'](), ctx['fillStyle'] = blendColor('#FF9500', '#FF0000', blendAmount(_0xc7517f)), ctx['beginPath'](), ctx['arc'](_0xc7517f['radius'] * 0.4, -_0xc7517f['radius'] * 0.2, _0xc7517f['radius'] / 0x4, 0x0, 0x2 * Math['PI']), ctx['fill'](), ctx['closePath'](), ctx['fillStyle'] = blendColor('#FF1500', '#FF0000', blendAmount(_0xc7517f)), ctx['beginPath'](), ctx['arc'](_0xc7517f['radius'] * 0.7, -_0xc7517f['radius'] * 0.2, _0xc7517f['radius'] / 0x4, 0x0, 0x2 * Math['PI']), ctx['fill'](), ctx['closePath']();
    },
    'Cash': _0x136da2 => {
        ctx['lineWidth'] = 0.15 * _0x136da2['radius'], ctx['beginPath'](), ctx['fillStyle'] = blendColor('#39b54a', '#FF0000', blendAmount(_0x136da2)), ctx['strokeStyle'] = blendColor('#2e933c', '#FF0000', blendAmount(_0x136da2)), checkForFirstFrame(_0x136da2) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF'), ctx['beginPath'](), ctx['rect'](-_0x136da2['radius'] * 0.75, -_0x136da2['radius'] * 0.375, _0x136da2['radius'] * 1.5, _0x136da2['radius'] * 0.75), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['fillStyle'] = blendColor('#2e933c', '#FF0000', blendAmount(_0x136da2)), ctx['beginPath'](), ctx['arc'](0x0, 0x0, 0.2 * _0x136da2['radius'], 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['closePath'](), ctx['rect'](-_0x136da2['radius'] * 0.525, -_0x136da2['radius'] * 0.2, _0x136da2['radius'] * 0.1, _0x136da2['radius'] * 0.4), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['rect'](_0x136da2['radius'] * 0.425, -_0x136da2['radius'] * 0.2, _0x136da2['radius'] * 0.1, _0x136da2['radius'] * 0.4), ctx['fill'](), ctx['stroke'](), ctx['closePath']();
    },
    'Ant\x20Egg': _0x2cd15d => {
        ctx['lineWidth'] = _0x2cd15d['radius'] / 4.5, ctx['fillStyle'] = blendColor('#fff0b8', '#FFFFFF', Math['max'](0x0, blendAmount(_0x2cd15d))), ctx['strokeStyle'] = blendColor('#cfc295', '#FFFFFF', Math['max'](0x0, blendAmount(_0x2cd15d))), checkForFirstFrame(_0x2cd15d) && (ctx['fillStyle'] = '#ffffff', ctx['strokeStyle'] = '#ffffff'), ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x2cd15d['radius'] * 0x9 / 0xa, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath']();
    },
    'Lilypad': _0x2fb463 => {
        ctx['lineWidth'] = _0x2fb463['radius'] * 0.15;
        let _0x2d36ed = blendColor('#39b54a', '#FF0000', blendAmount(_0x2fb463)), _0x2c02ce = blendColor('#2e933c', '#FF0000', blendAmount(_0x2fb463)), _0x1391b3 = blendColor('#33a443', '#FF0000', blendAmount(_0x2fb463));
        checkForFirstFrame(_0x2fb463) && (_0x2d36ed = '#FFFFFF', _0x2c02ce = '#FFFFFF', _0x1391b3 = '#FFFFFF', blossomA = '#FFFFFF', blossomB = '#FFFFFF'), ctx['fillStyle'] = _0x1391b3, ctx['strokeStyle'] = _0x2c02ce, ctx['beginPath'](), ctx['moveTo'](0x0, 0x0), ctx['arc'](0x0, 0x0, _0x2fb463['radius'], -Math['PI'] / 0x8, Math['PI'] / 0x8, !![]), ctx['lineTo'](0x0, 0x0), ctx['fill'](), ctx['closePath'](), ctx['fillStyle'] = _0x2d36ed, ctx['beginPath'](), ctx['moveTo'](0x0, 0x0), ctx['arc'](0x0, 0x0, _0x2fb463['radius'] * 0.66, -Math['PI'] / 0x8, Math['PI'] / 0x8, !![]), ctx['lineTo'](0x0, 0x0), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['moveTo'](0x0, 0x0), ctx['arc'](0x0, 0x0, _0x2fb463['radius'], -Math['PI'] / 0x8, Math['PI'] / 0x8, !![]), ctx['lineTo'](0x0, 0x0), ctx['stroke'](), ctx['closePath']();
    },
    'Flowering\x20Lilypad': _0x328736 => {
        ctx['lineWidth'] = _0x328736['radius'] * 0.15;
        let _0x4f9154 = blendColor('#39b54a', '#FF0000', blendAmount(_0x328736)), _0x188a77 = blendColor('#2e933c', '#FF0000', blendAmount(_0x328736)), _0x2e12c0 = blendColor('#33a443', '#FF0000', blendAmount(_0x328736)), _0x22486b = blendColor('#ff94c9', '#FF0000', blendAmount(_0x328736)), _0x1afbea = blendColor('#cf78a3', '#FF0000', blendAmount(_0x328736)), _0x13e66f = blendColor('#ffe419', '#FF0000', blendAmount(_0x328736)), _0x5f142b = blendColor('#cfb914', '#FF0000', blendAmount(_0x328736));
        checkForFirstFrame(_0x328736) && (_0x4f9154 = '#FFFFFF', _0x188a77 = '#FFFFFF', _0x2e12c0 = '#FFFFFF', _0x22486b = '#FFFFFF', _0x1afbea = '#FFFFFF', _0x13e66f = '#FFFFFF', _0x5f142b = '#FFFFFF');
        ctx['fillStyle'] = _0x2e12c0, ctx['strokeStyle'] = _0x188a77, ctx['beginPath'](), ctx['moveTo'](0x0, 0x0), ctx['arc'](0x0, 0x0, _0x328736['radius'], 0x0, Math['PI'] / 0x8, !![]), ctx['lineTo'](0x0, 0x0), ctx['fill'](), ctx['closePath'](), ctx['fillStyle'] = _0x4f9154, ctx['beginPath'](), ctx['moveTo'](0x0, 0x0), ctx['arc'](0x0, 0x0, _0x328736['radius'] * 0.66, 0x0, Math['PI'] / 0x8, !![]), ctx['lineTo'](0x0, 0x0), ctx['fill'](), ctx['closePath'](), ctx['beginPath'](), ctx['moveTo'](0x0, 0x0), ctx['arc'](0x0, 0x0, _0x328736['radius'], 0x0, Math['PI'] / 0x8, !![]), ctx['lineTo'](0x0, 0x0), ctx['stroke'](), ctx['closePath'](), ctx['fillStyle'] = _0x22486b, ctx['strokeStyle'] = _0x1afbea;
        for (let _0x2ad5b8 = 0x0; _0x2ad5b8 < 0x8; _0x2ad5b8++) {
            ctx['beginPath'](), ctx['moveTo'](0x0, 0x0), ctx['quadraticCurveTo'](_0x328736['radius'] * 0.5, _0x328736['radius'] * 0.25, _0x328736['radius'] * 0.75, 0x0), ctx['quadraticCurveTo'](_0x328736['radius'] * 0.5, _0x328736['radius'] * -0.25, 0x0, 0x0), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](Math['PI'] / 0x4);
        }
        ctx['fillStyle'] = _0x13e66f, ctx['strokeStyle'] = _0x5f142b, ctx['lineWidth'] = _0x328736['radius'] * 0.075, ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x328736['radius'] * 0.1, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath']();
    },
    'LilypadProjectile': _0x48f791 => {
        petalRenderMap['Lilypad'](_0x48f791);
    },
    'LilypadGiantProjectile': _0x2bb8d3 => {
        petalRenderMap['Flowering\x20Lilypad'](_0x2bb8d3);
    },
    'Blossom': _0x5828d8 => {
        ctx['lineWidth'] = _0x5828d8['radius'] * 0.15;
        let _0x5e40c6 = blendColor('#ff94c9', '#FF0000', blendAmount(_0x5828d8)), _0x485658 = blendColor('#cf78a3', '#FF0000', blendAmount(_0x5828d8)), _0x3aa8eb = blendColor('#ffe419', '#FF0000', blendAmount(_0x5828d8)), _0x1c3b78 = blendColor('#cfb914', '#FF0000', blendAmount(_0x5828d8));
        checkForFirstFrame(_0x5828d8) && (_0x5e40c6 = '#FFFFFF', _0x485658 = '#FFFFFF', _0x3aa8eb = '#FFFFFF', _0x1c3b78 = '#FFFFFF');
        ctx['lineWidth'] = _0x5828d8['radius'] * 0.1, ctx['fillStyle'] = _0x5e40c6, ctx['strokeStyle'] = _0x485658;
        for (let _0x43d8c9 = 0x0; _0x43d8c9 < 0x8; _0x43d8c9++) {
            ctx['beginPath'](), ctx['moveTo'](0x0, 0x0), ctx['quadraticCurveTo'](_0x5828d8['radius'] * 0.5, _0x5828d8['radius'] * 0.25, _0x5828d8['radius'] * 0.75, 0x0), ctx['quadraticCurveTo'](_0x5828d8['radius'] * 0.5, _0x5828d8['radius'] * -0.25, 0x0, 0x0), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](Math['PI'] / 0x4);
        }
        ctx['fillStyle'] = _0x3aa8eb, ctx['strokeStyle'] = _0x1c3b78, ctx['lineWidth'] = _0x5828d8['radius'] * 0.075, ctx['beginPath'](), ctx['arc'](0x0, 0x0, _0x5828d8['radius'] * 0.1, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath']();
    },
    'Carapace': _0x3cac5f => {
        let _0x2265b8 = blendColor('#b15a3f', '#FF0000', Math['max'](0x0, blendAmount(_0x3cac5f))), _0x123a4e = blendColor('#dc704b', '#FF0000', Math['max'](0x0, blendAmount(_0x3cac5f)));
        checkForFirstFrame(_0x3cac5f) && (_0x2265b8 = '#ffffff', _0x123a4e = '#ffffff'), ctx['lineJoin'] = 'round', ctx['lineCap'] = 'round', ctx['strokeStyle'] = _0x2265b8, ctx['fillStyle'] = _0x123a4e, ctx['lineWidth'] = _0x3cac5f['radius'] * 0.1826086956521739, ctx['beginPath'](), ctx['ellipse'](0x0, 0x0, _0x3cac5f['radius'] * 0.8695652173913043, _0x3cac5f['radius'] * 1.1130434782608696, 0x0, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['lineTo'](_0x3cac5f['radius'] * -0.49, _0x3cac5f['radius'] * -0.39), ctx['quadraticCurveTo'](_0x3cac5f['radius'] * 0x0, _0x3cac5f['radius'] * -0.16, _0x3cac5f['radius'] * 0.49, _0x3cac5f['radius'] * -0.39), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['lineTo'](_0x3cac5f['radius'] * -0.49, _0x3cac5f['radius'] * 0.39), ctx['quadraticCurveTo'](_0x3cac5f['radius'] * 0x0, _0x3cac5f['radius'] * 0.16, _0x3cac5f['radius'] * 0.49, _0x3cac5f['radius'] * 0.39), ctx['stroke'](), ctx['closePath']();
    },
    'Thorax': _0x3dc8e5 => {
        let _0x175314 = blendColor('#5a8f3f', '#228B22', Math['max'](0x0, blendAmount(_0x3dc8e5))), _0xc7b641 = blendColor('#7fbf4b', '#32CD32', Math['max'](0x0, blendAmount(_0x3dc8e5)));
        checkForFirstFrame(_0x3dc8e5) && (_0x175314 = '#ffffff', _0xc7b641 = '#ffffff'), ctx['lineJoin'] = 'round', ctx['lineCap'] = 'round', ctx['strokeStyle'] = _0x175314, ctx['fillStyle'] = _0xc7b641, ctx['lineWidth'] = _0x3dc8e5['radius'] * 0.15, ctx['beginPath'](), ctx['ellipse'](0x0, 0x0, _0x3dc8e5['radius'] * 0.7, _0x3dc8e5['radius'] * 1.2, 0x0, 0x0, Math['PI'] * 0x2), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['lineWidth'] = _0x3dc8e5['radius'] * 0.08, ctx['beginPath'](), ctx['moveTo'](-_0x3dc8e5['radius'] * 0.6, -_0x3dc8e5['radius'] * 0.3), ctx['lineTo'](_0x3dc8e5['radius'] * 0.6, -_0x3dc8e5['radius'] * 0.3), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['moveTo'](-_0x3dc8e5['radius'] * 0.6, 0x0), ctx['lineTo'](_0x3dc8e5['radius'] * 0.6, 0x0), ctx['stroke'](), ctx['closePath'](), ctx['beginPath'](), ctx['moveTo'](-_0x3dc8e5['radius'] * 0.6, _0x3dc8e5['radius'] * 0.3), ctx['lineTo'](_0x3dc8e5['radius'] * 0.6, _0x3dc8e5['radius'] * 0.3), ctx['stroke'](), ctx['closePath'](), ctx['lineWidth'] = _0x3dc8e5['radius'] * 0.05, ctx['beginPath'](), ctx['moveTo'](0x0, -_0x3dc8e5['radius'] * 0.9), ctx['quadraticCurveTo'](_0x3dc8e5['radius'] * 0.2, 0x0, 0x0, _0x3dc8e5['radius'] * 0.9), ctx['stroke'](), ctx['closePath']();
    },
    'Trinket\x20of\x20the\x20Hivemind': _0x2e41fd => {
        ctx['fillStyle'] = blendColor('#ccb866', '#ff0000', blendAmount(_0x2e41fd)), ctx['strokeStyle'] = blendColor('#b8a756', '#ff0000', blendAmount(_0x2e41fd));
        checkForFirstFrame(_0x2e41fd) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF');
        ctx['lineWidth'] = 0.15 * _0x2e41fd['radius'];
        let _0x5266d6 = 0x3, _0x39e9ce = Math['PI'] * 0x2 / _0x5266d6;
        ctx['beginPath'](), ctx['moveTo'](_0x2e41fd['radius'], 0x0);
        for (let _0x5146bf = 0x0; _0x5146bf <= _0x5266d6; _0x5146bf++) {
            ctx['lineTo'](Math['cos'](_0x5146bf * _0x39e9ce) * _0x2e41fd['radius'] * 1.33, Math['sin'](_0x5146bf * _0x39e9ce) * _0x2e41fd['radius'] * 1.33), ctx['lineTo'](Math['cos']((_0x5146bf + 0.5) * _0x39e9ce) * _0x2e41fd['radius'] * 0.45, Math['sin']((_0x5146bf + 0.5) * _0x39e9ce) * _0x2e41fd['radius'] * 0.45);
        }
        ;
        ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['fillStyle'] = blendColor('#d5c481', '#ff0000', blendAmount(_0x2e41fd));
        checkForFirstFrame(_0x2e41fd) && (ctx['fillStyle'] = '#FFFFFF');
        ;
        ctx['beginPath'](), ctx['moveTo'](_0x2e41fd['radius'] / 0x2, 0x0);
        for (let _0xdea4b4 = 0x0; _0xdea4b4 <= _0x5266d6; _0xdea4b4++) {
            ctx['lineTo'](Math['cos'](_0xdea4b4 * _0x39e9ce) * _0x2e41fd['radius'] * 1.33 / 0x2, Math['sin'](_0xdea4b4 * _0x39e9ce) * _0x2e41fd['radius'] * 1.33 / 0x2), ctx['lineTo'](Math['cos']((_0xdea4b4 + 0.5) * _0x39e9ce) * _0x2e41fd['radius'] / 0x2 * 0.45, Math['sin']((_0xdea4b4 + 0.5) * _0x39e9ce) * _0x2e41fd['radius'] / 0x2 * 0.45);
        }
        ;
        ctx['fill'](), ctx['closePath']();
    },
    'Trinket\x20of\x20the\x20Sea': _0x1c4fec => {
        ctx['fillStyle'] = blendColor('#4b89db', '#ff0000', blendAmount(_0x1c4fec)), ctx['strokeStyle'] = blendColor('#3563a1', '#ff0000', blendAmount(_0x1c4fec));
        checkForFirstFrame(_0x1c4fec) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF');
        ctx['lineWidth'] = 0.15 * _0x1c4fec['radius'];
        let _0x40beee = 0x4, _0xa76303 = Math['PI'] * 0x2 / _0x40beee;
        ctx['beginPath'](), ctx['moveTo'](_0x1c4fec['radius'], 0x0);
        for (let _0x79a7f0 = 0x0; _0x79a7f0 <= _0x40beee; _0x79a7f0++) {
            ctx['lineTo'](Math['cos'](_0x79a7f0 * _0xa76303) * _0x1c4fec['radius'], Math['sin'](_0x79a7f0 * _0xa76303) * _0x1c4fec['radius']), ctx['lineTo'](Math['cos']((_0x79a7f0 + 0.5) * _0xa76303) * _0x1c4fec['radius'] * 0.5, Math['sin']((_0x79a7f0 + 0.5) * _0xa76303) * _0x1c4fec['radius'] * 0.5);
        }
        ;
        ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['fillStyle'] = blendColor('#6b9ee1', '#ff0000', blendAmount(_0x1c4fec));
        checkForFirstFrame(_0x1c4fec) && (ctx['fillStyle'] = '#FFFFFF');
        ;
        ctx['beginPath'](), ctx['moveTo'](_0x1c4fec['radius'] / 0x2, 0x0);
        for (let _0x64d95b = 0x0; _0x64d95b <= _0x40beee; _0x64d95b++) {
            ctx['lineTo'](Math['cos'](_0x64d95b * _0xa76303) * _0x1c4fec['radius'] / 0x2, Math['sin'](_0x64d95b * _0xa76303) * _0x1c4fec['radius'] / 0x2), ctx['lineTo'](Math['cos']((_0x64d95b + 0.5) * _0xa76303) * _0x1c4fec['radius'] / 0x2 * 0.5, Math['sin']((_0x64d95b + 0.5) * _0xa76303) * _0x1c4fec['radius'] / 0x2 * 0.5);
        }
        ;
        ctx['fill'](), ctx['closePath']();
    },
    'Trinket\x20of\x20the\x20Wild': _0x1ea3ca => {
        ctx['fillStyle'] = blendColor('#257831', '#ff0000', blendAmount(_0x1ea3ca)), ctx['strokeStyle'] = blendColor('#1e6228', '#ff0000', blendAmount(_0x1ea3ca));
        checkForFirstFrame(_0x1ea3ca) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF');
        ctx['lineWidth'] = 0.15 * _0x1ea3ca['radius'];
        let _0x3c55de = 0x6, _0x36e906 = Math['PI'] * 0x2 / _0x3c55de;
        ctx['beginPath'](), ctx['moveTo'](_0x1ea3ca['radius'], 0x0);
        for (let _0x3c496d = 0x0; _0x3c496d <= _0x3c55de; _0x3c496d++) {
            ctx['lineTo'](Math['cos'](_0x3c496d * _0x36e906) * _0x1ea3ca['radius'], Math['sin'](_0x3c496d * _0x36e906) * _0x1ea3ca['radius']), ctx['lineTo'](Math['cos']((_0x3c496d + 0.5) * _0x36e906) * _0x1ea3ca['radius'] * 0.66, Math['sin']((_0x3c496d + 0.5) * _0x36e906) * _0x1ea3ca['radius'] * 0.66);
        }
        ;
        ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['fillStyle'] = blendColor('#4c9056', '#ff0000', blendAmount(_0x1ea3ca));
        checkForFirstFrame(_0x1ea3ca) && (ctx['fillStyle'] = '#FFFFFF');
        ;
        ctx['beginPath'](), ctx['moveTo'](_0x1ea3ca['radius'] / 0x2, 0x0);
        for (let _0x38663c = 0x0; _0x38663c <= _0x3c55de; _0x38663c++) {
            ctx['lineTo'](Math['cos'](_0x38663c * _0x36e906) * _0x1ea3ca['radius'] / 0x2, Math['sin'](_0x38663c * _0x36e906) * _0x1ea3ca['radius'] / 0x2), ctx['lineTo'](Math['cos']((_0x38663c + 0.5) * _0x36e906) * _0x1ea3ca['radius'] / 0x2 * 0.66, Math['sin']((_0x38663c + 0.5) * _0x36e906) * _0x1ea3ca['radius'] / 0x2 * 0.66);
        }
        ;
        ctx['fill'](), ctx['closePath']();
    },
    'Plank': _0x5606e5 => {
        ctx['fillStyle'] = blendColor('#b86c32', '#ff0000', blendAmount(_0x5606e5)), ctx['strokeStyle'] = blendColor('#955728', '#ff0000', blendAmount(_0x5606e5)), checkForFirstFrame(_0x5606e5) && (ctx['fillStyle'] = '#FFFFFF', ctx['strokeStyle'] = '#FFFFFF'), ctx['lineWidth'] = 0.15 * _0x5606e5['radius'], ctx['beginPath'](), ctx['moveTo'](-0.63 * _0x5606e5['radius'], -1.41 * _0x5606e5['radius']), ctx['lineTo'](0.55 * _0x5606e5['radius'], -1.43 * _0x5606e5['radius']), ctx['lineTo'](0.57 * _0x5606e5['radius'], -1.03 * _0x5606e5['radius']), ctx['lineTo'](0.45 * _0x5606e5['radius'], -0.48 * _0x5606e5['radius']), ctx['lineTo'](0.59 * _0x5606e5['radius'], -0.48 * _0x5606e5['radius']), ctx['lineTo'](0.63 * _0x5606e5['radius'], 1.42 * _0x5606e5['radius']), ctx['lineTo'](0.28 * _0x5606e5['radius'], 1.42 * _0x5606e5['radius']), ctx['lineTo'](0.17 * _0x5606e5['radius'], 1.22 * _0x5606e5['radius']), ctx['lineTo'](0.17 * _0x5606e5['radius'], 1.43 * _0x5606e5['radius']), ctx['lineTo'](-0.56 * _0x5606e5['radius'], 1.42 * _0x5606e5['radius']), ctx['lineTo'](-0.62 * _0x5606e5['radius'], 0.18 * _0x5606e5['radius']), ctx['lineTo'](-0.38 * _0x5606e5['radius'], 0.16 * _0x5606e5['radius']), ctx['lineTo'](-0.61 * _0x5606e5['radius'], 0.07 * _0x5606e5['radius']), ctx['lineTo'](-0.63 * _0x5606e5['radius'], -1.41 * _0x5606e5['radius']), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['lineWidth'] = 0.12 * _0x5606e5['radius'], ctx['beginPath'](), ctx['moveTo'](-0.37 * _0x5606e5['radius'], -0.98 * _0x5606e5['radius']), ctx['quadraticCurveTo'](-0.09 * _0x5606e5['radius'], -1.33 * _0x5606e5['radius'], 0.05 * _0x5606e5['radius'], -0.99 * _0x5606e5['radius']), ctx['quadraticCurveTo'](-0.05 * _0x5606e5['radius'], -0.63 * _0x5606e5['radius'], -0.19 * _0x5606e5['radius'], -0.8 * _0x5606e5['radius']), ctx['quadraticCurveTo'](-0.3 * _0x5606e5['radius'], -0.89 * _0x5606e5['radius'], -0.17 * _0x5606e5['radius'], -0.96 * _0x5606e5['radius']), ctx['quadraticCurveTo'](-0.08 * _0x5606e5['radius'], -0.98 * _0x5606e5['radius'], -0.08 * _0x5606e5['radius'], -0.9 * _0x5606e5['radius']), ctx['stroke'](), ctx['closePath']();
    },
    'Carrot': _0xd9e6b3 => {
        let _0x13f039 = blendColor('#39b54a', '#ff0000', blendAmount(_0xd9e6b3)), _0x49f7b3 = blendColor('#2e933c', '#ff0000', blendAmount(_0xd9e6b3)), _0x355b6c = blendColor('#f09148', '#ff0000', blendAmount(_0xd9e6b3)), _0x177f85 = blendColor('#c2753a', '#ff0000', blendAmount(_0xd9e6b3));
        checkForFirstFrame(_0xd9e6b3) && (_0x13f039 = '#FFFFFF', _0x49f7b3 = '#FFFFFF', _0x355b6c = '#FFFFFF', _0x177f85 = '#FFFFFF'), ctx['fillStyle'] = _0x13f039, ctx['strokeStyle'] = _0x49f7b3, ctx['lineWidth'] = 0.16 * _0xd9e6b3['radius'], ctx['rotate'](-Math['PI'] / 0x2), ctx['beginPath'](), ctx['moveTo'](-0.16 * _0xd9e6b3['radius'], -0.9 * _0xd9e6b3['radius']), ctx['quadraticCurveTo'](0.06 * _0xd9e6b3['radius'], -0.94 * _0xd9e6b3['radius'], 0.25 * _0xd9e6b3['radius'], -0.85 * _0xd9e6b3['radius']), ctx['quadraticCurveTo'](0.24 * _0xd9e6b3['radius'], -1.05 * _0xd9e6b3['radius'], 0.62 * _0xd9e6b3['radius'], -1.15 * _0xd9e6b3['radius']), ctx['quadraticCurveTo'](0.6 * _0xd9e6b3['radius'], -1.34 * _0xd9e6b3['radius'], 0.22 * _0xd9e6b3['radius'], -1.22 * _0xd9e6b3['radius']), ctx['quadraticCurveTo'](0.1 * _0xd9e6b3['radius'], -1.86 * _0xd9e6b3['radius'], -0.13 * _0xd9e6b3['radius'], -1.78 * _0xd9e6b3['radius']), ctx['quadraticCurveTo'](-0.04 * _0xd9e6b3['radius'], -1.38 * _0xd9e6b3['radius'], -0.12 * _0xd9e6b3['radius'], -1.23 * _0xd9e6b3['radius']), ctx['quadraticCurveTo'](-0.18 * _0xd9e6b3['radius'], -1.34 * _0xd9e6b3['radius'], -0.58 * _0xd9e6b3['radius'], -1.41 * _0xd9e6b3['radius']), ctx['quadraticCurveTo'](-0.17 * _0xd9e6b3['radius'], -1.03 * _0xd9e6b3['radius'], -0.16 * _0xd9e6b3['radius'], -0.9 * _0xd9e6b3['radius']), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['fillStyle'] = _0x355b6c, ctx['strokeStyle'] = _0x177f85, ctx['beginPath'](), ctx['moveTo'](0x0, -_0xd9e6b3['radius'] * 0.8), ctx['bezierCurveTo'](0.5 * _0xd9e6b3['radius'], -0.77 * _0xd9e6b3['radius'], 0.61 * _0xd9e6b3['radius'], 0.2 * _0xd9e6b3['radius'], 0x0, _0xd9e6b3['radius'] * 1.32), ctx['moveTo'](0x0, -_0xd9e6b3['radius'] * 0.8), ctx['bezierCurveTo'](-0.5 * _0xd9e6b3['radius'], -0.77 * _0xd9e6b3['radius'], -0.61 * _0xd9e6b3['radius'], 0.2 * _0xd9e6b3['radius'], 0x0, _0xd9e6b3['radius'] * 1.32), ctx['fill'](), ctx['stroke'](), ctx['closePath'](), ctx['rotate'](Math['PI'] / 0x2);
    },
    'CarrotProjectile': _0xb9bd87 => {
        petalRenderMap['Carrot'](_0xb9bd87);
    },
    'Shattered\x20Relic\x20of\x20Wrath': _0x2234af => {
        petalRenderMap['Basic'](_0x2234af);
    },
    'Reinforced\x20Relic\x20of\x20Wrath': _0x3e9458 => {
        petalRenderMap['Basic'](_0x3e9458);
    },
    'Subset\x20Relic\x20of\x20the\x20Guardian': _0x514ab4 => {
        petalRenderMap['Basic'](_0x514ab4);
    },
    'Division\x20Relic\x20of\x20the\x20Guardian': _0x4acfb2 => {
        petalRenderMap['Basic'](_0x4acfb2);
    },
    'Guard\x20Relic\x20of\x20the\x20Guardian': _0x56a91c => {
        petalRenderMap['Basic'](_0x56a91c);
    },
    'Knight\x20Relic\x20of\x20the\x20Guardian': _0x1e0fad => {
        petalRenderMap['Basic'](_0x1e0fad);
    },
    'Aid\x20Relic\x20of\x20Serenity': _0x39e7e0 => {
        petalRenderMap['Basic'](_0x39e7e0);
    },
    'Subliminal\x20Relic\x20of\x20Serenity': _0x41222a => {
        petalRenderMap['Basic'](_0x41222a);
    },
    'Barrier\x20Relic\x20of\x20Serenity': _0x2a9cf0 => {
        petalRenderMap['Basic'](_0x2a9cf0);
    },
    'Custom': (_0x42a3e8, ..._0x32a367) => {
        if (_0x42a3e8['customType'] === 'Corn' || _0x42a3e8['customType'] === 'Blood\x20Corn') {
            if (!_0x42a3e8['_cornLastReload'])
                _0x42a3e8['_cornLastReload'] = _0x42a3e8['render']['reload'], _0x42a3e8['_cornLastCheckTime'] = Date['now']();
            else {
                const _0x394142 = _0x42a3e8['_cornLastReload'], _0x59a993 = _0x42a3e8['render']['reload'], _0x13516d = Date['now']() - _0x42a3e8['_cornLastCheckTime'];
                Math['abs'](_0x59a993 - _0x394142) > _0x42a3e8['maxReload'] * 0.05 && _0x13516d < 0x64 && console['warn']('[CORN\x20RELOAD\x20JUMP]\x20customType=' + _0x42a3e8['customType'] + ',\x20lastRenderReload=' + _0x394142['toFixed'](0x0) + ',\x20currentRenderReload=' + _0x59a993['toFixed'](0x0) + ',\x20diff=' + (_0x59a993 - _0x394142)['toFixed'](0x0) + ',\x20timeDiff=' + _0x13516d + 'ms' + ',\x20maxReload=' + _0x42a3e8['maxReload'] + ',\x20currentReload=' + _0x42a3e8['currentReload'] + ',\x20petal.reload=' + _0x42a3e8['reload'] + ',\x20dead=' + _0x42a3e8['dead'] + ',\x20dying=' + _0x42a3e8['dying'] + ',\x20id=' + _0x42a3e8['id']), _0x42a3e8['_cornLastReload'] = _0x59a993, _0x42a3e8['_cornLastCheckTime'] = Date['now']();
            }
        }
        if (petalRenderMap[_0x42a3e8['customType']] !== undefined) {
            petalRenderMap[_0x42a3e8['customType']](_0x42a3e8, ..._0x32a367);
            return;
        }
        const _0x203563 = editorPetalShapesMap[_0x42a3e8['customType']];
        if (_0x203563 === undefined) {
            console['warn']('path\x20undefined\x20for\x20petal\x20type\x20' + _0x42a3e8['customType']);
            return;
        }
        const _0x44941d = _0x42a3e8['dying'] === !![] && _0x42a3e8['insidePetalContainer'] !== !![] ? 0x1 : ctx['globalAlpha'];
        ctx['fillOpacity'] = 0x1, ctx['strokeOpacity'] = 0x1, ctx['lineWidth'] = 0.3, ctx['save'](), ctx['scale'](_0x42a3e8['radius'], _0x42a3e8['radius']);
        let _0x26ccbf = blendAmount(_0x42a3e8);
        if (checkForFirstFrame(_0x42a3e8))
            window['overrideBlendColor'] = [
                0x1,
                '#FFFFFF'
            ];
        else
            _0x26ccbf > 0x0 ? window['overrideBlendColor'] = [
                _0x26ccbf,
                '#FF0000'
            ] : window['overrideBlendColor'] = undefined;
        ctx['setGlobalAlpha'](ctx['globalAlpha']), ctx['setFillStyle']('#FFFFFF'), ctx['setStrokeStyle']('#cfcfcf');
        for (let _0x49aa51 = 0x0; _0x49aa51 < _0x203563['length']; _0x49aa51++) {
            ctx['beginPath']();
            for (let _0x2cd169 = 0x0; _0x2cd169 < _0x203563[_0x49aa51]['length']; _0x2cd169++) {
                ctx[_0x203563[_0x49aa51][_0x2cd169][0x0]](..._0x203563[_0x49aa51][_0x2cd169]['slice'](0x1));
            }
            ctx['setGlobalAlpha'](ctx['fillOpacity'] * _0x44941d), ctx['fill'](), ctx['setGlobalAlpha'](ctx['strokeOpacity'] * _0x44941d), ctx['stroke'](), ctx['closePath'](), ctx['setGlobalAlpha'](_0x44941d, !![]);
        }
        ctx['restore'](), _0x203563['length'] === 0x1 && _0x203563[0x0]['length'] === 0x0 && petalRenderMap['Basic'](_0x42a3e8);
    }
};