import { URL } from 'url';
import assert from 'assert';
import { readLineGroups } from '../lib/read-input.js';

const FILE_PATH = new URL('', import.meta.url).pathname.split('/');
const YEAR = parseInt(FILE_PATH[FILE_PATH.length - 2]);
const DAY = parseInt(FILE_PATH[FILE_PATH.length - 1]);

class Board {
    constructor(board) {
        this.completed = false;
        this.columns = board;
        this.rows = board[0].map((_, i) => board.map((row) => row[i]));
    }

    checkWin(drawnNumbers) {
        if (this.completed) {
            return false;
        }
        this.completed =
            [...this.columns, ...this.rows].filter((line) =>
                line.every((num) => drawnNumbers.includes(num)),
            ).length > 0;
        return this.completed;
    }

    getUnmarkedNumbers(drawnNumbers) {
        return this.columns.flatMap((col) =>
            col.filter((val) => !drawnNumbers.includes(val)),
        );
    }
}

const input = readLineGroups(YEAR, DAY);
const boardsInput = input
    .slice(1)
    .map((val) =>
        val.map((val) =>
            val.trim().replace(/\s+/g, ',').split(',').map(Number),
        ),
    );

function playBingo() {
    const boards = boardsInput.map((board) => new Board(board));
    const drawOrder = input.slice(0, 1)[0][0].split(',').map(Number);
    const draws = [];
    const wins = [];
    while (drawOrder.length) {
        const draw = drawOrder.shift();
        draws.push(draw);
        for (const board of boards) {
            const win = board.checkWin(draws);
            if (win) {
                wins.push(
                    board
                        .getUnmarkedNumbers(draws)
                        .reduce((prev, val) => prev + val) * draw,
                );
            }
        }
    }
    return wins;
}

function part1() {
    return playBingo().shift();
}

function part2() {
    return playBingo().pop();
}

describe(`${YEAR} - Day ${DAY}`, () => {
    it('part1 is 6592', () => {
        assert.strictEqual(part1(), 6592);
    });

    it('part2 is 31755', () => {
        assert.strictEqual(part2(), 31755);
    });
});
