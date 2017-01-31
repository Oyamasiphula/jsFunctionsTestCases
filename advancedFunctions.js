var funcOne = function(string){
    console.log('This is funcOne`s first instruction');
    return string;
};
module.exports = funcOne;

exports.execFunc = function(f){
  var funcOnes_result = f("This is funcOne`s result");
  console.log(funcOnes_result);
  return funcOnes_result;
};

//use function as a parameter
