class Class {
    static #counter = 0;

    static getNumber() {
        return 2 ** this.#counter++;
    }
}
