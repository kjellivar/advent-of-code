import assert from 'assert';
import * as day1 from '../2020/01/index.js';
import * as day2 from '../2020/02/index.js';
import * as day3 from '../2020/03/index.js';
import * as day4 from '../2020/04/index.js';
import * as day5 from '../2020/05/index.js';
import * as day6 from '../2020/06/index.js';

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
        const { part1, part2, traverse } = day3;
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
        it('traverse should count trees we hit', () => {
            assert.strictEqual(traverse(map, 3, 1), 7);
            assert.strictEqual(traverse(map, 0, 1), 3);
            assert.strictEqual(traverse(map, 1, 2), 2);
            assert.strictEqual(traverse(map, 5, 1), 3);
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
});
