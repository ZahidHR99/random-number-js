var firstNumber = 100;
var lastNumber  = 200;

var temp = firstNumber;
firstNumber = lastNumber;
lastNumber  = temp;

console.log(firstNumber, lastNumber)