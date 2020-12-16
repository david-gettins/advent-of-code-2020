import fields from './fields.json';

function solve(input: string[]): [number, number] {
  const groups = readLines(input);
  const passports = flattenGroups(groups);
  const [required, notRequired] = extractIds([...fields]);
  const part1 = validatePassportsPart1([...passports], required, notRequired);
  const part2 = validatePassportsPart2([...part1]);

  return [part1.length, part2.length];
}

function readLines(
  input: string[],
  current: string[] = [],
  groups: string[][] = [],
): string[][] {
  const item = input.pop();
  if (item === undefined) {
    groups.push(current);
    return groups;
  }

  if (item === '') {
    groups.push(current);
    return readLines(input, [], groups);
  }

  current.push(item);
  return readLines(input, current, groups);
}

function flattenGroups(groups: string[][], flattened: string[] = []): string[] {
  const group = groups.pop();
  if (!group) {
    return flattened;
  }

  const line = group.join(' ');
  flattened.push(line);

  return flattenGroups(groups, flattened);
}

function extractIds(
  fields: {
    id: string;
    name: string;
    required: boolean;
  }[],
  required: string[] = [],
  notRequired: string[] = [],
): [string[], string[]] {
  const field = fields.pop();
  if (!field) {
    return [required, notRequired];
  }

  if (field.required) {
    required.push(field.id);
  } else {
    notRequired.push(field.id);
  }

  return extractIds(fields, required, notRequired);
}

function validatePassportsPart1(
  passports: string[],
  required: string[],
  notRequired: string[],
  valid: string[] = [],
): string[] {
  const passport = passports.pop();
  if (!passport) {
    return valid;
  }

  const details = passport.split(' ');

  const names: string[] = [];
  for (const detail of details) {
    const [name] = detail.split(':');
    if (notRequired.indexOf(name) > -1) {
      continue;
    }

    names.push(name);
  }

  let correct = false;
  if (names.length === required.length) {
    correct = true;
  }

  if (correct) {
    valid.push(passport);
  }

  return validatePassportsPart1(passports, required, notRequired, valid);
}

function validatePassportsPart2(
  passports: string[],
  valid: string[] = [],
): string[] {
  const passport = passports.pop();
  if (!passport) {
    return valid;
  }

  const details = passport.split(' ');

  let correct = false;
  for (const detail of details) {
    const [name, value] = detail.split(':');

    if (name === 'byr') {
      if (+value >= 1920 && +value <= 2002) {
        correct = true;
        continue;
      } else {
        correct = false;
        break;
      }
    }

    if (name === 'iyr') {
      if (+value >= 2010 && +value <= 2020) {
        correct = true;
        continue;
      } else {
        correct = false;
        break;
      }
    }

    if (name === 'eyr') {
      if (+value >= 2020 && +value <= 2030) {
        correct = true;
        continue;
      } else {
        correct = false;
        break;
      }
    }

    if (name === 'hgt') {
      if (
        (value.indexOf('cm') > -1 &&
          +value.substr(0, value.length - 2) >= 150 &&
          +value.substr(0, value.length - 2) <= 193) ||
        (value.indexOf('in') > -1 &&
          +value.substr(0, value.length - 2) >= 59 &&
          +value.substr(0, value.length - 2) <= 76)
      ) {
        correct = true;
        continue;
      } else {
        correct = false;
        break;
      }
    }

    if (name === 'hcl') {
      if (
        value.startsWith('#') &&
        value.length === 7 &&
        value.replace(/([#A-Fa-f0-9]+)/, '').length === 0
      ) {
        correct = true;
        continue;
      } else {
        correct = false;
        break;
      }
    }

    if (name === 'ecl') {
      if (
        ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].indexOf(value) > -1
      ) {
        correct = true;
        continue;
      } else {
        correct = false;
        break;
      }
    }

    if (name === 'pid') {
      if (value.length === 9 && value.replace(/([0-9]+)/, '').length === 0) {
        correct = true;
        continue;
      } else {
        correct = false;
        break;
      }
    }
  }

  if (correct) {
    valid.push(passport);
  }

  return validatePassportsPart2(passports, valid);
}

export default solve;
