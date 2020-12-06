import { readLineGroups } from '../../lib/read-input.js';

/**
 * @returns {Array<{size: number, answerCounts: Map<string, number>}>}
 */
function getInput() {
    return readLineGroups('2020', '06').map((group) => {
        const answerCounts = new Map();
        group
            .join('') // [abc,def] -> abcdef
            .split('') // abcdef -> [a,b,c,d,e,f]
            .forEach((letter) =>
                answerCounts.set(letter, (answerCounts.get(letter) ?? 0) + 1),
            );

        return {
            size: group.length,
            answerCounts,
        };
    });
}

function part1() {
    return getInput()
        .map((group) => [...group.answerCounts.keys()].length)
        .reduce((a, b) => a + b);
}

function part2() {
    return getInput()
        .map(
            (group) =>
                [...group.answerCounts.values()].filter(
                    (count) => count === group.size,
                ).length,
        )
        .reduce((a, b) => a + b);
}

export { part1, part2 };
