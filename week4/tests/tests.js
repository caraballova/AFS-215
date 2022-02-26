const expect = require('chai').expect // will allow you to access keywords that belong to the chai library
const mocha = require('mocha').expect
const calculator = require('../calculator');
// const calculator = require('../calculator');
const conditionals = require('../conditionals');

// conditional testing
describe('User', function () {
    
  
it('return "1" when passed 1', function () {
    expect(conditionals(1)).to.equal("1");
});
  
it('return "2" when passed 2', function () {
    expect(conditionals(2)).to.equal("2");
});
  
it('return "Good Morning" when passed 3', function () {
    expect(conditionals(3)).to.equal("Good Morning");
});
  
it('return "Good Afternoon" when passed 7', function () {
    expect(conditionals(7)).to.equal("Good Afternoon");
});
  
it('return "Good Morning" when passed multiple of 3', function () {
    expect(conditionals(6)).to.equal("Good Morning");
});

it('return "Good Afternoon" when passed a multiple of 7', function () {
    expect(conditionals(14)).to.equal("Good Afternoon");
});

it('return "Good Evening" when passed a multiple of 3 & 7', function () {
    expect(conditionals(21)).to.equal("Good Evening");
});

it("return any number not a multiple of 3 or 7 back as a string", function () {
    expect(conditionals(4)).to.equal("4");
});

it("returns error message if datatype is not a number", function () {
    expect(conditionals("argument")).to.equal("Not a number");
});
}) 

// calculator test

it("expect calculator to return", function () {
    expect(calculator()).to.equal(calculator());
});

it("expect calculator to add numbers", function () {
    expect(calculator(4, 4, "+")).to.equal(8);
});

it("expect calculator to subtract numbers", function () {
    expect(calculator(7, 4, "-")).to.equal(3);
});

it("expect calculator to multiply numbers", function () {
    expect(calculator(9, 9, "*")).to.equal(81);
});

it("expect calculator to divide numbers", function () {
    expect(calculator(18, 6, "/")).to.equal(3);
});

it("expect error message if not an option", function () {
    expect(calculator(11)).to.equal("error");
});