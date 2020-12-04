import { readInput } from '../../lib/read-input.js';

async function part1() {
    const numbers = (await readInput('2020', '01')).map(Number);
    for (const i of numbers) {
        for (const j of numbers) {
            if (i + j === 2020) {
                console.log(`${i} + ${j} = ${i + j}. Multiplied: ${i * j}`);
                return;
            }
        }
    }
}

async function part2() {
    const numbers = (await readInput('2020', '01')).map(Number);
    for (const i of numbers) {
        for (const j of numbers) {
            for (const k of numbers) {
                if (i + j + k === 2020) {
                    console.log(
                        `${i} + ${j} + ${k} = ${i + j + k}. Multiplied: ${
                            i * j * k
                        }`,
                    );
                    return;
                }
            }
        }
    }
}

part1();
part2();
