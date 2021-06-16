// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAccountById(accounts, id) {
  let found = accounts.find((account) => account.id === id)
  return (!found) ? null: found;
}

function sortAccountsByLastName(accounts) {
  let result = accounts.sort((account1, account2) => (account1.name.last > account2.name.last ? 1: -1));
  return result
}

function getTotalNumberOfBorrows(account, books) {
  let counter = 0;
   books.map((book) => {
    book.borrows.forEach(borrowed => {
    if (account.id === borrowed.id) {
      counter++
    }
    })
  })
  return counter;
 }


function getBooksPossessedByAccount(account, books, authors) {
 let result = books.filter(({borrows}) => (borrows[0].id ===account.id && !borrows[0].returned)).map((book) => {
   let author = authors.find((guy) => guy.id === book.authorId);
   return {...book, author};
 })
 return result;
}


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
