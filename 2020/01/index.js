import { readInput } from '../../lib/read-input.js';

const input = readInput('2020', '01').then((lines) => lines.map(Number));

async function part1() {
    const numbers = await input;
    for (const i of numbers) {
        for (const j of numbers) {
            if (i + j === 2020) {
                console.log(
                    `Part 1: ${i} + ${j} = ${i + j}. Multiplied: ${i * j}`,
                );
                return;
            }
        }
    }
}

async function part2() {
    const numbers = await input;
    for (const i of numbers) {
        for (const j of numbers) {
            for (const k of numbers) {
                if (i + j + k === 2020) {
                    console.log(
                        `Part 2: ${i} + ${j} + ${k} = ${
                            i + j + k
                        }. Multiplied: ${i * j * k}`,
                    );
                    return;
                }
            }
        }
    }
}

console.log('AoC 2020 day 1');
part1();
part2();
