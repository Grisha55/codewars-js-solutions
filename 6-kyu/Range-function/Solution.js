let range = (...args) => {
    const res = [];

    if (args.length === 1) {
        for (let i = 1; i <= args[0]; i++) {
            res.push(i);
        }
    } else if (args.length === 2) {
        for (let i = args[0]; i <= args[1]; i++) {
            res.push(i);
        }
    } else {
        for (let i = args[0]; i <= args[2]; i += args[1]) {
            res.push(i);
        }
    }

    return res;
};
