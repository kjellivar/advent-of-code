import { readInput } from '../../lib/read-input.js';
import { Group } from './group.js';

/**
 * @returns {Array<Group>}
 */
function getInput() {
    const groups = [];
    let group = new Group();
    readInput('2020', '06').forEach((line) => {
        if (line) {
            group.addPerson(line.split(''));
        } else {
            groups.push(group);
            group = new Group();
        }
    });
    return groups;
}

function part1() {
    const groups = getInput();
    return groups
        .map((group) => group.getAnswers().length)
        .reduce((a, b) => a + b);
}

function part2() {
    const groups = getInput();
    return groups
        .map((group) => group.getCommonAnswers().length)
        .reduce((a, b) => a + b);
}

export { part1, part2, Group };
