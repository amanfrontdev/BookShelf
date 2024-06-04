import React, { useEffect, useState } from 'react';

const Bookshelf = () => {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const storedBookshelf = JSON.parse(localStorage.getItem('bookshelf'));
    setBookshelf(storedBookshelf || []); // Use empty array as default
  }, []);

  return (
    <div className="bookshelf">
      <h2>My Bookshelf</h2>
      {bookshelf.length === 0 && <p>Your bookshelf is empty.</p>}
      <ul>
        {bookshelf.map((book, index) => (
          <li key={index}> {/* Use index as a fallback key */}
            <div className="book-details">
              <h3>{book.title}</h3>
              <p>by {book.author_name?.[0]}</p> {/* Optional author display */}
              {/* Add additional book details if available (cover image, etc.) */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Bookshelf;
