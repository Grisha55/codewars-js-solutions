function solution(roman) {
    const romanNumerals = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
    };

    if (romanNumerals[roman]) return romanNumerals[roman];

    let res = 0;
    let idx = 0;

    while (idx < roman.length) {
        const chars = roman[idx] + roman[idx + 1];

        if (chars in romanNumerals) {
            res += +romanNumerals[chars];
            idx += 2;
        } else {
            res += +romanNumerals[roman[idx]];
            idx++;
        }
    }

    return res;
}
