export default function Ship(...coordinates) {
    length = coordinates.length;
    return {
        hits: 0,
        hit: function() {
            this.hits += 1;
        },
        isSunk: function(length, hits) {
            if (hits === length) return true; 
        },
        length,
        location: coordinates,
    }
}