import Ship from './ship';

const testShip = Ship([1, 2]);

it('hits registered correctly', () => {
  testShip.hit();
  testShip.hit();
  expect(testShip.hits).toBe(2);
});

it('ship can be sunken', () => {
  testShip.hit();
  expect(testShip.isSunken()).toBe(true);
});
