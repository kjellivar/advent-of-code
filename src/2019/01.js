import assert from 'assert';
import _ from 'lodash';
import { readLines } from '../lib/read-input.js';

const input = readLines().map(parseFloat);

function part1() {
    return _(input)
        .map((num) => Math.floor(num / 3.0) - 2)
        .sum();
}

function part2() {
    return _(input).map(calculateFuel).sum();
}

/**
 * @param {number} mass
 * @returns {number} fuel needed for provided mass
 */
function calculateFuel(mass) {
    const fuel = Math.floor(mass / 3.0) - 2;
    return fuel > 0 ? fuel + calculateFuel(fuel) : 0;
}

test('2019 - Day 1', () => {
    assert.strictEqual(part1(), 3394106);
    assert.strictEqual(part2(), 5088280);
});
