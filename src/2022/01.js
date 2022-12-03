import assert from 'assert';
import _ from 'lodash';
import { readLineGroups } from '../lib/read-input.js';

const cals = _(readLineGroups())
    .map((inv) => _.sum(inv.map(Number))) // cast string -> number and sum
    .sortBy(); // sort sums

const part1 = cals.last();

const part2 = cals.takeRight(3).sum();

test('2022 - Day 01', () => {
    assert.strictEqual(part1, 70698);
    assert.strictEqual(part2, 206643);
});
