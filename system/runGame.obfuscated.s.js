let collectedPetalContainers = [];
function runGame() {
    for (let _0x68488f in room['enemies']) {
        room['enemies'][_0x68488f]['dead'] === !![] && room['enemies'][_0x68488f]['deadAnimationTimer'] > 0xa6 && delete room['enemies'][_0x68488f];
    }
    window['isDead'] === !![] && window['automaticallyLeaveFlag'] === !![] && (delete window['automaticallyLeaveFlag'], petalReloadData = {}, petalHpData = {}, send({
        'leaveGame': !![],
        'real': !![]
    }));
    const _0x4e3aad = room['flowers'][window['selfId']];
    if (_0x4e3aad === undefined)
        return;
}