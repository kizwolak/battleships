import Ship from './ship.js';

export default function gameBoard() {
  const ships = [];
  function board() {
    const boardToReturn = new Array(10).fill(new Array(10).fill(0));
    return boardToReturn;
  }
  return {
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
      ships.forEach((ship) => {
        ship.location.forEach((location) => {
          const stringifiedCoords = JSON.stringify(coordinates);
          if (JSON.stringify(location) === stringifiedCoords) {
            ship.hit();
          }
          if (ship.hits === ship.location.length) {
            ship.isSunken();
          }
          if (ships.every((ship) => ship.isSunkenProperty === true)) {
            this.allShipsSunken = true;
          }
        });
        this.missedAttacks.push([first, second]);
      });
    },
  };
}
