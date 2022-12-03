import assert from 'assert';
import lodash from 'lodash';
import { readLines } from '../lib/read-input.js';

const { sum } = lodash;
const input = readLines().map((val) => Array.from(val));

const charScore = new Map([
    [')', 3],
    [']', 57],
    ['}', 1197],
    ['>', 25137],
    ['(', 1],
    ['[', 2],
    ['{', 3],
    ['<', 4],
]);

function getCorruptedLines() {
    return input.map(([first, ...rest]) => {
        let openingChar = [first];
        for (let char of rest) {
            if ([')', '}', ']', '>'].includes(char)) {
                switch (openingChar[0] + char) {
                    case '()':
                    case '[]':
                    case '{}':
                    case '<>':
                        openingChar.shift();
                        break;
                    default:
                        return charScore.get(char);
                }
            } else {
                openingChar.unshift(char);
            }
        }
        return openingChar;
    });
}

function part1() {
    const points = getCorruptedLines().filter(Number);
    return sum(points);
}

function part2() {
    const incomplete = getCorruptedLines()
        .map((openingChars) => {
            if (typeof openingChars === 'number') return null;
            let score = 0;
            openingChars.forEach((char) => {
                score = score * 5 + charScore.get(char);
            });
            return score;
        })
        .filter(Boolean)
        .sort((a, b) => a - b);
    return incomplete[Math.floor(incomplete.length / 2)];
}

test(`2021 - Day 10`, () => {
    assert.strictEqual(part1(), 288291);
    assert.strictEqual(part2(), 820045242);
});
