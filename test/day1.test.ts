import day1 from '../src/day1/index';

test('returns the multiplication result of the numbers that sum to 2020', () => {
  const input = [900, 1020, 850, 1000];
  const result = day1(input);
  expect(result).toEqual(1020000);
});
