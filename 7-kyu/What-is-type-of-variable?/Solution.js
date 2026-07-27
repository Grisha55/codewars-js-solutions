function type(value) {
    if (value === null) return "null";
    if (Array.isArray(value)) return "array";
    if (value instanceof Date) return "date";
    if (value instanceof RegExp) return "regexp";
    if (Number.isNaN(value)) return "number";
    if (value !== value) return "number";
    return typeof value;
}
