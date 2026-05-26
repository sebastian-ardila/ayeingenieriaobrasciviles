import { asset } from '../utils/asset';

const NAV = [
  { href: '#identidad',   label: 'Identidad' },
  { href: '#servicios',   label: 'Servicios' },
  { href: '#proyectos',   label: 'Proyectos' },
  { href: '#trayectoria', label: 'Trayectoria' },
  { href: '#contacto',    label: 'Cotizar' },
];

const SERVICES = [
  'Movimiento de tierras',
  'Cimentaciones',
  'Tanques · hidráulicas',
  'Vías y pavimentos',
  'Diseño y consultoría',
  'Saneamiento básico',
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="foot">
      <div className="foot__grid">
        {/* Marca */}
        <div className="foot__brand-col">
          <a className="foot__brand" href="#top">
            <span className="foot__brand-plate" aria-hidden="true">
              <img src={asset('aye0.webp')} alt="" />
            </span>
            <span className="foot__brand-text">
              <b>A<em>&amp;</em>E Ingeniería</b>
              <i>Obras Civiles</i>
            </span>
          </a>
          <p className="foot__tagline">
            Construimos infraestructura que perdura en zonas rurales
            y de montaña de Colombia.
          </p>
        </div>

        {/* Navegación */}
        <nav className="foot__col" aria-label="Pie">
          <h4 className="foot__heading mono">Sitio</h4>
          <ul>
            {NAV.map((l) => (
              <li key={l.href}><a href={l.href}>{l.label}</a></li>
            ))}
          </ul>
        </nav>

        {/* Servicios */}
        <div className="foot__col">
          <h4 className="foot__heading mono">Servicios</h4>
          <ul>
            {SERVICES.map((s) => (
              <li key={s}><a href="#servicios">{s}</a></li>
            ))}
          </ul>
        </div>

        {/* Contacto */}
        <div className="foot__col foot__col--contact">
          <h4 className="foot__heading mono">Contacto</h4>
          <ul>
            <li>
              <a
                className="foot__contact-link foot__contact-link--wa"
                href="https://wa.me/573128316239"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" width={16} height={16} fill="currentColor" aria-hidden="true">
                  <path d="M20.5 3.5A11.9 11.9 0 0012 0C5.4 0 .1 5.4.1 11.9c0 2.1.5 4.1 1.6 5.9L0 24l6.3-1.7a11.8 11.8 0 005.7 1.4c6.6 0 11.9-5.4 11.9-11.9 0-3.2-1.2-6.2-3.4-8.3zM12 21.6a9.7 9.7 0 01-5-1.4l-.3-.2-3.7 1 1-3.7-.2-.4A9.8 9.8 0 012.3 12c0-5.4 4.4-9.7 9.7-9.7 5.4 0 9.7 4.3 9.7 9.7 0 5.4-4.3 9.7-9.7 9.7z"/>
                </svg>
                <span>WhatsApp · +57 312 831 6239</span>
              </a>
            </li>
            <li>
              <a className="foot__contact-link" href="mailto:ayeingenieriacivil@gmail.com">
                <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden="true">
                  <rect x="3" y="5" width="18" height="14" rx="1.5" />
                  <path d="M3 7l9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>ayeingenieriacivil@gmail.com</span>
              </a>
            </li>
            <li>
              <span className="foot__contact-link foot__contact-link--static">
                <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden="true">
                  <circle cx="12" cy="10" r="3" />
                  <path d="M12 22s7-7 7-12a7 7 0 10-14 0c0 5 7 12 7 12z" strokeLinejoin="round" />
                </svg>
                <span>Colombia · ciudad por confirmar</span>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="foot__bottom mono">
        <span>© {year} A&amp;E Ingeniería Obras Civiles · Todos los derechos reservados</span>
        <span>Hecho con criterio</span>
      </div>
      <div className="foot__giant" aria-hidden="true">A&amp;E</div>
    </footer>
  );
}
