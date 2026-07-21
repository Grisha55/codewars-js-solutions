function sortByName(ary) {
    if (ary.length === 0) return [];

    const units = [
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
    const teens = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const tens = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    function toWords(num) {
        if (num === 0) return "zero";

        let parts = [];

        if (num >= 100) {
            parts.push(units[Math.floor(num / 100)] + " hundred");
            num %= 100;
        }

        if (num >= 20) {
            parts.push(tens[Math.floor(num / 10) - 2]);
            num %= 10;
            if (num > 0) parts.push(units[num]);
        } else if (num >= 10) {
            parts.push(teens[num - 10]);
        } else if (num > 0) {
            parts.push(units[num]);
        }

        return parts.join(" ");
    }

    return ary.slice().sort((a, b) => {
        const nameA = toWords(a);
        const nameB = toWords(b);
        return nameA.localeCompare(nameB);
    });
}
