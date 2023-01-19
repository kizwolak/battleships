export default function gameBoard() {
    function board() {
        const boardToReturn = new Array(10).fill(new Array(10).fill(0));
        return boardToReturn;
    }
    return {
        board: board(),
        place: function(coordinates) {
            return coordinates;
        },
        missedAttacks: [],        
    }
};

const test = gameBoard();
console.log(test.board);
console.log(test.place([[1,2], [2,1]]))