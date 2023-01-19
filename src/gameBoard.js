import Ship from './ship.js';

export default function gameBoard(array) {
  function board() {
    const boardToReturn = new Array(10).fill(new Array(10).fill(0));
    return boardToReturn;
  }
  return {
    board: board(),
    missedAttacks: [],
    place(...coordinates) {
      coordinates.forEach((element) => {
        if (element[0] > 9 || element[0] < 0 || element[1] > 9 || element[1] < 0) {
          throw new Error('Coordinate out of bounds. Check all coordinates!');
        } else {
          const first = element[0];
          const second = element[1];
          this.board[first][second] = true;
        }
      });
      array.push(Ship(...coordinates));
    },
    receiveAttack(coordinates) {
      console.log(coordinates);
      const first = coordinates[0];
      const second = coordinates[1];
      array.forEach((element) => {
        element.location.forEach((location) => {
          const stringifiedCoords = JSON.stringify(coordinates);
          if (JSON.stringify(location) === stringifiedCoords) {
            console.log(true);
            element.hit();
          }
        });
        this.missedAttacks.push([first, second]);
      });
    },
  };
}

// Would it be correct to store all ships in an array, and then loop through them and their "locations" to see if a coordinate is contained within a ship?
