import maths from '../maths';

export default function solve(input: number[]): [number, number] {
  const [a, b] = find(input, 2);
  const part1 = maths.multiply(a, b);
  const [c, d, e] = find(input, 3);
  const part2 = maths.multiply(c, d, e);

  return [part1, part2];
}

function find(input: number[], length: number): number[] {
  let result: number[] = [];
  const combinations = combine(input, length);
  for (const combination of combinations) {
    if (maths.sum(...combination) === 2020) {
      result = combination;
      break;
    }
  }

  if (result === []) {
    throw new Error('No numbers in the array sum to 2020');
  }

  return result;
}

function* combine<T>(
  array: T[],
  n: number,
  start = 0,
  prev: T[] = [],
): Generator<T[]> | Generator<T[], unknown, unknown> {
  if (n <= 0) {
    yield prev;
    return;
  }

  for (let i = start; i <= array.length - n; i++) {
    yield* combine(array, n - 1, i + 1, [...prev, array[i]]);
  }
}
