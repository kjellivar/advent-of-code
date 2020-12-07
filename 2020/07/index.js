import { readLines } from '../../lib/read-input.js';

/**
 * @returns {Array<[string, Array<{color: string, amount: number}>]>}
 */
function getInput() {
    return readLines('2020', '07').map((line) => {
        const [color, rest] = line.split(' bags contain ');
        const contents = rest
            .split(', ')
            .map((c) => c.split(' '))
            .filter(([number]) => number !== 'no')
            .map(([number, color1, color2]) => ({
                color: `${color1} ${color2}`,
                amount: Number(number),
            }));
        return [color, contents];
    });
}

function part1() {
    const bags = new Map(getInput());
    const reverseMap = new Map();
    for (let [color, contents] of bags) {
        contents.forEach((content) => {
            reverseMap.set(
                content.color,
                reverseMap.has(content.color)
                    ? reverseMap.get(content.color).concat(color)
                    : [color],
            );
        });
    }

    let bagSet = new Set();
    const bagQueue = [...reverseMap.get('shiny gold')];
    while (bagQueue.length) {
        const color = bagQueue.shift();
        bagQueue.push(...(reverseMap.get(color) ?? []));
        bagSet.add(color);
    }
    return bagSet.size;
}

function part2() {
    const bags = new Map(getInput());
    let sum = 0;
    const bagQueue = [...bags.get('shiny gold')];
    while (bagQueue.length) {
        const bag = bagQueue.shift();
        sum += bag.amount;
        bagQueue.push(
            ...bags.get(bag.color).map(({ color, amount }) => ({
                color,
                amount: bag.amount * amount,
            })),
        );
    }
    return sum;
}

export { part1, part2 };
