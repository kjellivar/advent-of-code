import assert from 'assert';
import * as day1 from '../2019/01/index.js';
import * as day2 from '../2019/02/index.js';

describe('2019', () => {
    describe('Day 1', () => {
        it('calculateFuel should calculate fuel required for given mass', () => {
            assert.strictEqual(day1.calculateFuel(100756), 50346);
            assert.strictEqual(day1.calculateFuel(1969), 966);
            assert.strictEqual(day1.calculateFuel(14), 2);
            assert.strictEqual(day1.calculateFuel(2), 0);
        });
        it('part1 is 3394106', () => {
            assert.strictEqual(day1.part1(), 3394106);
        });
        it('part2 is 5088280', () => {
            assert.strictEqual(day1.part2(), 5088280);
        });
    });

    describe('Day 2', () => {
        it('part1 is 7594646', () => {
            assert.strictEqual(day2.part1(), 7594646);
        });
        it('part2 is 3376', () => {
            assert.strictEqual(day2.part2(), 3376);
        });
    });
});
