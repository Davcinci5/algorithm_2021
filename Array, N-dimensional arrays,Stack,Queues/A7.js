// Given an MxN matrix, if any element is zero, make that column and row all zeroes.

const setZeros = (matrix) => {

    const column = new Set();
    const rows = new Set();

function changeToZero(){ //O(a*b)??
    for (let col of column){
        for (let i = 0; i < matrix[col].length; i++) {  
            matrix[col][i] = 0
        }
    }
    for(row of rows) {
        for (let i = 0; i < matrix.length; i++) {
            matrix[i][row] = 0
        }
    }    
}

for (let col = 0; col < matrix.length; col++) {
    for (let row = 0; row < matrix[col].length; row++){
        if(matrix[col][row] === 0) {
            column.add(col);
            rows.add(row);
        } 
    }
}

changeToZero();

}

module.exports = setZeros;
