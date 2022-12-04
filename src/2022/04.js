import assert from 'assert';
import _ from 'lodash';
import { readLines } from '../lib/read-input.js';

const input = readLines()
    .map((line) => line.split(',').map((pairs) => pairs.split('-').map(Number)))
    .map((pair) => pair.map(([from, to]) => _.range(from, to + 1)));

const part1 = input.filter(
    ([p1, p2]) => !(_.difference(p1, p2).length && _.difference(p2, p1).length),
).length;

const part2 = input.filter((pair) => _.intersection(...pair).length).length;

test('2022 - Day 04', () => {
    assert.strictEqual(part1, 498);
    assert.strictEqual(part2, 859);
});
