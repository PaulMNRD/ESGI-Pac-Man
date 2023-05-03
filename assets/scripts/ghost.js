<<<<<<< Updated upstream
=======
import {map} from './map.js';
import {ctx} from './share.js';
import {Entity} from './entity.js';
import {pacman} from './game.js';

export class Ghost extends Entity{
    
    sprite = new Image();
    speed = 1;

    constructor(X, Y, color, path) {
        super(X, Y);
        this.color = color;
        this.sprite.src = path;

        this.draw();
    }

    calcCase(coord) {
        return Math.floor( (coord + 8) / 16);
    }

    isNewCase() {
        if ((this.caseX < 6 || this.caseX > 21) && this.caseY == 14) {
            this.speed = 0.5;
        }
		else {
            if (pacman.condition == 1){
                this.speed = 0.7;
            }
            else {
                this.speed = 0.9;
            }
        }
        //Verifie que la coordonées se trouve sur le pixel d'une nouvelle case
        if (Math.floor(this.X) % 16 === 0 && Math.floor(this.Y) % 16 === 0) {
            //Verifie que la coordonnées se trouve pour la premiere fois sur ce pixel
            if (this.X - this.speed < Math.floor(this.X) && this.Y - this.speed < Math.floor(this.Y)) { //ERREUR DE LOGIQUE A REVOIR
                if (this.X < 0) {
                    this.X = 27 * 16 + 8;
                }
				else if (this.X > 27 * 16 + 8) {
                    this.X = -15;
                }
				else if (this.caseX >= 1 && this.caseX <= 26) {
                    this.findNextDirection();
                }
            }
        }
    }

    move() {
        this.isNewCase();

        switch (this.direction) {
            case 0:
                this.Y -= this.speed;
                break;
            case 1:
                this.X += this.speed;
                break;
            case 2:
                this.Y += this.speed;
                break;
            case 3:
                this.X -= this.speed;
                break;
        }
        
        ctx.fillStyle = this.color;
        this.draw();
        this.drawCase();
    }
    draw() {
        ctx.drawImage(this.sprite, this.direction * 163 + 11, 4, 151, 151, this.X - 8, this.Y - 8, 32, 32);
    }

    getAvailableDirection() {
        let availableDir = [];
        if (map[this.caseY - 1][this.caseX] && this.direction !== 2) {
            availableDir.push(0);
        }
        if (map[this.caseY][this.caseX + 1] && this.direction !== 3) {
            availableDir.push(1);
        }
        if (map[this.caseY + 1][this.caseX] && this.direction !== 0) {
            availableDir.push(2);
        }
        if (map[this.caseY][this.caseX - 1] && this.direction !== 1) {
            availableDir.push(3);
        }

        return availableDir;
    }

    findNextDirection() {
        let availableDir = this.getAvailableDirection();
        if (availableDir.length > 1) {
            this.direction = availableDir[Math.floor(Math.random() * availableDir.length)];
        }
		else {
            this.direction = availableDir[0];
        }
    }
}
>>>>>>> Stashed changes
