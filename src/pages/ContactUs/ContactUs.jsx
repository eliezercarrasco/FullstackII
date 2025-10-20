import Navbar from '../../components/Navbar';
import portadaImg from '../../assets/img/portada.png';

function ContactUs() {
  return (
    <div>
      {/* Barra de navegación */}
      <Navbar />

      {/* Título principal */}
      <div className="text-center my-5">
        <img
          src={portadaImg}
          alt="Logo Pastelería"
          style={{ width: '80%', maxWidth: '200px', margin: '50px 0', borderRadius: '10px' }} />
        <h2>Contáctanos</h2>
      </div>

      {/* Contenedor principal con Flex */}
      <div className="d-flex flex-wrap justify-content-center gap-4 px-3 mb-5">

        {/* Formulario */}
        <div className="p-4 border rounded shadow-sm" style={{ maxWidth: '400px', flex: '1' }}>
          <h3 className="mb-4 text-start">Envíanos un Mensaje</h3>
          <form>
            <div className="mb-3 text-start">
              <label htmlFor="nombre" className="form-label">Nombre Completo</label>
              <input type="text" className="form-control" id="nombre" placeholder="Tu nombre" />
            </div>

            <div className="mb-3 text-start">
              <label htmlFor="correo" className="form-label">Correo Electrónico</label>
              <input type="email" className="form-control" id="correo" placeholder="ejemplo@correo.com" />
            </div>

            <div className="mb-3 text-start">
              <label htmlFor="mensaje" className="form-label">Mensaje</label>
              <textarea className="form-control" id="mensaje" rows="4" placeholder="Escribe tu consulta aquí"></textarea>
            </div>

            <button type="submit" className="btn w-100 mt-3" style={{ backgroundColor: '#d32f2f', color: '#fff', fontWeight: 'bold' }}>Enviar</button>

            
          </form>
        </div>

        {/* Información de contacto */}
        <div className="p-4 border rounded shadow-sm" style={{ maxWidth: '400px', flex: '1' }}>
          <h3 className="mb-4 text-start">Información de Contacto</h3>
          <p><strong>Dirección:</strong> Av. Dulzura 1234, Santiago, Chile</p>
          <p><strong>Teléfono:</strong> +56 9 36109821</p>
          <p><strong>Email:</strong> contacto@milSabores.cl</p>
          <p><strong>Horario:</strong> Lunes a Sábado - 9:00 a 20:00 hrs</p>
        </div>

      </div>
    </div>
  );
}

export default ContactUs;

