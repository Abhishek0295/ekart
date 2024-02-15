import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Sho = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error('Error fetching product:', error));
  }, [id]);

  
  const addToCart = () => {
    if (!product) return; // Ensure product is available before adding to cart
    const quantity = 1;
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    const existingItemIndex = cartItems.findIndex(item => item.id === product.id);
    if (existingItemIndex !== -1) {
      // If the product is already in the cart, increase its quantity
      cartItems[existingItemIndex].quantity += quantity;
    } else {
      // Otherwise, add the product to the cart with quantity 1
      cartItems.push({ ...product, quantity });
    }

    localStorage.setItem('cart', JSON.stringify(cartItems));
  };

  if (!product) return <div className='d-flex align-items-center justify-content-center text-primary' style={{ fontSize: '5rem' }}>Loading......</div>;

  return (
    <div className='d-flex align-items-center justify-content-center'>
      <div className="card text-center shadow-lg m-5" style={{ width: '32rem', height: '50%' }}>
        <div className='d-flex align-items-center justify-content-center' style={{ height: '25vw' }}>
          <img src={product.image} className="card-img-top p-5" alt="..." style={{ height: '100%', width: '80%' }} />
        </div>
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <h4 className='fw-bold'>{product.category}</h4>
          <p className="card-text text-secondary">{product.description}</p>
          <h3 className='fw-bold'>Price: ${product.price}</h3>
          <p className='fs-5 fw-semibold'>Ratings: {product.rating.rate} <span>({product.rating.count} ratings)</span></p>
          <div className='card-footer w-100 d-flex align-items-center justify-content-evenly'>
            <button onClick={addToCart} className="btn btn-primary fw-bold">Add to Cart</button>
            <Link to={`/Buy`} className="btn btn-warning fw-bold">Buy Now</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sho;
