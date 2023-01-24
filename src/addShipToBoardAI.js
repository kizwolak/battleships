/* eslint-disable prefer-const */
import numberGenerator from './numberGenerator.js';

export default async function addShipToBoardAI(e) {
  const arrayOfCoords = [];
  let numberOfCells = 0;
  let counter = 0;
  let firstToBeAnalysed = 0;
  let secondToBeAnalysed = 1;
  let randomNumber = numberGenerator(0, 9, []);
  return new Promise((resolve) => {
    if (e.textContent.includes('2')) {
      numberOfCells = 2;
    } else if (e.textContent.includes('3')) {
      numberOfCells = 3;
    } else if (e.textContent.includes('4')) {
      numberOfCells = 4;
    } else if (e.textContent.includes('5')) {
      numberOfCells = 5;
    }
    let toBeAdded = randomNumber;
    if (arrayOfCoords.length === 1) {
      const toCompare = arrayOfCoords.slice(firstToBeAnalysed, secondToBeAnalysed);
      if (toCompare[0][0] - toBeAdded[0] > 1 || toCompare[0][0] - toBeAdded[0] < -1 || toCompare[0][1] - toBeAdded[1] > 1 || toCompare[0][1] - toBeAdded[1] < -1 || (toCompare[0][0] - toBeAdded[0] == -1 && toCompare[0][1] - toBeAdded[1] === 1) || (toCompare[0][0] - toBeAdded[0] === 1 && toCompare[0][1] - toBeAdded[1] === 1) || (toCompare[0][0] - toBeAdded[0] === -1 && toCompare[0][1] - toBeAdded[1] === -1) || (toCompare[0][0] - toBeAdded[0] === 1 && toCompare[0][1] - toBeAdded[1] === -1)) {
        toBeAdded = numberGenerator();
        return;
      }
      firstToBeAnalysed += 1;
      secondToBeAnalysed += 1;
    } else if (arrayOfCoords.length > 1) {
      const toCompare1 = arrayOfCoords.slice(firstToBeAnalysed, secondToBeAnalysed);
      const toCompare0 = arrayOfCoords.slice(0, 1);
      if ((toCompare1[0][0] - toBeAdded[0] !== 0 && toCompare1[0][1] - toBeAdded[1] !== 0) || ((toCompare1[0][0] - toBeAdded[0] >= 1 && toCompare1[0][1] - toBeAdded[1] >= 1) || (toCompare1[0][0] - toBeAdded[0] <= -1 && toCompare1[0[1] - toBeAdded[1] <= -1]) || (toCompare1[0][0] - toBeAdded[0] >= 1 && toCompare1[0][1] - toBeAdded[1] <= -1) || (toCompare1[0][0] - toBeAdded[0] <= -1 && toCompare1[0][1] - toBeAdded[1] >= 1))) {
        randomNumber = numberGenerator();
        return;
      } if ((toCompare0[0][0] - toBeAdded[0] >= 1 && toCompare0[0][1] - toBeAdded[0] >= 1) || (toCompare0[0][0] - toBeAdded[0] <= -1 && toCompare0[0][1] - toBeAdded[1] <= -1) || (toCompare0[0][0] - toBeAdded[0] >= 1 && toCompare0[0][1] - toBeAdded[1] <= -1) || (toCompare0[0][0] - toBeAdded[0] <= -1 && toCompare0[0][1] - toBeAdded[1] >= 1)) {
        randomNumber = numberGenerator();
        return;
      }
      firstToBeAnalysed += 1;
      secondToBeAnalysed += 1;
    }
    arrayOfCoords.push(toBeAdded);
    counter += 1;
    if (numberOfCells === counter) {
      resolve(arrayOfCoords);
    }
  });
}
