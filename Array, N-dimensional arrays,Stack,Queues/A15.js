//Given an MxN matrix that is in ascending order both on rows and columns, create a search function.

function search(array, number){

    let m,mx,my, l = 0, r = (array.length * array[0].length) - 1;
    while (l <= r) {
        m = l + ~~((r - l) / 2);
        mx = ~~(m/array[0].length);
        my = m%array[0].length;

        // Check if x is present at mid
        if (array[mx][my] == number)
            return [mx,my];
  
        // If x greater, ignore left half
        if (array[mx][my] < number)
            l = m + 1;
  
        // If x is smaller, ignore right half
        else
            r = m - 1;
       }
  
        // if we reach here, then element was
        // not present
        return -1;
    
}

module.exports = search;