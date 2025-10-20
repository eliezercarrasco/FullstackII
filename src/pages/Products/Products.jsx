import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import pasteleriaImg from '../../assets/img/portada.png';
import TC001 from '../../assets/img/TC001.JPG';
import TC002 from '../../assets/img/TC002.JPG';
import TT001 from '../../assets/img/TT001.JPG';
import TT002 from '../../assets/img/TT002.JPG';
import PI001 from '../../assets/img/PI001.JPG';
import PI002 from '../../assets/img/PI002.JPG';
import PSA001 from '../../assets/img/PSA001.JPG';
import PSA002 from '../../assets/img/PSA002.JPG';
import PT001 from '../../assets/img/PT001.JPG';
import PT002 from '../../assets/img/PT002.JPG';
import PG001 from '../../assets/img/PG001.JPG';
import PG002 from '../../assets/img/PG002.JPG';
import PV001 from '../../assets/img/PV001.JPG';
import PV002 from '../../assets/img/PV002.JPG';
import TE001 from '../../assets/img/TE001.JPG';
import TE002 from '../../assets/img/TE002.JPG';

function Products() {
  const productosDisponibles = [
    { img: TC001, nombre: "Torta Cuadrada de Chocolate", precio: 45000 },
    { img: TC002, nombre: "Torta Cuadrada de Frutas", precio: 50000 },
    { img: TT001, nombre: "Torta Circular de Vainilla", precio: 40000 },
    { img: TT002, nombre: "Torta Circular de Manjar", precio: 42000 },
    { img: PI001, nombre: "Mousse de Chocolate", precio: 5000 },
    { img: PI002, nombre: "Tiramisú Clásico", precio: 5500 },
    { img: PSA001, nombre: "Torta Sin Azúcar de Naranja", precio: 48000 },
    { img: PSA002, nombre: "Cheesecake Sin Azúcar", precio: 47000 },
    { img: PT001, nombre: "Empanada de Manzana", precio: 3000 },
    { img: PT002, nombre: "Tarta de Santiago", precio: 6000 },
    { img: PG001, nombre: "Brownie Sin Gluten", precio: 4000 },
    { img: PG002, nombre: "Pan Sin Gluten", precio: 3500 },
    { img: PV001, nombre: "Torta Vegana de Chocolate", precio: 50000 },
    { img: PV002, nombre: "Galletas Veganas de Avena", precio: 4500 },
    { img: TE001, nombre: "Torta Especial de Cumpleaños", precio: 55000 },
    { img: TE002, nombre: "Torta Especial de Boda", precio: 60000 },
  ];

  const [carrito, setCarrito] = useState([]);

  // Función para agregar productos al carrito
  const agregarAlCarrito = (producto) => {
    const existe = carrito.find(p => p.nombre === producto.nombre);
    if (existe) {
      // Si ya está, incrementa la cantidad
      const nuevoCarrito = carrito.map(p => 
        p.nombre === producto.nombre ? { ...p, cantidad: p.cantidad + 1 } : p
      );
      setCarrito(nuevoCarrito);
      localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
      localStorage.setItem('carrito', JSON.stringify([...carrito, { ...producto, cantidad: 1 }]));
    }
  };

  // Calcular total
  const total = carrito.reduce((acc, p) => acc + p.precio * p.cantidad, 0);

  return (
    <div>
      <Navbar />

      <main className="container my-4">
        <img
          src={pasteleriaImg}
          alt="Logo Pastelería"
          id="logo"
          style={{ width: '80%', maxWidth: '200px', margin: '50px 0', borderRadius: '10px' }}
        />
        <h1 className="text-center mb-4">PRODUCTOS</h1>

        {/* Cuadrícula de productos */}
        <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
          {productosDisponibles.map((producto, index) => (
            <div className="col" key={index}>
              <div className="card h-100 d-flex flex-column text-center">
                <img src={producto.img} className="card-img-top" alt={producto.nombre} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{producto.nombre}</h5>
                  <p className="card-text">
                    {producto.precio.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}
                  </p>
                  <button 
                    className="btn btn-dark mt-auto w-100" 
                    onClick={() => agregarAlCarrito(producto)}
                  >
                    Agregar al carrito 🛒
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Resumen del carrito */}
        <div className="shadow-sm rounded p-4" style={{ backgroundColor: '#f5f5f5' }}>
          <h4>Carrito</h4>
          {carrito.length === 0 && <p>El carrito está vacío.</p>}
          {carrito.map((p, i) => (
            <p key={i}>
              {p.nombre} x {p.cantidad} = { (p.precio * p.cantidad).toLocaleString('es-CL', { style: 'currency', currency: 'CLP' }) }
            </p>
          ))}
          <hr />
          <p><strong>Total:</strong> {total.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}</p>
        </div>
      </main>
    </div>
  );
}

export default Products;
