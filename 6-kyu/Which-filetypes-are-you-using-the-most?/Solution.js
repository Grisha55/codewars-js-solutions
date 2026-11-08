function solve(files) {
    const arrOfFileTypes = files.map((s) => s.split(".").pop());
    const count = {};
    const res = [];

    let max = 0;

    for (const type of arrOfFileTypes) {
        count[type] = (count[type] || 0) + 1;

        if (count[type] > max) {
            max = count[type];
        }
    }

    for (const type in count) {
        if (count[type] === max) {
            res.push("." + type);
        }
    }

    return [...new Set(res)].sort();
}
