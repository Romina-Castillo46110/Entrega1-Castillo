import "../style/ItemDetailContainer.css"
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useCart } from "../context/CartContext";
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = () => {
  const { itemId } = useParams();
  console.log("🔍 ID del producto seleccionado:", itemId); // <-- Prueba si se obtiene correctamente
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    setLoading(true);
    const fetchProducto = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${itemId}`);
        setProducto(response.data);
      } catch (error) {
        console.error("Error al obtener detalles del producto:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducto();
  }, [itemId]);

  if (loading) return <h2>Cargando producto...</h2>;
  if (!producto) return <h2>Producto no encontrado</h2>;

  return (
    <section>
      <ItemDetail product={producto} onAddToCart={addToCart} />
    </section>
  );
};