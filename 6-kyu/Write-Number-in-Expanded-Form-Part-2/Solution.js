function expandedForm(num) {
    const [a, b] = num.toString().split(".");
    let res = [];

    const getZerosNum = (n) => {
        let res = 1;
        for (let i = 0; i < n; i++) {
            res *= 10;
        }
        return res;
    };

    for (let i = 0; i < a.length; i++) {
        const tens = getZerosNum(a.length - i - 1);
        const n = tens * +a[i];
        if (n === 0) continue;
        res.push(String(n));
    }

    for (let i = 1; i <= b.length; i++) {
        const tens = getZerosNum(i);
        if (b[i - 1] === "0") continue;
        const n = b[i - 1] + "/" + String(tens);
        res.push(n);
    }

    return res.join(" + ");
}
