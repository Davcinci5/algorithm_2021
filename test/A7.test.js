let setZeros = require('../Array, N-dimensional arrays,Stack,Queues/A7');

test('if any element is zero, make that column and row all zeroes.',() => {
    let matrix = [[1,1,1],[1,0,1],[1,1,1]];
    setZeros(matrix);
    expect(matrix).toEqual([[1,0,1],[0,0,0],[1,0,1]]);
});

test('if any element is zero, make that column and row all zeroes.',() => {
    let matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
    setZeros(matrix);
    expect(matrix).toEqual([[0,0,0,0],[0,4,5,0],[0,3,1,0]]);
})

test('if any element is zero, make that column and row all zeroes.',() => {
    let matrix = [[0,1,2,0,4,9,5,1],[3,4,5,2,1,5,0,3],[1,3,1,5,4,9,0,3]];
    setZeros(matrix);
    expect(matrix).toEqual([[ 0, 0, 0, 0, 0, 0, 0, 0 ],[ 0, 0, 0, 0, 0, 0, 0, 0 ],[ 0, 0, 0, 0, 0, 0, 0, 0 ] ]);
});

test('if any element is zero, make that column and row all zeroes.',() => {
    let matrix = [[0,1,2,0,4,9,5,1],[3,4,5,2,1,5,0,3],[1,3,1,5,4,9,1,3]];
    setZeros(matrix);
    expect(matrix).toEqual([ [ 0, 0, 0, 0, 0, 0, 0, 0 ],[ 0, 0, 0, 0, 0, 0, 0, 0 ],[ 0, 3, 1, 0, 4, 9, 0, 3 ]]);
})