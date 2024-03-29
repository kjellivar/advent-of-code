import assert from 'assert';
import _ from 'lodash';
import { readLines } from '../lib/read-input.js';

const input = readLines().map((line) => [
    Number(line.match(/(?<=game )\d+/gi).pop()),
    line.match(/\d+(?= red)/g).map(Number),
    line.match(/\d+(?= green)/g).map(Number),
    line.match(/\d+(?= blue)/g).map(Number),
]);

function part1() {
    return input
        .filter(
            ([_id, reds, greens, blues]) =>
                reds.every((r) => r <= 12) &&
                greens.every((g) => g <= 13) &&
                blues.every((b) => b <= 14),
        )
        .map(([id]) => id)
        .reduce(_.add);
}

function part2() {
    return input
        .map(([_id, ...rgbs]) => rgbs.map(_.max).reduce(_.multiply))
        .reduce(_.add);
}

test('2023 - Day 02', () => {
    assert.strictEqual(part1(), 2727);
    assert.strictEqual(part2(), 56580);
});
