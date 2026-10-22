function checkConcatenatedSum(num, times) {
    const isNegative = num < 0;
    let n = num;
    if (isNegative) {
        n *= -1;
    }

    let sum = 0;
    for (const c of n.toString()) {
        sum += +c.repeat(times);
    }

    return isNegative ? sum * -1 === num : sum === num;
}
