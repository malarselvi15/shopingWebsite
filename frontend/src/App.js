// src/App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import AppRoutes from './AppRoutes';
import ProductGrid from './components/ProductGrid';

const App = () => {
  return (
    <Router>
      <Navbar />
      <AppRoutes />
    
    </Router>
  );
};

export default App;
