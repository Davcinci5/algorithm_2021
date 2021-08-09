let Optimized = require('../Array, N-dimensional arrays,Stack,Queues/A17');

test('optimized 4x4 triangular array ', () => {
    const matrix = [
        [0,1,2,3],
        [1,0,6,5],
        [2,6,0,4],
        [3,5,4,0]
      ];
    let opt = new Optimized(matrix);

    //optimized length
    expect(opt.length).toBe(6);

    //equal values. Expected value, 0 
    expect(opt.getValue(0,0)).toBe(0);

    //expected value 3 by using 0 N 3
    expect(opt.getValue(0,3)).toBe(3);

    //expected value 3 by using 3 N 0
    expect(opt.getValue(3,0)).toBe(3);

    //expected value 6 by using 1 N 2
    expect(opt.getValue(1,2)).toBe(6);

    //expected value 6 by using 2 N 1
    expect(opt.getValue(2,1)).toBe(6);

    //equal values. Expected value, 0 
    expect(opt.getValue(3,3)).toBe(0);

    try{
        opt.getValue(6,7);
    }catch(e){
        expect(e.message).toBe('out of bound');
    }
    //equal values but higher than length
    try{
        opt.getValue(7,7);
    }catch(e){
        expect(e.message).toBe('out of bound');
    }

    
});

