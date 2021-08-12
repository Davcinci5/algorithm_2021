const optimized = require('../Array, N-dimensional arrays,Stack,Queues/A18');
test('optimized sparse matrix',()=>{
    let matrix = 
        [[11,0,13,0,0,0 ],
        [21,22,0,24,0,0 ],
        [0,32,33,0,35,0 ],
        [0,0,43,44,0,46 ],
        [0,0,0,0,0,0 ],
        [61,62,0,0,65,66]];

        let test = new optimized(matrix);
        expect(test.getElement(10,0)).toBe(null);
        expect(test.getElement(0,0)).toBe(11);
        expect(test.getElement(0,1)).toBe(0);
        expect(test.getElement(5,5)).toBe(66);
        expect(test.getElement(4,4)).toBe(0);
        expect(test.getElement(2,2)).toBe(33);
        expect(test.getElement(11,3)).toBe(null);

});