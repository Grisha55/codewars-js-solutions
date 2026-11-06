const solution = (mtrx) => {
    for (const arr of mtrx) {
        if (arr.includes(">")) {
            const arrowIdx = arr.indexOf(">");
            const xIdx = arr.indexOf("x");
            if (arrowIdx < xIdx) {
                return true;
            }
        }
    }

    return false;
};
