import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

/**
 * Cortina de entrada — 5 paneles que se enrollan hacia arriba
 * con un stagger para revelar el sitio. Se desmonta tras la animación.
 */
export function Veil() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1900);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div className="veil" aria-hidden="true" exit={{ opacity: 0 }}>
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              className="veil__panel"
              initial={{ scaleY: 1 }}
              animate={{ scaleY: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.35 + i * 0.13,
                ease: [0.7, 0, 0.15, 1],
              }}
            />
          ))}
          <motion.div
            className="veil__mark"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: [0, 1, 0], scale: [0.7, 1, 1.4] }}
            transition={{ duration: 1.3, ease: 'easeInOut' }}
          >
            <svg viewBox="0 0 24 24" width={44} height={44} aria-hidden="true">
              <circle cx={12} cy={12} r={10} fill="none" stroke="currentColor" strokeWidth={1} />
              <path d="M2 14 H22" stroke="currentColor" strokeWidth={1} fill="none" />
            </svg>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
