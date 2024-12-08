import React, { useState, useEffect, useRef } from 'react';
import './ImageCollage.css';

const ImageCollage = ({ products }) => {
  const [shuffledProducts, setShuffledProducts] = useState([...products]);
  const imageRefs = useRef([]);

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('float-in');
      } else {
        entry.target.classList.remove('float-in');
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    imageRefs.current.forEach((img) => {
      observer.observe(img);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setShuffledProducts(shuffleArray([...shuffledProducts]));
    }, 6000);

    return () => clearInterval(interval);
  }, [shuffledProducts]);

  const shuffleArray = (array) => {
    const newArray = [...array];
    const index1 = Math.floor(Math.random() * newArray.length);
    let index2 = Math.floor(Math.random() * newArray.length);
    while (index2 === index1) {
      index2 = Math.floor(Math.random() * newArray.length);
    }
    [newArray[index1], newArray[index2]] = [newArray[index2], newArray[index1]];
    return newArray;
  };

  return (
    <div className="image-collage-container">
      <div className="image-collage">
        {shuffledProducts.map((product, index) => (
          <div
            className="image-container"
            key={index}
            style={{ gridRowEnd: `span ${getRandomSpan()}`, gridColumnEnd: `span ${getRandomSpan()}` }}
          >
            <img
              src={product.image}
              alt={`img-${index}`}
              ref={(el) => (imageRefs.current[index] = el)}
            />
            <div className="product-info">
              <p className="product-name">{product.name}</p>
              <p className="product-price">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const getRandomSpan = () => {
  return Math.floor(Math.random() * 3) + 1;
};

export default ImageCollage;