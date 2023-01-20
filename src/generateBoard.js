import gameBoard from './gameBoard.js';

export default function generateBoard() {
  const title = document.querySelector('.title');
  const newGameButton = document.querySelector('.newGameButton');
  const webBoard = document.querySelector('.board');
  title.classList.add('deactivated');
  newGameButton.classList.add('deactivated');
  webBoard.classList.add('activated');
  const board = gameBoard();
  console.log(board.board);
  board.board.forEach((cell) => {
    cell.forEach((subCell) => {
      const boardCell = document.createElement('div');
      boardCell.textContent = 'Cell';
      boardCell.classList = 'cell';
      webBoard.appendChild(boardCell);
    });
  });
}
