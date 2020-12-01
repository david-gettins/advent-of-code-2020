import input from './input.json';

export default function solve(): void {
  console.log(input);
  const [a, b] = find(input);
  console.log(a, b);
  const result = a * b;
  console.log(result);
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
