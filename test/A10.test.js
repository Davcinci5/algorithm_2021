let shuffle = require('../Array, N-dimensional arrays,Stack,Queues/A10');

test('Shuffle an array',() => {
    const array = [1,2,3,4,5,6,7,8,9,10];
    shuffle(array);
    expect(array.length).toBe(10)
    expect([1,2,3,4,5,6,7,8,9,10].every(e=>array.includes(e))).toBe(true);
})

test('Shuffle an array',() => {
    const array = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    shuffle(array);
    expect(array.length).toBe(10)
    expect([11, 12, 13, 14, 15, 16, 17, 18, 19, 20].every(e=>array.includes(e))).toBe(true);
})

test('Shuffle an array',() => {
    const array = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
    shuffle(array);
    expect(array.length).toBe(10)
    expect([21, 22, 23, 24, 25, 26, 27, 28, 29, 30].every(e=>array.includes(e))).toBe(true);
})

test('Shuffle an array',() => {
    const array = [31, 32, 33, 34, 35, 36, 37, 38, 39, 40];
    shuffle(array);
    expect(array.length).toBe(10)
    expect([31, 32, 33, 34, 35, 36, 37, 38, 39, 40].every(e=>array.includes(e))).toBe(true);
})