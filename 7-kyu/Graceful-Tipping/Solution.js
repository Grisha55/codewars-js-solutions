function gracefulTipping(bill) {
    let total = bill * 1.15;

    let step;
    if (total < 10) {
        step = 1;
    } else {
        const magnitude = Math.pow(10, Math.floor(Math.log10(total)) - 1);
        step = 5 * magnitude;
    }

    return Math.ceil(total / step) * step;
}
