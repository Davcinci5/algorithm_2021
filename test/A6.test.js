let merge = require('../Array, N-dimensional arrays,Stack,Queues/A6');

test("merge two arrays [1,3,5,7,9,null,null,null,null] and [2,4,6,8]", () => {
    let arre1 =[1,3,5,7,9,null,null,null,null];
    let arre2 = [2,4,6,8];
    merge(arre1,arre2);
    expect(arre1).toEqual([ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]);
});

test("merge two arrays [1,2,5,7,9,null,null,null,null,null) and [0,3,4,6,8]", () => {
    let arre1 =[1,2,5,7,9].concat(new Array(5));
    let arre2 = [0,3,4,6,8];
    merge(arre1,arre2);
    expect(arre1).toEqual([0,1,2,3,4,5,6,7,8,9]);
});

test("merge two arrays [9,10,11,13,15,null,null,null,null,null,null,null,null) and [2, 4, 5 ,7, 8,12, 14,17]", () => {
    const arre1 = [9,10,11,13,15].concat(new Array(8));
    const arre2 = [2, 4, 5 ,7, 8,12, 14,17];
    merge(arre1,arre2);
    expect(arre1).toEqual([2, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17 ]);
});

test("merge two arrays [1,3,6,9,10,11,13,15,null,null,null,null,null,null,null,null) and [2, 4, 5 ,7, 8,12, 14,16]", () => {
    const arre1 = [1,3,6,9,10,11,13,15].concat(new Array(8));
    const arre2 = [2, 4, 5 ,7, 8,12, 14,16];
    merge(arre1,arre2);
    expect(arre1).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ]);
});