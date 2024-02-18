import React, { useEffect, useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Fetch cart items from local storage
    const storedCartItems = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCartItems);
  }, []);

  const updateQuantity = (index, newQuantity) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity = newQuantity;
    if (newQuantity === 0) {
      console.log("gaib");
      updatedCartItems.splice(index, 1); // Remove item from array
      localStorage.setItem('cart', JSON.stringify(updatedCartItems)); // Update local storage
      window.location.reload(); // Reload the page
    } else {
      // Update quantity if not zero
      setCartItems(updatedCartItems);
      localStorage.setItem('cart', JSON.stringify(updatedCartItems)); // Update local storage
    }
  };
  

  return (
    <div className="container">
      <div className="row">
      <div className='col-8'>
      <h1 className='text-primary'>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p className='text-danger fs-3 mt-5'>OOoops...! Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div key={index} className="card mb-3" style={{ maxWidth: '540px' }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={item.image} className="img-fluid rounded-start p-4" alt="Product" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <div className='d-flex align-items-center justify-content-between'>
                      <p className='mt-3'>Quantity: {item.quantity}</p>
                      <div className="btn-group" role="group" aria-label="Basic example">
                        <button onClick={() => updateQuantity(index, item.quantity - 1)} type="button" className="btn btn-outline-primary"><b>-</b></button>
                        <button onClick={() => updateQuantity(index, item.quantity + 1)} type="button" className="btn btn-outline-primary"><b>+</b></button>
                      </div>
                    </div>
                    <p className="card-text"><small className="text-muted">Price: ${item.price}</small></p>
                    <h6 className="card-footer"><small className="text-muted">Total Amount: ${item.price * item.quantity}</small></h6>
                    
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
</div>




            {/* create the bill of items in cart */}
      <div className="col-4">
        <h2 className='mt-5'>Product Details</h2>
          <div>
          <div className="card" style="width: 18rem;">
              <div className="card-body">
                <h6 className="card-subtitle mb-2 text-body-secondary"></h6>
                <p className="card-text">{item.title}</p>
                <p className="card-text">{/* updated quantity of product */}</p>
                <h6>{/* add 5% tax of amount */}</h6>
                <h5>{/* total amount after tax */}</h5>
                <a href="#" className="card-link">Buy now</a> {/* redirect to Buy.jsx */}
              </div>
            </div>
          </div>
      </div>
      </div>
    </div>

    
  );
};

export default Cart;
