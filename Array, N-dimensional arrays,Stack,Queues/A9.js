//Given an array with values ranging from 0 to n-1, swap each array location with the value on the nth position with a[a[n]]

function swapArray(arr) {
  const swap = (index_i,index_j) => {
      let temp = arr[index_i];
      arr[index_i] = arr[index_j];
      arr[index_j] = temp;
  }

  for (let i = 0;i<arr.length;i++) {
      swap(i,arr[i]);
  }
}

module.exports = swapArray;