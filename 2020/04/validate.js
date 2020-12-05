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
    const { ecl, hcl, pid } = passport;
    const byr = parseFloat(passport.byr);
    const iyr = parseFloat(passport.iyr);
    const eyr = parseFloat(passport.eyr);
    const hgt = parseHeight(passport.hgt);

    if (byr && ecl && eyr && hcl && hgt && iyr && pid) {
        return [
            1920 <= byr && byr <= 2002,
            2010 <= iyr && iyr <= 2020,
            2020 <= eyr && eyr <= 2030,
            150 <= hgt && hgt <= 193,
            (hcl.match(/^#[0-9a-f]{6}$/) ?? []).length > 0,
            ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(ecl),
            (pid.match(/^\d{9}$/) ?? []).length > 0,
        ].every((isValid) => isValid);
    } else {
        return false;
    }
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
