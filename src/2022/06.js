import assert from 'assert';
import _ from 'lodash';
import { readLines } from '../lib/read-input.js';

const stream = readLines().pop().split('');

function findMarker(length) {
    for (let i = length - 1; i < stream.length; i++) {
        const marker = stream.slice(i - length, i);
        if (_.uniq(marker).length === length) {
            return i;
        }
    }
}

const part1 = findMarker(4);
const part2 = findMarker(14);

test('2022 - Day 06', () => {
    assert.strictEqual(part1, 1912);
    assert.strictEqual(part2, 2122);
});
