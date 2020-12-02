import day2 from '../src/day2/index';

test('returns the number of passwords that conform to the policy', () => {
  const [result] = day2([
    '1-3 a: abaaa', // no
    '5-7 !: !!!abc!!!', // yes,
    '1-2 t: test', // yes,
    '2-8 m: monday', // no
  ]);

  expect(result).toEqual(2);
});

test('returns the number of passwords that conform to the correct policy', () => {
  const [, result] = day2([
    '1-3 a: abaaa', // no
    '5-7 !: !!!abc!!!', // yes,
    '1-2 t: test', // yes,
    '2-8 m: monday', // no
  ]);

  expect(result).toEqual(2);
});
