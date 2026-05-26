import { Reveal } from './Reveal';

interface Service {
  num: string;
  name: string;
  italic?: string;
  desc: string;
}

const SERVICES: Service[] = [
  {
    num: '001',
    name: 'Movimiento de tierras',
    desc: 'Cortes, rellenos, descapote, terraplenes y conformación de plataformas en pendiente. Excavadoras, retros y volquetas propias.',
  },
  {
    num: '002',
    name: 'Cimentaciones',
    italic: '& estructuras',
    desc: 'Zapatas, vigas de amarre, columnas, losas y muros de contención. Concreto controlado y acero certificado.',
  },
  {
    num: '003',
    name: 'Tanques y obras hidráulicas',
    desc: 'Reservorios, tanques de almacenamiento, captaciones, redes y geomembrana. Soluciones de agua para fincas y acueductos veredales.',
  },
  {
    num: '004',
    name: 'Vías y pavimentos',
    desc: 'Apertura, mejoramiento y placa-huella de vías terciarias. Cunetas, alcantarillas y obras de drenaje vial.',
  },
  {
    num: '005',
    name: 'Diseño y consultoría',
    desc: 'Estudios de suelos, levantamientos topográficos, presupuestos y diseños estructurales. Lo que se va a construir, antes de construirlo.',
  },
  {
    num: '006',
    name: 'Saneamiento básico',
    desc: 'PTAR rurales, pozos sépticos, redes de alcantarillado y disposición final. Cumplimiento normativo y vida útil real.',
  },
];

export function Servicios() {
  return (
    <section className="section section--servicios" id="servicios">
      <header className="section__head">
        <Reveal as="span" kind="right" className="section__index mono">
          02 / SERVICIOS
        </Reveal>
        <Reveal as="h2" kind="mask" className="section__title">
          Seis capítulos de obra<br />en un solo equipo.
        </Reveal>
      </header>

      <ol className="services">
        {SERVICES.map((s, i) => (
          <Reveal as="li" key={s.num} kind="row" delay={i * 0.06} className="service">
            <span className="service__num mono">{s.num}</span>
            <h3 className="service__name">
              {s.name}{s.italic && <> <i>{s.italic}</i></>}
            </h3>
            <p className="service__desc">{s.desc}</p>
            <span className="service__arrow" aria-hidden="true">→</span>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
