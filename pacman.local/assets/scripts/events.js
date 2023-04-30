import {play, setPacManLastInput} from './game.js';

const start = document.querySelector('#start');
let gameover = document.querySelector('#game-over');

document.addEventListener('keydown', function (event) {
    if (event.code == "ArrowUp" || event.code == "KeyW") {
        setPacManLastInput(0);
    }
    if (event.code == "ArrowRight" || event.code == "KeyD") {
        setPacManLastInput(1);
    }
    if (event.code == "ArrowDown" || event.code == "KeyS") {
        setPacManLastInput(2);
    }
    if (event.code == "ArrowLeft" || event.code == "KeyA") {
        setPacManLastInput(3);
    }
});

start.addEventListener("click", () => {
    play(start);
})
gameover.addEventListener("click", () => {
    play(gameover);
})