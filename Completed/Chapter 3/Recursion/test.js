const isEven  = require('./index');

test('isEven to be a function', () => {
    expect(isEven).toBeDefined();
});

test('isEven(0) should return true', () => {
    expect(isEven(0)).toBe(true);
});

test('isEven(1) to return false', () => {
    expect(isEven(1)).toBe(false);
});

test('isEven(4) to return true', () => {
    expect(isEven(4)).toBe(true);
});

test('isEven(3) to return true', () => {
    expect(isEven(3)).toBe(false);
});

test('isEven(-1)', () => {
    expect(isEven(-1)).toBe(false);
});

test('isEven(50) should return true', () => {

    expect(isEven(50)).toBe(true);
});

test('isEven(75) should return false', () => {

    expect(isEven(75)).toBe(false);
});