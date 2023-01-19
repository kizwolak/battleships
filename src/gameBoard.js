import Ship from "./ship";

export default function gameBoard() {
    function board() {
        const boardToReturn = new Array(10).fill(new Array(10).fill(0));
        return boardToReturn;
    }
    return {
        board: board(),
        place: function(...coordinates) {
            for (const coordinate of coordinates) {
                console.log(coordinate);
                if (coordinate[0] > 9 || coordinate[0] < 0 || coordinate[1] > 9 || coordinate[1] < 0) {
                    throw new Error('Coordinate out of bounds');
                } else {
                    let first = coordinate[0];
                    let second = coordinate[1];
                    this.board[first][second] = true;
                }
            }
            return Ship(...coordinates);
        },
        missedAttacks: [],        
    }
};

const test = gameBoard();
console.log(test.board);
