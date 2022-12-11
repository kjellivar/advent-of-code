import assert from 'assert';
import _ from 'lodash';
import { readLines } from '../lib/read-input.js';

const lines = readLines();

let loc = [];
const dirs = new Map();
const sizes = new Map();

for (const line of lines) {
    const [first, last] = line.split(' ').filter((val) => val !== '$');
    const cur = loc.join('/');
    if (first === 'cd') {
        if (last === '..') loc.pop();
        else if (last === '/') loc = ['.'];
        else loc.push(last);
    } else if (first === 'dir') {
        dirs.set(cur, [...(dirs.get(cur) ?? []), last]);
    } else if (Number(first)) {
        const num = sizes.get(cur) ?? 0;
        sizes.set(cur, num + Number(first));
    }
}

function getSize(path) {
    let sum = 0;
    const queue = [path];
    while (queue.length) {
        const node = queue.shift();
        sum += sizes.get(node) ?? 0;
        const subdirs = dirs.get(node)?.map((d) => `${node}/${d}`);
        if (subdirs?.length) {
            queue.push(...subdirs);
        }
    }
    return sum;
}

const fileSizes = [];

for (const [dir] of dirs) {
    fileSizes.push(getSize(dir));
}

for (const [dir, size] of sizes) {
    if (!dirs.get(dir)) fileSizes.push(size);
}

const part1 = _.sum(fileSizes.filter((val) => val <= 100_000));
const part2 = _.min(
    fileSizes.filter((val) => val >= 30000000 - (70000000 - fileSizes[0])),
);

test('2022 - Day 07', () => {
    assert.strictEqual(part1, 1581595);
    assert.strictEqual(part2, 1544176);
});
