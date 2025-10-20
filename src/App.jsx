import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import ContactUs from './pages/ContactUs/ContactUs';
import Products from './pages/Products/Products';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Cart from './pages/Cart/Cart';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import './App.css';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />                     {/* Página de inicio */}
        <Route path="/about-us" element={<AboutUs />} />         {/* Quiénes somos */}
        <Route path="/contact-us" element={<ContactUs />} />     {/* Contacto */}
        <Route path="/products" element={<Products />} />        {/* Lista de productos */}
        <Route path="/ProductDetails" element={<ProductDetails />} /> {/* Detalle de producto */}
        <Route path="/cart" element={<Cart />} />                {/* Carrito */}
        <Route path="/login" element={<Login />} />              {/* Login */}
        <Route path="/register" element={<Register />} />        {/* Registro */}
      </Routes>
    </Router>
  );
}

export default App;
