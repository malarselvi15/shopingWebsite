// src/AppRoutes.js
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import ProductList from './components/ProductList'; // Ensure ProductList includes ProductGrid
import Login from './components/Login';
import Order from './components/Order';
import ImageSlider from './components/ImageSlider';
import ProductGrid from './components/ProductGrid';

const AppRoutes = () => {
  const location = useLocation(); // Get the current path

  return (
    <>
      <Routes>
        {/* Render ProductList only if not on /login or /order */}
        <Route path="/" element={location.pathname === '/' ? <ProductList /> : null} />
        <Route path="/login" element={<Login />} />
        <Route path="/order" element={<Order />} />
      </Routes>
      {/* Conditionally render the ImageSlider based on the current path */}
      {location.pathname !== '/login' && location.pathname !== '/order' && <ImageSlider />}
      {location.pathname !== '/login' && location.pathname !== '/order' && <ProductGrid />}

    </>
  );
};

export default AppRoutes;
