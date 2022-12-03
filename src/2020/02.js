import assert from 'assert';
import { readLines } from '../lib/read-input.js';

const input = readLines().map(parseLine);

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

test('2020 - Day 02', () => {
    assert.strictEqual(part1(), 524);
    assert.strictEqual(part2(), 485);
});
