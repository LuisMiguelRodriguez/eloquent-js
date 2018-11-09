const { minimum } = require('./index');

test('minimum function is defined', () =>{
    expect(minimum).toBeDefined();
});

test('minimum(10,5) should return 5', () =>{
    expect(minimum(10,5)).toBe(5);
});