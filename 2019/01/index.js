import { readInput } from '../../lib/read-input.js';
import { calculateFuel } from './calculate-fuel.js';

const input = await readInput('2019', '01');

function part1() {    
    const fuel = input
        .map(line => Math.floor(parseFloat(line) / 3.0) - 2)
        .reduce((a, b) => a + b);

    console.log(`Part 1: Fuel needed is ${fuel}`);
}

function part2() {
    const fuel = input
        .map(line => calculateFuel(parseFloat(line)))
        .reduce((a, b) => a + b);
    
    console.log(`Part 2: Fuel needed is ${fuel}`);
}

part1();
part2();