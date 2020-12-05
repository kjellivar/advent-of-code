import assert from 'assert';
import { getSeatId } from '../../2020/05/get-seat-id.js';

describe('getSeatId', () => {
    it('should calculate the right seat id', () => {
        assert.strictEqual(getSeatId('FBFBBFFRLR'), 357);
        assert.strictEqual(getSeatId('BFFFBBFRRR'), 567);
        assert.strictEqual(getSeatId('FFFBBBFRRR'), 119);
        assert.strictEqual(getSeatId('BBFFBBFRLL'), 820);
    });
});
