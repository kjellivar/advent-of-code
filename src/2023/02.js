import assert from 'assert';
import _ from 'lodash';
import { readLines } from '../lib/read-input.js';

const input = _(readLines())
    .map((line) => line.split(': '))
    .map(([game, sets]) => [
        Number(game.match(/\d+/).pop()),
        {
            reds: sets.match(/\d+(?= red)/g).map(Number),
            greens: sets.match(/\d+(?= green)/g).map(Number),
            blues: sets.match(/\d+(?= blue)/g).map(Number),
        },
    ]);

function part1() {
    return input
        .filter(
            ([_id, game]) =>
                game.reds.every((r) => r <= 12) &&
                game.greens.every((g) => g <= 13) &&
                game.blues.every((b) => b <= 14),
        )
        .map(([id]) => id)
        .sum();
}

function part2() {
    return input
        .map(([_id, game]) =>
            [
                _(game.reds).max(),
                _(game.greens).max(),
                _(game.blues).max(),
            ].reduce((a, b) => a * b),
        )
        .sum();
}

test('2023 - Day 02', () => {
    assert.strictEqual(part1(), 2727);
    assert.strictEqual(part2(), 56580);
});
