import lineReader, { eachLine } from 'line-reader';
import schema from './schema.js';

let passport = {};
const passports = [];

lineReader.eachLine('./2020/04/input.txt', (line, isDone) => {
    if (line) {
        line.split(' ')
            .map((val) => val.split(':'))
            .forEach(([key, val]) => {
                passport[key] = val;
            });
    } else {
        passports.push(passport);
        passport = {};
    }

    if (isDone) {
        console.log(`Total passports: ${passports.length}`);
        const valid = passports.filter((pass) => schema.isValidSync(pass));
        console.log(`Valid passports: ${valid.length}`);
    }
});
