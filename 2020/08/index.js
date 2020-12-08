import { readLines } from '../../lib/read-input.js';

const ACC = 'acc';
const NOOP = 'nop';
const JMP = 'jmp';

/**
 * @returns {Array<[string, number]>}
 */
function getInput() {
    return readLines('2020', '08')
        .map((line) => line.split(' '))
        .map(([op, arg]) => [op, Number(arg)]);
}

function part1() {
    const [acc] = run(getInput());
    return acc;
}

function part2() {
    const input = getInput();
    for (let i = 0; i < input.length; i++) {
        const program = [...input]; // copy mem
        const [op, arg] = program[i];
        if (op === NOOP) {
            program[i] = [JMP, arg];
        } else if (op == JMP) {
            program[i] = [NOOP, arg];
        }
        const [acc, hasTerminated] = run(program);
        if (hasTerminated) {
            return acc;
        }
    }
}

/**
 * @param {Array<[string, number]>} program
 * @returns [number, boolean]
 */
function run(program) {
    const hasRun = Array(program.length).fill(false);
    let pointer = 0;
    let acc = 0;
    while (!hasRun[pointer] && pointer !== program.length) {
        const [op, arg] = program[pointer];
        hasRun[pointer] = true;
        switch (op) {
            case ACC:
                acc += arg;
                pointer++;
                break;
            case NOOP:
                pointer++;
                break;
            case JMP:
                pointer += arg;
                break;
        }
    }
    return [acc, pointer === program.length];
}

export { part1, part2 };
