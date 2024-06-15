import React, { useState } from 'react';
import axios from 'axios';
import './deleteImage.css';

function DeleteImage() {
  const [url, setUrl] = useState('');

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://wg461iwwjg.execute-api.us-east-1.amazonaws.com/test/delete-image', {
        url
      });
      console.log(response.data);
      // Handle successful image deletion
    } catch (error) {
      console.error('Error deleting image:', error);
    }
  };

  return (
    <div className="deleteImage">
      <form onSubmit={handleDelete}>
        <label>Image URL</label>
        <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} required />
        <button type="submit">Delete Image</button>
      </form>
    </div>
  );
}

export default DeleteImage;
