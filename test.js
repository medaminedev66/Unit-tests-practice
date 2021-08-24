const stringLength = require('./stringLength');
const reverseString = require('./reverseString');

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
