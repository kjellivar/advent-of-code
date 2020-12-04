import lineReader from 'line-reader';

export function readInput(year, day) {
    return new Promise((resolve, reject) => {
        const lines = [];

        try {
            lineReader.eachLine(`./${year}/${day}/input.txt`, (line, isDone) => {
                lines.push(line);
                if(isDone) {
                    resolve(lines);
                }
            });
        } catch(e) {
            reject(e);
        }
    });    
}