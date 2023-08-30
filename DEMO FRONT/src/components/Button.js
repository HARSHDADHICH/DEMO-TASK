import React from 'react';
import './Button.css';

const Button = ({ text, onClick, style }) => {
  return (
    <button
      style={style}
      className="custom-button"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
