import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Reveal } from './Reveal';
import { asset } from '../utils/asset';

interface Project {
  id: string;
  tag: string;
  title: string;
  italic?: string;
  desc: string;
  image: string;
}

const PROJECTS: Project[] = [
  {
    id: '01',
    tag: 'EARTHWORKS',
    title: 'Conformación de plataforma',
    italic: 'en ladera',
    desc: '12.400 m³ de movimiento de tierras y estabilización de talud para vivienda rural de tres niveles. Control topográfico diario.',
    image: 'aye1.webp',
  },
  {
    id: '02',
    tag: 'FOUNDATION',
    title: 'Cimentación reforzada',
    italic: 'bajo cubierta provisional',
    desc: 'Sistema de zapatas aisladas con vigas de amarre y muro de contención en bloque estructural. Vaciado en temporada de lluvias bajo carpa de obra.',
    image: 'aye2.webp',
  },
  {
    id: '03',
    tag: 'WATER',
    title: 'Reservorio de 480 m³ con',
    italic: 'geomembrana HDPE',
    desc: 'Excavación, conformación y sello con geomembrana de 1.0 mm para suministro agrícola permanente. Cota 1.840 msnm.',
    image: 'aye3.webp',
  },
];

function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!ref.current) return;
    if (!window.matchMedia('(pointer:fine)').matches) return;
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    ref.current.style.transform = `perspective(900px) rotateX(${-py * 2.2}deg) rotateY(${px * 2.2}deg)`;
  };

  const handleMouseLeave = () => {
    if (ref.current) ref.current.style.transform = '';
  };

  return (
    <Reveal
      as="article"
      kind="up"
      delay={delay}
      className="project"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <figure className="project__figure" ref={ref}>
        <img src={asset(project.image)} alt={project.title} loading="lazy" />
        <span className="project__tag mono">{project.tag}</span>
      </figure>
      <div className="project__meta mono">
        <span>Caso {project.id}</span>
      </div>
      <h3 className="project__title">
        {project.title}{project.italic && <> <i>{project.italic}</i></>}
      </h3>
      <p className="project__desc">{project.desc}</p>
    </Reveal>
  );
}

export function Proyectos() {
  return (
    <section className="section section--proyectos" id="proyectos">
      <header className="section__head">
        <Reveal as="span" kind="right" className="section__index mono">
          03 / PROYECTOS
        </Reveal>
        <Reveal as="h2" kind="mask" className="section__title">
          <motion.span><i>Obra</i> reciente.</motion.span>
        </Reveal>
        <Reveal as="p" kind="up" className="section__lede">
          Una selección de intervenciones donde geología, presupuesto y
          plazo se alinearon — porque se forzó a que se alinearan.
        </Reveal>
      </header>

      <div className="projects">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.id} project={p} delay={i * 0.1} />
        ))}
      </div>
    </section>
  );
}
