declare var jest: any;

// @flow
const sum = require('../src/');

test('adds 2 + 3 to equal 5', () => {
  expect(sum(1, 2)).toBe(3);
});
