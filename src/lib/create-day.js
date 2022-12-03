import assert from 'assert';
import fs from 'fs';

try {
    const date = process.env.npm_config_date;
    assert.strictEqual(
        date?.includes('-'),
        true,
        'needs to be called with argument --date=2022-03',
    );
    const [year, day] = date.split('-');
    assert.strictEqual(year.length, 4, 'year needs to be length 4');
    assert.strictEqual(
        day.length,
        2,
        'date needs to be of length 2 (zero-padded)',
    );
    const jsPath = `./src/${year}/${day}.js`;
    fs.copyFileSync('./template.js', jsPath);
    fs.appendFileSync(
        jsPath,
        `
test('${year} - Day ${day}', () => {
    assert.strictEqual(part1(), undefined);
    assert.strictEqual(part2(), undefined);
});
`,
    );
    console.log(`Created file: ${jsPath}`);
    const inputPath = `./inputs/${year}/${day}.txt`;
    fs.closeSync(fs.openSync(inputPath, 'w'));
    console.log(`Created file: ${inputPath}`);
} catch (e) {
    console.error(`error: ${e.message}`);
}
