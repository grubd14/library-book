const myLibrary = [
  // {
  //   title: "Hello",
  //   author: "World",
  //   pages: 123,
  //   read: "not read",
  // },
  // {
  //   title: "My God",
  //   author: "Is this",
  //   pages: 321,
  //   read: "Read",
  // },
];

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

function showBooksInLibrary() {
  const booksShowcase = document.getElementById("books-table");
  for (let index = 0; index < myLibrary.length; index++) {
    const booksList = document.createElement("tr");
    booksList.classList.add("book-info-list");
    booksList.innerHTML = `
    <td>${myLibrary[index].title}</td>
    <td>${myLibrary[index].author}</td>
    <td>${myLibrary[index].pages}</td>
    <td>${myLibrary[index].read}</td>
`;
    booksShowcase.appendChild(booksList);
  }
}

