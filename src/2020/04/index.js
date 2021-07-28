import { readLineGroups } from '../../lib/read-input.js';
import { validate } from './validate.js';

/**
 * @returns Array<Object>
 */
function getInput() {
    return readLineGroups('2020', '04').map(
        (group) =>
            new Map(
                group
                    .join(' ') // ['byr:1 eyr:2', 'iyr:3'] -> 'byr:1 eyr:2 iyr:3'
                    .split(' ') // 'byr:1 eyr:2 iyr:3' -> ['byr:1', 'eyr:2', 'iyr:3']
                    .map((val) => val.split(':'))
                    .map(([key, val]) => [key, val]),
            ),
    );
}

function part1() {
    return getInput().filter((pass) =>
        ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'].every((key) =>
            pass.get(key),
        ),
    ).length;
}

function part2() {
    return getInput().filter((pass) => validate(pass)).length;
}

export { part1, part2 };
