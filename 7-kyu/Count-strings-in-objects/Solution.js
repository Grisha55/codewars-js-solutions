function strCount(obj) {
    let count = 0;

    for (const key in obj) {
        const value = obj[key];

        if (typeof value === "string") {
            count++;
        } else if (Array.isArray(value)) {
            for (const item of value) {
                if (typeof item === "string") {
                    count++;
                } else if (typeof item === "object" && item !== null) {
                    count += strCount(item);
                }
            }
        } else if (typeof value === "object" && value !== null) {
            count += strCount(value);
        }
    }

    return count;
}
