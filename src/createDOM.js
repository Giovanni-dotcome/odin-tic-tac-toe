import { markerX, markerO } from './constants.js';

export function createDOM(game, elements) {
  elements.reset.addEventListener('click', () => {
    game.reset()
    display()
  });

  const createBoard = () => {
    const board = game.getBoard;
    elements.grid.innerHTML = ``;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        elements.grid.append(createCell(i, j, board[i][j]));
      }
    }
    return elements.grid;
  }

  const createCell = (y, x, marker) => {
    const cell = document.createElement('div');
    cell.id = `cell_${y}${x}`;
    cell.classList.add('cell');
    cell.innerText = marker;
    cell.addEventListener('click', () => {
      game.move(y, x, marker)
      display()
    })

    return cell;
  }

  const display = () => {
    elements.turn.innerText = game.getPlayerXTurn() ? markerX : markerO;
    elements.scoreY.innerText = game.getScore().yWins;
    elements.scoreX.innerText = game.getScore().xWins;
    elements.scoreTies.innerText = game.getScore().ties;
    createBoard();
  };

  display();
}

