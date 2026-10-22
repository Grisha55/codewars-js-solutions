function findAdded(st1, st2) {
    const count1 = {};
    const count2 = {};

    for (const n of st1) count1[n] = (count1[n] || 0) + 1;
    for (const n of st2) count2[n] = (count2[n] || 0) + 1;

    let result = "";
    for (let d = 0; d <= 9; d++) {
        const diff = (count2[d] || 0) - (count1[d] || 0);
        if (diff > 0) {
            result += String(d).repeat(diff);
        }
    }

    return result;
}
