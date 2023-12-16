// src/components/GridPage.js

import React from 'react';
import { Link } from 'react-router-dom';

const GridPage = () => {
  const templateItems = Array.from({ length: 6 }, (_, index) => index + 1);

  const gridContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap', // Ensures items wrap to the next row when there's not enough space
    gap: '16px',
  };

  const gridItemStyle = {
    flex: '1', // Makes each item take up equal space
    textAlign: 'center',
    padding: '16px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    maxWidth: '150px', // You can adjust the max width as needed
  };

  const imageStyle = {
    maxWidth: '100%',
    height: 'auto',
  };

  return (
    <div style={gridContainerStyle}>
      {templateItems.map((templateNumber) => (
        <div key={templateNumber} style={gridItemStyle}>
          <Link to="/main">
            <img
              style={imageStyle}
              src={`https://via.placeholder.com/150?text=Template${templateNumber}`}
              alt={`Template ${templateNumber}`}
            />
            <p>Template {templateNumber}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default GridPage;
