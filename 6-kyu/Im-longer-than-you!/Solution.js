function longer(s) {
    const res = s.split(" ").sort((a, b) => {
        if (a.length !== b.length) {
            return a.length - b.length;
        } else {
            return a < b ? -1 : a > b ? 1 : 0;
        }
    });

    return res.join(" ");
}
