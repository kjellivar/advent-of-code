import _ from 'lodash';
import { readLines } from '../../lib/read-input.js';

const input = readLines('2019', '01').map(parseFloat);

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

export { part1, part2, calculateFuel };
