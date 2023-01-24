export default async function addShipToBoard(e) {
  const arrayOfCoords = [];
  let numberOfCells = 0;
  let counter = 0;
  e.target.style.color = 'yellow';
  const checkMarkDiv = document.createElement('div');
  checkMarkDiv.textContent = '✔️';
  const crossMarkDiv = document.createElement('div');
  crossMarkDiv.textContent = '❌';
  e.target.appendChild(checkMarkDiv);
  e.target.appendChild(crossMarkDiv);
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
    let classToBeAdded = `cellTakenByPlayer${numberOfCells}`;
    if (e.target.textContent.includes('Cruiser')) {
      classToBeAdded = `cellTakenByPlayer${numberOfCells}Cruiser`;
    }
    const allP1Cells = document.querySelectorAll('.cell1');
    function coordinates(f) {
      const toCompare1 = arrayOfCoords.slice(1, 2);
      const toCompare0 = arrayOfCoords.slice(0, 1);
      const toBeAdded = JSON.parse(`[${f.target.textContent}]`);
      if (arrayOfCoords.length === 1) {
        if ((toCompare0[0][0] - toBeAdded[0] === 1 || toCompare0[0][0] - toBeAdded[0] === -1) && (toCompare0[0][1] - toBeAdded[1] !== 0)) {
          return;
        }
        if ((toCompare0[0][0] - toBeAdded[0] !== 0) && (toCompare0[0][1] - toBeAdded[1] === 1 && toCompare0[0][1] - toBeAdded[1] === 1)) {
          return;
        }
      } else if (arrayOfCoords.length > 1) {
        const toCompare2 = arrayOfCoords.slice((arrayOfCoords.length - 1), (arrayOfCoords.length - 0));
        if ((toCompare0[0][0] - toCompare1[0][0] === 1 || toCompare0[0][0] - toCompare1[0][0] === -1)) {
          if (toCompare2[0][1] - toBeAdded[1] >= 1 || toCompare2[0][1] - toBeAdded[1] <= -1) {
            console.log('pierwszy if');
            return;
          } if (toCompare2[0][0] - toBeAdded[0] > 1 || toCompare2[0][0] - toBeAdded[0] < -1) {
            console.log(`toCompare2: ${toCompare2}`);
            console.log(`toBeAdded: ${toBeAdded}`);
            if (toCompare0[0][0] - toCompare1[0][0] === 1) {
              if (toBeAdded[0] - toCompare0[0][0] !== 1) {
                console.log('drugi if');
                return;
              }
            } if (toCompare0[0][0] - toCompare1[0][0] === -1) {
              if (toCompare0[0][0] - toBeAdded[0] !== 1) {
                console.log(toCompare0);
                console.log(toBeAdded);
                console.log('trzeci if');
                return;
              }
            }
          }
        }
        if ((toCompare0[0][1] - toCompare1[0][1] === 1 || toCompare0[0][1] - toCompare1[0][1] === -1)) {
          if (toCompare2[0][0] - toBeAdded[0] >= 1 || toCompare2[0][0] - toBeAdded[0] <= -1) {
            console.log('pierwszy if');
            return;
          } if (toCompare2[0][1] - toBeAdded[1] > 1 || toCompare2[0][1] - toBeAdded[1] < -1) {
            console.log(`toCompare2: ${toCompare2}`);
            console.log(`toBeAdded: ${toBeAdded}`);
            if (toCompare0[0][1] - toCompare1[0][1] === 1) {
              if (toBeAdded[1] - toCompare0[0][1] !== 1) {
                console.log('drugi if');
                return;
              }
            } if (toCompare0[0][1] - toCompare1[0][1] === -1) {
              if (toCompare0[0][1] - toBeAdded[1] !== 1) {
                console.log(toCompare0);
                console.log(toBeAdded);
                console.log('trzeci if');
                return;
              }
            }
          }
        }
      }
      f.target.classList = classToBeAdded;
      arrayOfCoords.push(toBeAdded);
      counter += 1;
      if (numberOfCells === counter) {
        allP1Cells.forEach((cell) => {
          cell.removeEventListener('click', coordinates);
        });
        alert('Press the green check mark in order to confirm your choice.');
        checkMarkDiv.addEventListener('click', () => {
          e.target.removeChild(checkMarkDiv);
          e.target.removeChild(crossMarkDiv);
          resolve(arrayOfCoords);
        });
      }
    }
    crossMarkDiv.addEventListener('click', () => {
      e.target.style.color = '';
      console.log(`.${classToBeAdded}`);
      const cellsTaken = document.querySelectorAll(`.${classToBeAdded}`);
      cellsTaken.forEach((cell) => {
        cell.classList.remove(`${classToBeAdded}`);
        cell.classList.add('cell1');
      });
      const allBoard1Cells = document.querySelectorAll('cell1');
      allBoard1Cells.forEach((cell) => {
        cell.addEventListener('click', coordinates);
      });
      e.target.removeChild(checkMarkDiv);
      e.target.removeChild(crossMarkDiv);
      reject();
    });
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
