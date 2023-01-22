export default function addShipToBoard(e) {
  const arrayOfCoords = [];
  let numberOfCells = 0;
  let counter = 0;
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
      console.log(true);
      console.log(arrayOfCoords);
    }
  }
  allP1Cells.forEach((cell) => {
    cell.addEventListener('click', coordinates);
  });
}
