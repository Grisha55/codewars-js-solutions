function money_value(s) {
    const sign = s.includes("-") ? -1 : 1;
    let num = "";

    for (const c of s) {
        if ("0123456789.".includes(c)) {
            num += c;
        }
    }

    return num * sign;
}
