import assert from 'assert';
import { readLines } from '../lib/read-input.js';

const input = readLines(2020, 2).map(parseLine);

function parseLine(line) {
    // 2-7 p: pbhhzpmppb
    const [positions, allowedChar, password] = line.split(' ');
    return {
        positions: positions.split('-').map(Number),
        allowedChar: allowedChar.charAt(0),
        password,
    };
}

function part1() {
    const validations = input.map(
        ({ positions: [min, max], allowedChar, password }) => {
            const regex = new RegExp(allowedChar, 'g');
            const matches = (password.match(regex) ?? []).length;
            return min <= matches && matches <= max;
        },
    );

    return validations.filter(Boolean).length;
}

function part2() {
    const validations = input.map(
        ({ positions: [pos1, pos2], allowedChar, password }) =>
            (password.charAt(pos1 - 1) === allowedChar) !==
            (password.charAt(pos2 - 1) === allowedChar),
    );

    return validations.filter(Boolean).length;
}

describe('2020 - Day 2', () => {
    it('part1 is 524', () => {
        assert.strictEqual(part1(), 524);
    });
    it('part2 is 485', () => {
        assert.strictEqual(part2(), 485);
    });
});
