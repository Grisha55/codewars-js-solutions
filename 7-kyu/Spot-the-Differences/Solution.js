function spot(s1, s2) {
    if (s1 === s2) return [];

    const res = [];

    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            res.push(i);
        }
    }

    return res;
}
