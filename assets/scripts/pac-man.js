import {map} from './map.js';
import {ctx} from './share.js';
import {Entity} from './entity.js';

let pointsLeft;
let angle1, angle2; // variables pour les angles qui forment la bouche de pacman en fonction de sa direction
let angleState = 0
let animationState = 0;
let timeStart;


export class PacMan extends Entity{
    
    win = false;
    lastInput = 1;
    condition = 0;
    

    constructor(X, Y, score, life) {
        super(X, Y)
        this.score = score;
        this.life = life;
	pointsLeft = 244;
	
        this.draw();
    }
    
    isWon(){
        pointsLeft-=1;
        if(pointsLeft === 0){
            this.win = true;
        }
    }
    isPoint() {
        if (map[this.caseY][this.caseX] == 2) {
            map[this.caseY][this.caseX] = 1;
            this.score += 10;
            this.isWon();
        }
		else if (map[this.caseY][this.caseX] == 3) {
            map[this.caseY][this.caseX] = 1;
            this.score += 100;
            this.condition = 1;
            timeStart = performance.now();
            this.isWon();
        }
    }
    move() {
        this.isPoint();
        this.chooseDirection();
        

        switch (this.direction) {
            case 0:
                if (map[this.caseY - 1][this.caseX] != 0 || this.Y%16 != 8) {
                    this.Y -= this.speed;
                }
				break;
                case 1:
                    if (map[this.caseY][this.caseX + 1] != 0 || this.X%16 != 8) {
                        this.X += this.speed;
                        if (this.X > 27 * 16 + 8) {
                            this.X = -15;
                        }
                    }
				break;
                    case 2:
                        if (map[this.caseY + 1][this.caseX] != 0 || this.Y%16 != 8) {
                            this.Y += this.speed;
                        }
				break;
                        case 3:
                            if (map[this.caseY][this.caseX - 1] != 0 || this.X%16 != 8) {
                                this.X -= this.speed;
                                if (this.X < 0) {
                                    this.X = 27 * 16 + 8;
                                }
                            }
				break;
        }

        if (this.condition==1){
            if ((performance.now()-timeStart)>10000){
                this.condition=0;
            }
        }
        
        ctx.fillStyle = "yellow";
        this.draw();
        //this.drawCase();
    }
    draw() {
        
        ctx.beginPath();
        
        switch (this.direction) {
            case 1:
                angle1 = (0.2 - angleState)*Math.PI;
                angle2 = (1.8 + angleState)*Math.PI;
                break;
            case 2:
                angle1 = (0.7 - angleState)*Math.PI;
                angle2 = (0.3 + angleState)*Math.PI;
                break;
            case 3:
                angle1 = (1.2 - angleState)*Math.PI;
                angle2 = (0.8 + angleState)*Math.PI;
                break;
            default:
                angle1 = (1.7 - angleState)*Math.PI;
                angle2 = (1.3 + angleState)*Math.PI;
                break;
        }
        
        if(animationState){
            if(angleState >= 0.18){
                animationState = 0;
            }
            else{
                angleState += 0.01;
            }
        }
        else{
            if(angleState <= 0.02){
                animationState = 1;
            }
            else{
                angleState -= 0.02;
            }
        }
        ctx.arc(this.X, this.Y, 16, angle1, angle2);
        ctx.lineTo(this.X, this.Y);
        ctx.fill();	

    }
    
    chooseDirection(){
        if(this.direction !== this.lastInput){
            switch(this.lastInput){
                case 0:
                    if (map[this.caseY - 1][this.caseX] && this.X%16 == 8) {
                        this.direction = 0;
                    }
                    break;
                case 1:
                    if (map[this.caseY][this.caseX + 1] && this.Y%16 == 8) {
                        this.direction = 1;
                    }
                    break;
                case 2:
                    if (map[this.caseY + 1][this.caseX] && this.X%16 == 8) {
                        this.direction = 2;
                    }
                    break;
                case 3:
                    if (map[this.caseY][this.caseX - 1] && this.Y%16 == 8) {
                        this.direction = 3;
                    }
                    break;
            }
        }
    }
}
