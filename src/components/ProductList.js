import React from 'react';
import { Link } from 'react-router-dom';
import '../static/css/ProductList.css';

function ProductList({ products }) {
  return (
    <div className="row">
      {products.map(product => (
        <div className="col-md-4 mb-4" key={product.id}>
          <div className="card my-card">
            <img src={product.imageUrl} className="card-img-top" alt={product.name} />
            <div className="card-body d-flex flex-column justify-content-center text-center">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">Precio: ${product.price}</p>
              <Link to={`/product/${product.id}`} className="btn btn-primary">Ver Detalle</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
