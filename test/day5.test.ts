import day5 from '../src/day5';

test('returns the highest seat identifier', () => {
  const [result] = day5([
    'BBFBBBFLRR', // 64-127, 96-127, 96-111, 104-111, 108-111, 110-111, 110 - 0-3, 2-3, 3 - 110 * 8 + 3 = 883
    'BBFBFBFLLL', // 64-127, 96-127, 96-111, 104-111, 104-107, 106-107, 106 - 0-3, 0-1, 0 - 106 * 8 + 0 = 848
  ]);

  expect(result).toEqual(883);
});

test('returns the missing seat id', () => {
  const [, result] = day5([
    'BBFBBBFLRL', // 64-127, 96-127, 96-111, 104-111, 108-111, 110-111, 110 - 0-3, 2-3, 2 - 110 * 8 + 2 = 882
    'BBFBBBFLRR', // 64-127, 96-127, 96-111, 104-111, 108-111, 110-111, 110 - 0-3, 2-3, 3 - 110 * 8 + 3 = 883
    'BBFBBBFRLR', // 64-127, 96-127, 96-111, 104-111, 108-111, 110-111, 110 - 4-7, 4-5, 5 - 110 * 8 + 5 = 885
    'BBFBBBFRRL', // 64-127, 96-127, 96-111, 104-111, 108-111, 110-111, 110 - 4-7, 6-7, 6 - 110 * 8 + 6 = 886
  ]);

  expect(result).toEqual(884);
});
