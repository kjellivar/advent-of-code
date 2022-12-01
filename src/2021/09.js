import assert from 'assert';
import lodash from 'lodash';
import { readLines } from '../lib/read-input.js';

const { sum } = lodash;
const input = readLines(2021, 9).map((v) => v.split('').map(Number));

/**
2199943210
3987894921  l[2][1] < l[i-1][j] && < l[i+1][j] && < l[i][j-1] && < l[i][j+1]
                    *
9856789892       *  ↑  *
8767896789     * <- o -> *
9899965678       *  ↓  *
                    * 
*/

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

// eslint-disable-next-line no-unused-vars
function getHighPoints() {
    return input.map((row) => row.map((height) => (height === 9 ? 'X' : '.')));
}

function part1() {
    return sum(getLowPoints().map(([x, y]) => riskLevel(input[x][y])));
}

function part2() {
    // get low points
    // go left, up, right, down - for each of these points do the same
    // terminate when height 9
}

describe(`2021 - Day 9`, () => {
    it('part1 is 436', () => {
        assert.strictEqual(part1(), 436);
    });

    it('part2 is ?', () => {
        assert.strictEqual(part2(), undefined);
    });
});
