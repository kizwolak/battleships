import gameBoard from "./gameBoard";
import Ship from "./ship";
const gameBoardTest = gameBoard();

it.only('gameBoard generated properly', () => {
    expect(gameBoardTest.board[1][2]).toBe(0);
});

it('place ships properly while making sure no other place is taken', () => {
    gameBoard.place(Ship(3), [testBoard[1][1], testBoard[1][2], testBoard[1][3]]);
    expect(testBoard[1][2]).toBe(true);
})