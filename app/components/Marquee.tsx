const items = [
  "Walk like a king",
  "New season",
  "Free shipping over $150",
  "Kingstep One is here",
];

export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {[0, 1].map((g) =>
          items.map((t) => <span key={`${g}-${t}`}>{t} ✦</span>)
        )}
      </div>
    </div>
  );
}