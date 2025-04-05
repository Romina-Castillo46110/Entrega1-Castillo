import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom"; 
import "../style/CartModal.css";

export const CartModal = () => {
  const { cart, removeFromCart, isCartOpen, toggleCart } = useCart();

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  if (!isCartOpen) return null;

  return (
    <div className="cart-modal-overlay" onClick={toggleCart}>
      <div className="cart-modal" onClick={(e) => e.stopPropagation()}>
        <h2>Carrito de Compras</h2>
        <button className="close-btn" onClick={toggleCart}>X</button>
        
        {cart.length === 0 ? (
          <p>El carrito está vacío</p>
        ) : (
          <>
            <ul>
              {cart.map((item) => (
                <li key={item.id} className="cart-item">
                  <img src={item.image} alt={item.title} className="cart-item-img" />
                  <div>
                    <p>{item.title}</p>
                    <p>Cantidad: {item.quantity}</p>
                    <p>Precio: ${item.price}</p>
                  </div>
                  <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
                </li>
              ))}
            </ul>
            <p className="cart-total">Total: ${totalPrice.toFixed(2)}</p> 

           
            <Link to="/checkout">
              <button className="checkout-btn" onClick={toggleCart}>
                Ir a Checkout 🛒
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};