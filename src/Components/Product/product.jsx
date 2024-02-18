import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Product = () => {
  const [prod, setProd] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        return res.json();
      })
      .then((data) => {
        setProd(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className='d-flex align-items-center justify-content-center text-primary ' style={{fontSize:'5rem'}}>Loading......</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className="container-fluid main d-flex flex-wrap ">
        <h1 className="d-block m-auto mb-3">Sample Products</h1>
        <div className="row d-flex justify-content-center align-self-center">
          {prod.map((data) => (
            <div
              className="card m-2 position-relative shadow-lg"
              key={data.id}
              style={{ width: "25rem", minHeight: "38vw" }}
            >
              <img
                src={data.image}
                className="d-flex justify-content-center align-self-center p-4"
                alt={data.title}
                style={{ width: "20rem", height: "20vw" }}
              />
              <div className="card-body text-center">
                <h5 className="card-text text-secondary" style={{ fontSize: "2vw" }}>
                  {`${data.category.toUpperCase()}`}
                </h5>
                <h5 className="card-title">{data.title}</h5>
                <h4 className="text-info">{`${data.price} USD$`}</h4>
              </div>
              <div className="card-footer w-100 text-center">
                <Link to={`/sho/${data.id}`} className="btn btn-outline-primary fw-semibold">
                  More Details
                </Link>
              </div>
            </div>
          ))}
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Product;
