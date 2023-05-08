import { Ghost } from './ghost.js';
import { PacMan } from './pac-man.js';
import { map, newMap, mapPoints } from './map.js';
import { ctx } from './share.js';
import { Case } from './case.js';

let score = document.querySelector('#score');
let life = document.querySelector('#life');
let jeu = document.querySelector('#map');
let start = document.querySelector('#start');
let gameover = document.querySelector('#game-over');
let scoreDisplay = document.querySelector('#score-display');

export let level = document.querySelector('#level');

let keep = false;
let pacman;
let ghosts;
let timer;
let mode;
let changeMode;
let ghosts_eat;
let scoreAdd;
let scoreDisplayTimer;

function run() {
	ctx.clearRect(0, 0, 448, 496);
	mapPoints(map);
	pacman.move();

	let gameTimer = Math.floor((performance.now() - timer) / 1000);

	if (gameTimer < 7 || (gameTimer >= 27 && gameTimer < 34) || (gameTimer >= 54 && gameTimer < 59) || (gameTimer >= 79 && gameTimer < 84)) {
		if (mode === 0) {
			changeMode = true;
		}
		mode = 1;
	}
	else {
		if (mode === 1) {
			changeMode = true;
		}
		mode = 0;
	}

	ghosts['pinky'].gate(0);
	ghosts['blinky'].gate(2000);
	ghosts['inky'].gate(7000);
	ghosts['clyde'].gate(17000);

	let targets = getTarget(mode);

	if (pacman.condition == 0 || pacman.resetScared || ghosts_eat == 4) {
		ghosts_eat = 0;
	}

	for (var ghost in ghosts) {
		if (pacman.condition === 0) {
			ghosts[ghost].eaten = false;
			ghosts[ghost].scared = false;
		}
		else {
			if (ghosts[ghost].eaten) {
				ghosts[ghost].scared = false;
			}
			if (!ghosts[ghost].scared && !ghosts[ghost].eaten) {
				changeMode = true;
				ghosts[ghost].scared = true;
			}
		}
		if (changeMode) {
			ghosts[ghost].invertDir = true;
			changeMode = false;
		}
		ghosts[ghost].move(targets[ghost]);
		if (pacman.caseX === ghosts[ghost].caseX && pacman.caseY === ghosts[ghost].caseY) {
			if (pacman.condition === 1 && !ghosts[ghost].eaten) {
				ghosts[ghost].eaten = true;
				ghosts[ghost].deathWalk = true;
				ghosts_eat++;
				if (ghosts_eat == 1) {
					scoreAdd = 200;
				} else if (ghosts_eat == 2) {
					scoreAdd = 400;
				} else if (ghosts_eat == 3) {
					scoreAdd = 800;
				} else if (ghosts_eat == 4) {
					scoreAdd = 1600;
				}
				pacman.score += scoreAdd;
				scoreDisplay.textContent = `+${scoreAdd}`;
				scoreDisplay.style.top = `${pacman.caseY * 16 + document.getElementById('map').getBoundingClientRect().top}px`;
				scoreDisplay.style.left = `${pacman.caseX * 16 + document.getElementById('map').getBoundingClientRect().left}px`;
				scoreDisplay.style.display = 'block';
				scoreDisplayTimer = performance.now();
			}
			else {
				if (keep && !ghosts[ghost].deathWalk) {
					death();
				}
			}
		}
	}
	if (pacman.win) {
		newGame(pacman.score, pacman.life);
	}
	score.innerHTML = pacman.score;

	if (keep) {
		requestAnimationFrame(run);
	}

	if ((performance.now() - scoreDisplayTimer) > 1000) {
		scoreDisplay.style.display = 'none';
	}
}

function play(element) {
	keep = true;
	level.innerHTML = 0;
	newGame(0, 3);
	jeu.style.filter = "none";
	life.innerHTML = "";
	for (var i = 0; i < pacman.life; i++) {
		life.innerHTML += "<img src=\"assets/img/pacman-life.png\" alt=\"\" width=\"20px\">";
	}
	if (element) {
		element.style.display = "none";
	}
	timer = performance.now();
	run();
}

function newGame(initialScore, nbrOfLife, withMap = true, pointsLeft = 244) {
	if (pointsLeft == 244) {
		level.innerHTML++;
	}

	pacman = new PacMan(13 * 16 + 8, 23 * 16 + 8, initialScore, nbrOfLife, pointsLeft);

	ghosts = {
		pinky: new Ghost(13 * 16, 14 * 16, "red", "assets/img/pinky.png"),
		blinky: new Ghost(14 * 16, 14 * 16, "cyan", "assets/img/blinky.png"),
		inky: new Ghost(12 * 16, 14 * 16, "pink", "assets/img/inky.png"),
		clyde: new Ghost(15 * 16, 14 * 16, "orange", "assets/img/clyde.png"),
	};
	if (withMap) {
		newMap();
	}
}

function setPacManLastInput(input) {
	pacman.lastInput = input;
}

function death() {
	keep = false;

	pacman.deathAnimation();
	if (!pacman.death) {
		newGame(pacman.score, pacman.life - 1, false, pacman.pointsLeft);
		life.removeChild(life.children[pacman.life]);

		if (pacman.life === 0) {
			gameover.style.display = "block";
			gameover.style.zIndex = "2";
			jeu.style.filter = "blur(2px)";
			keep = false;
			var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function () {
				if (this.readyState == 4 && this.status == 200) {
					console.log(this.responseText);
				}
			};
			xhttp.open("GET", "save_score.php?score=" + pacman.score, true);
			xhttp.send();
		}
		else {
			keep = true;
			run();
		}
	}
	else {
		requestAnimationFrame(death);
	}
}

function getTarget(mode) { //0 ==> CHASSE //1 ==> BALLADE//PAS DE TARGET EN EFFROI
	let adaptX = [0, 2, 0, -2];
	let adaptY = [-2, 0, 2, 0];

	let pX;
	let pY;
	let iX;
	let iY;
	let bX;
	let bY;
	let cX;
	let cY;

	switch (mode) {
		case 0:
			pX = pacman.caseX;
			pY = pacman.caseY;
			iX = pacman.caseX + adaptX[pacman.direction] * 2;
			iY = pacman.caseY + adaptY[pacman.direction] * 2;
			bX = 2 * (pacman.caseX + adaptX[pacman.direction]) - ghosts['pinky'].caseX;
			bY = 2 * (pacman.caseY + adaptY[pacman.direction]) - ghosts['pinky'].caseY;

			if (Math.sqrt((ghosts['clyde'].caseX - pacman.caseX) ** 2 + (ghosts['clyde'].caseY - pacman.caseY) ** 2) <= 8) {
				cX = 1;
				cY = 29;
			}
			else {
				cX = pacman.caseX;
				cY = pacman.caseY;
			}
			break;
		case 1:
			pX = 26;
			pY = 1;
			iX = 1;
			iY = 1;
			bX = 26;
			bY = 29;
			cX = 1;
			cY = 29;
			break;
	}


	let targets = {
		pinky: new Case(pX, pY),
		inky: new Case(iX, iY),
		blinky: new Case(bX, bY),
		clyde: new Case(cX, cY),
	}

	return targets;
}

export { play, setPacManLastInput };