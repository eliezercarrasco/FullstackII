import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'; 
import logo from '../assets/icon/favicon.ico'; 
import '../components/Navbar.css'; 

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger fixed-top navbar-custom">
      <div className="container-fluid">
        {/* Logo + Nombre */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="Logo Pastelería" height="40" className="me-2" />
          Pastelería Mil Sabores
        </Link>

        {/* Botón hamburguesa */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menú */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Inicio</Link></li>
            {/* <li className="nav-item"><Link className="nav-link" to="/about-us">Nosotros</Link></li> */}
            <li className="nav-item"><Link className="nav-link" to="/contact-us">Contacto</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/products">Productos</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/ProductDetails">Detalles</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/login">Iniciar Sesión</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/register">Registrarse</Link></li>

            {/* Carrito con icono grande */}
            <li className="nav-item">
              <Link className="nav-link d-flex align-items-center" to="/cart">
                <FaShoppingCart size={28} /> {/* Ajusta el tamaño aquí */}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
