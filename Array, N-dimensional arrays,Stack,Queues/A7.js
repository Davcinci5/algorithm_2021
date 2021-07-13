// Given an MxN matrix, if any element is zero, make that column and row all zeroes.

const setZeros = (matrix) => {

function changeToZero(col,row){
    for (let i = 0; i < matrix.length; i++) {
        matrix[i][row] = 0
    }
    for (let i = 0; i < matrix[col].length; i++) {
        matrix[col][i] = 0
    }
}

let stack = [];
for (let col = 0; col < matrix.length; col++) {
    for (let row = 0; row < matrix[col].length; row++){
        if(matrix[col][row] === 0) stack.push([col,row])
    }
}

while(stack.length > 0){
    let element = stack.pop();
    changeToZero(...element);
}
}

module.exports = setZeros;
