import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Reveal } from './Reveal';

interface Figure {
  target: number;
  pad: number;
  label: string;
  big?: boolean;
  plus?: boolean;
  unit?: string;
}

const FIGURES: Figure[] = [
  { target: 240, pad: 3, label: 'm³ de tierra movida y compactada', big: true, unit: 'k' },
  { target: 86,  pad: 2, label: 'proyectos entregados',             plus: true },
  { target: 6,   pad: 2, label: 'departamentos atendidos' },
];

function Counter({ target, pad }: { target: number; pad: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const motionVal = useMotionValue(0);
  const rounded = useTransform(motionVal, (v) =>
    String(Math.round(v)).padStart(pad, '0')
  );

  useEffect(() => {
    if (!inView) return;
    const controls = animate(motionVal, target, {
      duration: 1.6,
      ease: [0.2, 0.8, 0.2, 1],
    });
    return controls.stop;
  }, [inView, motionVal, target]);

  return <motion.span ref={ref} className="figure__num">{rounded}</motion.span>;
}

export function Trayectoria() {
  return (
    <section className="section section--trayectoria" id="trayectoria">
      <header className="section__head section__head--center">
        <Reveal as="span" kind="right" className="section__index mono">
          04 / TRAYECTORIA
        </Reveal>
        <Reveal as="h2" kind="mask" className="section__title section__title--center">
          Cifras que no <i>se inventan</i>.
        </Reveal>
      </header>

      <div className="figures">
        {FIGURES.map((f, i) => (
          <Reveal
            as="div"
            kind="up"
            delay={i * 0.1}
            key={i}
            className={`figure${f.big ? ' figure--big' : ''}`}
          >
            <span className="figure__num-row">
              <Counter target={f.target} pad={f.pad} />
              {f.unit && <span className="figure__unit">{f.unit}</span>}
              {f.plus && <span className="figure__plus">+</span>}
            </span>
            <span className="figure__label mono">{f.label}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
