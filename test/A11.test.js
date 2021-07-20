const reverseNsized = require('../Array, N-dimensional arrays,Stack,Queues/A11');

test('function that will reverse N sized blocks of an array',()=>{
    let array = [1,2,3];
    reverseNsized(array);
    expect(array[0]).toBe(3);
    expect(array[1]).toBe(2);
    expect(array[2]).toBe(1);
});

test('function that will reverse N sized blocks of an array',()=>{
    let array = [4,5,6,7,8,9];
    reverseNsized(array);
    expect(array[0]).toBe(9);
    expect(array[1]).toBe(8);
    expect(array[2]).toBe(7);
    expect(array[3]).toBe(6);
    expect(array[4]).toBe(5);
    expect(array[5]).toBe(4);
});

test('function that will reverse N sized blocks of an array',()=>{
    let array = [10,11,12,13,14,15,16,17,18,19];
    reverseNsized(array);
    expect(array[0]).toBe(19);
    expect(array[1]).toBe(18);
    expect(array[2]).toBe(17);
    expect(array[3]).toBe(16);
    expect(array[4]).toBe(15);
    expect(array[5]).toBe(14);
    expect(array[6]).toBe(13);
    expect(array[7]).toBe(12);
    expect(array[8]).toBe(11);
    expect(array[9]).toBe(10);
});