import React, { useState } from 'react';
import axios from 'axios';
import './searchByTags.css';

function SearchByTags() {
  const [tags, setTags] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://wg461iwwjg.execute-api.us-east-1.amazonaws.com/test/search', {
        tags: tags.split(',').map(tag => tag.trim())
      });
      setResults(response.data.links);
    } catch (error) {
      console.error('Error searching images:', error);
    }
  };

  return (
    <div className="searchByTags">
      <form onSubmit={handleSearch}>
        <label>Search by Tags</label>
        <input type="text" value={tags} onChange={(e) => setTags(e.target.value)} placeholder="Enter tags separated by commas" required />
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

export default SearchByTags;
