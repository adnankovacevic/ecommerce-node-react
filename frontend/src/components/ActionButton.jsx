import React from 'react';

function ActionButton({ children, onClick, className }) {
  return (
    <button className={`action-button ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default ActionButton;
