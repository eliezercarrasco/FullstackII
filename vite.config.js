/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,              // habilita describe, it, expect sin importar Vitest en cada archivo
    environment: 'jsdom',       // simula el DOM para que React Testing Library funcione
    setupFiles: './tests/setup.ts',  // archivo que se ejecuta antes de los tests (lo crearás luego)
    css: true,                  // permite importar CSS en los componentes sin errores
    coverage: {
      provider: 'v8',           // motor para calcular cobertura (alternativas: 'istanbul', 'c8')
      reporter: ['text', 'lcov'] // genera reporte en consola y HTML
    },
  },
})