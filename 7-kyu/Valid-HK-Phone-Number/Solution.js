function isValidHKPhoneNumber(str) {
    return /^\d{4} \d{4}$/.test(str);
}

function hasValidHKPhoneNumber(str) {
    return /(?<!\d)\d{4} \d{4}(?!\d)/.test(str);
}
