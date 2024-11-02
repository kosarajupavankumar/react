import React, { useState, useEffect } from "react";

const Carousel = ({ slides, interval = 3000 }) => {
  // Track the current slide index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      return prevIndex === 0 ? slides.length - 1 : prevIndex - 1;
    });
  };

  // Auto slide effect for transitioning every `interval` milliseconds
  useEffect(() => {
    if (slides.length > 0) {
      const slideInterval = setInterval(nextSlide, interval);
      return () => clearInterval(slideInterval); // Cleanup interval on unmount
    }
  }, [currentIndex, interval, slides.length]);

  // Conditional rendering: if there are no slides, return nothing
  if (slides.length === 0) return null;

  return (
    <div
      style={{
        textAlign: "center",
        width: "100%",
        position: "relative",
        maxWidth: "600px",
        margin: "auto",
      }}
    >
      {/* Previous button at the bottom left */}
      <button
        onClick={prevSlide}
        style={{
          position: "absolute",
          bottom: "10px",
          left: "10px",
          padding: "10px",
          zIndex: 1,
        }}
      >
        Previous
      </button>
      {/* Slide Display */}
      <div
        style={{ border: "1px solid #ddd", padding: "10px", marginTop: "40px" }}
      >
        <img
          src={slides[currentIndex].image}
          alt={`Slide ${currentIndex + 1}`}
          style={{ width: "600px", height: "600px", objectFit: "cover" }}
        />
        <h2>{slides[currentIndex].title}</h2>
        <p>{slides[currentIndex].description}</p>
      </div>
      {/* Next button at the bottom right */}
      <button
        onClick={nextSlide}
        style={{
          position: "absolute",
          bottom: "10px",
          right: "10px",
          padding: "10px",
          zIndex: 1,
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;
