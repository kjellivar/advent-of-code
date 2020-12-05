import { readInput } from '../../lib/read-input.js';
import { traverse } from './traverse.js';

const map = readInput('2020', '03');

function part1() {
    console.log(`Part 1: ${traverse(map, 3, 1)}`);
}

function part2() {
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
