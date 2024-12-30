// src/components/ImageSlider.js
import React, { useState, useEffect } from 'react';
import { Box, IconButton } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import img1 from '../images/img1.png';
import img2 from '../images/img2.png';
import img4 from '../images/img4.png';
import img5 from '../images/img5.png';
import img6 from '../images/img6.png';
import img7 from '../images/img7.png';

const imageSlider = [
  img1,
  img2,
  img4,
  img5,
  img6,
  img7
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true); // State to handle fade effect

  const nextImage = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageSlider.length);
      setFade(true);
    }, 500); // Change image after fade-out
  };

  const prevImage = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + imageSlider.length) % imageSlider.length);
      setFade(true);
    }, 500); // Change image after fade-out
  };

  useEffect(() => {
    const intervalId = setInterval(nextImage, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Box position="relative" width="100%" height="600px" overflow="hidden">
      <img
        src={imageSlider[currentIndex]}
        alt={`Slide ${currentIndex}`}
        style={{
          width: '100%',
          height: '600px', // Set a fixed height for the image
          objectFit: 'cover',
          opacity: fade ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out'
        }}
      />
      <IconButton
        onClick={prevImage}
        style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)' }}
      >
        <ArrowBack />
      </IconButton>
      <IconButton
        onClick={nextImage}
        style={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)' }}
      >
        <ArrowForward />
      </IconButton>
    </Box>
  );
};

export default ImageSlider;
