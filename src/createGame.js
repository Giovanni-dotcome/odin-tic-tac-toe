import { createBoard } from './createBoard.js';

export function createGame(player1, player2) {
  let player1Turn = true;
  const board = createBoard();

  const checkWin = () => {
    const boardState = board.getBoard();

    // Check horizontal wins
    for (let i = 0; i < 3; i++) {
      if (boardState[i][0] === boardState[i][1] &&
        boardState[i][1] === boardState[i][2] &&
        boardState[i][0] !== '') {
        return true;
      }
    }

    // Check vertical wins
    for (let i = 0; i < 3; i++) {
      if (boardState[0][i] === boardState[1][i] &&
        boardState[1][i] === boardState[2][i] &&
        boardState[0][i] !== '') {
        return true;
      }
    }

    // Check diagonal wins
    if (boardState[0][0] === boardState[1][1] &&
      boardState[1][1] === boardState[2][2] &&
      boardState[0][0] !== '') {
      return true;
    }
    return boardState[0][2] === boardState[1][1] &&
      boardState[1][1] === boardState[2][0] &&
      boardState[0][2] !== '';
  };

  const checkTie = () => {
    const boardState = board.getBoard();
    return boardState.flat().every(el => el !== '');
  };

  const resetGame = () => {
    board.reset();
    player1Turn = true;
  };

  const makeMove = (y, x) => {
    const moveMade = board.mark(y, x, player1Turn ? player1.marker : player2.marker);
    board.display();

    if (checkWin()) {
      console.log(`The winner is ${player1Turn ? player1.name : player2.name}`);
      resetGame();
    } else if (checkTie()) {
      console.log("It's a tie!");
      resetGame();
    } else {
      if (moveMade) {
        player1Turn = !player1Turn;
      }
    }
  };

  return { move: makeMove, checkWin, reset: resetGame, getBoard: board.getBoard() };
}

