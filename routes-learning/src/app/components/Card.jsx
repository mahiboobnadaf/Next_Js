"use client";
import React, { useState } from 'react';

const Card = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    width: '300px',
    padding: '20px',
    margin: '10px',
    borderRadius: '10px',
    backgroundColor: '#fff',
    boxShadow: isHovered ? '0 8px 16px rgba(0, 0, 0, 0.3)' : '0 4px 8px rgba(0, 0, 0, 0.2)',
    transform: isHovered ? 'translateY(-20px)' : 'translateY(0)',
    textAlign: 'center',
    color: '#333',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </div>
  );
};

export default Card;
