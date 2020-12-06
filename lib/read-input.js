import fs from 'fs';

/**
 * Reads ./year/day/input.txt and returns an array of strings split by line
 * @param {string} year
 * @param {string} day
 * @returns {Array<string>}
 */
export function readLines(year, day) {
    return read(year, day).split('\n');
}

/**
 * Reads ./year/day/input.txt and returns an array of string-array,
 * where each string-array is seperated by an empty line
 * @param {string} year
 * @param {string} day
 * @returns {Array<Array<string>>}
 */
export function readLineGroups(year, day) {
    return read(year, day)
        .split('\n\n')
        .map((group) => group.split('\n'));
}

function read(year, day) {
    const path = `./${year}/${day}/input.txt`;
    try {
        return fs.readFileSync(path, 'utf8');
    } catch (e) {
        const fallback = `./input.txt`;
        console.warn(
            `Could not load file at "${path}". Trying fallback at "${fallback}".`,
            e,
        );
        return fs.readFileSync(`./input.txt`, 'utf8');
    }
}
