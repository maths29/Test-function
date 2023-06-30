const capitalize = require('./capitalize');

test('capitalize function capitalizes the first character of a string', () => {
  const input = 'hello world';
  const expected = 'Hello world';
  const result = capitalize(input);
  expect(result).toBe(expected);
});
