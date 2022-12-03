import assert from 'assert';
import lodash from 'lodash';
import { readLines } from '../lib/read-input.js';
import { LineSegment } from '../lib/line-segment.js';

const input = lodash(readLines())
    .map((l) => l.split(' -> ').map((coords) => coords.split(',').map(Number)))
    .map((line) => new LineSegment(line));

function part1() {
    return solve((line) => line.isHorizontal() || line.isVertical());
}

function part2() {
    return solve();
}

function solve(filter = () => true) {
    return input
        .filter(filter)
        .flatMap((line) => line.points)
        .countBy((p) => `${p.x},${p.y}`)
        .toArray()
        .filter((val) => val > 1)
        .size();
}

test('2021 - Day 5', () => {
    assert.strictEqual(part1(), 6666);
    assert.strictEqual(part2(), 19081);
});
