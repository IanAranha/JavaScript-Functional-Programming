//Use the sort method in the alphabeticalOrder function to sort the elements of arr in alphabetical order.

function alphabeticalOrder(arr) {
  // Add your code below this line
  return arr.sort(function(a,b) {return a > b})
  // Add your code above this line
}

//alphabeticalOrder(["a", "d", "c", "a", "z", "g"]) should return ["a", "a", "c", "d", "g", "z"].
console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));

//alphabeticalOrder(["x", "h", "a", "m", "n", "m"]) should return ["a", "h", "m", "m", "n", "x"].
console.log(alphabeticalOrder(["x", "h", "a", "m", "n", "m"]));


//alphabeticalOrder(["a", "a", "a", "a", "x", "t"]) should return ["a", "a", "a", "a", "t", "x"].
console.log(alphabeticalOrder(["a", "a", "a", "a", "x", "t"]));
