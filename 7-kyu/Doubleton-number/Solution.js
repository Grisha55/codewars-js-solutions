function doubleton(num) {
    const isDoubleton = (n) => {
        const s = new Set(n.toString());
        return s.size === 2;
    };

    let res = num + 1;
    while (!isDoubleton(res)) {
        res++;
    }

    return res;
}
