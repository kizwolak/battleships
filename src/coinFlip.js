export default function coinFlip() {
  const min = 0;
  const max = 2;
  return Math.floor(Math.random() * (max - min) + min);
}
