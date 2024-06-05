import React, { useState, useEffect } from 'react';
import BookCard from './BookCard'; // Import your BookCard component
import { Link } from 'react-router-dom';


const BookSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Track loading state

  useEffect(() => {
    const fetchBooks = async () => {
      if (searchTerm.length > 0) {
        setIsLoading(true); // Set loading state to true
        try {
          const response = await fetch(`https://openlibrary.org/search.json?q=${searchTerm}&limit=10&page=1`);
          const data = await response.json();
          setSearchResults(data.docs);
        } catch (error) {
          console.error('Error fetching books:', error);
          // Handle errors gracefully (e.g., display an error message)
        } finally {
          setIsLoading(false); // Set loading state to false regardless of success/failure
        }
      } else {
        setSearchResults([]);
      }
    };

    fetchBooks();
  }, [searchTerm]); // Re-run useEffect on searchTerm changes

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="book-search">
      <div className='get-flex'> <h1>Search by Book name</h1> <input type="text" value={searchTerm} onChange={handleSearchChange} placeholder="Search for Books" />

       <Link to="/bookshelf"> <button className='button'>Bookshelf </button></Link>

      </div>


      {isLoading && <p>Loading...</p>} {/* Display loading message while fetching data */}
      {searchResults.length > 0 && (
        <ul className="search-results">
          {searchResults.map((book) => (
            <li key={book.key}>
              <BookCard
                title={book.title}
                author={book.author_name?.[0]}

              />
            </li>
          ))}
        </ul>
      )}
      {searchResults.length === 0 && !isLoading && <p>No results found.</p>} {/* Display no results message */}
    </div>
  );
};

export default BookSearch;
