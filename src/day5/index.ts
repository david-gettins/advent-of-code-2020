function solve(input: string[]): [number, number] {
  let rowCount = 0;
  const rows = Array.from({ length: 128 }, () => rowCount++);

  let colCount = 0;
  const columns = Array.from({ length: 8 }, () => colCount++);

  const seats = parse([...input].reverse(), rows, columns);
  const ids = seats.map((seat) => seat[0]);
  const max = Math.max(...ids);
  const sorted = ids.sort();
  const gap = findGap([...sorted].reverse());

  return [max, gap];
}

function parse(
  codes: string[],
  rows: number[],
  columns: number[],
  seats: [number, number, number][] = [],
): [number, number, number][] {
  const code = codes.pop();
  if (!code) {
    return seats;
  }

  const characters = code.split('');
  seats.push(parseSeat(characters, [...rows], [...columns]));

  return parse(codes, rows, columns, seats);
}

function parseSeat(
  characters: string[],
  rows: number[],
  columns: number[],
): [number, number, number] {
  const rowCharCount = findBinaryLength(rows.length);
  const colCharCount = findBinaryLength(columns.length);
  const rowChars = characters.slice(0, rowCharCount);
  const colChars = characters.slice(rowCharCount, rowCharCount + colCharCount);
  const row = parseRow(rowChars.reverse(), rows);
  const column = parseColumn(colChars.reverse(), columns);
  const id = row * 8 + column;

  return [id, row, column];
}

function parseRow(characters: string[], rows: number[], row = 0): number {
  const character = characters.pop();
  if (!character) {
    return row;
  }

  if (characters.length === 0) {
    if (character === 'F') {
      row = rows[0];
    }

    if (character === 'B') {
      row = rows[1];
    }
  }

  if (character === 'F') {
    rows = rows.slice(0, Math.floor(rows.length / 2));
  }

  if (character === 'B') {
    rows = rows.slice(Math.floor(rows.length / 2));
  }

  return parseRow(characters, rows, row);
}

function parseColumn(
  characters: string[],
  columns: number[],
  column = 0,
): number {
  const character = characters.pop();
  if (!character) {
    return column;
  }

  if (characters.length === 0) {
    if (character === 'L') {
      column = columns[0];
    }

    if (character === 'R') {
      column = columns[1];
    }
  }

  if (character === 'L') {
    columns = columns.slice(0, Math.floor(columns.length / 2));
  }

  if (character === 'R') {
    columns = columns.slice(Math.floor(columns.length / 2));
  }

  return parseColumn(characters, columns, column);
}

function findBinaryLength(decimal: number, length = 0): number {
  if (decimal % 2 !== 0) {
    return length;
  }

  const result = decimal / 2;
  return findBinaryLength(result, length + 1);
}

function findGap(
  sorted: number[],
  previous = 0,
  current = 0,
  found = 0,
): number {
  const next = sorted.pop();
  if (found || next === undefined) {
    return found;
  }

  return findGap(
    sorted,
    current,
    next,
    current - previous === 2 ? previous + 1 : found,
  );
}

export default solve;
