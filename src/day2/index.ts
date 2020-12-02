export default function solve(input: string[]): [number, number] {
  const first = part1(input);
  const second = part2(input);

  return [first, second];
}

function part1(input: string[]): number {
  let correct = 0;
  for (let entry of input) {
    entry = entry.replace(':', '');
    entry = entry.replace('-', ' ');
    const [start, end, character, pwd] = entry.split(' ');

    let count = 0;
    for (const char of pwd) {
      if (char === character) {
        count += 1;
      }
    }

    if (count >= parseInt(start, 10) && count <= parseInt(end, 10)) {
      correct += 1;
    }
  }

  return correct;
}

function part2(input: string[]): number {
  let correct = 0;
  for (let entry of input) {
    entry = entry.replace(':', '');
    entry = entry.replace('-', ' ');
    const [pos1, pos2, character, pwd] = entry.split(' ');
    const index1 = parseInt(pos1, 10) - 1;
    const index2 = parseInt(pos2, 10) - 1;

    if (
      (pwd[index1] === character || pwd[index2] === character) &&
      !(pwd[index1] === character && pwd[index2] === character)
    ) {
      correct += 1;
    }
  }

  return correct;
}
