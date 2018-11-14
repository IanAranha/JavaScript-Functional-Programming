//Refactor (rewrite) the code so the global array bookList is not changed inside either function. The add function should add the given bookName to the end of an array. The remove function should remove the given bookName from an array. Both functions should return an array, and any new parameters should be added before the bookName one.



// the global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

/* This function should add a book to the list and return the list */
// New parameters should come before the bookName one

//Passing in the List and the name of the book to be added to the list into the add function.
//Make an exact copy of the array using slice
//to to copy, push the new book. 
//This way, the old list is conserved and a new list created.
function add(arr,bookName) {
    let newBookList = Array.from(arr)
    var addNewBookToList = newBookList.push(bookName)
    return newBookList;
}

/* This function should remove a book from the list and return the list */
// New parameters should come before the bookName one

//Pass the array and the book to be removed into the remove function
//IF the book is not in the list ==>exit (not added to this program, but should.)
//If the book is there,
//Make an exact copy of the array using slice (copy-array).
//To the copy-array, using splice, create the front-half-array stopping at the index of the book to be removed
//The copy-array is now shortened by the first few elements which were removed and now the book to be removed is the first element of the copy-array.
//To the copy-array, using splice, create the back-half-array removing the first element only.
//concat the front-end-array and the back-end-array
function remove(arr, bookName) {
  if (arr.indexOf(bookName) >= 0) {
    let newerBookList = Array.from(arr)
    var frontofBookList = newerBookList.splice(0,arr.indexOf(bookName))
    var endofBookList = newerBookList.splice(1)
    newerBookList = frontofBookList.concat(endofBookList)
    return newerBookList;
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log("Global array at start")
console.log(bookList);
console.log()
console.log("Adding a new book: ")
console.log(newBookList);
console.log()
console.log("Global array unaffected")
console.log(bookList)
console.log()
console.log("Removing a book: ")
console.log(newerBookList);
console.log()
console.log("Global array unaffected")
console.log(bookList)







