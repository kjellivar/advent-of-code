import assert from 'assert';
import { readLineGroups } from '../lib/read-input.js';

/**
 * @returns Array<Object>
 */
function getInput() {
    return readLineGroups().map(
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

/**
 * @param {Map<string, string>} passport
 * @returns {boolean} true if passport is valid, false if not
 */
function validate(passport) {
    const [birthYear, issueYear, expireYear] = [
        passport.get('byr'),
        passport.get('iyr'),
        passport.get('eyr'),
    ].map(Number);
    const height = parseHeight(passport.get('hgt') ?? '');

    return [
        1920 <= birthYear && birthYear <= 2002,
        2010 <= issueYear && issueYear <= 2020,
        2020 <= expireYear && expireYear <= 2030,
        150 <= height && height <= 193,
        /^#[0-9a-f]{6}$/.test(passport.get('hcl')),
        ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(
            passport.get('ecl'),
        ),
        /^\d{9}$/.test(passport.get('pid')),
    ].every((isValid) => isValid);
}

/**
 * @param {string} value
 * @returns {number}
 */
function parseHeight(value) {
    const num = parseFloat(value);
    if (value.includes('in')) {
        // Convert from freedom units to cm
        return Math.round(num * 2.54);
    } else if (value.includes('cm')) {
        return num;
    } else {
        return NaN;
    }
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

test('2020 - Day 4', () => {
    assert.strictEqual(part1(), 190);
    assert.strictEqual(part2(), 121);
});
