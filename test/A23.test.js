let dtab = require('../Array, N-dimensional arrays,Stack,Queues/A23')
test("TO BASE 2",()=>{
    let result = dtab(20,2)
    expect(result).toBe(10100);
});

test("TO BASE 3",()=>{
    let result = dtab(20,3)
    expect(result).toBe(202);
});

test("TO BASE 4",()=>{
    let result = dtab(20,4)
    expect(result).toBe(110);
});

test("TO BASE 5",()=>{
    let result = dtab(20,5)
    expect(result).toBe(40);
});

test("TO BASE 6",()=>{
    let result = dtab(20,6)
    expect(result).toBe(32);
});
