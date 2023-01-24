export default function numberGenerator(vertical, horizontal, missedAttacks) {
  let min = 0;
  let max = 9;
  min = Math.ceil(min);
  max = Math.floor(max);
  const firstNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  const secondNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  if (vertical !== undefined) {
    return [vertical, secondNumber];
  } if (horizontal !== undefined) {
    return [firstNumber, horizontal];
  } return [firstNumber, secondNumber];
}
