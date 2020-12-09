import math from '../math';

export default function solve(input: string[]): [number, number] {
  const part1 = evaluateSlope(input, 3, 1);

  const slopes = [
    evaluateSlope(input, 1, 1),
    evaluateSlope(input, 3, 1),
    evaluateSlope(input, 5, 1),
    evaluateSlope(input, 7, 1),
    evaluateSlope(input, 1, 2),
  ];

  const part2 = math.multiply(...slopes);

  return [part1, part2];
}

function evaluateSlope(input: string[], right: number, down: number) {
  let x = 0;
  let y = 0;
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    const row = input[i];

    if (i !== y) {
      continue;
    }

    if (y === 0) {
      y += down;
      continue;
    }

    const width = row.length;
    const maxIndex = width - 1;

    x += right;
    y += down;

    let char = '';
    if (x > maxIndex) {
      x = x - width;
    }

    char = row.charAt(x);
    if (char === '#') {
      count += 1;
    }
  }

  return count;
}
