import { readInput } from '../../lib/read-input.js';

const input = (await readInput('2019', '02'))[0].split(',').map(Number);

const EXIT = 99;
const ADD = 1;
const MULTIPLY = 2;

function run(noun, verb) {
    const program = [ ...input ];
    program[1] = noun;
    program[2] = verb;
    let pointer = 0;
    while(pointer < program.length) {
        const [ opcode, op1, op2, dest ] = program.slice(pointer, pointer + 4);
        switch(opcode) {
            case EXIT:
                return program[0];
            case ADD:
                program[dest] = program[op1] + program[op2]
                pointer += 4;
                break;
            case MULTIPLY:
                program[dest] = program[op1] * program[op2]
                pointer += 4;
                break;
            default:
                pointer++;
        }
    }
}

// Part 1
console.log(`Part 1: ${run(12, 2)}`);


// Part 2
for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 100; j++) {
        if (run(i, j) === 19690720) {
            console.log(`Part 2: ${100 * i + j}`);
            i = j = 100;
        }
    }
}