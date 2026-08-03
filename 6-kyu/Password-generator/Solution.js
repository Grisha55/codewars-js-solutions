function passwordGen() {
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const digits = "0123456789";
    const all = lower + upper + digits;

    let password = "";
    password += lower[Math.floor(Math.random() * lower.length)];
    password += upper[Math.floor(Math.random() * upper.length)];
    password += digits[Math.floor(Math.random() * digits.length)];

    const length = Math.floor(Math.random() * 15) + 6; // 6-20

    for (let i = 3; i < length; i++) {
        password += all[Math.floor(Math.random() * all.length)];
    }

    return password
        .split("")
        .sort(() => Math.random() - 0.5)
        .join("");
}
