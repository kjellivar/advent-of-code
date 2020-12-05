/**
 * A passport object
 * @typedef {Object} Passport
 * @property {string?} byr (Birth Year) - four digits; at least 1920 and at most 2002.
 * @property {string?} iyr (Issue Year) - four digits; at least 2010 and at most 2020.
 * @property {string?} eyr (Expiration Year) - four digits; at least 2020 and at most 2030.
 * @property {string?} hgt (Height) - a number followed by either cm or in.
 * @property {string?} hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
 * @property {string?} ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
 * @property {string?} pid (Passport ID) - a nine-digit number, including leading zeroes.
 * @property {string?} cid (Country ID) - ignored, missing or not.
 */

/**
 * @param {Passport} passport
 * @returns {boolean} true if passport is valid, false if not
 */
function validate(passport) {
    const { byr, iyr, eyr, hgt, hcl, ecl, pid } = passport;
    const [birthYear, issueYear, expireYear] = [byr, iyr, eyr].map(Number);
    const height = parseHeight(hgt);

    return [
        1920 <= birthYear && birthYear <= 2002,
        2010 <= issueYear && issueYear <= 2020,
        2020 <= expireYear && expireYear <= 2030,
        150 <= height && height <= 193,
        /^#[0-9a-f]{6}$/.test(hcl),
        ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(ecl),
        /^\d{9}$/.test(pid),
    ].every((isValid) => isValid);
}

/**
 * @param {string?} value
 * @returns {number}
 */
function parseHeight(value) {
    const num = parseFloat(value);
    if (num && value.includes('in')) {
        // Convert from freedom units to cm
        return Math.round(num * 2.54);
    } else if (num && value.includes('cm')) {
        return num;
    } else {
        return NaN;
    }
}

export { validate };
