import Navbar from '../../components/Navbar';
import Loginn from '../../components/Loginn'; // importamos el formulario de login

function LoginPage() {
  return (
    <div>
      {/* Barra de navegación */}
      <Navbar />

      {/* Encabezado inicio de sesión */}
      <Loginn />
    </div>
  );
}

export default LoginPage;
