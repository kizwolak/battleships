export default function numberGenerator(min, max, array) {
  function isArrayInArray(arr, item) {
    const itemAsString = JSON.stringify(item);
    const contains = arr.some((ele) => JSON.stringify(ele) === itemAsString);
    return contains;
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  const firstNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  const secondNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  // if (vertical !== undefined) {
  //   return [vertical, secondNumber];
  // } if (horizontal !== undefined) {
  //   return [firstNumber, horizontal];
  // }
  if (isArrayInArray(array, [firstNumber, secondNumber])) return numberGenerator(min, max, array);
  return [firstNumber, secondNumber];
}
