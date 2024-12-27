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

createDOM(createGame(), elements);