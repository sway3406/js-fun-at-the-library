// shelfBook fxn's

function shelfBook(bookTitle, bookShelf) {
    if(bookShelf.length < 3) {
      bookShelf.unshift(bookTitle);
    return
  }
}

// unshelfBook Fxn's

function unshelfBook(bookTitle, bookShelf) {
  for(var i = 0; i < bookShelf.length; i++) {
    if (bookShelf[i].title === bookTitle) {
    return bookShelf.splice(i, 1);
    }
  }
}


// listTitles Fxn's
// GIOS(pseudo format) ==> Goal, Input, Output, Steps

function listTitles(titleShelf) {
// console.log(titleShelf);
  var lists = [];
  for(var i = 0; i < titleShelf.length; i++) {
    lists.push(titleShelf[i].title);
  }
  return lists.join(', ');
  console.log(lists);
}

// searchShelf Fxn's
/* GIOS (Goal, Input, Output, Steps)
 G. Create a fxn that returns a boolean. if bookTitle(argument) is on shelf = TRUE
    Use a boolen --> IS OR IS NOT on the bookShelf.
    If bookTitle is on shelf (= True) return TRUE
    else return FALSE
 I. We have a var sciFiShelf Array w/ 2 elements.
    Each elements is an object w/ 5 key/value-pairs.
    We have 1 paramter. (sciFiShelf)= argument
                        (bookShelf) = paramter
    We need a conditional (is bookTitle on shelf) Y/N?
 O. I want the output to be a bookTitle string and a boolean value ==>  return ('bookShelf[i].title', boolean)
    Iterate through array with a loop
 S. 1. Declare & name fxn & the paramter ✅
    2.Setup a for loop to iterate through our bookShelf and look at all(.length) the bookTitles. (bookShelf[i].title)
    3. Setup conditional statement
        if bookTitle on bookShelf = True
          return bookTitle string, true
        else
          return bookTitle string, false
*/

function searchShelf(bookShelf, bookTitle) {
  let isOnShelf;
  for (var i = 0; i < bookShelf.length; i++) {
    if (bookShelf[i].title === bookTitle) {
        isOnShelf = true;
  } else {
        isOnShelf = false;
    }
  }
  return isOnShelf;
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
