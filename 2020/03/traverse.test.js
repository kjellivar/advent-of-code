import { describe, it, expect } from '@jest/globals';
import { traverse } from './traverse';

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
        expect(traverse(map, 3, 1)).toBe(7);
        expect(traverse(map, 0, 1)).toBe(3);
        expect(traverse(map, 1, 2)).toBe(2);
        expect(traverse(map, 5, 1)).toBe(3);
    });
});
