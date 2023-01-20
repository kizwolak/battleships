export default function Ship(...coordinates) {
  const { length } = coordinates.length;
  return {
    hits: 0,
    hit() {
      this.hits += 1;
    },
    isSunk(hits) {
      if (hits === length) { return true; }
    },
    length,
    location: coordinates,
  };
}
