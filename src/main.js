import { createDOM } from './createDOM.js';
import { createGame } from './createGame.js';

const elements = {
  turn: document.querySelector('#turn'),
  grid: document.querySelector('#grid'),
  scoreX: document.querySelector('#scoreX'),
  scoreY: document.querySelector('#scoreY'),
  scoreTies: document.querySelector('#scoreTies'),
  reset: document.querySelector('#reset')
}

const game = createGame();
const DOM = createDOM(game, elements);

DOM.display();