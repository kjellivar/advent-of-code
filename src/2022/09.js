import assert from 'assert';
import _ from 'lodash';
import { readLines } from '../lib/read-input.js';

const lines = readLines();

class Rope {
    constructor(knots) {
        this.history = [[0, 0]];
        this.pos = { x: 0, y: 0 };
        this.tail = _.times(knots - 1, () => ({ x: 0, y: 0 }));
    }
    move(dir, length) {
        _.times(length, () => {
            dir === 'U' && this.pos.y++;
            dir === 'R' && this.pos.x++;
            dir === 'D' && this.pos.y--;
            dir === 'L' && this.pos.x--;
            let head = this.pos;
            for (const tail of this.tail) {
                this.moveTail(head, tail);
                head = tail;
                if (tail === this.tail.at(-1)) {
                    this.history.push([tail.x, tail.y]);
                }
            }
        });
        return this;
    }

    moveTail(head, tail) {
        if (Math.abs(head.x - tail.x) <= 1 && Math.abs(head.y - tail.y) <= 1)
            return;
        if (head.x - tail.x === 0 || head.y - tail.y === 0) {
            if (head.x > tail.x) tail.x++;
            if (head.x < tail.x) tail.x--;
            if (head.y > tail.y) tail.y++;
            if (head.y < tail.y) tail.y--;
        } else if (head.x > tail.x && head.y > tail.y) {
            tail.x++;
            tail.y++;
        } else if (head.x < tail.x && head.y > tail.y) {
            tail.x--;
            tail.y++;
        } else if (head.x > tail.x && head.y < tail.y) {
            tail.x++;
            tail.y--;
        } else if (head.x < tail.x && head.y < tail.y) {
            tail.x--;
            tail.y--;
        }
    }
}

function solve(ropeLength) {
    const rope = new Rope(ropeLength);
    for (const line of lines) {
        const [dir, length] = line.split(' ');
        rope.move(dir, Number(length));
    }
    return _.uniq(rope.history.map((v) => v.join(','))).length;
}

const part1 = solve(2);
const part2 = solve(10);

test('2022 - Day 09', () => {
    assert.strictEqual(part1, 6057);
    assert.strictEqual(part2, 2514);
});
