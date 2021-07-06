let print10times10times = require('../Array, N-dimensional arrays,Stack,Queues/A2');
test('verify it prints until 100',() => {
    console.log = jest.fn();
    print10times10times()
    for(let i=0;i<100;i++){
        expect(console.log.mock.calls[i][0]).toBe(i+1);
    }
});