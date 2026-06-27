function hexHash(code) {
    let sum = 0;

    for (const char of code) {
        const hex = char.charCodeAt(0).toString(16);
        for (const digit of hex) {
            if (digit >= "0" && digit <= "9") {
                sum += parseInt(digit, 10);
            }
        }
    }

    return sum;
}
