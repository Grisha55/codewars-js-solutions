function partsSums(ls) {
    let total = ls.reduce((sum, num) => sum + num, 0);
    const result = [total];

    for (let i = 0; i < ls.length; i++) {
        total -= ls[i];
        result.push(total);
    }

    return result;
}
