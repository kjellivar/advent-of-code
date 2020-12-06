import { readLines } from '../../lib/read-input.js';

const seatIds = readLines('2020', '05')
    .map(getSeatId)
    .sort((a, b) => a - b);

// Part 1
function lastSeatId() {
    return seatIds[seatIds.length - 1];
}

// Part 2
function findMissingSeatId() {
    for (let id = seatIds[0]; id < lastSeatId(); id++) {
        if (!seatIds.includes(id)) {
            return id;
        }
    }
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

export { getSeatId, lastSeatId, findMissingSeatId };
