function balanceStatements(list) {
    if (list.trim() === "") return "Buy: 0 Sell: 0";

    const orders = list
        .split(",")
        .map((s) => s.trim())
        .filter((s) => s.length > 0);

    let buy = 0;
    let sell = 0;
    const bad = [];
    const re = /^(\S+)\s+(\d+)\s+(\d+\.\d+|\.\d+)\s+([BS])$/;

    for (const order of orders) {
        const m = order.match(re);
        if (!m) {
            bad.push(order);
            continue;
        }
        const qty = parseInt(m[2], 10);
        const price = parseFloat(m[3]);
        const total = qty * price;
        if (m[4] === "B") buy += total;
        else sell += total;
    }

    const b = Math.round(buy);
    const s = Math.round(sell);

    if (bad.length === 0) {
        return `Buy: ${b} Sell: ${s}`;
    }

    const badStr = bad.map((o) => o + " ;").join("");
    return `Buy: ${b} Sell: ${s}; Badly formed ${bad.length}: ${badStr}`;
}
