import { readLines } from '../../lib/read-input.js';

const input = readLines('2020', '09').map((line) => Number(line));

function part1() {
    const preambleLength = 25;
    for (let i = preambleLength; i < input.length; i++) {
        const pre = input.slice(i - preambleLength, i);
        const number = input[i];
        if (!hasSum(pre, number)) {
            return number;
        }
    }
}

function part2() {
    const number = part1();
    for (let i = 0; i < input.length; i++) {
        let sum = input[i];
        for (let j = i + 1; j < input.length; j++) {
            sum += input[j];
            if (sum > number) {
                break;
            } else if (sum === number) {
                const sorted = input.slice(i, j + 1).sort((a, b) => a - b);
                return sorted.shift() + sorted.pop();
            }
        }
    }
}

function hasSum(arr, sumToFind) {
    for (const a of arr) {
        for (const b of arr) {
            if (a !== b && a + b === sumToFind) {
                return true;
            }
        }
    }
    return false;
}

export { part1, part2 };
