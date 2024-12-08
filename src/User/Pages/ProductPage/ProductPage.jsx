import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ProductPage.css'; // External CSS for styling

const ProductPage = ({ imageSrc, productName, price, description }) => {
  const [hovered, setHovered] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setCursorPosition({ x, y });
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div className="product-page">
      <div className="product-image" onMouseMove={handleMouseMove} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <img
          src={imageSrc}
          alt={productName}
          className="main-image"
        />
        {hovered && (
          <div
            className="zoomed-image"
            style={{
              backgroundImage: `url(${imageSrc})`,
              backgroundPosition: `${cursorPosition.x}% ${cursorPosition.y}%`,
              left: `${cursorPosition.x}%`,
              top: `${cursorPosition.y}%`,
            }}
          ></div>
        )}
      </div>
      <div className="product-details">
        <h2>{productName}</h2>
        <p className="price">${price}</p>
        <p className="description">{description}</p>
        <button className="buy-button">Buy Now</button>
        <button className="add-to-cart-button">Add to Cart</button>
      </div>
    </div>
  );
};

ProductPage.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default ProductPage;