import css from './style.css';
import gameBoard from './gameBoard.js';
import Ship from './ship.js';
import generateBoard from './generateBoard.js';
import placeShips from './placeShips.js';

const newGameButton = document.querySelector('.newGameButton');
newGameButton.addEventListener('click', () => {
  generateBoard();
});
