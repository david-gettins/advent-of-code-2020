import day1 from '../src/day1';

test('returns the multiplication result of two numbers that sum to 2020', () => {
  const input = [900, 1020, 850, 1000];
  const [result] = day1(input);
  expect(result).toEqual(1020000);
});

test('returns the multiplication result of three numbers that sum to 2020', () => {
  const input = [900, 520, 850, 1000, 500];
  const [, result] = day1(input);
  expect(result).toEqual(260000000);
});
