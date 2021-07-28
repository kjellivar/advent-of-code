import fs from 'fs';

/**
 * Reads ./year/day/input.txt and returns an array of strings split by line
 * @param {number} year
 * @param {number} day
 * @returns {Array<string>}
 */
export function readLines(year, day) {
    return read(year, day).split('\n');
}

/**
 * Reads ./year/day/input.txt and returns an array of string-array,
 * splitting on empty lines
 *
 * Example:
 *
 * --- input.txt ---
 *
 * abcd
 * foo
 * bar
 *
 * moo
 * shoo
 *
 * --- input end ---
 *
 * The function will output:
 * [
 *      ['abcd', 'foo', 'bar'],
 *      ['moo','shoo']
 * ]
 *
 * @param {number} year
 * @param {number} day
 * @returns {Array<Array<string>>}
 */
export function readLineGroups(year, day) {
    return read(year, day)
        .split('\n\n')
        .map((group) => group.split('\n'));
}

/**
 * Reads input.txt file into string
 *
 * Tries ./{year}/{day}/input.txt
 * Will fallback to look in current directory.
 * This might happen if you're debugging in intellij for instance.
 *
 * @param {number} year
 * @param {number} day
 * @returns {string}
 */
function read(year, day) {
    const path = `./inputs/${year}/${day}.txt`;
    try {
        return fs.readFileSync(path, 'utf8');
    } catch (e) {
        const fallback = './input.txt';
        console.warn(
            `Could not load file at "${path}". Trying fallback at "${fallback}".`,
            e,
        );
        return fs.readFileSync(`./input.txt`, 'utf8');
    }
}
