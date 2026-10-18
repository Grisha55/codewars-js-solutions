function findMiddle(str) {
    if (typeof str !== "string") return -1;

    const digits = str.split("").filter((ch) => ch >= "0" && ch <= "9");
    if (digits.length === 0) return -1;

    const product = digits.reduce((acc, d) => acc * Number(d), 1);
    const productStr = String(product);
    const len = productStr.length;

    if (len % 2 === 1) {
        return Number(productStr[Math.floor(len / 2)]);
    } else {
        const mid = len / 2;
        return Number(productStr.slice(mid - 1, mid + 1));
    }
}
