//Fill in the urlSlug function so it converts a string title and returns the hyphenated version for the URL. You can use any of the methods covered in this section, and don't use replace. Here are the requirements:
//
//The input is a string with spaces and title-cased words
//
//The output is a string with the spaces between words replaced by a hyphen (-)
//
//The output should be all lower-cased letters
//
//The output should not have any spaces
//                                                                           
//urlSlug("Winter Is Coming") should return "winter-is-coming".
//urlSlug(" Winter Is  Coming") should return "winter-is-coming".
//urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone") should return "a-mind-needs-books-like-a-sword-needs-a-whetstone".
//urlSlug("Hold The Door") should return "hold-the-door".


// the global variable
var globalTitle = " Winter Is  Coming";

function urlSlug(title) {
    var newtitle = title.slice().trim().toLowerCase().split(/\s+/).join('-')
    return newtitle
}

console.log(urlSlug(globalTitle))
