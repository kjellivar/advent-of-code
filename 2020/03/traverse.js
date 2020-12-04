const TREE = '#';

function traverse(map, vectorX, vectorY) {
    let x = 0;
    let trees = 0;
    for (let y = vectorY; y < map.length; y += vectorY) {
        x = (x + vectorX) % map[y].length;
        if (map[y].charAt(x) === TREE) {
            trees++;
        }
    }
    return trees;
}

export { traverse };
