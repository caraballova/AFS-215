module.exports = class javaScript {
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
    removeArray(x) {                                // Remove specific items from the array
        for (let i = 0; i < this.array.length; i++){
            if (this.array[i] == value){
                this.array.splice(i, 1)
            }
        }
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




// .deep is the equivalent of switching the comparision from === (strict) to == (loose)