import assert from 'assert';
import _ from 'lodash';
import { readLineGroups } from '../lib/read-input.js';

const inventories = readLineGroups(2022, 1).map((inv) => inv.map(Number));

function part1() {
    const sums = inventories.map((inv) => _(inv).sum());
    return _(sums).max();
}

function part2() {
    const sums = _(inventories)
        .map((inv) => _(inv).sum())
        .sortBy()
        .value()
        .reverse();
    return sums[0] + sums[1] + sums[2];
}

describe('2022 - Day 1', () => {
    it('part1 is 70698', () => {
        assert.strictEqual(part1(), 70698);
    });

    it('part2 is 206643', () => {
        assert.strictEqual(part2(), 206643);
    });
});
