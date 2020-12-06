import assert from 'assert';
import { range } from '../lib/range.js';

describe('range', () => {
    it('should return an array of numbers starting at `from` and ending at `to`', () => {
        assert.deepStrictEqual(range(3, 5), [3, 4, 5]);
        assert.deepStrictEqual(range(1, 7), [1, 2, 3, 4, 5, 6, 7]);
        assert.deepStrictEqual(range(1, 1), [1]);
    });
    it('should handle negative ranges', () => {
        assert.deepStrictEqual(range(-3, 3), [-3, -2, -1, 0, 1, 2, 3]);
        assert.deepStrictEqual(range(3, -3), [3, 2, 1, 0, -1, -2, -3]);
        assert.deepStrictEqual(range(-3, -3), [-3]);
        assert.deepStrictEqual(range(-3, -5), [-3, -4, -5]);
    });
});
