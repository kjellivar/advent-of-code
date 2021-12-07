import { URL } from 'url';
import assert from 'assert';
import lodash from 'lodash';
import { readLines } from '../lib/read-input.js';
import { LineSegment } from '../lib/line-segment.js';

const FILE_PATH = new URL('', import.meta.url).pathname.split('/');
const YEAR = parseInt(FILE_PATH[FILE_PATH.length - 2]);
const DAY = parseInt(FILE_PATH[FILE_PATH.length - 1]);

const input = lodash(
    readLines(YEAR, DAY)
        .map((l) =>
            l.split(' -> ').map((coords) => coords.split(',').map(Number)),
        )
        .map((line) => new LineSegment(line)),
);

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

describe(`${YEAR} - Day ${DAY}`, () => {
    it('part1 is 6666', () => {
        assert.strictEqual(part1(), 6666);
    });

    it('part2 is 19081', () => {
        assert.strictEqual(part2(), 19081);
    });
});
