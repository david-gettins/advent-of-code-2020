import day3 from '../src/day3';

test('returns the count of the number of encountered trees', () => {
  const [result] = day3([
    '.#....',
    '...#.#',
    '.#.#..',
    '.#....',
    '..##.#',
    '...#..',
  ]);
  expect(result).toEqual(2);
});

test('returns the count of the number of encountered trees - real data extract', () => {
  const [result] = day3([
    '..#...##...###.........#..#..#.',
    '#.###........#..##.#......#...#',
    '#.#.###..#.#..#.#............#.',
    '.##............#......#...#.#..',
    '..#..#.....##..##..##..........',
    '...#...........###.#.##........',
  ]);
  expect(result).toEqual(4);
});

test('returns the multiplication of the number of trees on each slope', () => {
  const [, result] = day3(['.#....', '.#.#.#', '.###.#']);
  expect(result).toEqual(4);
});
