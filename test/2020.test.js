import assert from 'assert';
import * as day1 from '../2020/01/index.js';
import * as day2 from '../2020/02/index.js';
import * as day3 from '../2020/03/index.js';
import * as day4 from '../2020/04/index.js';
import * as day5 from '../2020/05/index.js';
import * as day6 from '../2020/06/index.js';
import * as day7 from '../2020/07/index.js';
import * as day8 from '../2020/08/index.js';
import * as day9 from '../2020/09/index.js';
import * as day10 from '../2020/10/index.js';
import * as day11 from '../2020/11/index.js';
import * as day12 from '../2020/12/index.js';

describe('2020', () => {
    describe('Day 1', () => {
        const { part1, part2 } = day1;
        it('part1 is 545379', () => {
            assert.strictEqual(part1(), 545379);
        });
        it('part2 is 257778836', () => {
            assert.strictEqual(part2(), 257778836);
        });
    });

    describe('Day 2', () => {
        const { part1, part2 } = day2;
        it('part1 is 524', () => {
            assert.strictEqual(part1(), 524);
        });
        it('part2 is 485', () => {
            assert.strictEqual(part2(), 485);
        });
    });

    describe('Day 3', () => {
        const { part1, part2, sled } = day3;
        const map = [
            '..##.......',
            '#...#...#..',
            '.#....#..#.',
            '..#.#...#.#',
            '.#...##..#.',
            '..#.##.....',
            '.#.#.#....#',
            '.#........#',
            '#.##...#...',
            '#...##....#',
            '.#..#...#.#',
        ];
        it('sled should count trees we hit', () => {
            assert.strictEqual(sled(map, 3, 1), 7);
            assert.strictEqual(sled(map, 0, 1), 3);
            assert.strictEqual(sled(map, 1, 2), 2);
            assert.strictEqual(sled(map, 5, 1), 3);
        });
        it('part1 is 244', () => {
            assert.strictEqual(part1(), 244);
        });
        it('part2 is 9406609920', () => {
            assert.strictEqual(part2(), 9406609920);
        });
    });

    describe('Day 4', () => {
        const { part1, part2 } = day4;
        it('part1 is 190', () => {
            assert.strictEqual(part1(), 190);
        });
        it('part2 is 121', () => {
            assert.strictEqual(part2(), 121);
        });
    });

    describe('Day 5', () => {
        const { getSeatId, findMissingSeatId, lastSeatId } = day5;
        it('getSeatId should calculate the right seat id', () => {
            assert.strictEqual(getSeatId('FBFBBFFRLR'), 357);
            assert.strictEqual(getSeatId('BFFFBBFRRR'), 567);
            assert.strictEqual(getSeatId('FFFBBBFRRR'), 119);
            assert.strictEqual(getSeatId('BBFFBBFRLL'), 820);
        });
        it('part1 is 976', () => {
            assert.strictEqual(lastSeatId(), 976);
        });
        it('part2 is 685', () => {
            assert.strictEqual(findMissingSeatId(), 685);
        });
    });

    describe('Day 6', () => {
        const { part1, part2 } = day6;
        it('part1 is 6310', () => {
            assert.strictEqual(part1(), 6310);
        });
        it('part2 is 3193', () => {
            assert.strictEqual(part2(), 3193);
        });
    });

    describe('Day 7', () => {
        const { part1, part2 } = day7;
        it('part1 is 213', () => {
            assert.strictEqual(part1(), 213);
        });
        it('part2 is 38426', () => {
            assert.strictEqual(part2(), 38426);
        });
    });

    describe('Day 8', () => {
        const { part1, part2 } = day8;
        it('part1 is 1915', () => {
            assert.strictEqual(part1(), 1915);
        });
        it('part2 is 944', () => {
            assert.strictEqual(part2(), 944);
        });
    });

    describe('Day 9', () => {
        const { part1, part2 } = day9;
        it('part1 is 23278925', () => {
            assert.strictEqual(part1(), 23278925);
        });
        it('part2 is 4011064', () => {
            assert.strictEqual(part2(), 4011064);
        });
    });

    describe('Day 10', () => {
        const { part1, part2 } = day10;
        it('part1 is 1836', () => {
            assert.strictEqual(part1(), 1836);
        });
        it('part2 is 43406276662336', () => {
            assert.strictEqual(part2(), 43406276662336);
        });
    });

    describe('Day 11', () => {
        const { part1, part2 } = day11;
        it('part1 is 2238', () => {
            assert.strictEqual(part1(), 2238);
        });
        it('part2 is 2013', () => {
            assert.strictEqual(part2(), 2013);
        });
    });

    describe('Day 12', () => {
        const { part1, part2 } = day12;
        it('part1 is 1177', () => {
            assert.strictEqual(part1(), 1177);
        });
        it('part2 is 46530', () => {
            assert.strictEqual(part2(), 46530);
        });
    });
});
