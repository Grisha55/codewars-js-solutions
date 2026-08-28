function expressionOut(expr) {
    const [first, sign, second] = expr.split(" ");
    const signs = {
        "+": "Plus",
        "-": "Minus",
        "*": "Times",
        "/": "Divided By",
        "**": "To The Power Of",
        "=": "Equals",
        "!=": "Does Not Equal",
    };

    const nums = {
        0: "Zero",
        1: "One",
        2: "Two",
        3: "Three",
        4: "Four",
        5: "Five",
        6: "Six",
        7: "Seven",
        8: "Eight",
        9: "Nine",
        10: "Ten",
    };

    if (!signs[sign]) return `That\'s not an operator!`;

    return nums[first] + " " + signs[sign] + " " + nums[second];
}
