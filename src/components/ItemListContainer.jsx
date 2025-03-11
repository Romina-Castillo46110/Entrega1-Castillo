import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext"; // Importa el hook para acceder al contexto
import axios from "axios";
import { Link } from "react-router-dom";
import { Notificacion } from "./Notificacion"; // Importa el componente Notificacion
import { useParams } from "react-router-dom";
import "../style/ItemListContainer.css";

export const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const [productos, setProductos] = useState([]);
  const { addToCart } = useCart(); // Obtén la función addToCart del contexto
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState(""); // Estado para el mensaje de notificación
  const [showNotificacion, setShowNotificacion] = useState(false); // Estado para controlar la visibilidad de la notificación

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
    addToCart(producto); // Agregar el producto al carrito usando la función del contexto
    setMessage(`Producto ${producto.title} | Agregado Correctamente |`); // Establecer el mensaje
    setShowNotificacion(true); // Mostrar la notificación
    setTimeout(() => {
      setShowNotificacion(false); // Ocultar la notificación después de 3 segundos
    }, 3000);
  };

  return (
    <div className="item-list-container">
      <h2>{greeting || "Productos"}</h2>
      {loading ? <p>Cargando productos...</p> : null}
      {showNotificacion && (
        <Notificacion message={message} onClose={() => setShowNotificacion(false)} />
      )}
      <ul>
        {productos.map((producto) => (
          <li key={producto.id} className="product-item">
            <Link to={`/item/${producto.id}`} className="item-link">
              <h3>{producto.title}</h3>
            </Link>
            <p className="precio-column">Precio: ${producto.price}</p>
            <button onClick={() => handleAddToCart(producto)} className="add-to-cart-btn">
              Agregar al carrito
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
