import gameBoard from "./gameBoard";
const gameBoardTest = gameBoard();
const testBoard = gameBoardTest.board();

it('gameBoard generated properly', () => {
    expect(testBoard.board[1][2]).not.toBe(null);
});