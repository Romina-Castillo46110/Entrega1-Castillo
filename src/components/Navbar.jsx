import '../style/Navbar.css'
import CartWidget from './CartWidget';

function Navbar() {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <a href="#home" className="navbar-link">Home</a>
                </li>
                <li className="navbar-item">
                    <a href="#productos" className="navbar-link">Productos</a>
                </li>
                <li className="navbar-item">
                    <a href="#about" className="navbar-link">About</a>
                </li>
                <li className="navbar-item">
                    <a href="#contacto" className="navbar-link">Contacto</a>
                </li>
                <li className='navbar-item'>
                    <CartWidget/>
                </li>
            </ul>
      </nav>
    )
}

export default Navbar;

/*
                    <ul className='submenu'>
                        <li><a href="producto1" className='submenu-link'>Celulares</a></li>
                        <li><a href="producto2" className='submenu-link'>Tablet</a></li>
                        <li><a href="producto3" className='submenu-link'>PC</a></li>
                        <li><a href="producto4" className='submenu-link'>Laptop</a></li>
                        <li><a href="producto5" className='submenu-link'>Cargadores</a></li>
                        <li><a href="producto6" className='submenu-link'>Smartwatch</a></li>
                    </ul>
*/ 