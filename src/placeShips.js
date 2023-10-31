import addShipToBoard from "./addShipToBoard.js";
import attackLogic from "./attackLogic.js";

export default function placeShips(board, oppBoard) {
  const board1Ships = document.querySelector(".board1Ships");
  const carrier1 = document.createElement("div");
  carrier1.textContent = "Carrier (5 cells)";
  const battleship1 = document.createElement("div");
  battleship1.textContent = "Battleship (4 cells)";
  const cruiser1 = document.createElement("div");
  cruiser1.textContent = "Cruiser (3 cells)";
  const submarine1 = document.createElement("div");
  submarine1.textContent = "Submarine (3 cells)";
  const destroyer1 = document.createElement("div");
  destroyer1.textContent = "Destroyer (2 cells)";
  const player1Ships = [
    carrier1,
    battleship1,
    cruiser1,
    submarine1,
    destroyer1,
  ];
  const carrier2 = document.createElement("div");
  carrier2.textContent = "Carrier (5 cells)";
  const battleship2 = document.createElement("div");
  battleship2.textContent = "Battleship (4 cells)";
  const cruiser2 = document.createElement("div");
  cruiser2.textContent = "Cruiser (3 cells)";
  const submarine2 = document.createElement("div");
  submarine2.textContent = "Submarine (3 cells)";
  const destroyer2 = document.createElement("div");
  destroyer2.textContent = "Destroyer (2 cells)";
  async function getCoordsForShip(e) {
    const response = await addShipToBoard(e);
    board.place(response);
    e.target.removeEventListener("click", getCoordsForShip);
    e.target.style.color = "green";
    if (board.ships.length === 5) attackLogic(board, oppBoard);
  }
  player1Ships.forEach((element) => {
    board1Ships.appendChild(element);
    element.addEventListener("click", getCoordsForShip);
  });
}
