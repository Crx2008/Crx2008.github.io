class WeatherUI {
    constructor() {
        this['particles'] = [], this['lastParticleTime'] = 0x0;
    }
    ['update']() {
    }
    ['renderEffects'](_0x9fada3, _0x536393, _0x4d2ac9) {
        const _0x2fbf2a = window['currentWeather'];
        if (!_0x2fbf2a || !_0x2fbf2a['id'])
            return;
        if (window['showWeatherEffects'] === ![])
            return;
        const _0x1bb767 = room['flowers'][window['selfId']];
        if (!_0x1bb767)
            return;
        const _0x35628a = _0x536393['w'] / 0x2, _0x2d155b = _0x536393['h'] / 0x2;
        switch (_0x2fbf2a['id']) {
        case 'snow':
            this['renderSnow'](_0x9fada3, _0x536393, _0x4d2ac9);
            break;
        case 'rain':
            this['renderRain'](_0x9fada3, _0x536393, _0x4d2ac9);
            break;
        case 'fog':
        case 'toxic_fog':
            this['renderFog'](_0x9fada3, _0x536393, _0x2fbf2a['id'] === 'toxic_fog');
            break;
        case 'fire':
            this['renderFireEffect'](_0x9fada3, _0x536393, _0x4d2ac9);
            break;
        case 'darkness':
        case 'night':
            this['renderDarkness'](_0x9fada3, _0x536393, _0x2fbf2a['id'] === 'darkness' ? 0.9 : 0.5);
            break;
        case 'sandstorm':
            this['renderSandstorm'](_0x9fada3, _0x536393, _0x4d2ac9);
            break;
        case 'thunderstorm':
            this['renderThunderstorm'](_0x9fada3, _0x536393, _0x4d2ac9);
            break;
        case 'frozen':
            this['renderFrozenEffect'](_0x9fada3, _0x536393);
            break;
        }
        this['renderStunEffect'](_0x9fada3, _0x536393, _0x4d2ac9);
    }
    ['renderSnow'](_0xb418ff, _0x542527, _0x3f0268) {
        if (_0x3f0268 - this['lastParticleTime'] > 0x64) {
            for (let _0x3484a8 = 0x0; _0x3484a8 < 0x3; _0x3484a8++) {
                this['particles']['push']({
                    'x': Math['random']() * _0x542527['w'],
                    'y': -0xa,
                    'vx': (Math['random']() - 0.5) * 0.5,
                    'vy': 0x1 + Math['random']() * 0x2,
                    'size': 0x2 + Math['random']() * 0x3,
                    'type': 'snow'
                });
            }
            this['lastParticleTime'] = _0x3f0268;
        }
        _0xb418ff['fillStyle'] = 'rgba(255,\x20255,\x20255,\x200.8)';
        for (let _0x42617f = this['particles']['length'] - 0x1; _0x42617f >= 0x0; _0x42617f--) {
            const _0x2aa088 = this['particles'][_0x42617f];
            if (_0x2aa088['type'] !== 'snow')
                continue;
            _0x2aa088['x'] += _0x2aa088['vx'], _0x2aa088['y'] += _0x2aa088['vy'], _0xb418ff['beginPath'](), _0xb418ff['arc'](_0x2aa088['x'], _0x2aa088['y'], _0x2aa088['size'], 0x0, Math['PI'] * 0x2), _0xb418ff['fill'](), _0x2aa088['y'] > _0x542527['h'] + 0xa && this['particles']['splice'](_0x42617f, 0x1);
        }
    }
    ['renderRain'](_0x4530f9, _0x4fd0fd, _0x11e42a) {
        if (_0x11e42a - this['lastParticleTime'] > 0x32) {
            for (let _0x3ab61a = 0x0; _0x3ab61a < 0x5; _0x3ab61a++) {
                this['particles']['push']({
                    'x': Math['random']() * _0x4fd0fd['w'],
                    'y': -0xa,
                    'vx': -0x1,
                    'vy': 0x8 + Math['random']() * 0x4,
                    'length': 0xa + Math['random']() * 0xa,
                    'type': 'rain'
                });
            }
            this['lastParticleTime'] = _0x11e42a;
        }
        _0x4530f9['strokeStyle'] = 'rgba(150,\x20200,\x20255,\x200.6)', _0x4530f9['lineWidth'] = 0x1;
        for (let _0x2380cb = this['particles']['length'] - 0x1; _0x2380cb >= 0x0; _0x2380cb--) {
            const _0x48af35 = this['particles'][_0x2380cb];
            if (_0x48af35['type'] !== 'rain')
                continue;
            _0x48af35['x'] += _0x48af35['vx'], _0x48af35['y'] += _0x48af35['vy'], _0x4530f9['beginPath'](), _0x4530f9['moveTo'](_0x48af35['x'], _0x48af35['y']), _0x4530f9['lineTo'](_0x48af35['x'] + _0x48af35['vx'] * 0x2, _0x48af35['y'] + _0x48af35['length']), _0x4530f9['stroke'](), _0x48af35['y'] > _0x4fd0fd['h'] + 0x14 && this['particles']['splice'](_0x2380cb, 0x1);
        }
    }
    ['renderFog'](_0xc3599c, _0x182505, _0x559370) {
        const _0x29e87e = _0x559370 ? 'rgba(100,\x20150,\x2050,\x200.3)' : 'rgba(200,\x20200,\x20200,\x200.4)', _0x207342 = _0xc3599c['createRadialGradient'](_0x182505['w'] / 0x2, _0x182505['h'] / 0x2, 0x0, _0x182505['w'] / 0x2, _0x182505['h'] / 0x2, _0x182505['w'] * 0.7);
        _0x207342['addColorStop'](0x0, 'rgba(0,\x200,\x200,\x200)'), _0x207342['addColorStop'](0.5, _0x29e87e), _0x207342['addColorStop'](0x1, _0x29e87e), _0xc3599c['fillStyle'] = _0x207342, _0xc3599c['fillRect'](0x0, 0x0, _0x182505['w'], _0x182505['h']), _0x559370 && (_0xc3599c['fillStyle'] = 'rgba(100,\x20200,\x2050,\x200.1)', _0xc3599c['fillRect'](0x0, 0x0, _0x182505['w'], _0x182505['h']));
    }
    ['renderFireEffect'](_0x258db9, _0x15c573, _0x547ffa) {
        const _0x30cb30 = 0.1 + Math['sin'](_0x547ffa / 0xc8) * 0.05;
        _0x258db9['strokeStyle'] = 'rgba(255,\x20' + Math['floor'](0x64 + Math['sin'](_0x547ffa / 0x64) * 0x32) + ',\x200,\x20' + _0x30cb30 + ')', _0x258db9['lineWidth'] = 0x14, _0x258db9['strokeRect'](0x0, 0x0, _0x15c573['w'], _0x15c573['h']), _0x258db9['fillStyle'] = 'rgba(255,\x20100,\x200,\x20' + _0x30cb30 * 0.5 + ')', _0x258db9['fillRect'](0x0, 0x0, _0x15c573['w'], _0x15c573['h']);
    }
    ['renderDarkness'](_0x349146, _0x267573, _0x446aa7) {
        const _0x1e8fa4 = _0x349146['createRadialGradient'](_0x267573['w'] / 0x2, _0x267573['h'] / 0x2, 0x0, _0x267573['w'] / 0x2, _0x267573['h'] / 0x2, _0x267573['w'] * 0.4);
        _0x1e8fa4['addColorStop'](0x0, 'rgba(0,\x200,\x200,\x200)'), _0x1e8fa4['addColorStop'](0.5, 'rgba(0,\x200,\x200,\x20' + _0x446aa7 * 0.5 + ')'), _0x1e8fa4['addColorStop'](0x1, 'rgba(0,\x200,\x200,\x20' + _0x446aa7 + ')'), _0x349146['fillStyle'] = _0x1e8fa4, _0x349146['fillRect'](0x0, 0x0, _0x267573['w'], _0x267573['h']);
    }
    ['renderSandstorm'](_0x304df5, _0xb2cfc4, _0x4a3063) {
        if (_0x4a3063 - this['lastParticleTime'] > 0x1e) {
            for (let _0x3d0290 = 0x0; _0x3d0290 < 0xa; _0x3d0290++) {
                this['particles']['push']({
                    'x': _0xb2cfc4['w'] + 0xa,
                    'y': Math['random']() * _0xb2cfc4['h'],
                    'vx': -0x5 - Math['random']() * 0x5,
                    'vy': (Math['random']() - 0.5) * 0x2,
                    'size': 0x1 + Math['random']() * 0x2,
                    'type': 'sand'
                });
            }
            this['lastParticleTime'] = _0x4a3063;
        }
        _0x304df5['fillStyle'] = 'rgba(210,\x20180,\x20100,\x200.6)';
        for (let _0x5999aa = this['particles']['length'] - 0x1; _0x5999aa >= 0x0; _0x5999aa--) {
            const _0x35a554 = this['particles'][_0x5999aa];
            if (_0x35a554['type'] !== 'sand')
                continue;
            _0x35a554['x'] += _0x35a554['vx'], _0x35a554['y'] += _0x35a554['vy'], _0x304df5['beginPath'](), _0x304df5['arc'](_0x35a554['x'], _0x35a554['y'], _0x35a554['size'], 0x0, Math['PI'] * 0x2), _0x304df5['fill'](), _0x35a554['x'] < -0xa && this['particles']['splice'](_0x5999aa, 0x1);
        }
        _0x304df5['fillStyle'] = 'rgba(210,\x20180,\x20100,\x200.15)', _0x304df5['fillRect'](0x0, 0x0, _0xb2cfc4['w'], _0xb2cfc4['h']);
    }
    ['renderThunderstorm'](_0x23c14b, _0x170ad3, _0x4e4e19) {
        Math['random']() < 0.005 && (_0x23c14b['fillStyle'] = 'rgba(255,\x20255,\x20255,\x200.8)', _0x23c14b['fillRect'](0x0, 0x0, _0x170ad3['w'], _0x170ad3['h']), setTimeout(() => {
        }, 0x32)), this['renderRain'](_0x23c14b, _0x170ad3, _0x4e4e19), _0x23c14b['fillStyle'] = 'rgba(0,\x200,\x200,\x200.3)', _0x23c14b['fillRect'](0x0, 0x0, _0x170ad3['w'], _0x170ad3['h']);
    }
    ['renderFrozenEffect'](_0x20d684, _0x554cdb) {
        _0x20d684['fillStyle'] = 'rgba(150,\x20200,\x20255,\x200.2)', _0x20d684['fillRect'](0x0, 0x0, _0x554cdb['w'], _0x554cdb['h']), _0x20d684['strokeStyle'] = 'rgba(200,\x20230,\x20255,\x200.5)', _0x20d684['lineWidth'] = 0xa, _0x20d684['strokeRect'](0x0, 0x0, _0x554cdb['w'], _0x554cdb['h']);
    }
    ['renderLightningStrike'](_0x13f0f3, _0x5dee83, _0x5440d9) {
        if (window['showWeatherEffects'] === ![])
            return;
        if (!window['thunderstormEffects'] || window['thunderstormEffects']['length'] === 0x0)
            return;
        if (!window['camera'])
            return;
        window['thunderstormEffects'] = window['thunderstormEffects']['filter'](_0xce4c7e => _0x5440d9 < _0xce4c7e['startTime'] + _0xce4c7e['duration']);
        for (const _0x24dd1f of window['thunderstormEffects']) {
            const _0x386dd8 = _0x5440d9 - _0x24dd1f['strikeTime'], _0x2a8e19 = (_0x24dd1f['x'] - window['camera']['x']) * renderFov + _0x5dee83['w'] / 0x2, _0x225cb1 = (_0x24dd1f['y'] - window['camera']['y']) * renderFov + _0x5dee83['h'] / 0x2;
            if (_0x386dd8 < 0xc8) {
                const _0x33202c = 0x1 - _0x386dd8 / 0xc8;
                _0x13f0f3['fillStyle'] = 'rgba(255,\x20255,\x20255,\x20' + _0x33202c * 0.8 + ')', _0x13f0f3['fillRect'](0x0, 0x0, _0x5dee83['w'], _0x5dee83['h']), this['drawLightningBolt'](_0x13f0f3, _0x2a8e19, _0x225cb1 - 0x320, _0x2a8e19, _0x225cb1, _0x33202c);
            } else {
                if (_0x386dd8 < 0x1f4) {
                    const _0x194cab = (0x1f4 - _0x386dd8) / 0x12c;
                    this['drawLightningBolt'](_0x13f0f3, _0x2a8e19, _0x225cb1 - 0x320, _0x2a8e19, _0x225cb1, _0x194cab);
                    const _0xa788cb = _0x13f0f3['createRadialGradient'](_0x2a8e19, _0x225cb1, 0x0, _0x2a8e19, _0x225cb1, 0x64);
                    _0xa788cb['addColorStop'](0x0, 'rgba(200,\x20220,\x20255,\x20' + _0x194cab * 0.8 + ')'), _0xa788cb['addColorStop'](0.5, 'rgba(100,\x20150,\x20255,\x20' + _0x194cab * 0.3 + ')'), _0xa788cb['addColorStop'](0x1, 'rgba(100,\x20150,\x20255,\x200)'), _0x13f0f3['fillStyle'] = _0xa788cb, _0x13f0f3['fillRect'](_0x2a8e19 - 0x64, _0x225cb1 - 0x64, 0xc8, 0xc8);
                } else {
                    if (_0x386dd8 < _0x24dd1f['duration']) {
                        const _0x40e56b = Math['random']() * 0.3 * (0x1 - _0x386dd8 / _0x24dd1f['duration']);
                        _0x40e56b > 0.05 && this['drawLightningBolt'](_0x13f0f3, _0x2a8e19, _0x225cb1 - 0x190, _0x2a8e19, _0x225cb1, _0x40e56b * 0.5);
                        const _0x5ea929 = (_0x24dd1f['duration'] - _0x386dd8) / (_0x24dd1f['duration'] - 0x1f4) * 0.3, _0x2fad23 = _0x13f0f3['createRadialGradient'](_0x2a8e19, _0x225cb1, 0x0, _0x2a8e19, _0x225cb1, 0x3c);
                        _0x2fad23['addColorStop'](0x0, 'rgba(150,\x20180,\x20255,\x20' + _0x5ea929 + ')'), _0x2fad23['addColorStop'](0x1, 'rgba(150,\x20180,\x20255,\x200)'), _0x13f0f3['fillStyle'] = _0x2fad23, _0x13f0f3['fillRect'](_0x2a8e19 - 0x3c, _0x225cb1 - 0x3c, 0x78, 0x78);
                    }
                }
            }
        }
    }
    ['drawLightningBolt'](_0x3bcf58, _0x190435, _0x1b5593, _0x2a268d, _0x2a96f5, _0x220fa9) {
        _0x3bcf58['save'](), _0x3bcf58['strokeStyle'] = 'rgba(200,\x20220,\x20255,\x20' + _0x220fa9 + ')', _0x3bcf58['lineWidth'] = 0x3, _0x3bcf58['shadowColor'] = '#00ffff', _0x3bcf58['shadowBlur'] = 0xf, _0x3bcf58['lineCap'] = 'round', _0x3bcf58['lineJoin'] = 'round';
        const _0x3429c7 = 0x8, _0x4825c0 = [{
                    'x': _0x190435,
                    'y': _0x1b5593
                }];
        for (let _0xe102f1 = 0x1; _0xe102f1 < _0x3429c7; _0xe102f1++) {
            const _0x336f28 = _0xe102f1 / _0x3429c7, _0x5dce90 = _0x190435 + (_0x2a268d - _0x190435) * _0x336f28 + (Math['random']() - 0.5) * 0x28, _0x4e5b1c = _0x1b5593 + (_0x2a96f5 - _0x1b5593) * _0x336f28;
            _0x4825c0['push']({
                'x': _0x5dce90,
                'y': _0x4e5b1c
            });
        }
        _0x4825c0['push']({
            'x': _0x2a268d,
            'y': _0x2a96f5
        }), _0x3bcf58['beginPath'](), _0x3bcf58['moveTo'](_0x4825c0[0x0]['x'], _0x4825c0[0x0]['y']);
        for (let _0x867c72 = 0x1; _0x867c72 < _0x4825c0['length']; _0x867c72++) {
            _0x3bcf58['lineTo'](_0x4825c0[_0x867c72]['x'], _0x4825c0[_0x867c72]['y']);
        }
        _0x3bcf58['stroke'](), _0x3bcf58['strokeStyle'] = 'rgba(150,\x20200,\x20255,\x20' + _0x220fa9 * 0.6 + ')', _0x3bcf58['lineWidth'] = 1.5;
        for (let _0x4fdad5 = 0x2; _0x4fdad5 < _0x4825c0['length'] - 0x2; _0x4fdad5++) {
            if (Math['random']() > 0.5)
                continue;
            const _0x334793 = 0x1e + Math['random']() * 0x32, _0x465e1d = Math['atan2'](_0x2a96f5 - _0x1b5593, _0x2a268d - _0x190435) + (Math['random']() - 0.5) * Math['PI'] * 0.8;
            _0x3bcf58['beginPath'](), _0x3bcf58['moveTo'](_0x4825c0[_0x4fdad5]['x'], _0x4825c0[_0x4fdad5]['y']), _0x3bcf58['lineTo'](_0x4825c0[_0x4fdad5]['x'] + Math['cos'](_0x465e1d) * _0x334793, _0x4825c0[_0x4fdad5]['y'] + Math['sin'](_0x465e1d) * _0x334793), _0x3bcf58['stroke']();
        }
        _0x3bcf58['restore']();
    }
    ['renderStunEffect'](_0x1d5758, _0x9bc5fe, _0x53bd02) {
        if (!window['stunEffects'] || window['stunEffects']['length'] === 0x0)
            return;
        if (!window['camera'])
            return;
        window['stunEffects'] = window['stunEffects']['filter'](_0x42ecf9 => _0x53bd02 < _0x42ecf9['startTime'] + _0x42ecf9['duration']);
        for (const _0x1e48a3 of window['stunEffects']) {
            const _0x1568f2 = _0x53bd02 - _0x1e48a3['startTime'], _0x3910bb = (_0x1e48a3['x'] - window['camera']['x']) * renderFov + _0x9bc5fe['w'] / 0x2, _0x1d7893 = (_0x1e48a3['y'] - window['camera']['y']) * renderFov + _0x9bc5fe['h'] / 0x2;
            let _0x38ed10;
            _0x1568f2 < 0x1f4 ? _0x38ed10 = _0x1568f2 / 0x1f4 : _0x38ed10 = 0x1 - (_0x1568f2 - 0x1f4) / (_0x1e48a3['duration'] - 0x1f4), _0x38ed10 = Math['max'](0x0, Math['min'](0x1, _0x38ed10)), this['drawElectricCircle'](_0x1d5758, _0x3910bb, _0x1d7893, 0x32, _0x38ed10, _0x1568f2);
        }
    }
    ['drawElectricCircle'](_0x1b1297, _0x540946, _0x8ce1e7, _0x17f6c7, _0x1d06ad, _0x508792) {
        _0x1b1297['save']();
        const _0x567586 = 0x6, _0x5001e7 = Math['PI'] / 0x3;
        for (let _0x19e2cc = 0x0; _0x19e2cc < _0x567586; _0x19e2cc++) {
            const _0x4ca41a = _0x19e2cc / _0x567586 * Math['PI'] * 0x2 + _0x508792 * 0.003, _0x304165 = Math['random']() * 0.3;
            _0x1b1297['strokeStyle'] = 'rgba(255,\x20255,\x200,\x20' + _0x1d06ad * (0.7 + _0x304165) + ')', _0x1b1297['lineWidth'] = 0x3, _0x1b1297['shadowColor'] = '#ffff00', _0x1b1297['shadowBlur'] = 0xf, _0x1b1297['lineCap'] = 'round', _0x1b1297['beginPath']();
            const _0x281b28 = 0xa;
            for (let _0x27444d = 0x0; _0x27444d <= _0x281b28; _0x27444d++) {
                const _0x10a4fc = _0x27444d / _0x281b28, _0x278b8c = _0x4ca41a + _0x10a4fc * _0x5001e7, _0x2d16d0 = (Math['random']() - 0.5) * 0xa, _0x4f4a20 = _0x17f6c7 + _0x2d16d0, _0xb0364b = _0x540946 + Math['cos'](_0x278b8c) * _0x4f4a20, _0xd04a1d = _0x8ce1e7 + Math['sin'](_0x278b8c) * _0x4f4a20;
                _0x27444d === 0x0 ? _0x1b1297['moveTo'](_0xb0364b, _0xd04a1d) : _0x1b1297['lineTo'](_0xb0364b, _0xd04a1d);
            }
            _0x1b1297['stroke']();
        }
        _0x1b1297['restore']();
    }
    ['clearParticles']() {
        this['particles'] = [];
    }
}
const weatherUI = new WeatherUI();