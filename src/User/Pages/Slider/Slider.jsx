import React, { useState } from 'react';
import './Slider.css';

const Slider = ({ heading, items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideLeft = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const slideRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="slider-container">
      <h2 className="slider-heading">{heading}</h2>
      <div className="slider">
        <button className="slider-arrow left" onClick={slideLeft}>
          &lt;
        </button>
        <div className="slider-content">
          <div
            className="slider-wrapper"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {items.map((item, index) => (
              <div className="slider-card" key={index}>
                <img src={item.image} alt={item.name} className="slider-card-image" />
                <div className="slider-card-details">
                  <h3>{item.name}</h3>
                  <p>${item.price}</p>
                  <p className="slider-card-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className="slider-arrow right" onClick={slideRight}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Slider;