const sum = require('../');

test('adds 2 + 3 to equal 5', () => {
  expect(sum(1, 2)).toBe(3);
});