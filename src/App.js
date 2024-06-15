import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import Login from './components/login';
import Signup from './components/signup';
import Upload from './components/upload';
import SearchByTags from './components/searchByTags';
import SearchByImage from './components/searchByImage';
import RemoveTags from './components/removeTags';
import DeleteImage from './components/deleteImage';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
          {isAuthenticated && <Link to="/upload">Upload Image</Link>}
          {isAuthenticated && <Link to="/search-by-tags">Search By Tags</Link>}
          {isAuthenticated && <Link to="/search-by-image">Search By Image</Link>}
          {isAuthenticated && <Link to="/remove-tags">Remove Tags</Link>}
          {isAuthenticated && <Link to="/delete-image">Delete Image</Link>}
        </nav>
        <Routes>
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/signup" element={<Signup />} />
          {isAuthenticated && <Route path="/upload" element={<Upload />} />}
          {isAuthenticated && <Route path="/search-by-tags" element={<SearchByTags />} />}
          {isAuthenticated && <Route path="/search-by-image" element={<SearchByImage />} />}
          {isAuthenticated && <Route path="/remove-tags" element={<RemoveTags />} />}
          {isAuthenticated && <Route path="/delete-image" element={<DeleteImage />} />}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
