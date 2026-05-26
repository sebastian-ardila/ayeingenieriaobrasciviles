import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { asset } from '../utils/asset';

const links = [
  { id: '01', href: '#identidad',    label: 'Identidad' },
  { id: '02', href: '#servicios',    label: 'Servicios' },
  { id: '03', href: '#proyectos',    label: 'Proyectos' },
  { id: '04', href: '#trayectoria',  label: 'Trayectoria' },
  { id: '05', href: '#contacto',     label: 'Cotizar' },
];

export function Nav() {
  const [stuck, setStuck]   = useState(false);
  const [open,  setOpen]    = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /**
   * El header NO usa <motion> directamente porque framer-motion
   * deja un transform residual que convierte al header en el bloque
   * contenedor de cualquier descendiente position:fixed (rompiendo
   * el CTA pegado al bottom del menú móvil). El animado va en una
   * capa interna inocua.
   */
  return (
    <header className={`nav${stuck ? ' is-stuck' : ''}${open ? ' is-open' : ''}`}>
      <motion.a
        className="nav__brand"
        href="#top"
        aria-label="A&E Ingeniería Obras Civiles"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.4, ease: [0.2, 0.8, 0.2, 1] }}
      >
        <span className="nav__brand-plate" aria-hidden="true">
          <img src={asset('aye0.webp')} alt="" width={54} height={54} />
        </span>
        <span className="nav__brand-text">
          <span className="nav__brand-name">A<em>&amp;</em>E</span>
          <span className="nav__brand-sub">Ingeniería · Obras Civiles</span>
        </span>
      </motion.a>

      <nav className="nav__menu" aria-label="Principal">
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            <span className="mono">{l.id}</span> {l.label}
          </a>
        ))}
      </nav>

      <a className="nav__cta" href="#contacto" onClick={() => setOpen(false)}>
        <span>Cotizar obra</span>
        <svg viewBox="0 0 24 24" width={16} height={16} aria-hidden="true">
          <path d="M5 12 H19 M13 6 L19 12 L13 18" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="square" />
        </svg>
      </a>

      <button
        className="nav__burger"
        type="button"
        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span /><span /><span />
      </button>
    </header>
  );
}
