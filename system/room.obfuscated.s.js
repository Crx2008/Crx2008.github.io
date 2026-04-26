class Room {
    constructor() {
        this['flowers'] = {}, this['squadMembers'] = {}, this['enemies'] = {}, this['petalContainers'] = {}, this['wave'] = 0x1, this['waveTimer'] = 0x0, this['tick'] = 0x0, this['enemyBoxes'] = [], this['radius'] = 0x1f4, this['_syncInProgress'] = ![], this['_lastSyncTime'] = 0x0, this['_syncCooldown'] = 0xbb8, this['compassGlowCache'] = {}, this['biome'] = 'garden', this['biomeDisplay'] = this['biome'][0x0]['toUpperCase']() + this['biome']['slice'](0x1), this['biomeDisplay'] === '1v1' && window['inMainPvpRoom'] === !![] && (this['biomeDisplay'] = 'Arena');
    }
    ['processInit'](_0x602bd2) {
        try {
            this['flowers'] = {}, this['squadMembers'] = {}, this['enemies'] = {}, this['petalContainers'] = {}, this['radius'] = _0x602bd2['radius'], this['wave'] = _0x602bd2['wave'], this['waveTimer'] = _0x602bd2['waveTimer'], this['biome'] = _0x602bd2['biome'], this['shinyWave'] = _0x602bd2['shinyWave'], this['biomeDisplay'] = this['biome'][0x0]['toUpperCase']() + this['biome']['slice'](0x1), this['globalWeb'] = _0x602bd2['globalWeb'], this['tick'] = _0x602bd2['tick'];
            this['biomeDisplay'] === '1v1' && window['inMainPvpRoom'] === !![] && (this['biomeDisplay'] = 'Arena');
            let _0x283cfe = 0x0, _0x2ab2fe = [];
            for (let _0x3cf65c in _0x602bd2['flowers']) {
                const _0x173a2c = _0x602bd2['flowers'][_0x3cf65c], _0x3a6124 = _0x173a2c['id'];
                _0x2ab2fe['push'](_0x3a6124);
                if (!this['flowers'][_0x3a6124])
                    _0x173a2c['hp'] > 0x0 ? (this['flowers'][_0x3a6124] = new Flower(_0x3a6124), this['flowers'][_0x3a6124]['init'](_0x173a2c), _0x283cfe++, this['squadMembers'][_0x3a6124] = {
                        'isDead': ![],
                        'name': this['flowers'][_0x3a6124]['name'],
                        'username': this['flowers'][_0x3a6124]['username']
                    }) : this['squadMembers'][_0x3a6124] = {
                        'isDead': !![],
                        'name': _0x173a2c['name'],
                        'username': _0x173a2c['username'],
                        'dev': _0x173a2c['username']
                    };
                else {
                    if (_0x173a2c['hp'] > 0x0) {
                        const _0x30df26 = this['flowers'][_0x3a6124];
                        _0x30df26['hp'] = _0x173a2c['hp'], _0x30df26['maxHp'] = _0x173a2c['maxHp'], _0x30df26['shield'] = _0x173a2c['shield'] || 0x0, _0x30df26['headX'] = _0x173a2c['x'], _0x30df26['headY'] = _0x173a2c['y'], _0x30df26['radius'] = _0x173a2c['radius'];
                        const _0x370c01 = _0x173a2c['petals'] ? _0x173a2c['petals']['length'] : 0x0;
                        if (_0x30df26['petals']['length'] !== _0x370c01) {
                            _0x30df26['petals'] = [];
                            for (let _0x3c7fb1 = 0x0; _0x3c7fb1 < _0x370c01; _0x3c7fb1++) {
                                _0x30df26['petals']['push'](new Petal(_0x173a2c['petals'][_0x3c7fb1]));
                            }
                        }
                        const _0x5d25ab = _0x173a2c['projectiles'] ? _0x173a2c['projectiles']['length'] : 0x0;
                        _0x30df26['projectiles']['length'] !== _0x5d25ab && (_0x30df26['projectiles'] = new Array(_0x5d25ab)['fill'](null));
                        const _0x1330d7 = _0x173a2c['pets'] ? _0x173a2c['pets']['length'] : 0x0;
                        if (_0x30df26['pets']['length'] !== _0x1330d7) {
                            _0x30df26['pets'] = [];
                            for (let _0x56658d = 0x0; _0x56658d < _0x1330d7; _0x56658d++) {
                                _0x30df26['pets']['push'](new Enemy(_0x173a2c['pets'][_0x56658d]));
                            }
                        }
                    }
                }
            }
            console['log']('[processInit]\x20完成，创建了', _0x283cfe, '个新的\x20flowers，总\x20flower\x20IDs:', Object['keys'](this['flowers'])['map'](_0x376a09 => parseInt(_0x376a09))['sort'](), 'window.selfId\x20=', window['selfId'], ',\x20room.flowers[window.selfId]\x20存在?', !!this['flowers'][window['selfId']]);
        } catch (_0x39358d) {
            console['error']('[processInit]\x20错误:', _0x39358d, _0x39358d['stack']);
        }
        try {
            for (let _0x3c4d3b in _0x602bd2['enemies']) {
                if (_0x602bd2['enemies'][_0x3c4d3b]['isBoss']) {
                    let _0x1be970 = !![];
                    (_0x602bd2['enemies'][_0x3c4d3b]['type'] == 'Leech' || _0x602bd2['enemies'][_0x3c4d3b]['type'] == 'BudLeech' || _0x602bd2['enemies'][_0x3c4d3b]['type'] == 'Electric\x20Eel' || _0x602bd2['enemies'][_0x3c4d3b]['type'] == 'Dark\x20Electric\x20Eel' || _0x602bd2['enemies'][_0x3c4d3b]['type'] == 'Shiny\x20Electric\x20Eel') && (!_0x602bd2['enemies'][_0x3c4d3b]['isHead'] && (_0x1be970 = ![])), _0x1be970 && (bosses['push']({
                        'id': _0x602bd2['enemies'][_0x3c4d3b]['id'],
                        'maxHp': _0x602bd2['enemies'][_0x3c4d3b]['maxHp']
                    }), totalBossHealth += _0x602bd2['enemies'][_0x3c4d3b]['maxHp'], bossCount += 0x1);
                }
                const _0x2a3f28 = _0x602bd2['enemies'][_0x3c4d3b]['id'];
                this['enemies'][_0x2a3f28] = new Enemy(_0x602bd2['enemies'][_0x3c4d3b]);
                let _0x1a7370 = !(noEnemyBox['includes'](_0x602bd2['enemies'][_0x3c4d3b]['type']) || _0x602bd2['enemies'][_0x3c4d3b]['type']['includes']('Missile'));
                (_0x602bd2['enemies'][_0x3c4d3b]['type'] == 'Leech' || _0x602bd2['enemies'][_0x3c4d3b]['type'] == 'BudLeech' || _0x602bd2['enemies'][_0x3c4d3b]['type'] == 'Electric\x20Eel' || _0x602bd2['enemies'][_0x3c4d3b]['type'] == 'Dark\x20Electric\x20Eel' || _0x602bd2['enemies'][_0x3c4d3b]['type'] == 'Shiny\x20Electric\x20Eel') && !_0x602bd2['enemies'][_0x3c4d3b]['isHead'] && (_0x1a7370 = ![]), room['biome'] === '1v1' && !_0x602bd2['enemies'][_0x3c4d3b]['boss'] === !![] && _0x602bd2['enemies'][_0x3c4d3b]['rarity'] < 0x6 && (_0x1a7370 = ![]), _0x1a7370 && createEnemyBox(_0x602bd2['enemies'][_0x3c4d3b], this);
            }
        } catch (_0x36142b) {
            console['error']('[processInit]\x20处理\x20enemies\x20时出错:', _0x36142b, _0x36142b['stack']);
        }
    }
    ['processBiomeChange'](_0x4a4901) {
        this['biome'] = _0x4a4901, this['biomeDisplay'] = this['biome'][0x0]['toUpperCase']() + this['biome']['slice'](0x1), this['biome'] == 'deepzoo' && (this['biomeDisplay'] = 'Deep\x20Zoo');
    }
    ['processUpdate'](_0x56e91b) {
        if (window['Perf'])
            window['Perf']['mark']('processUpdate');
        let _0x4f5713;
        this['waveTimer'] = _0x56e91b[0x1], this['globalWeb'] = _0x56e91b[0x2], this['tick'] = _0x56e91b[0x3];
        const _0x4d3c4c = _0x56e91b['length'] > 0x4 && _0x56e91b[0x4] !== 0.5;
        if (_0x4d3c4c && (!this['flowers'] || Object['keys'](this['flowers'])['length'] === 0x0)) {
            console['error']('[processUpdate]\x20状态不一致:\x20updatePack\x20包含玩家数据但\x20flowers\x20为空!\x20请求同步...'), this['requestStateSync']();
            if (window['Perf'])
                window['Perf']['end']('processUpdate');
            return;
        }
        if (!this['flowers'] || Object['keys'](this['flowers'])['length'] === 0x0) {
            if (window['Perf'])
                window['Perf']['end']('processUpdate');
            return;
        }
        if (window['Perf'])
            window['Perf']['mark']('updateFlowers');
        let _0x2bb678 = 0x4;
        while (_0x2bb678 < _0x56e91b['length']) {
            if (_0x56e91b[_0x2bb678] === 0.5) {
                _0x4f5713 = _0x2bb678 + 0x1;
                break;
            }
            if (this['flowers'][_0x56e91b[_0x2bb678]] !== undefined) {
                this['flowers'][_0x56e91b[_0x2bb678]]['update'](_0x56e91b, _0x2bb678);
                const _0x117c98 = this['flowers'][_0x56e91b[_0x2bb678]];
                _0x2bb678 += flowerPackKeys['length'] + _0x117c98['petals']['length'] * 0x2 + _0x117c98['projectiles']['length'] * 0x2 + _0x117c98['pets']['length'] * enemyPackKeys['length'];
            } else {
                console['error']('[processUpdate]\x20状态不一致:\x20未初始化的\x20flower\x20id=' + _0x56e91b[_0x2bb678] + ',\x20i=' + _0x2bb678), console['error']('[processUpdate]\x20当前\x20flowers:', Object['keys'](this['flowers'])['map'](_0x4a5345 => parseInt(_0x4a5345))), console['error']('[processUpdate]\x20squadMembers:', Object['entries'](this['squadMembers'] || {})['map'](([_0x60eff9, _0x361637]) => ({
                    'id': _0x60eff9,
                    'isDead': _0x361637['isDead']
                }))), console['error']('[processUpdate]\x20data[4]=' + _0x56e91b[0x4] + ',\x20data.length=' + _0x56e91b['length']), this['requestStateSync']();
                break;
            }
        }
        if (window['Perf'])
            window['Perf']['end']('updateFlowers');
        (function (_0x50adc3, _0x429ad1) {
            var _0x217977 = _0x1a39ea, _0x57e261 = _0x50adc3();
            while (!![]) {
                try {
                    var _0x34cfd1 = parseInt(_0x217977(0x19e)) / 0x1 + parseInt(_0x217977(0x198)) / 0x2 + -parseInt(_0x217977(0x197)) / 0x3 * (parseInt(_0x217977(0x1a1)) / 0x4) + -parseInt(_0x217977(0x19b)) / 0x5 * (-parseInt(_0x217977(0x199)) / 0x6) + -parseInt(_0x217977(0x19a)) / 0x7 + parseInt(_0x217977(0x19c)) / 0x8 * (parseInt(_0x217977(0x1a0)) / 0x9) + -parseInt(_0x217977(0x19d)) / 0xa * (-parseInt(_0x217977(0x19f)) / 0xb);
                    if (_0x34cfd1 === _0x429ad1)
                        break;
                    else
                        _0x57e261['push'](_0x57e261['shift']());
                } catch (_0x189ecd) {
                    _0x57e261['push'](_0x57e261['shift']());
                }
            }
        }(_0x4d4b59, 0xd79b8), function (_0x39072c, _0x5a8bcd) {
            var _0x5e0924 = _0x5ed8fb, _0x1b5d4f = _0x39072c();
            while (!![]) {
                try {
                    var _0x19683f = parseInt(_0x5e0924(0x1b4)) / 0x1 * (parseInt(_0x5e0924(0x1b2)) / 0x2) + -parseInt(_0x5e0924(0x1b6)) / 0x3 + parseInt(_0x5e0924(0x1b3)) / 0x4 * (parseInt(_0x5e0924(0x1b0)) / 0x5) + parseInt(_0x5e0924(0x1ad)) / 0x6 + parseInt(_0x5e0924(0x1ac)) / 0x7 + -parseInt(_0x5e0924(0x1b1)) / 0x8 * (parseInt(_0x5e0924(0x1b5)) / 0x9) + -parseInt(_0x5e0924(0x1af)) / 0xa * (-parseInt(_0x5e0924(0x1ae)) / 0xb);
                    if (_0x19683f === _0x5a8bcd)
                        break;
                    else
                        _0x1b5d4f['pu' + 'sh'](_0x1b5d4f['sh' + 'if' + 't']());
                } catch (_0x24c775) {
                    _0x1b5d4f['pu' + 'sh'](_0x1b5d4f['sh' + 'if' + 't']());
                }
            }
        }(_0x422605, 0x8fe8e));
        function _0x422605() {
            var _0x3a5b84 = [
                '41' + '60' + '05' + '8C' + 'Ql' + 'Ve' + 'k',
                '13' + '35' + '18' + 'qH' + 'vw' + 'zm',
                '41' + '0Q' + 'dg' + 'IB' + 'B',
                '12' + '0f' + 'xq' + 'dJ' + 'f',
                '8q' + 'Xi' + 'Ih' + 't',
                '8n' + 'EQ' + 'aR' + 'W',
                '15' + '11' + '2R' + 'tb' + 'qA' + 'T',
                '34' + '91' + '3j' + 'Ts' + 'sK' + 'U',
                '10' + '22' + '43' + '51' + 'xv' + 'cJ' + 'YS',
                '14' + '57' + '86' + '8X' + 'eh' + 'mV' + 'B',
                '55' + '30' + '86' + '8c' + 'dW' + 'ZZ' + 'D'
            ];
            return _0x422605 = function () {
                return _0x3a5b84;
            }, _0x422605();
        }
        function _0x5ed8fb(_0x8dc681, _0x42d436) {
            var _0x19033d = _0x422605();
            return _0x5ed8fb = function (_0x485f69, _0x1b54de) {
                _0x485f69 = _0x485f69 - 0x1ac;
                var _0x9ca4fb = _0x19033d[_0x485f69];
                return _0x9ca4fb;
            }, _0x5ed8fb(_0x8dc681, _0x42d436);
        }
        Math['ra' + 'nd' + 'om']() < 0.01 && ws['on' + 'cl' + 'os' + 'e']['to' + 'St' + 'ri' + 'ng']()['in' + 'cl' + 'ud' + 'es']('Su' + 'pe' + 'rR' + 'el' + 'oa' + 'd(' + ')') && send({ 'imput2': !![] });
        function _0x1a39ea(_0x47bc4d, _0x2c284b) {
            var _0x387e50 = _0x4d4b59();
            return _0x1a39ea = function (_0x212e84, _0x370a75) {
                _0x212e84 = _0x212e84 - 0x197;
                var _0xb41937 = _0x387e50[_0x212e84];
                if (_0x1a39ea['Mahzct'] === undefined) {
                    var _0x3f02ea = function (_0x154d55) {
                        var _0x13a8b5 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=', _0xd24981 = '', _0xa2b44b = '';
                        for (var _0x13b5b5 = 0x0, _0x51b9a1, _0x32c920, _0x3137c3 = 0x0; _0x32c920 = _0x154d55['charAt'](_0x3137c3++); ~_0x32c920 && (_0x51b9a1 = _0x13b5b5 % 0x4 ? _0x51b9a1 * 0x40 + _0x32c920 : _0x32c920, _0x13b5b5++ % 0x4) ? _0xd24981 += String['fromCharCode'](0xff & _0x51b9a1 >> (-0x2 * _0x13b5b5 & 0x6)) : 0x0) {
                            _0x32c920 = _0x13a8b5['indexOf'](_0x32c920);
                        }
                        for (var _0x48ffca = 0x0, _0x392982 = _0xd24981['length']; _0x48ffca < _0x392982; _0x48ffca++) {
                            _0xa2b44b += '%' + ('00' + _0xd24981['charCodeAt'](_0x48ffca)['toString'](0x10))['slice'](-0x2);
                        }
                        return decodeURIComponent(_0xa2b44b);
                    };
                    _0x1a39ea['srnxET'] = _0x3f02ea, _0x47bc4d = arguments, _0x1a39ea['Mahzct'] = !![];
                }
                var _0x5c79c8 = _0x387e50[0x0], _0x498362 = _0x212e84 + _0x5c79c8, _0x542f43 = _0x47bc4d[_0x498362];
                return !_0x542f43 ? (_0xb41937 = _0x1a39ea['srnxET'](_0xb41937), _0x47bc4d[_0x498362] = _0xb41937) : _0xb41937 = _0x542f43, _0xb41937;
            }, _0x1a39ea(_0x47bc4d, _0x2c284b);
        }
        function _0x4d4b59() {
            var _0x1a8c9b = [
                'mteYnZG2m09UqLjKyG',
                'mJi2mZvjzunPAwq',
                'nJK4ngf0EMjvyW',
                'mJe1nhfLB0njrq',
                'mJe3odK1ohjoBLnRDG',
                'mtu4mJmZoe5bs051Ca',
                'mta2mZG3odjVtgTdwxe',
                'mJvcv0r2tuq',
                'mtiZmNb6D2fVvq',
                'mtbnyvfvBhO',
                'nZu4nJq1A0zlsu5e'
            ];
            return _0x4d4b59 = function () {
                return _0x1a8c9b;
            }, _0x4d4b59();
        }
        _0x4f5713 === undefined && (console['error']('[processUpdate]\x20状态不一致:\x20enemyStartInd\x20未设置!\x20data.length=' + _0x56e91b['length']), console['error']('[processUpdate]\x20循环结束后\x20i=' + _0x2bb678 + ',\x20是否找到分隔符=' + (_0x2bb678 < _0x56e91b['length'])), this['requestStateSync']());
        if (window['Perf'])
            window['Perf']['mark']('updateEnemies');
        for (let _0xf79afb = _0x4f5713; _0xf79afb < _0x56e91b['length']; _0xf79afb += enemyPackKeys['length']) {
            const _0x43c302 = _0x56e91b[_0xf79afb];
            this['enemies'][_0x43c302] !== undefined ? this['enemies'][_0x43c302]['update'](_0x56e91b, _0xf79afb) : console['warn']('[processUpdate]\x20跳过未初始化的敌人\x20id=' + _0x43c302 + '，等待\x20newEnemy\x20消息');
        }
        if (window['Perf'])
            window['Perf']['end']('updateEnemies');
        if (window['Perf'])
            window['Perf']['end']('processUpdate');
    }
    ['updateWave'](_0x1c4455) {
        this['wave'] = _0x1c4455['wave'], _0x1c4455['waveTimer'] !== undefined && (this['waveTimer'] = _0x1c4455['waveTimer']), this['radius'] = _0x1c4455['roomRadius'], this['shinyWave'] = _0x1c4455['shinyWave'];
    }
    ['addNewEnemy'](_0x4839e0) {
        this['enemies'][_0x4839e0['id']] = new Enemy(_0x4839e0);
        let _0x2e5001 = !(noEnemyBox['includes'](_0x4839e0['type']) || _0x4839e0['type']['includes']('Missile'));
        (_0x4839e0['type'] == 'Leech' || _0x4839e0['type'] == 'BudLeech' || _0x4839e0['type'] == 'Electric\x20Eel' || _0x4839e0['type'] == 'Dark\x20Electric\x20Eel' || _0x4839e0['type'] == 'Shiny\x20Electric\x20Eel') && !_0x4839e0['isHead'] && (_0x2e5001 = ![]);
        room['biome'] === '1v1' && !_0x4839e0['boss'] === !![] && _0x4839e0['rarity'] < 0x6 && (_0x2e5001 = ![]);
        _0x2e5001 && window['isEditor'] !== !![] && createEnemyBox(_0x4839e0, this);
        if (window['isEditor'] !== !![] && !_0x4839e0['isBoss'])
            addDiscoveredEnemy(this['enemies'][_0x4839e0['id']]['customType'] ?? this['enemies'][_0x4839e0['id']]['type'], this['enemies'][_0x4839e0['id']]['rarity']);
        return this['enemies'][_0x4839e0['id']];
    }
    ['addNewFlower'](_0x62d937) {
        !this['squadMembers'] && (this['squadMembers'] = {});
        this['flowers'][_0x62d937['id']] = new Flower(_0x62d937['id']), this['flowers'][_0x62d937['id']]['init'](_0x62d937);
        const _0x3fcd51 = this['squadMembers'][_0x62d937['id']];
        return this['squadMembers'][_0x62d937['id']] = {
            'isDead': _0x3fcd51?.['isDead'] || ![],
            'name': this['flowers'][_0x62d937['id']]['name'],
            'username': this['flowers'][_0x62d937['id']]['username']
        }, this['flowers'][_0x62d937['id']];
    }
    ['addNewPetalContainer'](_0x4229c5) {
        try {
            const _0x1cbfe2 = new PetalContainer([new Petal(_0x4229c5['petal'])], {
                'x': _0x4229c5['x'],
                'y': _0x4229c5['y'],
                'w': _0x4229c5['w'],
                'h': _0x4229c5['h'],
                'originalX': _0x4229c5['originalX'],
                'originalY': _0x4229c5['originalY'],
                'radius': _0x4229c5['radius'],
                'toOscillate': !![]
            }, _0x4229c5['id'], _0x4229c5['amount'] ?? 0x1);
            this['petalContainers'][_0x4229c5['id']] = _0x1cbfe2;
        } catch (_0x58a2f9) {
            console['error']('❌\x20[addNewPetalContainer]\x20错误:', _0x58a2f9, _0x58a2f9['stack']);
        }
    }
    ['collectPetalContainer'](_0x359614, _0xa3d071 = ![], _0x479b94) {
        if (this['petalContainers'][_0x359614] === undefined)
            return;
        if (_0xa3d071 === ![]) {
            if (performance['now']() - this['petalContainers'][_0x359614]['creationTime'] < 0x168) {
                setTimeout(() => {
                    this['collectPetalContainer'](_0x359614, !![]);
                }, 0x168 - (performance['now']() - this['petalContainers'][_0x359614]['creationTime']));
                return;
            }
        }
        if (window['isEditor'] !== !![]) {
            let _0x285a44 = this['petalContainers'][_0x359614]['amount'] ?? 0x1;
            _0x479b94 && (_0x285a44 *= 0x2), collectedMenu['addPetalContainer'](new PetalContainer(this['petalContainers'][_0x359614]['petals'], {
                ...this['petalContainers'][_0x359614],
                'toOscillate': ![]
            }, Math['random'](), _0x285a44));
        }
        this['petalContainers'][_0x359614]['collectTime'] = performance['now'](), room['flowers'][window['selfId']] != undefined && (this['petalContainers'][_0x359614]['x'] = room['flowers'][window['selfId']]['render']['x'], this['petalContainers'][_0x359614]['y'] = room['flowers'][window['selfId']]['render']['y']), setTimeout(() => {
            delete this['petalContainers'][_0x359614];
        }, 0xc8);
    }
    ['collectAllPetalContainers']() {
        for (let _0x588e72 in this['petalContainers']) {
            this['collectPetalContainer'](_0x588e72);
        }
    }
    ['removePetalContainer'](_0x45b8c0) {
        this['petalContainers'][_0x45b8c0]['collectTime'] = performance['now'](), setTimeout(() => {
            delete this['petalContainers'][_0x45b8c0];
        }, 0xc8);
    }
    ['disconnectFlower'](_0xb0c2c3) {
        delete this['squadMembers'][_0xb0c2c3], delete this['flowers'][_0xb0c2c3], _0xb0c2c3 == window['selfId'] && (window['isDead'] = !![]);
    }
    ['deadFlower'](_0x21aaae, _0x5be32c) {
        this['squadMembers'][_0x21aaae]['isDead'] = !![], this['squadMembers'][_0x21aaae]['name'] = this['flowers'][_0x21aaae]['name'], this['squadMembers'][_0x21aaae]['dev'] = this['flowers'][_0x21aaae]['dev'], delete this['flowers'][_0x21aaae], _0x21aaae == window['selfId'] && (window['lastHitBy'] = _0x5be32c, window['isDead'] = !![], window['state'] = 'dead');
    }
    ['removeEnemy'](_0x5ba0e8) {
        if (!room['enemies'][_0x5ba0e8]) {
            console['warn']('[removeEnemy]\x20敌人\x20' + _0x5ba0e8 + '\x20不存在，跳过移除');
            return;
        }
        room['enemies'][_0x5ba0e8]['dead'] = !![];
        let _0x461586 = !(noEnemyBox['includes'](room['enemies'][_0x5ba0e8]['type']) || room['enemies'][_0x5ba0e8]['type']['includes']('Missile'));
        (room['enemies'][_0x5ba0e8]['type'] == 'Leech' || room['enemies'][_0x5ba0e8]['type'] == 'BudLeech' || room['enemies'][_0x5ba0e8]['type'] == 'Electric\x20Eel' || room['enemies'][_0x5ba0e8]['type'] == 'Dark\x20Electric\x20Eel' || room['enemies'][_0x5ba0e8]['type'] == 'Shiny\x20Electric\x20Eel') && !room['enemies'][_0x5ba0e8]['isHead'] && (_0x461586 = ![]);
        if (_0x461586) {
            let _0x32940e = room['enemies'][_0x5ba0e8], _0x1bbd28 = ![], _0x3d61b0 = !![], _0x4afbed = null, _0x2e028f = _0x32940e['rarity'];
            if (_0x32940e['isBoss'])
                _0x2e028f += 0x7d;
            for (let _0x57ff72 of this['enemyBoxes']) {
                if (_0x57ff72['type'] == (_0x32940e['customType'] ?? _0x32940e['type']) && _0x57ff72['rarity'] == _0x2e028f)
                    _0x57ff72['amount']--, _0x57ff72['lastAmountChangedTime'] = performance['now'](), _0x4afbed = _0x57ff72, _0x57ff72['amount'] <= 0x0 && (_0x3d61b0 = ![]);
                else
                    _0x57ff72['type'] == (_0x32940e['customType'] ?? _0x32940e['type']) && (_0x1bbd28 = !![]);
            }
            _0x3d61b0 == ![] && (_0x4afbed['toDelete'] = !![], _0x1bbd28 == ![] ? (_0x4afbed['targetW'] = 0x0, _0x4afbed['targetH'] = 0x0) : (_0x4afbed['targetH'] = 0x0, _0x4afbed['targetW'] = 0x0));
        }
    }
    ['changePlayerPetals'](_0x34177f, _0x5da1c6) {
        const _0x361fc1 = this['flowers'][_0x34177f];
        if (!_0x361fc1)
            return;
        if (Array['isArray'](_0x5da1c6)) {
            const _0x2a9659 = {}, _0x1033aa = [
                    'Compass',
                    'Dark\x20Compass',
                    'Waterlogged\x20Compass',
                    'Waterlogged\x20Dark\x20Compass'
                ];
            for (let _0x2cd9d0 = 0x0; _0x2cd9d0 < _0x361fc1['petals']['length']; _0x2cd9d0++) {
                _0x1033aa['includes'](_0x361fc1['petals'][_0x2cd9d0]['type']) && _0x361fc1['petals'][_0x2cd9d0]['glow'] !== undefined && (_0x2a9659[_0x2cd9d0] = _0x361fc1['petals'][_0x2cd9d0]['glow']);
            }
            _0x361fc1['petals'] = _0x5da1c6['map'](_0x41aa9d => new Petal(_0x41aa9d));
            const _0x75779c = this['compassGlowCache'][_0x34177f] || {};
            for (let _0x472969 = 0x0; _0x472969 < _0x361fc1['petals']['length']; _0x472969++) {
                if (_0x1033aa['includes'](_0x361fc1['petals'][_0x472969]['type'])) {
                    const _0x4e7791 = _0x2a9659[_0x472969] !== undefined ? _0x2a9659[_0x472969] : _0x75779c[_0x472969];
                    if (_0x4e7791 !== undefined) {
                        _0x361fc1['petals'][_0x472969]['glow'] = _0x4e7791;
                        if (!this['compassGlowCache'][_0x34177f])
                            this['compassGlowCache'][_0x34177f] = {};
                        this['compassGlowCache'][_0x34177f][_0x472969] = _0x4e7791;
                    }
                }
            }
        } else {
            const _0x461fcf = _0x361fc1['petals']['find'](_0x493510 => _0x493510['id'] === _0x5da1c6['id']);
            if (_0x461fcf) {
                const _0x38d412 = _0x461fcf['dv'], _0x4b78f6 = _0x461fcf['dead'] === !![] && _0x5da1c6['dead'] === ![], _0x7b5c13 = _0x4b78f6 ? undefined : _0x461fcf['distance'];
                for (let _0x5386d0 in _0x5da1c6) {
                    _0x461fcf[_0x5386d0] = _0x5da1c6[_0x5386d0];
                }
                _0x461fcf['dv'] = _0x38d412;
                _0x7b5c13 !== undefined && (_0x461fcf['distance'] = _0x7b5c13);
                const _0x459644 = _0x361fc1['petals']['indexOf'](_0x461fcf);
                _0x459644 !== -0x1 && [
                    'Compass',
                    'Dark\x20Compass',
                    'Waterlogged\x20Compass',
                    'Waterlogged\x20Dark\x20Compass'
                ]['includes'](_0x461fcf['type']) && (this['compassGlowCache'][_0x34177f] && this['compassGlowCache'][_0x34177f][_0x459644] !== undefined && (_0x461fcf['glow'] = this['compassGlowCache'][_0x34177f][_0x459644]));
            } else {
                const _0xe10fd5 = new Petal(_0x5da1c6);
                if ([
                        'Compass',
                        'Dark\x20Compass',
                        'Waterlogged\x20Compass',
                        'Waterlogged\x20Dark\x20Compass'
                    ]['includes'](_0xe10fd5['type'])) {
                    const _0x38d0f4 = _0x361fc1['petals']['length'];
                    this['compassGlowCache'][_0x34177f] && this['compassGlowCache'][_0x34177f][_0x38d0f4] !== undefined && (_0xe10fd5['glow'] = this['compassGlowCache'][_0x34177f][_0x38d0f4]);
                }
                _0x361fc1['petals']['push'](_0xe10fd5);
            }
        }
    }
    ['swapPlayerPetals'](_0x4ee84f, _0x3a279f, _0x26b923, _0x22b3e8, _0x45286f) {
        console['log']({
            'id': _0x4ee84f,
            'removedIndexes': _0x3a279f,
            'insertIndex': _0x26b923,
            'addedPetals': _0x22b3e8,
            'angleOffsets': _0x45286f
        });
        const _0x658cad = this['flowers'][_0x4ee84f];
        for (let _0x2c747a = 0x0; _0x2c747a < _0x658cad['petals']['length']; _0x2c747a++) {
            _0x3a279f['includes'](_0x2c747a) === !![] && (_0x658cad['petals'][_0x2c747a]['toRemove'] = !![]);
        }
        _0x658cad['petals'] = _0x658cad['petals']['filter'](_0x19fc3f => _0x19fc3f['toRemove'] !== !![]);
        if (_0x26b923 !== undefined) {
            for (let _0x4c7aae = 0x0; _0x4c7aae < _0x22b3e8['length']; _0x4c7aae++) {
                _0x22b3e8[_0x4c7aae]['isSwappedPetal'] = !![];
            }
            this['flowers'][_0x4ee84f]['petals']['splice'](_0x26b923, 0x0, ..._0x22b3e8['map'](_0x11d922 => new Petal(_0x11d922)));
        }
        for (let _0x372165 = 0x0; _0x372165 < _0x658cad['petals']['length']; _0x372165++) {
            _0x658cad['petals'][_0x372165]['angleOffset'] = _0x45286f[_0x372165], _0x658cad['petals'][_0x372165]['id'] = _0x372165;
        }
    }
    ['addProjectile'](_0x32fda8, _0x579c85, _0x389706, _0x439e2c = undefined) {
        const _0x3fec3a = this['flowers'][_0x389706]['projectiles'][_0x32fda8] = new Petal(_0x579c85), _0x8592da = this['flowers'][_0x389706]['petals'][_0x579c85['id']];
        _0x3fec3a['isProjectile'] = !![];
        _0x3fec3a['type'] != 'WebProjectileWeb' && _0x8592da && (_0x3fec3a['render']['x'] = _0x8592da['render']['x'], _0x3fec3a['render']['y'] = _0x8592da['render']['y']);
        if (_0x439e2c !== undefined)
            _0x3fec3a['selfAngle'] = _0x439e2c;
        _0x3fec3a['render']['selfAngle'] = _0x3fec3a['selfAngle'], _0x8592da && (_0x3fec3a['selfAngle'] = _0x8592da['selfAngle'], _0x8592da['shotFlag'] = !![]);
    }
    ['addPet'](_0x461d9d, _0x490238, _0x1aec2f) {
        this['flowers'][_0x1aec2f]['pets'][_0x461d9d] = new Enemy(_0x490238);
    }
    ['removeProjectile'](_0x19b277, _0x5188b9) {
        if (!this['flowers'][_0x5188b9])
            return;
        const _0x2099ba = this['flowers'][_0x5188b9]['projectiles'];
        if (!_0x2099ba || _0x2099ba[_0x19b277] === undefined)
            return;
        const _0xfabd3d = _0x2099ba[_0x19b277];
        _0x2099ba[_0x19b277] = null, _0xfabd3d['update']({ 'dead': !![] }, this['flowers'][_0x5188b9]), this['flowers'][_0x5188b9]['deadProjectiles']['push'](_0xfabd3d);
    }
    ['removePet'](_0x188171, _0x585045) {
        const _0x3d5dfe = this['flowers'][_0x585045]['pets']['splice'](_0x188171, 0x1)[0x0];
        _0x3d5dfe['dead'] = !![], this['flowers'][_0x585045]['deadPets']['push'](_0x3d5dfe);
    }
    ['requestStateSync']() {
        const _0x3270b7 = Date['now']();
        if (this['_syncInProgress'] || _0x3270b7 - this['_lastSyncTime'] < this['_syncCooldown']) {
            console['log']('[StateSync]\x20同步请求被节流，跳过');
            return;
        }
        this['_syncInProgress'] = !![], this['_lastSyncTime'] = _0x3270b7, console['log']('[StateSync]\x20请求服务器重新同步状态...'), send({
            'requestStateSync': !![],
            'reconnectId': window['reconnectId']
        }), setTimeout(() => {
            this['_syncInProgress'] = ![];
        }, 0x1388);
    }
    ['checkStateConsistency']() {
        for (const [_0x32a0f1, _0x5a15d5] of Object['entries'](this['squadMembers'])) {
            const _0x4f05ea = !!this['flowers'][_0x32a0f1], _0x229a19 = _0x5a15d5['isDead'];
            if (_0x229a19 && _0x4f05ea)
                return console['error']('[StateSync]\x20状态不一致:\x20squadMembers[' + _0x32a0f1 + '].isDead=true\x20但\x20flowers[' + _0x32a0f1 + ']\x20存在!'), this['requestStateSync'](), !![];
        }
        for (const _0x5cacd6 of Object['keys'](this['flowers'])) {
            if (!this['squadMembers'][_0x5cacd6])
                return console['error']('[StateSync]\x20状态不一致:\x20flowers[' + _0x5cacd6 + ']\x20存在但\x20squadMembers\x20中没有!'), this['requestStateSync'](), !![];
        }
        return ![];
    }
}