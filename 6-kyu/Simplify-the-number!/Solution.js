function simplify(number) {
    if (number === 0) return "";

    const sNumber = number.toString();
    let res = "";

    for (let i = 0; i < sNumber.length; i++) {
        if (sNumber[i] !== "0" && i !== sNumber.length - 1) {
            res +=
                sNumber[i] +
                "*" +
                `1${"".padStart(sNumber.length - 1 - i, 0)}+`;
        }
    }

    if (sNumber[sNumber.length - 1] !== "0") {
        return res + sNumber[sNumber.length - 1];
    }
    return res.slice(0, -1);
}
