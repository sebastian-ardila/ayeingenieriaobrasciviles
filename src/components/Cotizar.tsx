import { useState, type FormEvent, type ReactNode } from 'react';
import { Reveal } from './Reveal';

const WHATSAPP_NUMBER = '573128316239';
const WHATSAPP_URL    = `https://wa.me/${WHATSAPP_NUMBER}`;
const EMAIL           = 'ayeingenieriacivil@gmail.com';

interface TipoObra {
  value: string;
  label: string;
  icon: ReactNode;
}

const TIPOS: TipoObra[] = [
  {
    value: 'Movimiento de tierras',
    label: 'Movimiento de tierras',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M3 26h26M5 26v-6h6v6M13 26v-9l5-4 6 5v8" strokeLinejoin="round" />
        <circle cx="8"  cy="20" r="1.2" />
        <circle cx="22" cy="22" r="1.2" />
        <path d="M14 13l8-3M14 13l-2-3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    value: 'Cimentaciones / estructuras',
    label: 'Cimentaciones',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M4 28h24M6 28V12h4v16M14 28V8h4v20M22 28v-12h4v12" strokeLinejoin="round" />
        <path d="M3 12h26M3 8h26" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    value: 'Tanques y obras hidráulicas',
    label: 'Tanques · hidráulicas',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M16 4c-4 6-7 10-7 14a7 7 0 0014 0c0-4-3-8-7-14z" strokeLinejoin="round" />
        <path d="M11 18c1 2 3 3 5 3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    value: 'Vías y pavimentos',
    label: 'Vías y pavimentos',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M8 28L13 4M24 28L19 4" strokeLinejoin="round" />
        <path d="M16 8v2M16 14v2M16 20v2M16 26v.5" strokeLinecap="round" strokeWidth={2} />
      </svg>
    ),
  },
  {
    value: 'Diseño / consultoría',
    label: 'Diseño y consultoría',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M5 6h22v20H5z" />
        <path d="M5 11h22M11 6v5M19 6v5" strokeLinecap="round" />
        <path d="M9 17l5 5 9-9" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    value: 'Saneamiento básico',
    label: 'Saneamiento básico',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M4 12h10v8H4zM18 12h10v8H18z" strokeLinejoin="round" />
        <path d="M14 14v4M18 14v4" />
        <circle cx="9"  cy="16" r="1.3" />
        <circle cx="23" cy="16" r="1.3" />
        <path d="M4 24v3M28 24v3M9 8v3M23 8v3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    value: 'Otro',
    label: 'Otro / no estoy seguro',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <circle cx="16" cy="16" r="11" />
        <path d="M12 13a4 4 0 117 3c-1 1-3 1-3 3" strokeLinecap="round" />
        <circle cx="16" cy="23" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

function buildWhatsappMessage(form: FormData, tipo: string): string {
  const nombre   = (form.get('nombre')    || '').toString().trim();
  const contacto = (form.get('contacto')  || '').toString().trim();
  const lugar    = (form.get('lugar')     || '').toString().trim();
  const detalle  = (form.get('detalle')   || '').toString().trim();

  const lines = [
    '*Solicitud de cotización · A&E Ingeniería*',
    '',
    nombre   && `• Nombre: ${nombre}`,
    contacto && `• Contacto: ${contacto}`,
    tipo     && `• Tipo de obra: ${tipo}`,
    lugar    && `• Ubicación: ${lugar}`,
    detalle  && '',
    detalle  && `${detalle}`,
  ].filter(Boolean);

  return lines.join('\n');
}

export function Cotizar() {
  const [submitting, setSubmitting] = useState(false);
  const [tipo, setTipo] = useState<string>('');

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const data = new FormData(e.currentTarget);
    const text = encodeURIComponent(buildWhatsappMessage(data, tipo));
    const url  = `${WHATSAPP_URL}?text=${text}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setTimeout(() => setSubmitting(false), 600);
  };

  return (
    <section className="section section--cotizar" id="contacto">
      <header className="section__head">
        <Reveal as="span" kind="right" className="section__index mono">
          05 / COTIZAR · CONTACTO
        </Reveal>
        <Reveal as="h2" kind="mask" className="section__title">
          ¿Tiene un terreno,<br />una obra, una idea?
        </Reveal>
        <Reveal as="p" kind="up" className="section__lede">
          Cuéntenos los detalles y le respondemos por WhatsApp —
          generalmente el mismo día.
        </Reveal>
      </header>

      <div className="cotizar">
        {/* ───── Formulario ───── */}
        <Reveal as="div" kind="up" className="cotizar__form-wrap">
          <span className="mono cotizar__step">Paso 01 / Cuéntenos sobre la obra</span>
          <form className="cotizar__form" onSubmit={onSubmit}>
            <div className="field">
              <label htmlFor="f-nombre" className="mono">Nombre completo</label>
              <input id="f-nombre" name="nombre" type="text" autoComplete="name" required placeholder="Su nombre" />
            </div>

            <div className="field">
              <label htmlFor="f-contacto" className="mono">Teléfono o correo</label>
              <input id="f-contacto" name="contacto" type="text" placeholder="Para confirmar la conversación" />
            </div>

            <div className="field field--wide">
              <span className="mono">Tipo de obra</span>
              <div className="tipo-grid" role="radiogroup" aria-label="Tipo de obra">
                {TIPOS.map((t) => {
                  const active = tipo === t.value;
                  return (
                    <button
                      key={t.value}
                      type="button"
                      role="radio"
                      aria-checked={active}
                      className={`tipo${active ? ' tipo--active' : ''}`}
                      onClick={() => setTipo(t.value)}
                    >
                      <span className="tipo__icon" aria-hidden="true">{t.icon}</span>
                      <span className="tipo__label">{t.label}</span>
                      <span className="tipo__check" aria-hidden="true">
                        <svg viewBox="0 0 12 10" fill="none" stroke="currentColor" strokeWidth={2}>
                          <path d="M1 5l3.5 3.5L11 1" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="field field--wide">
              <label htmlFor="f-lugar" className="mono">Ubicación del proyecto</label>
              <input id="f-lugar" name="lugar" type="text" placeholder="Municipio / vereda / departamento" />
            </div>

            <div className="field field--wide">
              <label htmlFor="f-detalle" className="mono">Detalles</label>
              <textarea
                id="f-detalle"
                name="detalle"
                rows={4}
                placeholder="Ej. plataforma de 800 m² en pendiente, vaciado de placa, tanque de 200 m³..."
              />
            </div>

            <button type="submit" className="cotizar__submit" disabled={submitting}>
              <svg viewBox="0 0 24 24" width={20} height={20} aria-hidden="true" fill="currentColor">
                <path d="M20.5 3.5A11.9 11.9 0 0012 0C5.4 0 .1 5.4.1 11.9c0 2.1.5 4.1 1.6 5.9L0 24l6.3-1.7a11.8 11.8 0 005.7 1.4h0c6.6 0 11.9-5.4 11.9-11.9 0-3.2-1.2-6.2-3.4-8.3zM12 21.6a9.7 9.7 0 01-5-1.4l-.3-.2-3.7 1 1-3.7-.2-.4A9.8 9.8 0 012.3 12c0-5.4 4.4-9.7 9.7-9.7 2.6 0 5 1 6.9 2.9 1.8 1.8 2.8 4.2 2.8 6.8 0 5.4-4.3 9.7-9.7 9.7zm5.4-7.3c-.3-.1-1.8-.9-2-1s-.5-.1-.7.1c-.2.3-.8 1-1 1.2-.2.2-.4.2-.6.1-.3-.1-1.3-.5-2.5-1.5-.9-.8-1.6-1.8-1.8-2.1-.2-.3 0-.5.1-.6.1-.1.3-.4.5-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5s-.7-1.6-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4s-1 1-1 2.4 1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.3z"/>
              </svg>
              <span>{submitting ? 'Abriendo WhatsApp…' : 'Enviar solicitud por WhatsApp'}</span>
            </button>
            <p className="cotizar__note mono">
              Al enviar, su mensaje se abrirá en WhatsApp listo para confirmar.
              No se almacena nada en este sitio.
            </p>
          </form>
        </Reveal>

        {/* ───── Contacto directo ───── */}
        <Reveal as="div" kind="up" delay={0.12} className="cotizar__direct">
          <span className="mono cotizar__step">O directamente · sin formulario</span>

          <a className="cotizar__wa" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <span className="mono">CONTACTO DIRECTO</span>
            <strong>Hablemos ahora</strong>
            <span className="cotizar__wa-num">+57 312 831 6239</span>
            <svg className="cotizar__wa-icon" viewBox="0 0 24 24" width={36} height={36} aria-hidden="true" fill="currentColor">
              <path d="M20.5 3.5A11.9 11.9 0 0012 0C5.4 0 .1 5.4.1 11.9c0 2.1.5 4.1 1.6 5.9L0 24l6.3-1.7a11.8 11.8 0 005.7 1.4h0c6.6 0 11.9-5.4 11.9-11.9 0-3.2-1.2-6.2-3.4-8.3zM12 21.6a9.7 9.7 0 01-5-1.4l-.3-.2-3.7 1 1-3.7-.2-.4A9.8 9.8 0 012.3 12c0-5.4 4.4-9.7 9.7-9.7 2.6 0 5 1 6.9 2.9 1.8 1.8 2.8 4.2 2.8 6.8 0 5.4-4.3 9.7-9.7 9.7zm5.4-7.3c-.3-.1-1.8-.9-2-1s-.5-.1-.7.1c-.2.3-.8 1-1 1.2-.2.2-.4.2-.6.1-.3-.1-1.3-.5-2.5-1.5-.9-.8-1.6-1.8-1.8-2.1-.2-.3 0-.5.1-.6.1-.1.3-.4.5-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5s-.7-1.6-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4s-1 1-1 2.4 1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.3z"/>
            </svg>
          </a>

          <div className="cotizar__extras">
            <a className="cotizar__extra" href={`mailto:${EMAIL}`}>
              <span className="mono">CORREO</span>
              <strong>{EMAIL}</strong>
            </a>
            <div className="cotizar__extra cotizar__extra--static">
              <span className="mono">OFICINA</span>
              <strong>Colombia · ciudad por confirmar</strong>
              <span className="mono cotizar__hours">L–V · 7:00 → 17:30</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
