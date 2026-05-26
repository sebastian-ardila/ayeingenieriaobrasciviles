import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Configuración Vite
 * ────────────────────────────────────────────────────────────
 * Soporta dos destinos de despliegue:
 *   • GitHub Pages  → BASE_PATH=/ayeingenieriaobrasciviles/
 *   • S3+CloudFront → BASE_PATH=/  (raíz del bucket / dominio)
 *
 * En GitHub Actions ya se pasa VITE_BASE_PATH durante el build.
 * Localmente, `npm run dev` usa "/".
 */
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const base = env.VITE_BASE_PATH || '/';

  return {
    base,
    plugins: [react()],
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: false,
      target: 'es2020',
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom'],
            motion: ['framer-motion'],
            router: ['react-router-dom'],
          },
        },
      },
    },
    server: {
      port: 5173,
      open: true,
    },
  };
});
