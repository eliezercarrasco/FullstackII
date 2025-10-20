import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import pasteleriaImg from '../../assets/img/portada.png';

// Importar todas las imágenes
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

function Cart() {
  const initialProducts = JSON.parse(localStorage.getItem('carrito')) || [];
  const [productos, setProductos] = useState(initialProducts);
  const [total, setTotal] = useState(0);

  // Calcular total cada vez que cambia productos
  useEffect(() => {
    const suma = productos.reduce((acc, p) => acc + p.precio * p.cantidad, 0);
    setTotal(suma);
  }, [productos]);

  // Cambiar cantidad
  const handleCantidadChange = (index, value) => {
    const newProducts = [...productos];
    newProducts[index].cantidad = Math.max(1, parseInt(value) || 1);
    setProductos(newProducts);
  };

  // Eliminar producto
  const handleEliminar = (index) => {
    const newProducts = productos.filter((_, i) => i !== index);
    setProductos(newProducts);
  };

  // Limpiar carrito
  const limpiarCarrito = () => setProductos([]);

  return (
    <div>
      <Navbar />

      <main className="container my-4">
        <div className="text-center mb-4">
          <img
            src={pasteleriaImg}
            alt="Logo Pastelería"
            style={{ width: '80%', maxWidth: '200px', margin: '50px 0', borderRadius: '10px' }}
          />
          <h1>Tu Carrito</h1>
        </div>

        <div className="row">
          {/* Lista de productos */}
          <div className="col-lg-8">
            {productos.length > 0 ? (
              productos.map((p, index) => (
                <div
                  key={index}
                  className="d-flex align-items-center mb-4 p-3 shadow-sm rounded"
                  style={{ backgroundColor: '#fff' }}
                >
                  <img
                    src={p.img}
                    alt={p.nombre}
                    style={{
                      width: '120px',
                      height: '120px',
                      objectFit: 'cover',
                      borderRadius: '10px',
                      marginRight: '20px',
                    }}
                  />
                  <div className="flex-grow-1">
                    <h5>{p.nombre}</h5>
                    <p className="text-primary fw-bold">
                      {p.precio.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}
                    </p>
                    <input
                      type="number"
                      value={p.cantidad}
                      min={1}
                      className="form-control w-25"
                      onChange={(e) => handleCantidadChange(index, e.target.value)}
                    />
                  </div>
                  <button
                    className="btn btn-outline-danger ms-3"
                    onClick={() => handleEliminar(index)}
                  >
                    Eliminar
                  </button>
                </div>
              ))
            ) : (
              <p className="text-center text-muted">No hay productos en tu carrito.</p>
            )}
          </div>

          {/* Resumen fijo */}
          <div className="col-lg-4">
            <div
              className="p-4 shadow-sm rounded"
              style={{
                backgroundColor: '#f5f5f5',
                position: 'sticky',
                top: '100px',
                minHeight: '200px', // Mantiene altura aunque no haya productos
              }}
            >
              <h4 className="mb-3">Resumen</h4>
              <p>
                <strong>Total:</strong>{' '}
                {total.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}
              </p>
              <button
                className="btn w-100 mb-2"
                style={{ backgroundColor: '#ffd700', color: '#000', fontWeight: 'bold' }}
                disabled={productos.length === 0} // Deshabilitado si no hay productos
              >
                Proceder al pago
              </button>
              <button
                className="btn w-100"
                style={{ backgroundColor: '#d32f2f', color: '#fff', fontWeight: 'bold' }}
                onClick={limpiarCarrito}
                disabled={productos.length === 0} // Deshabilitado si no hay productos
              >
                Limpiar carrito
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Cart;
  