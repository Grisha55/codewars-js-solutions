function switchDict(dic) {
    const res = {};

    for (const [key, value] of Object.entries(dic)) {
        if (!res[value]) res[value] = [];
        res[value].push(key);
    }

    return res;
}
