const assert = require("assert");
const multiplicationOf2Dig = require("../multiplyThem");

describe("Javascript continous intergration", function() {
    it('Should test for the multiplication function and should intentionally fail', function() {
        assert.equal(6, multiplicationOf2Dig.multiplyThem(3, 1));
    });
    it('Should test for the multiplication function should intentionally pass', function() {
        assert.equal(6, multiplicationOf2Dig.multiplyThem(3, 2));
    });
});
