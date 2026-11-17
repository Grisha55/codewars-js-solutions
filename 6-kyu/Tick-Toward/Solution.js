function tickToward(start, end) {
    const [sf, ss] = start;
    const [ef, es] = end;
    const res = [[sf, ss]];

    let f = sf,
        s = ss;
    const stepF = Math.sign(ef - sf); // -1, 0, +1
    const stepS = Math.sign(es - ss);

    while (f !== ef || s !== es) {
        if (f !== ef) f += stepF;
        if (s !== es) s += stepS;
        res.push([f, s]);
    }

    return res;
}
