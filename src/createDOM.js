export function createDOM(game) {
  const createBoard = () => {
    const grid = document.createElement('div');
    const board = game.getBoard;
    grid.classList.add('grid');
    grid.id = 'board';

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        grid.append(createCell(i, j, board[i][j]));
      }
    }

    return grid;
  }

  const createCell = (y, x, marker) => {
    const cell = document.createElement('div');
    cell.id = `cell_${y}${x}`;
    cell.classList.add('cell');
    cell.innerText = marker;
    cell.addEventListener('click', () => {
      game.move(y, x, marker)
    })

    return cell;
  }

  const display = () => {
    const board = createBoard();
    const body = document.querySelector('body')
    body.append(board);
  }


  return { display };
}

