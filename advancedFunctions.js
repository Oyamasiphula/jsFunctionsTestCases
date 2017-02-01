var funcOne = function(string){
    console.log('This is funcOne`s first instruction');
    return string;
};
// The other way of exporting modules (module pattern) & Thus can be applied when used function declaration even for the simple variables;

// The other way of exporting modules (module pattern) To declare my function using the (exports) concept so as to combine it with the function name to create a proper function ;
exports.execFunc = function(f){
  // encapsulation example why because I want this fucntion to be capable of perfoming more tasks and it should use the other functions result on order to perfom its tasks(algorithm)
  var funcOnes_result = f("This is funcOne`s result");
  console.log(funcOnes_result);
  return funcOnes_result;
};

exports.funcOne = funcOne;

//use function as a parameter
