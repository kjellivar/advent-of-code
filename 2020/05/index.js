import { readInput } from '../../lib/read-input.js';
import { getSeatId } from './get-seat-id.js';

const seatIds = readInput('2020', '05')
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

export { getSeatId, lastSeatId, findMissingSeatId };
