function dateNbDays(a0, a, p) {
    const dailyRate = p / 36000;
    let days = 0;
    let amount = a0;

    while (amount < a) {
        amount *= 1 + dailyRate;
        days++;
    }

    const start = new Date("2016-01-01");
    start.setDate(start.getDate() + days);

    const year = start.getFullYear();
    const month = String(start.getMonth() + 1).padStart(2, "0");
    const day = String(start.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
}
