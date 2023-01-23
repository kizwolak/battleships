export default function Ship(name, ...coordinates) {
  const { length } = coordinates.length;
  return {
    name,
    hits: 0,
    isSunkenProperty: false,
    hit(hits) {
      this.hits += 1;
      if (hits === length) {
        this.isSunkenProperty = true;
      }
    },
    length,
    location: coordinates,
  };
}
