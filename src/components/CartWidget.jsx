import React from "react";
import { useCart } from "../context/CartContext"; 
import cartIcon from "../assets/shopping-cart.svg";
import "../style/CartWidget.css";

export const CartWidget = () => {
  const { cart, toggleCart } = useCart(); 

  
  const cartQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  const handleCartClick = () => {
    console.log("Carrito clickeado");
    toggleCart(); 
  };
  
  return (
    <div className="cart-widget">
      <button onClick={handleCartClick} className="cart-button">
        <img src={cartIcon} alt="Carrito" className="cart-icon" />
        {cartQuantity > 0 && <span className="cart-quantity">{cartQuantity}</span>}
      </button>
    </div>
  );
};
