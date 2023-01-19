export default function gameBoard() {
    return {
        board: function() {
            const boardToReturn = new Array(10).fill(new Array(10).fill(0));
            return boardToReturn;
        },
        missedAttacks: [],        
    }
};

const test = gameBoard();
const testBoard = test.board();
console.log(testBoard);