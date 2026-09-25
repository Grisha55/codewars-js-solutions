function sumItUp(numbersWithBases) {
    let sum = 0;

    for (const [num, base] of numbersWithBases) {
        sum += parseInt(num, base);
    }

    return sum;
}
