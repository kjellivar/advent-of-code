import assert from 'assert';
import { readLines } from '../lib/read-input.js';

const moves = readLines(2021, 2).map((line) =>
    line.split(' ').map((val) => (Number(val) ? Number(val) : val)),
);

function part1() {
    let depth = 0;
    let horizontal = 0;
    moves.forEach(([direction, amount]) => {
        switch (direction) {
            case 'forward':
                horizontal += amount;
                break;
            case 'up':
                depth -= amount;
                break;
            case 'down':
                depth += amount;
                break;
        }
    });
    return depth * horizontal;
}

function part2() {
    let depth = 0;
    let horizontal = 0;
    let aim = 0;
    moves.forEach(([direction, amount]) => {
        switch (direction) {
            case 'forward':
                horizontal += amount;
                depth += aim * amount;
                break;
            case 'up':
                aim -= amount;
                break;
            case 'down':
                aim += amount;
                break;
        }
    });
    return depth * horizontal;
}

describe('2021 - Day 2', () => {
    it('part1 is 1654760', () => {
        assert.strictEqual(part1(), 1654760);
    });

    it('part2 is 1956047400', () => {
        assert.strictEqual(part2(), 1956047400);
    });
});
