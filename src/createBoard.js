export function createBoard() {
  let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];

  const mark = (y, x, marker) => {
    if (board[y][x] !== '') return false;
    board[y][x] = marker;
    return true;
  };

  const reset = () => {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        board[i][j] = '';
      }
    }
  };

  return { getBoard: () => board, mark, reset };
}

