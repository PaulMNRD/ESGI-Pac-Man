<<<<<<< Updated upstream
let map = [
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
	[0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0],
	[0, 3, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 3, 0],
	[0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0],
	[0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
	[0, 2, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 2, 0],
	[0, 2, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 2, 0],
	[0, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 0],
	[0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0],
	[1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1],
	[0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0],
	[0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
	[0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0],
	[0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0],
	[0, 3, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 3, 0],
	[0, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0, 0],
	[0, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0, 0],
	[0, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 0],
	[0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0],
	[0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0],
	[0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]

class Ghost {

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

	get caseX() {
		return this.calcCase(this.X + 16 / 2);
	}
	get caseY() {
		return this.calcCase(this.Y + 16 / 2);
	}
	calcCase(coord) {
		return Math.floor(coord / 16);
	}

	isNewCase() {
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
		if ((this.caseX < 6 || this.caseX > 21) && this.caseY == 14) {
			this.speed = 0.7;
		}
		else {
			this.speed = 1;
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
		this.draw();
		this.drawCase();
	}
	draw() {
		this.ctx.drawImage(this.sprite, this.direction * 163 + 11, 4, 151, 151, this.X - 1 / 4 * 32, this.Y - 1 / 4 * 32, 32, 32);
	}
	drawCase() {
		this.ctx.fillStyle = this.color;
		this.ctx.fillRect(this.caseX * 16, this.caseY * 16, 16, 16);
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

class PacMan {

	direction = 1;
	sprite = new Image();
	speed = 1;
	ctx = document.getElementById('map').getContext('2d');
	score = 0;
	condition = 0;
	life = 3;
	timeStart = performance.now();

	constructor(X, Y, color, path) {
		this.X = X;
		this.Y = Y;
		this.color = color;
		this.sprite.src = path;
=======
import {Ghost} from './ghost.js';
import {PacMan} from './pac-man.js';
import {map, newMap, mapPoints} from './map.js';
import {ctx} from './share.js';
>>>>>>> Stashed changes

		this.draw();
	}

	get caseX() {
		return this.calcCase(this.X + 16 / 2);
	}
	get caseY() {
		return this.calcCase(this.Y + 16 / 2);
	}
	calcCase(coord) {
		return Math.floor(coord / 16);
	}
	isPoint() {
		if (map[this.caseY][this.caseX] == 2) {
			map[this.caseY][this.caseX] = 1;
			this.score += 10;
		}
		else if (map[this.caseY][this.caseX] == 3) {
			map[this.caseY][this.caseX] = 1;
			this.score += 100;
			this.condition = 1;
			this.timeStart = performance.now();
		}
	}
	move() {
		this.isPoint();

		switch (this.direction) {
			case 0:
				if (map[this.caseY - 1][this.caseX] != 0) {
					this.Y -= this.speed;
				}
				break;
			case 1:
				if (map[this.caseY][this.caseX + 1] != 0) {
					this.X += this.speed;
					if (this.X > 27 * 16 + 8) {
						this.X = -15;
					}
				}
				break;
			case 2:
				if (map[this.caseY + 1][this.caseX] != 0) {
					this.Y += this.speed;
				}
				break;
			case 3:
				if (map[this.caseY][this.caseX - 1] != 0) {
					this.X -= this.speed;
					if (this.X < 0) {
						this.X = 27 * 16 + 8;
					}
				}
				break;
		}

		if (this.condition==1){
			if ((performance.now()-this.timeStart)>10000){
				this.condition=0;
			}
		}
		this.draw();
		this.drawCase();
	}
	draw() {
		this.ctx.drawImage(this.sprite, this.direction * 163 + 11, 4, 151, 151, this.X - 1 / 4 * 32, this.Y - 1 / 4 * 32, 32, 32);
	}
	drawCase() {
		this.ctx.fillStyle = this.color;
		this.ctx.fillRect(this.caseX * 16, this.caseY * 16, 16, 16);
	}

}

let ctx = document.getElementById('map').getContext('2d');
let score = document.querySelector('#score');
let life = document.querySelector('#life');
<<<<<<< Updated upstream

let keep = true;
let map_bis = map;

let pinky = new Ghost(13 * 16, 14 * 16, "red", "assets/img/pinky.png");
let blinky = new Ghost(14 * 16, 14 * 16, "cyan", "assets/img/blinky.png");
let inky = new Ghost(12 * 16, 14 * 16, "pink", "assets/img/inky.png");
let clyde = new Ghost(15 * 16, 14 * 16, "orange", "assets/img/clyde.png");
let ghosts = [pinky, blinky, inky, clyde];

let pacman = new PacMan(13 * 16, 23 * 16, "yellow", "assets/img/pinky.png");
let directory = pacman.direction

document.addEventListener('keydown', function (event) {
	if (event.code == "ArrowUp" || event.code == "KeyW") {
		if (map[pacman.caseY - 1][pacman.caseX] != 0) {
			pacman.direction = 0;
			pacman.speed = 1;
		}
		directory = 0;
	}
	if (event.code == "ArrowRight" || event.code == "KeyD") {
		if (map[pacman.caseY][pacman.caseX + 1] != 0) {
			pacman.direction = 1;
			pacman.speed = 1;
		}
		directory = 1;
	}
	if (event.code == "ArrowDown" || event.code == "KeyS") {
		if (map[pacman.caseY + 1][pacman.caseX] != 0) {
			pacman.direction = 2;
			pacman.speed = 1;
		}
		directory = 2;
	}
	if (event.code == "ArrowLeft" || event.code == "KeyA") {
		if (map[pacman.caseY][pacman.caseX - 1] != 0) {
			pacman.direction = 3;
			pacman.speed = 1;
		}
		directory = 3;
	}
})
function mapPoints() {
	nb_points = 0
	for (i = 0; i < map.length; i++) {
		for (j = 0; j < map[i].length; j++) {
			if (map[i][j] == 2) {
				ctx.fillStyle = "yellow";
				ctx.fillRect(j * 16 + 6, i * 16 + 6, 4, 4);
				nb_points++;
			}
			else if (map[i][j] == 3) {
				ctx.beginPath();
				ctx.fillStyle = "yellow";
				ctx.arc(j * 16 + 8, i * 16 + 8, 8, 0, 2 * Math.PI);
				ctx.fill();
				nb_points++;
			}
		}
	}
	if (nb_points == 0) {
		map=map_bis;
	}
}
function testDirectory() {
	if (directory != pacman.direction) {
		switch (directory) {
			case 0:
				if (map[pacman.caseY - 1][pacman.caseX] != 0) {
					pacman.direction = 0;
				}
				break;
			case 1:
				if (map[pacman.caseY][pacman.caseX + 1] != 0) {
					pacman.direction = 1;
				}
				break;
			case 2:
				if (map[pacman.caseY + 1][pacman.caseX] != 0) {
					pacman.direction = 2;
				}
				break;
			case 3:
				if (map[pacman.caseY][pacman.caseX - 1] != 0) {
					pacman.direction = 3;
				}
				break;
		}
	}
}
=======
let jeu = document.querySelector('#map');
const start = document.querySelector('#start');
let gameover = document.querySelector('#game-over');

let keep = false;
let pacman;
let ghosts;

>>>>>>> Stashed changes
function run() {
	ctx.clearRect(0, 0, 448, 496);
	mapPoints(map);
	pacman.move();
	ghost_in_base = 0
	for (i = 0; i < ghosts.length; i++) {
		if ((ghosts[i].caseX > 12 && ghosts[i].caseX < 17) && (ghosts[i].caseY > 12 && ghosts[i].caseX < 15)) {
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
		ghosts[i].move();
		if (pacman.caseX == ghosts[i].caseX && pacman.caseY == ghosts[i].caseY) {
			if (pacman.condition == 0) {
				for (j = 0; j < ghosts.length; j++) {
					ghosts[j].X = 13 * 16;
					ghosts[j].Y = 14 * 16;
				}
				pacman.X = 13 * 16;
				pacman.Y = 23 * 16;
				pacman.life -= 1;
				life.removeChild(life.children[pacman.life]);
				pacman.direction = 1
				directory = 1
				if (pacman.life == 0) {
					gameover.style.display = "block";
					gameover.style.zIndex = "2";
					jeu.style.filter = "blur(2px)";
					keep = false;
				}
			}
			else if (pacman.condition == 1) {
				ghosts[i].X = 13 * 16;
				ghosts[i].Y = 14 * 16;
				pacman.score += 100
			}
		}
	}
<<<<<<< Updated upstream
	score.innerHTML = pacman.score;
	life.innerHTML = pacman.life;
}
function play() {
	if (keep) {
		ctx.clearRect(0, 0, 448, 496);
		mapPoints();
		testDirectory();
		run();
=======
	if(pacman.win){
		newGame(pacman.score, pacman.life);
	}
	score.innerHTML = pacman.score;
	
	if(keep){
		requestAnimationFrame(run);
>>>>>>> Stashed changes
	}
	requestAnimationFrame(play);
}

<<<<<<< Updated upstream
function pause() {
	keep = false;
}
function unpause() {
=======
function play(element) {
>>>>>>> Stashed changes
	keep = true;
	newGame(0, 3);
	jeu.style.filter = "none";
	life.innerHTML = "<img src=\"assets/img/pacman-life.png\" alt=\"\" width=\"20px\"><img src=\"assets/img/pacman-life.png\" alt=\"\" width=\"20px\"><img src=\"assets/img/pacman-life.png\" alt=\"\" width=\"20px\">";
	element.style.display="none";
	run();
}
<<<<<<< Updated upstream

play();
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
}

function setPacManLastInput(input){
	pacman.lastInput = input;
}

export {play, setPacManLastInput};
>>>>>>> Stashed changes
