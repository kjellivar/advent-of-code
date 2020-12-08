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
        const mem = [...input]; // copy mem
        const [op, arg] = mem[i];
        if (op === NOOP) {
            mem[i] = [JMP, arg];
        } else if (op == JMP) {
            mem[i] = [NOOP, arg];
        }
        const [acc, hasTerminated] = run(mem);
        if (hasTerminated) {
            return acc;
        }
    }
}

/**
 * @param {Array<[string, number]>} mem
 * @returns [number, boolean]
 */
function run(mem) {
    const hasRun = Array(mem.length).fill(false);
    let pointer = 0;
    let acc = 0;
    while (!hasRun[pointer] && pointer !== mem.length) {
        const [op, arg] = mem[pointer];
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
    return [acc, pointer === mem.length];
}

export { part1, part2 };
