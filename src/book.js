function createTitle(bookTitle) {
  return `The ${bookTitle}`;

}


// buildMainCharacter fxn's

function buildMainCharacter(nameCharacter, ageCharacter, characterPronouns) {
  return {
  name: nameCharacter,
  age: ageCharacter,
  pronouns: characterPronouns
  };
}

// saveReview fxn's

function saveReview(nameReview, reviews) {
  if (reviews.includes(nameReview)) {
    return reviews;
  } else {
  return reviews.push(nameReview);
  }
}

// calculatePageCount fxn's

function calculatePageCount(addTwentyPages) {
  return addTwentyPages.length * 20;
}

// writeBook fxn's

function writeBook(bookName, bookCharacter, bookGenre) {
  // console.log(writebook);
  return {
    title: bookName,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookName),
    genre: bookGenre
  };
}

// editBook fxn's

function editBook(bookName) {
  bookName.pageCount = bookName.pageCount * .75;
  return bookName.pageCount;
  };

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
