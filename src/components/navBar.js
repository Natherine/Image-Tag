import React from 'react';
import { Link } from 'react-router-dom';
import './navBar.css';

const NavBar = ({ isAuthenticated }) => {
  return (
    <nav>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
      {isAuthenticated && (
        <>
          <Link to="/upload">Upload Image</Link>
          <Link to="/search-by-tags">Search By Tags</Link>
          <Link to="/search-by-image">Search By Image</Link>
          <Link to="/remove-tags">Remove Tags</Link>
          <Link to="/delete-image">Delete Image</Link>
        </>
      )}
    </nav>
  );
};

export default NavBar;
