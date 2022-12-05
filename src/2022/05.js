import assert from 'assert';
import _ from 'lodash';
import { readLineGroups } from '../lib/read-input.js';

let [__, procedure] = readLineGroups();
procedure = procedure.map((line) => _.words(line).map(Number).filter(Boolean));

const getCrates = () =>
    ',RGJBTVZ,JRVL,SQF,ZHNLFVQG,RQTJCSMW,SWTCHF,DZCVFNJ,LGZDWRFQ,JBWVP'
        .split(',')
        .map((crate) => crate.split(''));

function runProcedure(multiMove = false) {
    const crates = getCrates();
    procedure.forEach(([num, from, to]) => {
        const removed = crates[from].splice(crates[from].length - num, num);
        crates[to].push(...(multiMove ? removed : removed.reverse()));
    });
    return crates.map((c) => c.pop()).join('');
}

const part1 = runProcedure();
const part2 = runProcedure(true);

test('2022 - Day 05', () => {
    assert.strictEqual(part1, 'ZSQVCCJLL');
    assert.strictEqual(part2, 'QZFJRWHGS');
});
