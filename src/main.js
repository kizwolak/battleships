import gameBoard from './gameBoard.js';
import Ship from './ship.js';

const test = gameBoard();
test.place([1, 2], [2, 3], [3, 4]);
test.receiveAttack([1, 2]);
test.receiveAttack([2, 3]);
test.receiveAttack([3, 4]);
console.log(test.allShipsSunken);
