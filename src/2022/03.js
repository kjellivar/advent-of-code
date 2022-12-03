import assert from 'assert';
import _ from 'lodash';
import { readLines } from '../lib/read-input.js';

const input = _(readLines().map((line) => line.split('')));

const priorities = (arrs) =>
    _.uniq(_.intersection(...arrs)).map((c) =>
        '_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(c),
    );

const part1 = input
    .map((line) => _.chunk(line, line.length / 2))
    .flatMap(priorities)
    .sum();

const part2 = input.chunk(3).flatMap(priorities).sum();

test(`2022 - Day 3`, () => {
    assert.strictEqual(part1, 7763);
    assert.strictEqual(part2, 2569);
});
