function move_zeros(arrNum, isRight = true) {
    const res = [...arrNum].filter((n) => n !== 0);
    const zeros = [];

    if (isRight) {
        for (let i = 0; i < arrNum.length - res.length; i++) {
            zeros.push(0);
        }
        return [...res, ...zeros];
    } else {
        for (let i = 0; i < arrNum.length - res.length; i++) {
            zeros.push(0);
        }
        return [...zeros, ...res];
    }

    return -1;
}
