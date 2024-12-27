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
    const checkLine = (a, b, c) => a === b && b === c && a !== '';
    const boardState = board.getBoard();

    // Horizontal and vertical checks
    for (let i = 0; i < 3; i++) {
      if (checkLine(boardState[i][0], boardState[i][1], boardState[i][2])) return true;
      if (checkLine(boardState[0][i], boardState[1][i], boardState[2][i])) return true;
    }

    // Diagonal checks
    return checkLine(boardState[0][0], boardState[1][1], boardState[2][2]) ||
      checkLine(boardState[0][2], boardState[1][1], boardState[2][0]);
  };

  const checkTie = () => {
    const boardState = board.getBoard();
    return boardState.flat().every(el => el !== '');
  };

  const resetGame = () => {
    resetBoard();
    score.xWins = score.yWins = score.ties = 0;
  };

  const resetBoard = () => {
    board.reset();
    playerXTurn = true;
  }

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

  return { move: makeMove, over, reset: resetGame, resetBoard, getBoard: board.getBoard(), getScore: () => score, getMarker };
}

