function topSecret(str) {
    let result = "";
    for (const ch of str) {
        if (ch >= "A" && ch <= "Z") {
            const code = ch.charCodeAt(0);
            const newCode = ((code - 65 - 3 + 26) % 26) + 65;
            result += String.fromCharCode(newCode);
        } else if (ch >= "a" && ch <= "z") {
            const code = ch.charCodeAt(0);
            const newCode = ((code - 97 - 3 + 26) % 26) + 97;
            result += String.fromCharCode(newCode);
        } else {
            result += ch;
        }
    }
    return result;
}

answer1 = "2478"; // или "2565"
answer2 = "Lbyu"; // или "GuEL"
answer3 = "Apple core"; // или "Banana peel"
