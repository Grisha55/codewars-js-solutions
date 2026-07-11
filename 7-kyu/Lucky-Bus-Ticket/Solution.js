function isLucky(ticket) {
    if (ticket.length !== 6) return false;

    let f = 0;
    let s = 0;

    for (let i = 0; i < ticket.length; i++) {
        if (ticket[i] >= "0" && ticket[i] <= "9") {
            if (i < 3) {
                f += +ticket[i];
            } else {
                s += +ticket[i];
            }
        } else {
            return false;
        }
    }

    return f === s;
}
