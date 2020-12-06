import { readLineGroups } from '../../lib/read-input.js';

/**
 * @returns {Array<{size: number, answerCounts: Array<number>}>}
 */
function getInput() {
    return readLineGroups('2020', '06').map((lines) => {
        const allAnswers = lines.join(''); // [abc,def] -> abcdef
        const uniqueAnswers = new Set(allAnswers.split('')); // abcabcde -> Set(a,b,c,d,e)
        return {
            size: lines.length,
            answerCounts: [...uniqueAnswers].map(
                (answer) =>
                    (allAnswers.match(new RegExp(answer, 'g')) ?? []).length,
            ),
        };
    });
}

function part1() {
    return getInput()
        .map((group) => group.answerCounts.length)
        .reduce((a, b) => a + b);
}

function part2() {
    return getInput()
        .map(
            (group) =>
                group.answerCounts.filter((count) => count === group.size)
                    .length,
        )
        .reduce((a, b) => a + b);
}

export { part1, part2 };
