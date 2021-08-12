const isBalanced =  require('../Array, N-dimensional arrays,Stack,Queues/A20');

test('test balanced serie',() => {
    const chain = '()(){}[]'
    expect(isBalanced(chain)).toBe(true);

    const chain2 = '({[]})(){}[]'
    expect(isBalanced(chain2)).toBe(true);

    const chain3 = ']({[]})(){}[]['
    expect(isBalanced(chain3)).toBe(false);

    const chain4 = ')))]({[]})(){}[][)'
    expect(isBalanced(chain4)).toBe(false);

    const chain5 = '{{[[(())]]}}'
    expect(isBalanced(chain5)).toBe(true);

    const chain6 = '(){}[]({[]})(){}[]'
    expect(isBalanced(chain6)).toBe(true);
})

