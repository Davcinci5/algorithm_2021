let traverseArray = require('../Array, N-dimensional arrays,Stack,Queues/A14');

test('find the routes from array[0][0] to array[1][1]',()=>{
    let array = [[1, 4],
                 [5, 8]];
    let possibles = traverseArray(array,0,0,1,1);
    expect(possibles).toEqual([[ 1, 5, 8 ], [ 1, 4, 8 ]])
})

test('find the routes from array[0][0] to array[2][3]',()=>{
let array = [[1,  2, 3 ,4],
            [5,  6, 7, 8],
            [9 ,10,11,12]]
    let possibles = traverseArray(array,0,0,2,3);
    expect(possibles).toEqual([
        [ 1, 5, 9, 10, 11, 12 ],
        [ 1, 5, 6, 10, 11, 12 ],
        [ 1, 5, 6, 7, 11, 12 ],
        [ 1, 5, 6, 7, 8, 12 ],
        [ 1, 2, 6, 10, 11, 12 ],
        [ 1, 2, 6, 7, 11, 12 ],
        [ 1, 2, 6, 7, 8, 12 ],
        [ 1, 2, 3, 7, 11, 12 ],
        [ 1, 2, 3, 7, 8, 12 ],
        [ 1, 2, 3, 4, 8, 12 ] ])
})

test('find the routes from array[0][0] to array[2][3]',()=>{
    let array = [[1,  2, 3 ,4],
                [5,  6, 7, 8],
                [9 ,10,11,12]]
        let possibles = traverseArray(array,0,0,2,1);
        expect(possibles).toEqual([
            [ 1, 5, 9, 10 ],
            [ 1, 5, 6, 10],
            [ 1, 2, 6, 10]
        ])
    })

    test('find the routes from array[0][1] to array[1][6]',()=>{
        let array = [[2 ,4 ,6 ,8 ,10,12,14],
                     [1 ,3 ,5 ,7 ,9 ,11,13],
                     [16,18,20,22,24,26,28]
                    ];
        let possibles = traverseArray(array,0,1,1,6);
        expect(possibles).toEqual([ 
            [ 4, 3, 5, 7, 9, 11, 13 ],
            [ 4, 6, 5, 7, 9, 11, 13 ],
            [ 4, 6, 8, 7, 9, 11, 13 ],
            [ 4, 6, 8, 10, 9, 11, 13 ],
            [ 4, 6, 8, 10, 12, 11, 13 ],
            [ 4, 6, 8, 10, 12, 14, 13 ] ])
    });

    test(`Ivan's found bug`,()=>{
        let array = [
            [0,0,0],
            [0,0,0],
            [0,0,0],
        ];
        let possibles = traverseArray(array,0,0,2,2);
        expect(possibles).toEqual([[ 0, 0, 0, 0, 0 ],
            [ 0, 0, 0, 0, 0 ],
            [ 0, 0, 0, 0, 0 ],
            [ 0, 0, 0, 0, 0 ],
            [ 0, 0, 0, 0, 0 ],
            [ 0, 0, 0, 0, 0 ] ]);
    });

