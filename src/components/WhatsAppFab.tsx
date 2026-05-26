import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const WHATSAPP_URL = 'https://wa.me/573128316239';

/**
 * Botón flotante de WhatsApp — siempre visible. Aparece tras la
 * carga inicial y al hacer click va directo al chat. Si la conexión
 * es por scroll-to del CTA "Cotizar obra", primero se desplaza a la
 * sección de cotización; este botón es la vía rápida.
 */
export function WhatsAppFab() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Aparece después de que termine el veil inicial
    const t = setTimeout(() => setVisible(true), 2200);
    return () => clearTimeout(t);
  }, []);

  return (
    <motion.a
      className="wa-fab"
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      initial={{ opacity: 0, scale: 0.6, y: 30 }}
      animate={visible ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.6, y: 30 }}
      transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
      whileHover={{ scale: 1.08, rotate: -4 }}
      whileTap={{ scale: 0.94 }}
    >
      <span className="wa-fab__ring" aria-hidden="true" />
      <svg viewBox="0 0 24 24" width={30} height={30} aria-hidden="true" fill="currentColor">
        <path d="M20.5 3.5A11.9 11.9 0 0012 0C5.4 0 .1 5.4.1 11.9c0 2.1.5 4.1 1.6 5.9L0 24l6.3-1.7a11.8 11.8 0 005.7 1.4h0c6.6 0 11.9-5.4 11.9-11.9 0-3.2-1.2-6.2-3.4-8.3zM12 21.6a9.7 9.7 0 01-5-1.4l-.3-.2-3.7 1 1-3.7-.2-.4A9.8 9.8 0 012.3 12c0-5.4 4.4-9.7 9.7-9.7 2.6 0 5 1 6.9 2.9 1.8 1.8 2.8 4.2 2.8 6.8 0 5.4-4.3 9.7-9.7 9.7zm5.4-7.3c-.3-.1-1.8-.9-2-1s-.5-.1-.7.1c-.2.3-.8 1-1 1.2-.2.2-.4.2-.6.1-.3-.1-1.3-.5-2.5-1.5-.9-.8-1.6-1.8-1.8-2.1-.2-.3 0-.5.1-.6.1-.1.3-.4.5-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5s-.7-1.6-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4s-1 1-1 2.4 1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.3z"/>
      </svg>
      <span className="wa-fab__tip mono">WhatsApp</span>
    </motion.a>
  );
}
