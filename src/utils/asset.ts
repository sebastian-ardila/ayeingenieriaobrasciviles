/**
 * Resuelve la URL de un asset estático respetando el `base` configurado
 * en Vite. Esto es crítico para que las imágenes y otros recursos
 * carguen correctamente cuando el sitio vive en un subdirectorio
 * (GitHub Pages → /ayeingenieriaobrasciviles/) o en la raíz (S3+CloudFront).
 *
 * Convención: pasa el nombre del archivo tal como vive dentro de `public/`,
 * por ejemplo `asset('aye0.webp')`. Vite copia el contenido de `public/`
 * a la raíz de `dist/` durante el build, por lo que NO debe incluirse el
 * prefijo `public/` en la URL final.
 */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL;
  const clean = path.replace(/^\/+/, '').replace(/^public\//, '');
  return `${base}${clean}`;
}
