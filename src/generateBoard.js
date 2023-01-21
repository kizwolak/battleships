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
  board1.place([1, 2]);
  board1.belongsToPlayer = true;
  const board2 = gameBoard();
  board2.place([1, 2]);
  board1.board.forEach((cell) => {
    const boardCell = document.createElement('div');
    boardCell.textContent = `${cell[0]}, ${cell[1]}`;
    boardCell.classList = 'cell';
    board1.ships.forEach((ship) => {
      ship.location.forEach((location) => {
        const stringifiedCoords = JSON.stringify(cell);
        const stringifiedLocation = JSON.stringify(location);
        if (stringifiedLocation === stringifiedCoords) {
          boardCell.classList = 'cellTakenByPlayer';
        }
      });
    });
    webBoard1.appendChild(boardCell);
  });
  board2.board.forEach((cell) => {
    const boardCell = document.createElement('div');
    boardCell.textContent = `${cell[0]}, ${cell[1]}`;
    boardCell.classList = 'cell';
    webBoard2.appendChild(boardCell);
    boardCell.addEventListener('click', () => {
      const cellContents = `[${boardCell.textContent}]`;
      console.log(cellContents);
      if (board2.receiveAttack(JSON.parse(cellContents)) === true) boardCell.classList = 'cellTakenByPlayer';
    });
  });
}
