import * as yup from 'yup';

function parseHeight(_, originalValue) {
    const num = parseFloat(originalValue);
    if (originalValue.includes('in')) {
        // Convert from freedom units to cm
        return num * 2.54;
    } else if (originalValue.includes('cm'))  {
        return num;
    } else {
        return NaN;
    }
}

/*
    byr (Birth Year) - four digits; at least 1920 and at most 2002.
    iyr (Issue Year) - four digits; at least 2010 and at most 2020.
    eyr (Expiration Year) - four digits; at least 2020 and at most 2030.
    hgt (Height) - a number followed by either cm or in:
        If cm, the number must be at least 150 and at most 193.
        If in, the number must be at least 59 and at most 76.
    hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
    ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
    pid (Passport ID) - a nine-digit number, including leading zeroes.
    cid (Country ID) - ignored, missing or not.
 */
export default yup.object().shape({
    byr: yup.number().required().min(1920).max(2002),
    iyr: yup.number().required().min(2010).max(2020),
    eyr: yup.number().required().min(2020).max(2030),
    hgt: yup.number().required().transform(parseHeight).round().min(150).max(193),
    hcl: yup.string().required().matches(/^#[0-9a-f]{6}$/),
    ecl: yup.string().required().oneOf(['amb','blu','brn','gry','grn','hzl','oth']),
    pid: yup.string().required().matches(/^\d{9}$/),
    cid: yup.number()
});