const rotateBy90 = require('../Array, N-dimensional arrays,Stack,Queues/A5');
test('rotate matrix 2x2 by 90 dregrees',()=>{
    let matrix = [
        [1,2],
        [3,4]
    ];
    let expected = [
        [3,1],
        [4,2]
    ];
    let rotated = rotateBy90(matrix);
    expect(rotated).toEqual(expected);
})

test('rotate matrix 3X3 by 90 dregrees',()=>{
    let matrix = [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ];
    let expected = [
        [7,4,1],
        [8,5,2],
        [9,6,3]
    ];
    let rotated = rotateBy90(matrix);
    expect(rotated).toEqual(expected);
})

test('rotate matrix 4X4 by 90 dregrees',()=>{
    let matrix = [
        [1, 2, 3,  4],
        [5, 6, 7,  8],
        [9, 10,11,12],
        [13,14,15,16]
    ];
    let expected = [
        [13,9,5,1],
        [14,10,6,2],
        [15,11,7,3],
        [16,12,8,4]
    ];
    let rotated = rotateBy90(matrix);
    expect(rotated).toEqual(expected);
})

test('rotate matrix 5x5 by 90 dregrees',()=>{
    let matrix = [
        [1, 2, 3,  4, 5],
        [6, 7,  8, 9,10],
        [11,12,13,14,15],
        [16,17,18,19,20],
        [21,22,23,24,25]
    ];
    let expected = [
        [21,16,11,6,1],
        [22,17,12,7,2],
        [23,18,13,8,3],
        [24,19,14,9,4],
        [25,20,15,10,5]
    ];
    let rotated = rotateBy90(matrix);
    expect(rotated).toEqual(expected);
})

