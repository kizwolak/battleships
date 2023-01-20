import gameBoard from './gameBoard';

const gameBoardTest = gameBoard();
gameBoardTest.place([1, 2], [2, 3]);

it('gameBoard generated properly', () => {
  expect(gameBoardTest.board[1][2]).toBe(0);
});

it('cannot place ships outside of board', () => {
  expect(() => gameBoardTest.place([11, 2])).toThrow(Error);
});

it('missed shots should be registered within the array', () => {
  gameBoardTest.receiveAttack([3, 4]);
  expect(gameBoardTest).toMatchObject({ missedAttacks: [[3, 4]] });
});
