import { readLines } from '../../lib/read-input.js';

const input = readLines('2019', '01');

function part1() {
    return input
        .map((line) => Math.floor(parseFloat(line) / 3.0) - 2)
        .reduce((a, b) => a + b);
}

function part2() {
    return input
        .map((line) => calculateFuel(parseFloat(line)))
        .reduce((a, b) => a + b);
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
