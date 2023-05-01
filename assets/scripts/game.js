import {Ghost} from './ghost.js';
import {PacMan} from './pac-man.js';
import {map, newMap, mapPoints} from './map.js';
import {ctx} from './share.js';

let score = document.querySelector('#score');
let life = document.querySelector('#life');
let jeu = document.querySelector('#map');
const start = document.querySelector('#start');
let gameover = document.querySelector('#game-over');

let keep = false;
let pacman;
let ghosts;

function run() {
	ctx.clearRect(0, 0, 448, 496);
	mapPoints(map);
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
				death();
			}
			else if (pacman.condition == 1) {
				ghosts[ghost].X = 13 * 16;
				ghosts[ghost].Y = 14 * 16;
				pacman.score += 100
			}
		}
	}
	if(pacman.win){
		newGame(pacman.score, pacman.life);
	}
	score.innerHTML = pacman.score;
	
	if(keep){
		requestAnimationFrame(run);
	}
}

function play(element) {
	keep = true;
	newGame(0, 3);
	jeu.style.filter = "none";
	life.innerHTML = "";
	for(var i = 0; i < pacman.life; i++){
		life.innerHTML += "<img src=\"assets/img/pacman-life.png\" alt=\"\" width=\"20px\">";
	}
	if(element){
		element.style.display="none";
	}
	run();
}

function newGame(initialScore, nbrOfLife, withMap = true){
	pacman = new PacMan(13 * 16 + 8, 23 * 16 + 8, initialScore, nbrOfLife);
	
	ghosts = {
		pinky: new Ghost(13 * 16, 14 * 16, "red", "assets/img/pinky.png"),
		blinky: new Ghost(14 * 16, 14 * 16, "cyan", "assets/img/blinky.png"),
		inky: new Ghost(12 * 16, 14 * 16, "pink", "assets/img/inky.png"),
		clyde: new Ghost(15 * 16, 14 * 16, "orange", "assets/img/clyde.png"),
	};
	if(withMap){
		newMap();
	}
}

function setPacManLastInput(input){
	pacman.lastInput = input;
}

function death(){
	keep = false;
	
	pacman.deathAnimation();
	if(!pacman.death){
		newGame(pacman.score, pacman.life - 1, false);
		life.removeChild(life.children[pacman.life]);

		if (pacman.life == 0) {
			gameover.style.display = "block";
			gameover.style.zIndex = "2";
			jeu.style.filter = "blur(2px)";
			keep = false;
		}
		else{
			keep = true;
			run();
		}
	}
	else{
		requestAnimationFrame(death);
	}
}
export {play, setPacManLastInput};