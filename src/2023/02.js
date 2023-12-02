import assert from 'assert';
import _ from 'lodash';
import { readLines } from '../lib/read-input.js';

const input = _(readLines())
    .map((line) => line.split(': '))
    .map(([game, sets]) => [
        Number(game.match(/\d+/).pop()),
        sets.split('; ').map(
            (set) =>
                new Map(
                    set
                        .split(', ')
                        .map((set) => set.split(' '))
                        .map(([num, color]) => [color, Number(num)]),
                ),
        ),
    ]);

function part1() {
    return input
        .filter(([_, sets]) =>
            sets.every(
                (set) =>
                    (set.get('red') ?? 0) <= 12 &&
                    (set.get('green') ?? 0) <= 13 &&
                    (set.get('blue') ?? 0) <= 14,
            ),
        )
        .map(([game]) => game)
        .sum();
}

function part2() {
    return input
        .map(([_game, sets]) => {
            const mins = [0, 0, 0]; // RGB
            sets.forEach((set) => {
                ['red', 'green', 'blue'].forEach((col, i) => {
                    const num = set.get(col) ?? 0;
                    if (num > mins[i]) mins[i] = num;
                });
            });
            return mins.reduce((a, b) => a * b);
        })
        .sum();
}

test('2023 - Day 02', () => {
    assert.strictEqual(part1(), 2727);
    assert.strictEqual(part2(), 56580);
});
