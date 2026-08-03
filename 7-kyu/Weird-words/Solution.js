function nextLetter(s) {
    let result = "";

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (char >= "a" && char <= "z") {
            if (char === "z") {
                result += "a";
            } else {
                result += String.fromCharCode(char.charCodeAt(0) + 1);
            }
        } else if (char >= "A" && char <= "Z") {
            if (char === "Z") {
                result += "A";
            } else {
                result += String.fromCharCode(char.charCodeAt(0) + 1);
            }
        } else {
            result += char;
        }
    }

    return result;
}
