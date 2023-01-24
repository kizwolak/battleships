import addShipToBoardAI from './addShipToBoardAI.js';

export default function placeShipsAI(board) {
  const board2Ships = document.querySelector('.board2Ships');
  const carrier1 = document.createElement('div');
  carrier1.textContent = 'Carrier (5 cells)';
  const battleship1 = document.createElement('div');
  battleship1.textContent = 'Battleship (4 cells)';
  const cruiser1 = document.createElement('div');
  cruiser1.textContent = 'Cruiser (3 cells)';
  const submarine1 = document.createElement('div');
  submarine1.textContent = 'Submarine (3 cells)';
  const destroyer1 = document.createElement('div');
  destroyer1.textContent = 'Destroyer (2 cells)';
  const carrier2 = document.createElement('div');
  carrier2.textContent = 'Carrier (5 cells)';
  const battleship2 = document.createElement('div');
  battleship2.textContent = 'Battleship (4 cells)';
  const cruiser2 = document.createElement('div');
  cruiser2.textContent = 'Cruiser (3 cells)';
  const submarine2 = document.createElement('div');
  submarine2.textContent = 'Submarine (3 cells)';
  const destroyer2 = document.createElement('div');
  destroyer2.textContent = 'Destroyer (2 cells)';
  const player2Ships = [carrier2, battleship2, cruiser2, submarine2, destroyer2];
  async function getCoordsForShip(e) {
    const response = await addShipToBoardAI(e);
    board.place(response);
    console.log(board.ships);
    e.removeEventListener('click', getCoordsForShip);
    e.style.color = 'green';
  }
  player2Ships.forEach((element) => {
    getCoordsForShip(element);
  });
}