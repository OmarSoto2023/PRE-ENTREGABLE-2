import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import Logo from '../static/image/logo.png';
import '../static/css/NavBar.css';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ marginLeft: 'auto', padding: '10px' }}>
      <Link className="navbar-brand" to="/">
        <img src={Logo} alt="Mi Tienda Logo" width="50" height="50" />
        Mi Tienda
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/category/A">Categoría A</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/category/B">Categoría B</Link>
          </li>
        </ul>
        <div style={{ marginLeft: 'auto' }}>
          <CartWidget quantity={3} />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
