// src/components/Footer.js
import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { styled } from '@mui/system';

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#333', // Dark background color
  color: '#fff', // White text color
  textAlign: 'center',
  padding: '20px 0',
  position: 'relative',
  bottom: '0',
  width: '100%',
}));

const Footer = () => {
  return (
    <FooterContainer>
      <Typography variant="body2">
        © {new Date().getFullYear()} Fashio
      </Typography>
      Fashio@gamil.com
<div>

      <p>9868763534</p>
      <p>Chennai</p>
</div>
    
    </FooterContainer>
  );
};

export default Footer;
