import { createPlayer } from './createPlayer.js';
import { createDOM } from './createDOM.js';
import { createGame } from './createGame.js';

const markerX = "\u2717";
const markerO = "\u2B58";
const elements = {
  turn: document.querySelector('#turn'),
  grid: document.querySelector('#grid'),
  scoreX: document.querySelector('#scoreX'),
  scoreY: document.querySelector('#scoreY'),
  scoreTies: document.querySelector('#scoreTies'),
  reset: document.querySelector('#reset')
}


const gio = createPlayer('Gio', markerX);
const vale = createPlayer('Vale', markerO);
const game = createGame(gio, vale);
const DOM = createDOM(game, elements);

DOM.display();