import assert from 'assert';
import lodash from 'lodash';
import { readLines } from '../lib/read-input.js';

const { fill, times, sum } = lodash;
const input = readLines().flatMap((val) => val.split(',').map(Number));

function part1() {
    return simulate(80);
}

function part2() {
    return simulate(256);
}

function simulate(days) {
    const fishes = fill(Array(9), 0);
    input.forEach((i) => fishes[i]++);
    times(days, () => {
        const births = fishes.shift();
        fishes.push(births);
        fishes[6] += births;
    });
    return sum(fishes);
}

test('2021 - Day 6', () => {
    assert.strictEqual(part1(), 380612);
    assert.strictEqual(part2(), 1710166656900);
});
