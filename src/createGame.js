import { createBoard } from './createBoard.js';
import { markerX, markerO } from './constants.js';

export function createGame() {
  let playerXTurn = true;
  const board = createBoard();
  const score = {
    xWins: 0,
    yWins: 0,
    ties: 0
  }

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
    playerXTurn = true;
  };

  const over = () => { return checkTie() || checkWin()}

  const getMarker = () => playerXTurn ? markerX : markerO;

  const makeMove = (y, x) => {
    const moveMade = board.mark(y, x, getMarker());
    if (!moveMade) return
    if (!over()) {
      playerXTurn = !playerXTurn;
      return
    }
    if (checkWin()) {
      if (playerXTurn)
        score.xWins++;
      else
        score.yWins++;
      playerXTurn = true;
    } else if (checkTie()) {
      score.ties++;
      playerXTurn = true;
    }
  };

  return { move: makeMove, over, reset: resetGame, getBoard: board.getBoard(), getScore: () => score, getMarker };
}

