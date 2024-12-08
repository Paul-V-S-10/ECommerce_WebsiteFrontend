import React, { useState, useEffect, useRef } from 'react';
import './Carousel.css';  // Assuming you have a separate CSS file for styling

const images = [
  '/carousel/carousel1.webp',
  '/carousel/carousel2.webp',
  '/carousel/carousel3.webp',
  // Add more images as needed
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [progress, setProgress] = useState(0);
    const intervalRef = useRef(null);
    const progressRef = useRef(null);
  
    useEffect(() => {
      startInterval();
  
      return () => {
        clearInterval(intervalRef.current);
        clearInterval(progressRef.current);
      };
    }, []);
  
    useEffect(() => {
      setProgress(0);
      clearInterval(progressRef.current);
  
      progressRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(progressRef.current);
            return 100;
          }
          return prev + 1;
        });
      }, 30);
  
      return () => clearInterval(progressRef.current);
    }, [currentIndex]);
  
    const startInterval = () => {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        nextSlide();
      }, 3000);
    };
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };
  
    const handleNextClick = () => {
      nextSlide();
      startInterval();
    };
  
    const handlePrevClick = () => {
      prevSlide();
      startInterval();
    };
  
    return (
      <div className="carousel">
        <div className="carousel-inner">
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
            >
              <img src={image} alt={`Slide ${index}`} />
            </div>
          ))}
          <div className="left-arrow" onClick={handlePrevClick}>
            &#9664;
          </div>
          <div className="right-arrow" onClick={handleNextClick}>
            &#9654;
          </div>
        </div>
        <div className="progress-bar">
          <div
            className="progress"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    );
  };
  
  export default Carousel;