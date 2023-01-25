import addShipToBoardAI from './addShipToBoardAI.js';

export default function placeShipsAI(board) {
  const board2Ships = document.querySelector('.board2Ships');
  const takenCells = [];
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
  player2Ships.forEach((element) => {
    board2Ships.appendChild(element);
  });
  async function getCoordsForShip(e) {
    const response = await addShipToBoardAI(e, takenCells);
    response.forEach((cell) => takenCells.push(cell));
    board.place(response);
    e.removeEventListener('click', getCoordsForShip);
    e.style.color = 'green';
    console.log(board.ships);
  }
  getCoordsForShip(carrier2);
  getCoordsForShip(battleship2);
  getCoordsForShip(cruiser2);
  getCoordsForShip(submarine2);
  getCoordsForShip(destroyer2);
}
