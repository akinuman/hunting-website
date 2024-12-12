import React from 'react';

export default function Button({ children, className = '', ...props }) {
  return (
    <button 
      className={`bg-accent-gold hover:bg-opacity-90 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 inline-flex items-center ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}