import { readLines } from '../../lib/read-input.js';

const [line1, line2] = readLines('2020', '13');

function part1() {
    const start = Number(line1);
    const busLines = line2.split(',').map(Number).filter(Boolean);
    let time = start;
    while (time++) {
        const id = busLines.find((id) => time % id === 0);
        if (id) {
            return id * (time - start);
        }
    }
}

function part2() {
    const busLines = line2
        .split(',')
        .map((num, offset) => (num === 'x' ? null : [Number(num), offset]))
        .filter(Boolean);
    return findEarliestTimestamp(busLines);
}

function findEarliestTimestamp([[id, offset], ...rest], timeStamp = 0, dt = 1) {
    const t = [];
    while (t.length !== 2) {
        if ((timeStamp + offset) % id === 0) {
            t.push(timeStamp);
        }
        timeStamp += dt;
    }
    return rest.length ? findEarliestTimestamp(rest, t[0], t[1] - t[0]) : t[0];
}

export { part1, part2 };
