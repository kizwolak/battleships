import Ship from "./ship.js";

function gameBoard() {
    function board() {
        const boardToReturn = new Array(10).fill(new Array(10).fill(0));
        return boardToReturn;
    }
    return {
        board: board(),
        place: function(...coordinates) {
            let ship = Ship(...coordinates);
            for (const coordinate of coordinates) {
                console.log(coordinate);
                if (coordinate[0] > 9 || coordinate[0] < 0 || coordinate[1] > 9 || coordinate[1] < 0) {
                    throw new Error('Coordinate out of bounds. Check all coordinates!');
                } else {
                    let first = coordinate[0];
                    let second = coordinate[1];
                    this.board[first][second] = Ship([first, second]);
                }
            }
        },
        missedAttacks: [],
        receiveAttack: function (coordinate) {

        }        
    }
};

// Would it be correct to store all ships in an array, and then loop through them and their "locations" to see if a coordinate is contained within a ship? 


const test = gameBoard();
test.place([1, 2]);
console.log(test.board[1][2]);