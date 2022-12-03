import assert from 'assert';
import _ from 'lodash';
import { readLines } from '../lib/read-input.js';

const priorities = (arrs) =>
    _.uniq(_.intersection(...arrs)).map((char) =>
        char.match(/[a-z]/) ? char.charCodeAt() - 96 : char.charCodeAt() - 38,
    );

const input = _(readLines(2022, 3).map((line) => line.split('')));

function part1() {
    return input
        .map((line) => _.chunk(line, line.length / 2))
        .flatMap(priorities)
        .sum();
}

function part2() {
    return input.chunk(3).flatMap(priorities).sum();
}

describe(`2022 - Day 3`, () => {
    it('part1 is 7763', () => {
        assert.strictEqual(part1(), 7763);
    });

    it('part2 is 2569', () => {
        assert.strictEqual(part2(), 2569);
    });
});
