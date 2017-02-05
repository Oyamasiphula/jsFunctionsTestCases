var theFunction = function(){
    console.log('this is the function executing');
    return 'this is the function executing'
}
exports.theFunction = theFunction ;
//what does this print
console.log(theFunction);

console.log(typeof theFunction);

//to call the function
theFunction();
