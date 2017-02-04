const assert = require("assert");
const multiplicationOf2Dig = require("../multiplyThem");
const addThem = require("../paramsDemo");
const checkRegitrationNumber = require("../advancedFunctions");
const advancedFunctUsage = require("../checkRegitrationNumber");


describe("Javascript continous intergration ", function() {
    it('Should test for the multiplication function and should intentionally pass', function() {
        assert.equal(20, multiplicationOf2Dig.multiplyThem(10, 2));
    })
    it('Should test for the multiplication function should intentionally pass', function() {
        assert.equal(6, multiplicationOf2Dig.multiplyThem(3, 2));
    });
    it('Should test for the function parameter"s addition', function() {
        assert.equal(3, addThem.theParamFunction(1, 2));
    });
    it('Should test for the first function`s end result', function() {
        assert.equal("This is funcOne`s result", advancedFunctUsage.funcOne("This is funcOne`s result"));
    });
    it('Should test for the first function`s and 2nd function to pass function1`s result', function() {
        assert.equal("This is funcOne`s result", advancedFunctUsage.execFunc(advancedFunctUsage.funcOne));
    });
    it('Should test for the checkPlateNo (isFromBellville', function() {
        assert.equal("This is funcOne`s result", advancedFunctUsage.advancedFunctUsage(advancedFunctUsage.funcOne));
    });
});
