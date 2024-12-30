import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProductList() {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState(''); // State to hold search term
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    const handleBuyNow = (product) => {
        navigate('/order', { state: { product } });
    };

    // Filter products based on search term
    const filteredProducts = products.filter((product) =>
        product.ProductName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>FASHIO</h1>
            {/* Search Input */}
            <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                    width: '50%',
                    padding: '10px',
                    marginBottom: '20px',
                    borderRadius: '8px',
                    border: '1px solid #ddd'
                }}
            />
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', margin: '20px' }}>
                {filteredProducts.map((product) => (
                    <div
                        key={product._id}
                        style={{
                            border: '1px solid #ddd',
                            borderRadius: '8px',
                            padding: '20px',
                            width: '18%',
                            textAlign: 'center',
                            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                            transition: 'transform 0.2s',
                            cursor: 'pointer',
                            margin: '10px',
                        }}
                    >
                        <img
                            src={product.img}
                            alt={product.ProductName}
                            style={{
                                width: '100%',
                                height: '300px',
                                objectFit: 'cover',
                                borderRadius: '8px',
                                marginBottom: '10px'
                            }}
                        />
                        <h2>{product.ProductName}</h2>
                        <p>Price: ${product.price}</p>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                            <button className="btn btn-primary" onClick={() => handleBuyNow(product)}>
                                Buy Now
                            </button>
                            <button
                                className="btn btn-outline-secondary"
                                onClick={() => console.log('Add to Cart clicked for:', product)}
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>

        </div>





    );
}

export default ProductList;
