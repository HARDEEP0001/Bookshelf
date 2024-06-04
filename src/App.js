import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import SearchPage from './components/SearchPage';
import Bookshelf from './components/Bookshelf';

function App() {
  const [bookshelf, setBookshelf] = useState(() => {
    const saved = localStorage.getItem('bookshelf');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('bookshelf', JSON.stringify(bookshelf));
  }, [bookshelf]);

  const addToBookshelf = (book) => {
    if (!bookshelf.some((b) => b.key === book.key)) {
      setBookshelf([...bookshelf, book]);
    }
  };

  return (
    <div className="App">
      <nav>
        <Link to="/">Search</Link>
        <Link to="/bookshelf">My Bookshelf</Link>
      </nav>
      <Routes>
        <Route path="/" element={<SearchPage addToBookshelf={addToBookshelf} />} />
        <Route path="/bookshelf" element={<Bookshelf bookshelf={bookshelf} />} />
      </Routes>
    </div>
  );
}

export default App;
