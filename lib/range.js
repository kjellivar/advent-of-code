/**
 * @param {number} from
 * @param {number} to
 */
export function range(from, to) {
    return [
        ...Array(Math.max(to, from) - Math.min(to, from) + 1).keys(),
    ].map((val) => (from < to ? val + from : from - val));
}
