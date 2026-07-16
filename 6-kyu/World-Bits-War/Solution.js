function bitsWar(numbers) {
    const odds = numbers.filter((n) => n % 2 !== 0);
    const evens = numbers.filter((n) => n % 2 === 0);

    let oddsSum = 0;
    for (let i = 0; i < odds.length; i++) {
        const nums = [...odds[i].toString(2)].filter((c) => c === "1").length;
        oddsSum += odds[i] > 0 ? nums : -nums;
    }

    let evensSum = 0;
    for (let i = 0; i < evens.length; i++) {
        const nums = [...evens[i].toString(2)].filter((c) => c === "1").length;
        evensSum += evens[i] > 0 ? nums : -nums;
    }

    if (oddsSum === evensSum) return "tie";

    return oddsSum - evensSum > 0 ? "odds win" : "evens win";
}
