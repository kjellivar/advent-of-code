import assert from 'assert';
import { readLines } from '../lib/read-input.js';

const depths = readLines().map(Number);

function part1() {
    const increases = depths
        .map((val, i) => (i === 0 ? -1 : val - depths[i - 1]))
        .filter((v) => v > 0).length;
    return increases;
}

function part2() {
    let previousSum;
    let increases = 0;
    for (let i = 2; i < depths.length; i++) {
        const sum = depths[i] + depths[i - 1] + depths[i - 2];
        if (previousSum && sum > previousSum) {
            increases++;
        }
        previousSum = sum;
    }
    return increases;
}

test('2021 - Day 1', () => {
    assert.strictEqual(part1(), 1832);
    assert.strictEqual(part2(), 1858);
});
