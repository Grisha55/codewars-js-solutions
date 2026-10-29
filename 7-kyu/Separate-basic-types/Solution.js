function separateTypes(input) {
    const nums = [];
    const strings = [];
    const bools = [];

    for (const el of input) {
        if (typeof el === "number") nums.push(el);
        if (typeof el === "string") strings.push(el);
        if (typeof el === "boolean") bools.push(el);
    }

    const res = {};
    if (nums.length > 0) {
        res["number"] = nums;
    }
    if (strings.length > 0) {
        res["string"] = strings;
    }
    if (bools.length > 0) {
        res["boolean"] = bools;
    }

    return res;
}
