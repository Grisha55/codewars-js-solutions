function manipulate(num) {
    const strNum = num.toString();
    const f = strNum.slice(0, Math.floor(strNum.length / 2));
    const s = "".padStart(Math.round(strNum.length / 2), "0");
    return +(f + s);
}
