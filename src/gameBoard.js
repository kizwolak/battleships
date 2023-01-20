import Ship from './ship.js';

export default function gameBoard() {
  const ships = [];
  function board() {
    const boardToReturn = new Array(10).fill(new Array(10).fill(0));
    return boardToReturn;
  }
  return {
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
          if (ship.hits === ship.length) {
            console.log('Sunken!');
            ship.isSunken();
          }
          ships.forEach((ship) => {
            if (ships.every((ship) => ship.isSunkenProperty === true)) return true;
          });
        });
        this.missedAttacks.push([first, second]);
      });
    },
  };
}
