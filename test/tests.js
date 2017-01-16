const assert = require("assert");
const multiplicationOf2Dig = require("../multiplyThem");

describe("Javascript continous intergration", function() {
    it('Should test for the multiplication function and should intentionally pass', function() {
        assert.equal(20, multiplicationOf2Dig.multiplyThem(10, 2));
    })
    it('Should test for the multiplication function should intentionally pass', function() {
        assert.equal(6, multiplicationOf2Dig.multiplyThem(3, 2));
    });
});
