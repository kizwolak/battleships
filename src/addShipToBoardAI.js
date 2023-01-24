import numberGenerator from './numberGenerator.js';

export default async function addShipToBoard(e) {
  console.log(e.textContent);
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
  const toCompare1 = arrayOfCoords.slice(1, 2);
  const toCompare0 = arrayOfCoords.slice(0, 1);
  const toBeAdded = numberGenerator(0, 9, []);
  console.log(`To be added: ${toBeAdded}`);
  function coordsFilter(number, arrayOfCoords) {
    if (arrayOfCoords.length === 1) {
      if ((toCompare0[0][0] - toBeAdded[0] === 1 || toCompare0[0][0] - toBeAdded[0] === -1) && (toCompare0[0][1] - toBeAdded[1] !== 0)) {
        const newNumber = numberGenerator(0, 9, []);
        return coordsFilter(newNumber, arrayOfCoords);
      }
      if ((toCompare0[0][0] - toBeAdded[0] !== 0) && (toCompare0[0][1] - toBeAdded[1] === 1 && toCompare0[0][1] - toBeAdded[1] === 1)) {
        const newNumber = numberGenerator(0, 9, []);
        return coordsFilter(newNumber, arrayOfCoords);
      }
    } else if (arrayOfCoords.length > 1) {
      const toCompare2 = arrayOfCoords.slice((arrayOfCoords.length - 1), (arrayOfCoords.length));
      if ((toCompare0[0][0] - toCompare1[0][0] === 1 || toCompare0[0][0] - toCompare1[0][0] === -1)) {
        if (toCompare2[0][1] - toBeAdded[1] >= 1 || toCompare2[0][1] - toBeAdded[1] <= -1) {
          const newNumber = numberGenerator(0, 9, []);
          return coordsFilter(newNumber, arrayOfCoords);
        } if (toCompare2[0][0] - toBeAdded[0] > 1 || toCompare2[0][0] - toBeAdded[0] < -1) {
          console.log(`toCompare2: ${toCompare2}`);
          console.log(`toBeAdded: ${toBeAdded}`);
          if (toCompare0[0][0] - toCompare1[0][0] === 1) {
            if (toBeAdded[0] - toCompare0[0][0] !== 1) {
              const newNumber = numberGenerator(0, 9, []);
              return coordsFilter(newNumber, arrayOfCoords);
            }
          } if (toCompare0[0][0] - toCompare1[0][0] === -1) {
            if (toCompare0[0][0] - toBeAdded[0] !== 1) {
              console.log(toCompare0);
              console.log(toBeAdded);
              const newNumber = numberGenerator(0, 9, []);
              return coordsFilter(newNumber, arrayOfCoords);
            }
          }
        }
      }
      if ((toCompare0[0][1] - toCompare1[0][1] === 1 || toCompare0[0][1] - toCompare1[0][1] === -1)) {
        if (toCompare2[0][0] - toBeAdded[0] >= 1 || toCompare2[0][0] - toBeAdded[0] <= -1) {
          console.log('pierwszy if');
          const newNumber = numberGenerator(0, 9, []);
          return coordsFilter(newNumber, arrayOfCoords);
        } if (toCompare2[0][1] - toBeAdded[1] > 1 || toCompare2[0][1] - toBeAdded[1] < -1) {
          console.log(`toCompare2: ${toCompare2}`);
          console.log(`toBeAdded: ${toBeAdded}`);
          if (toCompare0[0][1] - toCompare1[0][1] === 1) {
            if (toBeAdded[1] - toCompare0[0][1] !== 1) {
              console.log('drugi if');
              const newNumber = numberGenerator(0, 9, []);
              return coordsFilter(newNumber, arrayOfCoords);
            }
          } if (toCompare0[0][1] - toCompare1[0][1] === -1) {
            if (toCompare0[0][1] - toBeAdded[1] !== 1) {
              console.log(toCompare0);
              console.log(toBeAdded);
              console.log('trzeci if');
            }
          }
        }
      }
    }
    arrayOfCoords.push(toBeAdded);
    counter += 1;
  }
  return new Promise((resolve) => {
    if (numberOfCells === counter) {
      resolve(arrayOfCoords);
    }
  });
}
