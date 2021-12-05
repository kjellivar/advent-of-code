import { URL } from 'url';
import assert from 'assert';
import { readLines } from '../lib/read-input.js';

const FILE_PATH = new URL('', import.meta.url).pathname.split('/');
const YEAR = parseInt(FILE_PATH[FILE_PATH.length - 2]);
const DAY = parseInt(FILE_PATH[FILE_PATH.length - 1]);

// eslint-disable-next-line no-unused-vars
const input = readLines(YEAR, DAY);

function part1() {}

function part2() {}

describe(`${YEAR} - Day ${DAY}`, () => {
    it('part1 is ?', () => {
        assert.strictEqual(part1(), undefined);
    });

    it('part2 is ?', () => {
        assert.strictEqual(part2(), undefined);
    });
});
