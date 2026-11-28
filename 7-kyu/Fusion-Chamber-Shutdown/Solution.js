function burner(c, h, o) {
    const water = Math.min(Math.floor(h / 2), o);
    h -= water * 2;
    o -= water;

    const co2 = Math.min(c, Math.floor(o / 2));
    c -= co2;
    o -= co2 * 2;

    const methane = Math.min(c, Math.floor(h / 4));
    c -= methane;
    h -= methane * 4;

    return [water, co2, methane];
}
