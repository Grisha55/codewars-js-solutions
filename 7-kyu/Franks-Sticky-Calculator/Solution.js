function stickyCalc(operation, val1, val2) {
    if (val1 < 0 || val2 < 0) return;
    const bigNum = +(String(Math.round(val1)) + String(Math.round(val2)));
    switch (operation) {
        case "+": {
            return Math.round(bigNum + val2);
            break;
        }
        case "-": {
            return Math.round(bigNum - val2);
            break;
        }
        case "*": {
            return Math.round(bigNum * val2);
            break;
        }
        case "/": {
            return Math.round(bigNum / val2);
            break;
        }
        default: {
            break;
        }
    }
    return -1;
}
