import React from 'react';
import '../static/css/ProductDetail.css';

function ProductDetail({ product }) {
  return (
    <div className="product-detail card">
      <img src={product.imageUrl} className="card-img-top" alt={product.name} />
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <p className="card-text">{product.description}</p>
        <p className="card-text">Precio: ${product.price}</p>
        <button className="btn btn-primary">Agregar al Carrito</button>
      </div>
    </div>
  );
}

export default ProductDetail;
