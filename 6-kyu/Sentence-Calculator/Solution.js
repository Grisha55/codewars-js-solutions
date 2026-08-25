function lettersToNumbers(s) {
    let sum = 0;

    for (const c of s) {
        if (c >= "a" && c <= "z") {
            sum += c.charCodeAt(0) - 96;
        } else if (c >= "A" && c <= "Z") {
            sum += (c.charCodeAt(0) - 64) * 2;
        } else if (c >= "0" && c <= "9") {
            sum += +c;
        }
    }

    return sum;
}
