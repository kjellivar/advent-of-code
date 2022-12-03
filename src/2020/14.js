import assert from 'assert';
import { readLines } from '../lib/read-input.js';

const input = readLines().map((line) => line.split(' = '));
const X = /X/g;
const memRegex = /mem\[|\]/g;

function part1() {
    const mem = [];
    let maskOn, maskOff;
    input.forEach(([op, val]) => {
        if (op === 'mask') {
            maskOn = BigInt(`0b${val.replace(X, 0)}`);
            maskOff = BigInt(`0b${val.replace(X, 1)}`);
        } else {
            const index = Number(op.replace(memRegex, '')); // mem[8] -> 8
            mem[index] = (BigInt(val) & maskOff) | maskOn;
        }
    });
    return mem.filter(Boolean).reduce((a, b) => a + b);
}

test('2020 - Day 14', () => {
    assert.strictEqual(part1(), 6513443633260n);
});
