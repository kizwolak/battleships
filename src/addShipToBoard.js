export default async function addShipToBoard(e) {
  const arrayOfCoords = [];
  let numberOfCells = 0;
  let counter = 0;
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
      const toBeAdded = JSON.parse(`[${f.target.textContent}]`);
      arrayOfCoords.push(toBeAdded);
      counter += 1;
      console.log(numberOfCells);
      console.log(counter);
      if (numberOfCells === counter) {
        console.log(arrayOfCoords);
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