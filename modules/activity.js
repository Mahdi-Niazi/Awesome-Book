import {
  presentbooks, storage,
} from './variables.js';

class Activity {
  constructor(title, author, id) {
    this.title = title;
    this.author = author;
    this.id = id;
  }

  // class method to display books
  displaybooks() {
    presentbooks.innerHTML = '';
    for (let i = 0; i < storage.bookstorage.length; i += 1) {
      storage.bookstorage[i].id = (storage.bookstorage.indexOf(storage.bookstorage[i])) + 1;
      presentbooks.innerHTML += `
        <tr>
          <td class="btn-book-name">"${storage.bookstorage[i].title}" by ${storage.bookstorage[i].author} </td>
          <td class="btn-remove"> <button class='re' type='button' id='${storage.bookstorage[i].id}'>remove</button> </td>
        </tr>
      `;
    }
    // Event to call the remove method to remove book
    const deleteBtns = document.querySelectorAll('.re');
    deleteBtns.forEach((deleteBtn) => {
      deleteBtn.addEventListener('click', (e) => {
        this.removeBook(e.target.id);
      });
    });
  }

  // class method to remove a book on click.
  removeBook(id) {
    storage.bookstorage = storage.bookstorage.filter((book) => book.id.toString() !== id);
    this.displaybooks();
    localStorage.setItem('bookstorage', JSON.stringify(storage.bookstorage));
  }
}

export default Activity;