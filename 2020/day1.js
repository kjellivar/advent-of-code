import lineReader from 'line-reader';

const numbers = [];
lineReader.eachLine('./2020/day1.txt', (line, isDone) => {
    numbers.push(parseInt(line, 10));

    if(isDone) {
        numbers.forEach(num1 => {
            numbers.forEach(num2 => {
                numbers.forEach(num3 => {
                    if((num1 + num2 + num3) === 2020) {
                        console.log(`num1: ${num1} num2: ${num2} num3: ${num3} - Multiplied: ${num1 * num2 * num3}`);
                    }
                })
            })
        })
    }
});
