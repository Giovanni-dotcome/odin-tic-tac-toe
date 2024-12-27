export function createDOM(game, elements) {
  elements.reset.addEventListener('click', () => {
    game.reset()
    createBoard()
  });

  const createBoard = () => {
    setScores()

    const board = game.getBoard;
    elements.grid.innerHTML = ``;

    for (let i = 0; i < 3; i++)
      for (let j = 0; j < 3; j++)
        elements.grid.append(createCell(i, j, board[i][j]));
  }

  const markCell = (y, x, cell) => {
    game.move(y, x, game.getMarker());
    console.log(game.getBoard);
    if (game.over()) {
      game.resetBoard();
      createBoard()
    }
    cell.textContent = game.getBoard[y][x];
  }

  const createCell = (y, x) => {
    const cell = document.createElement('div');
    cell.id = `cell_${y}${x}`;
    cell.classList.add('cell');

    cell.addEventListener('click', () => markCell(y, x, cell));

    return cell;
  }

  const setScores = () => {
    elements.turn.innerText = game.getMarker();
    elements.scoreY.innerText = game.getScore().yWins;
    elements.scoreX.innerText = game.getScore().xWins;
    elements.scoreTies.innerText = game.getScore().ties;
  }

  createBoard();
}

