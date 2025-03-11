import { Link } from "react-router-dom";
import "../style/Navbar.css";
import { CartWidget } from '../components/CartWidget'
import { useCart } from "../context/CartContext";

export const Navbar = () => {
  const { cart } = useCart(); // Accede al carrito
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">MendoTecno</Link>
        </li>
        <li className="navbar-item">
          <Link to="/category/electronics" className="navbar-link">Electrónica</Link>
        </li>
        <li className="navbar-item">
          <Link to="/category/jewelery" className="navbar-link">Joyería</Link>
        </li>
        <li className="navbar-item">
          <Link to="/category/men's clothing" className="navbar-link">Ropa Hombre</Link>
        </li>
        <li className="navbar-item">
          <Link to="/category/women's clothing" className="navbar-link">Ropa Mujer</Link>
        </li>
        <li className="navbar-item">
          <CartWidget />
        </li>
      </ul>
    </nav>
  )
}
