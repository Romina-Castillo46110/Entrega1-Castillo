import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

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
    <div>
      <h2>{producto.title}</h2>
      <img src={producto.image} alt={producto.title} style={{ width: "200px" }} />
      <p>{producto.description}</p>
      <p><strong>Precio:</strong> ${producto.price}</p>
      <p><strong>Categoría:</strong> {producto.category}</p>
    </div>
  )
}
