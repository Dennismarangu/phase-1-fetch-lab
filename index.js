function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  fetch('https://anapioficeandfire.com/api/books')
  .then(res => res.json())
  .then(data => renderBooks(data))
}
fetchBooks();

function renderBooks(books) {
  // Render the list of books on the webpage
  const bookList = document.getElementById('bookList');
  books.forEach(book => {
    const li = document.createElement('li');
    li.innerText = book.name;
    bookList.appendChild(li);
  });
}


function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});

fetch('https://anapioficeandfire.com/api/books')
  .then(response => response.json())
  .then(data => {
    // Find the 5th book in the series
    const fifthBook = data[4];
    console.log('The 5th book in the series is:', fifthBook.name);

    // Find the 1031st character in the series
    fetch('https://anapioficeandfire.com/api/characters?page=42&pageSize=25')
      .then(response => response.json())
      .then(data => {
        const character = data[5]; // 1031st character is in the 6th array element of page 42
        console.log('The 1031st character in the series is:', character.name);
      });

    // Find the total number of pages of all the books
    const totalPages = data.reduce((total, book) => total + book.numberOfPages, 0);
    console.log('The total number of pages of all the books is:', totalPages);
  })
  .catch(error => console.error(error));