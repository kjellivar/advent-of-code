const FRONT = 'F';
const LEFT = 'L';

function getSeatId(boardingNumber) {
    const nodes = boardingNumber.split('');

    const rowStack = nodes.slice(0, 7).reverse();
    const columnStack = nodes.slice(7).reverse();

    const row = traverse(0, 127, rowStack);
    const column = traverse(0, 7, columnStack);

    return row * 8 + column;
}

function traverse(low, high, stack) {
    const node = stack.pop();
    const mid = (high - low) / 2;
    if (node === FRONT || node === LEFT) {
        // Keep lower half
        return stack.length === 0
            ? low
            : traverse(low, Math.floor(low + mid), stack);
    } else {
        // Keep upper half
        return stack.length === 0
            ? high
            : traverse(Math.ceil(low + mid), high, stack);
    }
}

export { getSeatId };
