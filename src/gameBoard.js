export default function gameBoard() {
    function board() {
        const boardToReturn = new Array(10).fill(new Array(10).fill(0));
        return boardToReturn;
    }
    return {
        board: board(),
        place: function(coordinates) {
            for (const coordinate of coordinates) {
                if (coordinate[0] > 9 || coordinate[0] < 0 || coordinate[1] > 9 || coordinate[1] < 0) {
                    throw new Error('Coordinate out of bounds');
                }
            }
        },
        missedAttacks: [],        
    }
};

const test = gameBoard();
console.log(test.board);
