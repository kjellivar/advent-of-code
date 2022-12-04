import assert from 'assert';
import _ from 'lodash';
import { readLines } from '../lib/read-input.js';

const input = readLines()
    .map((line) => line.split(',').map((range) => range.split('-').map(Number)))
    .map((pair) => pair.map(([from, to]) => _.range(from, to + 1)))
    .map((pair) => _.sortBy(pair, 'length'));

const part1 = input.filter((pair) => !_.difference(...pair).length).length;
const part2 = input.filter((pair) => _.intersection(...pair).length).length;

test('2022 - Day 04', () => {
    assert.strictEqual(part1, 498);
    assert.strictEqual(part2, 859);
});
