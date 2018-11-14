//Use the sort method in the nonMutatingSort function to sort the elements of an array in ascending order. The function should return a new array, and not mutate the globalArray variable.
//
//Your code should use the sort method.
//Your code should use the concat method.
//The globalArray variable should not change.
//nonMutatingSort(globalArray) should return [2, 3, 5, 6, 9].

var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Add your code below this line
    var arrayCopy = []
    arrayCopy = arrayCopy.concat(globalArray)
    console.log(globalArray)
    console.log(arrayCopy)
    //arrayCopy.sort(function(a,b){ return a > b})
    //or 
    arrayCopy.sort()
    console.log(globalArray)
    console.log(arrayCopy)
    return arrayCopy
  // Add your code above this line
}
nonMutatingSort(globalArray);