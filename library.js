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

let myBookTitle = 'My fairy tail';
let myBookAuthor = 'Richard Dickins';
let myBookPages = 699;
let myBookReadInfo = 'read';

let myBook = new Book();
myBook.title = myBookTitle;
myBook.author = myBookAuthor;
myBook.pages = myBookPages;
myBook.read = myBookReadInfo;

myLibrary.push(myBook);




console.log(myLibrary);
// myLibrary.info();
// console.log(myLibrary.info());
/* console.log(myLibrary); */
