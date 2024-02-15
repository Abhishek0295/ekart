import React from 'react'
import { Outlet,Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><b>e-KarT</b></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="/">Dashboard</a>
              <Link className="nav-link" to="" >Product</Link>
              <Link className="nav-link" to="/Cart">Cart</Link>

          </div>
      </div>
    </div>

</nav>
<Outlet></Outlet>
    </div>
  )
}

export default Navbar
