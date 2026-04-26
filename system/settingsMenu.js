class SettingsMenu {
    constructor(){
        this.options = [
            {
                type: 'toggle',
                name: 'Mouse Movement',
                state: mouseMovement,
                changeTime: 0,
                toggleFn: (state) => {
                    mouseMovement = state;
                    localStorage.setItem('mouseMovement', state);
                },
                screenPosition: {x: 0, y: 0, w: 0, h: 0}
            },
            {
                type: 'toggle',
                name: 'Reduce Damage Flash',
                state: damageFlash,
                changeTime: 0,
                toggleFn: (state) => {
                    damageFlash = state;
                    localStorage.setItem('damageFlash', state);
                },
                screenPosition: {x: 0, y: 0, w: 0, h: 0}
            },
            /*
            {
                type: 'toggle',
                name: 'Low Detail',
                state: window.lowDetail,
                changeTime: 0,
                toggleFn: (state) => {
                    window.lowDetail = state;

                    localStorage.setItem('lowDetail', state);
                },
                screenPosition: {x: 0, y: 0, w: 0, h: 0}
            },
            */
            {
                type: 'toggle',
                name: 'Stat Boxes',
                state: window.statBoxes,
                changeTime: 0,
                toggleFn: (state) => {
                    window.statBoxes = state;
                    localStorage.setItem('statboxes', state);
                },
                screenPosition: {x: 0, y: 0, w: 0, h: 0}
            },
            {
                type: 'toggle',
                name: 'Show damage numbers',
                state: window.damageCounter,
                changeTime: 0,
                toggleFn: (state) => {
                    window.damageCounter = state;
                    localStorage.setItem('damageCounter', state);
                },
                screenPosition: {x: 0, y: 0, w: 0, h: 0}
            },
            {
                type: 'toggle',
                name: 'Crafting petal rain',
                state: window.petalRain,
                changeTime: 0,
                toggleFn: (state) => {
                    window.petalRain = state;
                    localStorage.setItem('petalRain', state);
                },
                screenPosition: {x: 0, y: 0, w: 0, h: 0}
            },
            // {
            //     name: 'Render Usernames',
            //     state: window.usernames,
            //     changeTime: 0,
            //     toggleFn: (state) => {
            //         window.usernames = state;
            //     },
            // },
            {
                type: 'toggle',
                name: 'Show Announcements',
                state: window.announcements,
                changeTime: 0,
                toggleFn: (state) => {
                    window.announcements = state;
                    localStorage.setItem('announcements', state);
                },
                screenPosition: {x: 0, y: 0, w: 0, h: 0}
            },
            {
                type: 'toggle',
                name: 'High Quality Renders',
                state: window.hqp,
                changeTime: 0,
                toggleFn: (state) => {
                    window.hqp = state;
                    localStorage.setItem('hqp', state);
                },
                screenPosition: {x: 0, y: 0, w: 0, h: 0}
            },
            {
                type: 'toggle',
                name: 'Disable Grid',
                state: window.noGrid,
                changeTime: 0,
                toggleFn: (state) => {
                    window.noGrid = state;
                    localStorage.setItem('noGrid', state);
                },
                screenPosition: {x: 0, y: 0, w: 0, h: 0}
            },
            {
                type: 'toggle',
                name: 'Weather Effects',
                state: window.showWeatherEffects,
                changeTime: 0,
                toggleFn: (state) => {
                    window.showWeatherEffects = state;
                    localStorage.setItem('showWeatherEffects', state);
                },
                screenPosition: {x: 0, y: 0, w: 0, h: 0}
            },
            {
                type: 'toggle',
                name: 'Render Debug',
                state: window.toRenderDebug,
                changeTime: 0,
                toggleFn: (state) => {
                    window.toRenderDebug = state;
                    localStorage.setItem('toRenderDebug', state);
                },
                screenPosition: {x: 0, y: 0, w: 0, h: 0}
            },
            {
                type: 'toggle',
                name: 'Dynamic Joystick',
                state: window.dynamicJoystick ?? false,
                changeTime: 0,
                toggleFn: (state) => {
                    window.dynamicJoystick = state;
                    localStorage.setItem('dynamicJoystick', state);
                },
                screenPosition: {x: 0, y: 0, w: 0, h: 0}
            },
            {
                type: 'button',
                name: 'Redeem Code',
                changeTime: 0,
                clickFn: () => {
                    const response = prompt("Enter Code To Redeem!");
                    if(response === null || response.length === 0) return;
                    send({redeemCode: response});
                },
                hovered: false,
                screenPosition: {x: 0, y: 0, w: 0, h: 0}
            },
            {
                type: 'button',
                name: 'Account Info',
                changeTime: 0,
                clickFn: () => {
                    // 显示账号信息模态框
                    showAccountInfoModal();
                },
                hovered: false,
                screenPosition: {x: 0, y: 0, w: 0, h: 0}
            },
            {
                type: 'button',
                name: 'Logout',
                changeTime: 0,
                clickFn: () => {
                    // localStorage.clear();
                    localStorage.removeItem('username');
                    localStorage.removeItem('hashedPassword');
                    window.location.reload();
                },
                hovered: false,
                screenPosition: {x: 0, y: 0, w: 0, h: 0}
            },
            {
                type: 'button',
                name: 'Change Password',
                changeTime: 0,
                clickFn: () => {
                    let newPassword = prompt("Enter your new password");
                    if(newPassword === null || newPassword.length === 0) return;
                    let newPassword2 = prompt("Re-enter your new password");
                    if(newPassword2 === null || newPassword2.length === 0) return;
                    if (newPassword != newPassword2){
                        alert("The passwords you entered do not match!")
                        return;
                    }
                    hashedPassword = SHA(newPassword + 'Zert Is Gay');
                    hashedPassword2 = SHA(newPassword + 'flowrsalt12345');

                    send({changePassword: true, username, hashedPassword, hashedPassword2});
                },
                hovered: false,
                screenPosition: {x: 0, y: 0, w: 0, h: 0}
            },
            {
                type: 'button',
                name: `flowr.fun`,
                changeTime: 0,
                fontSize: 14,
                clickFn: () => {
                    location.replace('https://flowr.fun');
                },
                hovered: false,
                screenPosition: {x: 0, y: 0, w: 0, h: 0}
            },
        ];

        this.x = 110;
        this.y = 20;
        this.w = 256;
        this.h = 50 * this.options.length + 7;

        this.offset = -this.h - 40;
        this.targetOffset = -this.h - 40;
        this.active = false;
    }
    toggle(){
        this.active = !this.active;
        if(this.active){
            // open
            this.targetOffset = 0;
            // 关闭商店（直接设置状态，避免循环调用）
            if(shop.menu.active === true) shop.menu.active = false;
        } else {
            // close
            this.targetOffset = -this.h - 40;
        }
    }
    draw(){
        ctx.textBaseline = 'middle';
        ctx.fontKerning = "none";
        ctx.letterSpacing = "-.1px";
        this.offset = interpolate(this.offset, this.targetOffset, 0.3);

        this.currentHeight = 5;

        ctx.translate(this.x, this.y + this.offset);

        ctx.fillStyle = '#aaaaaa';
        ctx.strokeStyle = '#8a8a8a';
        ctx.lineWidth = 8;

        ctx.beginPath();
        ctx.roundRect(0, 0, this.w, this.h, 3);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        for(let i = 0; i < this.options.length; i++){
            this.renderOption(this.options[i]);
        }

        ctx.translate(-this.x, -this.y - this.offset);
    }
    renderOption(option){
        if(option.type === 'toggle'){
            this.renderToggle(option);
        } else if(option.type === 'button'){
            this.renderButton(option);
        }
    }
    renderToggle(t){
        // toggle height is 60, half of the height is 30

        ctx.strokeStyle = '#333333';

        const uncheckedColor = '#666666';
        const checkedColor = '#dddddd'
        if(time - t.changeTime < 100){
            const ratio = (time - t.changeTime) / 100;
            if(t.state){
                ctx.fillStyle = blendColor(uncheckedColor, checkedColor, ratio)
            } else {
                ctx.fillStyle = blendColor(checkedColor, uncheckedColor, ratio)
            }
        } else {
            ctx.fillStyle = t.state ? checkedColor : uncheckedColor;
        }
        

        t.screenPosition = {
            x: 15 + this.x,
            y: this.currentHeight + 50 / 2 - 28 / 2 + this.y,
            w: 28,
            h: 28
        }

        ctx.lineWidth = 4.5;
        ctx.beginPath();
        ctx.rect(t.screenPosition.x - this.x, t.screenPosition.y - this.y, t.screenPosition.w, t.screenPosition.h);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        ctx.font = `900 17px 'Ubuntu'`;
        ctx.textAlign = "left";
        ctx.textBaseline = "middle";

        ctx.fillStyle = 'white';
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2;
        ctx.strokeText(t.name, 15 + 28 + 13, this.currentHeight + 50 / 2);
        ctx.fillText(t.name, 15 + 28 + 13, this.currentHeight + 50 / 2);

        this.currentHeight += 50;
    }
    renderButton(b){
        // toggle height is 60, half of the height is 30

        ctx.strokeStyle = '#8a8a8a';
        ctx.fillStyle = '#b2b2b2';

        b.screenPosition = {
            x: 18 + this.x,
            y: this.currentHeight + 50 / 2 - 28 / 2 + this.y,
            w: this.w - 18 * 2,
            h: 36
        }

        ctx.lineWidth = 4.5;
        ctx.beginPath();
        ctx.roundRect(b.screenPosition.x - this.x, b.screenPosition.y - this.y, b.screenPosition.w, b.screenPosition.h, 8);
        if(b.hovered === true) {ctx.fill(); setCursor('pointer');}
        ctx.stroke();
        ctx.closePath();

        ctx.font = `900 ${b.fontSize ?? 17.6}px 'Ubuntu'`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        ctx.fillStyle = 'white';
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2;
        ctx.strokeText(b.name, this.w / 2, this.currentHeight + 58 / 2);
        ctx.fillText(b.name, this.w / 2, this.currentHeight + 58 / 2);

        this.currentHeight += 48;
    }
    mouseDown(e){
        if(!this.active) return;
        for(let i = 0; i < this.options.length; i++){
            const option = this.options[i];
            if(option.type === 'toggle'){
                this.processToggle(option, e);
            } else if(option.type === 'button'){
                this.processButton(option, e, 'down');
            }
        }
    }
    mouseMove(e){
        if(!this.active) return;
        for(let i = 0; i < this.options.length; i++){
            const option = this.options[i];
            if(option.type === 'button'){
                this.processButton(option, e, 'move');
            }
        }
    }
    processToggle(t, e){
        const {x,y} = e;
        const tx = t.screenPosition.x;
        const ty = t.screenPosition.y;
        const w = t.screenPosition.w;
        const h = t.screenPosition.h;
        if(x > tx && y > ty && x < tx + w && y < ty + h){
            t.state = !t.state;
            t.changeTime = time;
            t.toggleFn(t.state);
        }
    }
    processButton(b, e, eventType){
        if(eventType === 'move'){
            b.hovered = false;
        }

        const {x,y} = e;
        const tx = b.screenPosition.x;
        const ty = b.screenPosition.y;
        const w = b.screenPosition.w;
        const h = b.screenPosition.h;
        if(x > tx && y > ty && x < tx + w && y < ty + h){
            if(eventType === 'move'){
                b.hovered = true;
            } else {
                b.clickFn();
            }
        }
        
    }
}

const settingsMenu = new SettingsMenu();