import assert from 'assert';
import range from 'lodash/range.js';
import { readLines } from '../lib/read-input.js';

const seatIds = readLines(2020, 5)
    .map(getSeatId)
    .sort((a, b) => a - b);

// Part 1
function lastSeatId() {
    return seatIds[seatIds.length - 1];
}

// Part 2
function findMissingSeatId() {
    return range(seatIds[0], lastSeatId()).find((num, i) => seatIds[i] !== num);
}

/**
 * Thanks to all other AoC'ers who made me understand that boarding pass
 * is encoded in binary <3
 * @param {string} boardingPass - example BBFBFBBLRL
 * @returns {number} seat id
 */
function getSeatId(boardingPass) {
    const binary = boardingPass.replace(/F|L/g, '0').replace(/B|R/g, '1');
    return parseInt(binary, 2);
}

describe('2020 - Day 5', () => {
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
