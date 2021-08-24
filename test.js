const stringLength = require('./stringLength');
const reverseString = require('./reverseString');
const Calculator = require('./calculator');

test('Expect the length of the string hello to be 5', () => {
  expect(stringLength('hello')).toBe(5);
});

test('the string length is over than 10', () => {
  expect(stringLength('Hello world !')).toBe(
    'the string length is Over than 10',
  );
});

test('the string is at least 1 character', () => {
  expect(stringLength('')).toBe('the string is empty');
});

test('reverseString function works', () => {
  expect(reverseString('Amine')).toBe('enimA');
});

const calculator = new Calculator();
describe('the methods : ', () => {
  test('add method works', () => {
    expect(calculator.add(3, 4, 2)).toBe(9);
  });
  test('subtract method works', () => {
    expect(calculator.subtract(5, 2)).toBe(3);
  });
  test('divide method works', () => {
    expect(calculator.divide(15, 5)).toBe(3);
  });
  test('multiply method works', () => {
    expect(calculator.multiply(2, 7, 2)).toBe(28);
  });
});
