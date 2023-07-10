/* let myLibrary = new Book('Introduction to JavaScript', 'Robert Dickward', 478, 'not read'); */
const myLibrary = [];

function Book(title, author, pages, read) {
  this.title;
  this.author;
  this.pages;
  this.read;
  // this.info = function() {
  //   return `${title} by ${author} is ${pages} and ${read} by Sushil.`;
  // }
}

function addBookToLibrary() {
  const myBookTitle = document.querySelector(".book-form input[name='title']");
  const myBookAuthor = document.querySelector(".book-form input[name='author'] ");
  const myBookPages = document.querySelector(".book-form input[name='pages'] ");
  const myBookReadInfo = document.querySelector(".book-form input[name='readInfo']");

  let myBook = new Book();
  myBook.title = myBookTitle.value;
  myBook.author = myBookAuthor.value;
  myBook.pages = myBookPages.value;
  myBook.read = myBookReadInfo.value;

  myLibrary.push(myBook);
}


