function assembleString(array) {
    if (array.length === 0) return "";

    const length = array[0].length;
    let result = "";

    for (let i = 0; i < length; i++) {
        let char = "*";

        for (let j = 0; j < array.length; j++) {
            if (array[j][i] !== "*") {
                char = array[j][i];
                break;
            }
        }

        result += char === "*" ? "#" : char;
    }

    return result;
}
