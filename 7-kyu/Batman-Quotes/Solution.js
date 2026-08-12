let getQuote = function (quotes, hero) {
    let idx;
    for (let c of hero) {
        if ("0123456789".includes(c)) {
            idx = +c;
        }
    }

    switch (hero[0]) {
        case "R":
            return "Robin: " + quotes[idx];
        case "J":
            return "Joker: " + quotes[idx];
        case "B":
            return "Batman: " + quotes[idx];
        default:
            return -1;
    }
};
