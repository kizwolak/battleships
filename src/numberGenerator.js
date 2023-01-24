export default function numberGenerator(min, max, missedAttacks) {
  if (missedAttacks.includes(JSON.stringify([min, max]))) numberGenerator(min, max, missedAttacks);
  min = Math.ceil(min);
  max = Math.floor(max);
  const firstNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  const secondNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return [firstNumber, secondNumber];
}
