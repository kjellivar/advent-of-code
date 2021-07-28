import assert from 'assert';
import _ from 'lodash';
import { readLines } from '../lib/read-input.js';

const input = readLines(2020, 9).map(Number);

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
    const sumToFind = part1();
    const entries = input.entries();
    for (let [i, sum] of entries) {
        for (let j = i + 1; sum <= sumToFind; sum += input[j++]) {
            if (sum === sumToFind) {
                const sorted = _(input.slice(i, j + 1)).sortBy();
                return sorted.first() + sorted.last();
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

describe('2020 - Day 9', () => {
    it('part1 is 23278925', () => {
        assert.strictEqual(part1(), 23278925);
    });
    it('part2 is 4011064', () => {
        assert.strictEqual(part2(), 4011064);
    });
});
