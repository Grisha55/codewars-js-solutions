// Play with the function mystery(x) in the sample tests.
// When you think you've solved the mystery,
// implement the following function as your answer

function solved(str) {
    const middleIdx = Math.floor(str.length / 2);

    if (str.length % 2 === 0) {
        const strSort = str.split("").sort().join("");

        return strSort;
    } else {
        const result = str.split("");
        const cutStr = result.splice(middleIdx, 1);

        return result.sort().join("");
    }
}
