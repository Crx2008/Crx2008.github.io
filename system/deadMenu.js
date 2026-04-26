// this is what pops up when you die. Will have a continue button, petals collected, etc.
class DeadMenu {
    constructor(){
        this.gameEnded = false;
        this.gameEndedFadeTimer = 0;
        this.acceptedDeath = false;
        this.hoveringOverButton = false;
        this.hoveringOverRematchButton = false;
        this.rematchRequested = false;
    }
    drawDeadFlower(x, y, radius){
        ctx.fillStyle = '#ffe763';
        ctx.strokeStyle = '#cebb50';

        // we shouldn't do interpolation like this btw because it doesnt match natural behavior. TODO make linear interpolation sys between last recieved state and this one
        // this.x = interpolate(this.x, this.x, 0.1);
        // this.y = interpolate(this.y, this.y, 0.1);

        // this.renderAngle = interpolateDirection(this.renderAngle, this.angle, 1/3);
        // this.hp = interpolate(this.hp, this.hp, 0.1);

        // HEAD - use HEADX instead of X
        ctx.lineWidth = radius/8;
        
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI*2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        // dead eyes
        ctx.fillStyle = '#212219';
        ctx.strokeStyle = ctx.fillStyle;
        ctx.lineWidth = radius/8;
        ctx.lineCap = 'round';
        
        let eyecenter = {x: x - radius/3.5, y:y - radius*5/23.5};
        
        ctx.beginPath();
        ctx.moveTo(eyecenter.x + radius*4/23.5, eyecenter.y + radius*4/23.5);
        ctx.lineTo(eyecenter.x - radius*4/23.5, eyecenter.y - radius*4/23.5);
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(eyecenter.x + radius*4/23.5, eyecenter.y - radius*4/23.5);
        ctx.lineTo(eyecenter.x - radius*4/23.5, eyecenter.y + radius*4/23.5);
        ctx.stroke();
        ctx.closePath();

        eyecenter = {x: x + radius/3.5, y:y - radius*5/23.5};
        
        ctx.beginPath();
        ctx.moveTo(eyecenter.x + radius*4/23.5, eyecenter.y + radius*4/23.5);
        ctx.lineTo(eyecenter.x - radius*4/23.5, eyecenter.y - radius*4/23.5);
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(eyecenter.x + radius*4/23.5, eyecenter.y - radius*4/23.5);
        ctx.lineTo(eyecenter.x - radius*4/23.5, eyecenter.y + radius*4/23.5);
        ctx.stroke();
        ctx.closePath();

        
        //ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle)

        // mouth
        ctx.strokeStyle = ctx.fillStyle;
        ctx.lineWidth = radius/15;
        ctx.lineCap = 'round';

        let expressionOffset = 1;// 0 to 1
        
        
        ctx.beginPath();
        ctx.moveTo(x + radius/4, y + radius*9.5/23.5);
        ctx.quadraticCurveTo(x, y + 1.07*radius*(5.5+9.5*(1-expressionOffset))/23.5*61.1/70, x - radius/4, y + radius*9.5/23.5);
        ctx.stroke();

        
        

        
    }
    
    draw(){
        ctx.globalAlpha = 0.2;
        ctx.fillStyle = 'black';
        ctx.fillRect(0,0,canvas.w,canvas.h);
        ctx.globalAlpha = 1;

        if(this.gameEnded === true){
            ctx.globalAlpha = 1 - Math.min(1, this.gameEndedFadeTimer / 30);
        } else {
            ctx.globalAlpha = 1;
        }

        ctx.translate(0, -26);
        
        if(this.acceptedDeath == true){
            this.drawWaiting();
        }else{
            this.drawDead();
        }
        
        if(this.gameEnded === true){
            this.gameEndedFadeTimer++;
            ctx.globalAlpha = Math.min(1, this.gameEndedFadeTimer / 30);
            this.drawGameOver();
        }   
        
        ctx.translate(0, 26);

        collectedMenu.draw();

        ctx.textBaseline = "middle";
    }

    drawDead(){
        //back 3 petals
        ctx.save();
        
        ctx.translate(canvas.w / 2,canvas.h / 2);
        this.drawDeadPetal(-15,-20,inventory.topPetalContainers[3]);
        this.drawDeadPetal(40,-10,inventory.topPetalContainers[4]);
        this.drawDeadPetal(-50,10,inventory.topPetalContainers[2]);
        ctx.restore();
        //flower
        const flowerRotationAngle = -0.2;

        ctx.save();
        ctx.translate(canvas.w / 2,canvas.h / 2);
        ctx.rotate(flowerRotationAngle);
        this.drawDeadFlower(0,0, 35);


        ctx.restore();

        //petals
        ctx.save();
        ctx.translate(canvas.w / 2,canvas.h / 2);
        this.drawDeadPetal(-15,45,inventory.topPetalContainers[1]);
        this.drawDeadPetal(50,30,inventory.topPetalContainers[0]);
        
        ctx.restore();

        //text & buttons
        let mobDiedTo = window.lastHitBy || "A Skill Issue"
        ctx.save();

        ctx.letterSpacing = "0.5px";
        ctx.fillStyle = '#f0f0f0';
        ctx.strokeStyle = 'black';
        ctx.font = `900 16px 'Ubuntu'`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.lineWidth = 3;
        ctx.strokeText("You were destroyed by:", canvas.w/2, canvas.h/2 - 120);
        ctx.fillText("You were destroyed by:", canvas.w/2, canvas.h/2 - 120);

        ctx.font = `900 22px 'Ubuntu'`;
        ctx.strokeText(mobDiedTo, canvas.w/2, canvas.h/2 - 85);
        ctx.fillText(mobDiedTo, canvas.w/2, canvas.h/2 - 85);
        
        ctx.restore();
        
        this.buttonDimensions = {
            x: canvas.w / 2 - 34.2266 * 4 / 2,
            y: canvas.h / 2 + 19.5 * 4,
            w: 34.2266 * 4,
            h: 40
        }

        const mouseX = mouse.canvasX;
        const mouseY = mouse.canvasY;
        if(this.gameEnded === false && this.acceptedDeath == false && mouseX > this.buttonDimensions.x && mouseX < this.buttonDimensions.x + this.buttonDimensions.w && mouseY > this.buttonDimensions.y - 26 && mouseY < this.buttonDimensions.y + this.buttonDimensions.h - 26){
            this.hoveringOverButton = true;
            this.hoveringOverRematchButton = false;
            setCursor("pointer");
            // canvas.style.cursor = "pointer";
        } else if(this.gameEnded === false && (!window.inMainPvpRoom || window.deadMenuTime >= 5000) && this.acceptedDeath == false && mouseX > this.buttonDimensions.x && mouseX < this.buttonDimensions.x + this.buttonDimensions.w && mouseY > this.buttonDimensions.y + this.buttonDimensions.h*1.28 - 26 && mouseY < this.buttonDimensions.y + this.buttonDimensions.h*1.28 + this.buttonDimensions.h - 26){
            this.hoveringOverRematchButton = true;
            this.hoveringOverButton = false;
            setCursor("pointer");
        } else {
            this.hoveringOverButton = false;
            this.hoveringOverRematchButton = false;
        }

        // button outline
        ctx.globalAlpha = 1;
        ctx.fillStyle = this.hoveringOverButton ? '#1cd128' : "#10c21a";//"#1dd129";
        ctx.lineWidth = 6;
        ctx.strokeStyle = blendColor(ctx.fillStyle, "#000000", 0.2);
        ctx.beginPath();
        ctx.roundRect(this.buttonDimensions.x, this.buttonDimensions.y, this.buttonDimensions.w, this.buttonDimensions.h, 6);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        // Leave Game text
        ctx.save();

        ctx.letterSpacing = "0.5px";
        ctx.fillStyle = '#f0f0f0';
        ctx.strokeStyle = 'black';
        ctx.font = `900 22px 'Ubuntu'`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.lineWidth = 3;
        ctx.strokeText("Continue", this.buttonDimensions.x + this.buttonDimensions.w/2, this.buttonDimensions.y + this.buttonDimensions.h/2);
        ctx.fillText("Continue", this.buttonDimensions.x + this.buttonDimensions.w/2, this.buttonDimensions.y + this.buttonDimensions.h/2);

        if(biomeManager !== undefined && biomeManager.getCurrentBiome() === '1v1'){
            let cooldown = false;
            if (window.inMainPvpRoom){
                if (window.deadMenuTime < 5000){
                    cooldown = true;
                }
            }
            if (!cooldown){
                ctx.globalAlpha = 1;
                ctx.fillStyle = this.hoveringOverRematchButton ? '#1cd128' : "#10c21a";//"#1dd129";
                ctx.lineWidth = 6;
                ctx.strokeStyle = blendColor(ctx.fillStyle, "#000000", 0.2);
                ctx.beginPath();
                ctx.roundRect(this.buttonDimensions.x, this.buttonDimensions.y + this.buttonDimensions.h*1.28, this.buttonDimensions.w, this.buttonDimensions.h, 6);
                ctx.fill();
                ctx.stroke();
                ctx.closePath();
                ctx.save();
                ctx.letterSpacing = "0.5px";
                ctx.fillStyle = '#f0f0f0';
                ctx.strokeStyle = 'black';
                ctx.font = `900 22px 'Ubuntu'`;
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.lineWidth = 3;
                ctx.strokeText("Rematch", this.buttonDimensions.x + this.buttonDimensions.w/2, this.buttonDimensions.y + this.buttonDimensions.h*1.28 + this.buttonDimensions.h/2);
                ctx.fillText("Rematch", this.buttonDimensions.x + this.buttonDimensions.w/2, this.buttonDimensions.y + this.buttonDimensions.h*1.28 + this.buttonDimensions.h/2);
                ctx.restore();
                if(this.rematchRequested === true){
                    ctx.lineWidth = 2;
                    ctx.fillStyle = 'white';
                    ctx.strokeStyle = 'black';
                    ctx.font = `900 20px 'Ubuntu'`;
                    ctx.textAlign = 'left';
                    ctx.strokeText("Rematch requested...", this.buttonDimensions.x + this.buttonDimensions.w + 10, this.buttonDimensions.y + this.buttonDimensions.h*1.28 + this.buttonDimensions.h/2);
                    ctx.fillText("Rematch requested...", this.buttonDimensions.x + this.buttonDimensions.w + 10, this.buttonDimensions.y + this.buttonDimensions.h*1.28 + this.buttonDimensions.h/2);
                }
            }
            else{
                ctx.save();
                ctx.letterSpacing = "0.5px";
                ctx.fillStyle = '#f0f0f0';
                ctx.strokeStyle = 'black';
                ctx.font = `900 22px 'Ubuntu'`;
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.lineWidth = 3;
                ctx.strokeText("You may rematch in: "+Math.floor((5000 - window.deadMenuTime)/100)/10 + "s", this.buttonDimensions.x + this.buttonDimensions.w/2, this.buttonDimensions.y + this.buttonDimensions.h*1.28 + this.buttonDimensions.h/2);
                ctx.fillText("You may rematch in: "+Math.floor((5000 - window.deadMenuTime)/100)/10 + "s", this.buttonDimensions.x + this.buttonDimensions.w/2, this.buttonDimensions.y + this.buttonDimensions.h*1.28 + this.buttonDimensions.h/2);
                ctx.restore();
            }
        }
        ctx.restore();
        
        
    }

    drawWaiting(){
        this.buttonDimensions = {
            x: canvas.w / 2 - 34.2266 * 6 / 2,
            y: canvas.h / 2 + 19.5 * 4/2,
            w: 34.2266 * 6,
            h: 40
        }

        const mouseX = mouse.canvasX;
        const mouseY = mouse.canvasY;
        if(this.gameEnded === false && this.acceptedDeath == true && mouseX > this.buttonDimensions.x && mouseX < this.buttonDimensions.x + this.buttonDimensions.w && mouseY > this.buttonDimensions.y - 26 && mouseY < this.buttonDimensions.y + this.buttonDimensions.h - 26){
            this.hoveringOverButton = true;
            setCursor("pointer");
            // canvas.style.cursor = "pointer";
        } else {
            this.hoveringOverButton = false;
            
            this.hoveringOverRematchButton = false;
            // canvas.style.cursor = "auto";
        }

        // button outline
        ctx.fillStyle = this.hoveringOverButton ? '#d94747' : "#d11d1d";//"#1dd129";
        ctx.lineWidth = 6;
        ctx.strokeStyle = blendColor(ctx.fillStyle, "#000000", 0.2);
        ctx.beginPath();
        ctx.roundRect(this.buttonDimensions.x, this.buttonDimensions.y, this.buttonDimensions.w, this.buttonDimensions.h, 6);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        // Leave Game text
        ctx.save();

        ctx.letterSpacing = "0.5px";
        ctx.fillStyle = '#f0f0f0';
        ctx.strokeStyle = 'black';
        ctx.font = `900 18px 'Ubuntu'`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.lineWidth = 3;
        ctx.strokeText("Leave Game Instead", this.buttonDimensions.x + this.buttonDimensions.w/2, this.buttonDimensions.y + this.buttonDimensions.h/2);
        ctx.fillText("Leave Game Instead", this.buttonDimensions.x + this.buttonDimensions.w/2, this.buttonDimensions.y + this.buttonDimensions.h/2);
        ctx.restore();

        ctx.save();

        ctx.letterSpacing = "0.5px";
        ctx.fillStyle = '#f0f0f0';
        ctx.strokeStyle = 'black';
        ctx.font = `900 18px 'Ubuntu'`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.lineWidth = 3;
        ctx.strokeText("You will respawn next wave", canvas.w/2, canvas.h/2 - 5);
        ctx.fillText("You will respawn next wave", canvas.w/2, canvas.h/2 - 5);
        
        ctx.restore();
    }

    drawGameOver(){
        this.buttonDimensions = {
            x: canvas.w / 2 - 34.2266 * 4 / 2,
            y: canvas.h / 2 + 19.5 * 4/2,
            w: 34.2266 * 4,
            h: 40
        }

        const mouseX = mouse.canvasX;
        const mouseY = mouse.canvasY;
        if(this.gameEnded === true && this.acceptedDeath == true && mouseX > this.buttonDimensions.x && mouseX < this.buttonDimensions.x + this.buttonDimensions.w && mouseY > this.buttonDimensions.y - 26 && mouseY < this.buttonDimensions.y + this.buttonDimensions.h - 26){
            this.hoveringOverButton = true;
            this.hoveringOverRematchButton = false;
            setCursor("pointer");
            // canvas.style.cursor = "pointer";
        } else if(this.gameEnded === true && (!window.inMainPvpRoom || window.deadMenuTime >= 5000) && this.acceptedDeath == true && mouseX > this.buttonDimensions.x && mouseX < this.buttonDimensions.x + this.buttonDimensions.w && mouseY > this.buttonDimensions.y + this.buttonDimensions.h*1.28 - 26 && mouseY < this.buttonDimensions.y + this.buttonDimensions.h*1.28 + this.buttonDimensions.h - 26){
            this.hoveringOverRematchButton = true;
            this.hoveringOverButton = false;
            setCursor("pointer");
        } else {
            this.hoveringOverButton = false;
            this.hoveringOverRematchButton = false;
            // canvas.style.cursor = "auto";
        }

        // button outline
        ctx.fillStyle = this.hoveringOverButton ? '#d94747' : "#d11d1d";//"#1dd129";
        ctx.lineWidth = 6;
        ctx.strokeStyle = blendColor(ctx.fillStyle, "#000000", 0.2);
        ctx.beginPath();
        ctx.roundRect(this.buttonDimensions.x, this.buttonDimensions.y, this.buttonDimensions.w, this.buttonDimensions.h, 6);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        // Leave Game text
        ctx.save();

        ctx.letterSpacing = "0.5px";
        ctx.fillStyle = '#f0f0f0';
        ctx.strokeStyle = 'black';
        ctx.font = `900 22px 'Ubuntu'`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.lineWidth = 3;
        ctx.strokeText("Continue", this.buttonDimensions.x + this.buttonDimensions.w/2, this.buttonDimensions.y + this.buttonDimensions.h/2);
        ctx.fillText("Continue", this.buttonDimensions.x + this.buttonDimensions.w/2, this.buttonDimensions.y + this.buttonDimensions.h/2);
        ctx.restore();

        if(biomeManager !== undefined && biomeManager.getCurrentBiome() === '1v1'){
            let cooldown = false;
            if (window.inMainPvpRoom){
                if (window.deadMenuTime < 5000){
                    cooldown = true;
                }
            }
            if (!cooldown){
                ctx.globalAlpha = 1;
                ctx.fillStyle = this.hoveringOverRematchButton ? '#1cd128' : "#10c21a";//"#1dd129";
                ctx.lineWidth = 6;
                ctx.strokeStyle = blendColor(ctx.fillStyle, "#000000", 0.2);
                ctx.beginPath();
                ctx.roundRect(this.buttonDimensions.x, this.buttonDimensions.y + this.buttonDimensions.h*1.28, this.buttonDimensions.w, this.buttonDimensions.h, 6);
                ctx.fill();
                ctx.stroke();
                ctx.closePath();
                ctx.save();
                ctx.letterSpacing = "0.5px";
                ctx.fillStyle = '#f0f0f0';
                ctx.strokeStyle = 'black';
                ctx.font = `900 22px 'Ubuntu'`;
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.lineWidth = 3;
                ctx.strokeText("Rematch", this.buttonDimensions.x + this.buttonDimensions.w/2, this.buttonDimensions.y + this.buttonDimensions.h*1.28 + this.buttonDimensions.h/2);
                ctx.fillText("Rematch", this.buttonDimensions.x + this.buttonDimensions.w/2, this.buttonDimensions.y + this.buttonDimensions.h*1.28 + this.buttonDimensions.h/2);
                ctx.restore();
                if(this.rematchRequested === true){
                    ctx.lineWidth = 2;
                    ctx.fillStyle = 'white';
                    ctx.strokeStyle = 'black';
                    ctx.font = `900 20px 'Ubuntu'`;
                    ctx.textAlign = 'left';
                    ctx.strokeText("Rematch requested...", this.buttonDimensions.x + this.buttonDimensions.w + 10, this.buttonDimensions.y + this.buttonDimensions.h*1.28 + this.buttonDimensions.h/2);
                    ctx.fillText("Rematch requested...", this.buttonDimensions.x + this.buttonDimensions.w + 10, this.buttonDimensions.y + this.buttonDimensions.h*1.28 + this.buttonDimensions.h/2);
                }
            }
            else{
                ctx.save();
                ctx.letterSpacing = "0.5px";
                ctx.fillStyle = '#f0f0f0';
                ctx.strokeStyle = 'black';
                ctx.font = `900 22px 'Ubuntu'`;
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.lineWidth = 3;
                ctx.strokeText("You may rematch in: "+Math.floor((5000 - window.deadMenuTime)/100) + "s", this.buttonDimensions.x + this.buttonDimensions.w/2, this.buttonDimensions.y + this.buttonDimensions.h*1.28 + this.buttonDimensions.h/2);
                ctx.fillText("You may rematch in: "+Math.floor((5000 - window.deadMenuTime)/100) + "s", this.buttonDimensions.x + this.buttonDimensions.w/2, this.buttonDimensions.y + this.buttonDimensions.h*1.28 + this.buttonDimensions.h/2);
                ctx.restore();
            }
        }

        ctx.save();

        ctx.letterSpacing = "1px";
        ctx.fillStyle = '#8a0000';
        ctx.strokeStyle = 'black';
        ctx.font = `900 56px 'Ubuntu'`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.lineWidth = 6;
        if(window.hasWonPvp === true){
            ctx.fillStyle = '#008a2e';
            ctx.strokeText("You win!", canvas.w/2, canvas.h/2 - 5);
            ctx.fillText("You win!", canvas.w/2, canvas.h/2 - 5);
        } else {
            ctx.strokeText("Game Over", canvas.w/2, canvas.h/2 - 5);
            ctx.fillText("Game Over", canvas.w/2, canvas.h/2 - 5);
        }
        
        ctx.restore();
    }

    

    drawDeadPetal(x, y, pc){
        if(!pc || !pc.petals || !pc.petals[0]) return;
        let newpetal = new Petal(pc.petals[0]);
        ctx.translate(x,y);
        ctx.scale(2,2);
        newpetal.draw();
        ctx.scale(1/2,1/2);
        ctx.translate(-x,-y);
    }
    gameOver(){
        this.gameEndedFadeTimer = 0;
        this.gameEnded = true;
        this.acceptedDeath = true;
    }
    unGameOver(){
        this.gameEndedFadeTimer = 0;
        this.gameEnded = false;
        this.acceptedDeath = false;
    }
}