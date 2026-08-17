function toBinary(n) {
    return n >= 0 ? n.toString(2) : (n >>> 0).toString(2);
}
