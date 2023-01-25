import numberGenerator from './numberGenerator.js';

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
    console.log(arrayOfCoords);
    console.log(number);
    if (isArrayInArray(array, number)) return;
    const toCompare1 = arrayOfCoords.slice(1, 2);
    const toCompare0 = arrayOfCoords.slice(0, 1);
    if (isArrayInArray(arrayOfCoords, number)) return;
    const toBeAdded = number;
    if (arrayOfCoords.length === 1) {
      console.log(toCompare0);
      if ((toCompare0[0][0] - toBeAdded[0] === 1 || toCompare0[0][0] - toBeAdded[0] === -1) && (toCompare0[0][1] - toBeAdded[1] !== 0)) {
        number1 = numberGenerator(0, 9, takenCells);
        return;
      }
      if ((toCompare0[0][0] - toBeAdded[0] > 1) || (toCompare0[0][0] - toBeAdded[0] < -1) || (toCompare0[0][1] - toBeAdded[1] > 1) || (toCompare0[0][1] - toBeAdded[1] < -1)) {
        number1 = numberGenerator(0, 9, takenCells);
        return;
      }
      if ((toCompare0[0][0] - toBeAdded[0] !== 0) && (toCompare0[0][1] - toBeAdded[1] === 1 && toCompare0[0][1] - toBeAdded[1] === 1)) {
        number1 = numberGenerator(0, 9, takenCells);
        return;
      }
    } else if (arrayOfCoords.length > 1) {
      const toCompare2 = arrayOfCoords.slice((arrayOfCoords.length - 1), (arrayOfCoords.length));
      // vertical check
      if ((toCompare0[0][0] - toCompare1[0][0] === 1 || toCompare0[0][0] - toCompare1[0][0] === -1)) {
        number1 = numberGenerator(0, 9, takenCells);
        return;
      } if (toCompare2[0][0] - toBeAdded[0] > 1 || toCompare2[0][0] - toBeAdded[0] < -1) {
        console.log(`toCompare2: ${toCompare2}`);
        console.log(`toBeAdded: ${toBeAdded}`);
        if (toCompare0[0][0] - toCompare1[0][0] === 1) {
          if (toBeAdded[0] - toCompare0[0][0] !== 1) {
            number1 = numberGenerator(0, 9, takenCells);
            return;
          }
        } if (toCompare0[0][0] - toCompare1[0][0] === -1) {
          if (toCompare0[0][0] - toBeAdded[0] !== 1) {
            console.log(toCompare0);
            console.log(toBeAdded);
            number1 = numberGenerator(0, 9, takenCells);
            return;
          }
        }
      }
      // horizontal check
      if ((toCompare0[0][1] - toCompare1[0][1] === 1 || toCompare0[0][1] - toCompare1[0][1] === -1)) {
        if (toCompare2[0][0] - toBeAdded[0] >= 1 || toCompare2[0][0] - toBeAdded[0] <= -1) {
          console.log('pierwszy if');
          number1 = numberGenerator(0, 9, takenCells);
          return;
        } if (toCompare2[0][1] - toBeAdded[1] > 1 || toCompare2[0][1] - toBeAdded[1] < -1) {
          console.log(`toCompare2: ${toCompare2}`);
          console.log(`toBeAdded: ${toBeAdded}`);
          if (toCompare0[0][1] - toCompare1[0][1] === 1) {
            if (toBeAdded[1] - toCompare0[0][1] !== 1) {
              console.log('drugi if');
              number1 = numberGenerator(0, 9, takenCells);
              return;
            }
          } if (toCompare0[0][1] - toCompare1[0][1] === -1) {
            if (toCompare0[0][1] - toBeAdded[1] !== 1) {
              console.log(toCompare0);
              console.log(toBeAdded);
              console.log('trzeci if');
              number1 = numberGenerator(0, 9, takenCells);
              return;
            }
          }
        }
      }
    }
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
