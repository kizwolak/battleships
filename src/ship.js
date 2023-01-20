export default function Ship(...coordinates) {
  const { length } = coordinates.length;
  return {
    hits: 0,
    hit() {
      this.hits += 1;
    },
    isSunkenProperty: false,
    isSunken(hits) {
      if (hits === length) { return true; }
    },
    length,
    location: coordinates,
  };
}
