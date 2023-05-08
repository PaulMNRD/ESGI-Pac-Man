import { getMap } from './map.js';
import { ctx } from './share.js';
import { Entity } from './entity.js';
import { Case } from './case.js';
import { level } from './game.js';

let ghostCase;
let visitedCases;
let possibleCases;
let saveDir;

export class Ghost extends Entity {

    currentCaseX = 0;
    currentCaseY = 0;
    igTimer = performance.now();
    map = getMap();
    sprite = new Image();
    scaredSprite = new Image();
    deathSprite = new Image();
    scared = false;
    eaten = false;
    scareTimer = 0;
    deathWalk = false;
    invertDir = false;

    constructor(X, Y, color, path) {
        super(X, Y);
        this.color = color;
        this.sprite.src = path;

        this.scaredSprite.src = 'assets/img/scared.png';
        this.deathSprite.src = 'assets/img/eyes.png';
        this.draw();
    }

    calcCase(coord) {
        return Math.floor((coord + 8) / 16);
    }

    isNewCase(target) {
        if ((this.caseX != this.currentCaseX || this.caseY != this.currentCaseY) && Math.floor(this.X) % 16 >= 0 && Math.floor(this.X) % 16 < this.baseSpeed && Math.floor(this.Y) % 16 >= 0 && Math.floor(this.Y) % 16 < this.baseSpeed) {
            this.currentCaseX = this.caseX;
            this.currentCaseY = this.caseY;

            if (this.X < 8) {
                this.X = 27 * 16 + 8;
            }
            else if (this.X > 27 * 16 + 8) {
                this.X = 8;
            }
            else if (this.caseX >= 1 && this.caseX <= 26) {

                if (this.deathWalk) {
                    if (this.caseX == 13 && this.caseY == 14) {
                        this.deathWalk = false;
                        this.invertDir = false;
                    }
                    this.map[12][13] = 1;
                    this.map[13][13] = 1;
                    this.map[14][12] = 0;
                    this.map[14][14] = 0;
                    ghostCase = new Case(this.caseX, this.caseY, new Case(13, 14));
                    visitedCases = [ghostCase];
                    possibleCases = [ghostCase];
                    saveDir = this.direction;
                    this.direction = this.findNextDirection(ghostCase);
                    if (this.direction === null) {
                        this.direction = this.getRandomDirection(saveDir);
                    }
                }
                else if (this.invertDir) {
                    this.direction = (this.direction + 2) % 4;
                    this.invertDir = false;
                }
                else if (!this.scared) {
                    ghostCase = new Case(this.caseX, this.caseY, target);
                    visitedCases = [ghostCase];
                    possibleCases = [ghostCase];
                    saveDir = this.direction;
                    this.direction = this.findNextDirection(ghostCase);
                    if (this.direction === null) {
                        this.direction = this.getRandomDirection(saveDir);
                    }
                }
                else {
                    this.direction = this.getRandomDirection(this.direction);
                }
            }
        }
    }

    getSpeed() {
        if (level.innerHTML == 1) {
            if (this.scared && !this.deathWalk) {
                this.speed = 0.5 * this.baseSpeed;
            }
            else if ((this.caseX < 6 || this.caseX > 21) && this.caseY == 14) {
                this.speed = 0.4 * this.baseSpeed;
            }
            else {
                this.speed = 0.75 * this.baseSpeed;
            }
        }
        else if (level.innerHTML >= 2 && level.innerHTML <= 4) {
            if (this.scared && !this.deathWalk) {
                this.speed = 0.55 * this.baseSpeed;
            }
            else if ((this.caseX < 6 || this.caseX > 21) && this.caseY == 14) {
                this.speed = 0.45 * this.baseSpeed;
            }
            else {
                this.speed = 0.85 * this.baseSpeed;
            }
        }
        else if (level.innerHTML >= 5 && level.innerHTML <= 20) {
            if (this.scared && !this.deathWalk) {
                this.speed = 0.60 * this.baseSpeed;
            }
            else if ((this.caseX < 6 || this.caseX > 21) && this.caseY == 14) {
                this.speed = 0.50 * this.baseSpeed;
            }
            else {
                this.speed = 0.95 * this.baseSpeed;
            }
        }
        else {
            if ((this.caseX < 6 || this.caseX > 21) && this.caseY == 14) {
                this.speed = 0.50 * this.baseSpeed;
            }
            else {
                this.speed = 0.95 * this.baseSpeed;
            }
        }
    }

    move(target) {
        this.getSpeed();
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
        this.draw();
        //this.drawCase();
    }
    draw() {
        if (this.deathWalk) {
            this.scareTimer = 0;
            ctx.drawImage(this.deathSprite, this.direction * 163 + 11, 4, 151, 151, this.X - 8, this.Y - 8, 32, 32);
        }
        else if (this.scared) {
            if (this.scareTimer === 0) {
                this.scareTimer = performance.now();
            }
            let timer = performance.now() - this.scareTimer;
            if ((timer >= 8000 && timer <= 8250) || (timer >= 8750 && timer <= 9000) || (timer >= 9250 && timer <= 9500) || timer >= 9750) {
                ctx.drawImage(this.scaredSprite, 204, 0, 191, 191, this.X - 8, this.Y - 8, 32, 32);
            }
            else {
                ctx.drawImage(this.scaredSprite, 0, 0, 191, 191, this.X - 8, this.Y - 8, 32, 32);
            }
        }
        else {
            this.scareTimer = 0;
            ctx.drawImage(this.sprite, this.direction * 163 + 11, 4, 151, 151, this.X - 8, this.Y - 8, 32, 32);
        }
    }

    findNextDirection(start) {

        while (possibleCases.length > 0) {
            possibleCases.sort((a, b) => (a.diffWithSource + a.diffWithTarget) - (b.diffWithSource + b.diffWithTarget));
            let currentCase = possibleCases.shift();

            if (currentCase.x === currentCase.target.x && currentCase.y === currentCase.target.y) {
                let omwCase = currentCase;
                let bestWay = [omwCase];
                while (omwCase.previousCase !== null) {
                    bestWay.push(omwCase);
                    omwCase = omwCase.previousCase;
                }

                return this.nextDirection(start, bestWay[bestWay.length - 1]);
            }
            this.refreshPossibleCases(currentCase);
        }
        saveDir = this.direction;
        return null;
    }



    nextDirection(start, nextCase) {
        let retour = null;
        saveDir = this.direction;

        if (start.y > nextCase.y) {
            retour = 0;
        }
        else if (start.x < nextCase.x) {
            retour = 1;
        }
        else if (start.y < nextCase.y) {
            retour = 2;
        }
        else if (start.x > nextCase.x) {
            retour = 3;
        }
        return retour;
    }

    refreshPossibleCases(currentCase) { //peut deplacer/supprimer test inultiles + tableau cases inutile
        var cases = [];

        cases.push(new Case(currentCase.x, currentCase.y - 1, currentCase.target, currentCase.diffWithSource + 1, currentCase));

        cases.push(new Case(currentCase.x + 1, currentCase.y, currentCase.target, currentCase.diffWithSource + 1, currentCase));

        cases.push(new Case(currentCase.x, currentCase.y + 1, currentCase.target, currentCase.diffWithSource + 1, currentCase));

        cases.push(new Case(currentCase.x - 1, currentCase.y, currentCase.target, currentCase.diffWithSource + 1, currentCase));

        if (currentCase === visitedCases[0]) {
            cases.splice((this.direction + 2) % 4, 1);
        }

        cases.forEach(c => {
            if (this.map[c.y][c.x] && !visitedCases.some(visitedCase => visitedCase.x === c.x && visitedCase.y === c.y)) {
                possibleCases.push(c);
                visitedCases.push(c);
            }
        });
    }

    getRandomDirection(dir) {
        let availableDir = [];
        if (this.map[this.caseY - 1][this.caseX] && dir !== 2) {
            availableDir.push(0);
        }
        if (this.map[this.caseY][this.caseX + 1] && dir !== 3) {
            availableDir.push(1);
        }
        if (this.map[this.caseY + 1][this.caseX] && dir !== 0) {
            availableDir.push(2);
        }
        if (this.map[this.caseY][this.caseX - 1] && dir !== 1) {
            availableDir.push(3);
        }

        if (availableDir.length === 0) {
            return (dir + 2) % 4;
        }
        return availableDir[Math.floor(Math.random() * availableDir.length)];
    }

    gate(timeInBase) {
        if (performance.now() - this.igTimer >= timeInBase && this.caseY <= 14 && this.caseY >= 12) {
            this.map[12][13] = 1;
            this.map[13][13] = 1;
        }
        else if ((this.caseX >= 12 && this.caseX <= 15) && this.caseY === 23) {
            this.map[22][12] = 0;
            this.map[22][15] = 0;
        }
        else {
            this.map[22][12] = 1;
            this.map[22][15] = 1;
            this.map[12][13] = 0;
            this.map[13][13] = 0;
        }
    }
}