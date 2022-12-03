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
    fs.copyFileSync('./template.js', `./src/${year}/${day}.js`);
    fs.closeSync(fs.openSync(`./inputs/${year}/${day}.txt`, 'w'));
} catch (e) {
    console.error(`error: ${e.message}`);
}
