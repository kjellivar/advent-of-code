import clamp from 'lodash/clamp.js';
import { readLines } from '../../lib/read-input.js';

const FLOOR = '.';
const EMPTY = 'L';
const OCCUPIED = '#';
const input = readLines('2020', '11').map((line) => line.split(''));

function part1() {
    let prevSeatings = runSimulation(input);
    let seatings = runSimulation(prevSeatings);
    while (prevSeatings.flat().join() !== seatings.flat().join()) {
        prevSeatings = runSimulation(seatings);
        seatings = runSimulation(prevSeatings);
    }
    return seatings.flat().filter((s) => s === OCCUPIED).length;
}

function runSimulation(rows) {
    const newRows = [...rows.map((seats) => [...seats])];
    for (const [y, seats] of rows.entries()) {
        for (const [x, seat] of seats.entries()) {
            const adjacentSeats = [
                (rows[y - 1] ?? [])[x - 1],
                (rows[y - 1] ?? [])[x],
                (rows[y - 1] ?? [])[x + 1],
                seats[x - 1],
                seats[x + 1],
                (rows[y + 1] ?? [])[x - 1],
                (rows[y + 1] ?? [])[x],
                (rows[y + 1] ?? [])[x + 1],
            ];
            if (seat === EMPTY && adjacentSeats.every((s) => s !== OCCUPIED)) {
                newRows[y][x] = OCCUPIED;
            } else if (
                seat === OCCUPIED &&
                adjacentSeats.filter((s) => s === OCCUPIED).length >= 4
            ) {
                newRows[y][x] = EMPTY;
            }
        }
    }
    return newRows.filter(Boolean);
}

function runSimulation2(rows) {
    const newRows = [...rows.map((seats) => [...seats])];
    for (const [y, seats] of rows.entries()) {
        for (const [x, seat] of seats.entries()) {
            const adjacentSeats = Array(8);
            for (let i = 1; i < Math.max(rows.length, seats.length); i++) {
                adjacentSeats[0] =
                    adjacentSeats[0] ??
                    [OCCUPIED, EMPTY].find(
                        (p) => p === (rows[y - i] ?? [])[x - i],
                    );
                adjacentSeats[1] =
                    adjacentSeats[1] ??
                    [OCCUPIED, EMPTY].find((p) => p === (rows[y - i] ?? [])[x]);
                adjacentSeats[2] =
                    adjacentSeats[2] ??
                    [OCCUPIED, EMPTY].find(
                        (p) => p === (rows[y - i] ?? [])[x + i],
                    );
                adjacentSeats[3] =
                    adjacentSeats[3] ??
                    [OCCUPIED, EMPTY].find((p) => p === seats[x - i]);
                adjacentSeats[4] =
                    adjacentSeats[4] ??
                    [OCCUPIED, EMPTY].find((p) => p === seats[x + i]);
                adjacentSeats[5] =
                    adjacentSeats[5] ??
                    [OCCUPIED, EMPTY].find(
                        (p) => p === (rows[y + i] ?? [])[x - i],
                    );
                adjacentSeats[6] =
                    adjacentSeats[6] ??
                    [OCCUPIED, EMPTY].find((p) => p === (rows[y + i] ?? [])[x]);
                adjacentSeats[7] =
                    adjacentSeats[7] ??
                    [OCCUPIED, EMPTY].find(
                        (p) => p === (rows[y + i] ?? [])[x + i],
                    );
                if (adjacentSeats.filter(Boolean).length === 8) {
                    break;
                }
            }

            if (seat === EMPTY && adjacentSeats.every((s) => s !== OCCUPIED)) {
                newRows[y][x] = OCCUPIED;
            } else if (
                seat === OCCUPIED &&
                adjacentSeats.filter((s) => s === OCCUPIED).length >= 5
            ) {
                newRows[y][x] = EMPTY;
            }
        }
    }
    return newRows.filter(Boolean);
}

function part2() {
    let prevSeatings = runSimulation2(input);
    let seatings = runSimulation2(prevSeatings);

    while (prevSeatings.flat().join() !== seatings.flat().join()) {
        prevSeatings = runSimulation2(seatings);
        seatings = runSimulation2(prevSeatings);
    }
    return seatings.flat().filter((s) => s === OCCUPIED).length;
}

export { part1, part2 };
