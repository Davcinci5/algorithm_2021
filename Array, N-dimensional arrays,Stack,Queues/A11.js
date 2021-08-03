//Write a function that will reverse N sized blocks of an array.
let array = [1,2,3,4];
function reverseNsized(arr){
    const swap = (index_i,index_j) => {
        let temp = arr[index_i];
        arr[index_i] = arr[index_j];
        arr[index_j] = temp;
    }
   let hare = 0;
   while(arr[hare]){
       hare++;
   }
   const tortoise = ~~(hare/2)

   for (let i = 0; i < tortoise; i++) {
       swap(i,hare-1-i);
   }
}

 module.exports = reverseNsized;