let maxValue = require('../Array, N-dimensional arrays,Stack,Queues/A1');

test('get the max value from array [18,45,68,2,34,69]', () => {
    let max = maxValue([18,45,68,2,34,69]);
    expect(max).toBe(69);
});

test('get the max value from array [-7,58,15,-58,1,32,47,31]', () => {
    let max = maxValue([-7,58,15,-58,1,32,47,31]);
    expect(max).toBe(58);
})