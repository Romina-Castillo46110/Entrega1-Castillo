import "../style/ItemQuantitySelector.css"

import React, { useState } from "react";

export const ItemQuantitySelector = ({ onQuantityChange }) => {
  const [quantity, setQuantity] = useState(1);

  const increase = () => {
    setQuantity((prev) => {
      const newQuantity = prev + 1;
      onQuantityChange(newQuantity);
      return newQuantity;
    });
  };

  const decrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => {
        const newQuantity = prev - 1;
        onQuantityChange(newQuantity);
        return newQuantity;
      });
    }
  };

  return (
    <div className="quantity-selector">
      <button onClick={decrease} disabled={quantity === 1}>-</button>
      <span>{quantity}</span>
      <button onClick={increase}>+</button>
    </div>
  );
};