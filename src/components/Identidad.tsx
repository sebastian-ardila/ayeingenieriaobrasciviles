import { motion } from 'framer-motion';
import { Reveal } from './Reveal';
import { asset } from '../utils/asset';

export function Identidad() {
  return (
    <section className="section section--identidad" id="identidad">
      <header className="section__head">
        <Reveal as="span" kind="right" className="section__index mono">
          01 / IDENTIDAD
        </Reveal>
        <Reveal as="h2" kind="mask" className="section__title">
          Una firma que <i>nació</i> entre{' '}
          <span className="underline-art">veredas</span>,
          puentes y caudales.
        </Reveal>
      </header>

      <div className="identidad__body">
        <motion.figure
          className="identidad__media"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.9, ease: [0.7, 0, 0.15, 1] }}
        >
          <img
            src={asset('aye1.webp')}
            alt="Excavadora trabajando en ladera de montaña"
          />
          <span className="identidad__sticker mono">FIELDWORK</span>
        </motion.figure>

        <div className="identidad__copy">
          <Reveal as="p" kind="up">
            <b>A&amp;E Ingeniería</b> nace con una premisa simple:
            llevar obra civil seria a los lugares donde el terreno manda.
            Operamos en municipios de montaña, donde la pendiente, el agua
            y el clima dictan las reglas — y donde una obra bien hecha
            cambia la economía de toda una comunidad.
          </Reveal>
          <Reveal as="p" kind="up" delay={0.12}>
            Combinamos maquinaria propia, criterio de campo y{' '}
            <i className="ital">disciplina técnica</i>. Diseñamos lo que se
            construye y construimos lo que se diseña: sin intermediarios,
            sin promesas de papel.
          </Reveal>

          <Reveal as="div" kind="up" delay={0.24}>
            <dl className="identidad__principles mono">
              <div><dt>I.</dt><dd>Topografía antes que opinión.</dd></div>
              <div><dt>II.</dt><dd>Hormigón a la dosificación correcta.</dd></div>
              <div><dt>III.</dt><dd>Entrega cuando se entrega, no antes.</dd></div>
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
