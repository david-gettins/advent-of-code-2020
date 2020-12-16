import day6 from '../src/day6';

const testInput = [
  'abc',
  '',
  'a',
  'b',
  'c',
  '',
  'ab',
  'ac',
  '',
  'a',
  'a',
  'a',
  'a',
  '',
  'b',
];

test('should sum the count where anyone in each group said yes', () => {
  const [result] = day6(testInput);
  expect(result).toEqual(11);
});

test('should sum the count where everyone in each group said yes', () => {
  const [, result] = day6(testInput);
  expect(result).toEqual(6);
});
