import assert from 'assert';
import _ from 'lodash';
import { readLines } from '../lib/read-input.js';

const input = readLines();

function run(initialX, cb) {
    let x = initialX;
    let cycles = 0;
    for (const line of input) {
        const [op, num] = line.split(' ');
        cycles += 1;
        cb(x, cycles);
        if (op === 'addx') {
            cycles += 1;
            cb(x, cycles);
            x += Number(num);
        }
    }
}

function part1() {
    let strength = 0;

    run(1, (x, cycles) => {
        if ([20, 60, 100, 140, 180, 220].some((val) => cycles === val)) {
            strength += x * cycles;
        }
    });
    return strength;
}

function part2() {
    let pixels = [];

    run(2, (x, cycles) => {
        if ([x - 1, x, x + 1].some((val) => cycles % 40 === val)) {
            pixels.push('#');
        } else pixels.push('.');
    });
    return _.chunk(pixels, 40)
        .map((line) => line.join(''))
        .join('\n');
}

test('2022 - Day 10', () => {
    assert.strictEqual(part1(), 15120);
    assert.strictEqual(
        part2(),
        `###..#..#.###....##.###..###..#.....##.#
#..#.#.#..#..#....#.#..#.#..#.#....#..#.
#..#.##...#..#....#.###..#..#.#....#..#.
###..#.#..###.....#.#..#.###..#....####.
#.#..#.#..#....#..#.#..#.#....#....#..#.
#..#.#..#.#.....##..###..#....####.#..#.`,
    );
});
