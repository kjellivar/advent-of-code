import fs from 'fs';

export function readInput(year, day) {
    const path = `./${year}/${day}/input.txt`;
    try {
        return fs.readFileSync(path, 'utf8').split('\n');
    } catch (e) {
        const fallback = `./input.txt`;
        console.warn(
            `Could not load file at "${path}". Trying fallback at "${fallback}".`,
            e,
        );
        return fs.readFileSync(`./input.txt`, 'utf8').split('\n');
    }
}
