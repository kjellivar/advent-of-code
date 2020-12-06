import { readLineGroups } from '../../lib/read-input.js';

/**
 * @returns {Array<{size: number, answerCounts: Map<string, number>}>}
 */
function getInput() {
    const groups = readLineGroups('2020', '06').map((group) => {
        const answerCounts = new global.Map();
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
    return groups;
}

function part1() {
    const groups = getInput();
    return groups
        .map((group) => [...group.answerCounts.keys()].length)
        .reduce((a, b) => a + b);
}

function part2() {
    const groups = getInput();
    return groups
        .map(
            (group) =>
                [...group.answerCounts.values()].filter(
                    (count) => count === group.size,
                ).length,
        )
        .reduce((a, b) => a + b);
}

export { part1, part2 };
