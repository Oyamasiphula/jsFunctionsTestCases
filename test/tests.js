const assert = require("assert");
const multiplicationOf2Dig = require("../multiplyThem");
const addThem = require("../paramsDemo");
const advancedFunctUsage = require("../advancedFunctions");
const chekRegistrationNumber = require("../chekRegistrationNumber");
const differentScopes = require("../differentScopes");
const declaringVScalling = require("../declaringVScalling");


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
    it('Should test for the checkPlateNo function with plate number 1 param isFromBellville', function() {
        assert.equal(true, chekRegistrationNumber.isFromBellville("CY 123"));
    });
    it('Should test for the function favSport which uses a polluted global variables ', function() {
        assert.equal("David Blankit's favourate sport is Golf", differentScopes.favSport());
    });
    it('Should test for the function essential code blocks creating vs done then execute process ', function() {
        assert.equal("function", typeof(declaringVScalling.theFunction));
    });
    it('Should test for the function creating vs done then execute to get an output as a typeof(value) of a function ', function() {
        assert.equal("string", typeof(declaringVScalling.theFunction()));
    });
});
