import gameBoard from "./gameBoard";
const gameBoardTest = gameBoard();

it('gameBoard generated properly', () => {
    expect(gameBoardTest.board[1][2]).toBe(0);
});

it('cannot place ships outside of board', () => {
    expect(() => gameBoardTest.place([11, 2])).toThrow(Error);
});

it('take up properly while making sure it is not taken', () => {
    gameBoardTest.place([1, 1], [1, 2], [1, 3]);
    expect(gameBoardTest.board[1][2]).toBe(true);
});

