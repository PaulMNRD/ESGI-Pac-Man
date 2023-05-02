import {map} from './map.js';
import {ctx} from './share.js';
import {Entity} from './entity.js';
import {Case} from './case.js';

let ghostCase;
let visitedCases;
let possibleCases;

export class Ghost extends Entity{
    
    sprite = new Image();

    constructor(X, Y, color, path) {
        super(X, Y);
        this.color = color;
        this.sprite.src = path;

        this.draw();
    }

    calcCase(coord) {
        return Math.floor( (coord + 8) / 16);
    }

    isNewCase(target) {
        //Verifie que la coordonées se trouve sur le pixel d'une nouvelle case
        if (Math.floor(this.X) % 16 === 0 && Math.floor(this.Y) % 16 === 0) {
            //Verifie que la coordonnées se trouve pour la premiere fois sur ce pixel
            if (this.X - this.speed < Math.floor(this.X) && this.Y - this.speed < Math.floor(this.Y)) { //ERREUR DE LOGIQUE A REVOIR
                
                console.log(map[this.caseY][this.caseX] == true);
                
                if (this.X < 0) {
                    this.X = 27 * 16 + 8;
                }
				else if (this.X > 27 * 16 + 8) {
                    this.X = -15;
                }
				else if (this.caseX >= 1 && this.caseX <= 26) {
                    ghostCase = new Case(this.caseX, this.caseY, target);
                    visitedCases = [ghostCase];
                    possibleCases = [ghostCase];
                    this.direction = this.findNextDirection(ghostCase);
                }
            }
        }
        if ((this.caseX < 6 || this.caseX > 21) && this.caseY == 14) {
            this.speed = 0.7;
        }
		else {
            this.speed = 1;
        }
    }

    move(target) {
        this.isNewCase(target);

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
        //this.draw();
        this.drawCase();
    }
    draw() {
        ctx.drawImage(this.sprite, this.direction * 163 + 11, 4, 151, 151, this.X - 8, this.Y - 8, 32, 32);
    }

    findNextDirection(start){

        while(possibleCases.length > 0){
            possibleCases.sort((a, b) => (a.diffWithSource + a.diffWithTarget) - (b.diffWithSource + b.diffWithTarget));
            let currentCase = possibleCases.shift();

            if (currentCase.x === currentCase.target.x && currentCase.y === currentCase.target.y) {
                let bestWay = [];
                let omwCase = currentCase;
                do{
                    bestWay.push(omwCase);
                    omwCase = omwCase.previousCase;
                }while(omwCase.previousCase !== null);
                
                return this.nextDirection(start, bestWay[bestWay.length - 1]);
            }
            this.refreshPossibleCases(currentCase);
        }
        return null;
    }
    
    
    
    nextDirection(start, nextCase){
        let retour = null;

        if(start.y > nextCase.y){
            retour = 0;
        }
    else if(start.x < nextCase.x){
        retour = 1;
    }
    else if(start.y < nextCase.y){
        retour = 2;
    }
    else if(start.x > nextCase.x){
        retour = 3;
    }
        return retour;
    }
    
    refreshPossibleCases(currentCase){ //peut deplacer/supprimer test inultiles + tableau cases inutile
        var cases = [];
        
        cases.push(new Case(currentCase.x, currentCase.y - 1, currentCase.target, currentCase.diffWithSource + 1, currentCase));
        
        cases.push(new Case(currentCase.x + 1, currentCase.y, currentCase.target, currentCase.diffWithSource + 1, currentCase));
        
        cases.push(new Case(currentCase.x, currentCase.y + 1, currentCase.target, currentCase.diffWithSource + 1, currentCase));
        
        cases.push(new Case(currentCase.x - 1, currentCase.y, currentCase.target, currentCase.diffWithSource + 1, currentCase));
        
        cases.forEach(c => {
            if(map[c.y][c.x] && !visitedCases.some(visitedCase => visitedCase.x === c.x && visitedCase.y === c.y)){
                possibleCases.push(c);
                visitedCases.push(c);
            }
        });
    }
}