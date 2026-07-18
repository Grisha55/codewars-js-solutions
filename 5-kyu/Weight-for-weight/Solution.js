function orderWeight(strng) {
    if (strng.length === 0) return "";

    const numsArr = strng.split(" ").map((n) => n.trim());
    const numSum = (s) => {
        let res = 0;
        for (const c of s) {
            res += +c;
        }
        return res;
    };

    return [...numsArr]
        .sort((a, b) => {
            if (numSum(a) === numSum(b)) {
                return a.localeCompare(b) - b.localeCompare(a);
            } else {
                return numSum(a) - numSum(b);
            }
        })
        .join(" ");
}
