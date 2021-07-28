import assert from 'assert';
import _ from 'lodash';
import { readLines } from '../lib/read-input.js';

const input = readLines(2019, 1).map(parseFloat);

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

describe('2019 - Day 1', () => {
    it('calculateFuel should calculate fuel required for given mass', () => {
        assert.strictEqual(calculateFuel(100756), 50346);
        assert.strictEqual(calculateFuel(1969), 966);
        assert.strictEqual(calculateFuel(14), 2);
        assert.strictEqual(calculateFuel(2), 0);
    });
    it('part1 is 3394106', () => {
        assert.strictEqual(part1(), 3394106);
    });
    it('part2 is 5088280', () => {
        assert.strictEqual(part2(), 5088280);
    });
});
