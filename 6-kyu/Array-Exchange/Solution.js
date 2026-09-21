function exchangeWith(a, b) {
    const reversedA = a.slice().reverse();
    const reversedB = b.slice().reverse();

    a.length = 0;
    for (const item of reversedB) {
        a.push(item);
    }

    b.length = 0;
    for (const item of reversedA) {
        b.push(item);
    }
}
