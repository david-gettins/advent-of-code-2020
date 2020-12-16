function solve(input: string[]): [number, number] {
  const part1 = getAnyoneYesCount([...input].reverse());
  const part2 = getEveryoneYesCount([...input].reverse());
  return [part1, part2];
}

function getAnyoneYesCount(
  answers: string[],
  rows: string[] = [],
  row: string[] = [],
): number {
  const next = answers.pop();
  if (next === undefined) {
    return [...rows, row.join('')].join('').length;
  }

  if (next === '') {
    return getAnyoneYesCount(answers, [...rows, row.join('')], []);
  }

  next.split('').forEach((part) => {
    if (row.indexOf(part) === -1) {
      row.push(part);
    }
  });

  return getAnyoneYesCount(answers, rows, row);
}

function getEveryoneYesCount(
  answers: string[],
  groups: string[][] = [],
  group: string[] = [],
  sum = 0,
): number {
  const next = answers.pop();
  if (next === undefined) {
    sum += count(group.length, group.join(''));
    return sum;
  }

  if (next === '') {
    sum += count(group.length, group.join(''));
    return getEveryoneYesCount(answers, groups, [], sum);
  }

  group.push(next);

  return getEveryoneYesCount(answers, groups, group, sum);
}

function count(targetCount: number, str: string, sum = 0): number {
  if (str.length === 0) {
    return sum;
  }

  const [char] = str;
  const instanceCount = str.match(new RegExp(`${char}`, 'g'))?.length || 0;
  if (instanceCount === targetCount) {
    sum += 1;
  }

  str = str.replace(new RegExp(`${char}`, 'g'), '');

  return count(targetCount, str, sum);
}

export default solve;
