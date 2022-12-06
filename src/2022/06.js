import assert from 'assert';
import _ from 'lodash';
import { readLines } from '../lib/read-input.js';

const data = readLines().pop().split('');

function findMarkerOfSize(n) {
    for (let i = n - 1; i < data.length; i++)
        if (_.uniq(data.slice(i - n, i)).length === n) return i;
}

const part1 = findMarkerOfSize(4);
const part2 = findMarkerOfSize(14);

test('2022 - Day 06', () => {
    assert.strictEqual(part1, 1912);
    assert.strictEqual(part2, 2122);
});
