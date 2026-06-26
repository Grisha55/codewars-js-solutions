function uncollapse(digits) {
    const nums = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    const result = [];
    let current = "";

    for (const char of digits) {
        current += char;

        if (nums.includes(current)) {
            result.push(current);
            current = "";
        }
    }

    return result.join(" ");
}
