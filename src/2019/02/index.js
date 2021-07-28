import range from 'lodash/range.js';
import { readLines } from '../../lib/read-input.js';

const [input] = readLines('2019', '02').map((opcodes) =>
    opcodes.split(',').map(Number),
);

const EXIT = 99;
const ADD = 1;
const MULTIPLY = 2;

function run(memory, noun, verb) {
    const program = [...memory];
    program[1] = noun;
    program[2] = verb;
    let pointer = 0;
    while (pointer < program.length) {
        const [opcode, op1, op2, dest] = program.slice(pointer, pointer + 4);
        switch (opcode) {
            case EXIT:
                return program[0];
            case ADD:
                program[dest] = program[op1] + program[op2];
                pointer += 4;
                break;
            case MULTIPLY:
                program[dest] = program[op1] * program[op2];
                pointer += 4;
                break;
        }
    }
}

function part1() {
    return run(input, 12, 2);
}

function part2() {
    for (const i of range(0, 100)) {
        for (const j of range(0, 100)) {
            if (run(input, i, j) === 19690720) {
                return 100 * i + j;
            }
        }
    }
}

export { part1, part2 };
