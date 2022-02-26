const { expect } = require("chai");

module.exports = function calculator(x, y, z) {
    if (z === "+") {
        return x + y;
    }
    if (z === "-") {
        return x - y;
    }
    if (z === "*") {
        return x * y;
    }
    if (z === "/") {
        return x / y;
    } else {
        return "error";
    }
};

