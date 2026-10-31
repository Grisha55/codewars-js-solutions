function arbitrate(input, n) {
    let found = 0;
    let res = "";
    for (let i = 0; i < n; i++) {
        if (input[i] === "1" && found === 0) {
            found = 1;
            res += input[i];
            continue;
        }
        res += "0";
    }

    return res;
}
