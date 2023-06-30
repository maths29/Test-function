import { stringLength ,reverseString } from "./string_length";


test('length', () => {
  const str = 'chinonso';
  const len = 8;
  expect(stringLength(str)).toBe(len);
});

test('reverse', () => {
    const str = 'chinonso';
    const rev = 'osnonihc';
    expect(reverseString(str)).toBe(rev);
  });