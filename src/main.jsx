// src/main.jsx

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Importación de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';        // CSS de Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js';   // JS de Bootstrap (collapse, dropdown, etc.)

// Importación de estilos globales de tu proyecto
import './index.css';

// Componente principal de tu aplicación
import App from './App.jsx';

// Montaje de la aplicación en el DOM
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);