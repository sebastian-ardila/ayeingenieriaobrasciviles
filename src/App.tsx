import { useEffect } from 'react';
import { Veil } from './components/Veil';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { BrandMark } from './components/BrandMark';
import { Identidad } from './components/Identidad';
import { Servicios } from './components/Servicios';
import { Proyectos } from './components/Proyectos';
import { Trayectoria } from './components/Trayectoria';
import { Cotizar } from './components/Cotizar';
import { Footer } from './components/Footer';
import { WhatsAppFab } from './components/WhatsAppFab';

export default function App() {
  // Smooth scroll para enlaces internos #ancla
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      const link = t.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!link) return;
      const id = link.getAttribute('href');
      if (!id || id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return (
    <>
      <Veil />
      <Nav />
      <main id="top">
        <Hero />
        <Marquee />
        <BrandMark />
        <Identidad />
        <Servicios />
        <Proyectos />
        <Trayectoria />
        <Cotizar />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
