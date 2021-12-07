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
    const fishes = lodash.fill(Array(9), 0);
    input.forEach((i) => fishes[i]++);
    lodash.times(days, () => {
        const births = fishes.shift();
        fishes.push(births);
        fishes[6] += births;
    });
    return lodash.sum(fishes);
}

describe('2021 - Day 6', () => {
    it('part1 is 380612', () => {
        assert.strictEqual(part1(), 380612);
    });

    it('part2 is 1710166656900', () => {
        assert.strictEqual(part2(), 1710166656900);
    });
});
