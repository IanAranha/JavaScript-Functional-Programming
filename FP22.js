//Use the some method inside the checkPositive function to check if every element in arr is positive. The function should return a Boolean value.
//Your code should use the some method.
//checkPositive([1, 2, 3, -4, 5]) should return true.
//checkPositive([1, 2, 3, 4, 5]) should return true.
//checkPositive([-1, -2, -3, -4, -5]) should return false.

function checkPositive(arr) {
  // Add your code below this line
     return arr.some(function(currentValue) { return currentValue >= 0})
  // Add your code above this line
}

//checkPositive([1, 2, 3, -4, 5]) should return false.
console.log(checkPositive([1, 2, 3, -4, 5]));

//checkPositive([1, 2, 3, 4, 5]) should return true.
console.log(checkPositive([1, 2, 3, 4, 5]));

//checkPositive([1, -2, 3, -4, 5]) should return false.
console.log(checkPositive([-1, -2, -3, -4, -5]));