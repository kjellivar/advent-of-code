import assert from 'assert';
import { readLines } from '../lib/read-input.js';

const numbers = readLines(2020, 1).map(Number);

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

describe('2020 - Day 1', () => {
    it('part1 is 545379', () => {
        assert.strictEqual(part1(), 545379);
    });
    it('part2 is 257778836', () => {
        assert.strictEqual(part2(), 257778836);
    });
});
