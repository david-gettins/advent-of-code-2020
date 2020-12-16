export function multiply(...numbers: number[]): number {
  let result = 1;
  for (const num of numbers) {
    result *= num;
  }

  return result;
}
