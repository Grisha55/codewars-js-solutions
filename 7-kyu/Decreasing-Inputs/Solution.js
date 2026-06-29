function add(...args) {
    if (args.length === 0) return 0;

    let sum = 0;

    for (let i = 1; i <= args.length; i++) {
        sum += args[i - 1] / i;
    }

    return Math.round(sum);
}
