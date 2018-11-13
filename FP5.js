//Let us update the incrementer function to clearly declare its dependencies.
//
//CHALLENGE: 
//
//Write the incrementer function so it takes an argument, and then increases the value by one.
//
//Your function incrementer should not change the value of fixedValue.
//Your incrementer function should take a parameter.
//Your incrementer function should return a value that is one larger than the fixedValue value.


// the global variable
var fixedValue = 4;

// Add your code below this line
function incrementer (num) {
    var newValue = num + 1;
    return newValue;
  // Add your code above this line
}

console.log("fixedValue at program start: ", fixedValue)
console.log("Incrementor output: ", incrementer(fixedValue))
console.log("fixedValue at program end: ", fixedValue)


