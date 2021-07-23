let search = require('../Array, N-dimensional arrays,Stack,Queues/A15');
test('Given an MxN matrix that is in ascending order both on rows and columns, create a search function',()=> {
    let array = [
        [2 ,4 ,6 ],
        [8 ,10,12],
        [14,16,18],
        [20,22,24]
       ];
    expect(search(array,2)).toEqual([0,0]);
    expect(search(array,24)).toEqual([3,2]);
    expect(search(array,10)).toEqual([1,1]);
    expect(search(array,18)).toEqual([2,2]);
    expect(search(array,40)).toBe(-1);
})

test('Given an MxN matrix that is in ascending order both on rows and columns, create a search function',()=> {
    let array = [
        [0, 6, 8, 9, 11],
        [20, 22, 28, 29, 31],
        [36, 38, 50, 61, 63],
        [64, 66, 100, 122, 128],
      ];
    expect(search(array,122)).toEqual([3,3]);
    expect(search(array,22)).toEqual([1,1]);
    expect(search(array,11)).toEqual([0,4]);
    expect(search(array,28)).toEqual([1,2]);
    expect(search(array,66)).toEqual([3,1]);
})