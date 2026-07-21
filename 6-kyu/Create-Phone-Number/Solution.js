function createPhoneNumber(numbers) {
    const firstPart = `(${numbers.slice(0, 3).join("")}) `;
    const secondPart = `${numbers.slice(3, 6).join("")}-`;
    const lastPart = `${numbers.slice(6).join("")}`;

    return firstPart + secondPart + lastPart;
}
