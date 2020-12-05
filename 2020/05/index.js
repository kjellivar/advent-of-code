import { readInput } from '../../lib/read-input.js';
import { getSeatId } from './get-seat-id.js';

const seatIds = readInput('2020', '05')
    .map(getSeatId)
    .sort((a, b) => a - b);

function lastSeatId() {
    return seatIds[seatIds.length - 1];
}

function missingSeatId() {
    for (let id = seatIds[0]; id < lastSeatId(); id++) {
        const lowerId = id - 1;
        const higherId = id + 1;
        if (
            !seatIds.includes(id) &&
            seatIds.includes(lowerId) &&
            seatIds.includes(higherId)
        ) {
            return id;
        }
    }
}

console.log(`Part 1: Largest seatId is ${lastSeatId()}`);
console.log(`Part 2: Missing seatId is ${missingSeatId()}`);
