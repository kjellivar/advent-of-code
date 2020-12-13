import _ from 'lodash';
import { readLines } from '../../lib/read-input.js';

const [line1, line2] = readLines('2020', '13');

function part1() {
    const start = Number(line1);
    let time = start;
    const busLines = line2.split(',').map(Number).filter(Boolean);
    while (!busLines.some((id) => time % id === 0)) {
        time++;
    }
    const waitTime = time - start;
    const id = busLines.find((id) => time % id === 0);
    return id * waitTime;
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
