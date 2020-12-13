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

function findEarliestTimestamp([[id, offset], ...tails], t = 0, iterator = 1) {
    const times = [];
    while (times.length !== 2) {
        if ((t + offset) % id === 0) {
            times.push(t);
        }
        t += iterator;
    }
    return tails.length
        ? findEarliestTimestamp(tails, times[0], times[1] - times[0])
        : times[0];
}

export { part1, part2 };
