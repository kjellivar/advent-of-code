import assert from 'assert';
import _ from 'lodash';
import { readLines } from '../lib/read-input.js';

const lines = readLines();

const numMap = new Map([
    ['one', 'o1e'],
    ['two', 't2o'],
    ['three', 't3e'],
    ['four', 'f4r'],
    ['five', 'f5e'],
    ['six', 's6x'],
    ['seven', 's7n'],
    ['eight', 'e8t'],
    ['nine', 'n9e'],
]);

function part1(input = lines) {
    return input
        .map((line) => line.split('').filter(Number))
        .map((numbers) => Number(numbers.at(0) + numbers.at(-1)))
        .reduce(_.add);
}

function part2() {
    const input = lines.map((line) => {
        for (const [key, val] of numMap) {
            line = line.replaceAll(key, val);
        }
        return line;
    });
    return part1(input);
}

test('2023 - Day 01', () => {
    assert.strictEqual(part1(), 54708);
    assert.strictEqual(part2(), 54087);
});
