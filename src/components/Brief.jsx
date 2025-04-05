import "../style/Brief.css"
import React from "react";
import { useCart } from "../context/CartContext";

export const Brief = () => {
  const { cart } = useCart();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="brief">
      <h2>📝 Resumen de compra</h2>

      {cart.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.title} - {item.quantity} x ${item.price} = ${item.quantity * item.price}
              </li>
            ))}
          </ul>

          <h3>Total a pagar: ${total.toFixed(2)}</h3>

          <button onClick={() => alert("Compra confirmada 🎉")}>
            Confirmar compra ✅
          </button>
        </>
      )}
    </div>
  );
};