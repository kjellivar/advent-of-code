import assert from 'assert';
import _ from 'lodash';
import { readLineGroups } from '../lib/read-input.js';

function getInput() {
    return _(readLineGroups(2020, 6))
        .map((lines) => {
            const allAnswers = lines.join(''); // [abc,def] -> abcdef
            const uniqueAnswers = new Set(allAnswers.split('')); // abcabcde -> Set(a,b,c,d,e)
            return [...uniqueAnswers].map(
                (answer) =>
                    (allAnswers.match(new RegExp(answer, 'g')) ?? []).length ===
                    lines.length,
            );
        })
        .flatten();
}

function part1() {
    return getInput().size();
}

function part2() {
    return getInput().sum();
}

describe('2020 - Day 6', () => {
    it('part1 is 6310', () => {
        assert.strictEqual(part1(), 6310);
    });
    it('part2 is 3193', () => {
        assert.strictEqual(part2(), 3193);
    });
});
