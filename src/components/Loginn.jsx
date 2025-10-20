import { useState } from "react";
import pasteleriaImg from "../assets/img/portada.png";
import { loginUsuario } from "../services/loginLogic"; // 👈 Importar lógica

function Login() {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const resultado = loginUsuario(correo, password);

    if (resultado.exito) {
      alert(
        `✅ ${resultado.mensaje}\n\nBeneficios activos:\n- ${resultado.beneficios.join(
          "\n- "
        )}`
      );
      window.location.href = "/"; // puedes cambiar esta ruta si quieres
    } else {
      alert("⚠️ " + resultado.mensaje);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      {/* Encabezado inicio de sesión */}
      <div className="registro-header text-center my-4">
        <img
          src={pasteleriaImg}
          alt="Logo Pastelería"
          id="logo"
          style={{
            width: "80%",
            maxWidth: "150px",
            margin: "50px 0",
            borderRadius: "10px",
          }}
        />
        <h2>Inicio de Sesión</h2>
      </div>

      {/* Formulario */}
      <form
        id="loginForm"
        onSubmit={handleLogin}
        style={{
          maxWidth: "400px",
          margin: "0 auto",
          textAlign: "left",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        }}
      >
        <div className="mb-3">
          <label htmlFor="loginCorreo" className="form-label">
            Correo:
          </label>
          <input
            type="email"
            id="loginCorreo"
            name="correo"
            required
            className="form-control"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="loginPassword" className="form-label">
            Contraseña:
          </label>
          <input
            type="password"
            id="loginPassword"
            name="password"
            required
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="btn w-100"
          style={{
            backgroundColor: "#d32f2f",
            color: "#fff",
            fontWeight: "bold",
          }}
        >
          Entrar
        </button>
      </form>

      <p style={{ textAlign: "center", marginTop: "10px" }}>
        <a href="/register">¿No tienes cuenta? Regístrate aquí</a>
      </p>
    </div>
  );
}

export default Login;
