// createLibrary Fxn's

/*
GIOS

G. The fxn sould display a string with the name of the library
I. denverLibrary = "Denver Public Library";
   denverLibrary.name ==>  cityLibrary object
   ==> need more general cityLibrary = " ";
   Param 1 = cityLibrary
   Param 2 = nameLibrary

O. To be a string with the library name
S. 1. Create and name fxn
   2. Add paramter(s)
   3.
*/

function createLibrary(nameLibrary) {
  var library = {
    name: nameLibrary,
    shelves: { fantasy:    [],
               fiction:    [],
               nonFiction: []
             }
  }
  return library;
}

// addBook fxn
/*

G. should add book to the fantasy shelf

I. I have a new obeject (var = dracula) ==> BOOK
   This object is nested (deepEqual) for mainCharacter
   Has 4 key:pairs
   Object dracula will be stored [] in the nested object in the shelves key
   FUNCTION
   Has 2 params (nameLibrary, bookTitle)
   push var dracula --> push(library.shelves.fantasy[0])

O. To store var dracula inside of fantasy[]

S. set the path before you push!!!
  push = () NOT [ ]

*/
function addBook(nameLibrary, bookTitle) {
  if (bookTitle.genre === 'fantasy') {
    nameLibrary.shelves.fantasy.push(bookTitle);
  }  else if (bookTitle.genre === 'fiction') {
    nameLibrary.shelves.fiction.push(bookTitle);
  } else {
    nameLibrary.shelves.nonFiction.push(bookTitle);
  }
}

// checkoutBook Fxn
/*

G.I.O.S --> Goal , Inputs, Outputs, Setup

G. We want to remove a bookTitle from a shelf && checkOut to a patron <-- (anyone)

I. 3 objects total (1 of each bookGenre)
   createLibrary is refrenced **(b/c where you checkOut from matters)**
   ln 102-104 --> 2 params
    param 1 (nameLibrary)
    param 2 (bookTitle)
    param 3 (bookGenre)


O. Found the book, checked the title && bookGenre ==> checkout book to patron


S. a) set params
   b) Setup for loop (want to iterate over our bookGenre arrays that are w/in our shelves object
      i) bookTitle.genre needs to be equal to the bookTitle
  Path --> if(nameLibrary.shelves.genre.bookTitle === bookTitle)

*/

function checkoutBook(nameLibrary, bookTitle, bookGenre) {
  for(var i = 0; i < nameLibrary.shelves[bookGenre].length; i++) {
    if(nameLibrary.shelves[bookGenre][i].title === bookTitle) {
      nameLibrary.shelves[bookGenre].splice(i, 1);
      return `You have now checked out ${bookTitle} from the ${nameLibrary.name}`
    }
  }
  return `Sorry, there are currently no copies of ${bookTitle} available at the ${nameLibrary.name}`
}


module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};


/*

// nameLibrary.shelves[bookGenre][i].title
// [bookGenre][i] <--> .fantasy[0].title

var library = nameLibrary;
var shelves = library.shelves;
var genre = shelves[bookGenre];
var book = genre[i];
var title = book.title;

if(title === bookTitle){

}



*/
