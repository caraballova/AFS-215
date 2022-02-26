const { expect } = require("chai");

module.exports = function conditionals(arg) {
  if (typeof arg === "number") {
    if (arg % 3 === 0) {
      if (arg % 7 === 0) {
        return "Good Evening";
      }
      return "Good Morning";
    }
    if (arg % 7 === 0) {
      return "Good Afternoon";
    }
    if (arg % 3 !== 0 || arg % 7 === 0) {
      return String(arg);
    }
  } else {
    return "Not a number";
  }
};