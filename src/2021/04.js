import assert from 'assert';
import { readLineGroups } from '../lib/read-input.js';

const input = readLineGroups(2021, 4);
const drawOrder = input[0][0].split(',').map(Number);
const boardsInput = input
    .slice(1)
    .map((val) =>
        val.map((val) =>
            val.trim().replace(/\s+/g, ',').split(',').map(Number),
        ),
    );

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

function playBingo() {
    const boards = boardsInput.map((board) => new Board(board));
    const draws = [];
    const wins = [];
    drawOrder.forEach((draw) => {
        draws.push(draw);
        boards.forEach((board) => {
            if (board.checkWin(draws)) {
                wins.push(
                    board
                        .getUnmarkedNumbers(draws)
                        .reduce((prev, val) => prev + val) * draw,
                );
            }
        });
    });
    return wins;
}

function part1() {
    return playBingo().shift();
}

function part2() {
    return playBingo().pop();
}

describe(`2021 - Day 4`, () => {
    it('part1 is 6592', () => {
        assert.strictEqual(part1(), 6592);
    });

    it('part2 is 31755', () => {
        assert.strictEqual(part2(), 31755);
    });
});
