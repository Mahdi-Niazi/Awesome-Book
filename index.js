import {
  bookname, authorname, addbutton, storage, sec, few,
} from './modules/variables.js';

import Activity from './modules/activity.js';

// Event to display existing books from localStorage.
document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('bookstorage')) {
    const tempstorage = JSON.parse(localStorage.getItem('bookstorage'));
    for (let i = 0; i < tempstorage.length; i += 1) {
      const book = new Activity(tempstorage[i].title, tempstorage[i].author);
      storage.addbook(book);
      book.displaybooks();
    }
  }
});

// event to add book on click on the Add button.
addbutton.addEventListener('click', () => {
  if (bookname.value !== '' || authorname.value !== '') {
    const nbook = new Activity(bookname.value, authorname.value);
    storage.addbook(nbook);
    bookname.value = '';
    authorname.value = '';
    nbook.displaybooks();
    localStorage.setItem('bookstorage', JSON.stringify(storage.bookstorage));
  }
});

// Display sections according to the nav elements
window.addEventListener('DOMContentLoaded', () => {
  sec[0].classList.toggle('active');
});

for (let i = 0; i < few.length; i += 1) {
  few[i].addEventListener('click', () => {
    for (let j = 0; j < sec.length; j += 1) {
      if (i === j) {
        sec[j].style.display = 'block';
      } else {
        sec[j].style.display = 'none';
      }
    }
  });
}