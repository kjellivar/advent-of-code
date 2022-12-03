import fs from 'fs';

/**
 * Reads ./year/day/input.txt and returns an array of strings split by line
 * @param {number} year
 * @param {number} day
 * @returns {Array<string>}
 */
export function readLines() {
    return read().split('\n');
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
export function readLineGroups() {
    return read()
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
function read() {
    const callerLoc = getCallerFile().split('/');
    const year = callerLoc.at(-2);
    const day = callerLoc.at(-1).replace('.js', '');
    const path = `./inputs/${year}/${String(day).padStart(2, '0')}.txt`;
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

/**
 * Finds file path of caller
 *
 * @returns {string}
 */
function getCallerFile() {
    const originalFunc = Error.prepareStackTrace;

    let callerfile;
    try {
        const err = new Error();
        let currentfile;

        Error.prepareStackTrace = (_, stack) => stack;

        currentfile = err.stack.shift().getFileName();

        while (err.stack.length) {
            callerfile = err.stack.shift().getFileName();

            if (currentfile !== callerfile) break;
        }
        // eslint-disable-next-line no-empty
    } catch (e) {}

    Error.prepareStackTrace = originalFunc;

    return callerfile;
}
