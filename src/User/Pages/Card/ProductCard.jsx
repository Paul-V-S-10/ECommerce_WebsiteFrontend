import React, { useState } from 'react';
import './ProductCard.css'; // External CSS file for styling

const ProductCard = ({ image, name, price }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div className="product-card" onMouseEnter={handleHover} onMouseLeave={handleHover}>
      <img src={image} alt={name} className="product-image" />
      <div className={`product-overlay ${isHovered ? 'visible' : ''}`}>
        <div className="product-details">
          <h3>{name}</h3>
          <p>${price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;