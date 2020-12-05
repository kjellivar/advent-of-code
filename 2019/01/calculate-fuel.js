/**
 * @param {number} mass
 * @returns {number} fuel needed for provided mass
 */
function calculateFuel(mass) {
    let fuel = Math.floor(mass / 3.0) - 2;
    if (fuel <= 0) {
        return 0;
    } else {
        return fuel + calculateFuel(fuel);
    }
}

export { calculateFuel };
