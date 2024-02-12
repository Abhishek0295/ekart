import React, { useEffect, useState } from "react";
import { Link,Outlet } from "react-router-dom";


const Product = () => {

  const [prod, setProd] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/`)
      .then((res) => res.json())
      .then((data) => setProd(data));
  }, []);

  console.log(prod);

  return (
    <>
      <div className="container-fluid main d-flex flex-wrap " >
        <div className="row d-flex justify-content-center align-self-center">
        
        {prod.map((data) => (

          <div className="card m-2 position-relative" key={data.id} style={{ width: "25rem", minHeight:'38vw'}}>
            <img src={data.image} className="d-flex justify-content-center align-self-center p-3"  alt="..." style={{ width: "20rem", height:'20vw'}}/>
            <div className="card-body">
              <h5 className="card-text text-secondary" style={{fontSize:'2vw'}}>
              {`${data.category.toUpperCase()}`}
              </h5>
              <h5 className="card-title">{data.title}</h5>
              <h4 className=" text-info">{`${data.price} USD$`}</h4>

              <Link to={`/sho/${data.id}`} className="btn btn-outline-primary">
                More Details
              </Link>
              
            </div>
          </div>
        ))}
   <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};


export default Product;

