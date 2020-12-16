import day4 from '../src/day4';

test('should validate required fields', () => {
  const [result] = day4([
    'eyr:2033',
    'hgt:177cm pid:173cm',
    'ecl:utc byr:2029 hcl:#efcc98 iyr:2023',
    '',
    'pid:337605855 cid:249 byr:1952 hgt:155cm',
    'ecl:grn iyr:2017 eyr:2026 hcl:#866857',
    '',
    'cid:242 iyr:2011 pid:953198122 eyr:2029 ecl:blu hcl:#888785',
    '',
    'hgt:173cm hcl:#341e13',
    'cid:341',
    'pid:112086592',
    'iyr:2012 byr:2011 ecl:amb',
    'eyr:2030',
  ]);
  expect(result).toEqual(3);
});

test('should validate field values', () => {
  const [, result] = day4([
    // Correct
    'byr:1950 iyr:2011 eyr:2021 hgt:160cm hcl:#aadd00 ecl:gry pid:000123456',
    '',
    'byr:1950 iyr:2011 eyr:2021 hgt:60in hcl:#aadd00 ecl:gry pid:000123456',
    '',

    // Incorrect byr
    'byr:1919 iyr:2011 eyr:2021 hgt:160cm hcl:#aadd00 ecl:gry pid:000123456',
    '',
    'byr:2003 iyr:2011 eyr:2021 hgt:160cm hcl:#aadd00 ecl:gry pid:000123456',
    '',

    // Incorrect iyr
    'byr:1950 iyr:2009 eyr:2021 hgt:160cm hcl:#aadd00 ecl:gry pid:000123456',
    '',
    'byr:1950 iyr:2021 eyr:2021 hgt:160cm hcl:#aadd00 ecl:gry pid:000123456',
    '',

    // Incorrect eyr
    'byr:1950 iyr:2011 eyr:2019 hgt:160cm hcl:#aadd00 ecl:gry pid:000123456',
    '',
    'byr:1950 iyr:2011 eyr:2031 hgt:160cm hcl:#aadd00 ecl:gry pid:000123456',
    '',

    // Incorrect hgt
    'byr:1950 iyr:2011 eyr:2021 hgt:149cm hcl:#aadd00 ecl:gry pid:000123456',
    '',
    'byr:1950 iyr:2011 eyr:2021 hgt:194cm hcl:#aadd00 ecl:gry pid:000123456',
    '',
    'byr:1950 iyr:2011 eyr:2021 hgt:58in hcl:#aadd00 ecl:gry pid:000123456',
    '',
    'byr:1950 iyr:2011 eyr:2021 hgt:77in hcl:#aadd00 ecl:gry pid:000123456',
    '',

    // Incorrect hcl
    'byr:1950 iyr:2011 eyr:2021 hgt:160cm hcl:#qadd00 ecl:gry pid:000123456',
    '',
    'byr:1950 iyr:2011 eyr:2021 hgt:160cm hcl:#aadd0 ecl:gry pid:000123456',
    '',
    'byr:1950 iyr:2011 eyr:2021 hgt:160cm hcl:aaadd0 ecl:gry pid:000123456',
    '',

    // Incorrect ecl
    'byr:1950 iyr:2011 eyr:2021 hgt:160cm hcl:#aadd00 ecl:teal pid:000123456',
    '',

    // Incorrect pid
    'byr:1950 iyr:2011 eyr:2021 hgt:160cm hcl:#aadd00 ecl:gry pid:0001234a6',
    '',
    'byr:1950 iyr:2011 eyr:2021 hgt:160cm hcl:#aadd00 ecl:gry pid:00012346',
    '',
    'byr:1950 iyr:2011 eyr:2021 hgt:160cm hcl:#aadd00 ecl:gry pid:0001234640',
  ]);
  expect(result).toEqual(2);
});
