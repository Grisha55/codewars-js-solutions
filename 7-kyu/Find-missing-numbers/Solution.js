function findMissingNumbers(arr) {
    const res = [];

    for (let i = arr[0]; i <= arr[arr.length - 1]; i++) {
        if (!arr.includes(i)) {
            res.push(i);
        }
    }

    return res;
}
