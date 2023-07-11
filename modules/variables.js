// Intializing Variables
const bookstorage = JSON.parse(localStorage.getItem('books-display')) || [];
const bookname = document.getElementById('book-name');
const authorname = document.getElementById('author-name');
const addbutton = document.querySelector('.add-book-button');
const presentbooks = document.querySelector('#books');
const few = document.getElementsByTagName('a');
const sec = document.getElementsByTagName('section');

// Setting the object attributes
class Books {
  constructor() {
    this.bookstorage = [];
  }

  addbook(book) {
    this.bookstorage.push(book);
  }
}

// Books Array instance
const storage = new Books();

export {
  bookstorage, bookname,
  authorname, addbutton,
  presentbooks, few, sec,
  Books,
  storage,
};
