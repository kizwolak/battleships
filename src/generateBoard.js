import gameBoard from './gameBoard.js';

export default function generateBoard() {
  const title = document.querySelector('.title');
  const newGameButton = document.querySelector('.newGameButton');
  const webBoard1 = document.querySelector('.board1');
  const webBoard2 = document.querySelector('.board2');
  title.classList.add('deactivated');
  newGameButton.classList.add('deactivated');
  webBoard1.classList.add('activated');
  webBoard2.classList.add('activated');
  const board1 = gameBoard();
  const board2 = gameBoard();
  board1.board.forEach((cell) => {
    cell.forEach(() => {
      const boardCell = document.createElement('div');
      boardCell.textContent = 'Cell';
      boardCell.classList = 'cell';
      webBoard1.appendChild(boardCell);
    });
  });
  board2.board.forEach((cell) => {
    cell.forEach(() => {
      const boardCell = document.createElement('div');
      boardCell.textContent = 'Cell';
      boardCell.classList = 'cell';
      webBoard2.appendChild(boardCell);
    });
  });
}
