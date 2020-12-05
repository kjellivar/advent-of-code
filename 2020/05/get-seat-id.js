const FRONT = 'F';
const BACK = 'B';
const LEFT = 'L';
const RIGHT = 'R';

/**
 * Returns a seat id given a boarding pass
 * @param {string} boardingPass - example BBFBFBBLRL
 * @returns {number} seat id
 */
function getSeatId(boardingPass) {
    const letters = boardingPass.split('');
    const rows = new Range(0, 127);
    const seats = new Range(0, 7);

    const row = traverse(rows, letters.slice(0, 7));
    const seat = traverse(seats, letters.slice(7));

    return row * 8 + seat;
}

/**
 * @param {Range} range
 * @param {Array<string>} path
 */
function traverse(range, [direction, ...path]) {
    switch (direction) {
        case FRONT:
        case LEFT:
            return path.length ? traverse(range.lowHalf(), path) : range.min;
        case BACK:
        case RIGHT:
            return path.length ? traverse(range.highHalf(), path) : range.max;
    }
}

class Range {
    /**
     * @param {number} min
     * @param {number} max
     */
    constructor(min, max) {
        this.min = min;
        this.max = max;
        this.mid = (max - min) / 2;
    }

    lowHalf() {
        const { min, mid } = this;
        return new Range(min, Math.floor(min + mid));
    }

    highHalf() {
        const { min, mid, max } = this;
        return new Range(Math.ceil(min + mid), max);
    }
}

export { getSeatId };
