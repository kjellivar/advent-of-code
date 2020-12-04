import { readInput } from '../../lib/read-input.js';

function parseLine(line) {
    // 2-7 p: pbhhzpmppb
    const [positions, allowedChar, password] = line.split(' ');
    return {
        positions: positions.split('-').map((val) => parseInt(val, 10) - 1),
        allowedChar: allowedChar.charAt(0),
        password,
    };
}

async function part2() {
    const input = await readInput('2020', '02');
    const validations = input
        .map(parseLine)
        .map(
            ({ positions: [pos1, pos2], allowedChar, password }) =>
                (password.charAt(pos1) === allowedChar) ^
                (password.charAt(pos2) === allowedChar),
        );

    console.log(
        `Part 2: Allowed passwords: ${validations.filter(Boolean).length}`,
    );
}

part2();
