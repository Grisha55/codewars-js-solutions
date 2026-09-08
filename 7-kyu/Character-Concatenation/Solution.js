function charConcat(string) {
    let res = "";
    for (let i = 0; i < Math.floor(string.length / 2); i++) {
        res += string[i] + string[string.length - i - 1] + `${i + 1}`;
    }
    return res;
}
