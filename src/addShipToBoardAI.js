import numberGenerator from './numberGenerator.js';
import coinFlip from './coinFlip.js';

export default async function addShipToBoardAI(e, array) {
  console.log(e.textContent);
  const takenCells = [];
  const arrayOfCoords = [];
  let numberOfCells = 0;
  let counter = 0;
  if (e.textContent.includes('2')) {
    numberOfCells = 2;
  } else if (e.textContent.includes('3')) {
    numberOfCells = 3;
  } else if (e.textContent.includes('4')) {
    numberOfCells = 4;
  } else if (e.textContent.includes('5')) {
    numberOfCells = 5;
  }
  function isArrayInArray(arr, item) {
    const itemAsString = JSON.stringify(item);
    const contains = arr.some((ele) => JSON.stringify(ele) === itemAsString);
    return contains;
  }
  let number1 = numberGenerator(0, 9, takenCells);
  function coordsFilter(number) {
    let toBeAdded = number;
    const random1 = coinFlip();
    const random2 = coinFlip();
    const random3 = coinFlip();
    const originalNum = arrayOfCoords.slice(0, 1);
    const toCompare = arrayOfCoords.slice(arrayOfCoords.length - 1, arrayOfCoords.length);
    if (arrayOfCoords.length === 1) {
      console.log(toCompare);
      console.log(`${toCompare[0][0]} ${toCompare[0][1]}`);
      if (random1 === 0) {
        if (random3 === 0) {
          toBeAdded = [(toCompare[0][0] - 1), toCompare[0][1]];
        } if (random3 === 1) {
          toBeAdded = [(toCompare[0][0] + 1), toCompare[0][1]];
        }
      } if (random1 === 1) {
        if (random3 === 0) {
          toBeAdded = [toCompare[0][0], toCompare[0][1] - 1];
        } if (random3 === 1) {
          toBeAdded = [toCompare[0][0], toCompare[0][1] + 1];
        }
      }
    }
    if (arrayOfCoords.length > 1) {
      if ((toCompare[0][0] - originalNum[0][0] === 1 || toCompare[0][0] - originalNum[0][0] === -1)) {
        if (random2 === 0) {
          toBeAdded = [(toCompare[0][0] - 1), toCompare[0][1]];
        } if (random2 === 1) {
          toBeAdded = [(toCompare[0][0] + 1), toCompare[0][1]];
        } if (isArrayInArray(takenCells, toBeAdded)) return;
      }
      if ((toCompare[0][1] - originalNum[0][1] === 1 || toCompare[0][1] - originalNum[0][1] === -1)) {
        if (random2 === 0) {
          toBeAdded = [toCompare[0][0], (toCompare[0][1] - 1)];
        } if (random2 === 1) {
          toBeAdded = [toCompare[0][0], (toCompare[0][1] + 1)];
        } if (isArrayInArray(takenCells, toBeAdded)) return;
      }
    }
    if (toBeAdded[0] < -1 || toBeAdded[1] < -1 || toBeAdded[0] > 9 || toBeAdded[1] > 9) return;
    if (isArrayInArray(takenCells, toBeAdded)) return;
    arrayOfCoords.push(toBeAdded);
    takenCells.push(toBeAdded);
    counter += 1;
  }
  while (counter !== numberOfCells) {
    number1 = numberGenerator(0, 9, takenCells);
    coordsFilter(number1);
    console.log(arrayOfCoords);
    console.log(number1);
  }
  return new Promise((resolve) => {
    if (numberOfCells === counter) {
      resolve(arrayOfCoords);
    }
  });
}
