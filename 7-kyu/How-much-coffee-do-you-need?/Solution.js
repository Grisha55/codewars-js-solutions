function howMuchCoffee(events) {
    const target = ["cw", "dog", "cat", "movie"];
    let coffee = 0;

    for (const event of events) {
        const lower = event.toLowerCase();
        if (target.includes(lower)) {
            coffee += event === lower ? 1 : 2;
        }
    }

    return coffee > 3 ? "You need extra sleep" : coffee;
}
