import assert from 'assert';
import { readLines } from '../lib/read-input.js';

const numbers = readLines().map(Number);

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

test('2020 - Day 1', () => {
    assert.strictEqual(part1(), 545379);
    assert.strictEqual(part2(), 257778836);
});
