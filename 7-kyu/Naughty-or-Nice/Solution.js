function naughtyOrNice(data) {
    let naughty = 0;
    let nice = 0;

    for (const month in data) {
        for (const day in data[month]) {
            if (data[month][day] === "Naughty") {
                naughty++;
            } else {
                nice++;
            }
        }
    }

    return naughty > nice ? "Naughty!" : "Nice!";
}
