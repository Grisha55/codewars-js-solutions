function grille(message, code) {
    let binary = code.toString(2).padStart(message.length, "0");
    let res = "";

    if (binary.length > message.length) {
        binary = binary.split("").reverse().slice(0, message.length);
    }

    for (let i = 0; i < message.length; i++) {
        if (binary[i] === "1") {
            res += message[i];
        }
    }

    return res;
}
