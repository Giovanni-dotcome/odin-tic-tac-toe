export function createDOM(game, turn, grid, footer) {
  const createBoard = () => {
    const board = game.getBoard;
    grid.innerHTML = ``;
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
      display()
    })

    return cell;
  }

  const display = () => {
    // TODO: inefficient code, create a way in which you do query selector once, and rerender only the cell is clicked (without rerendering all the board)
    turn.innerText = game.getPlayer1Turn() ? 'X' : 'O';
    footer.querySelector('#scoreY').innerText = game.getScore().yWins;
    footer.querySelector('#scoreX').innerText = game.getScore().xWins;
    footer.querySelector('#scoreTies').innerText = game.getScore().ties;
    createBoard();
  };

  return { display };
}

