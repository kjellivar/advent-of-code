import { describe, it, expect } from '@jest/globals';
import { getSeatId } from './get-seat-id.js';

describe('getSeatId', () => {
    it('should calculate the right seat id', () => {
        expect(getSeatId('FBFBBFFRLR')).toBe(357);
        expect(getSeatId('BFFFBBFRRR')).toBe(567);
        expect(getSeatId('FFFBBBFRRR')).toBe(119);
        expect(getSeatId('BBFFBBFRLL')).toBe(820);
    });
});
