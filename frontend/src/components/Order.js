// src/components/Order.js

import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Order = () => {
    const location = useLocation();
    const { product } = location.state || {}; // Get the product from the state

    // States to manage form inputs
    const [quantity, setQuantity] = useState(1);
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');

    const handleQuantityChange = (e) => {
        setQuantity(e.target.value); // Update quantity based on input
    };

    const handleCardNumberChange = (e) => setCardNumber(e.target.value);
    const handleExpiryDateChange = (e) => setExpiryDate(e.target.value);
    const handleCvvChange = (e) => setCvv(e.target.value);

    // Function to handle order confirmation
    const handleConfirmOrder = () => {
        alert(`Your order for ${quantity} ${product.ProductName}(s) has been confirmed!`);
        
        // Reset form details
        setQuantity(1);
        setCardNumber('');
        setExpiryDate('');
        setCvv('');
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                {product ? (
                    <div className="col-md-8 d-flex flex-wrap" style={{ gap: '20px' }}>
                        {/* Left Column - Image */}
                        <div className="col-md-5 mb-4">
                            <img 
                                src={product.img} 
                                alt={product.ProductName} 
                                style={{
                                    width: '100%', 
                                    height: 'auto', 
                                    maxHeight: '500px', 
                                    objectFit: 'cover', 
                                    borderRadius: '8px',
                                }} 
                            />
                        </div>

                        {/* Right Column - Product Details and Form */}
                        <div className="col-md-6" style={{ paddingLeft: '20px' }}>
                            <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '10px' }}>{product.ProductName}</h2>
                            <p style={{ fontSize: '24px', fontWeight: 'bold', color: 'red' }}>₹{product.price}</p>

                            {/* Quantity Selection */}
                            <div className="mb-3">
                                <label htmlFor="quantity" className="form-label">Quantity</label>
                                <input
                                    type="number"
                                    id="quantity"
                                    value={quantity}
                                    onChange={handleQuantityChange}
                                    min="1"
                                    className="form-control"
                                />
                            </div>

                            {/* Payment Details */}
                            <h4>Payment Details</h4>
                            <div className="mb-3">
                                <label htmlFor="cardNumber" className="form-label">Card Number</label>
                                <input
                                    type="text"
                                    id="cardNumber"
                                    placeholder="Card Number"
                                    className="form-control"
                                    value={cardNumber}
                                    onChange={handleCardNumberChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="expiryDate" className="form-label">Expiry Date (MM/YY)</label>
                                <input
                                    type="text"
                                    id="expiryDate"
                                    placeholder="MM/YY"
                                    className="form-control"
                                    value={expiryDate}
                                    onChange={handleExpiryDateChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="cvv" className="form-label">CVV</label>
                                <input
                                    type="text"
                                    id="cvv"
                                    placeholder="CVV"
                                    className="form-control"
                                    value={cvv}
                                    onChange={handleCvvChange}
                                />
                            </div>

                            {/* Confirm Order Button */}
                            <button
                                className="btn btn-primary w-100"
                                style={{ marginTop: '10px' }}
                                onClick={handleConfirmOrder} // Attach the confirm order function here
                            >
                                Confirm Order
                            </button>
                        </div>
                    </div>
                ) : (
                    <p>No product selected.</p>
                )}
            </div>
        </div>
    );
};

export default Order;
