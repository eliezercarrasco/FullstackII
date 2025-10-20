import React from 'react';
import Navbar from '../../components/Navbar';
import portadaImg from '../../assets/img/portada.png'; // Imagen corregida
import '../../components/EstiloGlobal.css'; // Ruta CSS corregida

function Home() {
  return (
    <>
      <div>
        {/* Barra de navegación */}
        <Navbar />

        {/* Contenido principal de la página */}
        <main style={{ padding: '20px', textAlign: 'center' }}>
          <img 
            src={portadaImg} 
            alt="Logo Pastelería" 
            id="logo"
            style={{ width: '80%', maxWidth: '200px', margin: '50px 0', borderRadius: '10px' }} 
          />
          <h1>Pastelería Mil Sabores</h1>
          <p>
            Pastelería Mil Sabores celebra su 50 aniversario como un referente en la repostería chilena.
            Famosa por su participación en un récord Guinness en 1995, cuando colaboró en la creación de la
            torta más grande del mundo, la pastelería busca renovar su sistema de ventas online para ofrecer
            una experiencia de compra moderna y accesible para sus clientes.
          </p>
        </main>
      </div>
    </>
  );
}

export default Home;
