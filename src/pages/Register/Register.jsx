import Navbar from '../../components/Navbar';
import Registerr from '../../components/Registerr'; // importamos el formulario de registro

function RegisterPage() {
  return (
    <div>
      {/* Barra de navegación */}
      <Navbar />
      {/* Encabezado registro */}
      <Registerr />
    </div>
  );
}
export default RegisterPage;
