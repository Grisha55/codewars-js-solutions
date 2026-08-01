function comes_after(str, l) {
    let res = "";
    const lowerL = l.toLowerCase();

    for (let i = 0; i < str.length - 1; i++) {
        if (str[i].toLowerCase() === lowerL && str[i + 1].match(/[a-zA-Z]/)) {
            res += str[i + 1];
        }
    }

    return res;
}
