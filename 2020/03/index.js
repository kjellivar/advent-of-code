import { readLines } from '../../lib/read-input.js';
import { traverse } from './traverse.js';

const map = readLines('2020', '03');

function part1() {
    return traverse(map, 3, 1);
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

    return sums.reduce((prevVal, curVal) => prevVal * curVal, 1);
}

export { part1, part2, traverse };
