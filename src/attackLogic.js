import numberGenerator from './numberGenerator.js';

export default function attackLogic(board1, board2) {
  function isArrayInArray(arr, item) {
    const itemAsString = JSON.stringify(item);
    const contains = arr.some((ele) => JSON.stringify(ele) === itemAsString);
    return contains;
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
    //   if (isArrayInArray(board1.board[numberGenerator[0]][numberGenerator[1]])) console.log('exists in board!');
    //   if (board2.receiveAttack(JSON.parse(cell1Contents)) === true) {
    //     cell1.classList = '';
    //     cell1.classList.remove('empty');
    //     cell1.classList.remove('cell2');
    //     cell1.classList.add('cellTakenByPlayer');
    //   } else if (board2.receiveAttack(JSON.parse(cell1Contents)) === false) {
    //     cell1.classList = 'empty';
    //     cell1.removeEventListener('click', boardCellClick);
    //   }
    //   const sunkenCounter1 = 0;
    //   board1.ships.forEach((ship) => {
    //     if (ship.isSunkenProperty === true) sunkenCounter1 += 1;
    //     if (sunkenCounter1 === 5) alert('Robot wins!');
    //   });
    }
    cell.addEventListener('click', boardCellClick);
  });
}
