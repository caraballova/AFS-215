module.exports = class Todo {
    constructor() {
        this.array = []
    }
    pushArray(x) {                                  // add an item of any data type to the array
        this.array.push(x)
        return this.array
    }
    printArray() {                                  // call the array
        return this.array
    }
    removeFirst(x) {                                // remove first item from the list
        this.array.shift(x)
        return this.array
    }
    removeLast(x) {                                  // remove last item from the list
        this.array.pop(x)
        return this.array
    }
    removeSpecific(x) {                              // remove specific item from the list
        this.array = this.array.filter((find) => find != x)
        return this.array
    }
    searchArray(x) {                                // Search the array for a specific item. If the item exists, return true(boolean). If not, provide an error message.
        let y = this.array.includes(x)
        if (y === true) {
            return true
        } else {
            return 'Error. Please try again.'
        }
    }
}