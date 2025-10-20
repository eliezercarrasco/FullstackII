import React from 'react';
import pasteleriaImg from '../assets/img/portada.png'; 

function Register() {

  // Lógica de negocio encapsulada
  const calcularBeneficios = ({ edad, correo, codigo }) => {
    let descuento = 0;
    let beneficios = [];

    if (edad >= 50) {
      descuento = 50;
      beneficios.push("50% de descuento por ser mayor de 50 años");
    }

    if (codigo && codigo.trim().toUpperCase() === "FELICES50") {
      descuento = Math.max(descuento, 10);
      beneficios.push("10% de descuento de por vida (FELICES50)");
    }

    if (correo.toLowerCase().endsWith("@duoc.cl")) {
      beneficios.push("Torta gratis en tu cumpleaños (correo DUOC)");
    }

    return { descuento, beneficios };
  };

  const guardarUsuario = (usuario) => {
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    usuarios.push(usuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nombre = e.target.nombre.value.trim();
    const correo = e.target.correo.value.trim();
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    const telefono = e.target.telefono.value.trim();
    const direccion = e.target.direccion.value.trim();
    const edad = parseInt(e.target.edad.value);
    const codigo = prompt("¿Tienes un código promocional? (opcional)") || "";

    // Validaciones básicas
    if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/.test(nombre)) {
      alert("❌ El nombre solo puede contener letras y espacios.");
      return;
    }

    if (password !== confirmPassword) {
      alert("❌ Las contraseñas no coinciden.");
      return;
    }

    if (!nombre || !correo || !direccion || !password) {
      alert("❌ Todos los campos obligatorios deben completarse.");
      return;
    }

    const { descuento, beneficios } = calcularBeneficios({ edad, correo, codigo });

    const usuario = {
      nombre,
      correo,
      telefono,
      direccion,
      edad,
      descuento,
      beneficios,
      fechaRegistro: new Date().toLocaleString(),
    };

    guardarUsuario(usuario);

    alert(
      `✅ Registro exitoso: ${nombre}\n\nDescuento aplicado: ${descuento}%\nBeneficios:\n- ${beneficios.join("\n- ")}`
    );

    e.target.reset();
  };

  return (
    <div style={{ padding: '20px' }}>
      <div className="registro-header text-center my-4">
        <img 
          src={pasteleriaImg} 
          alt="Logo Pastelería" 
          id="logo" 
          style={{ width: '80%', maxWidth: '150px', margin: '50px 0', borderRadius: '10px' }} 
        />
        <h2>Registro de Usuario</h2>
      </div>

      <form 
        id="registro"
        onSubmit={handleSubmit}
        style={{ 
          maxWidth: '400px', 
          margin: '0 auto', 
          textAlign: 'left', 
          padding: '20px', 
          border: '1px solid #ccc', 
          borderRadius: '10px', 
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)' 
        }}
      >
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre Completo:</label>
          <input 
            type="text" 
            id="nombre" 
            name="nombre" 
            maxLength="50" 
            required 
            className="form-control" 
            pattern="^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$"
            title="El nombre solo puede contener letras y espacios"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="correo" className="form-label">Correo Electrónico:</label>
          <input type="email" id="correo" name="correo" required className="form-control" />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Contraseña:</label>
          <input type="password" id="password" name="password" required className="form-control" />
        </div>

        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">Confirmar Contraseña:</label>
          <input type="password" id="confirmPassword" name="confirmPassword" required className="form-control" />
        </div>

        <div className="mb-3">
          <label htmlFor="telefono" className="form-label">Teléfono (opcional):</label>
          <input type="tel" id="telefono" name="telefono" pattern="[0-9]{9}" className="form-control" />
        </div>

        <div className="mb-3">
          <label htmlFor="direccion" className="form-label">Dirección:</label>
          <input type="text" id="direccion" name="direccion" required className="form-control" />
        </div>

        <div className="mb-3">
          <label htmlFor="edad" className="form-label">Edad:</label>
          <input type="number" id="edad" name="edad" min="0" required className="form-control" />
        </div>

        <button 
          type="submit" 
          className="btn w-100 mt-3" 
          style={{ backgroundColor: '#d32f2f', color: '#fff', fontWeight: 'bold' }}
        >
          Registrarse
        </button>
      </form>
    </div>
  );
}

export default Register;

