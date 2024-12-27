import { createPlayer } from './createPlayer.js';
import { createDOM } from './createDOM.js';
import { createGame } from './createGame.js';

const markerX = "\u2717";
const markerO = "\u2B58";

// Example usage
const turn = document.querySelector('#turn');
const grid = document.querySelector('#grid');
const footer = document.querySelector('footer');
const reset = document.querySelector('#reset');
reset.addEventListener('click', () => {
  game.reset()
  DOM.display()
});
const gio = createPlayer('Gio', markerX);
const vale = createPlayer('Vale', markerO);
const game = createGame(gio, vale);
const DOM = createDOM(game, turn, grid, footer);

DOM.display();
//