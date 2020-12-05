import { readInput } from '../../lib/read-input.js';
import { validate } from './validate.js';

let passport = {};
const passports = [];
readInput('2020', '04').forEach((line) => {
    if (line) {
        line.split(' ')
            .map((val) => val.split(':'))
            .forEach(([key, val]) => {
                passport[key] = val;
            });
    } else {
        passports.push(passport);
        passport = {};
    }
});

function part1() {
    return passports.filter((pass) =>
        ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'].every(
            (key) => pass[key],
        ),
    ).length;
}

function part2() {
    return passports.filter((pass) => validate(pass)).length;
}

export { part1, part2 };
