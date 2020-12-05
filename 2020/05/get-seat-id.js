const FRONT = 'F';
const BACK = 'B';
const LEFT = 'L';
const RIGHT = 'R';

function getSeatId(boardingNumber) {
    const nodes = boardingNumber.split('');

    const rowPath = nodes.slice(0, 7);
    const columnPath = nodes.slice(7);

    const row = traverse([0, 127], rowPath);
    const column = traverse([0, 7], columnPath);

    return row * 8 + column;
}

function traverse([min, max], [direction, ...restPath]) {
    const mid = (max - min) / 2;

    switch (direction) {
        case FRONT:
        case LEFT:
            // Keep lower half
            return restPath.length === 0
                ? min
                : traverse([min, Math.floor(min + mid)], restPath);
        case BACK:
        case RIGHT:
            // Keep upper half
            return restPath.length === 0
                ? max
                : traverse([Math.ceil(min + mid), max], restPath);
    }
}

export { getSeatId };
