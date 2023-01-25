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
      const first = coordinates[0];
      const second = coordinates[1];
      let toBeReturned;
      ships.forEach((ship) => {
        ship.location.forEach((location) => {
          if (isArrayInArray(location, coordinates)) {
            ship.hit();
            console.log('hit!');
            toBeReturned = true;
          }
          if (isArrayInArray(location, coordinates)) {
            this.allShipsSunken = true;
            console.log('end!');
          } else {
            this.missedAttacks.push([first, second]);
            console.log('miss!');
            toBeReturned = false;
          }
        });
      });
      return toBeReturned;
    },
  };
}
