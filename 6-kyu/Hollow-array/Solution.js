function isHollow(x) {
    if (x.length === 0) return false;

    if (x.every((el) => el === 0)) return x.length >= 3;

    let left = 0;
    while (left < x.length && x[left] !== 0) left++;

    let right = 0;
    while (right < x.length && x[x.length - 1 - right] !== 0) right++;

    if (left !== right) return false;

    const middle = x.slice(left, x.length - right);
    if (middle.length < 3) return false;
    if (!middle.every((el) => el === 0)) return false;

    return true;
}
