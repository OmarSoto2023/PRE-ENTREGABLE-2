import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductList from './ProductList';
//import '../static/css/ItemListContainer.css';

function ItemListContainer({ greeting }) {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
 
    const fetchProducts = async () => {
      const response = await new Promise(resolve => {
        setTimeout(() => {
          const allProducts = [
            { id: 1, name: 'Producto 1', price: 10.99, category: 'A', imageUrl: 'https://hmperu.vtexassets.com/arquivos/ids/4491038-600-900?v=638514489979200000&width=600&height=900&aspect=true' },
            { id: 2, name: 'Producto 2', price: 19.99, category: 'B', imageUrl: 'https://hmperu.vtexassets.com/arquivos/ids/3813211-600-900?v=638274336319000000&width=600&height=900&aspect=true' },
            { id: 3, name: 'Producto 3', price: 15.99, category: 'B', imageUrl: 'https://hmperu.vtexassets.com/arquivos/ids/4221147-600-900?v=638419934725530000&width=600&height=900&aspect=true' },
            { id: 4, name: 'Producto 4', price: 8.99, category: 'B', imageUrl: 'https://hmperu.vtexassets.com/arquivos/ids/4244616-600-900?v=638420348419000000&width=600&height=900&aspect=true' },
            { id: 5, name: 'Producto 5', price: 12.99, category: 'A', imageUrl: 'https://hmperu.vtexassets.com/arquivos/ids/3782364-600-900?v=638262264474400000&width=600&height=900&aspect=true' },
            { id: 6, name: 'Producto 6', price: 14.99, category: 'C', imageUrl: 'https://hmperu.vtexassets.com/arquivos/ids/3811521-600-900?v=638274310928100000&width=600&height=900&aspect=true' },
            { id: 7, name: 'Producto 7', price: 9.99, category: 'A', imageUrl: 'https://hmperu.vtexassets.com/arquivos/ids/4312983-600-900?v=638443643033630000&width=600&height=900&aspect=true' },
            { id: 8, name: 'Producto 8', price: 17.99, category: 'C', imageUrl: 'https://hmperu.vtexassets.com/arquivos/ids/4079152-483-725?v=638328769583170000&width=483&height=725&aspect=true' },
            { id: 9, name: 'Producto 9', price: 11.99, category: 'A', imageUrl: 'https://hmperu.vtexassets.com/arquivos/ids/4251733-600-900?v=638422057584800000&width=600&height=900&aspect=true' },
          ];
          const filteredProducts = categoryId ? allProducts.filter(p => p.category === categoryId) : allProducts;
          resolve(filteredProducts);
        }, 1000);
      });
      setProducts(response);
    };

    fetchProducts();
  }, [categoryId]);

  return (
    <div className="container mt-4">
      <h2>{greeting}</h2>
      <ProductList products={products} />
    </div>
  );
}

export default ItemListContainer;
