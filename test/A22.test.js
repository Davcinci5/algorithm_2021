let fish = require('../Array, N-dimensional arrays,Stack,Queues/A22');

test("return only 4 alive fishes",()=>{
    let set = [[2,0],[6,1],[1,1],[7,0],[5,0],[4,1],[3,0]];
    let result = fish(set);
    expect(result).toBe(4);
});
