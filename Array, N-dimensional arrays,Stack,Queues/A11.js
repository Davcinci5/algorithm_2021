//Write a function that will reverse N sized blocks of an array.
let array = [1,2,3,4,5,6];
function reverseNsized(arr){
    const swap = (index_i,index_j) => {
        let temp = arr[index_i];
        arr[index_i] = arr[index_j];
        arr[index_j] = temp;
    }
    let mirror = Math.floor(arr.length/2);
    for(let i=0;i<mirror;i++){
        swap(i,arr.length-1-i);
    }
}

module.exports = reverseNsized;