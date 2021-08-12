const missingParenthesis = require('../Array, N-dimensional arrays,Stack,Queues/A19');

test('it should return 0 missing parenthesis',() => {
    expect(missingParenthesis('()()()()')).toBe(0);
})

test('it should return 1 missing parenthesis',() => {
    expect(missingParenthesis(')()()()()')).toBe(1);
})

test('it should return 2 missing parenthesis',() => {
    expect(missingParenthesis(')()()()()(')).toBe(2);
})
test('it should return 4 missing parenthesis',() => {
    expect(missingParenthesis('))((()))((')).toBe(4);
})

test('it should return 5 missing parenthesis',() => {
    expect(missingParenthesis('))((())))((')).toBe(5);
})