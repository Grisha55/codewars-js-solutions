function getPercentage(sent, limit = 1000) {
    if (sent === 0) return "No e-mails sent";
    if (sent >= limit) return "Daily limit is reached";

    return `${Math.floor((sent * 100) / limit)}%`;
}
