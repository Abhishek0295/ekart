import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isLoggedIn }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/"><b>e-KarT</b></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {/* Show login link if not logged in */}
            {!isLoggedIn && <Link className="nav-link" to="/login">Login</Link>}
            {/* Show product and cart links only if logged in */}
            {isLoggedIn || <Link className="nav-link" to="/product">Product</Link>}
            {isLoggedIn || <Link className="nav-link" to="/cart">Cart</Link>}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
