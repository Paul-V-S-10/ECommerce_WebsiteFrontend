import React, { useRef } from 'react';
import './ProductCardWrapper.css'; // External CSS file for styling
import ProductCard from '../Card/ProductCard';

const ProductCardWrapper = ({ products, category }) => {
  const sliderRef = useRef(null);

  const scrollLeft = (scrollWidth) => {
    sliderRef.current.scrollLeft -= scrollWidth;
  };

  const scrollRight = (scrollWidth) => {
    sliderRef.current.scrollLeft += scrollWidth;
  };

  const calculateScrollWidth = () => {
    const sliderWidth = sliderRef.current.clientWidth;
    const cardWidth = sliderRef.current.querySelector('.product-card').clientWidth;
    const cardsPerView = Math.floor(sliderWidth / cardWidth); // Number of cards visible at a time

    return cardsPerView * cardWidth;
  };

  return (
    <div className="product-card-wrapper-container">
      <h2 className="category-heading">{category}</h2>
      <div className="product-card-wrapper">
        <button className="scroll-button left" onClick={() => scrollLeft(calculateScrollWidth())}>◀</button>
        <div className="product-slider" ref={sliderRef}>
          {products.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
        <button className="scroll-button right" onClick={() => scrollRight(calculateScrollWidth())}>▶</button>
      </div>
    </div>
  );
};

export default ProductCardWrapper;