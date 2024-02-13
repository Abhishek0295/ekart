import { Difference } from '@mui/icons-material';
import React from 'react';
import { useState, useEffect } from 'react';

const Cart = () => {
  // Fetch cart items from localStorage or from state if you're managing it globally
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  // console.log(cartItems)

  const arr = []

  for(let i in cartItems){
    const key = [];
    key.push(i)
    key.push(cartItems[i])
    arr.push(key)
  }
  console.log(arr)

  const [pro, setPro] = useState([])
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        return res.json();
      })
      .then((data) => {
        setPro(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

    if(arr.length==pro.length){
     
    }


  return (
    <div>
      {/* <h1>hello thi cart</h1>
     
      {arr.map((val)=><h1>{val[0]} : {val[1]}</h1> )} */}
      {/* <h1>{pro.(val).title}</h1> */}
    </div>
  );
};

export default Cart;
