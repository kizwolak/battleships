import numberGenerator from './numberGenerator.js';

export default function attackLogic(board1, board2) {
  function isArrayInArray(arr, item) {
    let counter = 0;
    const itemAsString = JSON.stringify(item);
    const contains = arr.some((ele) => {
      if (JSON.stringify(ele) === itemAsString) return true;
      if (!(JSON.stringify(ele) === itemAsString)) counter += 1;
    });
    if (counter >= arr.length) return false;
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
      console.log((randomCPUattack));
      if (isArrayInArray(cpuAttacks, randomCPUattack)) {
        randomCPUattack = numberGenerator(0, 9, cpuAttacks);
        console.log('contains: true');
      }
      // console.log(randomCPUattack);
      // const cellTakenByPlayer2 = document.getElementsByClassName('cellTakenByPlayer2');
      // const test = (JSON.parse(`[${cellTakenByPlayer2[0].innerHTML}]`));
      // console.log(test);
      // console.log(`test0: ${test[0]}`);
      function classChecker() {
        let toBeReturned;
        const cellTakenByPlayer2 = document.getElementsByClassName('cellTakenByPlayer2');
        const cellTakenByPlayer3 = document.getElementsByClassName('cellTakenByPlayer3');
        const cellTakenByPlayer3Cruiser = document.getElementsByClassName('cellTakenByPlayer3Cruiser');
        const cellTakenByPlayer4 = document.getElementsByClassName('cellTakenByPlayer4');
        const cellTakenByPlayer5 = document.getElementsByClassName('cellTakenByPlayer5');
        const playerCell1 = document.getElementsByClassName('cell1');
        for (let i = 0; i < cellTakenByPlayer2.length; i++) {
          const test1 = (JSON.parse(`[${cellTakenByPlayer2[i].textContent}]`));
          console.log(test1[0]);
          console.log(test1[1]);
          console.log(randomCPUattack[0]);
          console.log(randomCPUattack[1]);
          if (test1[0] === randomCPUattack[0] && test1[1] === randomCPUattack[1]) {
            console.log(cellTakenByPlayer2[i].textContent);
            toBeReturned = document.getElementsByClassName(`cellTakenByPlayer2 ${i}`);
          }
        }
        for (let j = 0; j < cellTakenByPlayer3.length; j++) {
          const test1 = (JSON.parse(`[${cellTakenByPlayer3[j].textContent}]`));
          console.log(test1);
          if (test1[0] === randomCPUattack[0] && test1[1] === randomCPUattack[1]) {
            toBeReturned = document.getElementsByClassName(`cellTakenByPlayer3 ${j}`);
          }
        }
        for (let k = 0; k < cellTakenByPlayer3Cruiser.length; k++) {
          const test1 = (JSON.parse(`[${cellTakenByPlayer3Cruiser[k].textContent}]`));
          console.log(test1);
          if (test1[0] === randomCPUattack[0] && test1[1] === randomCPUattack[1]) {
            toBeReturned = document.getElementsByClassName(`cellTakenByPlayer3Cruiser ${k}`);
          }
        }
        for (let l = 0; l < cellTakenByPlayer4.length; l++) {
          const test1 = (JSON.parse(`[${cellTakenByPlayer4[l].textContent}]`));
          console.log(test1);
          if (test1[0] === randomCPUattack[0] && test1[1] === randomCPUattack[1]) {
            toBeReturned = document.getElementsByClassName(`cellTakenByPlayer4 ${l}`);
          }
        }
        for (let m = 0; m < cellTakenByPlayer5.length; m++) {
          const test1 = (JSON.parse(`[${cellTakenByPlayer5[m].textContent}]`));
          console.log(test1);
          if (test1[0] === randomCPUattack[0] && test1[1] === randomCPUattack[1]) {
            toBeReturned = document.getElementsByClassName(`cellTakenByPlayer5 ${m}`);
          }
        }
        if (toBeReturned === undefined) {
          const attackedCellIndex = isArrayInArray(board1.board, randomCPUattack);
          console.log(attackedCellIndex);
          const middle = document.getElementsByClassName(`cell1 ${attackedCellIndex}`);
          toBeReturned = middle[0];
          console.log(toBeReturned);
        }
        console.log(toBeReturned);
        return toBeReturned;
      }
      console.log(randomCPUattack);
      const cellToBeModified = classChecker();
      // console.log(`cellToBeModified: ${cellToBeModified[0].textContent[0]}`);
      const cell1Contents = `[${cellToBeModified.textContent}]`;
      console.log(cell1Contents);
      console.log(`cell1Contents: ${cell1Contents}`);
      if (board1.receiveAttack(randomCPUattack) === true) {
        console.log('computer hit!');
        cellToBeModified.classList = '';
        cellToBeModified.classList.remove('empty');
        cellToBeModified.classList.remove('cell2');
        cellToBeModified.classList.add('cellTakenByComputer');
      } else {
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
