const assert = require("assert");
const multiplicationOf2Dig = require("../multiplyThem.js");

describe("Javascript continous intergration", function(){

    it('Should test for the multiplication function', function(){
    	assert.equal(6, multiplicationOf2Dig.multiplyThem(3,1));
    });
});
