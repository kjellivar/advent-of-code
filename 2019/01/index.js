import { readInput } from '../../lib/read-input.js';
import { calculateFuel } from './calculate-fuel.js';

const input = readInput('2019', '01');

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

export { part1, part2, calculateFuel };
