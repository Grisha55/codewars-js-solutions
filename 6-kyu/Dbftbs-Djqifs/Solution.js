function encryptor(key, message) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let result = "";

    key = ((key % 26) + 26) % 26;

    for (let i = 0; i < message.length; i++) {
        const char = message[i];

        if (char >= "a" && char <= "z") {
            const index = (char.charCodeAt(0) - 97 + key) % 26;
            result += alphabet[index];
        } else if (char >= "A" && char <= "Z") {
            const index = (char.charCodeAt(0) - 65 + key) % 26;
            result += alphabet[index].toUpperCase();
        } else {
            result += char;
        }
    }

    return result;
}
