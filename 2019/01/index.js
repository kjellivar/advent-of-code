import { readInput } from '../../lib/read-input.js';
import { calculateFuel } from './calculate-fuel.js';

const input = readInput('2019', '01');

async function part1() {
    const fuel = (await input)
        .map((line) => Math.floor(parseFloat(line) / 3.0) - 2)
        .reduce((a, b) => a + b);

    console.log(`Part 1: Fuel needed is ${fuel}`);
}

async function part2() {
    const fuel = (await input)
        .map((line) => calculateFuel(parseFloat(line)))
        .reduce((a, b) => a + b);

    console.log(`Part 2: Fuel needed is ${fuel}`);
}

part1();
part2();
