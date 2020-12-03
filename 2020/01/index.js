import lineReader from 'line-reader';

const numbers = [];
lineReader.eachLine('./2020/01/input.txt', (line, isDone) => {
    numbers.push(parseInt(line, 10));

    if(isDone) {
        for (let i of numbers) {
            for (let j of numbers) {
                for (let k of numbers) {
                    if((i + j + k) === 2020) {
                        console.log(`${i} + ${j} + ${k} = ${i+j+k}. Multiplied: ${i * j * k}`);
                        return;
                    }
                }
            }
        }
    }
});
