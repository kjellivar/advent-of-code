import { readInput } from '../../lib/read-input.js';
import { traverse } from './traverse.js';

const input = readInput('2020', '03');

async function part1() {
    const map = await input;
    console.log(`Part 1: ${traverse(map, 3, 1)}`);
}

async function part2() {
    const map = await input;
    const vectors = [
        [1, 1],
        [3, 1],
        [5, 1],
        [7, 1],
        [1, 2],
    ];

    const sums = vectors.map(([vectorX, vectorY]) =>
        traverse(map, vectorX, vectorY),
    );

    console.log(
        `Part 2: ${sums.reduce((prevVal, curVal) => prevVal * curVal, 1)}`,
    );
}

part1();
part2();
