function arr2bin(arr) {
    let sum = 0;

    for (const n of arr) {
        if (typeof n !== "number" || !Number.isInteger(n)) return false;
        sum += n;
    }

    return sum.toString(2);
}
