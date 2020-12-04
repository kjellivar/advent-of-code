
import { jest } from '@jest/globals';
import { calculateFuel } from './calculate-fuel.js';

describe('calculateFuel', () => {
    it('should calculate fuel required for given mass', () => {
        expect(calculateFuel(100756)).toBe(50346);
        expect(calculateFuel(1969)).toBe(966);
        expect(calculateFuel(14)).toBe(2);
        expect(calculateFuel(2)).toBe(0);
    })
})