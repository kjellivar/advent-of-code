const FRONT = 'F';
const BACK = 'B';
const LEFT = 'L';
const RIGHT = 'R';

function getSeatId(boardingPass) {
    const path = boardingPass.split('');
    const rowPath = path.slice(0, 7);
    const columnPath = path.slice(7);

    const row = traverse(new BinaryTreeRangeNode(0, 127), rowPath);
    const column = traverse(new BinaryTreeRangeNode(0, 7), columnPath);

    return row * 8 + column;
}

function traverse(node, [direction, ...path]) {
    switch (direction) {
        case FRONT:
        case LEFT:
            return path.length ? traverse(node.left(), path) : node.min;
        case BACK:
        case RIGHT:
            return path.length ? traverse(node.right(), path) : node.max;
    }
}

class BinaryTreeRangeNode {
    constructor(min, max) {
        this.min = min;
        this.max = max;
        this.mid = (max - min) / 2;
    }

    left() {
        const { min, mid } = this;
        return new BinaryTreeRangeNode(min, Math.floor(min + mid));
    }

    right() {
        const { min, mid, max } = this;
        return new BinaryTreeRangeNode(Math.ceil(min + mid), max);
    }
}

export { getSeatId };
