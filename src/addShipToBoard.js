export default async function addShipToBoard(e) {
  const arrayOfCoords = [];
  let numberOfCells = 0;
  let counter = 0;
  let firstToBeAnalysed = 0;
  let secondToBeAnalysed = 1;
  e.target.style.color = 'yellow';
  return new Promise((resolve, reject) => {
    if (e.target.textContent.includes('2')) {
      numberOfCells = 2;
    } else if (e.target.textContent.includes('3')) {
      numberOfCells = 3;
    } else if (e.target.textContent.includes('4')) {
      numberOfCells = 4;
    } else if (e.target.textContent.includes('5')) {
      numberOfCells = 5;
    }
    const allP1Cells = document.querySelectorAll('.cell1');
    function coordinates(f) {
      console.log(arrayOfCoords.slice(firstToBeAnalysed, secondToBeAnalysed));
      const toBeAdded = JSON.parse(`[${f.target.textContent}]`);
      if (arrayOfCoords.length === 1) {
        const toCompare = arrayOfCoords.slice(firstToBeAnalysed, secondToBeAnalysed);
        console.log(`toCompare: ${toCompare[0]}`);
        console.log(`toBeAdded: ${toBeAdded}`);
        console.log(`firstToBeAnalysed: ${firstToBeAnalysed}`);
        console.log(`secondToBeAnalysed: ${secondToBeAnalysed}`);
        if (toCompare[0][0] - toBeAdded[0] > 1 || toCompare[0][0] - toBeAdded[0] < -1 || toCompare[0][1] - toBeAdded[1] > 1 || toCompare[0][1] - toBeAdded[1] < -1 || (toCompare[0][0] - toBeAdded[0] == -1 && toCompare[0][1] - toBeAdded[1] === 1) || (toCompare[0][0] - toBeAdded[0] === 1 && toCompare[0][1] - toBeAdded[1] === 1) || (toCompare[0][0] - toBeAdded[0] === -1 && toCompare[0][1] - toBeAdded[1] === -1) || (toCompare[0][0] - toBeAdded[0] === 1 && toCompare[0][1] - toBeAdded[1] === -1)) {
          console.log('error works!');
          return;
        }
        firstToBeAnalysed += 1;
        secondToBeAnalysed += 1;
        console.log(toCompare);
      } else if (arrayOfCoords.length > 1) {
        const toCompare1 = arrayOfCoords.slice(firstToBeAnalysed, secondToBeAnalysed);
        const toCompare0 = arrayOfCoords.slice(0, 1);
        if ((toCompare1[0][0] - toBeAdded[0] !== 0 && toCompare1[0][1] - toBeAdded[1] !== 0) || ((toCompare1[0][0] - toBeAdded[0] >= 1 && toCompare1[0][1] - toBeAdded[1] >= 1) || (toCompare1[0][0] - toBeAdded[0] <= -1 && toCompare1[0[1] - toBeAdded[1] <= -1]) || (toCompare1[0][0] - toBeAdded[0] >= 1 && toCompare1[0][1] - toBeAdded[1] <= -1) || (toCompare1[0][0] - toBeAdded[0] <= -1 && toCompare1[0][1] - toBeAdded[1] >= 1))) {
          return;
        } if ((toCompare0[0][0] - toBeAdded[0] >= 1 && toCompare0[0][1] - toBeAdded[0] >= 1) || (toCompare0[0][0] - toBeAdded[0] <= -1 && toCompare0[0][1] - toBeAdded[1] <= -1) || (toCompare0[0][0] - toBeAdded[0] >= 1 && toCompare0[0][1] - toBeAdded[1] <= -1) || (toCompare0[0][0] - toBeAdded[0] <= -1 && toCompare0[0][1] - toBeAdded[1] >= 1)) { return; }
        firstToBeAnalysed += 1;
        secondToBeAnalysed += 1;
        console.log(`increased First: ${firstToBeAnalysed}`);
      }
      f.target.classList = 'cellTakenByPlayer';
      arrayOfCoords.push(toBeAdded);
      counter += 1;
      if (numberOfCells === counter) {
        allP1Cells.forEach((cell) => {
          cell.removeEventListener('click', coordinates);
        });
        resolve(arrayOfCoords);
      }
    }
    allP1Cells.forEach((cell) => {
      cell.addEventListener('click', coordinates);
    });
  });

//   const promise = new Promise((resolve, reject) => {
//     if (arrayOfCoords.length === numberOfCells) {
//       resolve();
//     }
//   });
//   promise.then((value) => arrayToBeReturned = value);
//   promise.then
}
