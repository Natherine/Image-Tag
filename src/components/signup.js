import React, { useState } from 'react';
import axios from 'axios';
import './signup.css';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://k53ptaw66l.execute-api.us-east-1.amazonaws.com/test/signup', {
        email,
        password,
      });
      if (response.data.success) {
        alert('Signup successful');
      } else {
        alert('Signup failed');
      }
    } catch (error) {
      console.error('Error signing up:', error);
      alert('Signup failed');
    }
  };

  return (
    <div className="signup">
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
