import React from 'react';

const BookCard = ({ title, author }) => {
  return (
    <div className="book-card">
      
      <div className="book-details">
        <h3>Book Name:{title}</h3>
        <p>Author: {author}</p>
      </div>
      <button onClick={() => addToBookshelf({ title, author })} className='button'>Add to Bookshelf</button>
    </div>
  );
};

const addToBookshelf = (book) => {
  const bookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
  bookshelf.push(book);
  localStorage.setItem('bookshelf', JSON.stringify(bookshelf));
};

export default BookCard;
    