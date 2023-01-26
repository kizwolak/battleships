import Ship from './ship.js';

export default function gameBoard() {
  const ships = [];
  function board() {
    const boardToReturn = [];
    // const boardToReturn = new Array(10).fill(new Array(10).fill(0));
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        boardToReturn.push([i, j]);
      }
    }
    return boardToReturn;
  }
  function isArrayInArray(arr, item) {
    const itemAsString = JSON.stringify(item);
    const contains = arr.some((ele) => JSON.stringify(ele) === itemAsString);
    return contains;
  }
  return {
    belongsToPlayer: false,
    ships,
    board: board(),
    allShipsSunken: false,
    missedAttacks: [],
    place(...coordinates) {
      coordinates.forEach((element) => {
        if (element[0] > 9 || element[0] < 0 || element[1] > 9 || element[1] < 0) {
          throw new Error('Coordinate out of bounds. Check all coordinates!');
        }
      });
      ships.push(Ship(...coordinates));
    },
    receiveAttack(coordinates) {
      let sunkenCounter = 0;
      let toBeReturned = false;
      let called = false;
      ships.forEach((ship) => {
        if (isArrayInArray(ship.location[0], coordinates)) {
          ship.hit();
          called = true;
        }
        if (ship.isSunkenProperty === true) sunkenCounter += 1;
      });
      if (sunkenCounter === 5) alert('Game ended!');
      if (called === true) toBeReturned = true;
      return toBeReturned;
    },
  };
}
