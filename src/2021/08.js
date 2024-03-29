import assert from 'assert';
import lodash from 'lodash';
import { readLines } from '../lib/read-input.js';

const { sum } = lodash;
const input = readLines().map((line) =>
    line
        .split(' | ')
        .map((val) => val.split(' ').map((val) => val.split('').sort())),
);

function part1() {
    return input.flatMap(([_, output]) =>
        output.filter((digit) => [2, 3, 4, 7].includes(digit.length)),
    ).length;
}

function part2() {
    const val = input.map(([l, output]) => {
        const [one, seven, four, eight] = l
            .filter((v) => [2, 3, 4, 7].includes(v.length))
            .sort((a, b) => a.length - b.length);
        const numbers = [[], one, [], [], four, [], [], seven, eight, []];
        numbers[9] = findSuperSetNumber(l, 6, four);
        numbers[0] = findSuperSetNumber(l, 6, one, (v) => v !== numbers[9]);
        numbers[6] = l.find((v) => v.length === 6 && !numbers.includes(v));
        numbers[3] = findSuperSetNumber(l, 5, one);
        numbers[5] = findSubSetNumber(l, 5, numbers[6]);
        numbers[2] = l.find((v) => v.length === 5 && !numbers.includes(v));
        const signals = numbers.map((v) => v.join(''));
        return Number(
            output
                .map((v) => v.join(''))
                .map((v) => signals.findIndex((n) => v === n))
                .join(''),
        );
    });
    return sum(val);
}

function findSubSetNumber(list, length, common) {
    return list.find(
        (v) => v.length === length && v.every((char) => common.includes(char)),
    );
}

function findSuperSetNumber(list, length, common, filter = () => true) {
    return list
        .filter(filter)
        .find(
            (v) =>
                v.length === length && common.every((char) => v.includes(char)),
        );
}

test(`2021 - Day 08`, () => {
    assert.strictEqual(part1(), 349);
    assert.strictEqual(part2(), 1070957);
});
