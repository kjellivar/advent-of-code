import assert from 'assert';
import _ from 'lodash';
import { readLines } from '../lib/read-input.js';

const rounds = _(
    readLines()
        .map((line) => line.split(' '))
        .map(([a, b]) => [a.charCodeAt() - 64, b.charCodeAt() - 87]),
);

const whatLosesTo = new Map([
    [1, 3], // 1(rock) beats 3(scissors)
    [2, 1], // 2(paper) beats 1(rock)
    [3, 2], // 3(scissors) beats 2(paper)
]);

function score([move, response]) {
    let score = response;
    if (move === response) {
        score += 3; // draw
    } else if (whatLosesTo.get(response) === move) {
        score += 6; // win
    }
    return score;
}

const part1 = rounds.map(score).sum();

const part2 = rounds
    .map(([move, tactic]) => {
        let response = move; // draw
        if (tactic === 1) {
            // lose
            response = whatLosesTo.get(move);
        } else if (tactic === 3) {
            // win
            response = [1, 2, 3].find((x) => whatLosesTo.get(x) === move);
        }
        return score([move, response]);
    })
    .sum();

test('2022 - Day 02', () => {
    assert.strictEqual(part1, 9651);
    assert.strictEqual(part2, 10560);
});
