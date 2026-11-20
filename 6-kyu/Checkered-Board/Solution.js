function checkeredBoard(dimension) {
    const white = "\u25A0";
    const black = "\u25A1";
    const res = [];
    let isBlack = dimension % 2 !== 0;

    for (let i = 0; i < dimension; i++) {
        let line = "";
        for (let j = 0; j < dimension; j++) {
            if (isBlack) {
                line += white + " ";
                isBlack = false;
            } else {
                line += black + " ";
                isBlack = true;
            }
        }

        if (dimension % 2 === 0) {
            isBlack = !isBlack;
        }

        res.push(line.trim());
    }

    return res.join("\n");
}
