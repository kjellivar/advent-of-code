import assert from 'assert';
import { readLines } from '../lib/read-input.js';

const input = readLines(2021, 3).map((val) => val.split('').map(Number));

function filterByMostCommonBit(list, pos) {
    const ones = list.filter((val) => val[pos] === 1);
    const zeros = list.filter((val) => val[pos] === 0);
    if (ones.length >= zeros.length) {
        return ones;
    } else {
        return zeros;
    }
}

function filterByLeastCommonBit(list, i) {
    const ones = list.filter((val) => val[i] === 1);
    const zeros = list.filter((val) => val[i] === 0);
    if (ones.length < zeros.length) {
        return ones;
    } else {
        return zeros;
    }
}

function part1() {
    let mostCommonBits = '';
    let leastCommonBits = '';
    const length = input[0].length;
    for (let i = 0; i < length; i++) {
        mostCommonBits += filterByMostCommonBit(input, i)[0][i].toString();
        leastCommonBits += filterByLeastCommonBit(input, i)[0][i].toString();
    }
    return parseInt(mostCommonBits, 2) * parseInt(leastCommonBits, 2);
}

function part2() {
    let i = 0;
    let co2Scrubber = input;
    let oxygenGenerator = input;
    while (co2Scrubber.length > 1) {
        co2Scrubber = filterByLeastCommonBit(co2Scrubber, i);
        i++;
    }
    i = 0;
    while (oxygenGenerator.length > 1) {
        oxygenGenerator = filterByMostCommonBit(oxygenGenerator, i);
        i++;
    }
    return (
        parseInt(co2Scrubber[0].join(''), 2) *
        parseInt(oxygenGenerator[0].join(''), 2)
    );
}

describe('2021 - Day 3', () => {
    it('part1 is 3912944', () => {
        assert.strictEqual(part1(), 3912944);
    });

    it('part2 is 4996233', () => {
        assert.strictEqual(part2(), 4996233);
    });
});
