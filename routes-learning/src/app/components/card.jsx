"use client"
import React from 'react';


const Card = ({ children }) => {
  const cardStyle = {
    width: '300px',
    padding: '20px',
    margin: '10px',
    borderRadius: '10px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
    color: '#333',
    transition: 'transform 0.3s ease, boxShadow 0.3s ease',
  };

  const hoverStyle = {
    transform: 'translateY(-20px)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={(e) => Object.assign(e.currentTarget.style, hoverStyle)}
      onMouseLeave={(e) => Object.assign(e.currentTarget.style, cardStyle)}
    >
      {children}
    </div>
  );
};

export default Card;
