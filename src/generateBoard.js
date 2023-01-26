import gameBoard from './gameBoard.js';
import placeShips from './placeShips.js';
import placeShipsAI from './placeShipsAI.js';

export default function generateBoard() {
  const title = document.querySelector('.title');
  const newGameButton = document.querySelector('.newGameButton');
  const board1Container = document.querySelector('.board1Container');
  const board2Container = document.querySelector('.board2Container');
  const webBoard1 = document.querySelector('.board1');
  const webBoard2 = document.querySelector('.board2');
  title.classList.add('deactivated');
  newGameButton.classList.add('deactivated');
  board1Container.classList = ('board1container activated');
  board2Container.classList = ('board1container activated');
  const board1 = gameBoard();
  board1.belongsToPlayer = true;
  const board2 = gameBoard();
  board1.board.forEach((cell) => {
    const boardCell = document.createElement('div');
    boardCell.textContent = `${cell[0]}, ${cell[1]}`;
    // function boardCellClick() {
    //   const cellContents = `[${boardCell.textContent}]`;
    //   console.log(cellContents);
    //   return cellContents;
    // }
    boardCell.classList = 'cell1';
    board1.ships.forEach((ship) => {
      ship.location.forEach((location) => {
        const stringifiedCoords = JSON.stringify(cell);
        const stringifiedLocation = JSON.stringify(location);
        if (stringifiedLocation === stringifiedCoords) {
          boardCell.classList = 'cellTakenByPlayer';
        }
      });
    });
    // boardCell.addEventListener('click', boardCellClick);
    webBoard1.appendChild(boardCell);
  });
  board2.board.forEach((cell) => {
    const boardCell = document.createElement('div');
    function boardCellClick() {
      const cellContents = `[${boardCell.textContent}]`;
      console.log(cellContents);
      console.log(board2.receiveAttack(JSON.parse(cellContents)));
      if (board2.receiveAttack(JSON.parse(cellContents)) === true) {
        boardCell.classList = '';
        boardCell.classList.remove('empty');
        boardCell.classList.remove('cell2');
        boardCell.classList.add('cellTakenByPlayer');
      } else if (board2.receiveAttack(JSON.parse(cellContents)) === false) {
        boardCell.classList = 'empty';
        boardCell.removeEventListener('click', boardCellClick);
      }
    }
    boardCell.textContent = `${cell[0]}, ${cell[1]}`;
    boardCell.classList = 'cell2';
    webBoard2.appendChild(boardCell);
    boardCell.addEventListener('click', boardCellClick);
  });
  placeShips(board1);
  placeShipsAI(board2);
  setTimeout(console.log(board2.ships), 2000);
}
