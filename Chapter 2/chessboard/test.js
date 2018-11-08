const { chessBoard1 , chessBoard2} = require('./index');

// Test for Chessboard 1
test('chessBoard function is defined', () => {
  expect(chessBoard1).toBeDefined();
});

test('Check out put to see if correct', () => {

  chessBoard1();

  expect(console.log.mock.calls[0][0]).toEqual("# # # # \n # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n# # # # \n # # # #");
  
});

// Test for Chessboard 2

test('chessBoard function is defined', () => {
  expect(chessBoard2).toBeDefined();
});

test('chessBoard2(10) Should produce an 10 x 10 grid', () => {

  chessBoard2(10);

  expect(console.log.mock.calls[0][0]).toEqual("# # # # # \n # # # # #\n# # # # # \n # # # # #\n# # # # # \n # # # # #\n# # # # # \n # # # # #\n# # # # # \n # # # # #");
  
});

test('chessBoard2(9) Should produce an 9 x 9 grid', () => {

  chessBoard2(9);

  expect(console.log.mock.calls[0][0]).toEqual("# # # # #\n # # # # \n# # # # #\n # # # # \n# # # # #\n # # # # \n# # # # #\n # # # # \n# # # # #");
  
});

test('chessBoard2(8) Should produce an 8 x 8 grid', () => {

  chessBoard2(8);

  expect(console.log.mock.calls[0][0]).toEqual("# # # # \n # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n# # # # \n # # # #");
  
});

test('chessBoard2(7) Should produce an 7 x 7 grid', () => {

  chessBoard2(7);

  expect(console.log.mock.calls[0][0]).toEqual("# # # #\n # # # \n# # # #\n # # # \n# # # #\n # # # \n# # # #");
  
});

test('chessBoard2(6) Should produce an 6 x 6 grid', () => {

  chessBoard2(6);

  expect(console.log.mock.calls[0][0]).toEqual("# # # \n # # #\n# # # \n # # #\n# # # \n # # #");
  
});


test('chessBoard2(5) Should produce an 5 x 5 grid', () => {

  chessBoard2(5);

  expect(console.log.mock.calls[0][0]).toEqual("# # #\n # # \n# # #\n # # \n# # #");
  
});

test('chessBoard2(4) Should produce an 4 x 4 grid', () => {

  chessBoard2(4);

  expect(console.log.mock.calls[0][0]).toEqual("# # \n # #\n# # \n # #");
  
});

test('chessBoard2(3) Should produce an 3 x 3 grid', () => {

  chessBoard2(3);

  expect(console.log.mock.calls[0][0]).toEqual("# #\n # \n# #");
  
});

test('chessBoard2(2) Should produce an 2 x 2 grid', () => {

  chessBoard2(2);

  expect(console.log.mock.calls[0][0]).toEqual("# \n #");
  
});
// Before each test 

beforeEach(() => {
  jest.spyOn(console, 'log');
});

// After each test 
afterEach(() => {
  console.log.mockRestore();
});

