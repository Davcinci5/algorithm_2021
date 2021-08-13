const carsPassingEachOther = require('../Array, N-dimensional arrays,Stack,Queues/A21');
test('should return 7 times',() => {
    const cars = [1,0,1,1,0,0,1];
    expect(carsPassingEachOther(cars)).toBe(7);
})

test('should return 11 times',() => {
    const cars = [1,0,1,1,0,0,1,0];
    expect(carsPassingEachOther(cars)).toBe(11);
})

test('should return 25 times',() => {
    const cars = [0,1,1,0,1,1,0,0,1,0,0,0];
    expect(carsPassingEachOther(cars)).toBe(25);
})

test('should return 9 times',() => {
    const cars = [1,0,0,0,0,0,0,0,0,0];
    expect(carsPassingEachOther(cars)).toBe(9);
})

test('should return 0 times',() => {
    const cars = [0,1];
    expect(carsPassingEachOther(cars)).toBe(0);
})


test('should return 0 times',() => {
    const cars = [0,1,1,1,1,1,1,1,1,1,1,1];
    expect(carsPassingEachOther(cars)).toBe(0);
})


test('should return 28 times',() => {
    const cars = [0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1];
    expect(carsPassingEachOther(cars)).toBe(28);
})