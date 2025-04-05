import React from "react";
import { Link } from "react-router-dom";
import "../style/ItemList.css"

export const ItemList = ({ products, onAddToCart }) => {
  return (
    <ul className="product-grid">
      {products.map((product) => (
        <li key={product.id} className="product-item">
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <p className="precio-column">${product.price}</p>

          {/* 🔗 Agrega este enlace para redirigir al detalle del producto */}
          <Link to={`/item/${product.id}`} className="view-details">
            Ver detalles
          </Link>


          <button className="add-to-cart-btn" onClick={() => onAddToCart(product)}>
            Agregar al carrito
          </button>
        </li>
      ))}
    </ul>
  );
};