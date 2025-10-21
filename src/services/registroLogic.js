export function calcularBeneficios({ edad, correo, codigo }) {
  let descuento = 0;
  let beneficios = [];

  // Usuarios mayores de 50 años → 50% descuento
  if (edad >= 50) {
    descuento = 50;
    beneficios.push("50% de descuento por ser mayor de 50 años");
  }

  // Código FELICES50 → 10% descuento de por vida
  if (codigo && codigo.trim().toUpperCase() === "FELICES50") {
    descuento = Math.max(descuento, 10);
    beneficios.push("10% de descuento de por vida (FELICES50)");
  }

  // Correo institucional DUOC → torta gratis en cumpleaños
  if (correo.toLowerCase().endsWith("@duoc.cl")) {
    beneficios.push("Torta gratis en tu cumpleaños (correo DUOC)");
  }

  return {
    descuento,
    beneficios,
  };
}

export function guardarUsuario(usuario) {
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  usuarios.push(usuario);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
}