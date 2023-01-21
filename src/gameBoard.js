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
          const stringifiedCoords = JSON.stringify(coordinates);
          if (JSON.stringify(location) === stringifiedCoords) {
            ship.hit();
            toBeReturned = true;
          }
          if (ships.every(() => ship.isSunkenProperty === true)) {
            this.allShipsSunken = true;
          } else {
            this.missedAttacks.push([first, second]);
            toBeReturned = false;
          }
          return toBeReturned;
        });
      });
      return toBeReturned;
    },
  };
}
