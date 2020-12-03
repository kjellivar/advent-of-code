import lineReader from 'line-reader';

function parseLine(line) { // 2-7 p: pbhhzpmppb
    const [ positions, allowedChar, password ] = line.split(' ');
    return {
        positions: positions.split('-').map(val => parseInt(val, 10) - 1),
        allowedChar: allowedChar.charAt(0),
        password
    };
}

const validations = [];
lineReader.eachLine('./2020/day2.txt', (line, isDone) => {
    const { positions: [pos1, pos2], allowedChar, password } = parseLine(line);
    validations.push(password.charAt(pos1) === allowedChar ^ password.charAt(pos2) === allowedChar)
    if(isDone) {
        console.log(`Allowed passwords: ${validations.filter(Boolean).length}`);
    }
});