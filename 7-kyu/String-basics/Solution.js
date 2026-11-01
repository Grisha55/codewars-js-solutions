function getUsersIds(str) {
    return str
        .split(",")
        .map((id) =>
            id
                .replace(/#/g, "")
                .trim()
                .replace(/^uid/i, "")
                .trim()
                .toLowerCase(),
        );
}
