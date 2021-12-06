import assert from 'assert';
import { readLines } from '../lib/read-input.js';

const input = readLines(2021, 3);

function splitLeastAndMostCommonBits(list, pos) {
    const ones = list.filter((val) => val.charAt(pos) === '1');
    const zeros = list.filter((val) => val.charAt(pos) === '0');
    return ones.length >= zeros.length ? [zeros, ones] : [ones, zeros];
}

function part1() {
    let mostCommonBits = '0b';
    let leastCommonBits = '0b';
    const bitLength = input[0].length;
    for (let i = 0; i < bitLength; i++) {
        const [least, most] = splitLeastAndMostCommonBits(input, i);
        mostCommonBits += most[0].charAt(i);
        leastCommonBits += least[0].charAt(i);
    }
    return Number(mostCommonBits) * Number(leastCommonBits);
}

function part2() {
    let [co2, oxygen] = splitLeastAndMostCommonBits(input, 0);
    for (let i = 1; co2.length > 1 || oxygen.length > 1; i++) {
        if (co2.length > 1) [co2] = splitLeastAndMostCommonBits(co2, i);
        if (oxygen.length > 1)
            [, oxygen] = splitLeastAndMostCommonBits(oxygen, i);
    }
    return Number(`0b${co2[0]}`) * Number(`0b${oxygen[0]}`);
}

describe('2021 - Day 3', () => {
    it('part1 is 3912944', () => {
        assert.strictEqual(part1(), 3912944);
    });

    it('part2 is 4996233', () => {
        assert.strictEqual(part2(), 4996233);
    });
});
