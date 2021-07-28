import { readLines } from '../../lib/read-input.js';

const numbers = readLines('2020', '01').map(Number);

function part1() {
    for (const i of numbers) {
        for (const j of numbers) {
            if (i + j === 2020) {
                return i * j;
            }
        }
    }
}

function part2() {
    for (const i of numbers) {
        for (const j of numbers) {
            for (const k of numbers) {
                if (i + j + k === 2020) {
                    return i * j * k;
                }
            }
        }
    }
}

export { part1, part2 };
