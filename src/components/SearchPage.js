import React, { useState } from 'react';
import axios from 'axios';

const SearchPage = ({ addToBookshelf }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    setQuery(e.target.value);
    if (e.target.value.length > 2) {  // To reduce API calls, search after 3 characters
      try {
        const response = await axios.get(`https://openlibrary.org/search.json?q=${e.target.value}&limit=10&page=1`);
        setResults(response.data.docs);
      } catch (error) {
        console.error("Error fetching the books", error);
      }
    } else {
      setResults([]);
    }
  };

  return (
    <div>
      <h1>Book Search</h1>
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search for books..."
      />
      <div>
        {results.map((book) => (
          <div key={book.key} className="book-card">
            <h3>{book.title}</h3>
            <p>{book.author_name?.join(', ')}</p>
            <button onClick={() => addToBookshelf(book)}>Add to Bookshelf</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
