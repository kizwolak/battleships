import { experiments } from "webpack";
import Ship from "./src/ship";

const testShip = Ship(3); 

it('hits registered correctly', () => {
    testShip.hit();
    testShip.hit();
    expect(testShip.hits).toBe(2);
});

it('ship can be sunk', () => {
    testShip.hit();
    testShip.hit();
    testShip.hit();
    expect(testShip.isSunk()).toBe(true);
});