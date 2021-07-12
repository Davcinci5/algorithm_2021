//Rotate a matrix of numbers by 90 deg

const rowToColumn = (matrix) => {
    for (let col = 0; col < matrix.length; col++) {
        for (let row = col; row < matrix.length; row++) {
            let temporal =matrix[col][row];
            matrix[col][row] = matrix[row][col];
            matrix[row][col] = temporal;
        }
    }
}

const halfMirror = (matrix) => {
    for (let col = 0; col < matrix.length; col++) {
        for (let row = 0; row< Math.floor(matrix.length/2); row++) {
            let temporal = matrix[col][row];
            matrix[col][row] = matrix[col][matrix.length-1-row];
            matrix[col][matrix.length-1-row] = temporal;
        }
    }
}


function rotateBy90(matrix){
    rowToColumn(matrix);
    halfMirror(matrix);
    return matrix;
}

module.exports = rotateBy90;