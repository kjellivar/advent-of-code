import assert from 'assert';
import { calculateFuel } from '../../2019/01/calculate-fuel.js';

describe('calculateFuel', () => {
    it('should calculate fuel required for given mass', () => {
        assert.strictEqual(calculateFuel(100756), 50346);
        assert.strictEqual(calculateFuel(1969), 966);
        assert.strictEqual(calculateFuel(14), 2);
        assert.strictEqual(calculateFuel(2), 0);
    });
});
