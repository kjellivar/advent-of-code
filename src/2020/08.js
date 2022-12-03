import assert from 'assert';
import { readLines } from '../lib/read-input.js';

/**
 * @type {Array<[string, number]>}
 */
const input = readLines()
    .map((line) => line.split(' '))
    .map(([op, arg]) => [op, Number(arg)]);

/**
 * @param {Array<[string, number]>} program
 */
function run(program) {
    const hasRun = Array(program.length).fill(0);
    let [pointer, acc] = [0, 0];
    while (!hasRun[pointer]++ && pointer !== program.length) {
        const [op, arg] = program[pointer];
        acc += op == 'acc' ? arg : 0;
        pointer += op == 'jmp' ? arg : 1;
    }
    return [acc, pointer === program.length];
}

function part1() {
    const [acc] = run(input);
    return acc;
}

function part2() {
    for (let i = 0; i < input.length; i++) {
        const program = [...input]; // copy mem
        const [op, arg] = program[i];
        if (['nop', 'jmp'].includes(op)) {
            program[i] = [op === 'nop' ? 'jmp' : 'nop', arg];
        }
        const [acc, hasTerminated] = run(program);
        if (hasTerminated) {
            return acc;
        }
    }
}

test('2020 - Day 8', () => {
    assert.strictEqual(part1(), 1915);
    assert.strictEqual(part2(), 944);
});
