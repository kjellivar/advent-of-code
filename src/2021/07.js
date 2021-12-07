import assert from 'assert';
import lodash from 'lodash';
import { readLines } from '../lib/read-input.js';

const crabs = lodash(readLines(2021, 7))
    .flatMap((val) => val.split(','))
    .map(Number)
    .sortBy();

// Calculate triangular number
const fuelCost = (n) => (n * (n + 1)) / 2;

function part1() {
    const to = crabs.get(crabs.size() / 2);
    return crabs.map((from) => Math.abs(from - to)).sum();
}

function part2() {
    const avg = crabs.sum() / crabs.size();
    return lodash([Math.floor(avg), Math.ceil(avg)])
        .map((to) => crabs.map((from) => fuelCost(Math.abs(from - to))).sum())
        .min();
}

describe(`2021 - Day 7`, () => {
    it('part1 is 342730', () => {
        assert.strictEqual(part1(), 342730);
    });

    it('part2 is 92335207', () => {
        assert.strictEqual(part2(), 92335207);
    });
});
