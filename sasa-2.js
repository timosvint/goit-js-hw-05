class StringBuilder {
    #value
    constructor(intialValue) {
        this.#value = intialValue
    }
    getValue() {
        return this.#value
    }
    padEnd(str) {
        this.#value += str
    }
    padStart(str) {
        this.#value = str + this.#value
    }
    padBoth(str) {
        this.#value = str + this.#value + str;
    }
}