import assert from 'assert';
import range from 'lodash/range.js';
import { readLines } from '../lib/read-input.js';

const seatIds = readLines()
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

test('2020 - Day 5', () => {
    assert.strictEqual(lastSeatId(), 976);
    assert.strictEqual(findMissingSeatId(), 685);
});
