function pizzaRewards(customers, minOrders, minPrice) {
    const res = [];

    for (const key in customers) {
        let cnt = 0;
        for (const price of customers[key]) {
            if (price >= minPrice) {
                cnt++;
            }
        }
        if (cnt >= minOrders) {
            res.push(key);
        }
    }

    return res;
}
