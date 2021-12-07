import assert from 'assert';
import lodash from 'lodash';
import { readLines } from '../lib/read-input.js';

const input = readLines(2021, 6).flatMap((val) => val.split(',').map(Number));

function part1() {
    return simulate(80);
}

function part2() {
    return simulate(256);
}

function simulate(days) {
    const counts = lodash(input.slice()).countBy().value();
    lodash
        .range(0, 9)
        .map(String)
        .forEach((val) => (counts[val] = counts[val] ?? 0));
    const fishes = lodash(counts).toArray().value();
    for (let day = 0; day < days; day++) {
        const births = fishes.shift();
        fishes.push(births);
        fishes[6] += births;
    }
    return fishes.reduce((a, b) => a + b);
}

describe(`2021 - Day 6`, () => {
    it('part1 is 380612', () => {
        assert.strictEqual(part1(), 380612);
    });

    it('part2 is 1710166656900', () => {
        assert.strictEqual(part2(), 1710166656900);
    });
});
