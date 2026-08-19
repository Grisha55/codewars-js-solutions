function arrange(s) {
    const res = [];
    let i = 0;
    let j = s.length - 1;
    let rev = false;

    while (i < j) {
        if (rev) {
            res.push(s[j], s[i]);
            i++;
            j--;
        } else {
            res.push(s[i], s[j]);
            i++;
            j--;
        }
        rev = !rev;
    }

    if (s.length % 2 !== 0) res.push(s[i]);

    return res;
}
