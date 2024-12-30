// src/components/ProductGrid.js
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import Footer from './Footer';

const products = [
  {
    title: "ETHNIC SETS",
    image: "https://assets0.mirraw.com/images/11845670/ACW8803_zoom.jpg?1694693060"
  },
  {
    title: "KURTA",
    image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/dress/r/v/j/3xl-kurti-western-dresses-for-women-girls-dress-womens-stylish-original-imaghyrxdnhz6qtu.jpeg?q=90&crop=false"
  },
  {
    title: "DRESSES",
    image: "https://i.pinimg.com/236x/98/e4/a6/98e4a63f632e19135285933a2f7f0087.jpg"
  }
];

// Styling the card container
const Card = styled(Box)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  height: '600px', // Height of the card
  width: '400px', // Width of the card
  textAlign: 'center',
  margin: '20px', // Space around each card
  '&:hover img': {
    transform: 'scale(1.05)',
  },
}));

const CardImage = styled('img')(({ theme }) => ({
  transition: 'transform 0.3s ease-in-out',
  width: '100%', // Set width to 100% of the card
  height: 'auto', // Maintain aspect ratio
  objectFit: 'cover', // Cover the area without distortion
}));

const CardOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: '20px',
  left: '50%',
  transform: 'translateX(-50%)',
  color: '#fff',
  textAlign: 'center',
}));

const ProductGrid = () => {
  return (
    <Box padding="20px">
      {/* Title for the product grid */}
      <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
        SHOP BY CATEGORIES
      </Typography>
      <Box display="flex" justifyContent="center" flexWrap="wrap">
        {products.map((product, index) => (
          <Card key={index}>
            <CardImage src={product.image} alt={product.title} />
            <CardOverlay>
              <Typography variant="h6" fontWeight="bold">
                {product.title}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                style={{ marginTop: '10px', backgroundColor: '#000', color: '#fff' }}
              >
                VIEW PRODUCTS
              </Button>
            </CardOverlay>
          </Card>
        ))}
      </Box>
      <Footer /> 
    </Box>
  );
};

export default ProductGrid;
