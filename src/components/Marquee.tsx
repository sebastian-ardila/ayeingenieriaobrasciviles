const ITEMS = [
  'Movimiento de tierras',
  'Cimentaciones',
  'Tanques & reservorios',
  'Vías rurales',
  'Obras hidráulicas',
  'Estructuras en concreto',
];

export function Marquee() {
  // Duplicamos los items para que el loop sea continuo
  const items = [...ITEMS, ...ITEMS];
  return (
    <section className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {items.map((s, i) => (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 36 }}>
            <span>{s}</span>
            <i>◆</i>
          </span>
        ))}
      </div>
    </section>
  );
}
