// ProductSection.js
import React from 'react';
import './ProductSection.css';

const ProductSection = ({ image, name, description, price, button1Name, button2Name, onButton1, onButton2 }) => {
  return (
    <div className="product-section">
      <img src={image} alt={name} className="product-image" />
      <div className="product-details">
        <h2>{name}</h2>
        <p>{description}</p>
        <p className="product-price">${price}</p>
        <div className="product-buttons">
          <button onClick={onButton1} className="btn button-1">{button1Name}</button>
          <button onClick={onButton2} className="btn button-2">{button2Name}</button>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;