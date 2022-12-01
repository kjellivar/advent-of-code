import assert from 'assert';
import _ from 'lodash';
import { readLineGroups } from '../lib/read-input.js';

const cals = _(readLineGroups(2022, 1))
    .map((inv) => inv.map(Number)) // cast string -> number
    .map((inv) => _(inv).sum()) // sum each elf inventory
    .sortBy(); // sort sums

function part1() {
    return cals.last();
}

function part2() {
    return cals.takeRight(3).sum();
}

describe('2022 - Day 1', () => {
    it('part1 is 70698', () => {
        assert.strictEqual(part1(), 70698);
    });

    it('part2 is 206643', () => {
        assert.strictEqual(part2(), 206643);
    });
});
