export default function Ship(...coordinates) {
  const { length } = coordinates.length;
  return {
    hits: 0,
    isSunkenProperty: false,
    hit(hits) {
      this.hits += 1;
      if (hits === length) {
        this.isSunkenProperty = true;
        console.log('sunken!');
      }
    },
    length,
    location: coordinates,
  };
}
