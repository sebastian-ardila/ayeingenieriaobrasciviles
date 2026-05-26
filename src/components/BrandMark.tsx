import { motion } from 'framer-motion';
import { Reveal } from './Reveal';
import { asset } from '../utils/asset';

/**
 * Sección de marca dedicada — exhibe el logo a tamaño grande con
 * sus colores originales (sobre fondo crema), como un "sello"
 * de la empresa. Funciona como ancla visual entre el hero y el
 * resto del sitio.
 */
export function BrandMark() {
  return (
    <section className="brandmark" aria-label="Identidad de marca">
      <div className="brandmark__inner">
        <motion.div
          className="brandmark__plate"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.9, ease: [0.7, 0, 0.15, 1] }}
        >
          <img
            src={asset('aye0.webp')}
            alt="A&E Ingeniería · Obras Civiles — logotipo"
          />
        </motion.div>

        <div className="brandmark__meta">
          <Reveal as="span" kind="right" className="mono brandmark__label">
            ISOLOGO
          </Reveal>
          <Reveal as="p" kind="up" className="brandmark__copy">
            El puente sobre el cauce no es decoración:
            es la metáfora exacta de lo que hacemos.
            Conectar dos orillas con una estructura que
            <i> no se mueve.</i>
          </Reveal>
          <Reveal as="div" kind="up" delay={0.12}>
            <dl className="brandmark__specs mono">
              <div><dt>Razón social</dt><dd>A&amp;E Ingeniería · Obras Civiles</dd></div>
              <div><dt>NIT</dt><dd>por confirmar</dd></div>
              <div><dt>Cobertura</dt><dd>Colombia · zonas rurales y de montaña</dd></div>
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
