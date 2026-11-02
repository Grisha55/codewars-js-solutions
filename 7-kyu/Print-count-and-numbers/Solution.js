function countMe(data) {
    if (!/^\d+$/.test(data)) return "";

    let res = "";
    let i = 0;
    while (i < data.length) {
        let j = i;
        while (j < data.length && data[j] === data[i]) j++;
        res += j - i + data[i];
        i = j;
    }
    return res;
}
