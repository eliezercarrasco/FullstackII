// src/logic/loginLogic.js

export function loginUsuario(correo, password) {
  // Recuperar usuarios del localStorage
  const usuariosGuardados = JSON.parse(localStorage.getItem("usuarios")) || [];

  // Buscar el usuario que coincida con correo y contraseña
  const usuario = usuariosGuardados.find(
    (u) => u.correo === correo && u.password === password
  );

  if (!usuario) {
    return { exito: false, mensaje: "Correo o contraseña incorrectos." };
  }

  // Guardar sesión activa
  localStorage.setItem("usuarioActivo", JSON.stringify(usuario));

  return {
    exito: true,
    usuario,
    mensaje: `Bienvenido ${usuario.nombre}`,
    beneficios: usuario.beneficios || [],
  };
}

export function cerrarSesion() {
  localStorage.removeItem("usuarioActivo");
}
