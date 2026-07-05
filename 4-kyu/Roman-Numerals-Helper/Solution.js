class RomanNumerals {
    static toRoman(num) {
        const romans = {
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
        let res = "";
        for (const key in romans) {
            while (num >= romans[key]) {
                num -= romans[key];
                res += key;
            }
        }
        return res;
    }

    static fromRoman(str) {
        const romans = {
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
        let res = 0;
        let idx = 0;
        while (idx < str.length) {
            const double = str[idx] + str[idx + 1];
            if (romans[double]) {
                res += romans[double];
                idx += 2;
            } else {
                res += romans[str[idx]];
                idx++;
            }
        }
        return res;
    }
}
