function flipNumber(s) {
    let res = s.split("").reverse().join("");

    for (let i = 0; i < s.length; i++) {
        res =
            res.slice(0, i + 1) +
            res.slice(i, s.length).split("").reverse().join("");
    }

    return res.slice(0, res.length - 1);
}
