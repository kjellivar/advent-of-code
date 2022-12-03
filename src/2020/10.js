import assert from 'assert';
import _ from 'lodash';
import { readLines } from '../lib/read-input.js';

const input = _(readLines()).map(Number).sortBy().value();
input.push(input[input.length - 1] + 3);
input.unshift(0);

function part1() {
    const diffs = [0, 0, 0, 0];
    for (let i = 1; i < input.length; i++) {
        const diff = input[i] - input[i - 1];
        if (diff <= 3) {
            diffs[diff]++;
        }
    }
    return diffs[1] * diffs[3];
}

function part2() {
    const cache = new Map();
    return countPaths(0, cache);
}

function countPaths(start, cache) {
    if (cache.has(start)) {
        return cache.get(start);
    }
    let paths = 0;
    for (
        let next = start + 1;
        next < input.length && input[next] - input[start] <= 3;
        next++
    ) {
        paths += countPaths(next, cache);
    }
    paths = paths || 1;
    cache.set(start, paths);
    return paths;
}

test('2020 - Day 10', () => {
    assert.strictEqual(part1(), 1836);
    assert.strictEqual(part2(), 43406276662336);
});
