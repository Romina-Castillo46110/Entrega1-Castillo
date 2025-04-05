import "../style/ItemDetail.css";
import React, { useState } from "react";
import { ItemQuantitySelector } from "./ItemQuantitySelector";
import { AddItemButton } from "./AddItemButton";

export const ItemDetail = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [addedMessage, setAddedMessage] = useState(false);

  if (!product) return <p>Cargando producto...</p>;

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
    setAddedMessage(true);
    setTimeout(() => setAddedMessage(false), 2000); // Oculta el mensaje después de 2 segundos
  };

  return (
    <div className="item-detail">
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} className="item-image" />
      <p>{product.description}</p>
      <p><strong>Precio: </strong>${product.price}</p>

      <ItemQuantitySelector onQuantityChange={setQuantity} />
      <AddItemButton onClick={handleAddToCart} quantity={quantity} />

      {addedMessage && <p className="added-message">✅ Agregado correctamente</p>}
    </div>
  );
};