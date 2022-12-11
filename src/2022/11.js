import assert from 'assert';
import _ from 'lodash';
import { readLineGroups } from '../lib/read-input.js';

class Monkey {
    constructor(items, op, div, test) {
        this.inspectCount = 0;
        this.items = items;
        this.op = op;
        this.div = div;
        this.test = test;
    }
    inspect(worryReducer) {
        let item = this.items.shift();
        this.inspectCount++;
        item = this.op(item);
        item = worryReducer(item);
        return [this.test(item), item];
    }
}

const readMonkeys = () =>
    readLineGroups()
        .map((g) => g.map((s) => s.trim()))
        .map((group) => {
            const items = group[1]
                .split('Starting items: ')[1]
                .split(', ')
                .map(Number);
            const op = eval(
                '(old) => ' + group[2].split('Operation: new = ')[1],
            );
            const div = Number(group[3].split('Test: divisible by ')[1]);
            const monk1 = Number(
                group[4].split('If true: throw to monkey ')[1],
            );
            const monk2 = Number(
                group[5].split('If false: throw to monkey ')[1],
            );
            return new Monkey(items, op, div, (n) =>
                n % div === 0 ? monk1 : monk2,
            );
        });

function findMonkeyBusinessLevel(monkeys, rounds, worryReducer) {
    _.times(rounds, () =>
        monkeys.forEach((monke) => {
            while (monke.items.length) {
                const [i, item] = monke.inspect(worryReducer);
                monkeys[i].items.push(item);
            }
        }),
    );
    const scores = _.sortBy(monkeys.map((monke) => monke.inspectCount));
    return scores.at(-1) * scores.at(-2);
}

function part1() {
    const monkeys = readMonkeys();
    return findMonkeyBusinessLevel(monkeys, 20, (item) => Math.floor(item / 3));
}

function part2() {
    const monkeys = readMonkeys();
    const div = monkeys.map((monke) => monke.div).reduce(_.multiply);
    return findMonkeyBusinessLevel(monkeys, 10_000, (item) => item % div);
}

test('2022 - Day 11', () => {
    assert.strictEqual(part1(), 102399);
    assert.strictEqual(part2(), 23641658401);
});
