function changeCount(change) {
    let res = 0;

    for (const val of change.split(" ")) {
        res += CHANGE[val];
    }

    return `$${res.toFixed(2)}`;
}
