import { play, setPacManLastInput } from './game.js';

let start = document.querySelector('#start');
let gameover = document.querySelector('#game-over');
let hideInfos = document.querySelector('#hide');
let infos = document.querySelector('#infosPoints');

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

hideInfos.addEventListener("click", () => {
    if (infos.style.display != 'block') {
        infos.style.display = 'block';
        hideInfos.textContent = 'Cacher infos';
    } else {
        infos.style.display = 'none';
        hideInfos.textContent = 'Afficher infos';
    }
})