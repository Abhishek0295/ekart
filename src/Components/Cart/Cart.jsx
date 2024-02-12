import React, { useEffect, useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/1')
      .then(res => res.json())
      .then(json => setCartItems([json])); // Set the fetched data to cartItems
  }, []);

  return (
    <div>
      {cartItems.map(item => (
        <div className="card text-bg-dark" key={item.id} style={{ width: "20rem", height:'20vw'}}>
          <img src={item.image} className="d-flex justify-content-center align-self-center p-3"  alt="..." style={{ width: "20rem", height:'20vw'}}/>
          <div className="card-img-overlay">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{item.description}</p>
            <p className="card-text">Quantity: {item.quantity}</p> {/* Note: There's no quantity property in the API response */}
            <p className="card-text"><small>Last updated 3 mins ago</small></p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
