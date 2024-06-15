import React, { useState } from 'react';
import axios from 'axios';
import './removeTags.css';

function RemoveTags() {
  const [url, setUrl] = useState('');
  const [tags, setTags] = useState('');

  const handleRemove = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://wg461iwwjg.execute-api.us-east-1.amazonaws.com/test/remove-tag', {
        url,
        tags: tags.split(',').map(tag => tag.trim())
      });
      console.log(response.data);
      // Handle successful tag removal
    } catch (error) {
      console.error('Error removing tags:', error);
    }
  };

  return (
    <div className="removeTags">
      <form onSubmit={handleRemove}>
        <label>Image URL</label>
        <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} required />
        <label>Tags to Remove</label>
        <input type="text" value={tags} onChange={(e) => setTags(e.target.value)} placeholder="Enter tags separated by commas" required />
        <button type="submit">Remove Tags</button>
      </form>
    </div>
  );
}

export default RemoveTags;
