import "../style/Checkout.css"
import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { Brief } from "./Brief";

export const Checkout = () => {
  const { cart } = useCart();
  const [customer, setCustomer] = useState({ name: "", email: "", address: "" });

  const handleInputChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("🛍 Compra confirmada:", { customer, cart });
    alert("¡Compra realizada con éxito!");
  };

  return (
    <div className="checkout">
      <h2>🛒 Confirmar compra</h2>

      <Brief />

      {cart.length > 0 && (
        <form onSubmit={handleSubmit}>
          <h3>Datos de contacto</h3>
          <input type="text" name="name" placeholder="Nombre" value={customer.name} onChange={handleInputChange} required />
          <input type="email" name="email" placeholder="Correo" value={customer.email} onChange={handleInputChange} required />
          <input type="text" name="address" placeholder="Dirección" value={customer.address} onChange={handleInputChange} required />
          <button type="submit">Finalizar compra ✅</button>
        </form>
      )}
    </div>
  );
};