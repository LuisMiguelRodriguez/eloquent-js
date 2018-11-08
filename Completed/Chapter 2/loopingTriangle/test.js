const { loopingTriangle } = require('./index');

test('loopingTriangle function is defined', () => {
  expect(loopingTriangle).toBeDefined();
});

test('Should print out a triangle thats 7 lines', () => {
  loopingTriangle()
  expect(console.log.mock.calls[0][0]).toEqual('#');
  expect(console.log.mock.calls[1][0]).toEqual('##');
  expect(console.log.mock.calls[2][0]).toEqual('###');
  expect(console.log.mock.calls[3][0]).toEqual('####');
  expect(console.log.mock.calls[4][0]).toEqual('#####');
  expect(console.log.mock.calls[5][0]).toEqual('######');
  expect(console.log.mock.calls[6][0]).toEqual('#######');
});

beforeEach(() => {
  jest.spyOn(console, 'log');
});

afterEach(() => {
  console.log.mockRestore();
});