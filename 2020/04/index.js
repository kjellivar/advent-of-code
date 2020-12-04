import { readInput } from '../../lib/read-input.js';
import schema from './schema.js';

const input = readInput('2020', '04').then((lines) => {
    let passport = {};
    const passports = [];
    lines.forEach((line) => {
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
    return passports;
});

async function part1() {
    const passports = await input;
    const valid = passports.filter((pass) =>
        ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'].every(
            (key) => pass[key],
        ),
    );
    console.log(`Part 1: ${valid.length} valid passports`);
}

async function part2() {
    const passports = await input;
    const valid = passports.filter((pass) => schema.isValidSync(pass));
    console.log(`Part 2: ${valid.length} valid passports`);
}

part1();
part2();
