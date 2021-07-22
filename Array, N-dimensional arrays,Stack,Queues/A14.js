//Given the start and end position of an NxM matrix, find all possible routes from start
 //to end given the only valid movements of right or down.

function traverseArray(array,startX,startY,xe,ye){
    let col = array.length-1;
    let row = array[0].length-1;
    let possible = [];
    const search = (xs,ys,storage = []) => {
        if(xs > col || ys > row) return;
        storage.push(array[xs][ys]);
        if(array[xs][ys]===array[xe][ye]){
            possible.push(storage);
            return;
        }
        search(xs+1,ys,[...storage])
        search(xs,ys+1,[...storage])
    }
    search(startX,startY);
    return possible;
}

module.exports = traverseArray;