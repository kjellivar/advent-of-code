import assert from 'assert';
import { readLines } from '../lib/read-input.js';

const map = readLines();

function part1() {
    return sled(map, 3, 1);
}

function part2() {
    const vectors = [
        [1, 1],
        [3, 1],
        [5, 1],
        [7, 1],
        [1, 2],
    ];
    const sums = vectors.map(([vectorX, vectorY]) =>
        sled(map, vectorX, vectorY),
    );
    return sums.reduce((prevVal, curVal) => prevVal * curVal, 1);
}

/**
 * @param {Array<string>} map
 * @param {number} vectorX
 * @param {number} vectorY
 * @return {number} trees hit
 */
function sled(map, vectorX, vectorY) {
    let x = 0;
    let trees = 0;
    for (let y = vectorY; y < map.length; y += vectorY) {
        x = (x + vectorX) % map[y].length;
        if (map[y].charAt(x) === '#') {
            trees++;
        }
    }
    return trees;
}

test('2020 - Day 3', () => {
    assert.strictEqual(part1(), 244);
    assert.strictEqual(part2(), 9406609920);
});
