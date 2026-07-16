function sumStrings(a, b) {
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;
    const result = [];

    while (i >= 0 || j >= 0 || carry > 0) {
        const digitA = i >= 0 ? +a[i--] : 0;
        const digitB = j >= 0 ? +b[j--] : 0;
        const sum = digitA + digitB + carry;
        result.push(sum % 10);
        carry = Math.floor(sum / 10);
    }

    let str = result.reverse().join("");
    str = str.replace(/^0+/, "");
    return str === "" ? "0" : str;
}
