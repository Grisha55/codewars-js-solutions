function parse(data) {
    const res = [];
    let curVal = 0;

    for (const c of data) {
        switch (c) {
            case "i":
                curVal++;
                break;
            case "d":
                curVal--;
                break;
            case "s":
                curVal = curVal * curVal;
                break;
            case "o":
                res.push(curVal);
                break;
            default:
                curVal += 0;
        }
    }

    return res;
}

