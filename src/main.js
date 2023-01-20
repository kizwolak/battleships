import gameBoard from './gameBoard.js';
import Ship from './ship.js';

const test = gameBoard(ships);
test.place([1, 2], [2, 3], [3, 4]);
test.receiveAttack([1, 2], ships);
test.receiveAttack([2, 3], ships);
test.receiveAttack([3, 4], ships);
console.log(JSON.stringify(ships[0].location));
const pleaseWork = ships.forEach((element) => {
  console.log(element.hits);
});
pleaseWork;
