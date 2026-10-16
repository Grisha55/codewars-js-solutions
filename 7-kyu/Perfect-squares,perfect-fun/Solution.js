function squareIt(int) {
    const res = [];
    const sInt = int.toString();
    const len = Math.sqrt(sInt.length);
    if (!Number.isInteger(len)) return "Not a perfect square!";
    for (let i = 0; i < sInt.length; i += len) {
        res.push(sInt.slice(i, i + len));
    }
    return res.join("\n");
}
