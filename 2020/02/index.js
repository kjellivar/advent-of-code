import { readInput } from '../../lib/read-input.js';

const input = readInput('2020', '02').map(parseLine);

function parseLine(line) {
    // 2-7 p: pbhhzpmppb
    const [positions, allowedChar, password] = line.split(' ');
    return {
        positions: positions.split('-').map(Number),
        allowedChar: allowedChar.charAt(0),
        password,
    };
}

function part1() {
    const validations = input.map(
        ({ positions: [min, max], allowedChar, password }) => {
            const regex = new RegExp(allowedChar, 'g');
            const matches = (password.match(regex) ?? []).length;
            return min <= matches && matches <= max;
        },
    );

    console.log(
        `Part 1: Allowed passwords: ${validations.filter(Boolean).length}`,
    );
}

function part2() {
    const validations = input.map(
        ({ positions: [pos1, pos2], allowedChar, password }) =>
            (password.charAt(pos1 - 1) === allowedChar) !==
            (password.charAt(pos2 - 1) === allowedChar),
    );

    console.log(
        `Part 2: Allowed passwords: ${validations.filter(Boolean).length}`,
    );
}

part1();
part2();
