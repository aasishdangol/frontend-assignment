import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux';

const Navbar = () => {
  const state =useSelector((state)=>state.handleCart);
  return (
    <div>
               <nav className="navbar navbar-expand-lg bg-body-tertiary bg-white py-3 shadow-sm">
  <div className="container-fluid">
    <a className="navbar-brand fw-bold fs-4" href="#">Online Store</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/products">Products</Link>
        </li>
      </ul>
    </div>
    <Link to="/cart">
    <button className='btn btn-outline-dark' >Card({state.length})</button>
    </Link>
  </div>
</nav>
    </div>
  )
}

export default Navbar