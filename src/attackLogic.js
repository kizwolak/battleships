import numberGenerator from './numberGenerator.js';

export default function attackLogic(board1, board2) {
  function isArrayInArray(arr, item) {
    let counter = 0;
    const itemAsString = JSON.stringify(item);
    const contains = arr.some((ele) => {
      if (JSON.stringify(ele) === itemAsString) return true;
      if (!(JSON.stringify(ele) === itemAsString)) counter += 1;
    });
    return counter;
  }
  const cpuAttacks = [];
  const board1Cells = document.querySelectorAll('.cell1');
  const board2Cells = document.querySelectorAll('.cell2');
  board2Cells.forEach((cell) => {
    function boardCellClick() {
      const cell2Contents = `[${cell.textContent}]`;
      if (board2.receiveAttack(JSON.parse(cell2Contents)) === true) {
        cell.classList = '';
        cell.classList.remove('empty');
        cell.classList.remove('cell2');
        cell.classList.add('cellTakenByPlayer');
      } else if (board2.receiveAttack(JSON.parse(cell2Contents)) === false) {
        cell.classList = 'empty';
        cell.removeEventListener('click', boardCellClick);
      }
      let sunkenCounter2 = 0;
      board2.ships.forEach((ship) => {
        if (ship.isSunkenProperty === true) sunkenCounter2 += 1;
        if (sunkenCounter2 === 5) alert('Human wins!');
      });
      const randomCPUattack = numberGenerator(0, 9, cpuAttacks);
      console.log(randomCPUattack);
      console.log(board1.board);
      const attackedCellIndex = isArrayInArray(board1.board, randomCPUattack);
      console.log(attackedCellIndex);
      const attackedCell1 = document.getElementsByClassName(`cell1 ${attackedCellIndex}`);
      console.log(attackedCell1);
      const cell1Contents = `[${attackedCell1[0].textContent}]`;
      if (board1.receiveAttack(JSON.parse(cell1Contents)) === true) {
        attackedCell1[0].classList = '';
        attackedCell1[0].classList.remove('empty');
        attackedCell1[0].classList.remove('cell2');
        attackedCell1[0].classList.add('cellTakenByPlayer');
      } else if (board1.receiveAttack(JSON.parse(cell1Contents)) === false) {
        attackedCell1[0].classList = 'empty';
        attackedCell1[0].removeEventListener('click', boardCellClick);
      }
      let sunkenCounter1 = 0;
      board1.ships.forEach((ship) => {
        if (ship.isSunkenProperty === true) sunkenCounter1 += 1;
        if (sunkenCounter1 === 5) alert('Robot wins!');
      });
    }
    cell.addEventListener('click', boardCellClick);
  });
}
