function evenAndOdd(num) {
    let even = "";
    let odd = "";

    for (const c of num.toString()) {
        if (+c % 2 === 0) {
            even += c;
        } else {
            odd += c;
        }
    }

    return [+even, +odd];
}
