import assert from 'assert';
import { traverse } from '../../2020/03/traverse.js';

const map = [
    '..##.......',
    '#...#...#..',
    '.#....#..#.',
    '..#.#...#.#',
    '.#...##..#.',
    '..#.##.....',
    '.#.#.#....#',
    '.#........#',
    '#.##...#...',
    '#...##....#',
    '.#..#...#.#',
];

describe('traverse', () => {
    it('should count trees we hit', () => {
        assert.strictEqual(traverse(map, 3, 1), 7);
        assert.strictEqual(traverse(map, 0, 1), 3);
        assert.strictEqual(traverse(map, 1, 2), 2);
        assert.strictEqual(traverse(map, 5, 1), 3);
    });
});
