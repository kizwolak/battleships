export default function Ship(length) {
    return {
        hits: 0,
        hit: function() {
            this.hits += 1;
        },
        isSunk: function(length, hits) {
            if (hits === length) return true; 
        },
        location: undefined,
    }
}