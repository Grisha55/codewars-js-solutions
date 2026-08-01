function getConsectiveItems(items, key) {
    let len = 0;
    let curMax = 0;
    let str = items;
    let k = key;
    if (typeof items === "number") {
        str = items.toString();
        k = key.toString();
    }

    for (let i = 0; i < str.length; i++) {
        if (str[i] === k) {
            curMax++;
            len = Math.max(len, curMax);
        } else {
            curMax = 0;
        }
    }

    return len;
}
