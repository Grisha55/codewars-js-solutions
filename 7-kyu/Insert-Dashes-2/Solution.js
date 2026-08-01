function insertDashII(num) {
    const str = String(num);
    let result = str[0];

    for (let i = 1; i < str.length; i++) {
        const prev = parseInt(str[i - 1]);
        const curr = parseInt(str[i]);

        if (prev % 2 !== 0 && curr % 2 !== 0) {
            result += "-";
        } else if (
            prev !== 0 &&
            curr !== 0 &&
            prev % 2 === 0 &&
            curr % 2 === 0
        ) {
            result += "*";
        }

        result += str[i];
    }

    return result;
}
