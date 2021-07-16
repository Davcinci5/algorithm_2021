let swapArray = require('../Array, N-dimensional arrays,Stack,Queues/A9');

test('swap each array location with the value on the nth position with a[a[n]]',()=>{
    const arr = [5, 3, 1, 4, 0, 2];
    swapArray(arr);
    expect(arr).toEqual([0, 1, 4, 3, 2, 5]);
});

test('swap each array location with the value on the nth position with a[a[n]]',()=>{
    const arr = [2,7,3,4,6,1,5,0];
    swapArray(arr);
    expect(arr).toEqual([3,1,2,6,4,5,0,7]);
});

test('swap each array location with the value on the nth position with a[a[n]]',()=>{
    const arr = [6,11,0,4,10,7,5,1,9,3,8,2];
    swapArray(arr);
    expect(arr).toEqual([0,2,5,10,4,1,6,7,8,9,3,11]);
})

test('swap each array location with the value on the nth position with a[a[n]]',()=>{
    const arr = [6,4,5,0,7,3,1,2];
    swapArray(arr);
    expect(arr).toEqual([0,7,2,1,4,5,6,3]);
});

test('swap each array location with the value on the nth position with a[a[n]]',()=>{
    const arr = [1,6,7,8,9,3,11,0,2,5,10,4];
    swapArray(arr);
    expect(arr).toEqual([6,1,0,3,5,2,4,7,8,9,10,11]);
});

