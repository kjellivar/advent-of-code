import { readLines } from '../../lib/read-input.js';

const input = readLines('2020', '09').map((line) => Number(line));

function part1() {
    for (let i = 25; i < input.length; i++) {
        const pre = input.slice(i - 25, i); // 0-25,1-26 etc
        if (!hasSum(pre, input[i])) {
            return input[i];
        }
    }
}

function part2() {
    const sumToFind = part1();
    for (let i = 0; i < input.length; i++) {
        let sum = input[i];
        for (let j = i + 1; sum <= sumToFind; sum += input[j++]) {
            if (sum === sumToFind) {
                const sorted = input.slice(i, j + 1).sort((a, b) => a - b);
                return sorted.shift() + sorted.pop();
            }
        }
    }
}

function hasSum(arr, sumToFind) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === sumToFind) {
                return true;
            }
        }
    }
    return false;
}

export { part1, part2 };
