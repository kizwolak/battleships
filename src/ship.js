export default function Ship(...coordinates) {
  const location = coordinates;
  let length = 0;
  location[0].forEach(() => {
    length += 1;
  });
  return {
    hits: 0,
    length,
    isSunkenProperty: false,
    hit(hits) {
      this.hits += 1;
      if (this.hits === this.length) {
        this.isSunkenProperty = true;
      }
      console.log(`Length: ${this.length}`);
      console.log(`Hits: ${this.hits}`);
      console.log(`Sunken property: ${this.isSunkenProperty}`);
    },
    location,
  };
}
