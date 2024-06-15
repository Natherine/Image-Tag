import React, { useState } from 'react';
import axios from 'axios';
import './searchByImage.css';

function SearchByImage() {
  const [file, setFile] = useState(null);
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('https://wg461iwwjg.execute-api.us-east-1.amazonaws.com/test/search-by-image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setResults(response.data.links);
    } catch (error) {
      console.error('Error searching images:', error);
    }
  };

  return (
    <div className="searchByImage">
      <form onSubmit={handleSearch}>
        <label>Search by Image</label>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} required />
        <button type="submit">Search</button>
      </form>
      <div className="results">
        {results.map((link, index) => (
          <div key={index}>
            <img src={link} alt="Search Result" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchByImage;
