let addTwoArrays =  require('../Array, N-dimensional arrays,Stack,Queues/A8');

test("add [9,9] and [1]",()=>{
    let result = addTwoArrays([9,9],[1]);
    expect(result).toEqual([1,0,0]);
})

test("add [8,6,3] and [1,9]",()=>{
    let result = addTwoArrays([8,6,3],[1,9]);
    expect(result).toEqual([8,8,2]);
})

test("add [5,2,8] and [2,4,7]",()=>{
    let result = addTwoArrays([5,2,8],[2,4,7]);
    expect(result).toEqual([7,7,5]);
})

test("add [7,7,5] and [8,8,2]",()=>{
    let result = addTwoArrays([7,7,5],[8,8,2]);
    expect(result).toEqual([1,6,5,7]);
})

test("add [1,6,5,7] and [8,8,2]",()=>{
    let result = addTwoArrays([1,6,5,7],[1,0,9]);
    expect(result).toEqual([1,7,6,6]);
})

test("add [7] and [9]",()=>{
    let result = addTwoArrays([7],[9]);
    expect(result).toEqual([1,6]);
})

test("add [1,7,6,6] and [1,7,6,6]",()=>{
    let result = addTwoArrays([1,7,6,6],[1,7,6,6]);
    expect(result).toEqual([3,5,3,2]);
})