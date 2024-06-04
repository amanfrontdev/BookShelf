import React from 'react';

const BookCard = ({ title, author, coverImageUrl }) => {
  return (
    <div className="book-card">
      {/* <img src={coverImageUrl} alt={title} /> */}
      <div className="book-details">
        <h3>{title}</h3>
        <p>by {author}</p>
      </div>
      <button onClick={() => addToBookshelf({ title, author })}>Add to Bookshelf</button>
    </div>
  );
};

const addToBookshelf = (book) => {
  const bookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
  bookshelf.push(book);
  localStorage.setItem('bookshelf', JSON.stringify(bookshelf));
};

export default BookCard;
    