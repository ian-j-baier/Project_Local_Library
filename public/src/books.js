// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAuthorById(authors, id) {
  let found = authors.find((author) => author.id === id)
  return (!found) ? null: found;
}

function findBookById(books, id) {
  let found = books.find((book) => book.id === id)
  return (!found) ? null: found;
}

function partitionBooksByBorrowedStatus(books) {
  const result = [];
  const resultReturned = [];
  const resultNotReturned = [];
  books.forEach(book => {
    if(book.borrows.some(borrow => borrow.returned === false)){
      resultNotReturned.push(book);
    } else resultReturned.push(book);
    })
    result.push(resultNotReturned, resultReturned);
    return result;
}
function getBorrowersForBook(book, accounts) {
  const {borrows} = book;
  const borrowers = borrows.map(({id, returned})=> {
    const account = accounts.find(account => account.id === id);
    return {
      ...account,
      returned,
    };
  });

  return borrowers.slice(0, 10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
