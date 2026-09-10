function center(strng, width, fill = " ") {
    if (strng.length >= width) return strng;

    const totalPadding = width - strng.length;
    const leftPadding = Math.ceil(totalPadding / 2);
    const rightPadding = totalPadding - leftPadding;

    return fill.repeat(leftPadding) + strng + fill.repeat(rightPadding);
}
