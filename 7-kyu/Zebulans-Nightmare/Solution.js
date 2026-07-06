function zebulansNightmare(functionName) {
    const camel = functionName
        .split("_")
        .map((str) => str[0].toUpperCase() + str.slice(1))
        .join("");
    return camel[0].toLowerCase() + camel.slice(1);
}
