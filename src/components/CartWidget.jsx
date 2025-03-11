import React from "react";
import { useCart } from "../context/CartContext"; // Importa el hook del carrito
import cartIcon from "../assets/shopping-cart.svg"; // Importa la imagen del carrito
import "../style/CartWidget.css";

export const CartWidget = () => {
  const { cart, toggleCart } = useCart(); // Obtén la información del carrito y la función toggleCart

  // Obtener la cantidad total de productos en el carrito
  const cartQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  const handleCartClick = () => {
    console.log("Carrito clickeado");
    toggleCart(); // Llamada a toggleCart
  };
  
  return (
    <div className="cart-widget">
      {/* Asegúrate de que el evento onClick esté correctamente configurado en el botón */}
      <button onClick={handleCartClick} className="cart-button">
        <img src={cartIcon} alt="Carrito" className="cart-icon" />
        {cartQuantity > 0 && <span className="cart-quantity">{cartQuantity}</span>}
      </button>
    </div>
  );
};
