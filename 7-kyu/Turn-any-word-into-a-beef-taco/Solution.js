function tacofy(word) {
    const res = ["shell"];
    const ingredients = {
        t: "tomato",
        l: "lettuce",
        c: "cheese",
        g: "guacamole",
        s: "salsa",
        a: "beef",
        e: "beef",
        u: "beef",
        o: "beef",
        i: "beef",
    };

    for (const c of word) {
        const lower = c.toLowerCase();
        if (ingredients[lower]) {
            res.push(ingredients[lower]);
        }
    }

    return [...res, "shell"];
}
