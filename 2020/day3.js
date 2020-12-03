import lineReader from 'line-reader';

const TREE = '#';
const SQUARE = '.';

/*

    Right 1, down 1: 90
    Right 3, down 1: 244
    Right 5, down 1: 97
    Right 7, down 1: 92
    Right 1, down 2 48

*/
const slopes = [
    [1,1],
    [3,1],
    [5,1],
    [7,1],
    [1,2]
];

const sums = [];

slopes.forEach(([ slopeRight, slopeDown ], i) => {
    let x = 0;
    let y = 0;
    let trees = 0;
    lineReader.eachLine('./2020/day3.txt', (line, isDone) => {
        if(++y % slopeDown === 0) {
            x = (x + slopeRight) % line.length;
            if(line.charAt(x) === TREE) {
                trees++;
            }
        }

        if(isDone) {
            console.log('Amount of trees hit: ' + trees);
            sums.push(trees);
            if(sums.length === slopes.length){
                console.log(`All multiplied together: ${sums.reduce((prevVal, curVal) => prevVal * curVal, 1)}`)
            }
        }
    });
});

