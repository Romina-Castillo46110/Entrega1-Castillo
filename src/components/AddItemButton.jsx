import "../style/AddItemButton.css"

import React from "react";

export const AddItemButton = ({ onClick, quantity }) => {
  return (
    <button 
      onClick={onClick} 
      className="add-item-button"
      disabled={quantity < 1}
    >
      Agregar {quantity} al carrito 🛒
    </button>
  );
};