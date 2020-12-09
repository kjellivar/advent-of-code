import { readLines } from '../../lib/read-input.js';

const input = readLines('2020', '09').map((line) => Number(line));

function part1() {
    const entries = input.slice(25).entries();
    for (const [i, num] of entries) {
        const pre = input.slice(i, 25 + i); // 0-25,1-26 etc
        if (!hasSum(pre, num)) {
            return num;
        }
    }
}

function part2() {
    const entries = input.entries();
    const sumToFind = part1();
    for (let [i, sum] of entries) {
        for (let j = i + 1; sum <= sumToFind; sum += input[j++]) {
            if (sum === sumToFind) {
                const sorted = input.slice(i, j + 1).sort((a, b) => a - b);
                return sorted.shift() + sorted.pop();
            }
        }
    }
}

function hasSum(arr, sumToFind) {
    for (const [i, num1] of arr.entries()) {
        if (arr.slice(i + 1).some((num2) => num1 + num2 === sumToFind)) {
            return true;
        }
    }
    return false;
}

export { part1, part2 };
