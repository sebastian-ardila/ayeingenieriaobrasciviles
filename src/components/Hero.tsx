import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Reveal } from './Reveal';
import { asset } from '../utils/asset';

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 60]);

  return (
    <section className="hero" ref={ref}>
      <div className="hero__grid">
        <motion.p
          className="hero__eyebrow mono"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.55, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <span className="hero__pulse" />
          DESDE LAS MONTAÑAS DE COLOMBIA
        </motion.p>

        <h1 className="hero__title" aria-label="A&E Ingeniería Obras Civiles">
          <motion.span
            className="hero__line"
            initial={{ clipPath: 'inset(0 100% 0 0)' }}
            animate={{ clipPath: 'inset(0 0% 0 0)' }}
            transition={{ duration: 1.2, delay: 1.55, ease: [0.7, 0, 0.15, 1] }}
            style={{ display: 'block', overflow: 'hidden' }}
          >
            <span className="hero__word">A<em className="amp">&amp;</em>E</span>
            <span className="hero__word hero__word--ital"><i>Ingeniería</i></span>
          </motion.span>
          <motion.span
            className="hero__line hero__line--sub"
            initial={{ clipPath: 'inset(0 100% 0 0)' }}
            animate={{ clipPath: 'inset(0 0% 0 0)' }}
            transition={{ duration: 1.2, delay: 1.78, ease: [0.7, 0, 0.15, 1] }}
            style={{ display: 'flex' }}
          >
            <span className="hero__word hero__word--outline">Obras</span>
            <span className="hero__word hero__word--outline">Civiles</span>
          </motion.span>
        </h1>

        <Reveal kind="up" delay={2.0} className="hero__lede">
          <p>
            Construimos la infraestructura que sostiene el campo: vías,
            cimentaciones, tanques y movimientos de tierra entre laderas,
            ríos y veredas. <span className="amp-glyph">&amp;</span> cada metro
            cúbico se piensa dos veces.
          </p>
        </Reveal>

        <Reveal as="div" kind="up" delay={2.15}>
          <ul className="hero__stats mono">
            <li><b>Maquinaria</b><span>propia en obra</span></li>
            <li><b>Diseño</b><span>+ construcción</span></li>
            <li><b>Campo</b><span>antes que papel</span></li>
          </ul>
        </Reveal>

        <motion.a
          href="#identidad"
          className="hero__scroll"
          aria-label="Bajar al contenido"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.4 }}
        >
          <span className="mono">SCROLL</span>
          <svg viewBox="0 0 12 60" width={12} height={60} aria-hidden="true">
            <line x1={6} y1={0} x2={6} y2={50} stroke="currentColor" strokeWidth={1} />
            <polyline points="2,46 6,52 10,46" fill="none" stroke="currentColor" strokeWidth={1} />
          </svg>
        </motion.a>
      </div>

      <motion.figure
        className="hero__figure"
        initial={{ clipPath: 'inset(0 0 100% 0)' }}
        animate={{ clipPath: 'inset(0 0 0% 0)' }}
        transition={{ duration: 1.4, delay: 1.5, ease: [0.7, 0, 0.15, 1] }}
      >
        <motion.img
          src={asset('aye3.webp')}
          alt="Construcción de tanque de almacenamiento en zona montañosa"
          loading="eager"
          initial={{ scale: 1.18 }}
          animate={{ scale: 1.06 }}
          style={{ y }}
          transition={{ duration: 1.8, delay: 1.5, ease: [0.7, 0, 0.15, 1] }}
        />
      </motion.figure>

      <div className="hero__crosshair" aria-hidden="true">
        <span className="cross cross--tl" />
        <span className="cross cross--tr" />
        <span className="cross cross--bl" />
        <span className="cross cross--br" />
      </div>
    </section>
  );
}
