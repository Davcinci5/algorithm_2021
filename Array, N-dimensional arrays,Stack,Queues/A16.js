//Given an array of numbers of length N, find the index of that array that balances the left and right sum.
let findIndex = arr =>{ //O(n)
    let index = leftSum = sum = 0;
    while(arr[index]){
        sum+=arr[index++];
    }
    for(let i = 0; i < index; i++){
        sum-=arr[i];
        leftSum+=arr[i];
        if(sum === leftSum) return i;
    }
    return -1
};


module.exports = findIndex;