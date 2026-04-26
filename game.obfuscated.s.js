let room = new Room();
window['room'] = room;
const inputHandler = new InputHandler();
inputHandler['start'](), window['selfId'] = null;
function enterGame() {
    window['state'] = 'game', document['querySelector']('.menu')['style']['display'] = 'none', globalInventory['fadeOut'](), mobGallery['fadeOut'](), inventory['copy'](menuInventory), inputHandler['sendInitialInput'](), squadUI['startGame']();
    window['isEditor'] !== !![] && chatDiv['classList']['remove']('hidden');
    window['runInterval'] = setInterval(runGame, 0x3e8 / 0x1e), craftingMenu['enterGame'](), levelBar['calculateDimensions']();
    !window['pixiApp']?.['initialized'] && (window['pixiApp']['init'](document['getElementById']('canvas')), window['pixiRenderer']['initLayers']());
    window['pixiRenderer']['enable'](), window['pixiRenderer']['enableLayer']('background'), window['pixiRenderer']['enableLayer']('grid'), window['pixiRenderer']['enableLayer']('worldBorder');
    if (window['is3D'] === !![])
        init3DScene();
}