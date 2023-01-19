import gameBoard from "./gameBoard";
const gameBoardTest = gameBoard();
const testBoard = gameBoardTest.board();

it('gameBoard generated properly', () => {
    expect(testBoard[1][2]).toBe(0);
});