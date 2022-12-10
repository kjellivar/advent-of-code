import assert from 'assert';
import _ from 'lodash';
import { readLines } from '../lib/read-input.js';

const lines = readLines().map((line) => line.split('').map(Number));
const rot = _.unzip(lines);

function checkTrees(cb) {
    for (let row = 1; row < lines.length - 1; row++) {
        for (let col = 1; col < lines[row].length - 1; col++) {
            const height = lines[row][col];
            const left = lines[row].slice(0, col).reverse();
            const right = lines[row].slice(col + 1);
            const top = rot[col].slice(0, row).reverse();
            const bot = rot[col].slice(row + 1);
            cb([left, right, top, bot], height);
        }
    }
}

function part1() {
    const scores = [lines.length * 2 + (lines[0].length - 2) * 2];
    checkTrees((dirs, height) => {
        scores.push(Number(dirs.some((a) => _.max(a) < height)));
    });
    return _.sum(scores);
}

function part2() {
    const scores = [];
    checkTrees((dirs, height) => {
        scores.push(
            dirs
                .map((a) => a.findIndex((v) => v >= height) + 1 || a.length)
                .reduce(_.multiply),
        );
    });
    return _.max(scores);
}

test('2022 - Day 08', () => {
    assert.strictEqual(part1(), 1801);
    assert.strictEqual(part2(), 209880);
});
