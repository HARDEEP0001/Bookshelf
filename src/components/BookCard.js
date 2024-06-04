import React from 'react';

function BookCard({ book, addToBookshelf }) {
  return (
    <div className="book-card">
      <h3>{book.title}</h3>
      <p>Author: {book.author_name ? book.author_name.join(', ') : 'Unknown'}</p>
      <button onClick={() => addToBookshelf(book)}>Add to Bookshelf</button>
    </div>
  );
}

export default BookCard;
