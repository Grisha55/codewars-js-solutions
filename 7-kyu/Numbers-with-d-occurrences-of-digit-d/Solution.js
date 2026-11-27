function isDd(n) {
    const count = {};
    const arr = n.toString().split("").map(Number);

    for (const num of arr) {
        count[num] = (count[num] || 0) + 1;
    }

    for (const key in count) {
        if (+key === count[key]) {
            return true;
        }
    }

    return false;
}
