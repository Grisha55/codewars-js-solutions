function interpreter(program, bits) {
    const arr = bits.split("");
    let selector = 0;
    let pc = 0;

    while (selector < arr.length) {
        const cmd = program[pc];
        if (cmd === "1") {
            arr[selector] = arr[selector] === "0" ? "1" : "0";
        } else {
            selector++;
        }
        pc = (pc + 1) % program.length;
    }

    return arr.join("");
}
