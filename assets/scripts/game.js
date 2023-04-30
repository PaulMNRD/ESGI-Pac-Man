<<<<<<< Updated upstream
let map = [
	[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
	[false, true, true, true, true, true, true, true, true, true, true, true, true, false, false, true, true, true, true, true, true, true, true, true, true, true, true, false],
	[false, true, false, false, false, false, true, false, false, false, false, false, true, false, false, true, false, false, false, false, false, true, false, false, false, false, true, false],
	[false, true, false, false, false, false, true, false, false, false, false, false, true, false, false, true, false, false, false, false, false, true, false, false, false, false, true, false],
	[false, true, false, false, false, false, true, false, false, false, false, false, true, false, false, true, false, false, false, false, false, true, false, false, false, false, true, false],
	[false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, false],
	[false, true, false, false, false, false, true, false, false, true, false, false, false, false, false, false, false, false, true, false, false, true, false, false, false, false, true, false],
	[false, true, false, false, false, false, true, false, false, true, false, false, false, false, false, false, false, false, true, false, false, true, false, false, false, false, true, false],
	[false, true, true, true, true, true, true, false, false, true, true, true, true, false, false, true, true, true, true, false, false, true, true, true, true, true, true, false],
	[false, false, false, false, false, false, true, false, false, false, false, false, true, false, false, true, false, false, false, false, false, true, false, false, false, false, false, false],
	[false, false, false, false, false, false, true, false, false, false, false, false, true, false, false, true, false, false, false, false, false, true, false, false, false, false, false, false],
	[false, false, false, false, false, false, true, false, false, true, true, true, true, true, true, true, true, true, true, false, false, true, false, false, false, false, false, false],
	[false, false, false, false, false, false, true, false, false, true, false, false, false, false, false, false, false, false, true, false, false, true, false, false, false, false, false, false],
	[false, false, false, false, false, false, true, false, false, true, false, false, false, false, false, false, false, false, true, false, false, true, false, false, false, false, false, false],
	[true, true, true, true, true, true, true, true, true, true, false, false, false, false, false, false, false, false, true, true, true, true, true, true, true, true, true, true],
	[false, false, false, false, false, false, true, false, false, true, false, false, false, false, false, false, false, false, true, false, false, true, false, false, false, false, false, false],
	[false, false, false, false, false, false, true, false, false, true, false, false, false, false, false, false, false, false, true, false, false, true, false, false, false, false, false, false],
	[false, false, false, false, false, false, true, false, false, true, true, true, true, true, true, true, true, true, true, false, false, true, false, false, false, false, false, false],
	[false, false, false, false, false, false, true, false, false, true, false, false, false, false, false, false, false, false, true, false, false, true, false, false, false, false, false, false],
	[false, false, false, false, false, false, true, false, false, true, false, false, false, false, false, false, false, false, true, false, false, true, false, false, false, false, false, false],
	[false, true, true, true, true, true, true, true, true, true, true, true, true, false, false, true, true, true, true, true, true, true, true, true, true, true, true, false],
	[false, true, false, false, false, false, true, false, false, false, false, false, true, false, false, true, false, false, false, false, false, true, false, false, false, false, true, false],
	[false, true, false, false, false, false, true, false, false, false, false, false, true, false, false, true, false, false, false, false, false, true, false, false, false, false, true, false],
	[false, true, true, true, false, false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, false, false, true, true, true, false],
	[false, false, false, true, false, false, true, false, false, true, false, false, false, false, false, false, false, false, true, false, false, true, false, false, true, false, false, false],
	[false, false, false, true, false, false, true, false, false, true, false, false, false, false, false, false, false, false, true, false, false, true, false, false, true, false, false, false],
	[false, true, true, true, true, true, true, false, false, true, true, true, true, false, false, true, true, true, true, false, false, true, true, true, true, true, true, false],
	[false, true, false, false, false, false, false, false, false, false, false, false, true, false, false, true, false, false, false, false, false, false, false, false, false, false, true, false],
	[false, true, false, false, false, false, false, false, false, false, false, false, true, false, false, true, false, false, false, false, false, false, false, false, false, false, true, false],
	[false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, false],
	[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
]
class Ghost{

	direction = 4;
	sprite = new Image();
	speed = 1;
	ctx = document.getElementById('map').getContext('2d');

	constructor(X, Y, color, path) {
		this.X = X;
		this.Y = Y;
		this.color = color;
		this.sprite.src = path;

		this.draw();
	}

	get caseX(){
		return this.calcCase(this.X + 16/2);
	}
	get caseY(){
		return this.calcCase(this.Y + 16/2);
	}
	calcCase(coord){
		return Math.floor(coord/16);
	}

	isNewCase(){
		//Verifie que la coordonées se trouve sur le pixel d'une nouvelle case
		if(Math.floor(this.X) % 16 === 0 && Math.floor(this.Y) % 16 === 0){
			//Verifie que la coordonnées se trouve pour la premiere fois sur ce pixel
			if(this.X - this.speed < Math.floor(this.X) && this.Y - this.speed < Math.floor(this.Y)){ //ERREUR DE LOGIQUE A REVOIR
				if(this.X < 0){
					this.X = 27*16+8;
				}
				else if(this.X > 27*16+8){
					this.X = -15;
				}
				else if(this.caseX >= 1 && this.caseX <=26){
					this.findNextDirection();
				}
			}
		}
	}

	move(){
		this.isNewCase();

		switch (this.direction){
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
		this.draw();
		this.drawCase();
	}
	draw(){
		this.ctx.drawImage(this.sprite, this.direction*163 + 11, 4, 151, 151, this.X - 1/4 * 32, this.Y - 1/4 * 32, 32, 32);
	}
	drawCase(){
		this.ctx.fillStyle = this.color;
		this.ctx.fillRect(this.caseX*16, this.caseY*16, 16, 16);
	}

	getAvailableDirection(){
		let availableDir = [];
		if(map[this.caseY - 1][this.caseX] && this.direction !== 2){
			availableDir.push(0);
		}
		if(map[this.caseY][this.caseX+1] && this.direction !== 3){
			availableDir.push(1);
		}
		if(map[this.caseY + 1][this.caseX] && this.direction !== 0){
			availableDir.push(2);
		}
		if(map[this.caseY][this.caseX - 1] && this.direction !== 1){
			availableDir.push(3);
		}

		return availableDir;
	}

	findNextDirection(){
		let availableDir = this.getAvailableDirection();
		if(availableDir.length > 1){
			this.direction = availableDir[Math.floor(Math.random() * availableDir.length)];
		}
		else{
			this.direction = availableDir[0];
		}
	}
}

let ctx = document.getElementById('map').getContext('2d');
let keep = true;

let pinky = new Ghost(13*16, 5*16, "red", "assets/img/pinky.png");
let blinky = new Ghost(14*16, 5*16, "cyan", "assets/img/blinky.png");
let inky = new Ghost(12*16, 5*16, "pink", "assets/img/inky.png");
let clyde = new Ghost(15*16, 5*16, "orange", "assets/img/clyde.png");

function play() {
	if(keep){
		ctx.clearRect(0, 0, 448, 496);
		pinky.move();
		blinky.move();
		inky.move();
		clyde.move();
=======
import {Ghost} from './ghost.js';
import {PacMan} from './pac-man.js';
import {map, newMap, mapPoints} from './map.js';
import {ctx} from './share.js';

let score = document.querySelector('#score');
let life = document.querySelector('#life');
let keep = true;
let pacman;
let ghosts;

document.addEventListener('keydown', function (event) {
	if (event.code == "ArrowUp" || event.code == "KeyW") {
		pacman.lastInput = 0;
	}
	if (event.code == "ArrowRight" || event.code == "KeyD") {
		pacman.lastInput = 1;
	}
	if (event.code == "ArrowDown" || event.code == "KeyS") {
		pacman.lastInput = 2;
	}
	if (event.code == "ArrowLeft" || event.code == "KeyA") {
		pacman.lastInput = 3;
	}
});


function run() {
	pacman.move();
	var ghost_in_base = 0;
	
	for(var ghost in ghosts) {
		if ((ghosts[ghost].caseX > 12 && ghosts[ghost].caseX < 17) && (ghosts[ghost].caseY > 12 && ghosts[ghost].caseX < 15)) {
			ghost_in_base++;
		}
		if (ghost_in_base != 0) {
			map[12][13] = 1;
			map[12][14] = 1;
		}
		else {
			map[12][13] = 0;
			map[12][14] = 0;
		}
		ghosts[ghost].move();
		if (pacman.caseX == ghosts[ghost].caseX && pacman.caseY == ghosts[ghost].caseY) {
			if (pacman.condition == 0) {
				for(var ghost in ghosts) {
					ghosts[ghost].X = 13 * 16;
					ghosts[ghost].Y = 14 * 16;
				}
				
				pacman.X = 13 * 16 + 8;
				pacman.Y = 23 * 16 + 8;
				pacman.life -= 1;
				pacman.direction = 1
				if (pacman.life == 0) {
					keep = false;
					newGame(0, 3);
				}
			}
			else if (pacman.condition == 1) {
				ghosts[ghost].X = 13 * 16;
				ghosts[ghost].Y = 14 * 16;
				pacman.score += 100
			}
		}
	}
	if(pacman.win){
		keep = false;
		newGame(pacman.score, pacman.life);
	}
	score.innerHTML = pacman.score;
	life.innerHTML = pacman.life;
}

function play() {
	ctx.clearRect(0, 0, 448, 496);
	mapPoints(map);
	run();
	
	if(keep){
		requestAnimationFrame(play);
	}
	else{
		keep = true;
>>>>>>> Stashed changes
	}
}

<<<<<<< Updated upstream
function pause(){
	keep = false;
}
function unpause(){
	keep = true;
}
=======
function newGame(initialScore, nbrOfLife){
	pacman = new PacMan(13 * 16 + 8, 23 * 16 + 8, initialScore, nbrOfLife);
	
	ghosts = {
		pinky: new Ghost(13 * 16, 14 * 16, "red", "assets/img/pinky.png"),
		blinky: new Ghost(14 * 16, 14 * 16, "cyan", "assets/img/blinky.png"),
		inky: new Ghost(12 * 16, 14 * 16, "pink", "assets/img/inky.png"),
		clyde: new Ghost(15 * 16, 14 * 16, "orange", "assets/img/clyde.png"),
	};
	newMap();
	
	play();
}

newGame(0, 3);

export {newGame};
>>>>>>> Stashed changes
