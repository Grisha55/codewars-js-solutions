function decodePass(passArr, bin) {
    const decoded = bin
        .split(" ")
        .map((b) => String.fromCharCode(parseInt(b, 2)))
        .join("");
    return passArr.includes(decoded) ? decoded : false;
}
