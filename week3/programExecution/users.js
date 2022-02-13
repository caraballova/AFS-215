module.exports = class User {                                   // create a class called user
    constructor(num1, num2, name = "Vanessa", age = "5") {      // give it a constructor and 4 properties: num1, num2, name, and age. Provide name and age with default parameters.
        this.num1 = num1,
        this.num2 = num2,
        this.name = name,
        this.age = age
    }
    add() {                                                    // create a function or functions that can add, subtract, multiply, and divide.
        console.log(this.num1 + this.num2);              
    }

    subtract(){
        console.log(this.num1 - this.num2);
    }

    multiply(){
        console.log(this.num1 * this.num2);
    }

    divide(){
        console.log(this.num1 / this.num2);
    }

    gretting(){                                                 // Create a function that acts as a greeting for a user, returning both their name and age.
        console.log(`My name is ${this.name} and I am ${this.age} years old`)
    }

    stringData(){                                               // Create another function that returns the numbers you choose as a string data type instead of a number data type
        let value = String(this.num1) + String(this.num2);
        console.log(value)
    }

}

