const expect = require('chai').expect
const javaScript = require('../javascriptClass')

it("expected to add 'love'", function(){
    expect(javaScript.addItem("love")).to.deep.equal(["love"])
});

it("expected to call the array", function(){
    expect(javaScript.printArray()).to.deep.equal([])
});

it("expected to search for specific item", function(){
    expect(javaScript.searchArray('love')).to.deep.equal('love')
})

it("expected to remove specific item from array", function(){
    expect(javaScript.removeArray("love")).to.deep.equal([])
});

it("expected to search for specific item if not provide error", function(){
    expect(javaScript.searchArray('love')).to.deep.equal('Error. Please try again.')
})




beforeEach(function(){
    javaScript = new javaScript()
});

before(function(){                                  // runs before any of the tests
    console.log('****Testing Start****')
});

afterEach(function(){
    console.log('****Test Complete****')
});

after(function(){
    console.log('****All Testing Complete****')
});