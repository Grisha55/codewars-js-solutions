function whitespaceNumber(n) {
    if (n === 0) return " \n";

    const sign = n > 0 ? " " : "\t";
    const abs = Math.abs(n);
    const binary = abs.toString(2);
    const bits = binary.replace(/1/g, "\t").replace(/0/g, " ");

    return sign + bits + "\n";
}
