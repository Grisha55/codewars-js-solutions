/**
 * @function findUnique
 * @param {number[]} numbers
 * @returns {number}
 */

function findUnique(numbers) {
    const count = {};

    for (const n of numbers) {
        count[n] = (count[n] || 0) + 1;
    }

    for (const n in count) {
        if (count[n] === 1) {
            return +n;
        }
    }

    return -1;
}
