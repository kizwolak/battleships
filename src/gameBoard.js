export default function gameBoard() {
    return {
        board: function() {
            let rows = new Array(10);
            for (let element of rows) {
                element.value = 'O';
            }
            for (let i = 0; i < rows.length; i++) {
                rows[i] = new Array(10);
                
            }
            return rows;
        },
        missedAttacks: [],        
    }
};
