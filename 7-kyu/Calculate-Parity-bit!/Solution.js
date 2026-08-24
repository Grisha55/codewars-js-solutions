function checkParity(parity, bin) {
    const onesL = bin.split("").filter((c) => c === "1").length;

    return onesL % 2 !== 0
        ? parity === "even"
            ? 1
            : 0
        : parity === "odd"
          ? 1
          : 0;
}
