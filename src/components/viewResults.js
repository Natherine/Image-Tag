import React from 'react';
import './viewResults.css';

function ViewResults({ results }) {
  return (
    <div className="viewResults">
      {results.map((link, index) => (
        <div key={index}>
          <img src={link} alt="Result" />
        </div>
      ))}
    </div>
  );
}

export default ViewResults;
