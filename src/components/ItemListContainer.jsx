import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Notificacion } from "./Notificacion"; 
import { ItemList } from "./ItemList";
import "../style/ItemListContainer.css";

export const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const [productos, setProductos] = useState([]);
  const { addToCart } = useCart();
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState(""); 
  const [showNotificacion, setShowNotificacion] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchProductos = async () => {
      try {
        let url = "https://fakestoreapi.com/products";
        if (categoryId) {
          url = `https://fakestoreapi.com/products/category/${categoryId}`;
        }

        const response = await axios.get(url);
        setProductos(response.data);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, [categoryId]);

  const handleAddToCart = (producto) => {
    addToCart(producto);
    setMessage(`Producto ${producto.title} | Agregado Correctamente |`);
    setShowNotificacion(true);
    setTimeout(() => {
      setShowNotificacion(false);
    }, 3000);
  };

  return (
    <div className="item-list-container">
      <h2>{greeting || (categoryId ? `Categoría: ${categoryId}` : "Todos los productos")}</h2>
      {loading && <p>Cargando productos...</p>}
      {showNotificacion && (
        <Notificacion message={message} onClose={() => setShowNotificacion(false)} />
      )}
      <ItemList products={productos} onAddToCart={handleAddToCart} />
    </div>
  );
};