import numberGenerator from './numberGenerator.js';

export default function attackLogic(board1, board2) {
  function isArrayInArray(arr, item) {
    let counter = 0;
    const itemAsString = JSON.stringify(item);
    const contains = arr.some((ele) => {
      if (JSON.stringify(ele) === itemAsString) return true;
      if (!(JSON.stringify(ele) === itemAsString)) counter += 1;
    });
    if ((counter) => arr.length) return false;
    return counter;
  }
  function isArrayInArrayOriginal(arr, item) {
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
      let randomCPUattack = numberGenerator(0, 9, cpuAttacks);
      console.log(JSON.stringify(randomCPUattack));
      console.log(JSON.stringify(randomCPUattack[0]));
      if (isArrayInArray(cpuAttacks, randomCPUattack)) {
        randomCPUattack = numberGenerator(0, 9, cpuAttacks);
        console.log('contains: true');
      }
      console.log(randomCPUattack);
      const cellTakenByPlayer2 = document.getElementsByClassName('cellTakenByPlayer2');
      const test = (JSON.parse(`[${cellTakenByPlayer2[0].innerHTML}]`));
      console.log(test);
      function classChecker() {
        let toBeReturned;
        const cellTakenByPlayer2 = document.getElementsByClassName('cellTakenByPlayer2');
        const cellTakenByPlayer3 = document.getElementsByClassName('cellTakenByPlayer3');
        const cellTakenByPlayer3Cruiser = document.getElementsByClassName('cellTakenByPlayer3Cruiser');
        const cellTakenByPlayer4 = document.getElementsByClassName('cellTakenByPlayer4');
        const cellTakenByPlayer5 = document.getElementsByClassName('cellTakenByPlayer5');
        for (let i = 0; i < cellTakenByPlayer2.length; i++) {
          if (cellTakenByPlayer2[i].textContent === JSON.stringify(randomCPUattack)) {
            console.log(cellTakenByPlayer2[i].textContent);
            toBeReturned = cellTakenByPlayer2[i];
          }
        }
        for (let i = 0; i < cellTakenByPlayer3.length; i++) {
          if (cellTakenByPlayer3[i].textContent === JSON.stringify(randomCPUattack)) {
            toBeReturned = cellTakenByPlayer2[i];
          }
        }
        for (let i = 0; i < cellTakenByPlayer3Cruiser.length; i++) {
          if (cellTakenByPlayer3Cruiser[i].textContent === JSON.stringify(randomCPUattack)) {
            toBeReturned = cellTakenByPlayer3Cruiser[i];
          }
        }
        for (let i = 0; i < cellTakenByPlayer4.length; i++) {
          if (cellTakenByPlayer4[i].textContent === JSON.stringify(randomCPUattack)) {
            toBeReturned = cellTakenByPlayer4[i];
          }
        }
        for (let i = 0; i < cellTakenByPlayer5.length; i++) {
          if (cellTakenByPlayer5[i].textContent === JSON.stringify(randomCPUattack)) {
            toBeReturned = cellTakenByPlayer5[i];
          }
        }
        return toBeReturned;
      }
      console.log(randomCPUattack);
      const attackedCellIndex = isArrayInArray(board1.board, randomCPUattack);
      console.log(attackedCellIndex);
      const attackedCell1 = board1.board[attackedCellIndex];
      console.log(attackedCell1);
      const cellToBeModified = classChecker();
      console.log(`cellToBeModified: ${cellToBeModified}`);
      // const cell1Contents = `[${attackedCell1.textContent}]`;
      if (board1.receiveAttack(JSON.parse(`[${attackedCell1[0]}, ${attackedCell1[1]}]`)) === true) {
        console.log('computer hit!');
        cellToBeModified.classList = '';
        cellToBeModified.classList.remove('empty');
        cellToBeModified.classList.remove('cell2');
        attackedCell1.classList.add('cellTakenByComputer');
      } else if (board1.receiveAttack((`[${attackedCell1[0]}, ${attackedCell1[1]}]`)) === false) {
        cpuAttacks.push(randomCPUattack);
        cellToBeModified.classList = 'empty';
        cellToBeModified.removeEventListener('click', boardCellClick);
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
