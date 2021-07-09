let findGroups = require('../Array, N-dimensional arrays,Stack,Queues/A4');

test('no group in matrix',()=>{
    let matrix = [
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0]
    ];
    let data = findGroups(matrix);
    expect(data).toBe(0);
});

test('get two groups in matrix',()=>{
    let matrix = [
        [1,0,0,1,1,1],
        [1,0,1,1,0,1],
        [0,1,1,1,1,1],
        [0,0,1,1,1,1]
    ];
    let data = findGroups(matrix);
    expect(data).toBe(2);
});

test('get three groups in matrix',()=>{
    let matrix = [
        [1,0,0,1,1,1],
        [1,0,1,1,1,1],
        [0,0,1,1,1,1],
        [1,0,1,1,1,1]
    ];
    let data = findGroups(matrix);
    expect(data).toBe(3);
});

test('get group of 12',()=>{
    let matrix = [
        [1,0,1,0,1,0],
        [0,1,0,1,0,1],
        [1,0,1,0,1,0],
        [0,1,0,1,0,1]
    ];
    let data = findGroups(matrix);
    expect(data).toBe(12);
});

test('get group of 2',()=>{
    let matrix = [
        [0,0,0,1,1,1,0,0,0,0,0,0,0,0],
        [0,0,0,1,1,1,1,1,1,1,0,0,0,0],
        [0,0,0,1,1,1,1,1,1,1,1,1,0,0],
        [0,0,0,0,0,0,0,1,1,1,1,1,0,0],
        [0,0,0,0,0,0,0,1,1,1,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,1,1,1,1,1,1,1,1,1,1,1,1,0],
        [0,0,1,1,1,1,1,1,1,1,1,1,1,1],
        [0,0,0,0,0,0,0,0,1,1,1,0,0,0],
    ];
    let data = findGroups(matrix);
    expect(data).toBe(2);
});

test('get just 1 group',()=>{
    let matrix = [
        [0,0,0,1,1,1,0,0,0,0,0,0,0,0],
        [0,0,0,1,1,1,1,1,1,1,0,0,0,0],
        [0,0,0,1,1,1,1,1,1,1,1,1,0,0],
        [0,0,0,0,0,0,0,1,1,1,1,1,0,0],
        [0,0,0,0,0,0,0,1,1,1,0,0,0,0],
        [0,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [0,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [0,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [0,0,0,0,0,0,0,0,1,1,1,0,0,0],
    ];
    let data = findGroups(matrix);
    expect(data).toBe(1);
});

