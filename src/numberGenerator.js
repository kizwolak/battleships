export default function numberGenerator(min, max, missedAttacks) {
  if (missedAttacks.contains(JSON.stringify([min, max]))) numberGenerator(min, max, missedAttacks);
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
