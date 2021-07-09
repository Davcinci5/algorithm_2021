//Find groups of 1's in an MxN matrix

function flood_fill(matrix, i, j, new_val){
    let old_val = matrix[i][j];
    let totCol = matrix.length;
    let totRow = matrix[0].length;
    if(old_val === new_val) return;
    const dfs = (i,j) => {
        if(i<0 || i>=totCol || j<0 || j>=totRow || matrix[i][j] !== old_val) return;
        matrix[i][j] = new_val;
        dfs(i+1,j);
        dfs(i-1,j);
        dfs(i,j+1);
        dfs(i,j-1);
    }
    dfs(i,j);
}

function findGroups(matrix) {
    let total = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
           if(matrix[i][j] === 1){
               total++;
               flood_fill(matrix,i,j,2);
           }
        }
    }
    return total;
}


module.exports = findGroups;