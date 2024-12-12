import React from 'react';

export default function ProductCard({ title, description, price, image }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover"/>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-hunting-green">${price}</span>
          <button className="bg-earth-brown text-white px-4 py-2 rounded hover:bg-opacity-90 transition-colors">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}