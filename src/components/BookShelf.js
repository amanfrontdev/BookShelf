import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BookCard from './BookCard';

const Bookshelf = () => {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const storedBookshelf = JSON.parse(localStorage.getItem('bookshelf'));
    setBookshelf(storedBookshelf || []); // Use empty array as default
  }, []);

  return (
    <div className="bookshelf">
      <Link to="/" style={{ textDecoration: "none", color: "white" }}> <button className='button' >Home</button></Link>
      <h2>My Bookshelf</h2>
      {bookshelf.length === 0 && <p>Your bookshelf is empty.</p>}
      <ul className="search-results">
        {bookshelf.map((book, index) => (

          <li key={book.key}>
            <BookCard
              title={book.title}
              author={book.author_name?.[0]}

            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Bookshelf;
