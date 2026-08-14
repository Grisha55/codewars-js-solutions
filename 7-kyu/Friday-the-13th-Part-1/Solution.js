function killcount(counselors, jason) {
    const res = [];

    for (const [name, score] of counselors) {
        if (jason > score) {
            res.push(name);
        }
    }

    return res;
}
