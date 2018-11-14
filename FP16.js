//Use the sort method in the alphabeticalOrder function to sort the elements of arr in alphabetical order.

function alphabeticalOrder(arr) {
    //This code will sort both strings and numbers
    return arr.sort(function(a,b) {return a > b})
    
    //This default code will only sort strings in ascending order.
    return arr.sort()
}

//alphabeticalOrder(["a", "d", "c", "a", "z", "g"]) should return ["a", "a", "c", "d", "g", "z"].
console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));

//alphabeticalOrder(["x", "h", "a", "m", "n", "m"]) should return ["a", "h", "m", "m", "n", "x"].
console.log(alphabeticalOrder(["x", "h", "a", "m", "n", "m"]));


//alphabeticalOrder(["a", "a", "a", "a", "x", "t"]) should return ["a", "a", "a", "a", "t", "x"].
console.log(alphabeticalOrder(["a", "a", "a", "a", "x", "t"]));

console.log(alphabeticalOrder([12,6,33,23,67,22,8,12]))