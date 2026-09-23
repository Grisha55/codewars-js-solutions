function wheatFromChaff(values) {
    const res = values.slice();
    let l = 0;
    let r = res.length - 1;

    while (l < r) {
        while (l < r && res[l] < 0) {
            l++;
        }
        while (l < r && res[r] > 0) {
            r--;
        }
        if (l < r) {
            [res[l], res[r]] = [res[r], res[l]];
            l++;
            r--;
        }
    }

    return res;
}
