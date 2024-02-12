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

  if (!product) return <div>Loading...</div>;

  const addToCart = (productId) => {
    const quantity = 1;
    let cartObj = JSON.parse(localStorage.getItem('cart')) || {};

    if (cartObj[productId]) {
      cartObj[productId] += quantity;
    } else {
      cartObj[productId] = quantity;
    }

    localStorage.setItem('cart', JSON.stringify(cartObj));
  };

  return (
    <div className='d-flex align-items-center justify-content-center m-5'>
      <div className="card text-center" style={{width:'32rem', height:'80%'}}>
        <div className='d-flex align-items-center justify-content-center' style={{height:'25vw'}}>
          <img src={product.image} className="card-img-top" alt="..." style={{height:'100%', width:'80%'}}/>
        </div>
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <h4 className='fw-bold'>{product.category}</h4>
          <p className="card-text text-secondary">{product.description}</p>
          <h3 className='fw-bold'>Price: ${product.price}</h3>
          <p className='fs-5 fw-semibold'>Ratings: {product.rating.rate} <span>({product.rating.count} ratings)</span></p>
          <div className='d-flex justify-content-evenly'>
            <button onClick={() => addToCart(product.id)} className="btn btn-primary">Add to Cart</button>
            <Link to={`/Buy`} className="btn btn-primary">Buy Now</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sho;
