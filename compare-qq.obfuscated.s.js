const https = require('https'), k = 'fp_22683ef070833b4b333d30ed43d9dc38faac80d8bbd5e73283214e1a1c4f0254', host = 'thoita-prod-7gydki1s27ab5d0f-1398459068.ap-shanghai.run.wxcloudrun.com';
function checkBalance(_0x30eb4c, _0x4e48dd) {
    const _0x456782 = new URLSearchParams({
        'apiKey': k,
        'qq': _0x30eb4c
    });
    https['get']({
        'hostname': host,
        'port': 0x1bb,
        'path': '/api/points/balance?' + _0x456782
    }, _0x5147e4 => {
        let _0x55296b = '';
        _0x5147e4['on']('data', _0x5e2fa6 => _0x55296b += _0x5e2fa6), _0x5147e4['on']('end', () => {
            const _0x555a81 = JSON['parse'](_0x55296b);
            _0x4e48dd(_0x30eb4c, _0x555a81);
        });
    });
}
checkBalance('10000001', (_0x38e067, _0x3cfcf0) => {
    checkBalance('3761081506', (_0x46ccc6, _0x993ddd) => {
        console['log']('QQ\x2010000001\x20(Rita):'), console['log']('\x20\x20余额:', _0x3cfcf0['balance']), console['log'](''), console['log']('QQ\x203761081506:'), console['log']('\x20\x20余额:', _0x993ddd['balance']), console['log'](''), console['log']('两个余额是否相同:', _0x3cfcf0['balance'] === _0x993ddd['balance']);
    });
});