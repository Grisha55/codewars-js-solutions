function tea42(input) {
    let res = typeof input === "string" ? input : input.toString();

    return res.replace(/2/g, "t");
}
