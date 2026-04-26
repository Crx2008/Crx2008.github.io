const mouse = { x: 0, y: 0, canvasX: 0, canvasY: 0, clickPosition: 'up', lastDownData: { time: -Infinity, x: 0, y: 0 } };
const keyCodes = {
    KeyW: 'up',
    KeyA: 'left',
    KeyS: 'down',
    KeyD: 'right',
    ArrowUp: 'up',
    ArrowLeft: 'left',
    ArrowDown: 'down',
    ArrowRight: 'right',
}

const directionToIdMap = {
    'up': 0,
    'left': 1,
    'down': 2,
    'right': 3
}
function arrayEquals(a, b) {
    return Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every((val, index) => val === b[index]);
}

let latestInput = [];
let previousInput = null;
let lastSentInput = window.performance.now();
let minimumInputTime = 1000 / 10; 

const chatCommandMap = {
    // 'reset': (handler, { client }) => {
    // }
}

class InputHandler {
    constructor(client) {
        this.client = client;

        this.chatOpen = false;
    }
    start() {
        window.onkeydown = (e) => this.handleKey(e);
        window.onkeyup = (e) => this.handleKey(e);
        window.onmousemove = (e) => this.handleMouse(e);

        // prevent right click
        window.addEventListener("contextmenu", e => e.preventDefault());

        // make current keys pressed stop if user navigates out of tab
        document.addEventListener("visibilitychange", () => {
            if (document.visibilityState === "hidden") {
                for (let key in this.input) {
                    this.input[key] = false;
                }
            }
        });
    }
    updateChat() {
        if (document.activeElement === chatInput) {
            if (this.chatOpen === false) {
                chatDiv.classList.remove('hidden');
                chatInput.focus();
            }
            this.chatOpen = true;
            chatInput.style.opacity = "1";
        } else {
            if (this.chatOpen === true) {
                // chatDiv.classList.add('hidden');
                chatInput.blur();
            }
            this.chatOpen = false;
            chatInput.style.opacity = "0";
        }
    }
    handleKey(e) {
        if (e.code === undefined) {
            return;
        }

        //console.log(e.code, e.key);
        // make sure the user hasn't selected / deselected the chat between inputs
        this.updateChat();

        // handling enter inputs
        if (window.state !== 'game') {
            this.chatOpen = false;
        } else if (e.code === 'Enter' && window.isEditor !== true) {
            if (this.chatOpen === true && e.type === 'keydown') {
                // send chat message
                const text = chatInput.value.trim();
                // if(text[0] === '/'){
                //     for(let key in chatCommandMap){
                //         if(text.startsWith(key) === true){
                //             chatCommandMap[key](this, { client: this.client });
                //             this.chatOpen = false;
                //             chatInput.value = '';
                //             chatInput.blur();
                if (text.length !== 0) {
                    if (text == '/clear') {
                        for (let i = 0; i < chatDiv.children[1].children.length; i++) {
                            chatDiv.children[1].children.item(0).remove()
                        }
                        chatDiv.children[1].children.item(0).remove()
                    } else {
                        send(['c', text]);
                    }
                }

                this.chatOpen = false;
                chatInput.value = '';
                chatInput.blur();

                chatInput.style.opacity = "0";

                // reset inputs to prevent ghosting
                // for(let key in this.input){
                // }
            } else if (e.type === 'keydown') {
                // focus chat
                this.chatOpen = true;
                chatDiv.classList.remove('hidden');
                chatInput.focus();

                chatInput.style.opacity = "1";

                if (!arrayEquals(latestInput, [0, 0, 0, 0])) {
                    latestInput = [0, 0, 0, 0];
                    send(latestInput);
                }
                const me = room.flowers[window.selfId];
                if (me.attacking === true) {
                    me.attacking = false;
                    send({ attack: false });
                }
                if (me.defending === true) {
                    me.defending = false;
                    send({ defend: false });
                }
                else if (e.button == 1){
                    send(['middle', false]);
                }
            }
            return e.preventDefault();
        }

        // if we're typing, return
        // if(this.chatOpen === true)return;

        // if we're not typing and we repeat keys, return
        if (e.repeat && this.chatOpen === false) return e.preventDefault();
        if (this.chatOpen === true) return;

        if (e.code === "KeyQ" && e.type === "keydown" && document.activeElement.tagName !== 'INPUT') {
            //inventory.speedCircle.mode = 1
            if (window.state == 'game'){
                send({reduceRotateSpeed: true})
            }
            else{
                menuInventory.speedCircle.mode = 1
            }
        }
        if (e.code === "KeyE" && e.type === "keydown" && document.activeElement.tagName !== 'INPUT') {
            //inventory.speedCircle.mode = 2
            if (window.state == 'game'){
                send({increaseRotateSpeed: true})
            }
            else{
                menuInventory.speedCircle.mode = 2
            }
        }

        if ((e.code === "KeyQ" || e.code === "KeyE") && e.type === "keyup" && document.activeElement.tagName !== 'INPUT') {
            //inventory.speedCircle.mode = 0
            menuInventory.speedCircle.mode = 0
            if (window.state == 'game'){
                if (e.code === "KeyQ"){
                    send({reduceRotateSpeed: false})
                }
                else{
                    send({increaseRotateSpeed: false})
                }
            }
            else{
                send({speedCircle: menuInventory.speedCircle.reload})
                localStorage.setItem("speedCircle", menuInventory.speedCircle.reload);
            }
        }

        if (e.code === "Semicolon" && e.repeat === false && e.type === 'keydown') {
            window.toRenderDebug = !window.toRenderDebug;
            window.fps = 0;
            window.framesRendered = 0;
            window.lastFramesRenderedResetTime = performance.now();
        }

        // swapping petals
        if (e.code.startsWith("Digit") === true && e.repeat === false && e.type === 'keydown' && document.activeElement.tagName !== 'INPUT') {
            const petalIndex = e.code === "Digit0" ? 9 : e.code[5] - 1;
            if (petalIndex === undefined) return;
            if (window.state === 'menu') {
                menuInventory.swapPetals(petalIndex);
            } else {
                inventory.swapPetals(petalIndex);
            }
        }
        else if (e.code === "KeyR" && e.repeat === false && e.type === 'keydown' && document.activeElement.tagName !== 'INPUT') {
            for (let i = 0; i < 10; i++) {
                inventory.swapPetals(i);
            }
        }
        // else if (e.key === "f" && e.repeat === false && e.type === 'keydown' && document.activeElement.tagName !== 'INPUT'){
        // }

        // otherwise, set inputs in this.inputs as they're mapped by keyCodes
        const me = room.flowers[window.selfId];
        if (window.connected === true && me !== undefined) {
            if (!mouseMovement) {
                /*
                const me = room.flowers[window.selfId];
                if(me !== undefined){
                    me.input[keyCodes[e.code]] = e.type === 'keydown';
                }
                */
                if (keyCodes[e.code]) {
                    // let type = e.type === 'keydown';
                    //sendGame({key: keyCodes[e.code], type})
                    if (latestInput.length != 4) {
                        latestInput = [0, 0, 0, 0];
                    }
                    if (e.type === 'keydown') {
                        latestInput[directionToIdMap[keyCodes[e.code]]] = 1;
                    }
                    else {
                        latestInput[directionToIdMap[keyCodes[e.code]]] = 0;
                    }

                   

                    if (!arrayEquals(latestInput, previousInput)) {
                        send(latestInput);
                        previousInput = window.structuredClone(latestInput);
                       
                    }


                    me.input[keyCodes[e.code]] = e.type === 'keydown'

                    let velX = 0;
                    let velY = 0;
                    if (me.input["up"]) {
                        velY -= 1;
                    }
                    if (me.input["down"]) {
                        velY += 1;
                    }
                    if (me.input["left"]) {
                        velX -= 1;
                    }
                    if (me.input["right"]) {
                        velX += 1;
                    }
                    let angle = Math.atan2(velY, velX);
                    if (velY != 0 || velX != 0) {
                        me.angle = angle;
                        me.magnitude = 9999;
                    }
                }
            }
            if (e.key == " ") {
                send({ attack: e.type === 'keydown' });
                room.flowers[window.selfId].attacking = e.type === 'keydown';
            }
            if (e.key == "Shift") {
                send({ defend: e.type === 'keydown' });
                room.flowers[window.selfId].defending = e.type === 'keydown';
            }
            if (e.key == "f") {
                send({ middle: e.type === 'keydown' });
                room.flowers[window.selfId].middleState = e.type === 'keydown';
            }
            if (e.code === "KeyG" && e.type === 'keydown' && !e.repeat) {
                // 激活神器大技能
                if (inventory && inventory.artifactContainer) {
                    const artifactType = inventory.artifactContainer.type;
                    if (artifactType) {
                        send({ activateArtifactUltimate: { artifactType } });
                    }
                }
            }

            // Mob 技能快捷键 (1-5)
            if (window.state === 'game' && me && me.isMob) {
                const skillKeyMap = {
                    'Digit1': 0,
                    'Digit2': 1,
                    'Digit3': 2,
                    'Digit4': 3,
                    'Digit5': 4
                };

                if (skillKeyMap[e.code] !== undefined && e.type === 'keydown') {
                    const skillIndex = skillKeyMap[e.code];
                    if (me.skills && me.skills[skillIndex]) {
                        const skill = me.skills[skillIndex];
                        send({ mobSkill: skill.id });
                    }
                }
            }

            if (e.key == "[" && e.type === 'keydown') {
                fov = 1;
            }
            if (e.code == "Equal" && e.type === 'keydown') {
                fov *= (1 + 1 / 5);
                if (fov < 0.2) {
                    fov = 0.2;
                }
                if (fov > 3) {
                    fov = 3;
                }

            }
            if (e.code == "Minus" && e.type === 'keydown') {
                fov *= (1 - 1 / 5);
                if (fov < 0.2) {
                    fov = 0.2;
                }
                if (fov > 3) {
                    fov = 3;
                }

            }
        }
        if (window.state === 'menu' && e.type === 'keydown' && document.activeElement.tagName !== 'INPUT') {
            if (e.key.toLowerCase() === 'x') {
                globalInventory.toggleMenu();
            } else if (e.key.toLowerCase() === 'c') {
                craftingMenu.toggleMenu();
            } else if (e.key.toLowerCase() === 'v') {
                mobGallery.toggleMenu();
            } else if (e.key.toLowerCase() === 'b') {
                shop.toggle();
            } else if (e.key.toLowerCase() === 'z') {
                specialGlobalInventory.toggleMenu();
            }
        }
    }
    sendInitialInput() {
        if (mouseMovement) {
            const dX = mouse.x - window.innerWidth / 2;
            const dY = mouse.y - window.innerHeight / 2;
            let magnitude = Math.sqrt(dY ** 2 + dX ** 2);
            // if (magnitude >= 220) {
            // } else {
            if (magnitude < 220){
                magnitude = ((magnitude / 220) ** 0.9) * 220;
            }

            if (latestInput.length != 2) {
                latestInput = [0, 0];
            }
            const angle = Math.atan2(dY, dX);
            latestInput[0] = Math.round(angle * 1000) / 1000;
            latestInput[1] = Math.round(magnitude * 10) / 10;

            // removing 220 from the array if its not needed
            // if (latestInput[1] === 220) latestInput.length = 1;

            send(latestInput);
        }
    }
    handleMouse(e) {
        const dX = e.x - window.innerWidth / 2;
        const dY = e.y - window.innerHeight / 2;
        const me = room.flowers[window.selfId];
        if (window.connected === true && me !== undefined && mouseMovement) {
            if (window.mobile) {
                mobileControls.handleMouseMove(e);

            } else {
                let magnitude = Math.sqrt(dY ** 2 + dX ** 2);
                if (magnitude >= 220) {
                    magnitude = 220;
                } else {
                    magnitude = ((magnitude / 220) ** 0.9) * 220;
                }
                // 检查是否处于 Mob 技能控制中（如旋转圈技能），如果是则不更新角度
                if (!me.inSkillControl) {
                    me.angle = Math.atan2(dY, dX);
                }
                me.magnitude = magnitude;

                if (latestInput.length != 2) {
                    latestInput = [0, 0];
                }
                latestInput[0] = Math.round(me.angle * 1000) / 1000;
                latestInput[1] = Math.round(magnitude * 10) / 10;

                // removing 220 from the array if its not needed
                if (latestInput[1] === 220) latestInput.length = 1;

               

                if (!arrayEquals(latestInput, previousInput)) {
                    if((time - lastSentInput) > minimumInputTime){
                        send(latestInput);
                        previousInput = window.structuredClone(latestInput);
                        lastSentInput = time;
                    }else{
                       
                        let currentLastSent = lastSentInput;
                        let currentInput = latestInput;
                        setTimeout(()=>{
                            
                            if(currentLastSent != lastSentInput) return;
                           
                            send(currentInput);
                            previousInput = window.structuredClone(currentInput);
                            lastSentInput = time;
                        }, minimumInputTime - (time - lastSentInput));
                    }
                    
                }
            }

        }

        // const me = room.flowers[window.selfId];
        // if(me !== undefined){
        //     me.angle = Math.atan2(dY, dX);
        //     me.magnitude = Math.min(220, Math.sqrt(dY**2 + dX**2));
        //     if(me.magnitude < 220){

        // for menu
        mouse.x = e.pageX;
        mouse.y = e.pageY;
        mouse.canvasX = mouse.x / window.innerWidth * canvas.w;
        mouse.canvasY = mouse.y / window.innerHeight * canvas.h;

        if (typeof draggingPetalContainer !== 'undefined') {
            if (draggingPetalContainer !== null) {
                simulatedraggingPetalContainer(mouse.canvasX, mouse.canvasY);
            }
        }

        if (window.state === "menu") {
            const mouseX = mouse.canvasX;
            const mouseY = mouse.canvasY;
            biomeManager.mouseMove({ mouseX, mouseY }, e);

            // 移动端兼容：触摸事件 button 可能为 undefined，视为 0 处理
            const button = e.button === undefined ? 0 : e.button;
            if (typeof squadUI !== 'undefined' && squadUI.hoveringOverSlider === true && button === 0 && squadUI.draggingSlider === true) {
                squadUI.updateSliderDrag(mouse.canvasX);
            }

            settingsMenu.mouseMove({ x: mouseX, y: mouseY });
        }

        if (typeof globalInventory !== 'undefined') {
            globalInventory.mouseMove({ mouseX: mouse.canvasX, mouseY: mouse.canvasY })
            craftingMenu.mouseMove({ mouseX: mouse.canvasX, mouseY: mouse.canvasY });
            mobGallery.mouseMove({ x: mouse.canvasX, y: mouse.canvasY });
            specialGlobalInventory.mouseMove();
        }
    }
}


class MobileControls {
    constructor() {
        this.joystickpad = {
            x: canvas.w * 1 / 10,
            y: canvas.h - canvas.w * 1 / 10,
            r: canvas.w / 15
        }
        this.joystick = {
            r: canvas.w / 40,
            magnitude: 0,
            angle: 0,
        }
        this.currentlyHolding = false;
        this.attacking = false;
        this.defending = false;

        // 动态摇杆相关
        this.dynamicJoystickActive = false;
        this.dynamicJoystickCenter = { x: 0, y: 0 };
        this.dynamicJoystickpad = {
            x: 0,
            y: 0,
            r: canvas.w / 15
        };

    }

    draw() {
        const me = room.flowers[window.selfId];
        if (!(window.mobile && me !== undefined && window.connected === true)) return;

        // 根据设置选择使用固定摇杆还是动态摇杆
        const useDynamicJoystick = window.dynamicJoystick ?? false;

        this.joystickpad = {
            x: canvas.w * 1 / 10,
            y: canvas.h - canvas.w * 1 / 10,
            r: canvas.w / 15
        }
        this.joystick.r = canvas.w / 40;

        // 绘制摇杆
        let joystickPadX, joystickPadY;

        if (useDynamicJoystick && this.dynamicJoystickActive) {
            // 动态摇杆模式：在触摸位置显示摇杆
            joystickPadX = this.dynamicJoystickpad.x;
            joystickPadY = this.dynamicJoystickpad.y;
        } else if (!useDynamicJoystick) {
            // 固定摇杆模式：在左下角显示
            joystickPadX = this.joystickpad.x;
            joystickPadY = this.joystickpad.y;
        } else {
            // 动态摇杆模式但未激活，不显示摇杆
            joystickPadX = null;
            joystickPadY = null;
        }

        if (joystickPadX !== null) {
            ctx.globalAlpha = 0.2;
            ctx.fillStyle = "#000000";
            ctx.beginPath();
            ctx.arc(joystickPadX, joystickPadY, this.joystickpad.r, 0, 2 * Math.PI);
            ctx.fill();
            ctx.globalAlpha = 1;

            this.joystick.dx = Math.cos(this.joystick.angle) * this.joystick.magnitude;
            this.joystick.dy = Math.sin(this.joystick.angle) * this.joystick.magnitude;
            ctx.globalAlpha = 0.5;
            ctx.fillStyle = "#000000";
            ctx.beginPath();
            ctx.arc(joystickPadX + this.joystick.dx, joystickPadY + this.joystick.dy, this.joystick.r, 0, 2 * Math.PI);
            ctx.fill();
            ctx.globalAlpha = 1;
        }

        //draw Attack/ Defend

        this.attackButton = {
            x: canvas.w * 8.4 / 10,
            y: canvas.h - canvas.w * 1.4 / 10,
            r: canvas.w / 20
        }
        this.defendButton = {
            x: canvas.w * 9.3 / 10,
            y: canvas.h - canvas.w * 0.5 / 10,
            r: canvas.w / 25
        }

        ctx.globalAlpha = 0.4;
        ctx.fillStyle = "#000000";
        ctx.beginPath();
        ctx.arc(this.attackButton.x, this.attackButton.y, this.attackButton.r, 0, 2 * Math.PI);
        ctx.fill();
        ctx.globalAlpha = 1;

        ctx.globalAlpha = 0.4;
        ctx.fillStyle = "#000000";
        ctx.beginPath();
        ctx.arc(this.defendButton.x, this.defendButton.y, this.defendButton.r, 0, 2 * Math.PI);
        ctx.fill();
        ctx.globalAlpha = 1;

        //draw + / - for fov
        this.plusButton = {
            x: canvas.w * 8.6 / 10,
            y: canvas.h - canvas.w * 0.5 / 10,
            r: canvas.w / 70
        }
        this.minusButton = {
            x: canvas.w * 8.2 / 10,
            y: canvas.h - canvas.w * 0.5 / 10,
            r: canvas.w / 70
        }

        ctx.globalAlpha = 0.4;
        ctx.strokeStyle = "#000000";
        ctx.beginPath();
        ctx.moveTo(this.plusButton.x - this.plusButton.r, this.plusButton.y);
        ctx.lineTo(this.plusButton.x + this.plusButton.r, this.plusButton.y)
        ctx.moveTo(this.plusButton.x, this.plusButton.y - this.plusButton.r);
        ctx.lineTo(this.plusButton.x, this.plusButton.y + this.plusButton.r)
        ctx.lineWidth = 15;
        ctx.stroke();
        ctx.globalAlpha = 1;

        ctx.globalAlpha = 0.4;
        ctx.strokeStyle = "#000000";
        ctx.beginPath();
        ctx.moveTo(this.minusButton.x - this.minusButton.r, this.minusButton.y);
        ctx.lineTo(this.minusButton.x + this.minusButton.r, this.minusButton.y)
        ctx.lineWidth = 15;
        ctx.stroke();
        ctx.globalAlpha = 1;


        //draw button to swap
        this.swapButton = {
            x: canvas.w * 9.3 / 10,
            y: canvas.h - canvas.w * 1.3 / 10,
            r: canvas.w / 40
        }

        ctx.globalAlpha = 0.4;
        ctx.fillStyle = "#000000";
        ctx.beginPath();
        ctx.arc(this.swapButton.x, this.swapButton.y, this.swapButton.r, 0, 2 * Math.PI);
        ctx.fill();
        ctx.fillStyle = "#ffffff";
        ctx.font = "600 40px Ubuntu"
        ctx.fillText("R", this.swapButton.x, this.swapButton.y)
        ctx.globalAlpha = 1;


    }
    handleMousePress(e) {
        // 优先检测神器槽点击（触发大招）
        if (window.inventory && window.inventory.artifactContainer) {
            const cX = e.x / window.innerWidth * canvas.w;
            const cY = e.y / window.innerHeight * canvas.h;
            const slot = window.inventory.artifactSlot;
            const slotY = slot.y + window.inventory.translateY;
            const slotHalf = slot.size / 2;

            if (cX > slot.x - slotHalf - 20 && cX < slot.x + slotHalf + 20 &&
                cY > slotY - slotHalf - 20 && cY < slotY + slotHalf + 20) {
                const artifactType = window.inventory.artifactContainer.type;
                send({ activateArtifactUltimate: { artifactType } });
            }
        }

        // 如果聊天输入框是打开的，点击输入框区域外时关闭它
        if (this.chatOpen && document.activeElement === chatInput) {
            const chatRect = chatInput.getBoundingClientRect();
            // 检查点击是否在输入框范围外
            if (e.x < chatRect.left || e.x > chatRect.right || e.y < chatRect.top || e.y > chatRect.bottom) {
                this.chatOpen = false;
                chatInput.value = '';
                chatInput.blur();
                chatInput.style.opacity = "0";
                return; // 关闭输入框后不处理其他点击事件
            }
        }

        //convert to canvas loc

        const cX = e.x / window.innerWidth * canvas.w;
        const cY = e.y / window.innerHeight * canvas.h;
        //console.log(cX, cY);
        //console.log(this.joystickpad);

        const useDynamicJoystick = window.dynamicJoystick ?? false;

        if (useDynamicJoystick) {
            // 动态摇杆模式：左半屏任意位置创建摇杆（排除右下角按钮区域和底部装备槽区域）
            // 底部装备槽区域：屏幕底部约 70 像素
            const bottomSlotArea = canvas.h - 70;
            const inBottomSlotArea = cY >= bottomSlotArea;

            if (cX < canvas.w / 2 || (cX >= canvas.w * 0.7 && cY >= canvas.h - canvas.w * 0.3)) {
                // 检查是否点击了右下角的按钮
                const hitButton = this.inCircleBounds(cX, cY, this.attackButton) ||
                                  this.inCircleBounds(cX, cY, this.defendButton) ||
                                  this.inCircleBounds(cX, cY, this.plusButton) ||
                                  this.inCircleBounds(cX, cY, this.minusButton) ||
                                  this.inCircleBounds(cX, cY, this.swapButton);
                if (!hitButton && cX < canvas.w / 2 && !inBottomSlotArea) {
                    this.currentlyHolding = true;
                    this.dynamicJoystickActive = true;
                    this.dynamicJoystickCenter = { x: cX, y: cY };
                    this.dynamicJoystickpad = {
                        x: cX,
                        y: cY,
                        r: canvas.w / 15
                    };
                }
            }
        } else {
            // 固定摇杆模式
            if (this.inCircleBounds(cX, cY, this.joystickpad)) {
                this.currentlyHolding = true;
            }
        }

        if (this.inCircleBounds(cX, cY, this.attackButton)) {
            send(['a', true]);
            this.attacking = true;
        }
        if (this.inCircleBounds(cX, cY, this.defendButton)) {
            send(['d', true]);
            this.defending = true;
        }
        if (this.inCircleBounds(cX, cY, this.plusButton)) {
            fov *= (1 + 1 / 5);
            if (fov < 0.2) {
                fov = 0.2;
            }
            if (fov > 3) {
                fov = 3;
            }
        }
        if (this.inCircleBounds(cX, cY, this.minusButton)) {
            fov *= (1 - 1 / 5);
            if (fov < 0.2) {
                fov = 0.2;
            }
            if (fov > 3) {
                fov = 3;
            }
        }

        if (this.inCircleBounds(cX, cY, this.swapButton)) {
            for (let i = 0; i < 10; i++) {
                inventory.swapPetals(i);
            }
        }

        // 检测全屏按钮点击
        const fullscreenButton = { x: 65, y: 10, w: 35, h: 35 };
        if (cX > fullscreenButton.x && cX < fullscreenButton.x + fullscreenButton.w &&
            cY > fullscreenButton.y && cY < fullscreenButton.y + fullscreenButton.h) {
            if (!window.lastFullscreenTime || performance.now() - window.lastFullscreenTime > 300) {
                window.lastFullscreenTime = performance.now();
                if (!document.fullscreenElement) {
                    document.documentElement.requestFullscreen().catch(err => {
                        console.log(`全屏错误: ${err.message}`);
                    });
                } else {
                    document.exitFullscreen();
                }
            }
        }
    }
    handleMouseMove(e) {
        //convert to canvas loc
        if (this.currentlyHolding === false) return;
        const cX = e.x / window.innerWidth * canvas.w;
        const cY = e.y / window.innerHeight * canvas.h;
        //console.log(cX, cY);
        //console.log(this.joystickpad);
        if (cX > canvas.w / 2) {
            return;
            //other side
        }

        //handle joystick position
        this.joystick = {
            r: canvas.w / 40,
            magnitude: 0,
            angle: 0,
        }

        const useDynamicJoystick = window.dynamicJoystick ?? false;
        // 根据摇杆模式选择正确的中心点和半径
        const joystickCenter = useDynamicJoystick && this.dynamicJoystickActive
            ? this.dynamicJoystickpad
            : this.joystickpad;
        const sensitiveDistance = 3 / 5 * joystickCenter.r;
        const dX = cX - joystickCenter.x;
        const dY = cY - joystickCenter.y;

        const me = room.flowers[window.selfId];

        let magnitude = Math.sqrt(dY ** 2 + dX ** 2);
        if (magnitude >= sensitiveDistance) {
            this.joystick.magnitude = sensitiveDistance;
            magnitude = 220;
        } else if (magnitude < sensitiveDistance / 5) {
            this.joystick.magnitude = 0;
            magnitude = 0;
        } else {
            this.joystick.magnitude = ((magnitude / sensitiveDistance) ** 0.9) * sensitiveDistance;
            magnitude = ((magnitude / sensitiveDistance) ** 0.9) * 220;
        }
        // 检查是否处于 Mob 技能控制中（如旋转圈技能），如果是则不更新角度
        if (!me.inSkillControl) {
            me.angle = Math.atan2(dY, dX);
        }
        this.joystick.angle = me.angle;
        me.magnitude = magnitude;

        if (latestInput.length != 2) {
            latestInput = [0, 0];
        }
        latestInput[0] = Math.round(me.angle * 1000) / 1000;
        latestInput[1] = Math.round(magnitude * 10) / 10;

       if (!arrayEquals(latestInput, previousInput)) {
            if((time - lastSentInput) > minimumInputTime){
                send(latestInput);
                previousInput = window.structuredClone(latestInput);
                lastSentInput = time;
            }else{
                let currentLastSent = lastSentInput;
                let currentInput = latestInput;
                setTimeout(()=>{
                    if(currentLastSent != lastSentInput) return;
                    send(currentInput);
                    previousInput = window.structuredClone(currentInput);
                    lastSentInput = time;
                }, minimumInputTime - (time - lastSentInput));
            }
            
        }


    }
    releaseControls(e) {
        const cX = e.x / window.innerWidth * canvas.w;
        const cY = e.y / window.innerHeight * canvas.h;

        //on JOYSTICK SIDE
        if (cX < canvas.w / 2) {
            this.currentlyHolding = false;
            if (latestInput.length != 2) {
                latestInput = [0, 0];
            }
            latestInput[0] = 0;
            latestInput[1] = 0;
            this.joystick.angle = 0;
            this.joystick.magnitude = 0;
            if (!arrayEquals(latestInput, previousInput)) {
                if((time - lastSentInput) > minimumInputTime){
                    send(latestInput);
                    previousInput = window.structuredClone(latestInput);
                    lastSentInput = time;
                }else{
                    let currentLastSent = lastSentInput;
                    let currentInput = latestInput;
                    setTimeout(()=>{
                        if(currentLastSent != lastSentInput) return;
                        send(currentInput);
                        previousInput = window.structuredClone(currentInput);
                        lastSentInput = time;
                    }, minimumInputTime - (time - lastSentInput));
                }
                
            }
        }


        //on ATTACK/DEFEND SIDE
        if (cX > canvas.w / 2) {
            if (this.attacking) {
                send(['a', false]);
                this.attacking = false;
            }
            if (this.defending) {
                send(['d', false]);
                this.defending = false;
            }
        }

    }
    inCircleBounds(x, y, obj) {
        return x < obj.x + obj.r && x > obj.x - obj.r && y < obj.y + obj.r && y > obj.y - obj.r;
    }
}