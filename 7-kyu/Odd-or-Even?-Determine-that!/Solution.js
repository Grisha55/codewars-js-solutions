function oddOrEven(n) {
    const ODD = "Odd";
    const EVEN = "Even";
    const EITHER = "Either";
    if (n % 2 === 1) return EITHER;
    return n % 4 === 0 ? EVEN : ODD;
}
