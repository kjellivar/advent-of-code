import assert from 'assert';
import lodash from 'lodash';
import { readLines } from '../lib/read-input.js';

const { sum } = lodash;
const input = readLines(2021, 9).map((v) => v.split('').map(Number));

const riskLevel = (height) => 1 + height;
const getHeight = (x, y) => input?.[x]?.[y] ?? 9;

function getLowPoints() {
    return input.flatMap((row, x) =>
        row
            .map((height, y) => {
                const isLowPoint = [-1, 1].every(
                    (n) =>
                        height < getHeight(x + n, y) &&
                        height < getHeight(x, y + n),
                );
                return isLowPoint ? [x, y] : null;
            })
            .filter(Boolean),
    );
}

function part1() {
    return sum(getLowPoints().map(([x, y]) => riskLevel(input[x][y])));
}

function part2() {}

describe(`2021 - Day 9`, () => {
    it('part1 is 436', () => {
        assert.strictEqual(part1(), 436);
    });

    it('part2 is ?', () => {
        assert.strictEqual(part2(), undefined);
    });
});
