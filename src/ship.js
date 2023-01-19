export default function Ship(...coordinates) {
  const { length } = coordinates;
  return {
    hits: 0,
    hit() {
      this.hits += 1;
    },
    isSunk(hits) {
      if (hits === length) return true;
    },
    length,
    location: coordinates,
  };
}
