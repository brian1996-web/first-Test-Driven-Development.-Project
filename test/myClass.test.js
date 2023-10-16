const MyClass =  require ("../src/myClass.js");

const myObj = new MyClass();

var chai = require("chai");
// const { assert } = require('chai');

var assert = chai.assert;

describe("Multiplication method", function () {
  it("Test the multiplication method", function () {
    // assertEqual(multiply(1, 1), 1);
    // it does not pass,
    // however we make multiply a function for it to pass

    assert.equal(myObj.multiply(1, 1), 1);
  });
  it("Test the multiplication method", function () {
    assert.equal(myObj.multiply(2, 2), 4);
  });

  it("Test the multiplication method", function () {
    assert.equal(myObj.multiply(3, 3), 9);
  });
  it("Test the multiplication method", function () {
    assert.equal(myObj.multiply(4, 4), 16);
  });
  it("Test the multiplication method", function () {
    assert.equal(myObj.multiply(23, 45), 23 * 45);
  });
});
