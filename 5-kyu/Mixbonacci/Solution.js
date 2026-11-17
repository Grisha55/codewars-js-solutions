function mixbonacci(pattern, n) {
    if (n === 0 || pattern.length === 0) return [];

    const configs = {
        fib: { init: [0, 1], next: (a) => a[a.length - 1] + a[a.length - 2] },
        pad: {
            init: [1, 0, 0],
            next: (a) => a[a.length - 2] + a[a.length - 3],
        },
        jac: {
            init: [0, 1],
            next: (a) => a[a.length - 1] + 2 * a[a.length - 2],
        },
        pel: {
            init: [0, 1],
            next: (a) => 2 * a[a.length - 1] + a[a.length - 2],
        },
        tri: {
            init: [0, 0, 1],
            next: (a) => a[a.length - 1] + a[a.length - 2] + a[a.length - 3],
        },
        tet: {
            init: [0, 0, 0, 1],
            next: (a) =>
                a[a.length - 1] +
                a[a.length - 2] +
                a[a.length - 3] +
                a[a.length - 4],
        },
    };

    const seqs = {};
    const counters = {};
    for (const name of Object.keys(configs)) {
        seqs[name] = [...configs[name].init];
        counters[name] = 0;
    }

    const getNext = (name) => {
        const cfg = configs[name];
        const arr = seqs[name];
        while (arr.length <= counters[name]) {
            arr.push(cfg.next(arr));
        }
        return arr[counters[name]++];
    };

    const result = [];
    for (let i = 0; i < n; i++) {
        const name = pattern[i % pattern.length];
        result.push(getNext(name));
    }

    return result;
}
