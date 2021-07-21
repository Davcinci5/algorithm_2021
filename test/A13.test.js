const {flatten_iterative, flatten_recursive} = require('../Array, N-dimensional arrays,Stack,Queues/A13');

test('flatten an array iteratively',() => {
    let array1 = [1,2,3,4,5,6,7,8,9,10];
    expect(flatten_iterative(array1)).toEqual([1,2,3,4,5,6,7,8,9,10]);
    let array2 = [[1,2],[3,4],[5,6],[7,8],[9,10]];
    expect(flatten_iterative(array2)).toEqual([1,2,3,4,5,6,7,8,9,10]);
    let array3 = [[1,[2],3],[4,5,[6]],[7,[8,9],10]];
    expect(flatten_iterative(array3)).toEqual([1,2,3,4,5,6,7,8,9,10]);
})

test('flatten an array recursively',() => {
    let array1 = [1,2,3,4,5,6,7,8,9,10];
    expect(flatten_recursive(array1)).toEqual([1,2,3,4,5,6,7,8,9,10]);
    let array2 = [[1,2],[3,4],[5,6],[7,8],[9,10]];
    expect(flatten_recursive(array2)).toEqual([1,2,3,4,5,6,7,8,9,10]);
    let array3 = [[1,[2],3],[4,5,[6]],[7,[8,9],10]];
    expect(flatten_recursive(array3)).toEqual([1,2,3,4,5,6,7,8,9,10]);
})