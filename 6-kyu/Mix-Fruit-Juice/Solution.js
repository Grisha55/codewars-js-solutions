function mixFruit(arr) {
    const fiveDollars = ["banana", "orange", "apple", "lemon", "grapes"];
    const sevenDollars = ["avocado", "strawberry", "mango"];

    let sum = 0;

    for (const f of arr) {
        const lower = f.toLowerCase();
        if (fiveDollars.includes(lower)) {
            sum += 5;
        } else if (sevenDollars.includes(lower)) {
            sum += 7;
        } else {
            sum += 9;
        }
    }

    return Math.round(sum / arr.length);
}
