function invertHash(hash) {
    const res = {};

    for (const key of Object.keys(hash).reverse()) {
        res[hash[key]] = key;
    }

    return res;
}
