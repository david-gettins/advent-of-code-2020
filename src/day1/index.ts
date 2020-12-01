export default function solve(input: number[]): number {
  const [a, b] = find(input);
  return a * b;
}

function find(input: number[]): [number, number] {
  for (let i = 0; i < input.length; i++) {
    const a = input[i];
    for (let j = 0; j < input.length; j++) {
      const b = input[j];
      if (a + b === 2020) {
        return [a, b];
      }
    }
  }

  throw new Error('No numbers in the array sum to 2020');
}
