function addUsername(list) {
    const year = new Date().getFullYear();

    return list.map(function (person) {
        return {
            ...person,
            username:
                person.firstName.toLowerCase() +
                person.lastName[0].toLowerCase() +
                (year - person.age),
        };
    });
}
