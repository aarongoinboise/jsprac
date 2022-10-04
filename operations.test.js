// "import" the sum function from operations.js
const {sum} = require('./operations')

//TODO: uncomment the next line
const {subtract} = require('./operations')

const {divide} = require('./operations')

const {fibonacci} = require('./operations')

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
});

test('adds 0 + 4 to equal 4', () => {
    expect(sum(0, 4)).toBe(4)
});

test('adds -1 + (-7) to equal -8', () => {
    expect(sum(-1, -7)).toBe(-8)
});

test('subtracts 1 - 2 to equal -1', () => {
    expect(subtract(1, 2)).toBe(-1)
});

test('subtracts 2 - 1 to equal 1', () => {
    expect(subtract(2, 1)).toBe(1)
});

test('subtracts -1 - 2 to equal -3', () => {
    expect(subtract(-1, 2)).toBe(-3)
});

test('subtracts -1 - (-2) to equal 1', () => {
    expect(subtract(-1, -2)).toBe(1)
});

test('divides 1 / 0 to equal Infinity', () => {
    expect(divide(1, 0)).toBe(Infinity)
});

test('divides 0 / 1 to equal 0', () => {
    expect(divide(0, 1)).toBe(0)
});

test('divides -1 / 2 to equal -0.5', () => {
    expect(divide(-1, 2)).toBe(-0.5)
});

test('divides 2 / -1 to equal -2', () => {
    expect(divide(2, -1)).toBe(-2)
});

test('second number in a fibonacci sequence is 1', () => {
    expect(fibonacci(2)).toBe(1)
});