import assert from 'assert';
import _ from 'lodash';
import { readLines } from '../lib/read-input.js';

const children = new Map(
    readLines(2020, 7).map((line) => {
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
    }),
);

function part1() {
    const parents = new Map();
    children.forEach((contents, color) => {
        contents.forEach((child) => {
            const bags = parents.get(child.color);
            parents.set(child.color, (bags ?? []).concat({ color, amount: 1 }));
        });
    });

    return new Set(
        collectBags(parents.get('shiny gold'), parents).map((bag) => bag.color),
    ).size;
}

function part2() {
    return _(collectBags(children.get('shiny gold'), children))
        .map('amount')
        .sum();
}

/**
 * @param {Array<{amount: number, color: string}>} bags
 * @param {Map<string, Array<{amount: number, color: string}>>} store
 * @returns {Array<{amount: number, color: string}>}
 */
function collectBags([opened, ...rest], store) {
    const bags = (store.get(opened.color) ?? [])
        .map(({ color, amount }) => ({
            color,
            amount: opened.amount * amount,
        }))
        .concat(rest);
    return [opened].concat(bags.length ? collectBags(bags, store) : []);
}

describe('2020 - Day 7', () => {
    it('part1 is 213', () => {
        assert.strictEqual(part1(), 213);
    });
    it('part2 is 38426', () => {
        assert.strictEqual(part2(), 38426);
    });
});
