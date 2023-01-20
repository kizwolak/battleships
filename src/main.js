import './style.css';
import gameBoard from './gameBoard.js';
import Ship from './ship.js';

const board = gameBoard();
console.log(board.board);
const webBoard = document.querySelector('.board');
board.board.forEach((cell) => {
  cell.forEach((subCell) => {
    const boardCell = document.createElement('div');
    boardCell.textContent = 'Cell';
    webBoard.appendChild(boardCell);
  });
});

const newGameButton = document.querySelector('.newGameButton');
newGameButton.addEventListener('click');
